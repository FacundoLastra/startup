
function fullLoad() {
    let element = document.getElementById("hidden");
    element.hidden = false;
}

function formatParams(params) { /// format params
    return "?" + Object
        .keys(params)
        .map(function (key) {
            return key + "=" + encodeURIComponent(params[key])
        })
        .join("&")
}
/// only support get and post
function getForApi(config) {
    let promese = new Promise( (resolve, reject) => { ///creating a new promese
        if (config.url && config.method) {
            try {
                let http_request;
                if (window.XMLHttpRequest) {
                    // code for modern browsers
                    http_request = new XMLHttpRequest();
                    if (config.method == "GET") { ///method validation
                        if (config.params) { /// adding params to the url
                            config.url = config.url + formatParams(config.params);
                        }
                        http_request.open(config.method, config.url, true);
                        http_request.send();
                    } else if (config.method == "POST") {
                        if (config.data) {
                            let json = JSON.stringify(config.data); /// the data is converted into json to be sent
                            http_request.open(config.method, config.url, true);
                            http_request.setRequestHeader('Content-type', 'application/json');
                            http_request.send(json); // the request is sent with the json
                        } else {
                            throw new Error("data not found in the post method");
                        }
                    } else {
                        throw new Error("Sorry only GET and POST methods are soported");
                    }
                    http_request.onreadystatechange = function () { /// for browser compatibility
                        if (http_request.readyState == 4) { //waiting for the done response
                            if (http_request.status == 200) { //petition OK
                                resolve(JSON.parse(http_request.response)); ///la respuesta es convertida en json 
                            } else {
                                throw new Error("error whit the petition " + http_request.status);
                            }
                        }
                    }
                } else {
                    throw new Error('error creating the request instance - Browser not supported ');
                }

            } catch (error) {
                reject(error);
            }

        }
    });
    return promese;
}

function getRepositorys(value) {
    let confirm = false;
    let config = {
        method: "GET",
        data: {},
        url: "https://api.github.com/search/repositories",
        params: {
            q: value
        }
    };
    const response = getForApi(config);
    response.then((succesResponse) => {
        if(succesResponse.items.length > 0){ /// if i have repos
            addRepositorysToDom(succesResponse.items);
            searchRepositoryEvent(); // adding event to search in obtained repositorys
        }else{
            displayError("We could not find repositories");
        }
    }).catch((error) => {
        console.log(error);
        displayError("We have had problems with the server.");
    })
}

function displayError(message){
    const hiddenDiv = document.getElementById("hiddenList");
    const errorsDiv = document.getElementById("searchErrors");
    hiddenDiv.hidden = true;
    let error = document.createElement("p");
    error.classList.add("error");
    error.innerHTML = message;
    errorsDiv.appendChild(error);
}

function addRepositorysToDom(repositoryArray) {
    if (repositoryArray.length > 0) {
        const ul = document.getElementById("repositorys"); ///obtaining the ul that will contain the repos
        const hiddenDiv = document.getElementById("hiddenList") 
        repositoryArray.forEach((repo) => {  
            let node = document.createElement("li"); /// creating a new "li" that contains a link with the repo
            let link = document.createElement('a');
            link.setAttribute('href', repo.html_url);
            link.innerHTML = repo.full_name;
            node.appendChild(link);
            ul.appendChild(node);
        })
        hiddenDiv.hidden = false;
    }
}
function searchRepositoryEvent(){
    const input = document.getElementById("search"); 
    input.addEventListener('keyup', (letter) => { /// event to search repos in the page
        const letterToLower = letter.target.value.toLowerCase();
        const repositorys = document.querySelectorAll(".repositorys li");
        Array.from(repositorys).forEach((repository) => {
            let repositoryName = repository.firstElementChild.textContent;
            if(repositoryName.toLowerCase().includes(letterToLower)){
                repository.hidden = false;
            }else{
                repository.hidden = true;
            }
        })
    });
}
function deleteAllChild(id){
    const elementWhitChild = document.getElementById(id);
    while( elementWhitChild.firstChild ){
        elementWhitChild.removeChild( elementWhitChild.firstChild );
      }
}
function newReposSearch(){ /// get repos with specific param
    const data = document.getElementById("languageSearch");
    deleteAllChild("searchErrors"); /// deleted old errors
    if(data.value.length > 0){
        deleteAllChild("repositorys"); /// deleted old repositorys
        getRepositorys(data.value);
        data.value = "";
    }else
    {
        data.placeholder = "Please Enter a valid value"
    }
}


getRepositorys();
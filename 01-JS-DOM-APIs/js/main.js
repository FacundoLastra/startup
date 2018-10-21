
function fullLoad() {
    let element = document.getElementById("hidden");
    element.hidden = false;
}

function getJokeforApi() {

    const url = "http://api.icndb.com/jokes/random";
    const method = "GET";
    try {
        let http_request;
        //for old IE browsers we need use activeXObject
        if (window.XMLHttpRequest) {
            // code for modern browsers
            http_request = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) { }
            }
        }
        if (http_request) {
            // this function first need the method, the url and the last boolean atribute is for do a asynchronous petition
            http_request.open(method, url, true)
            http_request.send();
            http_request.onreadystatechange = function () { /// for browser compatibility
                if (http_request.readyState == 4) { //waiting for the done response
                    if (http_request.status == 200) { //petition OK
                        let response;
                        response = JSON.parse(http_request.response);
                        document.getElementById("joke").innerHTML = response.value.joke;
                    } else {
                        throw new Error("error whit the petition" + http_request.status);
                    }
                }
            }
        }
        else {
            throw new Error('error creating the request instance - Browser not supported ');
        }

    } catch (errors) {
        console.log(errors);
        document.getElementById("joke").setAttribute("class", "error");
        document.getElementById("joke").innerHTML = "sorry today we have problems with the jokes";
    }

}


function formatParams(params) {
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
        addRepositorysToDom(succesResponse.items);
        searchRepository(); // adding event to search repositorys
    }).catch((error) => {
        console.log(error);
    })
}
function addRepositorysToDom(repositoryArray) {
    if (repositoryArray) {
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
function searchRepository(){
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
getRepositorys();

function newReposSearch(){ /// get repos with specific param
    const data = document.getElementById("languageSearch");
    const ul = document.getElementById("repositorys");
    if(data.value.length > 0){
        while( ul.firstChild ){ /// deleted the old repos
            ul.removeChild( ul.firstChild );
          }
          getRepositorys(data.value);
          data.value = "";
    }else
    {
        data.placeholder = "Please Enter a valid lenguaje"
    }
}

function matrixToTable(matrix){
    if(matrix){
        let head = true; ///flag to create the header of the table
        const element = document.getElementById("table");
        const table = document.createElement("table");
        Array.from(matrix).forEach( (row) => { // first forEach, for each row
            let newRow = document.createElement("tr");
            let newColum, textNode;
            if(head){ // if head is true, the heads will be created
                Array.from(row).forEach((column) => { // for each column do..
                    newRow.appendChild(createElementForTable("th",column));
                })
                head = false;
            }else{
                Array.from(row).forEach((column) => {
                    newRow.appendChild(createElementForTable("td",column));
                })
            }
            table.appendChild(newRow);

        })
        element.appendChild(table);
    }
}

function createElementForTable(elementToCreate, value){
    newColum = document.createElement(elementToCreate);
    textNode = document.createTextNode(value);
    newColum.appendChild(textNode);
    return newColum;
}

function testMatrix(){
    let matrix = [],
    H = 4, // 4 rows
    W = 3; // of 6 cells
    let headers = true;
    matrix[0] = ["Header 1", "Header 2", "Header 3"]
    for ( let y = 1; y < H; y++ ) {
        matrix[ y ] = [];
        for ( let x = 0; x < W; x++ ) {
            matrix[ y ][ x ] = Math.floor(Math.random() * 200);
        }
    }
    matrixToTable(matrix);
}

testMatrix();
 
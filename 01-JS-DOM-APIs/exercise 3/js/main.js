
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


function formatParams(params) { /// formatting of parameters to be adhered to the url
    return "?" + Object
        .keys(params)
        .map(function (key) {
            return key + "=" + encodeURIComponent(params[key])
        })
        .join("&")
}

/* 
    config structure
        method: "GET",
        data: {}, // for POST.
        url: "https://api.github.com/search/repositories",
        params: {
            q: value
        }
*/
function getForApi(config) { /// only support get and post
    const promese = new Promise( (resolve, reject) => { ///creating a new promese
        if (config.url && config.method) {
            try {
                let http_request;
                if (window.XMLHttpRequest) {
                    http_request = new XMLHttpRequest();
                    if (config.method == "GET") { ///method validation
                        if (config.params) { /// adding params to the url
                            config.url = config.url + formatParams(config.params); /// adding params to the url
                        }
                        http_request.open(config.method, config.url, true);
                        http_request.send();
                    } else if (config.method == "POST") { ///At first I thought that the api of repositories were going to be by POST, for that reason I added support to this function
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
                    http_request.onreadystatechange = function () { 
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

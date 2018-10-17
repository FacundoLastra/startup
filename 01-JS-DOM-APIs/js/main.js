
function fullLoad() {
    let element = document.getElementById("hidden");
    element.hidden = false;
}
/*
function getReponse() {
    const url = "http://api.icndb.com/jokes/random";
    await getDataforApi(Url, {})
        .then(res => {
            let element = document.getElementById("joke");
            element.innerHTML = res.value.joke;
        })
        .catch(err => { console.log(err) })
}
*/
function getJokeforApi() {

    const url = "http://api.icndb.com/jokes/random";
    const method = "GET";
    let joke = "sorry today we have problems with the jokes"
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
            http_request.send(null);
            http_request.onreadystatechange = function () {
                if (http_request.readyState == 4) { //done response
                    if (http_request.status == 200) { //petition OK
                        let response;
                        response = JSON.parse(http_request.response);
                        joke = response.value.joke;
                        document.getElementById("joke").innerHTML = joke;
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
        document.getElementById("joke").innerHTML = joke;
    }

}
/*

function getDataforApi(url, config) {
    if (url && config) {
        fetch(url, config)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
    }
}
*/
/*
function getReponse(){
    const Url = "http://api.icndb.com/jokes/random"
    fetch(Url)
    .then(data=>{
        if(data.ok){
            return data.json()
        }
        throw new Error('something went wrong!');        
    })
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
}
*/
function fullLoad(){
    let element = document.getElementById("hidden");
    element.hidden = false;
}
function getReponse(){
    const Url = "http://api.icndb.com/jokes/random"
    fetch(Url)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
}
function alertUser(){
    alert("you are clicked the botton")
}
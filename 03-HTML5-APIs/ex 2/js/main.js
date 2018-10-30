function deleteDropMessage(event){
    preventPropagation(event);
}
function preventPropagation(event){
    event.stopPropagation();
    event.preventDefault();
}
function dropHandler(event){
    preventPropagation(event);
    const files = event.dataTransfer.files; ///getting the file
    if(files){
        for(let i = 0; i< files.length; i++){
            readFile(files[i],files[i].name) ///read the file and adding to the dom
        }
    }
}

function readFile(file,fileName){
    const fr = new FileReader();
    fr.readAsText(file);
    fr.onloadend = function(){
        addDataToDom(fileName,fr.result);
    }
    fr.onerror = function(){
        console.log("error read the file");
    }
}

function addDataToDom(fileName,data){
    const doc = document.getElementById("textData");
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`File Name: ${fileName}`));
    p.appendChild(document.createTextNode(` Content: ${data}`));
    doc.appendChild(p);
}
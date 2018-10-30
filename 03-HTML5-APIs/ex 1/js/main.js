function saveDataIndexDB(data) {
    if (window.indexedDB) {
        const request = window.indexedDB.open("messages", 1); ///open the DB, messages is the DB name and 1 the version
        request.onerror = function (error) { /// if error
            console.log("error");
        };
        request.onsuccess = function (dbOpened) { // if succesfull open
            const objectStore = getobjectStore(dbOpened);
            const db_op_req = objectStore.add(data.value); /// addind the data
            db_op_req.onsuccess = function (succes) {
                alert("data saved");
                location.reload(); /// reload the page.
            }
            db_op_req.onerror = function (err) {
                console.log("error in operation");
            }
        };
        request.onupgradeneeded = function (event) { /// create the "table" for the objects if not exist
            const targetResoult = event.target.result;
            targetResoult.createObjectStore("messagesStore", { autoIncrement: true });
        }

    }
}

function getobjectStore(dbOpened) {
    const db = dbOpened.target.result;
    const transaction = db.transaction('messagesStore', 'readwrite');
    const objectStore = transaction.objectStore("messagesStore");
    return objectStore;
}


function deleteDataInIndexDb() {
    const request = window.indexedDB.open("messages", 1);
    request.onerror = function (error) {
        console.log("error");
    };
    request.onsuccess = function (dbOpened) {
        const objectStore = getobjectStore(dbOpened);
        const result = objectStore.clear();
        result.onsuccess = function (event) {
            alert("data deleted ");
            location.reload();
        }
    };
}

function getindexDbData() {
    if (window.indexedDB) {
        // Abrimos la DB
        const request = window.indexedDB.open("messages", 1);
        request.onsuccess = function (dbOpened) {
            const objectStore = getobjectStore(dbOpened);
            const consult = objectStore.getAll();
            consult.onsuccess = function (succes) {
                addMessagesToDom(succes.target.result, "indexDbData");
            }
        };
        request.onupgradeneeded = function (event) { /// create de "table" for the objects
            const targetResoult = event.target.result;
            const objectStore = targetResoult.createObjectStore("messagesStore", { autoIncrement: true });
        }
    }
}

function clearAllStorageData() {
    deleteDatainLocalStorage();
    deleteDataInIndexDb();
}


function saveDataInLocalStorage(data) {
    let items = JSON.parse(localStorage.getItem('messages'));
    if (!Array.isArray(items)) {
        items = [];
    }
    items.push(data.value);
    localStorage.setItem('messages', JSON.stringify(items));
}

function deleteDatainLocalStorage() {
    localStorage.clear();
}

function getLocalStorageData() {
    items = JSON.parse(localStorage.getItem('messages'));
    if (Array.isArray(items)) {
        addMessagesToDom(items, "localStorageData");
    }
}

function addMessagesToDom(messagesArray, ulId) {
    if (messagesArray.length > 0) {
        const ul = document.getElementById(ulId); ///obtaining the ul that will contain the repos 
        messagesArray.forEach((repo) => {
            let node = document.createElement("li"); /// creating a new "li" that contains a link with the repo
            node.appendChild(document.createTextNode(repo));
            ul.appendChild(node);
        })
    }
}
function saveData() {
    const data = document.getElementById("textarea");
    saveDataInLocalStorage(data);
    saveDataIndexDB(data);

}
getLocalStorageData();
getindexDbData();



function fullLoad() {
    let element = document.getElementById("hidden");
    element.hidden = false;
}

function matrixToTable(matrix){
    if(matrix){
        let head = true; ///flag to create the header of the table
        const element = document.getElementById("table");
        const table = document.createElement("table");
        Array.from(matrix).forEach( (row) => { // first forEach, for each row
            let newRow = document.createElement("tr");
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
 
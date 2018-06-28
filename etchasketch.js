const container = document.querySelector('#container');
const TABLE_WIDTH = 400;
const TABLE_HEIGHT = 400;

var numSquares = 16;


function draw(){
    var tableContainer = document.createElement("div");
    tableContainer.classList.add("tablecontainer");
    container.appendChild(tableContainer);
    
   for(var i = 0; i < numSquares; i++){
        var row = document.createElement("div");
        row.classList.add("row");
        row.style.textAlign = "center";
        tableContainer.appendChild(row);
        
    
        for(var j = 0; j< numSquares; j++){
    
            var column = document.createElement("div");
            if(i == 0){
                column.style.borderTop = "thin solid black";
            }
            if (i == (numSquares -1)){
                column.style.borderBottom = "thin solid black";
            }
            if(j==0){
                column.style.borderLeft = "thin solid black";
            }
            if(j == (numSquares -1) ){
                column.style.borderRight = "thin solid black";
            }
            
            column.classList.add("column");
    
            column.style.width = (TABLE_WIDTH / numSquares) + "px";
            column.style.height= (TABLE_HEIGHT / numSquares) + "px";
            column.style.display = "inline-block";
            
            column.addEventListener("mouseover", function(){
               this.style.background = "black"; 
            });
    
            tableContainer.lastChild.appendChild(column);
        }
    } 
}
    

function reset(){
    var allSquares = document.querySelectorAll('.column');
    for(var i = 0; i < allSquares.length; i++){
        allSquares[i].style.background = "white";
    }
}
function reDraw(){
    var userChoice = prompt("Please enter the number of Squares (Max 64)");
    if(userChoice != null){
        if(0 < userChoice && userChoice <= 64){
            numSquares = userChoice;
            console.log(numSquares);
            reset();
            var a = document.querySelector(".tablecontainer");
            container.removeChild(a);
            draw();
        }
    }

}
draw();

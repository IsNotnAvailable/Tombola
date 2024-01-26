let righe = 10;
let colonne = 10;
let div1 = document.getElementById('div1');
let table = document.getElementById("table")
let tabella = document.createElement("table");

function DisegnaTabella() {


    

    var i = 1;
    for (var r = 0; r < righe; r++) {   //riga
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {    //colonna
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);

}

function estrai()
{
    var num = Math.floor(Math.random() * 100 + 1);
    var cella = document.getElementsByTagName("td");
    for(var i = 0; i < cella.length; i++)
    {
        if(i+1 == num){
            cella[i].style.backgroundColor = "purple";
        }
    }
    
}

DisegnaTabella();

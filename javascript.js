let gridsize = 16

function CreateGrid(num){
    for(i = 0; i<num**2; i++){
        let MultiCell = document.createElement('div');
        MultiCell.className = "IndivCell";
        document.getElementById('MainBoard').appendChild(MultiCell);
    }
    document.getElementById('MainBoard').style.gridTemplateColumns = `repeat(${num}, 1fr)`
}

window.onload = CreateGrid(gridsize);
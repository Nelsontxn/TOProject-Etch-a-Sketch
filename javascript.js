


//Create Grid//
function CreateGrid(num){
    for(i = 0; i<num**2; i++){
        let MultiCell = document.createElement('div');
        MultiCell.className = "IndivCell";
        MultiCell.setAttribute("id",`IndivCell_${i}`)
        document.getElementById('MainBoard').appendChild(MultiCell);
    }
    document.getElementById('MainBoard').style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    
    const parent = document.getElementById('MainBoard').children
    const idArray = Array.from(parent).map(x => x.id);

    console.log(idArray)

    idArray.forEach(element =>{
        document.getElementById(`${element}`).addEventListener('mouseenter',(e)=>{
            e.target.style.backgroundColor = 'black';
    });
})

}

CreateGrid(16);


// Hover function//



//Reset Function
document.getElementById('reset').addEventListener('click', resetgrid)

function resetgrid(){
    const parent = document.getElementById('MainBoard').children
    const idArray = Array.from(parent).map(x => x.id);
    idArray.forEach(element =>{
        document.getElementById(`${element}`).style.backgroundColor = 'white';
    });
    var AlertSize = prompt("Please enter the gridsize", "16");
    gridsize = CorrectSize((Number(AlertSize)));
    deleteGrid()
    CreateGrid(gridsize);
}

function CorrectSize(integer){
    if (integer<1 || integer > 100 || typeof(integer)!== 'number'){
        return alert("Please give a reasonable number or size");
    }
    else{
        return integer
    }
}

function deleteGrid(){
    const parent = document.getElementById('MainBoard').children
    const idArray = Array.from(parent).map(x => x.id);
    idArray.forEach(element =>{
        document.getElementById(`${element}`).remove();
});
}
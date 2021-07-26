let gridsize = 64;

function CreateGrid(num){
    for(i = 0; i<num**2; i++){
        let MultiCell = document.createElement('div');
        MultiCell.className = "IndivCell";
        MultiCell.setAttribute("id",`IndivCell_${i}`)
        document.getElementById('MainBoard').appendChild(MultiCell);
    }
    document.getElementById('MainBoard').style.gridTemplateColumns = `repeat(${num}, 1fr)`
}

window.onload = CreateGrid(gridsize);

const parent = document.getElementById('MainBoard').children
const idArray = Array.from(parent).map(x => x.id);

console.log(idArray)

idArray.forEach(element =>{
    document.getElementById(`${element}`).addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor = 'black';
    });
})
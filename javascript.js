var color = 'black';


//Create Grid//
function CreateGrid(num){
    for(i = 0; i<num**2; i++){
        let MultiCell = document.createElement('div');
        MultiCell.className = "IndivCell";
        MultiCell.setAttribute("id",`IndivCell_${i}`)
        document.getElementById('MainBoard').appendChild(MultiCell);
    }
    document.getElementById('MainBoard').style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    Hoverfunc()

}

CreateGrid(16);


// Hover function//
function Hoverfunc(){
    const parent = document.getElementById('MainBoard').children
    const idArray = Array.from(parent).map(x => x.id);

    idArray.forEach(element =>{
        document.getElementById(`${element}`).addEventListener('mouseenter', colorGrid)
});
}


//Reset Function
document.getElementById('reset').addEventListener('click', resetgrid)

function resetgrid(){

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

//Colors function

const SelectedOptions = document.querySelectorAll('.effects');

SelectedOptions.forEach(options => 
    
    options.addEventListener('click', changeColor)
    );


function changeColor(event) {
    switch (event.target.id) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'gray':
            color = 'gray';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    } 
}

function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove('gray');
            break;  
        case 'gray':
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                }
            } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
            }
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            this.classList.remove('gray');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('gray');
            break;
    } 
}

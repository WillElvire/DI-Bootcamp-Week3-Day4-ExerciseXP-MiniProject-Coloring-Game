
/**
 * @author : Wilfried koua
 * @description : The purpose of this code is to do a color game and master event in js
 * @param  : target : HTMLElement
 * @param  : box    : HTMLElement
 */


/**************************** XP PROJECT  *************************/


//variables declaration
let body           = document.querySelector("body");
let colorList      = getGameColor();
let NumberOfSquare = 1440;
let color;
let IsDown;
let buttonRange;
let buttonClear;
let drawSection ;
let divColor ;
let divDraw  ;



//auto call function for setup project variables
(function setupProject(){

    document.body.setAttribute("style","background-color:gray;margin: 0;padding: 0;")
    body.appendChild(document.createElement('div'));
    body.appendChild(document.createElement('div'));
    divColor = document.getElementsByTagName('div')[0];
    divDraw  = document.getElementsByTagName('div')[1];
    setDrawAreaColor();
    divColor.appendChild(document.createElement('button'))
    document.querySelector('button').setAttribute("id","clear")
    document.querySelector('button').setAttribute("style","font-size: 31px;border: 1px black solid;grid-column: 1/4;border-radius: 16px;background-color: white;")
    document.querySelector('button').textContent="Clear"

})();

function setDrawAreaColor() {
    divColor.setAttribute("style","display: grid;grid-gap: 4px;grid-template-columns: repeat(3, 1fr);grid-template-rows:repeat(8, 1fr);height: 100vh;width: 20%;float: left;background-color: gray;padding: 5px;");
    divDraw.setAttribute("style","display: grid;grid-template-columns: repeat(60, 1fr);height: 100vh;padding: 5px 5px 5px 0;");
    divColor.setAttribute("id","buttonRange");
    divDraw.setAttribute("id","DrawSection");
}

function getGameColor() {
    return [
        "red","orangered","orange","yellow","yellowgreen","lightgreen","green",
        "turquoise","cyan","lightskyblue","dodgerblue","blue","darkblue","indigo","darkmagenta",
        "violet","lightpink","lightgray","gray","black","white"
    ]
}

(function setUpColorsOptions(){

   colorList.forEach(element => {
        let color=document.createElement('div');
        color.setAttribute("style","background-color:"+element+";border: 1px black solid;");
        divColor.appendChild(color);
    });
    
    
    for (let index = 0; index < NumberOfSquare; index++) {
        let createSquare=document.createElement('div')
        createSquare.setAttribute("style","border: 1px lightgray solid;background-color: white;")
        divDraw.appendChild(createSquare);
    }
})();



(function  startDrawingInTheBoard() {
    
    color       = null;
    IsDown      = false;
    buttonRange = document.querySelectorAll("#buttonRange > *");
    drawSection = document.querySelectorAll("#DrawSection > *");
    buttonClear = document.getElementById('clear');

    buttonClear.addEventListener("click", function(){
        for (draw of drawSection){
            draw.style.backgroundColor = "white";
        }
    });

})();


body.addEventListener("mouseup", function(){
    IsDown = false;
})

body.addEventListener("mousedown", function(){
    IsDown = true;
})


for (colorDraw of buttonRange){
    colorDraw.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (draw of drawSection ){

    draw.addEventListener("mousedown", function(event){
        if (color != null) {
            event.target.style.backgroundColor = color;
        }
    });
    draw.addEventListener("mouseover", function(event){
        if (IsDown && color != null) {
            event.target.style.backgroundColor = color;
        }
    });
}
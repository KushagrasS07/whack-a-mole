let currentMoleTile;
let currentPlantTile;

let score=0;
let gameOver=false;
let RestartBtn=document.getElementById('button');



window.onload=function(){
        setGame();    
}

function setGame(){
    //setting up the  grids on the board

    for(i=0;i<9;i++){

        //<div id=0-8></div>
        let tile=document.createElement("div");
        tile.id=i.toString();

        tile.addEventListener('click',selectTile);
        document.getElementById("board").appendChild(tile);

    }
    RestartBtn.addEventListener('click',restart);
    
    

    setInterval(setmMole,750);
    setInterval(setPlant,750);

    if(gameOver){
        restart();
    }
}

function getRandomTile(){
    let num=Math.floor(Math.random()*9);//Math.random()*9-->return [0,9)
    return num.toString();
}


function setmMole(){
    if(gameOver){
        currentMoleTile.innerHtml=("");
        return;
    }

    if(currentMoleTile){
        currentMoleTile.innerHTML= ("");
    }
    let mole=document.createElement("img");
    mole.src="./Sources//monty-mole.png";

    let num=getRandomTile();
    if(currentPlantTile && currentPlantTile.id==num){
        return;
    }
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }

    if(currentPlantTile){
        currentPlantTile.innerHTML=("");
    }

    let plant=document.createElement("img");
    plant.src="./Sources//piranha-plant.png"

    let num=getRandomTile();

    if(currentMoleTile && currentMoleTile.id==num){
        return;
    }

    currentPlantTile=document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile(){

    if(this==currentMoleTile){
        score+=10;
        document.getElementById("Score").innerText="Score:"+score.toString();
        currentMoleTile.innerHTML= ("");
    }
    else if(this==currentPlantTile){
        document.getElementById("Score").innerText="GameOver:"+score.toString();
        gameOver=true;
        RestartBtn.style.display='block';
    }    
}

function restart(){
    /*RestartBtn.style.display='block';*/
    score=0;
    document.getElementById("Score").innerText=score.toString();
    gameOver=false;
    RestartBtn.style.display='none';
    
}
const canvas = ducomment.getElementByid("gameCanvas");
const ctx = canvas .getContext("2d");

const gravity = 0.5;
const floor = canvas.height - 50;
 
let player = {
    x:50,
    y:floor,
    width: 30,
    height:30,
    dx:0,
    dy:0,
    jumping: false
};

let keys = {};
let score =0;
let level = 1 ;
let maLevel = 3;
let goalLine = 750;
 

let leveldata = {
    1: [
      { x: 300, y: floor, width: 40, height:40 },
      { x: 500, y: floor - 30,width: 50, height:50 } ,
    ],
    2:[
        {x: 250, y: floor - 10, width: 40, height: 40},
        {x: 450, y: floor - 40, width: 50, height:60 },
        {x: 650, y: floor - 10, width: 30, height:30 },
    ],
    3: [
        {x:200, y:floor, width: 50, height:40 },
        {x:400, y:floor - 20, width :50, height},
        {x:600, y:floor - 30, width: 60, height:60},
        {x:700, y:floor - 50, width :60, height: 50},


    ]
};
    
let obtacles = leveldata[level];

function resetPlayer() {
    player.x = 50;
    player.y = floor - player. height;
    player.dy = 0;
    player.jumping = false;
    player.dx = 0;

}
 
function drawPlayer() {
    ctx.fillStyle = "#f39c12"
    ctx.fillRect(player.x, player.y, player.width, player.height);

}

function draw0bstacles () {
    ctx.fillStyle = "#2c3e50";

        
    }

// Sameer R. Daniel O. Daniel E. Zion S.
// JavaScript Cohort

let state = 0; // defaults user to title screen
let easyArray = []; // array for the easy maze parts
let intArray = []; // array for the intermediate maze parts
let hardArray = []; // array for the hard maze parts
let intObsArray = []; // array for intermediate obstacles
let hardObsArray = []; // array for hard obstacles

// sets original position of player
let playerX = 50;
let playerY = 250;

//player collisions
let playerTop, playerBottom, playerLeft, playerRight;

//easy block collisions
let blockTop1, blockBottom1, blockLeft1, blockRight1;
let blockTop2, blockBottom2, blockLeft2, blockRight2;
let blockTop3, blockBottom3, blockLeft3, blockRight3;
let blockTop4, blockBottom4, blockLeft4, blockRight4;
let blockTop5, blockBottom5, blockLeft5, blockRight5;
let blockTop6, blockBottom6, blockLeft6, blockRight6;
//intermediate block collisions
let intblockTop1, intblockBottom1, intblockLeft1, intblockRight1;
let intblockTop2, intblockBottom2, intblockLeft2, intblockRight2;
let intblockTop3, intblockBottom3, intblockLeft3, intblockRight3;
let intblockTop4, intblockBottom4, intblockLeft4, intblockRight4;
let intblockTop5, intblockBottom5, intblockLeft5, intblockRight5;
let intblockTop6, intblockBottom6, intblockLeft6, intblockRight6;
//hard block collisions 
let hardblockTop1, hardblockBottom1, hardblockLeft1, hardblockRight1;
let hardblockTop2, hardblockBottom2, hardblockLeft2, hardblockRight2;
let hardblockTop3, hardblockBottom3, hardblockLeft3, hardblockRight3;
let hardblockTop4, hardblockBottom4, hardblockLeft4, hardblockRight4;
let hardblockTop5, hardblockBottom5, hardblockLeft5, hardblockRight5;
let hardblockTop6, hardblockBottom6, hardblockLeft6, hardblockRight6;


function setup() {
    // initial settings for canvas; wide screen with black background; rectangles and text centered/bolded
    createCanvas(1000, 500);
    background(0);
    noStroke();
    rectMode(CENTER);
    textAlign(CENTER);
    textStyle(BOLD);

    // constructs the blocks for the easy maze
    easyMaze1 = new Maze (200, 0, 50, 370);
    easyMaze2 = new Maze (200, 500, 50, 350);
    easyMaze3 = new Maze (400, 0, 50, 300);
    easyMaze4 = new Maze (400, 500, 50, 400);
    easyMaze5 = new Maze (700, 0, 50, 450);
    easyMaze6 = new Maze (700, 500, 50, 360);
    // pushes easy maze into array
    easyArray.push(easyMaze1, easyMaze2, easyMaze3, easyMaze4, easyMaze5, easyMaze6);

    // constructs the blocks for intermediate maze
    intMaze1 = new Maze (150, 0, 50, 600); 
    intMaze2 = new Maze (300, 500, 50, 700);
    intMaze3 = new Maze (475, 0, 50, 650); 
    intMaze4 = new Maze (650, 500, 50, 750);
    intMaze5 = new Maze (750, 0, 50, 650); 
    intMaze6 = new Maze (850, 500, 50, 750);
    // pushes intermediate maze into array
    intArray.push(intMaze1, intMaze2, intMaze3, intMaze4, intMaze5, intMaze6);

    // constructs the blocks for the hard maze
    hardMaze1 = new Maze (125, 0, 40, 700);
    hardMaze2 = new Maze (250, 500, 40, 750);
    hardMaze3 = new Maze (445, 200, 350, 40);
    hardMaze4 = new Maze (700, 0, 40, 750);
    hardMaze5 = new Maze (525, 355, 375, 40);
    hardMaze6 = new Maze (800, 500, 40, 850);
    // pushes hard maze into array
    hardArray.push(hardMaze1, hardMaze2, hardMaze3, hardMaze4, hardMaze5, hardMaze6);

    // constructs obstacle for easy maze
    easyObs = new Obstacle (540, 50, 70);

    // constructs obstacles for intermediate maze
    intObs1 = new Obstacle (150, 100, 50);
    intObs2 = new Obstacle (300, 400, 50);
    intObs3 = new Obstacle (475, -50, 50);
    // pushes intermediate obstacles into array
    intObsArray.push(intObs1, intObs2, intObs3);

    // constructs obstacles for hard maze
    hardObs1 = new Obstacle (400, -50, 50);
    hardObs2 = new Obstacle (550, 200, 50);
    hardObs3 = new Obstacle (425, 425, 50);
    hardObs4 = new Obstacle (250, 250, 40);
    // pushes hard obstacles into array
    hardObsArray.push(hardObs1, hardObs2, hardObs3, hardObs4);
}


function movement() { // allows movement for the player (continuously used in ALL difficulties)
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= 3;
    }
        
    if (keyIsDown(RIGHT_ARROW)) {
        playerX += 3;
    }

    if (keyIsDown(UP_ARROW)) {
        playerY -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        playerY +=3;
    }
}

function endScreen() { // displayed after player reaches end of maze
    if (state == 4) {
        background(255,255,255);
        textSize(50);
        text("CONGRATS", 500, 250);
    }
}

function loseScreen() {
    if (state == 5) {
        background(255, 255, 255);
        textSize(50);
        text("YOU LOSE", 500, 250);
    }
}

function draw() {
   if (state == 0) { // title screen
        // title card
        fill(54, 145, 78);
        rect(500, 100, 400, 150);
        fill(255);
        textSize(45);
        text("MAZE RUN", 500, 90);

        // credits
        textSize(15);
        text("Nike JavaScript Cohort:\nDaniel E., Daniel O., Zion S., Sameer R.", 500, 130);

        // instructions
        textSize(20);
        text("AVOID THE\nGREEN AND BLUE!", 200, 250);
        text("TAKE YOUR RED\nTO THE END!", 800, 250);

        // press key to start
        fill(224, 81, 105);
        rect(500, 500, 300, 500);
        fill(255);
        textSize(17);
        text("PRESS ONE OF THE FOLLOWING:", 500, 320);
        textSize(15);
        text("Q - EASY MAZE\nW - INTERMEDIATE MAZE\nE - DIFFICULT MAZE", 500, 380);

        if (keyIsDown(81)) { // takes you to EASY maze
            state = 1;
        }
        if (keyIsDown(87)) { // takes you to INTERMEDIATE maze
            state = 2;
        }
        if (keyIsDown(69)) { // takes you to DIFFICULT maze
            state = 3;
        }
    }

    // second state - easy maze
    if (state == 1) {
        fill(0, 255, 0);
        background(0); // used to ensure the animation effect

        for (let i = 0; i < easyArray.length; i++) {
            rect(easyArray[i].xPos, easyArray[i].yPos, easyArray[i].wide, easyArray[i].long);
        } // draws the maze parts made in the easyArray in a for loop
        if (playerX >= 950) { // once player reaches 950 and beyond, game stops and user wins
            background(0);
            fill(0);
            state = 4;
            endScreen(); // runs the end screen function
        }

        fill(0, 0, 255);
        ellipse(easyObs.xCent, easyObs.yCent, easyObs.diameter); // obstacle for easy level
        easyObs.yCent += 5;
        if (easyObs.yCent > 550) {
            easyObs.yCent = -50;
        }

        fill(255,0,0);
        rect(playerX, playerY, 50, 50); // player square
        movement(); // runs the movement function

    //collision stuff (easy)

    playerTop = playerY - 25;
    playerBottom = playerY + 25;
    playerLeft = playerX - 25;
    playerRight = playerX + 25;

    blockTop1 = 0;
    blockBottom1 = 185;
    blockLeft1 = 175;
    blockRight1 = 225;

    blockTop2 = 325;
    blockBottom2 = 500;
    blockLeft2 = 175;
    blockRight2 = 225;

    blockTop3 = 0;
    blockBottom3 = 150;
    blockLeft3 = 375;
    blockRight3 = 425;

    blockTop4 = 300;
    blockBottom4 = 500;
    blockLeft4 = 375;
    blockRight4 = 425;

    blockTop5 = 0;
    blockBottom5 = 225;
    blockLeft5 = 675;
    blockRight5 = 725;

    blockTop6 = 320;
    blockBottom6 = 500;
    blockLeft6 = 675;
    blockRight6 = 725;
    
    easyObsLeft = easyObs.xCent - 35;
    easyObsRight = easyObs.xCent + 35;
    easyObsTop = easyObs.yCent - 35;
    easyObsBottom = easyObs.yCent + 35;

    intObs1Left = intObs1.xCent - 25;
    intObs1Right = intObs1.xCent + 25;
    intObs1Top = intObs1.yCent - 25;
    intObs1Bottom = intObs1.yCent - 25;

    if(playerLeft > easyObsRight || playerRight < easyObsLeft || playerTop > easyObsBottom || playerBottom < easyObsTop){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > blockRight1 || playerRight < blockLeft1 || playerTop > blockBottom1 || playerBottom < blockTop1){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > blockRight2 || playerRight < blockLeft2 || playerTop > blockBottom2 || playerBottom < blockTop2){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > blockRight3 || playerRight < blockLeft3 || playerTop > blockBottom3 || playerBottom < blockTop3){
    }
    else{
        state = 5;
        loseScreen();
    }
    
    if(playerLeft > blockRight4 || playerRight < blockLeft4 || playerTop > blockBottom4 || playerBottom < blockTop4){
    }
    else{
        state = 5;
        loseScreen();
    }
    
    if(playerLeft > blockRight5 || playerRight < blockLeft5 || playerTop > blockBottom5 || playerBottom < blockTop5){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > blockRight6 || playerRight < blockLeft6 || playerTop > blockBottom6 || playerBottom < blockTop6){
    }
    else{
        state = 5;
        loseScreen();
    }
    }

    // third state - intermediate maze
    if (state == 2) { // medium maze
        background(0);
        fill(0, 0, 255)
        for (let i = 0; i < intObsArray.length; i++) {
            ellipse(intObsArray[i].xCent, intObsArray[i].yCent, intObsArray[i].diameter);
        }

        // intermediate maze obstacles
        intObs1.xCent += 5;
        if (intObs1.xCent == 480) {
            intObs1.xCent = 150;
        }

        intObs2.xCent += 5;
        if (intObs2.xCent == 655) {
            intObs2.xCent = 300;
        }

        intObs3.xCent += 4;
        intObs3.yCent += 4;
        if (intObs3.yCent == 250) {
            intObs3.xCent = 445;
            intObs3.yCent = -50;
        }
        
        fill(0, 255, 0);

        for (let i = 0; i < intArray.length; i++) {
            rect(intArray[i].xPos, intArray[i].yPos, intArray[i].wide, intArray[i].long);
        } // draws the maze parts made in the intArray in a for loop
        if (playerX >= 950) {
            background(0);
            fill(0);
            state = 4;
            endScreen();
        }

        fill(255, 0, 0);
        rect(playerX, playerY, 35, 35)
        movement();

        playerTop = playerY - 25;
        playerBottom = playerY + 25;
        playerLeft = playerX - 25;
        playerRight = playerX + 25;

        intblockTop1 = 0;
        intblockBottom1 = 300;
        intblockLeft1 = 125;
        intblockRight1 = 175;

        intblockTop2 = 150;
        intblockBottom2 = 500;
        intblockLeft2 = 275;
        intblockRight2 = 325;

        intblockTop3 = 0;
        intblockBottom3 = 325;
        intblockLeft3 = 450;
        intblockRight3 = 500;

        intblockTop4 = 125;
        intblockBottom4 = 500;
        intblockLeft4 = 625;
        intblockRight4 = 670;

        intblockTop5 = 350;
        intblockBottom5 = 700;
        intblockLeft5 = 335;
        intblockRight5 = 375;

        intblockTop6 = 780;
        intblockBottom6 = 820;
        intblockLeft6 = 75;
        intblockRight6 = 925;
    
    if(playerLeft > intblockRight1 || playerRight < intblockLeft1 || playerTop > intblockBottom1 || playerBottom < intblockTop1){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > intblockRight2 || playerRight < intblockLeft2 || playerTop > intblockBottom2 || playerBottom < intblockTop2){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > intblockRight3 || playerRight < intblockLeft3 || playerTop > intblockBottom3 || playerBottom < intblockTop3){
    }
    else{
        state = 5;
        loseScreen();
    }
    
    if(playerLeft > intblockRight4 || playerRight < intblockLeft4 || playerTop > intblockBottom4 || playerBottom < intblockTop4){
    }
    else{
        state = 5;
        loseScreen();
    }
    
    if(playerLeft > intblockRight5 || playerRight < intblockLeft5 || playerTop > intblockBottom5 || playerBottom < intblockTop5){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > intblockRight6 || playerRight < intblockLeft6 || playerTop > intblockBottom6 || playerBottom < intblockTop6){
    }
    else{
        state = 5;
        loseScreen();
    }

    }

    // fourth state - difficult maze
    if (state == 3) { // hard maze
        background(0);
        fill(0, 0, 255);
        for (let i = 0; i < hardObsArray.length; i++) {
            ellipse(hardObsArray[i].xCent, hardObsArray[i].yCent, hardObsArray[i].diameter)
        }

        // hard maze obstacles
        hardObs1.yCent += 5;
        if (hardObs1.yCent == 200) {
            hardObs1.yCent = -50;
        }

        hardObs2.yCent -= 5;
        if (hardObs2.yCent == -50) {
            hardObs2.yCent = 200;
        }

        hardObs3.xCent += 5;
        if (hardObs3.xCent == 800) {
            hardObs3.xCent = 250;
        }

        hardObs4.xCent += 10;
        hardObs4.yCent += 3;
        if (hardObs4.xCent == 800) {
            hardObs4.xCent = 250;
            hardObs4.yCent = 250;
        }

        fill(0, 255, 0);
        for (let i = 0; i < hardArray.length; i++) {
            rect(hardArray[i].xPos, hardArray[i].yPos, hardArray[i].wide, hardArray[i].long);
        } // draws the maze parts made in the hardArray in a for loop
        if (playerX >= 950) {
            background(0);
            fill(0);
            state = 4;
            endScreen();
        }

        fill(255, 0, 0);
        rect(playerX, playerY, 35, 35);
        movement();

        playerTop = playerY - 25;
        playerBottom = playerY + 25;
        playerLeft = playerX - 25;
        playerRight = playerX + 25;

        hardblockTop1 = 0;
        hardblockBottom1 = 350;
        hardblockLeft1 = 105;
        hardblockRight1 = 145;

        hardblockTop2 = 125;
        hardblockBottom2 = 500;
        hardblockLeft2 = 230;
        hardblockRight2 = 270;

        hardblockTop3 = 180;
        hardblockBottom3 = 220;
        hardblockLeft3 = 320;
        hardblockRight3 = 570;

        hardblockTop4 = 0;
        hardblockBottom4 = 375;
        hardblockLeft4 = 680;
        hardblockRight4 = 720;

        hardblockTop5 = 325;
        hardblockBottom5 = 355;
        hardblockLeft5 = 337.5;
        hardblockRight5 = 712.5;

        hardblockTop6 = 75;
        hardblockBottom6 = 500;
        hardblockLeft6 = 780;
        hardblockRight6 = 820;
    

    if(playerLeft > hardblockRight1 || playerRight < hardblockLeft1 || playerTop > hardblockBottom1 || playerBottom < hardblockTop1){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > hardblockRight2 || playerRight < hardblockLeft2 || playerTop > hardblockBottom2 || playerBottom < hardblockTop2){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > hardblockRight3 || playerRight < hardblockLeft3 || playerTop > hardblockBottom3 || playerBottom < hardblockTop3){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > hardblockRight4 || playerRight < hardblockLeft4 || playerTop > hardblockBottom4 || playerBottom < hardblockTop4){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > hardblockRight5 || playerRight < hardblockLeft5 || playerTop > hardblockBottom5 || playerBottom < hardblockTop5){
    }
    else{
        state = 5;
        loseScreen();
    }

    if(playerLeft > hardblockRight6 || playerRight < hardblockLeft6 || playerTop > hardblockBottom6 || playerBottom < hardblockTop6){
    }
    else{
        state = 5;
        loseScreen();
    }
    }

}

// helps to construct our rectangles/maze blocks
class Maze {
    constructor(x, y, width, length) {
        this.xPos = x;
        this.yPos = y;
        this.wide = width;
        this.long = length;
    }
}

class Obstacle {
    constructor(x, y, size) {
        this.xCent = x;
        this.yCent = y;
        this.diameter = size;
    }
}

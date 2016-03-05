// Enemies our player must avoid
var Enemy = function( x_loc, y_loc,z_speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x_loc;
    this.y=  y_loc;
    this.speed = z_speed;
    this.width = 101;//for collision purposes
    this.height =77;// for collision purposes



};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;
    if(this.x > 500){this.x = -100;}// Once the bugs go off the screen reset their position
    // collition code  with help from http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/
    if((this.x <= player.x && this.x+this.width >= player.x) &&
        (this.y <= player.y && this.y+this.height >= player.y)){player.reset();}




};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x_loc,y_loc,z_speed){


    this.sprite="images/char-princess-girl.png";
    this.x= x_loc;
    this.y= y_loc;
    this.speed=z_speed;
    this.width = 68;// for collision purposes
    this.height =91;// for collision purposes
    this.score = 0;


};


Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.speed = dt * this.speed;

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//method that resets the player postiion
Player.prototype.reset = function(){

        this.x =200;
        this.y= 400;
}

//Moves the Main Character according to the directional key pressed
Player.prototype.handleInput  = function (direction){

      if(direction === "right"){
            this.x = this.x + 100;
            if(this.x > 400){ this.x = this.x - 100;}// check that the character does not go over the wall
      }
      if(direction === "left"){
            this.x = this.x - 100;
            if(this.x < 0){ this.x = this.x + 100;}// check that the character does not go over the wall
      }
      if(direction === "up"){
            this.y = this.y - 100;
             if(this.y < 0){ this.y = this.y + 100;}// check that the character does not go over the wall
             if(this.y == 0){this.reset(); this.score++; alert("Your New Score is  " + this.score);}// if the player reaches the water reset the player's position and alerts score


      }
       if(direction === "down"){
            this.y = this.y + 100;
           if(this.y > 400){ this.y = this.y - 100;}// check that the character does not go over the wall
      }

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

    var allEnemies = [

    new Enemy(-100,50,Math.floor(Math.random() * 300 + 100)),
    new Enemy(-100,150,Math.floor(Math.random() * 300 + 100)),
    new Enemy(-100,200,Math.floor(Math.random() * 300 + 100))


    ];

// Place the player object in a variable called player
    var player = new Player(200,400,7);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

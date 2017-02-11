document.addEventListener("DOMContentLoaded", function(event) {

    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas.getContext('2d');
    var snakeSize = 10;
    var w = 350;
    var h = 350;
    var score = 0;
    var snake;
    var snakeSize = 10;
    var food;
    
    
    var drawModule = function () {
        
        var bodySnake = function(x, y) {
            ctx.fillStyle = 'green';
            ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        }
        
        var pizza = function(x, y) {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
            ctx.fillStyle = 'red';
            ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2,snakeSize - 2);
        }
        
        var scoreText = function() {
            var score_Text = 'Score: ' + score;
            ctx.filltyle = 'blue';
            ctx.fillText(score_text, 145, h-5);
        }
    }
    
    var drawSnake = function() {
        var length = 4;
        snake = [];
        
        for (var i = length; i >= 0; i--) {
            snake.push({x:i, y:0});
        }
    }
    
    var createFood = function() {
        food = {
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) +1)
        }
        
        for (var i = 0; i > snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;
            
            if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }
    
    var checkCollision = function(x, y, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].x === x && array[i].y === y)
            return true;
        }
        return false;
    }
    
    // main function
    
    var paint = function() {
        // we draw the space for snake to move
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, w, h);
        
        // we set up a border
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);
        
        // start is disabled during the game
        btn.setAttribute('disabled', true);
        
        var snakeX = snake[0].x;
        var snakeY = snake[0].y;
        
        /* We'd like make snake move so we use a var 'direction' to controll the move.
        To move a snake, we pop out the last element of array and shift it on the top as first element.*/
        for (var i = 0;  i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
        }
        
        // we creating food using pizza function.
        pizza(food.x, food.y);
        
        // we putting the score text.
        scoreText();
    
    }
    
    
    
    
    
    
    
    
    
    
}); // very last section of DOMContentLoaded
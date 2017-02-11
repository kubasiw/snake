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
    
    
    
    
    
    
    
    
    
    
}); // very last section of DOMContentLoaded
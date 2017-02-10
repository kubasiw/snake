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
    
    
    
}); // very last section of DOMContentLoaded
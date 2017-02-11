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
    
    
    var drawModule = (function () {
        
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
        
            /*
            Make the snake move.
            Use a variable ('direction') to control the movement.
            To move the snake, pop out the last element of the array 
            and shift it on the top as first element.
            */

            if (direction == 'right') {
                snakeX++;
            } else if (direction == 'left') {
                snakeX--;
            } else if (direction == 'up') {
                snakeY--;
            } else if (direction == 'down') {
                snakeY++;
            }

            /*
            If the snake touches the canvas path or itself, it will die!
            Therefore if x or y of an element of the snake, don't fit 
            inside the canvas, the game will be stopped. If the check_collision 
            is true, it means the the snake has crashed on its body itself, 
            then the game will be stopped again. 
            */

            if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake)) {

                //Stop the game.

                //Make start button enabled
                btn.removeAttribute('disabled', true);

                // Clean the canvas
                ctx.clearRect(0, 0, w, h);
                gameloop = clearInterval(gameloop);
                return;
            };
        
            //If the snake eats food it becomes longer and this means that, in this case, you shouldn't pop out the last element of the array. 
    
            if (snakeX == food.x && snakeY == food.y) {
                //create a new square
                var tail = {
                    x: snakeX,
                    y: snakeY
                };
                score++;

                // create new food

                createFood();
            } else {
                //pop out the last cell

                var tail = snake.pop();
                tail.x = snakeX;
                tail.y = snakeY;
            }

            // Put the tail as a lat cell
            snake.unshift(tail);

            /*For each element of the array create a square using 
            the bodySnake function we created before */

            for (var i = 0; i <snake.length; i++) {
                bodySnake(snake[i].x, snake[i].y);
            }

            // create a food using our pizza function
            pizza(food.x, food.y);

            // put the score text
            scoreText();
        }
    
        // function initialization

        var init = function() {
            direction = 'down';
            drawSnake();
            createFood();
            gameloop = setInterval(paint, 80);
        }

        //We need to return only the _init_ function at the end of the Module.
        return {
            init: init
        };

        //close the module
    }());
    
   
}); // very last section of DOMContentLoaded
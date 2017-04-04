function tanksMap() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function Obstacle(x, y) {
        this.x = x;
        this.y = y;
    }

    var obstacles = [];

    function generateObstacles() {
        var x = 20;
        var y = 10;
        var width = 5;
        var height = 5;

        for (var row = 0; row < 14; row++) {
            if (x >= canvas.width) break;
            for (var index = 0; index < 10; index++) {
                if (y >= canvas.height) {
                    y = 10;
                    break;
                }
                obstacles.push(new Obstacle(x, y));
                ctx.fillStyle = "#15b9bf";
                ctx.fillRect(x, y, width, height);

                y += 20;
            }
            x += 20;
        }
        return obstacles;
    };
    return generateObstacles();
};

function tanks() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");

    function Tank(x, y, tankWidth, tankHeight) {
        this.x = x;
        this.y = y;
        this.tankWidth = tankWidth;
        this.tankHeight = tankHeight;
    }

    Tank.prototype.positionTank = function () {
        ctx.fillStyle = "#9b3d0d";
        ctx.clearRect(this.x, this.y, this.spriteWidth, this.tankHeight);
        return ctx.fillRect(this.x, this.y, this.spriteWidth, this.tankHeight);
    }
    var tank1 = new Tank(50, 100, 30, 30);
    return tank1.positionTank();
};



window.addEventListener('load', function () {
    tanksMap();
    tanks();
}, false);
// $(function (){
//     var canvas = $('canvas');
//     canvas.width = canvas.scrollWidth;
//     canvas.height = canvas.scrollHeight;

//     var ctx = canvas.getContext("2d");
//     ctx.fillRect(10, 10, 100, 200);
// });

 // var wallImage = new Image();
        // wallImage.src = './images/wall1.jpg';
        // wallImage.height = "auto";
        // wallImage.width = "10px";

        // function draw(ctx, wallImage) {
        //     if (!wallImage.complete) {
        //         setTimeout(function () {
        //             draw(ctx, wallImage);
        //         }, 10);
        //         return;
        //     }
        //     ctx.drawImage(wallImage, x, y, width, height);
        // };

        // draw(ctx, wallImage);

        //     function Tank(x, y, spriteWidth, spriteHeight) {
    //         this.image = "./images/tanks.jpg";
    //         this.x = x;
    //         this.y = y;
    //         this.spriteWidth = spriteWidth;
    //         this.spriteHeight = spriteHeight;
    //     }

    //     Tank.prototype.drawTank = function () {
    //         var spriteWidth = this.spriteWidth;
    //         var pos = 0;
    //         var spriteHeight = this.spriteHeight;

    //         var tankcheImg = new Image();
    //         tankcheImg.src = this.image;
    //         ctx.clearRect(50, 50, 40, 30);
    //         ctx.drawImage(tankcheImg, 50, 50, spriteWidth, spriteHeight, 80, 70, spriteWidth, spriteHeight);
    //     }

    //     var tank1 = new Tank(0, 0, 34, 30);
    //     tank1.drawTank();
    // }
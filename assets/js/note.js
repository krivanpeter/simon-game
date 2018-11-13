class Note {
    constructor(color, x, y, angle1, angle2, sound) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.d;
        this.ang1 = angle1;
        this.ang2 = angle2;
        this.xp1;
        this.yp1;
        this.xp2;
        this.yp2;
        this.sound = sound;
    }
    show() {
        if (sketchCanvas.width > sketchCanvas.height) {
            this.d = 400;
        }
        else {
            this.d = sketchCanvas.width * 0.8;
        }
        fill(this.color);
        arc(this.x, this.y, this.d, this.d, this.ang1, this.ang2, PIE);
    }

    play() {
        this.calcEdges();
        var d_tm = dist(this.x, this.y, mouseX, mouseY);
        var d_om = dist(this.xp2, this.yp2, mouseX, mouseY);

        var a1 = dist(mouseX, mouseY, this.x, this.y);
        var b1 = dist(this.xp1, this.yp1, mouseX, mouseY);
        var c1 = dist(this.x, this.y, this.xp1, this.yp1);

        var a2 = dist(mouseX, mouseY, this.x, this.y);
        var b2 = dist(this.xp2, this.yp2, mouseX, mouseY);
        var c2 = dist(this.x, this.y, this.xp2, this.yp2);

        var my_angle1 = (c1 * c1 + a1 * a1 - b1 * b1) / (2 * c1 * a1);
        var my_angle2 = (c2 * c2 + a2 * a2 - b2 * b2) / (2 * c2 * a2);

        var mouse_d1 = degrees(acos(my_angle1)+this.ang1);
        var mouse_d2 = degrees(acos(my_angle2)+this.ang1);
        
        console.log(mouse_d1, mouse_d2, degrees(this.ang1), degrees(this.ang2));
        if (d_tm < this.d / 2 &&
            mouse_d1 > degrees(this.ang1) &&
            mouse_d1 < degrees(this.ang2) &&
            mouse_d2 > degrees(this.ang1) &&
            mouse_d2 < degrees(this.ang2)) {
            /*this.sound.play();*/
            /*this.sound.isPlaying();*/
            this.color = 255;
            fill(this.color);
            arc(this.x, this.y, this.d, this.d, this.ang1, this.ang2, PIE);
        }
    }
    calcEdges() {
        this.xp1 = this.x + this.d / 2 * cos(this.ang1);
        this.yp1 = this.y + this.d / 2 * sin(this.ang1);
        this.xp2 = this.x + this.d / 2 * cos(this.ang2);
        this.yp2 = this.y + this.d / 2 * sin(this.ang2);
    }
}

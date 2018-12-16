class Boid {
    constructor() {
        this.position = createVector(width/2, height/2);
        this.velocity = createVector();
        this.acceleration = createVector();
    }

    update() {
        this.position.add(this.velocity);
        this.position.add(this.acceleration);
    }

    show() {
        strokeWeight(16);
        stroke(225);
        point(this.position.x, this.position.y);
    }
}
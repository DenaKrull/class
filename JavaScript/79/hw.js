(function() {
    'use strict';

    // function createVehicle(color) {


    //     // return {
    //     //     color: color,
    //     //     speed: 0,
    //     //     go: function(speed) {
    //     //         this.speed = speed;
    //     //         console.log(`${this.color} car is going ${speed}`);
    //     //     },
    //     //     print: function() {
    //     //         console.log(this.color, this.speed);
    //     //     }
    //     // };


    //     const v = {
    //         color: color
    //     };
    //     Object.assign(v, vehicleFunctions);
    // }

    // const v = createVehicle('red');
    // v.go(100);
    // v.print();


    /////
    const vehicleFunctions = {
        go: function(speed) {
            this.speed = speed;
            console.log(`${this.color} car is going ${speed}`);
        },
        print: function() {
            console.log(this.color, this.speed);
        }
    };

    function createVehicle2(color) {
        const v = Object.create(vehicleFunctions);
        v.color = color;
        return v;
    }

    const v2 = createVehicle2('blue');
    const v3 = createVehicle2('yellow');
    v2.go(100);
    v2.print();
    v3.go(500);
    v3.print();

    vehicleFunctions.stop = function() {
        this.speed = 0;
        console.log(`${this.color} car is stopped`);
    };
    v3.stop();

    function Vehicle(color) {
        this.color = color;
        this.speed = 0;
    }

    // Vehicle.prototype.go = function(speed) {
    //     this.speed = speed;
    //     console.log(`${this.color} car is going ${speed}`);
    // };
    // Vehicle.prototype.print = function() {
    //     console.log(this.color, this.speed);
    // };

    Object.assign(Vehicle.prototype, vehicleFunctions);

    const v5 = new Vehicle('green');
    v5.go(100);
    v5.print();
    // function createPlane(color) {
    //     const v = Object.create(vehicleFunctions);
    //     v.color = color;
    //     return v;
    // }

    function Plane(color) {
        this.color = color;
    }
    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function(speed) {
        this.speed = speed;
        console.log(`${this.color} plane is flying ${speed}`);
    };

    const p1 = new Plane('white');
    p1.go(250);
    p1.print();

    Vehicle.prototype.clone = function() {
        const copy = new Vehicle(this.color);
        copy.speed = this.speed;
        return copy;
    };

    const cv5 = v5.clone();
    cv5.print();
    cv5.go(200);
}());
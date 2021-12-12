(function() {
    'use strict';
    class Vehicle {
        static numberOfVehicles = 0;

        static showNumberOfVehicles() {
            console.log(`there are ${Vehicle.numberOfVehicles} vehicles`);
        }
        constructor(color) {
            this.color = color;
            Vehicle.numberOfVehicles++;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }
        print() {
            console.log(`The ${this.color} vehicle is speeding at ${this.speed} mph`);

        }
    }
    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`now flying at speed ${speed}`);
        }
    }

    const v = new Vehicle('red');
    v.go(100);
    v.print();

    Vehicle.showNumberOfVehicles();

    const p = new Plane('blue');
    p.go(100);
    p.print();
    Vehicle.showNumberOfVehicles();


    ////////////
    const VehiclePrototype = {

        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        },
        print() {
            console.log(`The ${this.color} vehicle is speeding at ${this.speed} mph`);

        }
    };

    function createVehicle(color) {
        const vehicle = Object.create(VehiclePrototype);
        vehicle.color = color;
        return vehicle;
    }

    const v1 = createVehicle('red');
    v1.go(100);
    v1.print();



    ///////////////
    function vehicle2(color) {
        this.color = color;
    }
    // Vehicle2.prototype.go = function(speed) {
    //     this.speed = speed;
    //     console.log(`now going at speed ${speed}`);
    // };
    Object.assign(vehicle2.prototype, VehiclePrototype);

    const v2 = new vehicle2('blue');
    v2.go(100);
    v2.print();


    ///////////////
    function createVehicle2(color) {
        const v = {
            color: color,

        };
        Object.assign(v, VehiclePrototype);
        return v;
    }
    const v3 = createVehicle2('green');
    v3.go(100);
    v3.print();


    ////////////// mixin
    function Printable() {}
    Printable.prototype.print = function() {
        console.log(`${this} is being printed`);
    };

    function Drawable() {}
    Drawable.prototype.draw = function() {
        console.log(`${this} is being drawn`);
    };

    function PrintabelandDrawable() {}
    PrintabelandDrawable.prototype = Object.create(Printable.prototype);
    //PrintabelandDrawable.prototype = Object.create(Drawable.prototype);
    Object.assign(PrintabelandDrawable.prototype, Drawable.prototype);
    PrintabelandDrawable.prototype.constructor = PrintabelandDrawable;

    const pad = new PrintabelandDrawable();
    pad.print();
    pad.draw();


}());
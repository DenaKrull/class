(function() {
    'use strict';

    const potus = {
        first: 'Joe',
        last: 'Biden',
        print: function() {
            console.log(`I am ${this.first} ${this.last}`);
        }
    };
    console.log(potus);
    console.log(potus.first, potus.last);
    potus.print();


    const personFunctions = {
        print: function() {
            console.log(`I am ${this.first} ${this.last}`);
        },
        talk: function() {
            console.log(` ${this.first} says hello`);
        }
    };

    function personFactory(first, last) {
        // return {
        // first: first,
        // last: last
        // print: personFunctions.print,
        // talk: personFunctions.talk
        // };

        const p = {
            first,
            last
        };
        Object.assign(p, personFunctions);
        return p;
    }

    const Kamala = personFactory('Kamala', 'Harris');
    const blinken = personFactory('Blinken', 'Doe');
    console.log(Kamala);
    console.log(Kamala.first, Kamala.last);
    Kamala.print();
    Kamala.talk();
    console.log(blinken);
    console.log(blinken.first, blinken.last);
    blinken.print();
    blinken.talk();


    ////////////////


    const p = {
        first: 'Donald',
        last: 'Trump',
    };
    p.__proto__ = personFunctions;

    p.print();
    p.talk();

    function Person(first, last) {
        this.first = first;
        this.last = last;
    }

    Person.prototype.print = function() {

        console.log(`I am ${this.first} ${this.last}`);
    };
    Person.prototype.talk = function() {

        console.log(` ${this.first} says hello`);
    };

    const phil = new Person('Phil', 'Collins');
    console.log(phil);
    console.log(phil.first, phil.last);
    phil.print();
    phil.talk();

    const phil2 = {};
    Person.call(phil2, 'Phil', 'Collins');
    console.log(phil2);
    console.log(phil2.first, phil2.last);

    const Jack = new Person('Jack', 'Daniels');
    console.log(Jack);
    console.log(Jack.first, Jack.last);
    Jack.print();
    Jack.talk();

    Person.prototype.sleep = function() {
        console.log(`${this.first} is sleeping`);
    };
    Jack.sleep();

    // class Person2 {
    //     Person(first, last) {
    //         this.first = first;
    //         this.last = last;
    //     }
    //     print() {
    //         console.log(`I am ${this.first} ${this.last}`);
    //     }
    // }



    function Employee(first, last, department) {
        // this.first = first;
        // this.last = last;
        Person.call(this, first, last);
        this.department = department;
    }

    // Employee.prototype = new Person();
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Employee.prototype.print = function() {
        console.log(`I am ${this.first} ${this.last} and i work in ${this.department}`);
    };
    const bill = new Employee('Bill', 'Gates', 'Microsoft');
    bill.print();
    console.log(bill);
    bill.talk();

    Jack.print();
}());
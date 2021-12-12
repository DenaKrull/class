(function() {
    'use strict';

    const myObj = {
        name: 'John',
        // print: function() {
        //     console.log(this.name);
        // }
        print() {
            console.log(this.name);
        }
    };

    class Person {
        weight = 0; //
        #
        age = 20;
        constructor(first, last) {
            this.first = first;
            this.last = last;
            this.weight = 0;
        }
        print() {
            console.log(`I am ${this.first} ${this.last}`);
        }
        sleep() {
            console.log(`${this.first} ${this.last} is sleeping`);
        }
        talk() {
            console.log(`${this.first} ${this.last} says bla bla bla`);

        }
    }

    const p = new Person('phil', 'murphy');
    p.weight = 100; //
    p.#age = 30;
    p.sleep();
    p.talk();
    p.print();

    class Employee extends Person {
        constructor(first, last, department) {
            super(first, last);
            this.department = department;
        }
        print() {
            //     console.log(`I am ${this.first} ${this.last} and I work in ${this.department}`);
            super.print();
            console.log(`I work in ${this.department}`);
        }
    }

    const e = new Employee('phil', 'murphy', 'government');
    e.sleep();
    e.talk();
    e.print();

}());
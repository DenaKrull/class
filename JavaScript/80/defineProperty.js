// (function() {
'use strict';

const potus = Object.create({
    protoFunction: function() {
        console.log('protofunction');
    },
    first: { value: 'Joe', writable: true },
    last: { value: 'Biden', configurable: true },
});
potus.age = 105;
// potus.firstName = 'Donald';
console.log(potus);

console.log(potus.first);
potus.first = 'Donald';
potus.last = 'Trump';
console.log(potus);
delete potus.age;
delete potus.last;
console.log(potus);

potus.position = 'President';
Object.defineProperty(potus, 'position', {
    value: 'President',
    writable: true,
    configurable: true,
});
Object.defineProperty(potus, 'fullName', {
    get() {
        return `${this.first} ${this.last}`;
    },
    set(value) {
        const parts = value.split(' ');
        this.first = parts[0];
        this.last = parts[1];

    }

});
potus.fullName = 'Donald Trump';
console.log(potus);

class Person {
    //#age;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // this.#age = 21;
        // this._age = 21;
        let _age = 0;

        // this.getAge = () => _age;
        // this.setAge = (value) => _age = value;
        Object.defineProperty(this, 'age', {
            get() {
                return _age;
            },
            set(value) {
                if (value < 0 || value > 120) {
                    throw new Error('Invalid age');
                } else {
                    _age = value;
                }

            }
        });
    }

    print() {
            // console.log(`${this.first} ${this.last} ${this._age}`);
            console.log(`${this.first} ${this.last} ${this._age}`);
        }
        // get age() {
        //     return this._age;
        // }
        // set age(age) {
        //     if (age < 0 || age > 120) {
        //         throw new Error('Invalid age');
        //     }
        //     this._age = age;
        // }
}
const p = new Person('Donald', 'Trump');
p._age = -1;
console.log(p._age);
p.print();


// }());
'use strict';
const potus = {
    name: 'Joe Biden',
    age: 100,
    print: function() {
        console.log(this.name, this.age);
    }
};

console.log(potus);

const flotus = {
    name: 'Jill Biden',
    age: 75,
    print: function() {
        console.log(this.name, this.age);
    }
};

console.log(flotus);

function createPerson(name, age) {
    return {
        name: 'my name is: ' + name,
        age: 'my age is: ' + age,
        print: function() {
            console.log(this.name, this.age);
        }
    };
}

const psaki = createPerson('jan Psaki', 50);
// console.log(psaki);
psaki.print();

const Fauci = createPerson('jan Fauci', 80);
// console.log(Fauci);
Fauci.print();

Fauci.statements = ["no mask", "mask"];

console.log(Fauci, typeof Fauci);

const fauciString = JSON.stringify(Fauci);
console.log(fauciString, typeof fauciString);

const reconstitutedFauci = JSON.parse(fauciString);
console.log(reconstitutedFauci, typeof reconstitutedFauci);

const rcf2 = createPerson(reconstitutedFauci.name, reconstitutedFauci.age);
rcf2.print();
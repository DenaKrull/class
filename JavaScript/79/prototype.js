// (function() {
//     'use strict';

const organism = {};

const animal = Object.create(organism);
const mammal = Object.create(animal);
const dog = Object.create(mammal);

mammal.hasHair = true;
animal.hasHair = false;

dog.speak = function() {
    console.log('woof');
};

dog.speak();


//////////////

const spot = Object.create(dog);
spot.name = 'Spot';
spot.color = 'brown';
spot.weight = 10;
spot.breed = 'Chihuahua';
spot.master = {
    first: 'John',
    last: 'Doe'
};


console.log(spot.name, spot.color, spot.weight, spot.breed);
spot.speak();

const fluffy = Object.create(spot);
fluffy.name = 'Fluffy';
fluffy.color = 'white';
console.log(fluffy.name, fluffy.color, fluffy.weight, fluffy.breed);
fluffy.speak();

// fluffy.master.first = 'jill';
fluffy.master = {
    first: 'jill',
    last: 'Doe'
};
console.log(spot.master, fluffy.master);
// }());
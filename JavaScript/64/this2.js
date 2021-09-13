(function() {
    'use strict';

    const greeter1 = {
        greeting: 'Hello'


    };

    const greeter2 = {
        greeting: 'Shalom'
    };

    function greet(name, age) {
        console.log(this.greeting, name, age);
    }

    // greet('Joe');

    greet.call(greeter1, 'Joe', 103);
    greet.call(greeter2, 'Joe', 103);

    greet.apply(greeter2, ['Joe', 103]);

    const sayHello = greet.bind(greeter1);
    sayHello('Joe', 103);

    const sayShalomtoKamala = greet.bind(greeter2, 'Kamala', 98);

    sayShalomtoKamala();

    const sayShalomtoKamala2 = greet.bind(greeter2, 'Kamala');

    sayShalomtoKamala2(45);


    ///////


    //arrow functions dont get the this, this is the object ur inside of
    // console.log(this); // undefined


    const potus = {
        name: 'Joe Biden',
        age: 106,
        // print: function() {
        //     console.log(this.name, this.age);
        // }

        // print: () => console.log(this.name, this.age)

        print: function() {
            const arrowPrintFunction = () => console.log(this.name, this.age);
            arrowPrintFunction();
        }

        // addThePrint: function() {
        //     this.print = () => console.log(this.name, this.age);
        // }
    };

    potus.print();
    // potus.addThePrint();

}());
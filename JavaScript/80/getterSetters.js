(function() {
    'use strict';

    function createPerson(first, last) {
        return {
            first: first,
            last: last,

            // getFullName: function() {
            //     return `${this.first} ${this.last}`;
            // },
            // setFullName(fullName) {
            //     let names = fullName.split(' ');
            //     this.first = names[0];
            //     this.last = names[1];

            // }
            get fullName() {
                // return `${this.first} ${this.last}`;
            },
            set fullName(fullName) {
                let names = fullName.split(' ');

                if (names[1] !== 'Obama') {
                    throw new Error('You are not Obama');
                }
                this.first = names[0];
                this.last = names[1];

            }

        };
    }

    const p = createPerson('John', 'Doe');
    console.log(p.first, p.last);
    // console.log(p.getFullName());

    // p.setFullName('Dena Krull');
    // console.log(p.getFullName());

    p.fullName = 'Barack Obama';
    console.log(p.fullName);

}());
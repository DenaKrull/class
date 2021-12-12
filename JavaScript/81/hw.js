(function() {
    'use strict';

    class Student {
        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }
    }
    const joe = new Student('Joe', 'Smith', 12, '8th');
    console.log(joe);

    const students = [
        new Student('Joe', 'Smith', 12, '8th'),
        new Student('Jane', 'Smith', 11, '9th'),
        new Student('John', 'Doe', 10, '10th'),
    ];

    function printStudents(backwards, ...studentsArray) {
        studentsArray.forEach(student => {
            let { first: a, last: b, ...rest } = student;
            const { age, grade } = rest;
            // if (backwards) {
            //     console.log(`${last} ${first} is a ${grade}`);
            // } else {
            //     console.log(`${first}, ${last} is a ${grade}`);
            // }
            if (backwards) {
                // const temp = first;
                // first = last;
                // last = temp;
                [a, b] = [b, a];
            }
            console.log(`${a} ${b}  ${grade} ${age}`);
        });
    }

    printStudents(false, ...students);
    printStudents(true, ...students);

    function copyStudentsInfo(student) {
        //     return new Student(student.last, student.first, student.age, student.grade);
        const { first, last, ...rest } = student;
        return { last: first, first: last, ...rest };
    }
    console.log(copyStudentsInfo(joe));
}());
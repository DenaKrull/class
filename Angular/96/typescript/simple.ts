function greeter(person: string | number) {
    return `Hello, ${person}`;
}

let person: number | string;// {name: "joe Biden"};
person = 5;
person = "Joe Biden";


document.body.innerHTML = greeter(person);

let president: 'George Washington' | 'Barack Obama' | 'Donald Trump';
president = "George Washington";

interface Person {
    firstName: string;
    lastName: string;

    // print();
}

function greeter2(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const potus: { firstName: string, age?: number }/*: Person*/ = {
    firstName: "Joe",
    //     lastName: "Biden",
}
potus.age = 99

document.body.innerHTML = greeter2(potus);

class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;
    private ssn: string;

    constructor(public firstName: string, public lastName: string, public age?: number, private ssn?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
    }

    print() {
        console.log(`${this.firstName} ${this.lastName} ${this.age} ${this.ssn}`);
    }
    getGrades(): number[] {
        return [1, 2, 3, 4, 5];
    }
}

const student = new Student('Joe', 'Biden', 99, '123-45-6789');
// student.firstName = "Joe";
// student.lastName = "Biden";
student.print();
let grades = student.getGrades();
grades.push('foo');

function removeFromArray(array: string[] | number[], index: number): string[] | number[] {
     array.splice(index, 1);
     return array;
}
let numbers = [1, 2, 3, 4, 5];
removeFromArray(numbers, 2);
console.log(numbers)

let strings = ['foo', 'bar', 'baz'];
removeFromArray(strings, 1);
console.log(strings)


document.body.innerHTML = greeter2(student);
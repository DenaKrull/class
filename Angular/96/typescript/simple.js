function greeter(person) {
    return "Hello, ".concat(person);
}
var person; // {name: "joe Biden"};
person = 5;
person = "Joe Biden";
document.body.innerHTML = greeter(person);
var president;
president = "George Washington";
function greeter2(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var potus = {
    firstName: "Joe"
};
potus.age = 99;
document.body.innerHTML = greeter2(potus);
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age, ssn) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.ssn = ssn;
    }
    Student.prototype.print = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.age, " ").concat(this.ssn));
    };
    Student.prototype.getGrades = function () {
        return [1, 2, 3, 4, 5];
    };
    return Student;
}());
var student = new Student('Joe', 'Biden', 99, '123-45-6789');
// student.firstName = "Joe";
// student.lastName = "Biden";
student.print();
var grades = student.getGrades();
grades.push('foo');
function removeFromArray(array, index) {
    array.splice(index, 1);
}
var numbers = [1, 2, 3, 4, 5];
removeFromArray(numbers, 2);
console.log(numbers);
var strings = ['foo', 'bar', 'baz'];
removeFromArray(strings, 1);
console.log(strings);
document.body.innerHTML = greeter2(student);

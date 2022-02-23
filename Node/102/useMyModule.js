const mm = require('./myModule');
const Person = require('./Person');
mm.sayHello();
mm.sayGoodbye();


const joe = new Person('Joe', '130');
joe.sayName();
joe.sayAge();
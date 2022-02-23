// exports.sayHello = () => console.log('Hello');
// exports.sayGoodbye = () => {
//   console.log('Goodbye');
//   cantBeUsedOutside();
// }

function cantBeUsedOutside() {
  console.log('cantBeUsedOutside');
}

module.exports={
  sayHello = () => console.log('Hello'),
  sayGoodbye= () => console.log('Goodbye')
} 


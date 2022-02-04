// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // numbers.filter(n => n % 2 === 0).map(n => `${n} is even`).forEach(n => console.log(n));

// rxjs.from(numbers)
//   .pipe(
//     rxjs.operators.filter(n => n % 2 === 0),
//     rxjs.operators.map(n => `${n} is even`))
//   .forEach(n => console.log(n));

// rxjs.interval(1000);

// rxjs.interval(1000).pipe(
//   rxjs.operators.take(10),
//   rxjs.operators.filter(n => n % 2 === 0),
//   rxjs.operators.map(n => `${n} is even`))
//   .forEach(n => console.log(n));

console.log('after');


//setInterval(() => {console.log(new Date().toLocaleTimeString())}, 1000);

const theButton = document.getElementById('theButton');
const clicks = 0;
// const clickHandler = () => {
//   console.log(`${clicks++} click was at ${new Date().toLocaleTimeString()}`);
//   }
// theButton.addEventListener('click', clickHandler);


// rxjs.fromEvent(theButton, 'click')
//   .pipe(
//     rxjs.operators.take(3),
//     rxjs.operators.map(e => `${clicks++} click was at ${new Date().toLocaleTimeString()}`))
//   .forEach(n => console.log(n));


// rxjs.fromEvent(theButton, 'click')
//   .pipe(
//     rxjs.operators.take(3),
//     rxjs.operators.scan(count => count + 1),
//     rxjs.operators.map(c => `${c} click was at ${new Date().toLocaleTimeString()}`)
//   )
//   .foreach(n => console.log(n));

// const clicks = 0;
// let lastClck = 0;
// const clickHandler = () => {
//   const now = new Date();
//   if (now - lastClck > 1000) {
//     console.log(`${clicks++} click was at ${new Date().toLocaleTimeString()}`);
//     lastCLick = new Date();
//   }
// }
// theButton.addEventListener('click', clickHandler);

// rxjs.fromEvent(theButton, 'click')
//   .pipe(
//     rxjs.operators.throttleTime(1000),
//     rxjs.operators.map(e => `${clicks++} click was at ${e.timestamp}`)
//   )
//   .forEach(n => console.log(n));



// const subscription = rxjs.fromEvent(theButton, 'click')
//   .pipe(

//     rxjs.operators.map(e => `${clicks++} click was at ${e.timestamp}`)
//   )
//   .subscribe(n => console.log(n),);
// if (clicks === 3) {
//   subscription.unsubscribe();
// }



// const subscription = rxjs.fromEvent(theButton, 'click')
//   .pipe(
//     rxjs.operators.take(3),
//     rxjs.operators.map(e => `${clicks++} click was at ${e.timestamp}`)
//   )
//   .subscribe(
//     {
//       next: n => console.log(n),
//      // error: err => console.log(`Error: ${err}`),
//       complete: () => console.log('complete')
//     });
// if (clicks === 3) {
//   subscription.unsubscribe();
// }

// rxjs.Observable.create(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);

//   let i = 4;
//   setInterval(() => { observer.next(i++) }, 1000);

// })
//   .pipe(
//     rxjs.operators.map(n => `got ${n}`),
//   ).subscribe({
//     next: n => console.log(n),
//     error: err => console.log(`Error: ${err}`),
//     complete: () => console.log('complete')

//   });


rxjs.Observable.create(observer => {
  theButton.addEventListener('click', () => observer.next(new Date().toLocaleTimeString()));
})
  .pipe(
    rxjs.operators.map(n => `${n} click was at ${new Date().toLocaleTimeString()}`)
  ).subscribe({
    next: n => console.log(n),
    error: err => console.log(`Error: ${err}`),
    complete: () => console.log('complete')
  });


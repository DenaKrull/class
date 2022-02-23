const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(11);


eventEmitter.on('classOver', () => console.log('Class is over'));
eventEmitter.emit('classOver');
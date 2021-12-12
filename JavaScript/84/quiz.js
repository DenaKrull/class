(async function() {
    'use strict';

    const response = await fetch('quiz.json');
    const orders = await response.json();
    console.log(orders);

    class Order {
        // constructor(customer, address, items) {
        //     this.customer = customer;
        //     this.address = address;
        //     this.items = items;

        // }

        constructor(data) {
            this.customer = data.customer;
            this.address = data.address;
            this.items = data.items;
        }

        // static fromJSON(data) {
        //     return new Order(data.customer, data.address, data.items);
        // }
    }
    // const theOrders = [];
    // for (let i = 0; i < orders.length; i++) {
    //     const order = new Order(orders[i].customer, orders[i].address, orders[i].items);
    //     theOrders.push(order);
    // }

    // orders.forEach(order => { theOrders.push(new Order(order.customer, order.address, order.items)); });

    // const theOrders = orders.map(order =>
    //     new Order(order.customer, order.address, order.items)
    // );

    const theOrders = orders.map(order =>
        new Order(order)
    );

    // const theOrders = orders.map(order =>
    //     Order.fromJSON(order)
    // );
    console.log(theOrders);



    // orders.forEach(order => {
    //     const orderDiv = document.createElement('div');
    //     let html = `
    //         <h3>Order</h3>
    //         <p>${order.customer}</p>
    //         <p>${order.address}</p>

    //         `;
    //     order.items.forEach(item => {

    //         html += `
    //             <h3>Order</h3>
    //             <p>${item.item}</p>
    //             <p>${order.quantity}</p>
    //             <p>${item.total}</p>


    //             `;

    //     });
    //     orderDiv.innerHTML = html;
    //     document.body.appendChild(orderDiv);
    // });



}());
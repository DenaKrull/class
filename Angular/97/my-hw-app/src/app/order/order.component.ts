import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../shared/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  {
  @Input() order!: Order;


}

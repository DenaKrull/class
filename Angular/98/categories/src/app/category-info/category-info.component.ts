import { Component, Input, OnInit } from '@angular/core';
import Category from '../shared/Category.ts';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css']
})
export class CategoryInfoComponent  {
@Input() category!: Category;

}

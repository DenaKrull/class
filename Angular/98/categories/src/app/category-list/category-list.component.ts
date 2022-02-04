import { Component, EventEmitter, Input, Output } from '@angular/core';
import Category from '../shared/Category.ts';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() categories!: Category[];
  @Input() selectedIndex = 0;
  @Output() selectedIndexChnaged = new EventEmitter<number>();

  // selectedCategory?: Category;
  // selectedIndex = 1;

  // categorySelected(selection: string) {
  //   //const selection = (event.target as HTMLSelectElement)?.value;
  //   console.log(selection);
  //   // this.selectedCategory = this.categories.find(c => c.name === selection);
  //   //this.selectedIndex = this.categories.findIndex(c => c.name === selection);
  //   this.selectedIndex = Number(selection);
  // }
  handleselectedIndexChanged(){
    this.selectedIndexChnaged.emit(this.selectedIndex);
  }

}

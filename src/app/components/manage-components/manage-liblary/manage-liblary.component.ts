import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-liblary',
  templateUrl: './manage-liblary.component.html',
  styleUrls: ['./manage-liblary.component.css']
})
export class ManageLiblaryComponent implements OnInit {

  showAddItemComponent = false;
  showAddBorrowerComponent = false;
  showDeleteBorrowerComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

  openAddItemsComponent() {
    this.showAddItemComponent = true;
    this.showAddBorrowerComponent = false;
    this.showDeleteBorrowerComponent = false;
  }

  openDeleteBorrowerComponent() {
    this.showAddItemComponent = false;
    this.showAddBorrowerComponent = false;
    this.showDeleteBorrowerComponent = true;
  }

  openAddBorrowerComponent() {
    this.showAddItemComponent = false;
    this.showAddBorrowerComponent = true;
    this.showDeleteBorrowerComponent = false;
  }
}

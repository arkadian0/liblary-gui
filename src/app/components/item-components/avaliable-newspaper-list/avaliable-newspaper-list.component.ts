import { Component, OnInit } from '@angular/core';
import { NewspaperDto } from 'src/app/models/newspaper.model';
import { ItemDto } from 'src/app/models/item.model';
import { ItemRestService } from 'src/app/services/item-rest.service';

@Component({
  selector: 'app-avaliable-newspaper-list',
  templateUrl: './avaliable-newspaper-list.component.html',
  styleUrls: ['./avaliable-newspaper-list.component.css']
})
export class AvaliableNewspaperListComponent implements OnInit {

  constructor(private itemRestService: ItemRestService) { }

  newspapers: NewspaperDto[] = [];
  showBorrowModal = false;
  item: ItemDto;

  ngOnInit(): void {
    this.itemRestService.getAllNewspapers().subscribe(fetchData => {
      this.newspapers = fetchData;
    })
  }

  closeBorrowModal(event) {
    if (event == true)
      this.showBorrowModal = false;
  }

  showModal(title: string, bookId: number) {
    this.item = { title: title, itemId: bookId }
    this.showBorrowModal = true;
  }
}

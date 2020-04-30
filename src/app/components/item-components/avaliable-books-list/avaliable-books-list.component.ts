import { Component, OnInit } from '@angular/core';
import { BookDto } from 'src/app/models/book.model';
import { ItemDto } from 'src/app/models/item.model';
import { ItemRestService } from 'src/app/services/item-rest.service';

@Component({
  selector: 'app-avaliable-books-list',
  templateUrl: './avaliable-books-list.component.html',
  styleUrls: ['./avaliable-books-list.component.css']
})
export class AvaliableBooksListComponent implements OnInit {

  constructor(private itemRestService: ItemRestService) { }

  books: BookDto[] = [];
  showBorrowModal = false;
  item: ItemDto;

  ngOnInit(): void {
    this.itemRestService.getAllBooks().subscribe(fetchData => {
      this.books = fetchData;
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

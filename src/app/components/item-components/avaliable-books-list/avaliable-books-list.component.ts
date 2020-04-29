import { Component, OnInit } from '@angular/core';
import { BookDto, ItemDto } from 'src/app/services/transfer/transfer-interfaces';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-avaliable-books-list',
  templateUrl: './avaliable-books-list.component.html',
  styleUrls: ['./avaliable-books-list.component.css']
})
export class AvaliableBooksListComponent implements OnInit {

  constructor(private liblaryRestService: LiblaryRestService) { }

  books: BookDto[] = [];
  showBorrowModal = false;
  item: ItemDto;

  ngOnInit(): void {
    this.liblaryRestService.getAllBooks().subscribe(fetchData => {
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

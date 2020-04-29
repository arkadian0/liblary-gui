import { Component, OnInit } from '@angular/core';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { BookDto, NewspaperDto, ItemDto } from 'src/app/services/transfer/transfer-interfaces';

@Component({
  selector: 'app-avaliable-newspaper-list',
  templateUrl: './avaliable-newspaper-list.component.html',
  styleUrls: ['./avaliable-newspaper-list.component.css']
})
export class AvaliableNewspaperListComponent implements OnInit {

  constructor(private liblaryRestService: LiblaryRestService) { }

  newspapers: NewspaperDto[] = [];
  showBorrowModal = false;
  item: ItemDto;

  ngOnInit(): void {
    this.liblaryRestService.getAllNewspapers().subscribe(fetchData => {
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

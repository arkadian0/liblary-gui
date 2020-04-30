import { Component, OnInit } from '@angular/core';
import { ItemType } from 'src/app/enums/item-type-enum';
import { PediodType } from 'src/app/enums/period-type-enum';
import { BookDto } from 'src/app/models/book.model';
import { NewspaperDto } from 'src/app/models/newspaper.model';
import { ItemRestService } from 'src/app/services/item-rest.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemTypes = [
    { id: ItemType.BOOK, name: 'Book' },
    { id: ItemType.NEWSPAPER, name: 'Newspaper' },
  ];

  periodicTypes = [
    { id: PediodType.DIARY },
    { id: PediodType.WEEKLY },
    { id: PediodType.MONTHLY }
  ]

  templateBook = <BookDto>{};
  templateNewspaper = <NewspaperDto>{};
  showBookForm = false;
  showNewspaperForm = false;

  isSuccess = false;
  infoMessage;
  selectedItem;

  constructor(private itemRestService: ItemRestService) { }

  ngOnInit(): void {
  }

  changeItem(event) {
    if (event.id == ItemType.BOOK) {
      this.showBookForm = true;
      this.showNewspaperForm = false;
    }
    if (event.id == ItemType.NEWSPAPER) {
      this.showBookForm = false;
      this.showNewspaperForm = true;
    }
  }

  submitForBook() {
    this.itemRestService.addBooks([this.templateBook]).subscribe(res => {
      if (res.status == 201) {
        this.isSuccess = true;
        this.showMessageByTime("Book created correctly");
      }
    }, (error) => {
      this.isSuccess = false;
      this.showMessageByTime("Problem occured");
    });
  }


  submitForNewspapers() {
    this.itemRestService.addNewspapers([this.templateNewspaper]).subscribe(res => {
      if (res.status == 201) {
        this.isSuccess = true;
        this.showMessageByTime("Newspaper created correctly");
      }
    }, (error) => {
      this.isSuccess = false;
      this.infoMessage = "Problem occured";
    });
  }

  showMessageByTime(message) {
    this.infoMessage = message
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }

}





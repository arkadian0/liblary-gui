import { Component, OnInit } from '@angular/core';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { BookDto, NewspaperDto } from 'src/app/services/transfer/transfer-interfaces';

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

  templateBook = new TemplateBook;
  templateNewspaper = new TemplateNewspaper;
  showBookForm = false;
  showNewspaperForm = false;

  isSuccess = false;
  infoMessage;
  selectedItem;

  constructor(private liblaryRestService: LiblaryRestService) { }

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
    const bookDto = this.createBookDtoByTemplate(this.templateBook);
    this.liblaryRestService.addBooks([bookDto]).subscribe(res => {
      if (res.status == 201) {
        this.showAndCloseSuccessMessage('Book created correctly');
      }
    });
  }

  submitForNewspapers() {
    const newspaperDto = this.createNewspaperDtoByTemplate(this.templateNewspaper);
    this.liblaryRestService.addNewspapers([newspaperDto]).subscribe(res => {
      if (res.status == 201) {
        this.showAndCloseSuccessMessage('Newspaper created correctly');
      }
    });
  }

  createNewspaperDtoByTemplate(templateNewspaper: TemplateNewspaper) {
    const newspaperDto = <NewspaperDto>{};
    newspaperDto.format = templateNewspaper.format;
    newspaperDto.releaseDate = templateNewspaper.releaseDate;
    newspaperDto.pageLength = templateNewspaper.pageLength;
    newspaperDto.publishingHouse = templateNewspaper.publishingHouse;
    newspaperDto.title = templateNewspaper.title;
    newspaperDto.periodicType = templateNewspaper.periodicType;
    return newspaperDto;
  }


  showAndCloseSuccessMessage(message) {
    this.isSuccess = true;
    this.infoMessage = message;
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }

  createBookDtoByTemplate(templateBook: TemplateBook): any {
    const bookDto = <BookDto>{};
    bookDto.authorFirstName = templateBook.authorFirstName;
    bookDto.authorLastName = templateBook.authorLastName;
    bookDto.format = templateBook.format;
    bookDto.releaseDate = templateBook.releaseDate;
    bookDto.numberOfChapters = templateBook.numberOfChapters;
    bookDto.pageLength = templateBook.pageLength;
    bookDto.publishingHouse = templateBook.publishingHouse;
    bookDto.title = templateBook.title;
    return bookDto;
  }
}

enum ItemType {
  BOOK = 0,
  NEWSPAPER = 1,
}

enum PediodType {
  DIARY = "DIARY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}


class TemplateBook {
  constructor(public title?: string,
    public format?: string,
    public publishingHouse?: string,
    public pageLength?: number,
    public releaseDate?: Date,
    public numberOfChapters?: number,
    public authorFirstName?: string,
    public authorLastName?: string
  ) { }
}

class TemplateNewspaper {
  constructor(public title?: string,
    public format?: string,
    public publishingHouse?: string,
    public pageLength?: number,
    public releaseDate?: Date,
    public periodicType?: PediodType,
  ) { }
}
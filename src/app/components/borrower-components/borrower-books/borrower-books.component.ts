import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { BookDto } from 'src/app/models/book.model';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { BorrowRestService } from 'src/app/services/borrow-rest.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borrower-books',
  templateUrl: './borrower-books.component.html',
  styleUrls: ['./borrower-books.component.css']
})
export class BorrowerBooksComponent implements OnInit, OnDestroy {

  @ViewChild('content') modalExample: ElementRef
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() borrower: BorrowerDto;
  subscription = new Subscription();

  infoMessage: string;
  isSuccess = false;
  books: BookDto[] = [];

  constructor(private modalService: NgbModal, private brrowRestService: BorrowRestService, private borrowerRestService: BorrowerRestService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(this.borrowerRestService.getAllBooksForBorrower(this.borrower.borrowerId).subscribe(fetchData => {
      this.books = fetchData;
    }))

  }

  ngAfterViewInit() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    this.modalService.open(this.modalExample, ngbModalOptions);
  }

  closeModal() {
    this.modalService.dismissAll(this.modalExample);
    this.modalClosed.emit(true);
  }

  deleteBorrowForUser(book: BookDto, borrowerId: number, index: number) {
    this.subscription.add(this.brrowRestService.deleteBorrowForBorrower(borrowerId, book.bookId).subscribe(res => {
      if (res.status == 201) {
        this.books.splice(index, 1);
        this.isSuccess = true;
        this.showMessageByTime("Borrow deleted correctly");
      }
    }, (error) => {
      this.infoMessage = "Problem occured";
    }))
  }

  showMessageByTime(message) {
    this.infoMessage = message
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }
}

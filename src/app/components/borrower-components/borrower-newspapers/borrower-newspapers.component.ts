import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter, Input, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { NewspaperDto } from 'src/app/models/newspaper.model';
import { BorrowRestService } from 'src/app/services/borrow-rest.service';
import { ItemRestService } from 'src/app/services/item-rest.service';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borrower-newspapers',
  templateUrl: './borrower-newspapers.component.html',
  styleUrls: ['./borrower-newspapers.component.css']
})
export class BorrowerNewspapersComponent implements OnInit, OnDestroy {

  @ViewChild('content') modalExample: ElementRef
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() borrower: BorrowerDto;

  infoMessage: string;
  isSuccess: boolean;
  newspapers: NewspaperDto[] = [];
  subscription = new Subscription();

  constructor(private modalService: NgbModal, private borrowRestService: BorrowRestService, private borrowerRestService: BorrowerRestService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(this.borrowerRestService.getAllNewspapersBorrower(this.borrower.borrowerId).subscribe(fetchData => {
      this.newspapers = fetchData;
    }));
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

  deleteBorrowForUser(newspaper: NewspaperDto, borrowerId: number, index: number) {
    this.subscription.add(this.borrowRestService.deleteBorrowForBorrower(borrowerId, newspaper.newspaperId).subscribe(res => {
        if (res.status == 201) {
          this.newspapers.splice(index, 1);
          this.isSuccess = true;
          this.showMessageByTime("Borrow deleted correctly");
        }
      }, (error) => {
        this.infoMessage = "Problem occured";
      }));
    }
  
    showMessageByTime(message) {
      this.infoMessage = message
      setTimeout(() => {
        this.infoMessage = null;
      }, 3000);
    }
}


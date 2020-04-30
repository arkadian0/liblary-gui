import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { BorrowerDto } from 'src/app/models/borrower.model';

@Component({
  selector: 'app-borrower-edit',
  templateUrl: './borrower-edit.component.html',
  styleUrls: ['./borrower-edit.component.css']
})
export class BorrowerEditComponent implements OnInit {

  @ViewChild('content') modalExample: ElementRef
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() borrower: BorrowerDto;
  cardNumber: number;
  infoMessage: string;
  isSuccess = false;
  constructor(private modalService: NgbModal, private borrowerRestService: BorrowerRestService) { }


  ngOnInit(): void {
    this.cardNumber = this.borrower.cardNumber;
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

  updateCardNumber(borrowerId: number, cardNumber: number) {
    this.borrowerRestService.updateBorrowerCardNumber(borrowerId, cardNumber).subscribe(res => {
      if (res.status == 200) {
        this.isSuccess = true;
        this.showMessageByTime("Borrow deleted correctly");
      }
    }, (error) => {
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

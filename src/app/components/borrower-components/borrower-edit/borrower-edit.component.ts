import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerDto } from 'src/app/services/transfer/transfer-interfaces';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';

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
  constructor(private modalService: NgbModal, private liblaryRestService: LiblaryRestService) { }


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
    console.log(borrowerId, cardNumber);
    this.liblaryRestService.updateBorrowerCardNumber(borrowerId, cardNumber).subscribe(res => {
      if (res.status == 200) {
        this.showAndCloseSuccessMessage();
      }
    });
  }

  showAndCloseSuccessMessage() {
    this.infoMessage = "Card number updated correctly";
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }
}

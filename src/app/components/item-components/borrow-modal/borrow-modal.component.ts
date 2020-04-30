import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { ItemDto } from 'src/app/models/item.model';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { BorrowRestService } from 'src/app/services/borrow-rest.service';

@Component({
  selector: 'app-borrow-modal',
  templateUrl: './borrow-modal.component.html',
  styleUrls: ['./borrow-modal.component.css']
})
export class BorrowModalComponent implements OnInit {

  @ViewChild('content') modalExample: ElementRef
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() item: ItemDto;

  borrowers: BorrowerDto[] = [];
  selectedBorrowerId: number;
  infoMessage: string;
  isSuccess;

  constructor(private modalService: NgbModal, private borrowRestService: BorrowRestService, private borrowerRestService: BorrowerRestService) { }

  ngOnInit(): void {
    this.borrowerRestService.getAllBorrowers().subscribe(fetchData => {
      this.borrowers = fetchData;
    })
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

  borrowItem() {
    if (this.selectedBorrowerId) {
      this.borrowRestService.borrowItem(this.selectedBorrowerId, this.item.itemId).subscribe(res => {
        if (res.status == 201) {
          this.isSuccess = true;
          this.showMessageByTime("Newspaper borrower correctly");
        }
      }, (error) => {
        this.infoMessage = "Problem occured";
      });
    }
  }
  
    showMessageByTime(message) {
      this.infoMessage = message
      setTimeout(() => {
        this.infoMessage = null;
      }, 3000);
    }
}

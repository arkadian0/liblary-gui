import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerDto, ItemDto } from 'src/app/services/transfer/transfer-interfaces';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';

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

  constructor(private modalService: NgbModal, private liblaryRestService: LiblaryRestService) { }

  ngOnInit(): void {
    this.liblaryRestService.getAllBorrowers().subscribe(fetchData => {
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
      this.liblaryRestService.borrowItem(this.selectedBorrowerId, this.item.itemId).subscribe(res => {
        if (res.status == 201) {
          this.showAndCloseSuccessMessage();
        }
      });
    } else {
      this.infoMessage = "Please check any value";
      this.isSuccess = false;
    }
  }

  showAndCloseSuccessMessage() {
    this.isSuccess = true;
    this.infoMessage = "Item borrowerd correctly";
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }
}

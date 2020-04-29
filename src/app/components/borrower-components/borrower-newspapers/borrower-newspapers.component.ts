import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NewspaperDto, BorrowerDto } from 'src/app/services/transfer/transfer-interfaces';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';

@Component({
  selector: 'app-borrower-newspapers',
  templateUrl: './borrower-newspapers.component.html',
  styleUrls: ['./borrower-newspapers.component.css']
})
export class BorrowerNewspapersComponent implements OnInit {

  @ViewChild('content') modalExample: ElementRef
  @Output() modalClosed = new EventEmitter<boolean>();
  @Input() borrower: BorrowerDto;
  infoMessage: string;
  newspapers: NewspaperDto[] = [];
  constructor(private modalService: NgbModal, private liblaryRestService: LiblaryRestService) { }


  ngOnInit(): void {
    this.liblaryRestService.getAllNewspapersBorrower(this.borrower.borrowerId).subscribe(fetchData => {
      this.newspapers = fetchData;
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

  deleteBorrowForUser(newspaper: NewspaperDto, borrowerId: number, index: number) {
    this.liblaryRestService.deleteBorrowForBorrower(borrowerId, newspaper.newspaperId).subscribe(res => {
      if (res.status == 200) {
        this.newspapers.splice(index, 1);
        this.showAndCloseSuccessMessage(newspaper);
      }
    });
  }

  showAndCloseSuccessMessage(newspaper: NewspaperDto) {
    this.infoMessage = "Book " + newspaper.title + " deleted correctly";
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }
}


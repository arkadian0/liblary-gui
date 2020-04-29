import { Component, OnInit } from '@angular/core';
import { BorrowerDto } from 'src/app/services/transfer/transfer-interfaces';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit {

  showBorrowerBooksModal = false;
  showBorroweNewspapersModal = false;
  showBorowerEditModal = false;
  showModel = false;

  searchText: string;
  borrowers: BorrowerDto[] = [];
  transferBorrower: BorrowerDto;

  constructor(private liblaryRestService: LiblaryRestService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.liblaryRestService.getAllBorrowers().subscribe(fetchData => {
      this.borrowers = fetchData;
    })
  }

  closeBorrowerBooksModal(event) {
    if (event)
      this.showBorrowerBooksModal = false;
  }
  
  closeBorrowerNewspapersModal(event) {
    if (event)
      this.showBorroweNewspapersModal = false;
  }

  closeBorrowerEditModal(event) {
    if (event)
      this.showBorowerEditModal = false;
  }

  showNewspapersModal(borrower: BorrowerDto) {
    this.transferBorrower = borrower;
    this.showBorroweNewspapersModal = true;
  }

  showEditModal(borrower: BorrowerDto) {
    this.transferBorrower = borrower;
    this.showBorowerEditModal = true;
  }

  showBooksModal(borrower: BorrowerDto) {
    this.transferBorrower = borrower;
    this.showBorrowerBooksModal = true;
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-borrowers-list',
  templateUrl: './borrowers-list.component.html',
  styleUrls: ['./borrowers-list.component.css']
})
export class BorrowersListComponent implements OnInit, OnDestroy {

  showBorrowerBooksModal = false;
  showBorroweNewspapersModal = false;
  showBorowerEditModal = false;
  showModel = false;

  searchText: string;
  borrowers: BorrowerDto[] = [];
  transferBorrower: BorrowerDto;
  subscription = new Subscription();
  constructor(private borrowerRestService: BorrowerRestService, private modalService: NgbModal) { }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    this.subscription.add(this.borrowerRestService.getAllBorrowers().subscribe(fetchData => {
      this.borrowers = fetchData;
    }));
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

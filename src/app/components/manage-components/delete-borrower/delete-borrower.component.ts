import { Component, OnInit } from '@angular/core';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { BorrowerDto } from 'src/app/models/borrower.model';

@Component({
  selector: 'app-delete-borrower',
  templateUrl: './delete-borrower.component.html',
  styleUrls: ['./delete-borrower.component.css']
})
export class DeleteBorrowerComponent implements OnInit {

  constructor(private borrowerRestService: BorrowerRestService) { }

  selectedBorrowerId: number;
  infoMessage: string;
  isSuccess;
  borrowers: BorrowerDto[] = [];

  ngOnInit(): void {
    this.borrowerRestService.getAllBorrowers().subscribe(fetchData => {
      this.borrowers = fetchData;
    })
  }

  deleteBorrower() {
    this.borrowerRestService.deleteBorrower(this.selectedBorrowerId).subscribe(res => {
        if (res.status == 200) {
          this.borrowers.splice(1, 1);
          this.isSuccess = true;
          this.showMessageByTime("Borrower deleted correctly");
        }
      }, (error) => {
        this.isSuccess = false;
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

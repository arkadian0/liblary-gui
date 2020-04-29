import { Component, OnInit } from '@angular/core';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { BorrowerDto } from 'src/app/services/transfer/transfer-interfaces';

@Component({
  selector: 'app-delete-borrower',
  templateUrl: './delete-borrower.component.html',
  styleUrls: ['./delete-borrower.component.css']
})
export class DeleteBorrowerComponent implements OnInit {

  constructor(private liblaryRestService: LiblaryRestService) { }

  selectedBorrowerId: number;
  infoMessage: string;
  isSuccess;
  borrowers: BorrowerDto[] = [];

  ngOnInit(): void {
    this.liblaryRestService.getAllBorrowers().subscribe(fetchData => {
      this.borrowers = fetchData;
    })
  }

  deleteBorrower() {
    this.liblaryRestService.deleteBorrower(this.selectedBorrowerId).subscribe(res => {
      if (res.status == 200){
        this.borrowers.splice(1, 1);
        this.showAndCloseSuccessMessage("Borrower deleted correctly");
      }

    })
  }
  showAndCloseSuccessMessage(message) {
    this.isSuccess = true;
    this.infoMessage = message;
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }


}

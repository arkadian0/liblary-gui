import { Component, OnInit } from '@angular/core';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';


@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.css']
})
export class AddBorrowerComponent implements OnInit {

  templateBorrower = <BorrowerDto>{};
  isSuccess = false;
  infoMessage;

  constructor(private borrowerRestService: BorrowerRestService) { }

  ngOnInit(): void { }

  submit() {
    this.borrowerRestService.createBorrowers([this.templateBorrower]).subscribe(res => {
      if (res.status == 201) {
        this.isSuccess = true;
        this.showMessageByTime("Borrower created correctly");
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
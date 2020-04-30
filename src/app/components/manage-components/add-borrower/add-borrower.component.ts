import { Component, OnInit, OnDestroy } from '@angular/core';
import { BorrowerDto } from 'src/app/models/borrower.model';
import { BorrowerRestService } from 'src/app/services/borrower-rest.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.css']
})
export class AddBorrowerComponent implements OnInit, OnDestroy {

  templateBorrower = <BorrowerDto>{};
  isSuccess = false;
  infoMessage: string;

  subscription = new Subscription();

  constructor(private borrowerRestService: BorrowerRestService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void { }

  submit() {
    this.subscription.add(this.borrowerRestService.createBorrowers([this.templateBorrower]).subscribe(res => {
      if (res.status == 201) {
        this.isSuccess = true;
        this.showMessageByTime("Borrower created correctly");
      }
    }, (error) => {
      this.isSuccess = false;
      this.infoMessage = "Problem occured";
    }));
  }

  showMessageByTime(message) {
    this.infoMessage = message
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }
}
import { Component, OnInit } from '@angular/core';
import { LiblaryRestService } from 'src/app/services/liblary-rest.service';
import { BorrowerDto } from 'src/app/services/transfer/transfer-interfaces';
import { TemplateBorrower } from 'src/app/models/borrower.template';

@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.css']
})
export class AddBorrowerComponent implements OnInit {

  templateBorrower = <TemplateBorrower>{};;
  isSuccess = false;
  infoMessage;

  constructor(private liblaryRestService: LiblaryRestService) { }

  ngOnInit(): void {

  }

  submit() {
    const borrowerDto = this.createBorrowerDtoByTemplate(this.templateBorrower);
    this.liblaryRestService.createBorrowers([borrowerDto]).subscribe(res => {
      if (res.status == 201) {
        this.showAndCloseSuccessMessage("Borrower created correctly");
      }
    });
  }

  showAndCloseSuccessMessage(message) {
    this.isSuccess = true;
    this.infoMessage = message
    setTimeout(() => {
      this.infoMessage = null;
    }, 3000);
  }

  createBorrowerDtoByTemplate(templateBorrower: TemplateBorrower) {
    const borrowerDto = <BorrowerDto>{};
    borrowerDto.cardNumber = templateBorrower.cardNumber;
    borrowerDto.firstName = templateBorrower.firstName;
    borrowerDto.lastName = templateBorrower.lastName;
    return borrowerDto;
  }
}
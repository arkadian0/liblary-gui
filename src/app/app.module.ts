import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LiblaryRestService } from './services/liblary-rest.service';
import { CommonModule } from '@angular/common';
import { BorrowersListComponent } from './components/borrower-components/borrowers-list/borrowers-list.component';
import { BorrowerBooksComponent } from './components/borrower-components/borrower-books/borrower-books.component';
import { BorrowerNewspapersComponent } from './components/borrower-components/borrower-newspapers/borrower-newspapers.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { BorrowerEditComponent } from './components/borrower-components/borrower-edit/borrower-edit.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AvaliableNewspaperListComponent } from './components/item-components/avaliable-newspaper-list/avaliable-newspaper-list.component';
import { AvaliableBooksListComponent } from './components/item-components/avaliable-books-list/avaliable-books-list.component';
import { BorrowModalComponent } from './components/item-components/borrow-modal/borrow-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddItemComponent } from './components/manage-components/add-item/add-item.component';
import { AddBorrowerComponent } from './components/manage-components/add-borrower/add-borrower.component';
import { DeleteBorrowerComponent } from './components/manage-components/delete-borrower/delete-borrower.component';
import { ManageLiblaryComponent } from './components/manage-components/manage-liblary/manage-liblary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BorrowersListComponent,
    BorrowerBooksComponent,
    BorrowerNewspapersComponent,
    BorrowerEditComponent,
    AvaliableNewspaperListComponent,
    AvaliableBooksListComponent,
    BorrowModalComponent,
    BorrowModalComponent,
    AddItemComponent,
    AddBorrowerComponent,
    DeleteBorrowerComponent,
    ManageLiblaryComponent
  ],
  imports: [
    NgbPaginationModule, 
    NgbAlertModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [LiblaryRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
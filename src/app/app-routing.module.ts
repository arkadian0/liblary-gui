import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageLiblaryComponent } from './components/manage-components/manage-liblary/manage-liblary.component';
import { AvaliableNewspaperListComponent } from './components/item-components/avaliable-newspaper-list/avaliable-newspaper-list.component';
import { BorrowersListComponent } from './components/borrower-components/borrowers-list/borrowers-list.component';
import { AvaliableBooksListComponent } from './components/item-components/avaliable-books-list/avaliable-books-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: AvaliableBooksListComponent},
  { path: 'manage', component: ManageLiblaryComponent},
  { path: 'borrowers', component: BorrowersListComponent},
  { path: 'newspapers', component: AvaliableNewspaperListComponent},
  { path: '**', redirectTo: 'home' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageLibraryComponent } from './components/manage-components/manage-library/manage-library.component';
import { AvailableNewspaperListComponent } from './components/item-components/available-newspaper-list/avaliable-newspaper-list.component';
import { BorrowersListComponent } from './components/borrower-components/borrowers-list/borrowers-list.component';
import { AvailableBooksListComponent } from './components/item-components/available-books-list/avaliable-books-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: AvailableBooksListComponent},
  { path: 'manage', component: ManageLibraryComponent},
  { path: 'borrowers', component: BorrowersListComponent},
  { path: 'newspapers', component: AvailableNewspaperListComponent},
  { path: '**', redirectTo: 'home' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

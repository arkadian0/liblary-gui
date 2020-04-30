import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BorrowerDto } from '../models/borrower.model';
import { BookDto } from '../models/book.model';
import { NewspaperDto } from '../models/newspaper.model';
import { GlobalConstants } from './api.urls';

@Injectable({
  providedIn: 'root'
})
export class BorrowerRestService {

  REST_URL = GlobalConstants.API_URL;

  constructor(private http: HttpClient) { }

  getAllBorrowers(): Observable<BorrowerDto[]> {
    return this.http.get<BorrowerDto[]>(GlobalConstants.API_URL + '/borrowers');
  }

  getAllBooksForBorrower(borrowerId: number): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(GlobalConstants.API_URL + '/items/borrowers/' + borrowerId + "/books");
  }

  getAllNewspapersBorrower(borrowerId: number): Observable<NewspaperDto[]> {
    return this.http.get<NewspaperDto[]>(GlobalConstants.API_URL + '/items/borrowers/' + borrowerId + "/newspapers");
  }

  updateBorrowerCardNumber(borrowerId: number, cardNumber: number): Observable<HttpResponse<Response>> {
    return this.http.put<Response>(GlobalConstants.API_URL + '/borrowers/' + borrowerId + "/card-number/" + cardNumber, null, {observe: 'response'});
  }

  createBorrowers(borrowers: BorrowerDto[]): Observable<HttpResponse<Response>>{
    return this.http.post<Response>(GlobalConstants.API_URL + '/borrowers' , borrowers, {observe: 'response'});
  }

  deleteBorrower(borrowerId: number): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(GlobalConstants.API_URL + '/borrowers/' + borrowerId, {observe: 'response'});
  }

}

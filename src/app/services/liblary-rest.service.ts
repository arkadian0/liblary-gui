import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BorrowerDto, BookDto, NewspaperDto } from './transfer/transfer-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiblaryRestService {

  REST_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllBorrowers(): Observable<BorrowerDto[]> {
    return this.http.get<BorrowerDto[]>(this.REST_URL + '/borrowers');
  }

  getAllBooks(): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.REST_URL + '/items/books');
  }

  getAllNewspapers(): Observable<NewspaperDto[]> {
    return this.http.get<NewspaperDto[]>(this.REST_URL + '/items/newspapers');
  }

  getAllBooksForBorrower(borrowerId: number): Observable<BookDto[]> {
    return this.http.get<BookDto[]>(this.REST_URL + '/items/borrowers/' + borrowerId + "/books");
  }

  getAllNewspapersBorrower(borrowerId: number): Observable<NewspaperDto[]> {
    return this.http.get<NewspaperDto[]>(this.REST_URL + '/items/borrowers/' + borrowerId + "/newspapers");
  }

  updateBorrowerCardNumber(borrowerId: number, cardNumber: number): Observable<HttpResponse<Response>> {
    return this.http.put<Response>(this.REST_URL + '/borrowers/' + borrowerId + "/card-number/" + cardNumber, null, {observe: 'response'});
  }

  deleteBorrowForBorrower(borrowerId: number, bookId: number): Observable<HttpResponse<Response>> {
     return this.http.delete<Response>(this.REST_URL + '/borrowers/' + borrowerId + "/delete-items/" + bookId,  {observe: 'response'});
  }

  borrowItem(borrowerId: number, itemId: number): Observable<HttpResponse<Response>>{
    return this.http.post<Response>(this.REST_URL + '/borrowers/' + borrowerId + "/borrow-items/" + itemId, null, {observe: 'response'});
  }

  addBooks(bookDtos: BookDto[]): Observable<HttpResponse<Response>>{
    return this.http.post<Response>(this.REST_URL + '/items/books' , bookDtos, {observe: 'response'});
  }

  addNewspapers(newspapersDto: NewspaperDto[]): Observable<HttpResponse<Response>>{
    return this.http.post<Response>(this.REST_URL + '/items/newspapers' , newspapersDto, {observe: 'response'});
  }

  
  createBorrowers(borrowers: BorrowerDto[]): Observable<HttpResponse<Response>>{
    return this.http.post<Response>(this.REST_URL + '/borrowers' , borrowers, {observe: 'response'});
  }

  deleteBorrower(borrowerId: number): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(this.REST_URL + '/borrowers/' + borrowerId, {observe: 'response'});
  }

}

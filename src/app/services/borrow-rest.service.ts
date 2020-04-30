import { GlobalConstants } from './api.urls';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BorrowRestService {

    constructor(private http: HttpClient) { }

    deleteBorrowForBorrower(borrowerId: number, bookId: number): Observable<HttpResponse<Response>> {
        return this.http.delete<Response>(GlobalConstants.API_URL + '/borrowers/' + borrowerId + "/delete-items/" + bookId, { observe: 'response' });
    }

    borrowItem(borrowerId: number, itemId: number): Observable<HttpResponse<Response>> {
        return this.http.post<Response>(GlobalConstants.API_URL + '/borrowers/' + borrowerId + "/borrow-items/" + itemId, null, { observe: 'response' });
    }
}
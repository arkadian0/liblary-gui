import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDto } from '../models/book.model';
import { NewspaperDto } from '../models/newspaper.model';
import { Injectable } from '@angular/core';
import { GlobalConstants } from './api.urls';

@Injectable({
    providedIn: 'root'
})
export class ItemRestService {

    constructor(private http: HttpClient) { }

    getAllBooks(): Observable<BookDto[]> {
        return this.http.get<BookDto[]>(GlobalConstants.API_URL + '/items/books');
    }

    getAllNewspapers(): Observable<NewspaperDto[]> {
        return this.http.get<NewspaperDto[]>(GlobalConstants.API_URL + '/items/newspapers');
    }


    addBooks(bookDtos: BookDto[]): Observable<HttpResponse<Response>> {
        return this.http.post<Response>(GlobalConstants.API_URL + '/items/books', bookDtos, { observe: 'response' });
    }

    addNewspapers(newspapersDto: NewspaperDto[]): Observable<HttpResponse<Response>> {
        return this.http.post<Response>(GlobalConstants.API_URL + '/items/newspapers', newspapersDto, { observe: 'response' });
    }
}

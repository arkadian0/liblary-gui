export interface BorrowerDto {
    borrowerId: number;
    firstName:  string;
    lastName:   string;
    cardNumber: number;
}

export interface BookDto {
    bookId:           number;
    title:            string;
    format:           string;
    publishingHouse:  string;
    pageLength:       number;
    releaseDate:      Date;
    numberOfChapters: number;
    authorFirstName:        string;
    authorLastName:         string;
}

export interface NewspaperDto {
    newspaperId:     number;
    title:           string;
    format:          string;
    publishingHouse: string;
    pageLength:      number;
    releaseDate:     Date;
    periodicType:    string;
}

export interface ItemDto {
    itemId: number;
    title: string;
}
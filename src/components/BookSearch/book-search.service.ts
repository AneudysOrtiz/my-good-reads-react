import fetchUrl from '../../shared/fetchUrl/fetchUrl';
import { BookSearchResponse } from '../../shared/interfaces/BookSearchResponse';

export async function getBooksByType(type: string): Promise<BookSearchResponse> {
    try {
        return await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });
    } catch (exception) {
        return {} as BookSearchResponse;
    }
}


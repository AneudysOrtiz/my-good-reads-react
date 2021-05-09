import React from 'react';
import { render } from '@testing-library/react';
import { BookItemComponent } from './BookItemComponent';
import { BookItem } from '../../shared/interfaces/BookSearchResponse';

describe('BookItem component', () => {
    const defaultProps: BookItem = {
        id: "UAYvDwAAQBAJ",
        volumeInfo: {
            authors: ["Marijn Haverbeke"],
            description: "Eloquent JavaScript dives into this flourishing language and teaches you to write code that&#39;s beautiful and effective.",
            imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
            publishedDate: "2011-01-15T00:00:00.000Z",
            publisher: "No Starch Press",
            title: "Eloquent JavaScript"
        },
        disabled: false
    };

    beforeEach(() => {

    });

    test('renders without error', () => {
        const { getByText } = render(<BookItemComponent book={defaultProps} />);
        const linkElement = getByText(/Eloquent JavaScript/i);
        expect(linkElement).toBeInTheDocument();
    });
});
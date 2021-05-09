import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { WishListItemComponent, WishListItemProps } from './WishListItemComponent';

describe('BookItem component', () => {
    const defaultProps: WishListItemProps = {
        book: {
            id: "UAYvDwAAQBAJ",
            volumeInfo: {
                authors: ["Marijn Haverbeke"],
                description: "Dives into this flourishing language and teaches you to write code that&#39;s beautiful and effective.",
                imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
                publishedDate: "2011-01-15T00:00:00.000Z",
                publisher: "No Starch Press",
                title: "Eloquent JavaScript"
            },
            disabled: false
        },
        removeFromWishList: jest.fn()
    };

    test('renders without error', () => {
        const { getByText, getByTestId } = render(<WishListItemComponent {...defaultProps} />);
        const linkElement = getByText(/Eloquent JavaScript/i);
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(getByTestId("btn-remove-wish-list"))
        expect(defaultProps.removeFromWishList).toHaveBeenCalledTimes(1);
    });
});
import React, { useContext } from 'react'
import { BookItem } from '../../shared/interfaces/BookSearchResponse'
import { BookItemComponent } from '../BookItem/BookItemComponent'
import { BooksContext } from '../BookSearch/BookSearch';
import './BookList.scss';

interface BookListProps {
    books: BookItem[];
}

export const BookList = ({ books }: BookListProps) => {
    const { addToWishList, disableBook } = useContext(BooksContext);

    const handleAddWishList = (book: BookItem) => {
        addToWishList(book);
        disableBook(book.id, true);
    }

    return (
        <>
            <div className="book-list-container">
                {
                    books.map(item => <BookItemComponent key={item.id} book={item} addToWishList={handleAddWishList} />)
                }
            </div>
        </>
    )
}
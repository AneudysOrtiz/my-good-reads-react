import React, { useContext } from 'react';
import { BookItem } from '../../shared/interfaces/BookSearchResponse';
import { BooksContext } from '../book-search/BookSearch';
import imgPlaceHolder from '../../assets/book.png';
import classnames from 'classnames';
import './Book.scss';

interface BookItemProps {
    book: BookItem;
}


export const BookItemComponent = ({ book }: BookItemProps) => {
    const { addToWishList, disableBook } = useContext(BooksContext);

    const handleAddWishList = (book: BookItem) => {
        addToWishList(book);
        disableBook(book.id, true);
    }


    return (
        <>
            <div className="image-container">
                <img className="image" src={book.volumeInfo.imageLinks?.thumbnail || imgPlaceHolder} alt="Volume Thumnail" />
                <div className="text-container">
                    <h5><b>{book.volumeInfo?.title}</b></h5>
                    {
                        book.volumeInfo.authors ?
                            <p className="author">by {book.volumeInfo.authors}</p>
                            :
                            <p className="author">Unknown</p>
                    }
                    <button onClick={() => handleAddWishList(book)} className={classnames('button', { 'disabled': !!book.disabled })}>Add to whishlist</button>
                </div>
            </div>
        </>
    )
}
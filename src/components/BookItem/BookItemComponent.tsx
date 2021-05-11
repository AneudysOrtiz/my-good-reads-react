import React, { useContext } from 'react';
import { BookItem } from '../../shared/interfaces/BookSearchResponse';
import { BooksContext } from '../BookSearch/BookSearch';
import imgPlaceHolder from '../../assets/book.png';
import classnames from 'classnames';
import './Book.scss';

export interface BookItemProps {
    book: BookItem;
    addToWishList: (book: BookItem) => void;
}

export const BookItemComponent = ({ book, addToWishList }: BookItemProps) => {

    return (
        <article className="image-container">
            <img className="image" src={book.volumeInfo.imageLinks?.thumbnail || imgPlaceHolder} alt="Volume Thumnail" />
            <div className="text-container">
                <h5>{book.volumeInfo.title}</h5>
                {
                    book.volumeInfo.authors ?
                        <p className="author">by {book.volumeInfo.authors}</p>
                        :
                        <p className="author">Unknown Author</p>
                }

                {
                    book.volumeInfo.publisher ?
                        <p className="publisher">{book.volumeInfo.publisher}</p>
                        :
                        <p className="publisher">Unknown Publisher</p>
                }

                {
                    book.volumeInfo.description ?
                        <p className="description">{book.volumeInfo.description}</p>
                        :
                        <p className="description">No Description</p>
                }

                <button data-testid="btn-add-wish-list" onClick={() => addToWishList(book)} className={classnames('button', { 'disabled': !!book.disabled })}>Add to whishlist</button>
            </div>
        </article>
    )
}
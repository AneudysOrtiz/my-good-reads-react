import React from 'react'
import { BookItem } from '../../shared/interfaces/BookSearchResponse'
import { BookItemComponent } from '../book-item/BookItemComponent'
import './BookList.scss';

interface BookListProps {
    books: BookItem[];
}

export const BookList = ({ books }: BookListProps) => {
    return (
        <>
            <div className="container">
                {
                    books.map(item => <BookItemComponent key={item.id} book={item} />)
                }
            </div>
        </>
    )
}
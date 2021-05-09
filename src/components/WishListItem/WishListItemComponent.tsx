import React from 'react'
import { BookItem } from '../../shared/interfaces/BookSearchResponse';
import deleteIcon from '../../assets/delete.png'
import '../WishList/WishList.scss';


export interface WishListItemProps {
    book: BookItem;
    removeFromWishList: (id: string) => void
}

export const WishListItemComponent = ({ book, removeFromWishList }: WishListItemProps) => {
    return (
        <li key={book.id}>
            {book.volumeInfo?.title}
            <img src={deleteIcon} data-testid="btn-remove-wish-list" onClick={() => removeFromWishList(book.id)} alt="Remove icon" />
        </li>
    )
}

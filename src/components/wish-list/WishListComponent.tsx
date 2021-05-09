import React, { useContext } from 'react'
import deleteIcon from '../../assets/delete.jpeg'
import { BooksContext } from '../book-search/BookSearch'
import './WishList.scss'

export const WishListComponent = () => {

    const { wishList, removeFromWishList, disableBook } = useContext(BooksContext);

    const handleDelete = (id: string) => {
        removeFromWishList(id);
        disableBook(id, false);
    }
    return (
        <div>
            <h3 className="wish-list-title">Wish List {wishList.length ? `(${wishList.length})` : ''}</h3>

            <ul className="wish-list">
                {
                    wishList.map(item => {
                        return (
                            <li key={item.id}>
                                <img src={deleteIcon} onClick={() => handleDelete(item.id)} />
                                {item.volumeInfo?.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

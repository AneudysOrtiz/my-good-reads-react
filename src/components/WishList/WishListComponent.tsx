import React, { useContext } from 'react'
import { BooksContext } from '../BookSearch/BookSearch'
import { WishListItemComponent } from '../WishListItem/WishListItemComponent'
import './WishList.scss'

export const WishListComponent = () => {

    const { wishList, removeFromWishList, disableBook } = useContext(BooksContext);

    const handleDelete = (id: string) => {
        removeFromWishList(id);
        disableBook(id, false);
    }
    return (
        <div className="wish-list-container">
            <h3 className="wish-list-title">My Reading Wish List {wishList?.length ? `(${wishList?.length})` : ''}</h3>

            <ul className="wish-list">
                {
                    wishList?.map(item => <WishListItemComponent key={item.id} book={item} removeFromWishList={handleDelete} />)
                }

            </ul>
        </div>
    )
}

import { useState } from 'react'
import { BookItem } from '../shared/interfaces/BookSearchResponse';

export const useWishlist = () => {
    const [wishList, setWishlist] = useState([] as BookItem[]);

    const addToWishList = (book: BookItem) => {
        if (!wishList.find(item => item.id === book.id))
            setWishlist([...wishList, book])
    }

    const removeFromWishList = (id: string) => {
        setWishlist(wishList.filter(item => item.id !== id))
    }

    return ({
        wishList,
        addToWishList,
        removeFromWishList
    })
}

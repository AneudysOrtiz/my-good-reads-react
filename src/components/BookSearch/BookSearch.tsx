import React, { useEffect, useState } from "react";
import { BookItem } from "../../shared/interfaces/BookSearchResponse";
import { BookList } from "../BookList/BookListComponent";
import { useWishlist } from "../../hooks/useWishlist";
import { WishListComponent } from "../WishList/WishListComponent";
import { useBookSearch } from "../../hooks/useBookSearch";
import loadingIcon from '../../assets/loading.gif';

interface Context {
    wishList: BookItem[];
    addToWishList: (book: BookItem) => void;
    removeFromWishList: (id: string) => void;
    disableBook: (id: string, disabled: boolean) => void;
}

export const BooksContext = React.createContext({} as Context);

export const BookSearch = () => {

    const [loading, setLoading] = useState(false);
    const { wishList, addToWishList, removeFromWishList } = useWishlist();
    const {
        allAvailableBooks,
        bookType,
        bookTypeToSearch,
        requestBooks,
        updateBookTypeToSearch,
        updateBookType,
        disableBook,
        clearList
    } = useBookSearch();

    useEffect(() => {
        if (!bookTypeToSearch)
            return;

        requestBooks().then(() => {
            setLoading(false);
        });
    }, [bookTypeToSearch]);

    useEffect(() => {
        if (allAvailableBooks.length)
            clearList();

        const timerId = setTimeout(() => {
            if (bookType)
                setLoading(true);

            updateBookTypeToSearch(bookType);
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [bookType]);


    return (
        <BooksContext.Provider value={{ wishList, addToWishList, removeFromWishList, disableBook }}>
            <div className="main--container">
                <div className="book--container">
                    <div className="search-params">
                        <div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updateBookTypeToSearch(bookType)
                                }}>

                                <input
                                    className="full-width"
                                    autoFocus
                                    name="gsearch"
                                    type="search"
                                    value={bookType}
                                    placeholder="Search for books to add to your reading list and press Enter"
                                    onChange={e => updateBookType(e.target.value)}
                                />
                            </form>
                            {!bookType && (
                                <div className="empty">
                                    <p>
                                        Try searching for a topic, for example
                                        <a onClick={() => { updateBookType("Javascript"); }}> {" "}"Javascript"</a>
                                    </p>
                                </div>
                            )}

                            {(bookType && !allAvailableBooks.length && !loading) && (
                                <div className="empty">
                                    <p>
                                        No Results
                                        </p>
                                </div>
                            )}

                            {loading && (<div className="empty"><img src={loadingIcon} alt="loading" /></div>)}

                        </div>
                    </div>
                </div>

                <BookList books={allAvailableBooks} />
            </div>

            <WishListComponent />
        </BooksContext.Provider>
    );
};
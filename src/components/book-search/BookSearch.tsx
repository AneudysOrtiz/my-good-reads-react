import React, { useEffect } from "react";
import { BookItem } from "../../shared/interfaces/BookSearchResponse";
import { BookList } from "../book-list/BookListComponent";
import { useWishlist } from "../wish-list/useWishlist";
import { WishListComponent } from "../wish-list/WishListComponent";
import { useBookSearch } from "./useBookSearch";

interface Context {
    wishList: BookItem[];
    addToWishList: (book: BookItem) => void;
    removeFromWishList: (id: string) => void;
    disableBook: (id: string, disabled: boolean) => void;
}

export const BooksContext = React.createContext({} as Context);

export const BookSearch = () => {

    const { wishList, addToWishList, removeFromWishList } = useWishlist();
    const {
        allAvailableBooks,
        bookType,
        bookTypeToSearch,
        requestBooks,
        updateBookTypeToSearch,
        updateBookType,
        disableBook
    } = useBookSearch();

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            updateBookTypeToSearch(bookType);
        }, 500);
        return () => {
            clearTimeout(handler);
        };
    }, [bookType]);


    return (
        <>
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

                            </div>
                        </div>
                    </div>

                    <BookList books={allAvailableBooks} />
                </div>

                <WishListComponent />
            </BooksContext.Provider>
        </>
    );
};
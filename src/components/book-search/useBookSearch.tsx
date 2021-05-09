import { useState } from 'react';
import { BookItem } from '../../shared/interfaces/BookSearchResponse';
import { getBooksByType } from "./book-search.service";

export const useBookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([] as BookItem[]);

    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks.items);
        } else {
            setAllAvailableBooks([])
        }
    }

    function disableBook(id: string, disabled: boolean) {
        const newList = allAvailableBooks.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    disabled,
                };
                return updatedItem;
            }
            return item;
        });

        setAllAvailableBooks(newList);
    }

    return ({
        allAvailableBooks,
        bookTypeToSearch,
        bookType,
        requestBooks,
        updateBookTypeToSearch,
        updateBookType,
        disableBook
    })
}

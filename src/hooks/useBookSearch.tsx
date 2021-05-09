import { useState } from 'react';
import { BookItem } from '../shared/interfaces/BookSearchResponse';
import { getBooksByType } from "../components/BookSearch/book-search.service";

export const useBookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([] as BookItem[]);

    const requestBooks = async () => {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks.items || []);
        } else {
            setAllAvailableBooks([])
        }
    }

    const disableBook = (id: string, disabled: boolean) => {
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

    const clearList = () => {
        setAllAvailableBooks([])
    }


    return ({
        allAvailableBooks,
        bookTypeToSearch,
        bookType,
        requestBooks,
        updateBookTypeToSearch,
        updateBookType,
        disableBook,
        clearList
    })
}

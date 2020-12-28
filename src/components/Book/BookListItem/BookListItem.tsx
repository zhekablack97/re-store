import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { book } from '../../../type/type';

interface IBookListItem {
    book: book
}

const BookListItem: React.FC<IBookListItem> = ({ book }) => {

    const { author, title} = book

    return (
        <>
            <span>{title}</span>
            <span>{author}</span>
        </>
    )
}

export default BookListItem;
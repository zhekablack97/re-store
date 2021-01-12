import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { book } from '../../../type/type';
import './BookListItem.module.scss';

interface IBookListItem {
    book: book
}

const BookListItem: React.FC<IBookListItem> = ({ book }) => {

    const { author, title} = book

    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
        </div>
    )
}

export default BookListItem;
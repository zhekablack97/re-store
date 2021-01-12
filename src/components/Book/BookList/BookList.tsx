import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { book } from '../../../type/type';
import BookListItem from '../BookListItem/BookListItem';
import './BookList.module.scss';

interface IBookListWrapper {
    books?: book[]
}

const BookList: React.FC<IBookListWrapper> = ({books, ...props}) => {
    console.log(props);
    return (
        <div>
            {books?.map((book) => {
                return (
                    <BookListItem key={book.id} book={ book }/>
                )
            })}
        </div>
    )
}

export default BookList;
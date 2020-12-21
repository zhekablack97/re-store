const booksLoader = (newBooks: any) => {
    return{
        type: 'BOOKS_LOADER',
        payload: newBooks
    }
}
export{
    booksLoader
}
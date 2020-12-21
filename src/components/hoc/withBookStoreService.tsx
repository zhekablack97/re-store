import React from 'react'
import { BookStoreServiceConsumer } from '../BookStoreServiceContext'

const WithBookStoreService = () => (Wrapped:any) => {

    return (props:any) => {
        return(
            <BookStoreServiceConsumer>
                 {
                    
                     (bookStoreService: any) => {
                        return (<Wrapped {...props} bookStoreService={bookStoreService}/>)
                     }
                 }
            </BookStoreServiceConsumer>
        )
    }
}
export default WithBookStoreService;
import React from "react";
import styles from "./Header.module.scss";

interface IHeader {
    item: number,
    sum: number
}

const Header: React.FC<IHeader> = ({item, sum}) => {
    return (
        <header>
            Re-store добавлено в корзину {item} на сумму {sum}
        </header>
    )
}
export default Header;
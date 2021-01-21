import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import styles from "./ShopppingCartTable.module.scss";

interface IShopppingCartTable {}

const ShopppingCartTable: React.FC<IShopppingCartTable> = () => {
  return (
    <TableContainer>
      <Typography variant="h4" id="tableTitle" component="div">
        Ваш заказ
      </Typography>
      <Table className="" aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Товар</TableCell>
            <TableCell>Количество</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Действий</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Книга</TableCell>
            <TableCell>2</TableCell>
            <TableCell>500 руб.</TableCell>
            <TableCell>
              <button>+</button>
              <button>-</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="h4" id="tableTitle" align="right" component="div">
        Итого - 500 руб.
      </Typography>
    </TableContainer>
  );
};
export default ShopppingCartTable;

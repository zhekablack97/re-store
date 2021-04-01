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
// import styles from "./ShopppingCartTable.module.scss";
import { cardItemsType } from "../../type/type";
import { connect } from "react-redux";

interface IShopppingCartTable {
  items?: cardItemsType[];
  total?: number;
  onIncrease?: any;
  onDecrease?: any;
  onDelite?: any;
}

const ShopppingCartTable: React.FC<IShopppingCartTable> = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelite,
}) => {
  const RenderRow = (item: cardItemsType, index: number) => {
    const { title, count, total, id } = item;

    console.log(item);

    if (Object.keys(item).length == 0) {
      return "";
    }

    return (
      <TableRow key={id}>
        <TableCell>{index}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{count}</TableCell>
        <TableCell>{total} руб.</TableCell>
        <TableCell>
          <button onClick={() => onIncrease(id)}>+</button>
          <button onClick={() => onDecrease(id)}>-</button>
          <button onClick={() => onDelite(id)}>DEL</button>
        </TableCell>
      </TableRow>
    );
  };

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
        <TableBody>{items?.map(RenderRow)}</TableBody>
      </Table>
      <Typography variant="h4" id="tableTitle" align="right" component="div">
        Итого - {total} руб.
      </Typography>
    </TableContainer>
  );
};

type mapStateToPropsType = {
  cardItems?: cardItemsType[];
  orderTotal?: number;
};

const mapStateToProps = ({ cardItems, orderTotal }: mapStateToPropsType) => {
  return {
    items: cardItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id: number) => {
      console.log(`onIncrease ${id}`);
    },
    onDecrease: (id: number) => {
      console.log(`onDecrease ${id}`);
    },
    onDelite: (id: number) => {
      console.log(`onDelite ${id}`);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopppingCartTable);

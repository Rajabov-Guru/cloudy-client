import React, { ReactNode } from 'react';
import { WithChildrenSx } from '../../common/types';
import './table.css';

const Table = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <div className="table-wrap">
      <table className={`table ${className}`}>{children}</table>
    </div>
  );
};

const TableHead = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <thead className={`table-head ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
};

const TableBody = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <tbody className={className}>{children}</tbody>;
};

const TableRow = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <tr className={`table-row ${className}`}>{children}</tr>;
};

const TableCell = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <td className={`table-cell ${className}`}>
      <div>{children}</div>
    </td>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;

import React, { ReactNode } from 'react';
import { WithChildrenSx } from '../../common/types';

const Table = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return (
    <div className="shadow-md sm:rounded-lg">
      <table className={`overflow-x-auto overflow-y-hidden min-w-full text-sm text-left text-gray-500 ${className}`}>
        {children}
      </table>
    </div>
  );
};

const TableHead = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <thead className={`text-xs text-gray-700 uppercase bg-gray-50 ${className}`}>{children}</thead>;
};

const TableBody = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <tbody className={className}>{children}</tbody>;
};

const TableRow = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <tr className={`bg-white border-b hover:bg-gray-50 ${className}`}>{children}</tr>;
};

const TableCell = (props: WithChildrenSx<ReactNode>) => {
  const { children, className } = props;
  return <td className={`w-4 p-4 ${className}`}>{children}</td>;
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;

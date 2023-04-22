import { Table as TableAntd, TableProps } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = <T extends object = any>(props: TableProps<T>) => {
  return <TableAntd {...props} />;
};

export default Table;

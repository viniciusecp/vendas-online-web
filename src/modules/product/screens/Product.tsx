import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';

import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../types/ProductType';

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    title: 'Preço',
    dataIndex: 'price',
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  return <Table columns={columns} dataSource={products} rowKey="id" />;
};

export default Product;

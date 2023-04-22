import { Tag } from 'antd';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors: string[] = [
  'blue',
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'geekblue',
  'purple',
];

const CategoryColumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return null;
  }

  const contentColor = colors[category.id - 1] || colors[0];

  return <Tag color={contentColor}>{category.name}</Tag>;
};

export default CategoryColumn;

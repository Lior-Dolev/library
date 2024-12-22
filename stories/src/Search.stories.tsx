import { Meta } from '@storybook/react';
import { Search, SearchTypeFilters } from '@horus-library/search';
import { useCallback, useState } from 'react';

const meta = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;

enum FiltersTypes {
  ALL = 'all',
  SHOES = 'shoes',
  SHIRTS = 'shirots',
}
export const Default = () => {
  const [selected, setSelected] = useState<string>(FiltersTypes.ALL);
  const onSelect = useCallback((type: string) => setSelected(type), []);
  return (
    <SearchTypeFilters
      values={[
        {
          type: FiltersTypes.SHOES,
          label: 'נעליים',
        },
        {
          type: FiltersTypes.SHIRTS,
          label: 'חולצות',
        },
      ]}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

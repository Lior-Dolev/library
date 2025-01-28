import { Meta, StoryObj } from '@storybook/react';
import {
  Search,
  SearchBox,
  SearchResultGroupTitle,
  SearchResultsItem,
  SearchResultsItemSkeleton,
  SearchTypeFilters,
  GroupHeader,
  ResultItem,
} from '@horus-library/search';
import { useCallback, useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const meta = {
  title: 'Components/Search',
  component: Search,
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

const groupHeaders: GroupHeader[] = [
  { primaryText: 'בגדים', type: 'clothes' },
  { primaryText: 'משחקים', type: 'games' },
];

const generateItems = (type: string, count: number): ResultItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `${type}-${index + 1}`,
    type,
    displayText: `תוצאה מספר_${index + 1}`,
    icon:
      type === 'clothes' ? <FitnessCenterIcon /> : <LocalLaundryServiceIcon />,
  }));
};

const resultItems = [
  ...generateItems('games', 10),
  ...generateItems('clothes', 10),
];

export const Default: Story = {
  args: {
    isLoading: false,
    groupHeaders: groupHeaders,
    renderItem: (
      item: ResultItem,
      selected: boolean,
      onItemClick: (item: ResultItem) => void
    ): JSX.Element => {
      return (
        <SearchResultsItem
          key={item.id}
          title={item.displayText}
          icon={item.icon}
          titleCaption={item.description}
          selected={selected}
          onSelect={onItemClick}
          data={item}
        />
      );
    },
    resultItems: resultItems,
  },
};

// enum FiltersTypes {
//   ALL = 'all',
//   SHOES = 'shoes',
//   SHIRTS = 'shirots',
// }
// export const Default = () => {
//   const [selected, setSelected] = useState<string>(FiltersTypes.ALL);
//   const onSelect = useCallback((type: string) => setSelected(type), []);
//   return (
//     <SearchTypeFilters
//       values={[
//         {
//           type: FiltersTypes.SHOES,
//           label: 'נעליים',
//         },
//         {
//           type: FiltersTypes.SHIRTS,
//           label: 'חולצות',
//         },
//       ]}
//       selected={selected}
//       onSelect={onSelect}
//     />
//   );
// };

// export const FullSearchComponent = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const [filteredResultItems, setFilteredResultItems] =
//     useState<ResultItem[]>(resultItems);

//   const onSearch = useCallback((text: string, type?: string) => {
//     setFilteredResultItems(
//       resultItems.filter(({ displayText }) => displayText.includes(text))
//     );

//     //simulates a search with an api
//     if (text.length > 4) {
//       setIsLoading(true);

//       setTimeout(() => setIsLoading(false), 5000);
//     }
//   }, []);

//   const onSelect = (value: unknown) => {
//     console.log('value: ', value);
//   };

//   const renderItem = (
//     item: ResultItem,
//     selected: boolean,
//     onItemClick: (item: ResultItem) => void
//   ): JSX.Element => {
//     return (
//       <SearchResultsItem
//         key={item.id}
//         title={item.displayText}
//         icon={item.icon}
//         titleCaption={item.description}
//         selected={selected}
//         onSelect={onItemClick}
//         data={item}
//       />
//     );
//   };

//   return (
//     <Search
//       onSearch={onSearch}
//       groupHeaders={groupHeaders}
//       resultItems={filteredResultItems}
//       renderItem={renderItem}
//       onItemClick={onSelect}
//       isLoading={isLoading}
//     />
//   );
// };

// export const SearchBoxStory = () => {
//   return (
//     <SearchBox
//       onSearch={function (text: string): void | Promise<void> {
//         console.log('searching: ', text);
//       }}
//       isSearching={false}
//       onEscape={function (): void {
//         console.log('escaping');
//       }}
//       searchDebounceMS={1000}
//       onClick={() => {
//         console.log('click');
//       }}
//       isFocused={false}
//       searchText=""
//     />
//   );
// };

// export const SearchTitles = () => {
//   return (
//     <SearchResultGroupTitle
//       primaryText={'נעליים'}
//       captionText="אם אתם מחפשים נעל ספציפית תמלאו 5 תווים מהמק״ט"
//       count={4}
//     />
//   );
// };

// export const ResultItemSkeleton = () => {
//   return <SearchResultsItemSkeleton />;
// };

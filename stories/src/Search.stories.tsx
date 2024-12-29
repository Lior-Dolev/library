import { Meta } from '@storybook/react';
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
import { ReactNode, useCallback, useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

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

export const FullSearchComponent = () => {
  const groupHeaders: GroupHeader[] = [
    { primaryText: 'בגדים', type: 'clothes' },
    { primaryText: 'משחקים', type: 'games' },
  ];

  const resultItems: ResultItem[] = [
    {
      id: '1',
      type: 'clothes',
      displayText: '123',
      // name: 'חולצה 123',
      icon: <FitnessCenterIcon />,
    },
    {
      id: '2',
      // name: 'מכנסיים',
      displayText: 'q12',
      type: 'clothes',
      icon: <FitnessCenterIcon />,
    },
    {
      id: '3',
      // name: 'jaja',
      type: 'games',
      displayText: 'asas',
      icon: <LocalLaundryServiceIcon />,
      description: 'אחלה משחק מומלץ לתכניצנים',
    },
  ];

  const onSearch = (text: string, type?: string) => {
    console.log('text searched: ', text);
    console.log('type searched: ', type);
  };

  const onSelect = (value: unknown) => {
    console.log('value: ', value);
  };

  const renderItem = ({
    id,
    // name,
    // type,
    icon,
    description,
    displayText,
  }: ResultItem): JSX.Element => {
    return (
      <SearchResultsItem
        key={id}
        title={displayText}
        icon={icon as ReactNode}
        titleCaption={description as string | undefined}
        selected={false}
        onSelect={onSelect}
        index={0}
        style={{}}
        data={undefined}
      />
    );
  };

  return (
    <Search
      onSearch={onSearch}
      groupHeaders={groupHeaders}
      resultItems={resultItems}
      renderItem={renderItem}
      onItemClick={onSelect}
    />
  );
};

export const SearchBoxStory = () => {
  return (
    <SearchBox
      onSearch={function (text: string): void | Promise<void> {
        console.log('searching: ', text);
      }}
      isSearching={false}
      onEscape={function (): void {
        console.log('escaping');
      }}
      searchDebounceMS={1000}
      onClick={() => {
        console.log('click');
      }}
    />
  );
};

export const SearchTitles = () => {
  return (
    <SearchResultGroupTitle
      primaryText={'נעליים'}
      captionText="אם אתם מחפשים נעל ספציפית תמלאו 5 תווים מהמק״ט"
      count={4}
    />
  );
};

export const ResultItemSkeleton = () => {
  return <SearchResultsItemSkeleton />;
};

// export const resultItem = () => {
//   return (
//     <>
//       <SearchResultsItem
//         key={'shoes'}
//         title={'אולסטאר'}
//         titleCaption="אחלה נעל"
//         icon={<SnowshoeingIcon />}
//       />
//       <SearchResultsItem
//         key={'shoes'}
//         title={'אדידס 1234'}
//         //   titleCaption="אחלה נעל"
//         icon={<SnowshoeingIcon />}
//       />
//     </>
//   );
// };

// export const a = () => {
//   return (
//     <div>
//       <SearchResultGroupTitle
//         primaryText={'נעליים'}
//         captionText="תחפשו דגם ספציפי על ידי הזנה של 4 תווים לפחות..."
//       />
//       <SearchResultsItem
//         key={'adidas'}
//         title={'אדידס'}
//         icon={<FitnessCenterIcon />}
//       />
//       <SearchResultsItem
//         key={'nike'}
//         title={'נייקי בייקי'}
//         icon={<FitnessCenterIcon />}
//         titleCaption=" הנעל הטובה והמוכרת מבית נייקי בייקי"
//       />

//       <SearchResultGroupTitle primaryText={'מכנסיים'} count={2} />
//       <SearchResultsItem
//         key={'shorts'}
//         title={'שורט'}
//         icon={<LocalLaundryServiceIcon />}
//       />
//       <SearchResultsItem
//         key={'taaitz'}
//         title={'טייץ'}
//         icon={<LocalLaundryServiceIcon />}
//       />
//     </div>
//   );
// };

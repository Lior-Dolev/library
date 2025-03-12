import { type ChangeEvent, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import FormRow from '../FormRow';
import HybridTextField from './HybridTextField';
import HybridDescriptionRow from './HybridDescriptionRow';
import HybridTextFieldSuffixButton from './HybridTextFieldSuffixButton';
import { useWatchValue } from './useIsAutomatic';

export interface IHybridTextFieldRowProps {
  fetchData: string | undefined;
  dataUpdatedAt: number;
  fetchError: boolean;
  i18n: {
    fetchDataUpdatedAt: (formattedDate: string) => string;
    fetchFailed: string;
    manualInput: string;
    switchToAutomated: string;
    switchToManual: string;
  };
  label: string;
  name: string;
  readOnly: boolean;
  refetch: () => void;
}

const HybridTextFieldRow = ({
  fetchData: data,
  dataUpdatedAt,
  fetchError: error,
  i18n: { fetchDataUpdatedAt, fetchFailed, manualInput, switchToAutomated, switchToManual },
  refetch,
  label,
  name,
  readOnly,
}: IHybridTextFieldRowProps) => {
  const value: string | null | undefined = useWatchValue(name);
  const isAutomatic = value === null;
  const { setValue } = useFormContext();

  const onTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(name, event.target.value || '');
    },
    [name, setValue],
  );

  const onToggleMode = useCallback(() => {
    if (readOnly) {
      return;
    }

    if (isAutomatic) {
      setValue(name, data);
      return;
    }

    setValue(name, null);
  }, [data, isAutomatic, name, readOnly, setValue]);

  return (
    <FormRow
      label={label}
      readOnly={readOnly}
    >
      <div style={{ display: 'flex' }}>
        <HybridTextField
          name={name}
          onChange={onTextChange}
          readOnly={readOnly || isAutomatic === undefined || !!isAutomatic}
          value={isAutomatic ? data : value}
        />
        <HybridTextFieldSuffixButton
          i18n={{ switchToAutomated, switchToManual }}
          isAutomatic={isAutomatic}
          readOnly={readOnly}
          toggle={onToggleMode}
        />
      </div>
      <HybridDescriptionRow
        dataUpdatedAt={dataUpdatedAt}
        i18n={{
          fetchDataUpdatedAt,
          fetchFailed,
          manualInput,
        }}
        isAutomatic={isAutomatic}
        refetch={refetch}
        fetchError={!!error}
      />
    </FormRow>
  );
};

export default HybridTextFieldRow;

import { useFormContext, useWatch } from 'react-hook-form';

/**
 * @returns string - when manual input is on, and the string is the input
 * @returns null - when automatic input is on
 * @returns undefined - when the form hasn't set yet
 */
export const useWatchValue = (name: string): string | null | undefined => {
  const { control } = useFormContext();
  const watchedValue = useWatch({ control, name });

  return watchedValue;
};

export const useIsAutomatic = (name: string): boolean => {
  const value: string | null | undefined = useWatchValue(name);

  return value === null;
};

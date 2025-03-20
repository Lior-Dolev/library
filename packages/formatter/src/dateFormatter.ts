enum RelativeDate {
  today = 'היום',
  tomorrow = 'מחר',
  yesterday = 'אתמול',
}

const areDatesEqual = (valueA: Date, valueB: Date): boolean => {
  const input = new Date(valueA);
  const compareTo = new Date(valueB);

  return input.setHours(0, 0, 0, 0) === compareTo.setHours(0, 0, 0, 0);
};

const relativeMillisecondsDate = (value: number): RelativeDate | null => {
  const inputDate = new Date(value);
  const todaysDate = new Date();

  if (areDatesEqual(inputDate, todaysDate)) {
    return RelativeDate.today;
  }

  const tomorrowsDate = new Date(todaysDate);
  tomorrowsDate.setDate(todaysDate.getDate() + 1);

  if (areDatesEqual(inputDate, tomorrowsDate)) {
    return RelativeDate.tomorrow;
  }

  const yesterdaysDate = new Date(todaysDate);
  yesterdaysDate.setDate(todaysDate.getDate() - 1);

  if (areDatesEqual(inputDate, yesterdaysDate)) {
    return RelativeDate.yesterday;
  }

  return null;
};

export const formatOperationalRelativeDate = (value: number): string => {
  if (!value || isNaN(value)) {
    return '';
  }

  const prefix = value < 0 ? 'ש-' : 'ש+';

  const totalMin = Math.abs(value) / 60000;
  const hours = Math.floor(totalMin / 60);
  const minutes = Math.floor(totalMin % 60);

  return `${prefix} ${hours}:${minutes}`;
};

export const formatMilliSecondsDate = (
  value: number,
  options?: ({ shortYear?: boolean } | { noYear?: boolean }) & { relative?: boolean },
): string => {
  if (!value || isNaN(value)) {
    return '';
  }

  const definedOptions = options || {};
  const { relative } = definedOptions;

  if (relative) {
    const relativeDate = relativeMillisecondsDate(value);

    if (relativeDate) {
      return `${relativeDate}, ${new Date(value).toLocaleTimeString('he-IL', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'asia/jerusalem',
      })}`;
    }
  }

  return new Date(value).toLocaleTimeString('he-IL', {
    hour: '2-digit',
    year: 'shortYear' in definedOptions ? '2-digit' : 'noYear' in definedOptions ? undefined : 'numeric',
    month: '2-digit',
    day: '2-digit',
    minute: '2-digit',
    timeZone: 'asia/jerusalem',
  });
};

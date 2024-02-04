export const formatMilliSecondsDate = (
  value: number,
  options?: { shortYear?: boolean }
): string => {
  const { shortYear } = options || {};

  return new Date(value).toLocaleTimeString('he-IL', {
    hour: '2-digit',
    year: shortYear ? '2-digit' : 'numeric',
    month: '2-digit',
    day: '2-digit',
    minute: '2-digit',
  });
};

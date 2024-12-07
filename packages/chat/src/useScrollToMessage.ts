import { useLayoutEffect, useRef } from 'react';

export const useScrollToMessage = (messages: any, isLoading?: boolean) => {
  const unseenMessageRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef<boolean>(false);

  useLayoutEffect(() => {
    if (unseenMessageRef.current && !hasScrolled.current && !isLoading) {
      unseenMessageRef.current.scrollIntoView({ behavior: 'instant', block: 'nearest' });
      hasScrolled.current = true;
    }
  }, [isLoading, messages]);

  return { unseenMessageRef };
};

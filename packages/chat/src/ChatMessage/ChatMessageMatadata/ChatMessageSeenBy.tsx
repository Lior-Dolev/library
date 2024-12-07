import { forwardRef, type ForwardRefExoticComponent } from 'react';
import { Done, DoneAll } from '@mui/icons-material';
import { useTheme } from '@mui/material';

const NotSeenByAllIcon = forwardRef<SVGSVGElement>((props, ref) => (
  <Done
    {...props}
    ref={ref}
  />
));
const SeenByAllIcon = forwardRef<SVGSVGElement>((props, ref) => {
  const {
    palette: {
      info: { dark: color },
    },
  } = useTheme();

  return (
    <DoneAll
      style={{ fill: color }}
      ref={ref}
      {...props}
    />
  );
});

export interface IChatMessageSeenByProps {
  hasSeenByAll: boolean;
}

const ChatMessageSeenBy: ForwardRefExoticComponent<IChatMessageSeenByProps> = forwardRef<
  SVGSVGElement,
  IChatMessageSeenByProps
>(({ hasSeenByAll, ...rest }, ref) => {
  return hasSeenByAll ? (
    <SeenByAllIcon
      {...rest}
      ref={ref}
    />
  ) : (
    <NotSeenByAllIcon
      {...rest}
      ref={ref}
    />
  );
});

export default ChatMessageSeenBy;

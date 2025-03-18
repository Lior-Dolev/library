import { type ResizeHandle } from 'react-resizable';
import { DragHandle as DragHandleIcon } from '@mui/icons-material';
import { type ForwardedRef, forwardRef, type ForwardRefExoticComponent, type RefAttributes } from 'react';

interface CustomResizeHandleProps {
  resizeHandle: ResizeHandle;
}

const CustomResizeHandle: ForwardRefExoticComponent<CustomResizeHandleProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, CustomResizeHandleProps>(
    ({ resizeHandle, ...rest }: CustomResizeHandleProps, ref?: ForwardedRef<HTMLDivElement>) => {
      return (
        <div
          ref={ref}
          className={`react-resizable-handle react-resizable-handle-${resizeHandle}`}
          style={{
            transform: 'unset',
            width: '100%',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            top: '-1em',
            backgroundColor: '#31323e',
          }}
          {...rest}
        >
          <DragHandleIcon />
        </div>
      );
    },
  );

export default CustomResizeHandle;

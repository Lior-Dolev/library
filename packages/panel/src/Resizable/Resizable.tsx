import type { FC, ReactNode, RefObject } from 'react';
import {
  Resizable as ReactResizable,
  type ResizeHandle,
  type ResizableProps as ReactResizableProps,
} from 'react-resizable';
import 'react-resizable/css/styles.css';
import CustomResizeHandle from './CustomResizeHandle';

export interface ResizableProps extends Omit<ReactResizableProps, 'axis' | 'resizeHandles' | 'handle' | 'width'> {
  height: number;
}

/**
 * @todo - handle for left handle & top handle
 */
const Resizable: FC<ResizableProps> = ({ height, ...rest }: ResizableProps) => {
  return (
    <ReactResizable
      height={height}
      width={0}
      axis={'y'}
      handle={
        ((resizeHandle: ResizeHandle, ref: RefObject<HTMLDivElement>) => (
          <CustomResizeHandle
            resizeHandle={resizeHandle}
            ref={ref}
          />
        )) as unknown as (resizeHandle: ResizeHandle) => ReactNode
      }
      resizeHandles={['n']}
      {...rest}
    />
  );
};

export default Resizable;

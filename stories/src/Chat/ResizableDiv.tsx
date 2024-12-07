import { useState, useRef } from 'react';

type ResizeDirection = 'right' | 'left' | 'top' | 'bottom' | null;

const ResizableDiv = () => {
  const [size, setSize] = useState({ width: 300, height: 200 });
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [resizeDirection, setResizeDirection] = useState<ResizeDirection>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const edgeThreshold = 10; // Distance from edge to trigger resize
  const minSize = 100; // Minimum width & height

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    let newCursor = 'default';
    let direction: ResizeDirection = null;

    if (clientX < rect.left + edgeThreshold) {
      newCursor = 'ew-resize'; // Left edge
      direction = 'left';
    } else if (clientX > rect.right - edgeThreshold) {
      newCursor = 'ew-resize'; // Right edge
      direction = 'right';
    } else if (clientY < rect.top + edgeThreshold) {
      newCursor = 'ns-resize'; // Top edge
      direction = 'top';
    } else if (clientY > rect.bottom - edgeThreshold) {
      newCursor = 'ns-resize'; // Bottom edge
      direction = 'bottom';
    }

    containerRef.current.style.cursor = newCursor;
    setResizeDirection(direction);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('resizeDirection', resizeDirection);
    if (!resizeDirection) return;

    setIsResizing(true);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const handleMouseMoveResize = (event: MouseEvent) => {
      if (!isResizing) return;

      let newWidth = startWidth;
      let newHeight = startHeight;

      if (resizeDirection === 'right') {
        newWidth = Math.max(startWidth + (event.clientX - startX), minSize);
      } else if (resizeDirection === 'left') {
        newWidth = Math.max(startWidth - (event.clientX - startX), minSize);
      } else if (resizeDirection === 'bottom') {
        newHeight = Math.max(startHeight + (event.clientY - startY), minSize);
      } else if (resizeDirection === 'top') {
        newHeight = Math.max(startHeight - (event.clientY - startY), minSize);
      }

      setSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMoveResize);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMoveResize);
    document.addEventListener('mouseup', handleMouseUp);
  };

  console.log('size.width', size.width);
  return (
    <div
      ref={containerRef}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        border: '1px solid black',
        background: '#f0f0f0',
        position: 'relative',
        userSelect: 'none',
        cursor: 'default',
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
    >
      <p>Hover near edges to resize</p>
    </div>
  );
};

export default ResizableDiv;

import { TableContainer, Table as MUITable, type TableProps as MUITableProps, Paper } from '@mui/material';
import type { CSSProperties, FC, ReactNode } from 'react';
import { css } from '@emotion/react';

const fluidHeightCSS = css({
  height: '100%',
});

export interface TableProps extends MUITableProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
  tableStyle?: CSSProperties;
}

/**
 * @todo - add filters to header cell
 * @todo - add sort to header cell
 */
const Table: FC<TableProps> = ({ children, containerStyle, tableStyle, ...rest }: TableProps) => (
  <TableContainer
    style={containerStyle}
    css={fluidHeightCSS}
    component={Paper}
  >
    <MUITable
      style={tableStyle}
      {...rest}
    >
      {children}
    </MUITable>
  </TableContainer>
);

export default Table;

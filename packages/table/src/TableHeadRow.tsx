import { TableRow, type TableRowProps, useTheme } from '@mui/material';
import type { FC } from 'react';
import { css } from '@emotion/react';

const stickyHeaderRowCSS = css({
  position: 'sticky',
  top: -1,
  zIndex: 1,
});

export interface TableHeadRowProps extends TableRowProps {}

const TableHeadRow: FC<TableHeadRowProps> = ({ children, ...rest }: TableHeadRowProps) => {
  const theme = useTheme();

  return (
    <TableRow
      sx={{ boxShadow: theme.shadows[5], backgroundColor: theme.palette.secondary.main }}
      css={stickyHeaderRowCSS}
      {...rest}
    >
      {children}
    </TableRow>
  );
};

export default TableHeadRow;

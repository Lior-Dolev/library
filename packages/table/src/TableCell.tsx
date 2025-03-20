import { TableCell as MUITableCell, useTheme, type TableCellProps as MUITableCellProps } from '@mui/material';
import type { FC } from 'react';

export interface TableCellProps extends MUITableCellProps {}

const TableCell: FC<TableCellProps> = ({ children, ...rest }: TableCellProps) => {
  const theme = useTheme();

  return (
    <MUITableCell
      sx={{ border: `1px solid ${theme.palette.divider}` }}
      {...rest}
    >
      {children}
    </MUITableCell>
  );
};

export default TableCell;

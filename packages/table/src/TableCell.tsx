import { TableCell as MUITableCell, useTheme, TableCellProps as MUITableCellProps } from '@mui/material';
import { FC } from 'react';

export interface TableCellProps extends MUITableCellProps {}

const TableCell: FC<MUITableCellProps> = ({ children, ...rest }: MUITableCellProps) => {
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

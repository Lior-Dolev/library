import React from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography, { type TypographyProps } from '@horus-library/typography';
import CloseIcon from '@mui/icons-material/CloseSharp';
import TitleIcon from '@mui/icons-material/LocalPizza';
import TubeProgress from '@horus-library/tube-progress';
import Caption, { CaptionList } from '@horus-library/caption';

const StyledPanelHeader = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[5],
  // height: "50px",
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  width: '100%',
  padding: '0.5em',
  gap: '0.5em',
}));

const Title = ({ variant = 'h6', ...rest }: TypographyProps) => (
  <Typography variant={variant} {...rest} />
);
const StyledTitle = styled(Title)({
  display: 'flex',
  alignItems: 'center',
});

const CloseButton = () => (
  <IconButton
    style={{
      position: 'absolute',
      left: 0,
      top: 0,
      color: 'inherit',
    }}
  >
    <CloseIcon />
  </IconButton>
);

const HeaderPrefix = styled(`div`)({});
const MainHeader = styled(`div`)({});

const rootText = `הזמנה מס 1234`;
const subText1 = `פלורנטין`;
const subText2 = `רחוב: 59`;

const PanelHeader: React.FC = () => {
  return (
    <StyledPanelHeader>
      <HeaderPrefix>
        <TubeProgress value={80} />
      </HeaderPrefix>
      <MainHeader style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
        <StyledTitle noWrap>
          {rootText}
          <TitleIcon />
        </StyledTitle>
        <CaptionList>
          <Caption>{subText1}</Caption>
          <Caption>{subText2}</Caption>
        </CaptionList>
      </MainHeader>
      <CloseButton />
    </StyledPanelHeader>
  );
};

export default PanelHeader;

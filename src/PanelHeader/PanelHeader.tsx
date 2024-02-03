import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/CloseSharp";
import TitleIcon from "@mui/icons-material/LocalPizza";
import TubeProgress from "../TubeProgress";

const StyledPanelHeader = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[5],
  // height: "50px",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  width: "100%",
  padding: "0.5em",
  gap: "0.5em",
}));

const Title = ({ variant = "h6", ...rest }: TypographyProps) => (
  <Typography variant={variant} {...rest} />
);
const StyledTitle = styled(Title)({
  display: "flex",
  alignItems: "center",
});

const CloseButton = () => (
  <IconButton
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      color: "inherit",
    }}
  >
    <CloseIcon />
  </IconButton>
);

const Description = styled(`div`)({
  display: "flex",
  gap: "5px",
});

const StyledDivider = styled(Divider)({
  borderColor: "inherit",
});
const DescriptionDivider = () => (
  <StyledDivider orientation="vertical" variant="fullWidth" flexItem />
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
        <TubeProgress />
      </HeaderPrefix>
      <MainHeader>
        <StyledTitle>
          {rootText}
          <TitleIcon />
        </StyledTitle>
        <Description>
          <Title variant="caption">{subText1}</Title>
          <DescriptionDivider />
          <Title variant="caption">{subText2}</Title>
        </Description>
      </MainHeader>
      <CloseButton />
    </StyledPanelHeader>
  );
};

export default PanelHeader;

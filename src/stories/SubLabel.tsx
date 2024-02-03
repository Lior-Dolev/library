import { Divider, Typography, styled } from '@mui/material';

const Description = styled(`div`)({
  display: 'flex',
  gap: '5px',
});

const StyledDivider = styled(Divider)({
  borderColor: 'inherit',
});
const DescriptionDivider = () => (
  <StyledDivider orientation="vertical" variant="fullWidth" flexItem />
);

export const SubLabel = ({
  source,
  time,
}: {
  source: string;
  time: number;
}) => (
  <>
    <Description>
      <Typography variant="caption">{source}</Typography>
      <DescriptionDivider />
      <Typography variant="caption">{new Date(time).toDateString()}</Typography>
    </Description>
  </>
);

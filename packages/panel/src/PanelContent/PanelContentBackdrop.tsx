import { Backdrop } from '@mui/material';
import { css } from '@emotion/react';
import { LoaderIcon } from '@horus-library/icons';

const basePanelContentBackdropCSS = css({
  zIndex: 1,
  position: 'absolute',
});

const PanelContentBackdrop = () => {
  return (
    <Backdrop
      open={true}
      css={basePanelContentBackdropCSS}
    >
      <LoaderIcon size={'30%'} />
    </Backdrop>
  );
};

export default PanelContentBackdrop;

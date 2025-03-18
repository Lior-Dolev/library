import { css } from '@emotion/react';

const RequiredCSS = css({
  color: 'red',
  fontSize: '1.5rem',
  lineHeight: 'normal',
});

const Required = () => <span css={RequiredCSS}> *</span>;

export default Required;

import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import codeTheme from "../src/themes/codeTheme";
import React from "react";

const withMUITheme = (Story) => (
  <ThemeProvider theme={codeTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMUITheme],
};

export default preview;

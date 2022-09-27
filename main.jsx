import React from "react";
import ReactDOM from "react-dom/client";
import ReactContext from './ReactContext'
import {ThemeProvider} from './contexts/theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ReactContext />
  </ThemeProvider>
);
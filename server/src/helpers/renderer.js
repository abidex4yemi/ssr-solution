import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/home";

const renderer = () => {
  const content = renderToString(<Home />);

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
    `;

  return html;
};

export default renderer;

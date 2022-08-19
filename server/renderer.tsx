import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

function handleRender(req, res) {
  const reactHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const htmlTemplate = `<!DOCTYPE html>
  <html>
      <head>
          <title>Universal React server bundle</title>
      </head>
      <body>
          <div id="app">${reactHtml}</div>
            <script src="public/client.bundle.js"></script>
      </body>
  </html>`;
  res.type("text/html").send(htmlTemplate);
}

export default handleRender;

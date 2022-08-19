import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const clientBundleScript = `<script src="http://localhost:8080/server/bundle.js"></script>`; // [B]
const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`; // [B]

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
          ${clientBundleStyle}
      </head>
      <body>
          <div id="app">${reactHtml}</div>
            ${clientBundleScript}
      </body>
  </html>`;
  res.type("text/html").send(htmlTemplate);
}

export default handleRender;

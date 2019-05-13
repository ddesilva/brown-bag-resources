import express from 'express';
import App from '../web/App';
import Template from './template';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

const app = express();

app.use('/assets', express.static('./assets'));

// we need to change so that we not handle every request
app.get('*', async (req, res) => {
  const appBody = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const stringVersionOfApp = renderToString(appBody);
  const stringVersionOfHtmlPayload = Template('some title', stringVersionOfApp);
  res.send(stringVersionOfHtmlPayload);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

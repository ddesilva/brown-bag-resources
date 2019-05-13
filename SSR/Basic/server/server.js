import express from 'express';
import Template from './template';

//need to import app
import React from 'react';
import App from '../web/App';
import { renderToString } from 'react-dom/server';

const app = express();

// SERVE CLIENT BUNDLE THAT WEBPACK IS CREATING
app.use('/assets', express.static('./assets'))

app.get('/', async (req, res) => {
  // need to render app

  const appBody = renderToString(<App />);

  const stringVersionOfHtmlPayload = Template('some title', appBody);
  res.send(stringVersionOfHtmlPayload);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));

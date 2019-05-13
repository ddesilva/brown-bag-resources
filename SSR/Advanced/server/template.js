function template(title, content = '', state) {
  const scripts = `<script src="assets/client.js"></script>`;

  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="content">
                   <p>This is the template</p>
                   
                   <script>
                       window.__INITIAL_STATE__ = ${JSON.stringify(state).replace(/</g, '\\\u003c')};
                   </script>
          
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = template;

function template(title, appBody) {
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
                   <div id="app" class="wrap-inner">
                      ${appBody}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = template;

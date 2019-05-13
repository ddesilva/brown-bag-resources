function template(title) {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="content">
                 
                    <p>This is the template</p>
                 
                </div>
              </body>
              </html>
              `;
  return page;
}

module.exports = template;

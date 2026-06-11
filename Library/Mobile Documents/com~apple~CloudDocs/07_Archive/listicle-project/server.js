const express = require("express");
const guides = require("./data/guides");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

/*
====================================
HOME PAGE
====================================
*/
app.get("/", (req, res) => {
  let cards = "";

  guides.forEach((guide) => {
    cards += `
      <article>
        <img src="${guide.image}" alt="${guide.title}">
        <h3>${guide.title}</h3>
        <p><strong>Category:</strong> ${guide.category}</p>
        <p>${guide.description}</p>

        <a href="/guides/${guide.slug}" role="button">
          View Guide
        </a>
      </article>
    `;
  });

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Founder's Toolkit</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        >

        <link rel="stylesheet" href="/styles.css">
      </head>

      <body>
        <main class="container">
          <h1>Founder's Toolkit</h1>

          <p>
            Business guides for young entrepreneurs.
          </p>

          <div class="grid">
            ${cards}
          </div>
        </main>
      </body>
    </html>
  `);
});

/*
====================================
DETAIL PAGE
====================================
*/
app.get("/guides/:slug", (req, res) => {
  const guide = guides.find(
    (item) => item.slug === req.params.slug
  );

  if (!guide) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Guide Not Found</title>

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          >
        </head>

        <body>
          <main class="container">
            <h1>404 - Guide Not Found</h1>

            <p>
              The guide you are looking for does not exist.
            </p>

            <a href="/">Back Home</a>
          </main>
        </body>
      </html>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${guide.title}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        >

        <link rel="stylesheet" href="/styles.css">
      </head>

      <body>
        <main class="container">

          <img
            src="${guide.image}"
            alt="${guide.title}"
          >

          <h1>${guide.title}</h1>

          <p>
            <strong>Category:</strong>
            ${guide.category}
          </p>

          <p>
            <strong>Description:</strong>
            ${guide.description}
          </p>

          <p>
            <strong>Difficulty:</strong>
            ${guide.difficulty}
          </p>

          <p>
            <strong>Submitted By:</strong>
            ${guide.submittedBy}
          </p>

          <h3>Full Guide</h3>

          <p>
            ${guide.fullGuide}
          </p>

          <a href="/">← Back Home</a>

        </main>
      </body>
    </html>
  `);
});

/*
====================================
404 PAGE
====================================
*/
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>404 Page</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        >
      </head>

      <body>
        <main class="container">
          <h1>404 - Page Not Found</h1>

          <p>
            The page you are looking for does not exist.
          </p>

          <a href="/">Return Home</a>
        </main>
      </body>
    </html>
  `);
});

/*
====================================
SERVER
====================================
*/
app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
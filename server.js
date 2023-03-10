const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// route for index
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// route for notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// get request for notes
app.get("/api/notes", (req, res) => {
  res.json({
    term: "api/notes",
    description: "saved notes",
  });
});

// POST request for notes
app.post("/api/notes", (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  // console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

//listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

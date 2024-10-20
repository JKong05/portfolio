const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5001",
    credentials: true,
  })
);
app.use(express.json());

let access_token = "";
let refresh_token = "";

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri, // have to create environment variable for this
        state: state,
      })
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

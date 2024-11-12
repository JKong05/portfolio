require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "https://portfolio-frontend-z082.onrender.com/",
    credentials: true,
  })
);
app.use(express.json());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

let access_token = process.env.ACCESS_TOKEN;
let refresh_token = process.env.REFRESH_TOKEN;

const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          refresh_token: refresh_token,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        },
      }
    );

    access_token = response.data.access_token;

    if (response.data.refresh_token) {
      refresh_token = response.data.refresh_token;
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
  }
};

app.get("/spotify-data", async (req, res) => {
  try {
    const profileResponse = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.json(profileResponse.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      await refreshAccessToken();

      try {
        const profileResponse = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        res.json(profileResponse.data);
      } catch (retryError) {
        console.error(retryError);
        res.status(500).send("Error retrieving Spotify data");
      }
    } else {
      console.error(error);
      res.status(500).send("Error retrieving Spotify data");
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});


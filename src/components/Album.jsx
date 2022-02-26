import "./Album.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardActions, Button } from "@mui/material";

import SLS from "../images/SLS.png";
import scheduler from "../images/Scheduler.png";
import Jungle from "../images/Jungle.png";
import MapHub from "../images/MaphubLogo.png";
import Tweeter from "../images/TweeterLogo.png";
import TinyApp from "../images/TinyApp.png";

const theme = createTheme();

const Album = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={SLS}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Secret Lurry Society
                  </Typography>
                  <Typography>
                    An NFT collection and DApp built on the Ethereum Blockchain.
                    Connect with a MetaMask wallet that is connected to the
                    Rinkeby Testnet and mint a lurry!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://secretlurrysociety.eth.link/">
                    Website
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/Lurry-Contract-Website">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={scheduler}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Scheduler
                  </Typography>
                  <Typography>
                    Scheduler is a single page application built using the React
                    framework where user's are able to book a appointments,
                    selecting who they would like their appointment to be with,
                    what time, and what day.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/scheduler">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={Jungle}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jungle
                  </Typography>
                  <Typography>
                    An e-commerce platform built entirely on Ruby on Rails.
                    Users can add items to their cart, and checkout using a
                    Stripe test card.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/jungle-rails">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={MapHub}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    MapHub
                  </Typography>
                  <Typography>
                    A collaborative map creation social media platform, where
                    users can create maps with waypoints of their favourite
                    places, and share them with friends!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/Map-API-Midterm">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={Tweeter}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tweeter
                  </Typography>
                  <Typography>
                    A simplified SPA Twitter Clone. Users can post tweets
                    anonymously as the program auto generates a username
                    automatically upon posting.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/Tweeter">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}>
                <CardMedia
                  component="img"
                  sx={{
                    pt: "50",
                  }}
                  image={TinyApp}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    TinyApp
                  </Typography>
                  <Typography>
                    A full stack web application built with Node and Express
                    that allows users to shorten long URLs (à la bit.ly), and
                    persist those shortened URLs via connection to their
                    accounts.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href="https://github.com/CrumpetsNTea/tinyapp">
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Album;

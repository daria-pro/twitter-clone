import { FC } from "react";
import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import Tweet from "../../components/Tweet";
import { SearchTextField, useHomeStyles } from "./HomeStyles";
import SideMenu from "../../components/SideMenu/SideMenu";

const Home: FC = () => {
  const classes = useHomeStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography variant="h6" fontWeight="900">
                Home
              </Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  classes={classes}
                  text="Tell me what's your favorite anime and I'll tell you your programming language"
                  user={{
                    fullName: "sergii",
                    userName: "@SergiiKirianov",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></SearchTextField>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

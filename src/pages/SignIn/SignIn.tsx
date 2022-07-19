import { useState } from "react";

import { Typography, Button, FormControl, TextField } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/PeopleOutline";
import MessageIcon from "@mui/icons-material/ChatBubbleOutline";

import { ModalBlock } from "../../components/ModalBlock";
import { theme } from "../../theme";
import { useStylesSignIn } from "./SignInStyles";

const SignIn: React.FC = () => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.blueSide}>
        <TwitterIcon
          color="primary"
          className={classes.blueSideBigIcon}
        ></TwitterIcon>
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListIcon}></SearchIcon>
              Read about what is interesting for you.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListIcon}></PeopleIcon>
              Discover what's happening in the world.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListIcon}></MessageIcon>
              Connect with people.
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          ></TwitterIcon>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ marginBottom: "45px", marginTop: "20px" }}
          >
            Discover what's happening in the world
          </Typography>
          <Typography fontWeight="bold" sx={{ marginBottom: theme.spacing(2) }}>
            Join Twitter right now!
          </Typography>

          <Button
            onClick={handleClickOpenSignUp}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: "20px" }}
          >
            Sign Up
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Login
          </Button>

          <ModalBlock
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            classes={classes}
            title="Login to Twitter"
          >
            <FormControl>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                variant="filled"
                className={classes.loginSideField}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                variant="filled"
                className={classes.loginSideField}
              />
              <Button
                autoFocus
                variant="contained"
                fullWidth
                sx={{ margin: "0 auto 10px" }}
              >
                Login
              </Button>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            classes={classes}
            title="Create an account"
          >
            <FormControl>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                variant="filled"
                className={classes.loginSideField}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                variant="filled"
                className={classes.loginSideField}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                variant="filled"
                className={classes.loginSideField}
              />
              <Button
                autoFocus
                variant="contained"
                fullWidth
                sx={{ margin: "15px auto 10px" }}
              >
                Continue
              </Button>
            </FormControl>
          </ModalBlock>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

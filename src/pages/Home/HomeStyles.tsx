import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { theme } from "../../theme";
import { TextField } from "@mui/material";

export const useHomeStyles = makeStyles(() => ({
  wrapper: {
    height: "100vh",
  },

  tweetsWrapper: {
    height: "100%",
    borderRadius: "0 !important",
    borderTop: "0 !important",
    borderBottom: "0 !important",
  },

  tweetsHeader: {
    padding: " 10px 15px",
    borderRadius: "0 !important",
  },

  tweetsUsername: {
    color: grey[600],
    fontSize: "15px",
  },

  tweet: {
    borderLeft: "0 !important",
    borderRight: "0 !important",
    borderBottom: "0 !important",
    borderRadius: "0 !important",
    padding: "15px",

    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
      cursor: "pointer",
    },
  },

  tweetAvatar: {
    marginRight: "15px",
  },

  tweetIcon: {
    fontSize: "20px !important",
  },

  tweetFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "450px",
    position: "relative",
    left: "-13px",
    marginTop: "10px",
  },
}));

export const SearchTextField = styled(TextField)({
  "&:hover svg": {
    color: theme.palette.primary.main,
  },

  "& label.Mui-focused": {
    color: "green",
  },

  "& .MuiOutlinedInput-root": {
    height: "45px",
    backgroundColor: "#e6ecf0",
    borderRadius: "30px",

    "&.Mui-focused": {
      backgroundColor: "#fff",

      "& svg": {
        color: theme.palette.primary.main,
      },
    },

    "& fieldset": {
      borderColor: "transparent",
      borderRadius: "30px",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
    },
  },
});

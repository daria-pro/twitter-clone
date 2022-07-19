import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStylesSignIn = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  blueSide: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "200% !important",
    height: "200% !important",
  },
  blueSideListInfo: {
    position: "relative",
    listStyle: "none",
    padding: "55px 0 0",
    margin: 0,
    width: "380px",
    "& h6": {
      display: "flex",
      alignItems: "flex-start",
      color: "white",
      fontWeight: 700,
      fontSize: "18px",
    },
  },
  blueSideListInfoItem: {
    marginBottom: "40px",
  },
  blueSideListIcon: {
    height: "30px",
    width: "30px",
    marginRight: "15px",
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
  },
  loginSideTwitterIcon: {
    width: "40px",
    height: "40px",
  },
  loginSideWrapper: {
    width: "380px",
  },
  loginSideField: {
    width: "450px",
    marginBottom: `${theme.spacing(4)} !important`,
  },
}));

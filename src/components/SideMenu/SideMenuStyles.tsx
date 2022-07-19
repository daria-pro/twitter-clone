import { makeStyles } from "@mui/styles";
import { relative } from "node:path/win32";
import { theme } from "../../theme";

export const useSideMenuStyles = makeStyles(() => ({
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "230px",
  },
  sideMenuLogo: {
    fontSize: "34px !important",
    color: theme.palette.primary.main,
  },

  sideMenuListItem: {
    "&:hover div": {
      backgroundColor: "rgba(29, 161, 242, 0.1)",
      color: theme.palette.primary.main,
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 15px",
      height: "50px",
      marginBottom: "14px",
      cursor: "pointer",
      borderRadius: "30px",
      transition: "backgroundColor 1s ease-in-out",
    },
  },

  sideMenuListItemLabel: {
    marginLeft: "15px !important",
    fontWeight: "700 !important",
  },

  sideMenuListItemIcon: {
    fontSize: "30px !important",
  },
  sideMenuListButton: {
    height: "50px !important",
    marginTop: "10px !important",
  },
}));

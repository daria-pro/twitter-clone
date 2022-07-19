import { FC, ReactElement } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TagIcon from "@mui/icons-material/Tag";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/BookmarkBorder";
import ListIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/PersonOutline";
import { Button, IconButton, Typography } from "@mui/material";
import { useSideMenuStyles } from "./SideMenuStyles";

interface SideMenuProps {}

const SideMenu: FC<SideMenuProps> = ({}: SideMenuProps): ReactElement => {
  const classes = useSideMenuStyles();

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton color="primary" sx={{ margin: "15px 6px" }}>
          <TwitterIcon className={classes.sideMenuLogo} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <TagIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Explore
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Notifications
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Messages
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Bookmarks
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Lists
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PersonIcon className={classes.sideMenuListItemIcon} />
          <Typography className={classes.sideMenuListItemLabel}>
            Profile
          </Typography>
        </div>
      </li>
      <li>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          className={classes.sideMenuListButton}
        >
          Tweet
        </Button>
      </li>
    </ul>
  );
};

export default SideMenu;

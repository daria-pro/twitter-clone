import { FC, ReactElement } from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/ChatBubbleOutline";
import RepostIcon from "@mui/icons-material/Repeat";
import LikeIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/IosShare";
import { useHomeStyles } from "../../pages/Home/HomeStyles";

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  text: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

const Tweet: FC<TweetProps> = ({
  text,
  user,
  classes,
}: TweetProps): ReactElement => {
  return (
    <Paper variant="outlined" className={classes.tweet}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`User avatar ${user.fullName}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <strong>{`${user.fullName} `}</strong>
            <span className={classes.tweetsUsername}>{user.userName}</span>
            &nbsp;
            <span>·</span>&nbsp;
            <span className={classes.tweetsUsername}>1 h</span>
          </Typography>
          <Typography variant="body1">{text}</Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon className={classes.tweetIcon} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon className={classes.tweetIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon className={classes.tweetIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon className={classes.tweetIcon} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tweet;

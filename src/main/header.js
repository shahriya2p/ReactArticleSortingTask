import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    width: "220px",
  },
  button: {
    marginRight: "20px",
    marginBottom: "4px",
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Article List
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              onClick={() => props.sortForVotes()}
            >
              Most UpVoted
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              onClick={() => props.sortForDate()}
            >
              Most Recent
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

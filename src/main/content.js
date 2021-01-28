import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    marginTop: "10px",
  },
  button: {
    marginRight: "20px",
    marginBottom: "4px",
  },

  paper: {
    cursor: "pointer",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#ebf0fa",
    marginTop: "8px",
  },
  header: {
    cursor: "pointer",
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#a7bee8",
    color: theme.palette.text.primary,
  },
}));

export default function Content(props) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={4}>
            <Paper className={classes.header}>{"Title"}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.header}>{"UpVotes"}</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.header}>{"Date"}</Paper>
          </Grid>
        </Grid>
        {props.list?.map((item, index) => (
          <Grid container wrap="nowrap" item xs={12} key={index} spacing={1}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography noWrap>{item.title}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography noWrap>{item.upVotes}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography noWrap>
                  {new Date(item.date).toDateString()}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

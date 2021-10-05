import {
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  homePage: {
    height: "81.8vh"
  }
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <Typography>This is the homepage</Typography>
    </div>
  );
}
export default Home;
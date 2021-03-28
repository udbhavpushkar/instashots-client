import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import logo from  "../src/images/isicon.png"
import {getPosts} from "./actions/posts";
import Posts from "./components/Posts";
import Form from "./components/Form";
import useStyles from "./style"

function App() {
    const [currentId, setCurrentId] = useState(0)
    const classes = useStyles()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[currentId, dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h6" align="center">InstaShots</Typography>
          <img className={classes.image} src={logo} alt="instashot" height="60"/>
      </AppBar>
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
  );
}

export default App;

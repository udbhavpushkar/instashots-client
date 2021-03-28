import React from 'react';
import {Grid, CircularProgress} from "@material-ui/core";
import {useSelector} from "react-redux";
import Post from "./Post";
import useStyles from "./style"

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state => state.posts))
    const classes = useStyles()
    console.log(posts)
    return (
        !posts.length ? <CircularProgress/> :
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(post=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post setCurrentId={setCurrentId} post={post}/>
                    </Grid>
                ))}
            </Grid>
    );
};

export default Posts;
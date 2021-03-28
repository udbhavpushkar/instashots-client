import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from "./style"
import {Edit, ThumbUpAlt} from "@material-ui/icons";
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/posts";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} onClick={()=>setCurrentId(post._id)} size="small" >
                    <Edit fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag=>`#${tag} `)}</Typography>
            </div>
            <Typography variant="h5" className={classes.title}>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{dispatch(likePost(post._id))}}>
                    <ThumbUpAlt fontSize="small"/> &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
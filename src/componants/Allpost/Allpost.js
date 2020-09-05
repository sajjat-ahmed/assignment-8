import React from 'react';
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Allpost = (props) => {
    const { title, body, id } = props.post;

    const postStyle ={
        margin:'30px',
        borderBottom:'2px solid gray'
    }
    return (
        <div style={postStyle}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/post/${id}`}>
                        <Button size="small" color="primary">
                            post detail
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Allpost;
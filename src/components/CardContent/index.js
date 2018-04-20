// @flow
import React, { Component } from 'react';


import { withStyles } from 'material-ui/styles';
import Card, { CardActions,CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {WrapperBlock} from "../styled/appBlock";
import generateData from "../../utils/generateData";

const styles = {
    card: {
        width:350,
        maxHeight:450,
        borderRadius: 10
    },
    text: {
        maxHeight:35,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },

    name: {
        maxHeight:80,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    media: {
        maxHeight: 200,
        height: 160
    },
};



class CardContentBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            options: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }
        }

    }

    render() {

        const { classes,imageURL,name,email,amount,text } = this.props;
        const { date,options } = this.state;

        return (
            <WrapperBlock style={this.props.style}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                {name[0]}
                            </Avatar>
                        }
                        title={name + ' - ' + amount  + '$'}
                        subheader={date.toLocaleString("ru", options)}
                    />
                    <CardMedia
                        className={classes.media}
                        image={imageURL}
                        title={amount  + ' $'}
                    />
                    <CardContent>
                        <Typography className={classes.name} gutterBottom variant="headline" component="h2">
                            Имя: {name}
                        </Typography>
                        <Typography component="p">
                           Email: {email}
                        </Typography>
                        <Typography className={classes.text} component="p">
                            {text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </WrapperBlock>
        );
    }
}

export default withStyles(styles)(CardContentBlock);

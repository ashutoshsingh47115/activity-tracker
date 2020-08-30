import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import ConnectIcon from '../../../Images/img_avatar.png'
import './userCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const UserList = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea onClick={() => props.openActivityModal(props.userList.id)}>
        <CardMedia
          className={classes.media}
          image={ConnectIcon}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {props.userList.real_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            Here are activity logs of user who do such activities online as sending email, playing games, downloading music, and more click on user cards for more details.
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}

export default UserList
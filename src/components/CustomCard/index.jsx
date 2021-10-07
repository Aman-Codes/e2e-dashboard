import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    padding: '1rem 2rem',
    margin: '1rem',
    display: 'inline-block'
  },
  title: {
    fontSize: 14,
    color: '#0000008a'
  },
  pos: {
    marginBottom: 12,
    color: '#0000008a'
  },
});

const CustomCard = ({ data }) => {
  const classes = useStyles();
  console.log("data inside CustomCard", data);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {data.readableName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${data.name}`}>
          <Button size="small">Explore More</Button>
        </Link>        
      </CardActions>
    </Card>
  );
};

export default CustomCard;

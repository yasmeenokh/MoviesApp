import React from "react";
import {If, Then, Else} from 'react-if';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height : '70vh'
    },
    media: {
      height: '40vh',
      width : '20vw'
    }
  });
  

function Data(props){
    const classes = useStyles();


    let moviesData = props.moviesData;
    return(
        <>
        <nav className='navContainer'>
        <Button variant="outlined" color="primary" onClick={()=>props.sortHandler('upcoming.desc') }>
            UpComing
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>props.sortHandler('popularity.desc')}>
        Popular
        </Button>
        <Button variant="outlined" color="primary" onClick={()=>props.sortHandler('top_rated.desc')}>
        Top Rated
        </Button>
        </nav>
            <div className="main-container">

                {moviesData.map((element, idx) =>
                    <div key={idx} className="card-container">
                        <Card className={classes.root} key={idx}>
      <CardActionArea>
      <If condition={!!element.poster_path}>
        <Then>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500//${element.poster_path}`}
          title=''
        />
         </Then>
         <Else>
         <CardMedia
          className={classes.media}
          image='https://via.placeholder.com/150'
          title=''
        />
        </Else>
            </If>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {element.original_title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Release Date : {element.release_date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Vote : {element.vote_average}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Genre : {element.genre_ids[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link to={`/movies/${element._id}`}> */}
        <Button size="small" color="default" 
        >View Details
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
                    </div>

)}
            </div>
           

        </>
    )
}

export default Data;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Card sx={{ maxWidth: 345, margin:"3rem auto" }} style={{backgroundColor: "#012944"}}>
    <CardMedia className="proj-imgbx"
      component="img"
      alt="project"
      height="200"
      image={imgUrl}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" color="common.white">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" href={url}  target="_blank">Learn More</Button>
    </CardActions>
  </Card>
  )
}

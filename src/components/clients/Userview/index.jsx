import React ,{useState} from 'react'
import { HeroContainer ,TextWrapper,VendorsContainerBlackBg,VendorsContainerWhiteBg,VideoBg, Wrapper,Heading,ArrowForward, ArrowRight, HeroBg, HeroButtonWrapper, HeroContent, HeroH1, HeroP } from './userViewElements'
import { Button } from '../../ButtonElements';
import Video from '../../../videos/wedding.mp4';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import Music from '../../../images/Music.png'


import './icon.css'



const UserView = () => {
    const [hover,setHover] =useState(false);

    const onHover = ()=>{
      setHover(!hover)
    }
  return (
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} autoPlay loop muted type='video/mp4'/>
            </HeroBg> 
            <HeroContent>
                <HeroH1> Dream your wedding with knot  </HeroH1>
                <HeroP>
                A great marriage isn’t something that just happens- it’s something that must be created.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' > Explore our vendors{hover ? <ArrowForward/> : <ArrowRight/>}  </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
        
        <VendorsContainerBlackBg>
           
            <TextWrapper>
                <Heading>
                    Music Bands
                </Heading>
            </TextWrapper>
            <Wrapper>
            <Card sx={{ maxWidth: 345,minHeight:420 }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon />
                            </div>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345,minHeight:420 }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345,minHeight:420 }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </CardActions>
                    </Card>
                    </Wrapper>
            
        </VendorsContainerBlackBg>
        <VendorsContainerWhiteBg>
            <TextWrapper>
                <Heading> Photographers </Heading>
            </TextWrapper>
            <Wrapper>
            <Card sx={{ maxWidth: 345,minHeight:420,backgroundColor:"#0c0c0c" ,color:"#fff" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="#fffs">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon sx={{color:"#fff"}} />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon />

                            </div>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345,minHeight:420,backgroundColor:"#0c0c0c" ,color:"#fff" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="#fffs">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon sx={{color:"#fff"}} />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            </div>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345,minHeight:420,backgroundColor:"#0c0c0c" ,color:"#fff" }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                M
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Mountlavania Beach hotel"
                            subheader="August 25,2022"
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={Music}
                            alt="Beach wedding"
                        />
                        <CardContent>
                            <Typography variant="body2" color="#fffs">
                                Good view of the beach and the sea. With the less capacity of seating,
                                also affiliate with 5 star hotel.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        
                            <IconButton aria-label="share">
                                <ShareIcon sx={{color:"#fff"}} />
                            </IconButton>
                            <div className='star__icon_wrapper'>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </CardActions>
                    </Card>
            
            </Wrapper>

        </VendorsContainerWhiteBg>
    </>
  )
}

export default UserView;
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardActionArea
} from '@mui/material';
import DividerPage from 'utils/Divider';
import { Favorite, Share, MoreVert, SkipPrevious, PlayArrow, SkipNext } from '@mui/icons-material';
import PaellaDish from '../assets/images/paella.jpg';
import ContemplativeReptile from '../assets/images/contemplative-reptile.jpg';
import LiveFromSpace from '../assets/images/live-from-space.jpg';
import { useTheme } from '@mui/material/styles';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const CardPage = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Card
        </Typography>
        <Typography variant="h6" className="description">
          Cards contain content and actions about a single subject.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic card */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic card
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Card sx={{ minWidth: 275, boxShadow: 'rgba(80, 63, 111, 0.8039215686) 0px 2px 14px 0px' }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                      </Typography>
                      <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </CardContent>
            </Paper>

            {/* Complex Interaction */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Complex Interaction
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Card sx={{ maxWidth: 345, boxShadow: 'rgba(80, 63, 111, 0.8039215686) 0px 2px 14px 0px' }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                          V
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVert />
                        </IconButton>
                      }
                      title="CheeseCake"
                      subheader="September 14, 2016"
                    />
                    <CardMedia component="img" height="315" width="100%" image={PaellaDish} alt="Paella dish" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Mango cheesecake is a delicious dessert that combines the creamy texture of cheesecake with the tropical flavor of
                        mangoes. It is a popular variation of the classic cheesecake, adding a refreshing twist to the traditional recipe.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <Favorite />
                      </IconButton>
                      <IconButton aria-label="share">
                        <Share />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Primary action */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Primary action
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Card sx={{ maxWidth: 345, boxShadow: 'rgba(80, 63, 111, 0.8039215686) 0px 2px 14px 0px' }}>
                    <CardActionArea>
                      <CardMedia component="img" height="140" image={ContemplativeReptile} alt="green iguana" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                          Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </CardContent>
            </Paper>

            {/* UI Controls */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                UI Controls
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Card sx={{ display: 'flex', boxShadow: 'rgba(80, 63, 111, 0.8039215686) 0px 2px 14px 0px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Mac Miller
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="previous">{theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}</IconButton>
                        <IconButton aria-label="play/pause">
                          <PlayArrow sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">{theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}</IconButton>
                      </Box>
                    </Box>
                    <CardMedia component="img" sx={{ width: 151 }} image={LiveFromSpace} alt="Live from space album cover" />
                  </Card>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default CardPage;

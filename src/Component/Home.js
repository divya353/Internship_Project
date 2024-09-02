import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import f3 from '../Assets/dubai.jpg';
import f6 from '../Assets/hair.jpg';
import f5 from '../Assets/influe.jpg';
import f1 from '../Assets/tech1.jpg';
import f2 from '../Assets/tech4.jpg';
import f4 from '../Assets/vintage.jpg';
import Beauty from './Beauty';
import Job from './Job';
import Post from './Post';
import Travel from './Travel';
import Trend from './Trend';

function Home() {
  // State to manage the selected category
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const [selectedCategory, setSelectedCategory] = useState('Technology');
  
  // const [selectedCategory1, setSelectedCategory1] = useState('Technology');


  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {/* Sidebar Grid */}
        <Grid item xs={2} sm={3} md={2} lg={2} sx={{ width: isSmallScreen ? '100%' : 200 }}>
          <ul className='first'>
            <li onClick={() => handleCategorySelect('Technology')}>
              <Icon icon="streamline:ai-technology-spark" fontSize={20} />
              <Typography sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>Technology</Typography>
            </li>
            <li onClick={() => handleCategorySelect('Travel')}>
              <Icon icon="material-symbols-light:travel-luggage-and-bags-outline-sharp" fontSize={20} />
              <Typography sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>Travel</Typography>
            </li>
            <li onClick={() => handleCategorySelect('Beauty')}>
              <Icon icon="material-symbols-light:health-and-beauty-outline" fontSize={20} />
              <Typography sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>Beauty</Typography>
            </li>
            <li onClick={() => handleCategorySelect('Trend')}>
              <Icon icon="ph:trend-up-light" fontSize={20} />
              <Typography sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>Trend</Typography>
            </li>
            <li onClick={() => handleCategorySelect('Job')}>
              <Icon icon="hugeicons:job-link" fontSize={20} />
              <Typography sx={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}>Quitting a Job</Typography>
            </li>
          </ul>
        </Grid>

        {/* Main Content Grid */}
        <Grid item xs={10} sm={9} md={7} lg={7}>
          <Card className="home-que-card" sx={{ minWidth: 100, maxWidth: 600, padding: 2 }}>
            <CardContent>
              <TextField
                label="What do you want to ask or share?"
                variant="filled"
                type='text'
                size='small'
                fullWidth
                sx={{ mb: 2 }}
              />
            </CardContent>
            <CardActions>
              <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Ask
              </Button>
              <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Answer
              </Button>
            </CardActions>
          </Card>
          {/* Display posts based on the selected category */}
          {selectedCategory === 'Technology' && <Post />}
          {selectedCategory === 'Travel' && <Travel />}
          {selectedCategory === 'Beauty' && <Beauty />}
          {selectedCategory === 'Trend' && <Trend />}
          {selectedCategory === 'Job' && <Job />}
        </Grid>

        {/* Right Sidebar Grid */}
        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: { xs: isSmallScreen ? 'none' : 'block', md: 'block' } }}>
          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>AI in Healthcare: Revolutionizing Diagnostics and Treatment</p>
              <img src={f1} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>
          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>Cybersecurity in the Age of AI: Protecting Against Modern Threats</p>
              <img src={f2} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>
          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>Expo 2020 Dubai</p>
              <img src={f3} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>
          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>The Rise of Vintage Fashion: Why Retro Styles Are Making a Comeback</p>
              <img src={f4} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>

          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>The Impact of Social Media Influencers on Fashion Trends</p>
              <img src={f5} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>

          <Card className='top-post' sx={{ minWidth: 275, marginBottom: 5 }}>
            <CardContent>
              <h2>Top Post</h2>
              <p>Dr. Falguni Shah Shares Her Expert Tips On Pre-Bridal Haircare For Healthier, Shinier Hair</p>
              <img src={f6} height={150} width={'100%'} alt="Top Post"/>
            </CardContent>
            <CardActions>
              {/* <Button
                startIcon={<Icon icon="material-symbols-light:post-add-sharp" style={{ fontSize: '24px' }} />}
                variant="contained"
              >
                Read More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

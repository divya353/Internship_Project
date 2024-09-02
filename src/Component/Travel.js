import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import dubai from '../Assets/dubai.jpg';
import goa from '../Assets/goa.jpg';
import hampi from '../Assets/hampi.jpg';
import kerala from '../Assets/kerala.jpg';
import kerala1 from '../Assets/kerala1.jpg';
import mexico from '../Assets/mexico.jpg';
import travel7 from '../Assets/travel7.jpg';

function Travel() {
    const postData = [
        { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", caption: 'Varkala Kerala - Secret Beaches, Backwaters and Cliffs',
            ans:'I had never seen a beach by the cliff until I visited Varkala first in 2016. The reddish-brown Varkala cliff, perfect for surfing Varkala beach, and the hippie vibes made me fall in love with Varkala almost instantly. Back then, there were not many Varkala blogs and tourism had just started in Varkala and it was almost like visiting a virgin island with just a countable number of shops and eateries on the North Cliff in Varkala.I had never seen a beach by the cliff until I visited Varkala first in 2016. The reddish-brown Varkala cliff, perfect for surfing Varkala beach, and the hippie vibes made me fall in love with Varkala almost instantly. Back then, there were not many Varkala blogs and tourism had just started in Varkala and it was almost like visiting a virgin island with just a countable number of shops and eateries on the North Cliff in Varkala I was very excited when I was planning for the Varkala trip again in 2019. Though this time, I realized that a lot had changed over the last 4 years. It is now one of the most popular backpack beach destinations of India. With the countless almost hanging cafes and homestays on the North cliff, Varkala is no longer an isolated paradise.In thirst for the Varkala, I saw years back, I walked away from the main Varkala beach and that’s when I found my old hidden paradise. The secret black beach (oh yes!), sunset at Odayam beach, chit-chat with local fishermen at Edava beach, mesmerizing views of Kapil lake and Kapil beach, the Golden Island, and centuries-old Janardhana Swamy Temple, - all these places gave me my old Varkala vibes.In my Varkala blog, I have listed down all the secret places to see in Varkala, the best places to eat in Varkala, the best beaches in Varkala, the best place to get Ayurvedic massages in Varkala, best places to stay in Varkala and a lot more. Enjoy reading my Varkala blog, I hope it helps you plan your perfect Varkala trip.',
            post_img: kerala 
           
        },

        { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2", caption: 'Expo 2020 Dubai' ,
            ans:'When I was in Dubai back in 2016 the word on the street was very much ‘Expo 2020’. Plans were very much afoot and when we returned in the summer of 2018 it was clear to see a city rapidly gearing up for something INCREDIBLE.I cannot imagine the devastation to all those involved when in 2020 covid enforced the brakes to bring everything a screeching halt.Someone (who had never been to Dubai) said to be very recently “I’ve heard Dubai doesn’t have any soul” I can see why some people may feel that way as there is very little in the way of natural beauty, but trust me what it lacks in soul it makes up for in heart.It’s a heart that is beating stronger and stronger in the Middle East and each time I visit (this is my 5th trip in 12 years) it just gets bigger and better. When Dubai says it’s going to deliver then boy does it deliver and the delayed Expo 2020 was well worth waiting for. It was far more expansive than I ever imagined spanning an area more than twice the size of Monaco!',
            post_img: dubai
         },

        { id: 3, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=3", caption: 'Things to do in Hippie Island Hampi for 2020 (Secrets revealed)',
            ans:'1 . Hire a bike and roam around Anegundi Village in Hampi Riding around the nearby villages from Hippie Island will take you to an ancient dreamland tucked between the giant boulders and coconut trees. Anegundi is one such village and also a part of the UNESCO world heritage site. The route for Anegundi village passes through the Sanapur lake and gives the feeling of a fantasy movie set. Also, there are many craft centres in Anegundi which sell products made from banana fibre (much cheaper than the city stores). Try to check them out',
            post_img: hampi
         },

        { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/150?img=4", caption: 'Experience the lesser-known Goa - Unexplored Attractions of Goa',
            ans:'When we think of Goa, the first few things which come to our mind are its pristine sun-kissed beaches, lively parties and the much-visited Bollywood famous forts! Beyond this, there lies an unknown Goa, waiting to be explored.If you want to escape the crowded lanes and shores and explore the truly unique Goa, forget about the lists of “top things to do in Goa”, “top places to visit”, “where to stay”. Instead, explore Goa from the lenses of locals.  Live with a Goan family in an ancestral Portuguese home, savor the local meals, and explore the hidden countryside! You will experience a never heard, never known Goa.Here are a few off-the-beaten-path experiences in Goa you never could have imagined.',
            post_img: goa
         },

        { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", caption: 'Kerala, India - Harmony between Human and Nature',
            ans:'Kerala, popularly known as God’s own country is a true testament of harmony between humans and nature. Whenever you happen to explore this beautiful state in India, the experience of unadulterated nature will calm your soul but the joyful moments with the simple people of Kerala will fill your heart with lifetime memories.I have been here multiple times to give myself a break from crazy city life, to experience the breathtaking backwaters of Alappuzha (Alleppey), to immerse in the never-ending beaches of Kerala. I also drove around the state from North Kerala to South Kerala. During all my trips, I immersed in the natural beauty of Kerala, I also felt that the kindness of the people of Kerala is bringing them together. I have many such vivid memories from Kerala. A total stranger in Kannur who helped me understand the history of Theyyam, the canoe man from Alleppey, the tea pluckers of Munnar, and the woman at the ticket counter in Varkala - everyone in Kerala welcomed me with open heart, expecting nothing in return. Every time I came back from Kerala, I bought memories home, of not just the usual experiences of otherworldly landscape or mouth-watering food, but it was the heartwarming people of Kerala who made my trips even more special. I think that is the reason I can visit Kerala over and over again. This blog is dedicated to my own anecdotes from Kerala to tell you guys what makes Kerala so different and it’s people truly ‘Human By Nature’. ',
            post_img: kerala1
         },

        { id: 6, name: "Kim Yugan", avatar: "https://i.pravatar.cc/150?img=6", caption: 'The Best Hotels in Mexico City- Hotel Vill Condesa ' ,
            ans:' This boutique property in Condesa is as leafy and stylish as the surrounding neighborhood. It’s housed in a 19th-century mansion and boasts a really cool interior courtyard that’s a calm oasis in the big city. A complimentary breakfast is served here every morning too (definitely try the chilaquiles and the huevos rancheros)! Every one of the fifteen spacious and comfortable suites is different. Some are brightly decorated with colorful walls and couches, while others have a stately feel, with antique furniture and hardwood floors. Some rooms even have balconies, but all rooms come with a flatscreen TV and a desk. The bathrooms are a bit small but include complimentary toiletries and plush bathrobes. Since there are only a few rooms here, it feels really homey (the staff is really friendly and welcoming too), making it ideal for a quiet stay in one of the best neighborhoods of Mexico City. ',
            post_img: mexico
        },

        { id: 7, name: "Laura Patterson", avatar: "https://i.pravatar.cc/150?img=9", caption: 'Travel Itineraries for Different Budgets',
            ans:'Traveling on a budget doesn’t mean you have to sacrifice experiencing the best a destination has to offer. With careful planning and a few insider tips, you can create an unforgettable trip no matter your financial constraints. For those on a shoestring budget, start by exploring free or low-cost attractions, such as local parks, public museums, and historic neighborhoods. Utilize budget-friendly accommodation options like hostels, guesthouses, or vacation rentals. Make the most of local markets and street food to get a taste of authentic cuisine without breaking the bank. Prioritize public transportation or consider walking to save on travel expenses, and always look for city passes or discount cards that offer access to multiple attractions at a reduced rate. A well-planned budget itinerary can transform an average trip into a series of enriching experiences.For travelers willing to spend a bit more, the options for indulgence and comfort expand significantly. Opt for mid-range hotels or boutique accommodations that offer a blend of comfort and local charm, and don’t hesitate to splurge on a few memorable experiences such as guided tours, fine dining, or unique local activities. Research and book in advance to take advantage of deals and special offers. Include a mix of popular attractions and off-the-beaten-path activities to enrich your experience and get a well-rounded view of your destination. Consider a combination of public transport and private transfers to balance convenience with cost. By thoughtfully allocating your budget, you can enjoy a trip that offers both luxury and cultural immersion, ensuring a memorable and satisfying travel experience.',
            post_img: travel7
         },
    ];

    const [likes, setLikes] = useState(
        postData.reduce((acc, post) => {
            acc[post.id] = 0;
            return acc;
        }, {})
    );
    const [commentVisibility, setCommentVisibility] = useState({});
    const [expandedPosts, setExpandedPosts] = useState({});

    const handleLike = (postId) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [postId]: prevLikes[postId] + 1
        }));
    };
    const toggleExpand = (postId) => {
        setExpandedPosts(prevExpanded => ({
            ...prevExpanded,
            [postId]: !prevExpanded[postId]
        }));
    };
    const toggleCommentVisibility = (postId) => {
        setCommentVisibility(prevVisibility => ({
            ...prevVisibility,
            [postId]: !prevVisibility[postId]
        }));
    };



    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {postData.map(post => (
                <Card className="post-card" key={post.id}>
                    <CardContent>
                        <div className="avatar-container">
                            <img src={post.avatar} alt={`${post.name}'s avatar`} />
                            <Typography variant="h6" component="div" className="username">
                                {post.name}
                            </Typography>
                        </div>
                        {post.caption && (
                            <Typography variant="body2" color="text.secondary" align="center" style={{ marginTop: '10px',marginBottom:'20px' }}>
                                {post.caption}
                            </Typography>
                        )}
                         <CardMedia
                            component="img"
                            height="194"
                            image={post.post_img}
                            alt="Post content"
                            className='blog-img'
                        />
                        {/* {post.ans && (
                            <Typography className='post-ans' variant="body2" color="text.secondary" align="center" style={{ marginTop: '10px' }}>
                                {post.ans}
                                <span>Read more</span>
                            </Typography>
                        )} */}
                        {post.ans && (
                            <Typography className='post-ans' variant="body2" color="text.secondary" align="start" style={{ marginTop: '10px' }}>
                                {expandedPosts[post.id] ? post.ans : `${post.ans.slice(0, 150)}...`}
                                <span
                                    onClick={() => toggleExpand(post.id)}
                                    style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                                >
                                    {expandedPosts[post.id] ? 'Read less' : 'Read more'}
                                </span>
                            </Typography>
                        )}
                       
                        {/* <img src={post.post_img} alt="Post content" className="post-image" /> */}
                        
                    </CardContent>
                    {/* <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleLike(post.id)}
                            className="like-button"
                        >
                            Like {likes[post.id] || 0}
                        </Button> */}
                            <div className='button'>
                        <IconButton  variant="contained"
                        
                        onClick={() => handleLike(post.id)}
                        className="like-button"
                        >{likes[post.id] || 0}
                        <Icon icon="weui:like-outlined" />

                        
                 </IconButton>
                <IconButton onClick={() => toggleCommentVisibility(post.id)} variant="contained">
                    <Icon icon="iconamoon:comment-thin" style={{ fontSize: '24px' }} />
              </IconButton>

              <IconButton  variant="contained"><Icon icon="bitcoin-icons:share-outline"  style={{ fontSize: '24px' }} />
               
               </IconButton>
              </div>
             {commentVisibility[post.id] && (
                <TextField
                  id="" 
                  label="Add Comment" 
                  variant="filled"
                  type='text'
                  size='small'
                  fullWidth
                  sx={{ mb: 2 }}
                />
             )}
                </Card>
            ))}
        </div>
    );
}

export default Travel;

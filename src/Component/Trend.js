import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import vintage from '../Assets/vintage.jpg';
import ai from '../Assets/ai.jpeg';
import game from '../Assets/game.jpg';
import lifestyle from '../Assets/lifestyle.jpg';
import shopping from '../Assets/shopping.jpg';
import influe from '../Assets/influe.jpg';
import travel from '../Assets/travel.jpg';


function Trend() {
    const postData = [
        { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", caption: 'The Rise of Vintage Fashion: Why Retro Styles Are Making a Comeback',
            ans:' Vintage fashion is experiencing a resurgence like never before, captivating the hearts of fashion enthusiasts and influencing designers worldwide. What was once considered a niche interest has evolved into a mainstream trend, with retro styles taking center stage in modern wardrobes. This blog explores the reasons behind the vintage fashion comeback, the cultural shifts driving this trend, and tips for incorporating retro styles into your own wardrobe.Cultural revival is another factor contributing to the vintage fashion comeback. The 70s, 80s, and 90s, in particular, are being reexamined and celebrated in popular culture. Television shows, movies, and music from these decades are enjoying a resurgence, and this renewed interest extends to fashion. The influence of media and entertainment plays a significant role in sparking and sustaining retro trends.Vintage fashion allows individuals to express their unique style and stand out from the crowd. With mass-produced clothing dominating the market, vintage pieces offer a sense of individuality and originality. Each vintage item has a story and character that modern clothing often lacks.',
            post_img: vintage
           
        },

        { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2", caption: 'Travel Trends: Top Destinations and Tips for 2024' ,
            ans:'As we venture into 2024, the travel landscape is evolving with new trends, destinations, and experiences that cater to an increasingly discerning and adventurous traveler. Whether you’re looking for hidden gems, sustainable travel options, or immersive cultural experiences, this guide will help you navigate the top destinations and tips for the year ahead.Top Destinations for 20241. Kyoto, Japan Kyoto stands out as a premier destination, offering a seamless blend of historic charm and modern conveniences. Known for its well-preserved temples, shrines, and traditional wooden houses, Kyoto’s cultural offerings are unparalleled. In 2024, the city continues to attract visitors with its beautiful cherry blossoms in spring and vibrant autumn leaves. Key highlights include the serene Arashiyama Bamboo Grove, the iconic Fushimi Inari Shrine with its thousands of red torii gates, and the historic Gion district, renowned for its traditional tea houses and geisha culture. Kyoto also hosts various cultural festivals and events throughout the year, adding to its allure.  ' ,
            post_img: travel
         },

        { id: 3, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=3", caption: 'AI in Everyday Life: How Artificial Intelligence is Changing the World Around Us provide information detailed not point',
            ans:'Artificial Intelligence (AI) is increasingly becoming a pivotal force in reshaping numerous aspects of everyday life, offering advancements that touch upon various sectors. In personal technology, AI-powered assistants like Siri, Google Assistant, and Alexa have revolutionized how we interact with our devices, allowing for voice-activated control of smart home systems, schedule management, and information retrieval. These systems are designed to understand and process natural language, continuously learning from user interactions to provide more accurate and personalized responses.In the realm of healthcare, AI is making substantial strides by enhancing diagnostics, treatment planning, and patient care. Machine learning algorithms analyze medical data, such as imaging scans and genetic information, to identify patterns and assist in diagnosing diseases with high precision. This capability not only aids in early detection but also facilitates personalized treatment plans and accelerates drug discovery. For example, AI models are instrumental in analyzing X-rays and MRIs, detecting anomalies such as tumors or fractures that might be overlooked by human eyes.etc',
            post_img: ai
         },

        { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/150?img=4", caption: 'Sustainable Living: Tips and Tricks for a Greener Lifestyle',
            ans:'Embracing a greener lifestyle is not just a trend but a necessity in today’s world, and making small, sustainable changes can lead to significant positive impacts on the environment. Start by focusing on reducing waste in your daily life. Opt for reusable items like water bottles, coffee cups, and shopping bags to minimize single-use plastics. Consider investing in a compost bin to turn organic waste into valuable compost for your garden, which not only reduces landfill waste but also enriches the soil.Energy efficiency is another crucial aspect of sustainable living. Begin by switching to energy-efficient appliances and light bulbs, such as LED lights, which consume less power and last longer than traditional options. Additionally, insulating your home and sealing any drafts can help reduce the need for excessive heating or cooling, thus lowering your energy bills and carbon footprint. Don’t forget to unplug electronics when they are not in use, as many devices draw power even when turned off.Transportation plays a significant role in our environmental impact, so consider ways to reduce your reliance on fossil fuels. Carpooling, using public transportation, biking, or walking are excellent alternatives to driving alone. If you’re in the market for a new vehicle, look into electric or hybrid options that produce fewer emissions and are more eco-friendly. For those who live in urban areas, try to take advantage of car-sharing programs to further decrease the number of vehicles on the road.When it comes to food, adopting a more sustainable diet can have a substantial impact. Focus on consuming locally-sourced, seasonal produce to reduce the carbon footprint associated with transporting food long distances. Incorporating more plant-based meals into your diet can also be beneficial, as the production of plant-based foods typically requires fewer resources and generates less greenhouse gas emissions compared to animal products. Growing your own herbs and vegetables, even in small spaces or containers, can also contribute to a more sustainable lifestyle.Water conservation is another essential component of sustainable living. Simple practices like fixing leaks, installing water-saving fixtures, and taking shorter showers can make a big difference. Be mindful of your water use when washing dishes or doing laundry by running full loads and choosing eco-friendly detergents. Collecting rainwater for garden use can also help conserve this precious resource.Sustainable living extends beyond individual actions and into the realm of mindful consumption. Support companies and products that prioritize sustainability, such as those using eco-friendly packaging or fair trade practices. Consider buying second-hand items or participating in clothing swaps to reduce the demand for new products and minimize textile waste. ',
            post_img:lifestyle
         },

        { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", caption: 'The Impact of Social Media Influencers on Fashion Trends',
            ans:'Social media influencers have become key figures in shaping fashion trends, fundamentally altering how style is perceived and consumed in the digital age. Their influence extends well beyond showcasing outfits; these digital personalities, who command substantial followings on platforms like Instagram, TikTok, and YouTube, have become trendsetters in their own right. Unlike traditional fashion authorities, such as magazine editors or runway designers, influencers often bring a personal touch to their style that resonates deeply with their audiences. This relatability allows them to popularize new trends and styles that might otherwise remain niche, democratizing fashion and making it more accessible to a wider audience.The way influencers collaborate with brands also contributes significantly to trendsetting. Many influencers partner with fashion brands to launch exclusive collections or promote new products, generating considerable buzz and driving immediate sales. Their content, which often includes styling tips, unboxing videos, or behind-the-scenes glimpses, creates a sense of excitement and urgency around new fashion items. This approach not only boosts brand visibility but also fosters long-term loyalty by leveraging influencers personal style and storytelling abilities to build genuine connections with their followers. Social media platforms have further amplified the influence of fashion influencers by enabling real-time engagement with their audiences. This interaction fosters a sense of community and inclusivity, allowing followers to participate in trends by recreating influencers looks and sharing their own interpretations. This participatory culture not only spreads trends rapidly but also encourages a broader representation of style, challenging conventional beauty standards and making fashion more diverse.',
            post_img: influe
         },

        { id: 6, name: "Kim Yugan", avatar: "https://i.pravatar.cc/150?img=6", caption: 'The Evolution of Gaming: Trends in Video Games and Virtual Reality' ,
            ans:'The gaming industry has undergone remarkable transformations over the past few decades, driven by technological advancements and shifting consumer preferences. One of the most significant trends reshaping the landscape of gaming is the evolution of video games themselves. From pixelated 8-bit graphics to hyper-realistic, photorealistic environments, the visual and immersive quality of games has continually improved. Modern games boast stunning graphics, intricate storylines, and expansive open worlds that captivate players like never before. This evolution is not just about better visuals; it also encompasses more sophisticated gameplay mechanics, deeper narratives, and enhanced interactivity, making gaming a richer and more engaging experience.Another major trend in the gaming industry is the rise of online and multiplayer gaming. The advent of high-speed internet and the proliferation of online platforms have enabled gamers to connect and compete with others across the globe. Games like Fortnite and Call of Duty have popularized this trend, offering dynamic multiplayer experiences that keep players engaged through constant updates, seasonal events, and competitive play. This shift has also fostered the growth of esports, where professional gamers compete in organized tournaments for significant prizes and global recognition. The rise of streaming platforms like Twitch has further amplified this trend, allowing gamers to broadcast their gameplay live and build communities around their content.As the gaming industry continues to evolve, it is clear that these trends—enhanced graphics and gameplay, online and multiplayer experiences, VR and AR innovations, and cloud gaming—are driving the future of entertainment. These advancements not only push the boundaries of what games can offer but also expand the ways in which players can engage with and experience digital worlds. The ongoing evolution promises even more exciting developments, ensuring that gaming remains a dynamic and ever-evolving field at the forefront of technological innovation. ',
            post_img: game
        },

        { id: 7, name: "Laura Patterson", avatar: "https://i.pravatar.cc/150?img=9", caption: 'How Augmented Reality is Revolutionizing Online Shopping',
            ans:'Augmented Reality (AR) is rapidly transforming the online shopping experience, bringing a new level of interactivity and immersion to e-commerce. Traditionally, online shopping has been limited by the inability to physically interact with products before purchase. AR addresses this challenge by overlaying digital information onto the real world through devices like smartphones and AR glasses. This innovation allows customers to visualize products in their own space, providing a more tangible sense of how items will fit into their lives before making a purchase.One of the most significant ways AR is revolutionizing online shopping is through virtual try-ons. For fashion and beauty retailers, AR technology enables customers to virtually try on clothing, accessories, or makeup from the comfort of their homes. Apps and websites equipped with AR features allow users to see how different styles, colors, and sizes look on them without physically trying them on. This not only enhances the shopping experience by helping consumers make more informed decisions but also reduces the likelihood of returns, which benefits both customers and retailers.',
            post_img: shopping
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

export default Trend;

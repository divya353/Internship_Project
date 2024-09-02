import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import tech1 from '../Assets/tech1.jpg';
import tech2 from '../Assets/tech2.jpg';
import tech3 from '../Assets/tech3.jpg';
import tech4 from '../Assets/tech4.jpg';
import tech5 from '../Assets/tech5.jpg';
import tech6 from '../Assets/tech6.jpg';
import tech7 from '../Assets/tech7.jpg';


function Post() {
    const postData = [
        { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", caption: 'AI in Healthcare: Revolutionizing Diagnostics and Treatment',
            ans:'Artificial Intelligence (AI) is transforming healthcare by enhancing diagnostics and personalizing treatment. Advanced AI algorithms can now analyze medical images with remarkable precision, often identifying anomalies such as tumors or fractures that might be missed by the human eye. This not only accelerates the diagnostic process but also increases accuracy, leading to earlier and more effective treatments. Additionally, AI is revolutionizing drug discovery and development, speeding up the identification of potential therapies by analyzing vast datasets far more quickly than traditional methods. Personalized medicine is also benefiting from AI, as it helps tailor treatments to individual genetic profiles, improving patient outcomes and reducing adverse effects. As AI continues to evolve, its integration into healthcare promises to make diagnostics more precise and treatments more effective, ultimately enhancing patient care and advancing medical science. ',
            post_img:tech1
        },

        { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2", caption: 'Finance: Revolutionizing Banking and Investment ' ,
            ans:'Artificial Intelligence (AI) is revolutionizing the finance industry, reshaping banking and investment landscapes with unprecedented precision and efficiency. In banking, AI-powered algorithms are streamlining operations through automation, enhancing customer service with chatbots, and bolstering fraud detection by analyzing transaction patterns in real-time. This not only improves security but also accelerates transaction processing and reduces operational costs.In investment, AI is setting new standards by enabling sophisticated data analysis and predictive modeling. Algorithms can sift through massive amounts of market data to identify trends and execute trades at speeds beyond human capability, optimizing investment strategies and potentially maximizing returns. Robo-advisors, driven by AI, offer personalized investment advice based on individual risk profiles and financial goals, democratizing access to tailored financial planning. As AI continues to advance, its integration promises to make banking more secure and investments more strategic, driving a new era of financial innovation.',
            post_img:tech2
         },

        { id: 3, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=3", caption: 'Education: Personalized Learning and Administration',
            ans:'Artificial Intelligence (AI) is making significant strides in education by personalizing learning experiences and optimizing administrative tasks. AI-driven educational tools adapt to individual learning styles and paces, offering customized support that caters to each students unique needs. Intelligent tutoring systems, for example, provide real-time feedback and targeted exercises, helping students grasp difficult concepts more effectively and improving overall learning outcomes.On the administrative side, AI is streamlining tasks such as grading and scheduling, which allows educators to focus more on teaching and engaging with students. Automated grading systems reduce the burden of evaluating assignments, while AI-based scheduling tools optimize class timetables and resource allocation. This efficient management not only saves time but also enhances the educational environment, making it more responsive and effective. As AI continues to evolve, its impact on education promises to create more personalized learning experiences and transform administrative processes for the better.',
            post_img:tech3
         },

        { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/150?img=4", caption: 'Cybersecurity in the Age of AI: Protecting Against Modern Threats',
            ans:'Artificial Intelligence (AI) is reshaping the landscape of cybersecurity, presenting both significant opportunities and challenges. On one hand, AI enhances threat detection and response by analyzing vast amounts of data to identify patterns and anomalies that may indicate potential security breaches. Machine learning algorithms can swiftly detect unusual activity, predict potential threats, and automate responses, thereby reducing the time it takes to address vulnerabilities and minimize damage.However, the rise of AI also introduces new risks. Cybercriminals are leveraging AI to develop sophisticated attack strategies, such as automated phishing schemes and advanced malware that can adapt to evade detection. This creates a constantly evolving battleground where traditional security measures may fall short. As AI technology continues to advance, it’s crucial for organizations to adopt a multi-layered security approach that integrates AI-driven tools with human oversight to stay ahead of emerging threats and safeguard sensitive information. Balancing innovation with vigilance will be key to maintaining robust cybersecurity in this dynamic environment.',
            post_img:tech4
         },

        { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", caption: 'The Role of Big Data in Shaping Consumer Behavior',
            ans:'Big data is revolutionizing how businesses understand and influence consumer behavior. By analyzing vast amounts of data from various sources—such as social media, online transactions, and customer feedback—companies can gain deep insights into consumer preferences and trends. This wealth of information allows businesses to personalize marketing strategies, tailor product recommendations, and optimize customer experiences with unprecedented precision. For example, e-commerce platforms use data-driven algorithms to suggest products based on previous purchases and browsing history, enhancing the shopping experience and boosting sales.Moreover, big data enables companies to predict future consumer behavior by identifying emerging trends and patterns. This predictive capability helps businesses make informed decisions about product development, inventory management, and marketing campaigns. However, with these advanced insights comes the responsibility to handle consumer data ethically and transparently. Ensuring data privacy and security is crucial in maintaining trust and fostering positive relationships with consumers. As big data continues to evolve, its role in shaping consumer behavior will only grow, driving more personalized and effective business strategies.',
            post_img: tech5
         },

        { id: 6, name: "Kim Yugan", avatar: "https://i.pravatar.cc/150?img=6", caption: 'Tech Innovations in Sustainable Energy: Paving the Way for a Greener Future' ,
            ans:'Technological innovations are transforming the sustainable energy landscape, driving the transition to a greener future. Advances in solar panel technology, such as the development of higher-efficiency photovoltaic cells and flexible, lightweight materials, are making solar energy more accessible and cost-effective. Similarly, innovations in wind turbine design, including larger, more efficient blades and floating turbines for deep-water installations, are expanding the potential for wind energy to contribute significantly to global power needs.Energy storage solutions are also seeing significant advancements. New battery technologies, such as solid-state batteries and flow batteries, promise to enhance energy storage capacity, longevity, and safety, addressing one of the major challenges of renewable energy—intermittency. These innovations ensure that excess energy generated from renewable sources can be stored and utilized when production is low. As these technologies continue to evolve, they not only promise to reduce our reliance on fossil fuels but also contribute to a more resilient and sustainable energy system. Embracing these innovations will be crucial in achieving a cleaner, more sustainable future.',
            post_img:tech6
        },

        { id: 7, name: "Laura Patterson", avatar: "https://i.pravatar.cc/150?img=9", caption: 'Transportation: The Future of Mobility',
            ans:'The future of transportation is rapidly evolving with groundbreaking technologies reshaping how we move from one place to another. Autonomous vehicles are at the forefront of this transformation, promising to revolutionize road safety and efficiency. Self-driving cars, equipped with advanced sensors and AI algorithms, are designed to navigate roads with minimal human intervention, potentially reducing traffic accidents and congestion while offering greater mobility for those unable to drive.Electric vehicles (EVs) are also gaining momentum, driven by advancements in battery technology and increased environmental awareness. With longer ranges and faster charging times, EVs are becoming a viable alternative to traditional gasoline-powered cars, contributing to a reduction in greenhouse gas emissions and dependence on fossil fuels. Additionally, innovations in public transportation, such as smart transit systems and on-demand ride services, are making commuting more flexible and efficient. As these technologies continue to develop, they hold the promise of a more sustainable, safer, and connected future for mobility.',
            post_img:tech7
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

export default Post;

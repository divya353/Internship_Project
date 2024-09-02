import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import image from '../Assets/image.jpg';
import image1 from '../Assets/image1.jpg';
import image3 from '../Assets/image3.jpg';
import image5 from '../Assets/image5.jpg';
import image6 from '../Assets/image6.jpg';
import image7 from '../Assets/image7.jpg';
import job2 from '../Assets/job2.jpeg';


function Trend() {
    const postData = [
        { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", caption: 'The Art of Knowing When It’s Time to Quit: Signs You Shouldn’t Ignore',
            ans:'Deciding to leave a job is a significant and often challenging decision, one that can have far-reaching effects on both your personal and professional life. Understanding when it’s time to move on requires a careful evaluation of your current situation, both objectively and emotionally. Here are some key signs that you shouldnt ignore if you’re contemplating whether its time to quit your job. Persistent Unhappiness: One of the most telling signs that it might be time to quit is a persistent feeling of unhappiness. If you consistently dread going to work, feel unmotivated, or find that work is affecting your mood and well-being negatively, it could be a red flag. While occasional dissatisfaction is normal, ongoing unhappiness can be a sign that your job is not fulfilling your needs or aligning with your values.Lack of Career Growth: Another important indicator is the stagnation of your career growth. If you find that there are limited opportunities for advancement, skill development, or recognition, it may be time to consider a change. Career growth is crucial for long-term job satisfaction, and a lack of progression can lead to frustration and a sense of being stuck.',
            post_img:image
        },

        { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2", caption: 'From Resignation to Reinvention: How to Make the Most of Your Career Break' ,
            ans:'Taking a career break can be a transformative period that allows you to reset and reimagine your professional life. Whether you’ve resigned to pursue new opportunities, address personal goals, or simply recharge, making the most of this time is crucial for a successful reinvention. Start by setting clear objectives for your break. Identify what you want to achieve, whether it’s gaining new skills, exploring a different career path, or focusing on personal development. Use this time to invest in yourself through courses, certifications, or self-study to enhance your qualifications and open new doors.Networking remains essential even when you’re not actively employed. Stay connected with industry professionals, attend networking events, and engage in online communities. This can keep you informed about industry trends and potential opportunities, and may lead to valuable connections for future roles. Additionally, consider volunteering or undertaking freelance projects. These activities not only keep your skills sharp but also demonstrate your initiative and adaptability.',
            post_img:image1
         },

        { id: 3, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=3", caption: 'Handling the Aftermath: How to Recover Professionally and Emotionally After Quitting a Job',
            ans:'Quitting a job, while sometimes necessary, can be a tumultuous experience that leaves both professional and emotional residue. Recovering from this transition requires deliberate effort and self-care. Professionally, the first step is to reframe your mindset. Embrace the change as an opportunity for growth rather than a setback. Update your resume and LinkedIn profile to reflect your most recent accomplishments and start networking actively. Reach out to former colleagues and industry contacts, and consider seeking advice from a career coach or mentor to navigate your next steps effectively.Emotionally, it’s important to acknowledge and address the feelings that arise after leaving a job. Whether you’re experiencing relief, anxiety, or regret, allow yourself the space to process these emotions. Engage in self-care practices such as exercise, meditation, or journaling to manage stress and build resilience. Reflect on the reasons you left and what you’ve learned from the experience to gain perspective and move forward with clarity.Maintaining a structured routine can also be beneficial during this period. Set daily goals and create a schedule to keep yourself productive and focused. This approach can help counter feelings of aimlessness and provide a sense of purpose. Additionally, consider exploring new interests or hobbies that you might have neglected while employed. This can reinvigorate your passion and creativity, which can be valuable when approaching new opportunities.',
            post_img:image3
         },

        { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/150?img=4", caption: 'From Resignation to Job Search: How to Transition Effectively',
            ans:'Transitioning from resignation to job search is a crucial phase that requires strategic planning and execution to ensure a smooth and successful career shift. The first step is to meticulously plan your exit strategy. Communicate your resignation professionally, providing ample notice, and ensure a comprehensive handover of your responsibilities. This not only maintains your professional reputation but also sets a positive tone for future references.Once your resignation is finalized, shift your focus to the job search process. Update your resume and LinkedIn profile to reflect your most recent experiences and achievements. Tailor your resume to highlight skills and accomplishments relevant to the positions you’re targeting. Additionally, leverage your professional network by reaching out to former colleagues, mentors, and industry connections. Networking can uncover hidden job opportunities and provide valuable insights into potential employers.Finally, manage your time and stay organized throughout your job search. Set daily or weekly goals for applications and networking activities to maintain momentum and focus. While the process may take time, maintaining a proactive and positive approach will increase your chances of finding a role that aligns with your career goals and aspirations.',
            post_img:job2
         },

        { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", caption: 'Handling the Aftermath: How to Recover Professionally and Emotionally After Quitting a Job',
            ans:'Quitting a job, while sometimes necessary, can be a tumultuous experience that leaves both professional and emotional residue. Recovering from this transition requires deliberate effort and self-care. Professionally, the first step is to reframe your mindset. Embrace the change as an opportunity for growth rather than a setback. Update your resume and LinkedIn profile to reflect your most recent accomplishments and start networking actively. Reach out to former colleagues and industry contacts, and consider seeking advice from a career coach or mentor to navigate your next steps effectively.Emotionally, it’s important to acknowledge and address the feelings that arise after leaving a job. Whether you’re experiencing relief, anxiety, or regret, allow yourself the space to process these emotions. Engage in self-care practices such as exercise, meditation, or journaling to manage stress and build resilience. Reflect on the reasons you left and what you’ve learned from the experience to gain perspective and move forward with clarity.Lastly, be patient with yourself. The recovery process takes time, and it’s important to be kind and realistic about your expectations. Keep in mind that this period of transition can ultimately lead to a more fulfilling career path and personal growth. By taking proactive steps and addressing both professional and emotional aspects, you can navigate this aftermath successfully and emerge stronger.',
            post_img: image5
         },

        { id: 6, name: "Kim Yugan", avatar: "https://i.pravatar.cc/150?img=6", caption: 'From Resignation to Job Search: How to Transition Effectively' ,
            ans:'Transitioning from resignation to job search is a crucial phase that requires strategic planning and execution to ensure a smooth and successful career shift. The first step is to meticulously plan your exit strategy. Communicate your resignation professionally, providing ample notice, and ensure a comprehensive handover of your responsibilities. This not only maintains your professional reputation but also sets a positive tone for future references.Once your resignation is finalized, shift your focus to the job search process. Update your resume and LinkedIn profile to reflect your most recent experiences and achievements. Tailor your resume to highlight skills and accomplishments relevant to the positions you’re targeting. Additionally, leverage your professional network by reaching out to former colleagues, mentors, and industry connections. Networking can uncover hidden job opportunities and provide valuable insights into potential employers.As you begin applying for new roles, prepare thoroughly for interviews by researching potential employers and practicing responses to common interview questions. This preparation will help you present yourself confidently and effectively. Simultaneously, consider enhancing your skills through online courses or certifications relevant to your desired job. This not only boosts your qualifications but also demonstrates your commitment to professional development.Finally, manage your time and stay organized throughout your job search. Set daily or weekly goals for applications and networking activities to maintain momentum and focus. While the process may take time, maintaining a proactive and positive approach will increase your chances of finding a role that aligns with your career goals and aspirations.',
            post_img:image6
        },

        { id: 7, name: "Laura Patterson", avatar: "https://i.pravatar.cc/150?img=9", caption: 'The Financial Impact of Quitting Your Job: Budgeting and Planning Ahead',
            ans:'Quitting your job can have significant financial implications, making careful budgeting and planning essential for a smooth transition. Before resigning, assess your financial situation and create a budget that covers your expenses during the job search period. It’s advisable to have an emergency fund that can sustain you for several months, covering essential costs such as housing, utilities, and groceries. This cushion can alleviate stress and provide stability while you explore new opportunities. Review any financial benefits associated with your current job, such as severance pay, unused vacation days, or bonuses, and ensure you understand how to claim them. This financial support can ease the transition and help bridge any gaps in income. Additionally, if you’re eligible for unemployment benefits, familiarize yourself with the application process and requirements to maximize your financial support during this period.Planning ahead involves setting financial goals and timelines for your job search. Establish milestones for applying to jobs, attending interviews, and networking to maintain focus and motivation. By combining a well-thought-out budget with strategic planning, you can navigate the financial impact of quitting your job with greater confidence and ease, ensuring a smoother transition to your next career opportunity.',
            post_img:image7
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

export default Trend;

import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import curtainbang from '../Assets/curtainbang.jpg';
import hair from '../Assets/hair.jpg';
import healthyskin from '../Assets/healthyskin.jpg';
import mask from '../Assets/mask.jpg';
import nail from '../Assets/nail.jpg';
import pedi1 from '../Assets/pedi1.jpg';
import serum from '../Assets/serum.jpg';
function Beauty() {
    const postData = [
        { id: 1, name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=1", caption: 'Wake Up To Healthy Skin With The Ultimate Night Routine (Advanced & Beginner-Friendly)',
            ans:'Despite putting in ample effort during the day,if your skin still feels far from fabulous, perhaps it’s time to jump onto a nighttime skincare routine.Now, we all know one should never sleep with makeup on, as our skin needs time to recover from the stress of the day. Your skin’s restoration process peaks at night; our skin repairs the DNA damage suffered during the day due to the sun, dust, dirt, and grime, at night.Once the sun’s down, our body’s asleep, and environmental stressors are at bay, our skin restores itself to generate new cells, circulates blood flow, reduces inflammation, and gives our epidermis the rest it deserves to #WakeUpToHealthySkin Let’s take a look at why our skin needs a nighttime routine and how to build one, whether you are just starting out or are an advanced beauty maven. While you may have a CSMS routine in place for the day, a nighttime skincare routine demands advanced care. Why Is A Nighttime Skincare Routine Important?Following a structured skincare routine before you hit the hay is crucial for multiple reasons; let’s address them so we leave no stones unturned.Environmental & Physical Stressors-During the day, our skin comes in contact with harmful UV rays from the sun, dust, and other pollutants that can take a toll on the skin. These stressors lead to an increased risk of fine lines, wrinkles, loss of firmness, hyperpigmentation, as well as other skin concernsBest Time For Restoration-Your skins natural repair and renewal mechanisms are most active during the night. While you sleep, the skins blood flow increases, allowing it to absorb nutrients and oxygen more efficiently.More Stable Skin Cells-While you sleep, your skin is in a relatively stable condition. This means it’s less prone to external factors that can disrupt the efficacy of your skincare products, such as sweating, touch, or exposure to sun and pollution.Moisture Loss Prevention-The skin loses moisture at nighttime, and the regular use of a good nighttime moisturiser enriched with ceramides can help lock in hydration, preventing transepidermal water loss (TEWL), which can lead to dryness and dehydration.Lack Of Direct Sunlight-he absence of direct sunlight during nighttime reduces the risk of UV damage. This makes the evening an ideal time to use night-specific products such as retinoids and exfoliants which may increase photosensitivity without the threat of UV radiation.', 

            post_img: healthyskin
           
        },

        { id: 2, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=2", caption: 'Dr Falguni Shah Shares Her Expert Tips On Pre-Bridal Haircare For Healthier, Shinier Hair' ,
            ans:' If you’re about to be a bride, we’re guessing you’re experiencing  mini nightmares regarding your wedding day almost every night? You already know how great your skin is going to look (we’re assuming you’ve consulted a dermatologist and dietician), but one of the things most brides fear is experiencing a bad hair day on D-Day. Don’t fret, because we’re here to make sure that doesn’t happen—trust.We have designed a surefire guide with celebrity haircare expert Dr Falguni Shah so that you have access to a 6-month haircare prep that will make your hair healthier, bouncier, and ready to shine just in time your wedding day.1. 6 Months Before Your WeddingThis is the perfect time to start including nutrients like protein into your diet that promotes hair growth. If you’re a vegetarian add berries, spinach, avocados, nuts and seeds to your diet. For non-vegetarians, eat more fish and eggs. Also, exercise to keep your hair healthy from the inside out. Along with your cardio and yoga, be sure to massage your scalp to promote better blood flow.2. 3 Months Before The WeddingExfoliate your scalp twice a week with an anti-dandruff shampoo, scrub or products with salicylic acid. You can also try going for regular hair spa sessions to improve the texture of your strands. And, for some extra lustre and strength, add multivitamins supplements like biotin and D3 to your routine.3. 1 Month Before The WeddingReduce shampooing to only twice a week as excessive washing can dry out your strands and scalp. You can use a moisturising hair mask every week or use warm oil to gently massage your scalp and rinse it off after a couple of hours to lock in the desired moisture for your mane.4. 1 Day Before Your WeddingMake sure you catch up on some good sleep, stay calm, and most importantly hydrated!5. 3 Super Ingredients To ConsiderBiotin helps in thickening and lengthening your hair while increasing follicle growth. Hemoglobin stimulates hair growth and prevents hair loss. Vitamin D3 helps in new hair follicle creation that results in thick and bouncy hair. ' ,
            post_img: hair
         },

        { id: 3, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=3", caption: 'Green Tea Face Mask Benefits You Need To Know by Diya J Verma',
            ans:'Green tea is renowned for its many therapeutic properties – compelling you to go beyond just a cuppa and incorporate it into your skincare regime. From fighting the first signs of premature ageing to curbing redness and inflammation, its antioxidant, anti-inflammatory, and antimicrobial benefits make it ideal for oily and acne-prone skin types. And what better way to quench your skin with green tea goodness than via a soothing sheet mask? Scroll further to learn about its myriad benefits. Plus, our green tea mask recommendations for your weekend pamper sesh.The Benefits of Green Tea For Your Skin 1.Tends To Acne-Prone Skin 2.Curbs Redness & Inflammation 3.Stalls Signs Of Premature Ageing 4.Delivers Ample Hydration5.Unclogs Gunked Up Pores',
            post_img: mask
         },

        { id: 4, name: "David Brown", avatar: "https://i.pravatar.cc/150?img=4", caption: 'Treat Yourself To A Salon-Esque Mani-Pedi At Home by Diya J Verma',
            ans:' Think before splurging on your next salon visit – we are here to help you cut back on costs with the best manicure-pedicure kits for smooth, supple skin.There’s nothing quite like sippin’ on mimosas while getting the dead skin scrubbed off your feet…until you’re met with a hefty bill that’ll eat into your savings. Let’s get real, we’ve all been there – and don’t want to be, ever again. Self-care comes with a price tag, and while we’re all for it, a weekly at-home pamper sesh needn’t burn a hole in your pocket.A wise woman, or man, thought it’d be of much service to bring the therapeutic mani-pedi procedure home, in the form of a DIY kit that holds all the skin-soothing essentials you’d find at your nearest salon. Quick, convenient, and cheap, the beauty treatment requires no more than 60 minutes of your time and can be carried out oneself or with the assistance of an at-home professional.What’re you waiting for? Go shop now.',

            post_img: pedi1
         },

        { id: 5, name: "Emily Davis", avatar: "https://i.pravatar.cc/150?img=5", caption: 'Tried & Tested: Nykaa Naturals’ Serum Jelly Delivers On Its Promise by Diya J Verma',
            ans:'  put our newest private label offering to the test, only to discover that it unleashes my skin’s true potential… Read on for my honest takeaway.Talk of result-oriented skincare, and there you have it – Nykaa Naturals forays into the target-specific concern category with their all-new Serum Jelly. The feather-light, flash-absorbent formula is derived from nature and powered by science, combating common woes to give you your best skin yet.First up, we have the Dewy Bright Serum Jelly, where a trinity of water lily extract, niacinamide, and plant-based squalene fight telltale signs of hyperpigmentation. Promising glass skin in one pump, the potion is safe for all skin types and less likely to irritate, owing to the presence of natural actives vis-à-vis their chemical counterparts.The 100% vegan and cruelty-free concoction boasts a soothing jelly-like texture, lending up to 72 hours of hydration. Plus, the homegrown hero harnesses the power of sugarcane-derived niacinamide to help achieve even tone and texture. A win-win for your skin!',
            post_img:serum
         },

        { id: 6, name: "Kim Yugan", avatar: "https://i.pravatar.cc/150?img=6", caption: 'Curtain Bangs For All Hair Types & Textures (& How To Style Them)by Clara Vadakkan' ,
            ans:' From Dakota Johnson and Jameela Jamil to Beyoncé and PCJ, we have seen all of these style icons rock curtain bangs with absolute sass. Read ahead to learn how to style your curtain bangs to take it to the next level.n every girl’s life, there comes a time when she takes a pair of scissors and tells herself, “I can do it! I can give myself bangs,” but, alas, we all know how this ends. From fangirling over Miley Cyrus as Hannah Montana in childhood to admiring Jameela Jamil’s outspoken persona and perfect hair as an adult, I have attempted to cut my own bangs at least once every two years. Only half of those times have been a hit. And now, as someone in her late 20s, I have realised that the right way to do bangs is by getting curtain bangs – with a length and volume that suits your hair.Curtain bangs are versatile and suit all hair types and textures. Whether you have extreme coils or your flocks are as straight as an arrow, curtain bangs are only-bad-hair-days-girlie’s best friend. Use a blow dryer with a round bristled comb to air out your bangs and make them look fuller.',
            post_img: curtainbang
        },

        { id: 7, name: "Laura Patterson", avatar: "https://i.pravatar.cc/150?img=9", caption: 'The Best Nail Polish Brands To Try In 2024 by Diya J Verma',
            ans:'There are a few things you should bear in mind before purchasing nail lacquer; read ahead to know which nail enamel is best for you, and brands that should be on your radar.Let’s get real; gel and acrylic-manicured nails – press-on nails, too – severely damage the health of your cuticle. So, no matter how Insta-worthy your nail art is, once those faux claws are off, you’re left with nothing but a brittle nail bed. As per a preliminary study, nail art can leave cracks and other abnormalities on your nail plate, which are, more often than not, invisible to the naked eye. Moreover, in rare cases, skin rashes and real nails falling off have been reported, too. The solution? Stick to a DIY nail ritual with our ultimate curation of the best nail lacquers on the market. A glossy, chip-free, salon-esque mani coming right up!',
            post_img: nail
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

export default Beauty;

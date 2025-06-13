import storytelling from '../assets/skills/storytelling.jpg';
import photography from '../assets/skills/photography.jpg';
import event from '../assets/skills/event.jpg';
import food from '../assets/skills/food.jpg';
import wyndham from '../assets/instagram/wyndham.png'
import margaritaville from '../assets/instagram/margaritaville.png'
import design1 from '../assets/design/1.png'
import design2 from '../assets/design/3.png'
import design3 from '../assets/design/5.png'
import design4 from '../assets/design/4.png'
import design5 from '../assets/design/6.png'
import design6 from '../assets/design/2.png'
import blog1 from '../assets/blogs/1.png'
import blog2 from '../assets/blogs/2.png'
import blog3 from '../assets/blogs/3.png'
import blog4 from '../assets/blogs/4.png'


export const HERO_SKILLS = [
    'Digital Marketing.', 
    'Social Media.', 
    'Photography.', 
    'Event Planning.', 
    'Design.'
]

export const HERO_TEXT = `
    I'm a dynamic marketing guru with a passion for creativity and innovation.
    With over a decade of experience under my belt, I specialize in all things social media, 
    digital marketing, photography, design, and epic event planning.
`
export const ABOUT_CONTENT = `    
    When I'm not conquering the 
    marketing world, you can find me exploring my love for culinary arts and soaking up 
    precious moments with my family. Intrigued? Let's connect!
`

export const SKILL_SLIDES = [ 
    {
        title: 'Creative Storytelling',
        image: storytelling,
        description: 'Crafted to captivate and inspire'
    },
    {
        title: 'Photography',
        image: photography,
        description: 'Capturing moments with artistic flair and emotional resonance'
    },
    {
        title: 'Event Marketing',
        image: event,
        description: 'Campaigns that engage and amplify brand stories'
    },
    {
        title: 'Food & Beverage',
        image: food,
        description: 'Crafted with irresistible charm and delicious detail'
    },
]


const blogPosts = (posts) => (
    posts.map((post, index) => (
        <div>
            <img src={post.image} alt=""/>
            <p>{post.description}</p>
        </div>
    ))
)

export const MY_WORK = [
    {
        label: 'Instagram',
        id: 0,
        content: 
            [ 
                {
                image: wyndham,
                description : `The team at Wyndham Grand Clearwater Beach entrusted Jazmin with the task of presenting a more authentic
                and captivating representation of its unique guest experiences across social channels.
                As a result of Jazmin's monthly efforts, there has been a notable surge in organic engagements (+209%), audience (+51%), 
                and impressions (+178%) for Instagram from April 2023 to May 2024 in comparison to the previous y`
                },
            {
                image: margaritaville,
                description: `The Margaritaville Palm Springs team expressed a desire to boost their organic follower base. Jazmin successfully 
                increased their followers by 50% within a span of 20 months.`
            }  
            ]
     },

    { 
        label: 'Design',
        id: 1,
        content: [
            design1, design2, design3, design4, design5, design6
        ]
    },

    { 
        label: "Blogs",
        id: 2,
        content: [
            {
                image: blog1,
                description: '6 Home Décor Styles — and Engagement Rings to Match',
                url: 'https://blog.coldwellbanker.com/6-home-decor-styles-engagement-rings-match/'
            },
            {
                image: blog2,
                description: '7 Essential Tips On How To Propose',
                ulr: 'https://engaged.robbinsbrothers.com/7-essential-tips-on-how-to-propose'
            },
            {
                image: blog3,
                description: '5 Times You Should Remove Your Ring',
                url: 'https://engaged.robbinsbrothers.com/5-times-you-should-remove-your-ring'
            },
            {
                image: blog4,
                description: 'Jewelry Gift Ideas For Every Kind of Woman',
                url: 'https://engaged.robbinsbrothers.com/jewelry-gift-ideas-for-every-kind-of-woman'
            }
        ]
    }
]
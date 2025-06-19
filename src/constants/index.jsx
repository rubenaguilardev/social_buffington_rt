import storytelling from '../assets/skills/storytelling.jpg';
import photography from '../assets/skills/photography.jpg';
import event from '../assets/skills/event.jpg';
import food from '../assets/skills/food.jpg';
import wyndham from '../assets/instagram/wyndham.png'
import margaritaville from '../assets/instagram/margaritaville.png'
import design1 from '../assets/design/1.png'
import design2 from '../assets/design/3.png'
import design3 from '../assets/design/4.png'
import design4 from '../assets/design/6.png'
import design5 from '../assets/design/5.png'
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

export const MY_WORK_TOP = [
    
    {
        image: wyndham,
        description : `The team at Wyndham Grand Clearwater Beach entrusted Jazmin with the task of presenting a more authentic and captivating representation of its unique guest experiences across social channels.
        
        As a result of Jazmin's monthly efforts, 
        there has been a notable surge in organic engagements (+209%), audience (+51%), and impressions (+178%) for Instagram from April 2023 to May 2024 in comparison to the previous year.`
    },
    {
        image: margaritaville,
        description: `The Margaritaville Palm Springs team expressed a desire to boost their organic follower base. Jazmin successfully 
        increased their followers by 50% within a span of 20 months.`
    }  
]

export const MY_WORK = [
    {
        label: 'Instagram',
        id: 0,
        content: 
            [
                'https://www.instagram.com/reel/C9ieGxNJ0ih/?utm_source=ig_embed&ig_rid=bf0eaf37-43c8-4e0f-9baf-f2748daac228',
                'https://www.instagram.com/p/C-VZOSSp9MF/?utm_source=ig_embed&ig_rid=157e34e4-12e4-4f4a-87b1-5fc3fd6bdc16',
                'https://www.instagram.com/reel/CiAvfAlLNfH/?utm_source=ig_embed&ig_rid=40da67ba-387e-4338-94e3-f2a3d66d7673',
                'https://www.instagram.com/reel/CtMxej3Az9W/?utm_source=ig_embed&ig_rid=442be97e-5a26-4812-89d9-66719da79ed4',
                'https://www.instagram.com/reel/CdtN-A2po3O/?utm_source=ig_embed&ig_rid=bd197f9c-5dc9-4bae-b3d5-7eafaea43ff7'
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
                image: blog4,
                description: 'Jewelry Gift Ideas For Every Kind of Woman',
                url: 'https://engaged.robbinsbrothers.com/jewelry-gift-ideas-for-every-kind-of-woman'
            },
            {
                image: blog2,
                description: '7 Essential Tips On How To Propose',
                url: 'https://engaged.robbinsbrothers.com/7-essential-tips-on-how-to-propose'
            },
            {
                image: blog3,
                description: '5 Times You Should Remove Your Ring',
                url: 'https://engaged.robbinsbrothers.com/5-times-you-should-remove-your-ring'
            }
        ]
    }
]


export const TESTIMONIAL_CONTENT = [
    {
        author: 'Greg Lutchko',
        company: 'Margaritaville Resort Palm Springs',
        testimonial: `
            Jazmin is a strategic and creative social media professional. She stays updated on the trends 
            across all platforms to create thoughtful and clever campaigns that are on- brand, resonate with our audience, 
            generate positive engagement and deliver a solid ROI. Her ability to listen and ask key questions make her a 
            great collaborator and solid team player.
        `
    },
    {
        author: 'Annie Humphrey',
        company: 'Save the Storks',
        testimonial: `
            I had the privilege of working with Jazmin for over a decade. The first few years where we worked 
            side by side, I knew Jazmin’s tenacity, creativity, and hunger for learning will always make her 
            one of the best assets on any team she joins. It was rewarding to see her grow from a Part-Time Consultant 
            to a Guest Service Manager, to a Community Manager, and then step into a Social Media Manager Role. 
            She is not only fun to teach, she also possesses higher thrust to drive results than many others! 
            When she stepped into the leadership role, she embraced that career milestone by leading with empathy and 
            confidence. Jazmin is a rare find, a total package that has the drive, the grit, the creativity, the vision, 
            the passion, and loyalty that makes her a key element for her team's success! PS- Her culinary talent is an 
            exquisite added bonus
        `
    },
    {
        author: 'Taylor Eckard',
        company: 'Wyndham Grand Clearwater Beach',
        testimonial: `
            Working with Jazmin has been an absolute pleasure. Her professionalism and dedication are truly
            exceptional. Jazmin consistently goes above and beyond, taking the time to understand our unique
            needs and tailoring her approach to meet them. Her expertise in social media has been transformative for
            our engagement and outreach, helping us connect with our audience in innovative ways. I wholeheartedly recommend 
            Jazmin for anyone seeking a knowledgeable and committed social media expert.
        `
    }
]
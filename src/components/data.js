import heroImage from '../assets/images/header.png'
import introImg from '../assets/images/introduction.jpg'
import details1 from '../assets/images/details-1.png'
import details2 from '../assets/images/details-2.png'
import details3 from '../assets/images/details-3.png'
import downArrow from '../assets/images/down-arrow.png'
import { FaHeadphones } from 'react-icons/fa'
import { FiClipboard } from 'react-icons/fi'
import { BsChatDots } from 'react-icons/bs'


export const navLinks = [
	{
		text: 'Home',
		path: 'home'
	},
	{
		text: 'Intro',
		path: 'intro'
	},
	{
		text: 'Features',
		path: 'features'
	},
	{
		text: 'Details',
		path: 'details'
	},
    {
        text:'Drop',
		icon: downArrow,
    }
]

export const heroDetails = {
    header: 'Now is the time to start selling things online',
    text: 'Kora is a leading online shop creation platform which offers amazing features for ecommerce',
    image: heroImage
}

// Two phased components
export const introduction = {
    id:'intro',
	image:introImg,
	heading: 'Kora is here to help you grow your online shop',
	description: 'We believe in sustainable and trustful ecommerce which offers opportunities for both shop owners and customers. Our entire experience and passion can be found in Kora and you are invited to use it for your business',
    
}

export const whatToSell = {
    id:'whatToSell',
	image:details1,
	tag:'Step 1',
	heading: 'Figure out what to sell',
	description: 'Delivering powerful brands for popular shops while creating beautiful concepts and evocative logos. Use the opportunity to prepare complete style guides',
	list:false,
	button:true,
	imgStart:true,
	label:'Lightbox',
    
}

export const analyzeMarket = {
    id:'analysis',
	image:details2,
	tag:'Step 2',
	heading: 'Analyze the marketplace',
	description: 'Our team of competent designers and developers are able to create beautiful designs and structured code that will serve your ecommerce project on the long term',
	list:true,
	button:false,
	imgStart:false,
	obj1:'Delivering powerful brands for popular shops',
	obj2:'Creating beautiful concepts and evocative logos',
	obj3:'Preparing complete branding guides and styles'
	
    
}

export const createAccount = {
    id:'shopAccount',
	image:details3,
	tag:'Step 3',
	heading: 'Create your shop account',
	description: 'We can deliver a comprehensive marketing plan and then execute it down to the smallest details. To start using Kora just sign up and submit your details',
	list:false,
	button:true,
	imgStart:true,
	label:'Sign up now',
    
}














export const cardDetails = [
	{	
		id:1,
		icon:< FaHeadphones />,
		card_heading:'Product Marketing On Social Platforms',
		card_description:'Besides regular product display options Kora has multiple functions for social networks integration.',
	},
	{	
		id:2,
		icon:<FiClipboard />,
		card_heading:'Branding And Strategy Basic Guidelines',
		card_description:'To build a solid foundation for your online shop you need a strong brand and a bulletproof strategy.',
	},
	{	
		id:3,
		icon:<BsChatDots />,
		card_heading:'Design & Development Advanced Services',
		card_description:'Our team of competent designers and developers are able to create great designs and structured code',
	}
]

export const stepInfo = {
	heading:'Start a successful ecommmerce business in no more than 3 easy steps with Kora',
	description:'To build a solid foundation for your online shop you need a strong brand and a bulletproof strategy. You can rely on our experience to create a beautiful and efficient online shop that offers benefits for both the shop brand and loyal customers',
}
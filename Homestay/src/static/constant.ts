import campingImg from '../assets/images/camping.jpeg';
import natureImg from '../assets/images/plantation.jpeg';
import homeImg from '../assets/images/home.jpeg';
import nightImg from '../assets/images/nightView.jpeg';
import riverImg from '../assets/images/river.jpeg';
import trekkingImg from '../assets/images/trekking.jpeg';
import room_1 from '../assets/images/room_1.png';
import room_2 from '../assets/images/room_2.png';
import room_3 from '../assets/images/room_3.png';
import kayakingImg from '../assets/images/kayaking.png';
import forestGreen from '../assets/images/forestGreen.png';
import campfireImg from '../assets/images/campfire.png';
import sunLightCanopyImg from '../assets/images/sunlightCanopy.png';
import morningViewImg from '../assets/images/morningView.png';

export const activities = [
  { label: 'Kayaking', icon: 'wave', img: 'kayaking' },
  { label: 'Pedal Boating', icon: 'boat', img: 'pedalBoating' },
  { label: 'Swimming', icon: 'drop', img: 'swimming' },
  { label: 'Water Games', icon: 'spark', img: 'waterGames' },
  { label: 'Trekking', icon: 'tree', img: 'trekking' },
  { label: 'Camping', icon: 'tent', img: 'camping' },
  { label: 'Campfire', icon: 'fire', img: 'campfire' },
  { label: 'Outdoor Games', icon: 'sun', img: 'outdoorGames' },
]

export const galleryImages = [
  {
    title: 'Kayaking fun',
    image:kayakingImg,
    className: 'col-span-2 row-span-2',
  },
  {
    title: 'Forest greens',
    image:forestGreen,
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Campfire night',
    image:campfireImg,
    className: 'col-span-1 row-span-2',
  },
  {
    title: 'Sunlit canopy',
    image:sunLightCanopyImg,
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Morning view',
    image:morningViewImg,
    className: 'col-span-2 row-span-1',
  },
  {
    title: 'Camping',
    image:campingImg,
    className: 'col-span-1 row-span-1',
  },
    {
    title: 'Home',
    image:homeImg,
    className: 'col-span-1 row-span-1',
  },
  {
    title: 'Nature',
    image:natureImg,
    className: 'col-span-2 row-span-2',
  },
   {
    title: 'Night View',
    image:nightImg,
    className: 'col-span-1 row-span-2',
  },
   {
    title: 'River',
    image:riverImg,
    className: 'col-span-1 row-span-1',
  },
    {
    title: 'Trekking',
    image:trekkingImg,
    className: 'col-span-1 row-span-1',
  }
]

export const testimonials = [
  {
    initials: 'AK',
    name: 'Anish Kumar',
    stayed: 'Stayed: Jan 2024',
    quote:
      'Amazing hospitality. The river kayaking experience was surreal and the food felt like it was made at home.',
  },
  {
    initials: 'SN',
    name: 'Sanjana N.',
    stayed: 'Stayed: Dec 2025',
    quote:
      'The perfect escape from Bangalore. It is so quiet you can hear the forest breathe, and the campfire night was the highlight.',
  },
  {
    initials: 'RP',
    name: 'Rahul Prasad',
    stayed: 'Stayed: Feb 2024',
    quote:
      'Bhatkal has a gem here. Gandalki river activities were safe yet exciting, and the rooms stayed clean and rustic.',
  },
]

export const navLinks = ['About', 'Rooms', 'Activities', 'Gallery', 'Location']

export const heroBadges = [
  { label: '3 rooms available', icon: 'bed', color:'#9FF79F' },
  { label: 'Food included', icon: 'leaf' , color: '#CEE5FF' },
  { label: 'Adventure activities', icon: 'wave', color: '#9FF79F' },
]

export const rooms = [
  {
    name: 'River View Suite',
    image: room_1,
    tag: '1 left',
    features: ['King size bed', 'Modern washroom', 'River and forest view'],
  },
  {
    name: 'Canopy Family Room',
    image: room_2,
    tag: '1 left',
    features: ['Sleeps 4 comfortably', 'Private balcony', 'Deep jungle view'],
  },
  {
    name: 'The Nest (Couple)',
    image: room_3,
    tag: '1 left',
    features: ['Honeymoon decor', 'Absolute privacy', 'Rain shower'],
  },
]

export const meals = [
  {
    number: '01',
    title: 'Traditional Breakfast',
    description: 'Fresh neer dosa, kadubu, and local Bhatkal filter coffee.',
  },
  {
    number: '02',
    title: 'Authentic Veg and Non-Veg Lunch',
    description: 'Traditional Karavali recipes with river fish or organic greens.',
  },
  {
    number: '03',
    title: 'Dinner by the Fire',
    description: 'Warm local curries and rotis served beneath the stars.',
  },
]
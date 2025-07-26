import one from '../assets/svg/projects/one.svg';
import clothique from '../assets/svg/projects/clothique.svg';
import shopping from '../assets/png/shopping.png';
import bloodbank from '../assets/png/blood-bank.png';
import hotel from '../assets/png/hotel.png';
import pizza from '../assets/png/pizza.png';
import notification from '../assets/png/notifications.png';
import weather from '../assets/png/weather-news.png';
import two from '../assets/svg/projects/two.svg';
import three from '../assets/svg/projects/three.svg';
import four from '../assets/svg/projects/four.svg';
import five from '../assets/svg/projects/five.svg';
import six from '../assets/svg/projects/six.svg';
import seven from '../assets/svg/projects/seven.svg';
import eight from '../assets/svg/projects/eight.svg';

export const projectsData = [
  {
    id: 1,
    projectName: 'Clothique',
    projectDesc:
      'A full-stack E-Commerce Web Application for fashion products offering seamless browsing, filtering, cart management, and secure checkout.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    code: 'https://github.com/abhinav-ak04/clothique',
    demo: 'https://clothique-frontend-fapy.vercel.app/',
    image: shopping,
  },
  {
    id: 2,
    projectName: 'Blood Connect',
    projectDesc:
      'A full-stack web application that enables blood donors, recipients, and banks to register, search, and connect seamlessly using real-time, location-based filtering.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    code: 'https://github.com/abhinav-ak04/blood-connect',
    demo: 'https://blood-connect-olive.vercel.app/',
    image: bloodbank,
  },
  {
    id: 3,
    projectName: 'The Frostwood',
    projectDesc:
      'A Hotel booking platform offering users a smooth experience to explore rooms, check availability, and make online reservations.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    code: 'https://github.com/abhinav-ak04/the-frostwood',
    demo: 'https://the-frostwood.vercel.app/',
    image: hotel,
  },
  {
    id: 4,
    projectName: 'The Frostwood Ops',
    projectDesc:
      'An internal hotel management system that allows staff to manage room availability, track bookings, handle guest check-ins, and view reservation details in real time.',
    tags: ['React', 'Tanstack Query', 'Supabase'],
    code: 'https://github.com/abhinav-ak04/the-frostwood-ops',
    demo: 'https://the-frostwood-ops.vercel.app/',
    image: one,
  },
  {
    id: 5,
    projectName: 'Crustify',
    projectDesc:
      'A pizza ordering web app offering users browse pizzas, customize orders, track delivery time, and place orders with real-time location support.',
    tags: ['React ', 'Redux', 'Tailwind CSS'],
    code: 'https://github.com/abhinav-ak04/crustify',
    demo: 'https://crustify-app.vercel.app/',
    image: pizza,
  },
  {
    id: 6,
    projectName: 'Notify',
    projectDesc:
      'A scalable notification service supporting Email, SMS, and in-app delivery with queue processing, retries, and modular channel support.',
    tags: ['Node.js', 'Express.js', 'BullMQ', 'Redis', 'MongoDB'],
    code: 'https://github.com/abhinav-ak04/notification-service',
    demo: '',
    image: notification,
  },
  {
    id: 7,
    projectName: 'ClimaCast',
    projectDesc:
      'A sleek weather web app that provides real-time weather updates, forecasts, and location-based conditions using a clean, user-friendly interface.',
    tags: ['React', 'Tailwind CSS'],
    code: 'https://github.com/abhinav-ak04/weather-app',
    demo: 'https://weather-app-six-swart-74.vercel.app/',
    image: weather,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/

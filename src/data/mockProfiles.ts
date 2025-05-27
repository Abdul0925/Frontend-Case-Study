import { Profile } from '../types';

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Abdul Rahim',
    description: 'Developer with 1+ years of experience creating intuitive digital interfaces for tech companies.',
    photoUrl: 'https://images.pexels.com/photos/7845101/pexels-photo-7845101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    address: {
      street: '181 Civil Colony',
      city: 'Kamptee',
      state: 'Maharashtra',
      zip: '441001',
      country: 'IND',
      coordinates: {
        lat: 21.206779,
        lng: 79.230591
      }
    },
    contactInfo: {
      email: 'abdulrahim74264@gmail.com',
      phone: '8275435110',
      website: 'https://abdulrahim0925.vercel.app/'
    },
    interests: ['Software Developer', 'Full Stack Developer', 'Accessibility', 'Rock Climbing'],
    createdAt: '2023-05-15T08:30:00Z',
    updatedAt: '2023-12-10T14:45:00Z'
  },
  {
    "id": "2",
    "name": "Ritika Sharma",
    "description": "Creative UI/UX designer passionate about user-centered design with 3+ years in mobile apps.",
    "photoUrl": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "address": {
      "street": "92 Sector 4",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "zip": "201301",
      "country": "IND",
      "coordinates": {
        "lat": 28.535517,
        "lng": 77.391029
      }
    },
    "contactInfo": {
      "email": "ritika.sharma92@gmail.com",
      "phone": "9876543210",
      "website": "https://ritikasharma.design"
    },
    "interests": ["UI Design", "Prototyping", "Photography", "Travel"],
    "createdAt": "2022-07-11T09:00:00Z",
    "updatedAt": "2024-01-18T10:15:00Z"
  },
  {
    "id": "3",
    "name": "Karan Mehta",
    "description": "Backend engineer skilled in Node.js and cloud deployment, working in fintech solutions.",
    "photoUrl": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "address": {
      "street": "67 MG Road",
      "city": "Bangalore",
      "state": "Karnataka",
      "zip": "560001",
      "country": "IND",
      "coordinates": {
        "lat": 12.971599,
        "lng": 77.594566
      }
    },
    "contactInfo": {
      "email": "karanmehta.dev@gmail.com",
      "phone": "9012345678",
      "website": "https://karanmehta.dev"
    },
    "interests": ["Node.js", "AWS", "Football", "Gaming"],
    "createdAt": "2021-03-21T12:00:00Z",
    "updatedAt": "2024-09-10T14:45:00Z"
  },
  {
    "id": "4",
    "name": "Priya Desai",
    "description": "Marketing strategist with a knack for digital campaigns and brand storytelling.",
    "photoUrl": "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    "address": {
      "street": "12 Ambedkar Marg",
      "city": "Pune",
      "state": "Maharashtra",
      "zip": "411001",
      "country": "IND",
      "coordinates": {
        "lat": 18.52043,
        "lng": 73.856743
      }
    },
    "contactInfo": {
      "email": "priya.desai@gmail.com",
      "phone": "9823456789",
      "website": "https://priyadesai.marketing"
    },
    "interests": ["Digital Marketing", "Content Creation", "Yoga", "Reading"],
    "createdAt": "2020-10-05T14:00:00Z",
    "updatedAt": "2023-11-28T11:40:00Z"
  },
  {
    "id": "5",
    "name": "Rohit Nair",
    "description": "DevOps engineer automating cloud infrastructure for scalable applications.",
    "photoUrl": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "address": {
      "street": "99 Marine Drive",
      "city": "Mumbai",
      "state": "Maharashtra",
      "zip": "400002",
      "country": "IND",
      "coordinates": {
        "lat": 18.938771,
        "lng": 72.835335
      }
    },
    "contactInfo": {
      "email": "rohitnair.devops@gmail.com",
      "phone": "9765432101",
      "website": "https://rohitnair.dev"
    },
    "interests": ["CI/CD", "Docker", "Kubernetes", "Biking"],
    "createdAt": "2022-01-14T16:30:00Z",
    "updatedAt": "2024-03-25T10:30:00Z"
  },
  {
    "id": "6",
    "name": "Ananya Iyer",
    "description": "Data scientist focused on AI in healthcare and predictive modeling.",
    "photoUrl": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "address": {
      "street": "45 Residency Road",
      "city": "Chennai",
      "state": "Tamil Nadu",
      "zip": "600002",
      "country": "IND",
      "coordinates": {
        "lat": 13.08268,
        "lng": 80.270718
      }
    },
    "contactInfo": {
      "email": "ananya.iyer.ds@gmail.com",
      "phone": "9845612378",
      "website": "https://ananyaiyer.ai"
    },
    "interests": ["AI", "Python", "HealthTech", "Classical Music"],
    "createdAt": "2021-06-20T10:00:00Z",
    "updatedAt": "2024-07-12T17:00:00Z"
  },
  {
    "id": "7",
    "name": "Siddharth Verma",
    "description": "Frontend developer skilled in React and modern JavaScript frameworks.",
    "photoUrl": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "address": {
      "street": "73 Ring Road",
      "city": "Delhi",
      "state": "Delhi",
      "zip": "110001",
      "country": "IND",
      "coordinates": {
        "lat": 28.613939,
        "lng": 77.209021
      }
    },
    "contactInfo": {
      "email": "siddharth.verma.react@gmail.com",
      "phone": "9911223344",
      "website": "https://siddharthverma.dev"
    },
    "interests": ["React", "Web Performance", "Cricket", "Music"],
    "createdAt": "2023-02-11T09:45:00Z",
    "updatedAt": "2024-08-14T15:00:00Z"
  },
  {
    "id": "8",
    "name": "Neha Agarwal",
    "description": "HR professional focused on tech hiring and employee engagement strategies.",
    "photoUrl": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "address": {
      "street": "15 IT Park",
      "city": "Hyderabad",
      "state": "Telangana",
      "zip": "500081",
      "country": "IND",
      "coordinates": {
        "lat": 17.385044,
        "lng": 78.486671
      }
    },
    "contactInfo": {
      "email": "neha.hrtech@gmail.com",
      "phone": "9845011122",
      "website": "https://nehaagarwal.work"
    },
    "interests": ["Recruitment", "HR Tech", "Public Speaking", "Fitness"],
    "createdAt": "2020-09-10T08:15:00Z",
    "updatedAt": "2024-06-22T11:25:00Z"
  },
  {
    "id": "9",
    "name": "Rajesh Kumar",
    "description": "Android app developer building fast and responsive mobile applications.",
    "photoUrl": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "address": {
      "street": "88 North Avenue",
      "city": "Patna",
      "state": "Bihar",
      "zip": "800001",
      "country": "IND",
      "coordinates": {
        "lat": 25.594095,
        "lng": 85.137566
      }
    },
    "contactInfo": {
      "email": "rajesh.androiddev@gmail.com",
      "phone": "9798123456",
      "website": "https://rajeshkumar.tech"
    },
    "interests": ["Android", "Java", "App Design", "Cycling"],
    "createdAt": "2021-12-01T07:00:00Z",
    "updatedAt": "2024-10-01T13:00:00Z"
  },
  {
    "id": "10",
    "name": "Meera Joshi",
    "description": "Content writer crafting compelling copy for tech and lifestyle brands.",
    "photoUrl": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "address": {
      "street": "28 Rose Lane",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "zip": "380015",
      "country": "IND",
      "coordinates": {
        "lat": 23.022505,
        "lng": 72.571362
      }
    },
    "contactInfo": {
      "email": "meeraj.writer@gmail.com",
      "phone": "8980123456",
      "website": "https://meerajoshi.content"
    },
    "interests": ["Copywriting", "Blogging", "Food", "Travel"],
    "createdAt": "2022-04-05T10:10:00Z",
    "updatedAt": "2024-05-10T14:55:00Z"
  }
];
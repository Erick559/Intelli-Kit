export const MAX_FREE_COUNTS = 10;


export const navigation = [
    {
        id:0,
        title:'Features',
        href:'#features',
    },
    {
        id:1,
        title:'Pricing',
        href:'#pricing',
    },
    {
      id: 2,
      title: "try for free",
      href: "/dashboard",
      onlyMobile: true,
    },
    {
      id: 3,
      title: "Sign in",
      href:'/dashboard',
      onlyMobile: true,
    },
]

export const heroIcons = ['/chat.svg', '/code.svg', '/camera.svg', '/video.svg','/speaker.svg'];

export const notificationImages = ['/user-1.png', '/user-2.png', '/user-3.png', '/user-4.png',]

export const pricing = [
  {
    id: "0",
    title: "Free",
    description: "Try Mimir's core features. 10 free generations total.",
    price: "0",
    features: [
      "Explore Creative Possibilities: Generate text formats, visuals, and code snippets.",
      "Unlock Basic Functionality: Get a taste of Mimir's core capabilities.",
      "Limited Generations: Try out features with 10 free uses.",
    ],
    textColor: 'text-teal-400',
  },
  {
    id: "1",
    title: "Premium",
    description: "Unlock unlimited creativity. Generate anything you imagine.",
    price: "9.99",
    features: [
      "Unlimited Creative Power: Generate text, code, visuals, and more - all unlimited.",
      "Advanced Features & Customization: Fine-tune your creations and unlock deeper control.",
      "Priority Support: Get expert assistance to maximize your creative potential.",
    ],
    textColor: 'animate-gradient-x bg-gradient-to-r from-violet-400 via-red-400 to-red-500 text-transparent bg-clip-text',
  },

  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI solutions tailored to your needs.",
    features: [
      "Custom AI Development: Build AI solutions specifically for your business needs.",
      "Seamless Integration: Integrate Mimir seamlessly into your existing workflows.",
      "Dedicated Account Management: Get personalized support and guidance from a dedicated team.",
    ],
    textColor: 'text-pink-500',
  },
];

  export const benefits = [
    {
      id: "0",
      title: "Effortless Conversation",
      text: "Mimir's AI Chatbot lets you ask anything and get instant, informative answers. Skip the endless searches and get right to the point.",
      backgroundUrl: "/card-1.svg",
      iconUrl: '/chat.svg', 
      imageUrl: '/tablet.png',
    },
    {
      id: "1",
      title: "Streamline Coding",
      text: "Mimir's code generation tool understands natural language. Describe your functionality and watch Mimir write clean, efficient code for you. Save time and avoid coding roadblocks.",
      backgroundUrl: "/card-2.svg",
      iconUrl: '/code.svg', 
      imageUrl: '/developer.png',
      light: true,
    },
    {
      id: "2",
      title: "Compose Inspiring Music",
      text: "Spark your creativity with Mimir's music generation. Describe the mood or genre you envision, and let Mimir generate unique instrumentals to fuel your musical projects.",
      backgroundUrl: "/card-3.svg",
      iconUrl: '/speaker.svg', 
      imageUrl: '/music.png',
    },
    {
      id: "3",
      title: "Bring Ideas to Life with Video",
      text: "Mimir's video generation tool transforms your vision into reality. Describe your concept, and Mimir will create a captivating video without the need for expensive equipment or editing software.",
      backgroundUrl: "/card-4.svg",
      iconUrl: '/video.svg', 
      imageUrl: '/video.png',
      light: true,
    },
    {
      id: "4",
      title: "Craft Stunning Photos",
      text: "Go beyond imagination with Mimir's photo generation. Describe the scene you have in mind, and Mimir will generate high-quality, realistic photos to perfectly capture your vision.",
      backgroundUrl: "/card-5.svg",
      iconUrl: '/camera.svg', 
      imageUrl: '/image.png',
    },
    {
      id: "5",
      title: "Continuously Evolving",
      text: "Mimir's AI is constantly learning and improving. With every interaction, Mimir gets better at understanding your needs and generating exceptional results.",
      backgroundUrl: "/card-6.svg",
      iconUrl: '/ai.svg', 
      imageUrl: '/neural.png',
    },
  ];
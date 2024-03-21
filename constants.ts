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
      id: "4",
      title: "New account",
      href: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      href: "#login",
      onlyMobile: true,
    },
]

export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ]
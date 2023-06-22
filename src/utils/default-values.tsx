import { BrandInterface, QuestionInterface, ReviewInterface } from "./types";
const brands: BrandInterface[] = [
  {
    id: 1,
    imgSrc: "asap.jpeg",
    price: 1.99,
    name: "ASAP",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 2,
    imgSrc: "bite-squad.jpeg",
    price: 1.5,
    name: "Bite Squad",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 3,
    imgSrc: "cafe-rio.jpeg",
    price: 1.5,
    name: "Cafe Rio",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 4,
    imgSrc: "carter's.jpeg",
    price: 1.99,
    name: "Carters's",
    categoryId: [2],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 5,
    imgSrc: "casey's.jpeg",
    price: 2.99,
    name: "Casey's",
    categoryId: [3],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 6,
    imgSrc: "chicken-salad-chick.jpeg",
    price: 0.99,
    name: "Chicken Salad Chick",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 7,
    imgSrc: "city-brew-coffee.png",
    price: 0.49,
    name: "City Brew Coffee",
    categoryId: [4, 1],
    inStock: true,
    productType: "gift cards",
    description: [],
  },
  {
    id: 8,
    imgSrc: "del-taco.jpeg",
    price: 0.99,
    name: "Del Taco",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 9,
    imgSrc: "dickey's-barbeque-pit.jpeg",
    price: 0.5,
    name: "Dickey's Barbeque Pit",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 10,
    imgSrc: "einstein-bros.jpeg",
    price: 0.75,
    name: "Einstein Bros. Bagels",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 11,
    imgSrc: "erbert-n-gerbert's.jpeg",
    price: 1.5,
    name: "Erbert & Herbert's",
    categoryId: [1, 4],
    inStock: true,
    productType: "gift cards",
    description: [],
  },
  {
    id: 12,
    imgSrc: "firehouse-subs.jpeg",
    price: 1.5,
    name: "Firehouse Subs",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 13,
    imgSrc: "freddy's.jpeg",
    price: 0.99,
    name: "Freddy's",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 14,
    imgSrc: "gtc.jpeg",
    price: 1.99,
    name: "GTC Movies",
    categoryId: [5],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 15,
    imgSrc: "hot-topic.jpeg",
    price: 0.75,
    name: "Hot Topic",
    categoryId: [2],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 16,
    imgSrc: "ihop.jpeg",
    price: 0.99,
    name: "IHOP",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 17,
    imgSrc: "instacart.jpeg",
    price: 1.5,
    name: "Instacart",
    categoryId: [2],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 18,
    imgSrc: "jane.jpeg",
    price: 1.5,
    name: "Jane",
    categoryId: [2],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 19,
    imgSrc: "krispy-kreme.jpeg",
    price: 1.5,
    name: "Krispy Kreme",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [
      "There is a 24-hour warranty for this product. You will not be entitled to a replacement outside the warranty.",
      "Warranty covers wrong reward balances and invalid accounts.",
      "Instructions on how to use the product will be sent to you after the purchase.",
    ],
  },
  {
    id: 20,
    imgSrc: "kum-n-go.jpeg",
    price: 2.99,
    name: "Kum & Go",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 21,
    imgSrc: "loves.jpeg",
    price: 1.99,
    name: "Love's",
    categoryId: [3],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 22,
    imgSrc: "marcus-theatres.jpeg",
    price: 1.99,
    name: "Marcus Theatres",
    categoryId: [4, 5],
    inStock: true,
    productType: "gift cards",
    description: [],
  },
  {
    id: 23,
    imgSrc: "meijer.jpeg",
    price: 2.99,
    name: "Meijer",
    categoryId: [1],
    inStock: true,
    productType: "points",
    description: [
      "There is a 24-hour warranty for this product. You will not be entitled to a replacement outside the warranty.",
      "1000 Points = $1.00",
      "Warranty covers wrong reward balances and invalid accounts.",
      "Instructions on how to use the product will be sent to you after the purchase.",
    ],
  },
  {
    id: 24,
    imgSrc: "mountain-hike's-pizza.jpeg",
    price: 1.99,
    name: "Mountain Mike's Pizza",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 25,
    imgSrc: "nando's.jpeg",
    price: 0.99,
    name: "Nando's PERi-PERi",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 26,
    imgSrc: "noodles-n-company.jpeg",
    price: 0.99,
    name: "Noodles & Company",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 27,
    imgSrc: "n-pizza.jpeg",
    price: 0.99,
    name: "&pizza",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 28,
    imgSrc: "o'reilly-auto-parts.jpeg",
    price: 0.5,
    name: "O'Reilly Auto Parts",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 29,
    imgSrc: "pilot-flying.jpeg",
    price: 1.5,
    name: "Pilot Flying J",
    categoryId: [3],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 30,
    imgSrc: "potbelly-sandwich-shop.jpeg",
    price: 1.99,
    name: "Potbelly Sandwich Shop",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 31,
    imgSrc: "pressed-juicery.jpeg",
    price: 2.5,
    name: "Pressed Juicery",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 32,
    imgSrc: "restaurant.jpeg",
    price: 1.5,
    name: "Restaurant.com",
    categoryId: [1, 4],
    inStock: true,
    productType: "gift cards",
    description: [],
  },
  {
    id: 33,
    imgSrc: "round-table.jpeg",
    price: 0.99,
    name: "Round Table Pizza",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 34,
    imgSrc: "rubio's.jpeg",
    price: 0.99,
    name: "Rubio's Coastal Grill",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 35,
    imgSrc: "safeway.jpeg",
    price: 0.5,
    name: "Safeway",
    categoryId: [3],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 36,
    imgSrc: "salad-n-go.jpeg",
    price: 2.99,
    name: "Salad and Go",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 37,
    imgSrc: "smoothie-king.jpeg",
    price: 1.99,
    name: "Smoothie King",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 0,
    imgSrc: "sonic.jpeg",
    price: 1.5,
    name: "Sonic Drive-In",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: ["ONE REPLACEMENT IN CASE CANCELLED / DECLINED"],
  },
  {
    id: 38,
    imgSrc: "the-human-bean.jpeg",
    price: 1.99,
    name: "The Human Bean",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 39,
    imgSrc: "under-armour.jpeg",
    price: 0.99,
    name: "Under Armour",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
  {
    id: 40,
    imgSrc: "wendy's.jpeg",
    price: 0.25,
    name: "Wendy's",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [
      "There is a 24-hour warranty for this product. You will not be entitled to a replacement outside the warranty.",
      "Warranty covers wrong reward balances and invalid accounts.",
      "Instructions on how to use the product will be sent to you after the purchase.",
    ],
  },
  {
    id: 41,
    imgSrc: "zaxby's.jpeg",
    price: 0.45,
    name: "Zaxby's",
    categoryId: [1],
    inStock: true,
    productType: "",
    description: [],
  },
];

const products = [
  {
    brandId: "",
    name: "",
    price: "",
  },
];

const reviews: ReviewInterface[] = [
  {
    date: "2 days ago",
    text: "Worked perfect as usual Thanks for shopping with us",
    isVerified: true,
    stars: 5,
  },
  { date: "7 days ago", isVerified: true, stars: 5 },
  { date: "7 days ago", isVerified: true, stars: 5 },
  { date: "7 days ago", isVerified: true, stars: 5 },
  {
    date: "9 days ago",
    text: "Thank you",
    reply: "Thank you for shopping with us :)",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Thank you great service",
    reply: "Thanks!",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Works well great support",
    reply: "Appreciate it! ",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Works well great support",
    reply: "Thanks for shopping with us &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Has a good and easy time with the account",
    reply: "Glad to hear that, thank you! ",
    isVerified: true,
    stars: 5,
  },
  { date: "23 days ago", isVerified: true, stars: 5 },
  { date: "23 days ago", isVerified: true, stars: 5 },
  {
    date: "23 days ago",
    text: "I am so grateful for the incredible service provided by this company! They went above and beyond to deliver the accounts I needed, and I couldn't be happier with the results. Thank you for your hard work and dedication!",
    reply:
      "Thank you for shopping with us! Make sure to bring your friends and family aboard so we can all start saving money in these difficult times &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "25 days ago",
    text: "Just wanted to take a moment to say thanks for a great service once again! Your dedication to providing high-quality service is truly appreciated. Keep up the great work!",
    reply:
      "We appreciate your kind words. It motivates us to try even harder! &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "25 days ago",
    text: "I just had to share how impressed I am with the service I received! From start to finish, everything was handled with professionalism and care. It's so refreshing to see a company that truly values their customers. Keep up the great work!",
    reply: "Thank you for your kind words it means a lot to us &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "I was a bit skeptical, but you've removed my doubts.",
    reply: "Thank you for your trust! &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "Fast and recommendable, good service! Thank you! ",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "The billing address for this card could not be verified. There was a problem processing your credit card. Please review and verify that the credit card information was entered correctly and that your billing address matches the address where you receive your credit card statements. Then try to place your order.” error :/ rip Hey!",
    reply:
      "Please open a ticket or reach out to us via Telegram for a faster response rate. We will issue you a replacement or offer alternative solutions that will satisfy you! &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "No points on acct.",
    reply:
      "Hey, please open a ticket or contact us on Telegram at  T.ME/FOODNIRVANA so we can issue you a valid replacement &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "Incorrect password to account",
    reply: "Sorry. Replacement issued &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "Nice!! would refer my friends.",
    reply: "Thank you!— reply from Food Nirvana",
    isVerified: true,
    stars: 5,
  },
  {
    date: "a month ago",
    text: "Great experience, got what I ordered swiftly.",
    reply: "Thanks for shopping with Food Nirvana &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "2 months ago",
    text: "Worked like a charm; looking forward to doing business again soon. ",
    isVerified: true,
    stars: 5,
  },
  {
    date: "2 months agoPassword incorrect. Have proof and pictures",
    isVerified: true,
    stars: 5,
  },
  { date: "2 months ago", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "I love the support team I'll keep purchasing &lt;3",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "Accounts working and has balance",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago", isVerified: true, stars: 5 },
  { date: "3 months ago", isVerified: true, stars: 5 },
  { date: "3 months agoEASY HIT ", isVerified: true, stars: 5 },
  { date: "3 months ago", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "Accounts works and has balance",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "10/10 Got some pizza",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "but support was great and solved the problem quickly!",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "perfect human bean",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "Great! Support is so very helpful!!",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago", text: "Account works", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "GREAT SUPPORT FOR THE ISSUE",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "one of the first legit orders in a while, no problems account worked replaced when needed and support is nice and fast",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months agovery easy", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "I WILL NEVER STARVE WITH FOOD NIRVANA",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago", text: "FIRE LOGSSSS", isVerified: true, stars: 5 },
  { date: "3 months ago", text: "EASY SHIT", isVerified: true, stars: 5 },
  { date: "3 months ago", text: "ALWAYS A HIT!", isVerified: true, stars: 5 },
  { date: "3 months ago", text: "GREAT SUPPORT!", isVerified: true, stars: 5 },
  { date: "3 months ago", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "Worked perfectly. I will purchase another most definitely!",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "Works as intended",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months agoNo issues!", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "First account had a low amount but support got it handled supper quick and got me a replacement!",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago", text: "good", isVerified: true, stars: 5 },
  { date: "3 months ago", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "Everything went smoothly. Perfect hit!",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "ASKS FOR CVV AT CHECKOUT. WAS GIVEN 3 REPLACEMENTS, STILL DIDNT WORK. GOT FULL REFUND STORE CREDIT 💪",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago EASY HIT, GOT HELL FOOD", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "Perfect. Support helped solve the issue very promptly! They have a lifetime customer here!!",
    isVerified: true,
    stars: 5,
  },
  { date: "3 months ago", isVerified: true, stars: 5 },
  {
    date: "3 months ago",
    text: "EASY SMACK, GOT $40 WORTH OF SHIT FOR $1.99. CMON NOW 🔥",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "ANOTHER EASY HIT. I FOLLOWED THE METHOD PROVIDED. USE CODE LENT FOR $3 OFF EACH LARGE CHEESE PIZZA.",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "WENDYS IS THE EASIEST SHIT EVER",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "HAD AN ISSUE, GAVE ME STORE CREDIT!!",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "EASY SMACK. USED GOOGLE CHROME, BRAVE HAD ME AT A LOADING SCREEN WHEN I PLACED THE ORDER. DON'T BE A DUMBASS LIKE ME, MAKE SURE TO CHANGE THE NUMBER IF YOU'RE DOING DELIVERY. I STILL GOT THE SANDWICH LOLS",
    isVerified: true,
    stars: 5,
  },
  {
    date: "3 months ago",
    text: "GREAT CUSTOMER SUPPORT!! HAD AN ISSUE AND WAS GIVEN A REPLACEMENT ASAP NO ROCKY &lt;3",
    isVerified: true,
    stars: 5,
  },

  {
    date: "7 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "7 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "7 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "7 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "7 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "8 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "9 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },

  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "10 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "11 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "12 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "13 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "14 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "15 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "16 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "16 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "16 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "16 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "16 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "17 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "18 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "19 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "19 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "19 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "19 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "20 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "21 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "22 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "22 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "22 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "22 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "23 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
  {
    date: "24 days ago",
    text: "Automatic feedback after 7 days",
    isVerified: true,
    stars: 5,
  },
];

const brandCategories = [
  {
    name: "All",
    id: 0,
  },
  {
    name: "Food",
    id: 1,
  },
  {
    name: "Shopping",
    id: 2,
  },
  {
    name: "Fuel",
    id: 3,
  },
  {
    name: "Gift Cards",
    id: 4,
  },
  {
    name: "Cinema",
    id: 5,
  },
];

const faqs: QuestionInterface[] = [
  {
    question: "Will I get product instantly?",
    answer:
      "Yet, it will be instant. Cryptocurrency purchases can take a little longer, you will receive your product(-s) as soon as there are confirmations in the transaction.",
  },
  {
    question: 'How do I use "X" products?',
    answer:
      "You will receive the latest methods and instructions on how to use a product if it's said so in the description.",
  },
  { question: "Is this USA only?", answer: "Yes." },
];

export { brands, reviews, brandCategories, faqs };

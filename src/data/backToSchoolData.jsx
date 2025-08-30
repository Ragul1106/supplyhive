import pencilImg from "../assets/images/color_pencil.jpg";
import calcImg from "../assets/images/dairy_pen.jpg";
import notebookImg from "../assets/images/notepad.jpg";


export const backToSchoolProducts = [
  {
    id: 601,
    name: "Color Pencils",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: pencilImg,
    rating: 5,
    title: "Advanced Functionality for Students and Professionals",
    description: `This scientific calculator is designed to meet the needs of students, engineers,
      and professionals. Equipped with a high-contrast display, it supports over 200 functions 
      including algebraic, trigonometric, statistical, and complex number calculations. 
      The ergonomic keyboard layout ensures ease of use during exams or fieldwork, and durable construction makes it ideal for daily use. 
      Whether you're solving equations, analyzing data, or exploring functions, this calculator delivers reliable and accurate performance every time`,
    features: [
      "Supports fractions, exponents, logarithms, and trigonometric functions",
      "Multi-line display for reviewing inputs and results",
      "Ideal for high school, college, and professional use",
      "Battery-powered with auto power-off for extended life",
      "Lightweight and compact design for portability",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This calculator has been a lifesaver for my high school math and physics classes. It's easy to use, has all the necessary functions, and the multi-line display makes checking work super simple. Definitely worth it for students!",
      },
      {
        id: 2,
        title: "Positive Review – Professional/Engineer",
        rating: 5,
        comment:
          "Excellent build quality and functionality. I use this for quick field calculations, and it's accurate and responsive. The layout is intuitive, and it handles complex equations with no trouble. Great value for engineers or technicians.",
      },
      {
        id: 3,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "Good calculator overall. It covers all the basic and advanced functions I need, though the user manual could be clearer for beginners. Once you get used to the button layout, it's a solid tool.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found the calculator a bit overwhelming at first. It has a lot of functions, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
  {
    id: 602,
    name: "Notebook",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: calcImg,
    rating: 4,
    title: "Vibrant Sketch Pens for Notes and Art",
    description:
      "A versatile set of sketch pens that deliver bold, saturated colors with low smudge on standard papers. Ideal for color-coding notes, mind maps, and creative sketches without feathering or heavy bleed-through.",
    features: [
      "Rich pigment for high-contrast marks",
      "Fine bullet tip for writing and outlining",
      "Low-smudge ink on most notebook paper",
      "Ventilated caps and secure snap-on fit",
      "Lightweight barrels for extended sessions",
    ],
    reviews: [
      { id: 1, title: "Great for Note-Taking", rating: 5, comment: "Colors pop and help organize topics. Minimal smearing and the tips feel precise for small handwriting." },
      { id: 2, title: "Good Everyday Set", rating: 4, comment: "Nice variety of colors. One pen dried faster than others, but overall smooth and reliable." },
      { id: 3, title: "Nice for Sketches", rating: 4, comment: "Lines are clean for quick diagrams. Works best on regular copy paper or mid-weight notebooks." },
      { id: 4, title: "Okay on Thin Paper", rating: 3, comment: "On very thin pages there’s some shadowing. Still great for most notebooks." },
    ],
  },
  {
    id: 603,
    name: "Essential Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: notebookImg,
    rating: 4,
    title: "Notebook-Ready Stationery for Daily Tasks",
    description:
      "A compact kit curated for pen-and-notebook workflows. Keep writing tools and measuring essentials together in a durable pouch that slips neatly into backpacks or tote pockets.",
    features: [
      "Includes pens, pencils, 15 cm ruler, sharpener, eraser",
      "Durable zip pouch with elastic loops",
      "Refill-friendly items to reduce waste",
      "Lay-flat access for quick retrieval",
      "Lightweight and travel-ready design",
    ],
    reviews: [
      { id: 1, title: "Keeps Things Tidy", rating: 5, comment: "No more digging for pens. The pouch stays organized and the ruler is solid." },
      { id: 2, title: "Good Value", rating: 4, comment: "Everything needed to pair with notebooks. Pens write smoothly for class notes." },
      { id: 3, title: "Practical Kit", rating: 4, comment: "Great starter set. Swapped in my favorite pen brand and it’s perfect." },
      { id: 4, title: "Decent Basics", rating: 3, comment: "All items work fine, but the eraser leaves slight residue on some papers." },
    ],
  },
];

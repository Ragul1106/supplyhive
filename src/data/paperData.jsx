import penImg from "../assets/images/p1.jpg";
import colorsketchImg from "../assets/images/p2.jpg";
import notepensImg from "../assets/images/p3.jpg";
import spiralnoteImg from "../assets/images/p4.jpg";


export const paperProducts = [
  {
    id: 401,
    name: "Files Group",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: penImg, 
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
    id: 402,
    name: "Color Sketch Pens",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: colorsketchImg,
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
    id: 403,
    name: "Essential Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: penImg,
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
  {
    id: 404,
    name: "Pens Pack",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: notepensImg,
    rating: 5,
    title: "Smooth Ink Pens for Fast Notes",
    description:
      "Medium-tip pens tuned for consistent flow and quick-drying performance on common notebook stocks. Ideal for lectures, journaling, and margin annotations with crisp, skip-free lines.",
    features: [
      "Set of 10 pens with 0.7 mm tip",
      "Quick-dry, low-smear ink",
      "Steady flow for fast writing",
      "Comfort grip reduces fatigue",
      "Tight-fitting caps to prevent drying",
    ],
    reviews: [
      { id: 1, title: "Glides on Paper", rating: 5, comment: "Great control and no skipping. Dry time is fast even on smooth notebooks." },
      { id: 2, title: "Reliable Everyday Pens", rating: 5, comment: "Perfect for study notes. Lines look clean and consistent." },
      { id: 3, title: "One Pen Was Dry", rating: 4, comment: "One out of ten had a dry tip, but the rest worked great. Will repurchase." },
      { id: 4, title: "Good for Journals", rating: 4, comment: "Minimal ghosting on standard paper. Comfortable for long writing sessions." },
    ],
  },
  {
    id: 405,
    name: "Spiral Notebook Set",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: spiralnoteImg,
    rating: 4,
    title: "Durable Spiral Notebooks with Clean Tear-Out",
    description:
      "Rugged spiral notebooks crafted for everyday notes and project planning. Mid-weight paper balances smoothness and resistance to ghosting, while micro-perforation allows tidy page removal for sharing or filing.",
    features: [
      "80–100 gsm paper reduces bleed-through",
      "Micro-perforated pages for clean tear-out",
      "Sturdy metal spiral for durability",
      "Pocket folder for loose sheets",
      "Available in ruled pages for neat notes",
    ],
    reviews: [
      { id: 1, title: "Great Paper Quality", rating: 5, comment: "Hardly any ghosting with gel pens. Pages tear out clean and the pocket is handy." },
      { id: 2, title: "Tough Binding", rating: 4, comment: "Spiral holds shape in my backpack. Cover resists bending." },
      { id: 3, title: "Good for Lectures", rating: 4, comment: "Lines are easy to follow and pages lie flat. Perfect for fast note-taking." },
      { id: 4, title: "Some Shadowing on Heavy Ink", rating: 3, comment: "With wet highlighters there’s mild shadowing, but it’s fine with normal pens." },
    ],
  },
  {
    id: 406,
    name: "Desk Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: colorsketchImg,
    rating: 4,
    title: "Compact Stapler for Notebooks and Handouts",
    description:
      "A compact, jam-resistant stapler designed for notebook handouts and class packets. The non-slip base and smooth lever action make quick work of daily paperwork.",
    features: [
      "Anti-jam guide for consistent stapling",
      "Non-slip base for stability",
      "Rear-loading for standard 24/6, 26/6 staples",
      "20–25 sheet capacity",
      "Durable internal metal frame",
    ],
    reviews: [
      { id: 1, title: "Clean Clinches", rating: 5, comment: "Staples align well and don’t crush pages. Perfect for assembling notes." },
      { id: 2, title: "Solid Everyday Tool", rating: 4, comment: "Smooth action; a bit stiff at first but fine after a day." },
      { id: 3, title: "No-Jam Experience", rating: 4, comment: "Haven’t had a jam yet. Easy to reload." },
      { id: 4, title: "Best for ≤25 Pages", rating: 3, comment: "Struggles beyond thick stacks. Great for standard handouts." },
    ],
  },
  {
    id: 407,
    name: "Study Highlighter Set",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: spiralnoteImg,
    rating: 4,
    title: "Low-Smear Highlighters for Notebooks",
    description:
      "Bright, fade-resistant highlighters optimized for notebook paper. The chisel tip switches from broad sweeps to precise underlines, with quick-dry ink to help reduce smearing over pen notes.",
    features: [
      "Set of 5 vibrant colors",
      "Quick-dry, low-smear formulation",
      "Chisel tip for broad and fine lines",
      "Even ink laydown across pages",
      "Snap-fit caps to prevent drying",
    ],
    reviews: [
      { id: 1, title: "Perfect for Annotations", rating: 5, comment: "Barely smears over my pens. Colors are vivid and readable." },
      { id: 2, title: "Good for Textbooks", rating: 4, comment: "Chisel tip is precise. Yellow and green are standouts." },
      { id: 3, title: "One Color Lighter", rating: 4, comment: "Blue is a bit lighter than others, but still usable." },
      { id: 4, title: "Mild Shadowing on Thin Paper", rating: 3, comment: "On very thin pages there’s some shadowing, fine on regular notebooks." },
    ],
  },
  {
    id: 408,
    name: "Heavy-Duty Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: colorsketchImg,
    rating: 4,
    title: "Heavy-Duty Stapler for Reports",
    description:
      "Built for frequent use, this stapler offers smooth action and reliable clinches for larger handouts and project reports. The reinforced hinge and anti-slip base keep it steady under pressure.",
    features: [
      "Reinforced hinge for durability",
      "Anti-slip base for stability",
      "Handles up to ~30 sheets with compatible staples",
      "Smooth lever reduces effort",
      "Window to monitor staple levels",
    ],
    reviews: [
      { id: 1, title: "Workhorse Stapler", rating: 5, comment: "Handles thick report bundles well. Reloading is quick and intuitive." },
      { id: 2, title: "Solid Build", rating: 4, comment: "A bit bulkier, but very reliable for frequent use." },
      { id: 3, title: "Does Its Job", rating: 4, comment: "No frills—just consistent stapling. Good for office workflows." },
      { id: 4, title: "Force Needed on Thick Stacks", rating: 3, comment: "Beyond 25–30 pages you need extra force. Fine for everyday tasks." },
    ],
  },
  {
    id: 409,
    name: "Organizer Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: penImg,
    rating: 4,
    title: "Pen-and-Note Kit with Organizer",
    description:
      "A tidy kit for pen lovers and notebook users who want everything in one place. Elastic loops secure tools, while the zip case fits easily alongside spiral notebooks.",
    features: [
      "Essentials with organizer case",
      "Elastic loops keep tools in place",
      "Refill-friendly components",
      "Lightweight and bag-friendly",
      "Durable zipper and pull tab",
    ],
    reviews: [
      { id: 1, title: "Decluttered My Bag", rating: 5, comment: "Pens, ruler, and eraser all stay put. Great companion for spiral notebooks." },
      { id: 2, title: "Neat and Practical", rating: 4, comment: "Case quality is good. Would love a mini sticky note pad included." },
      { id: 3, title: "Daily Carry Win", rating: 4, comment: "Compact, organized, and easy to access during class." },
      { id: 4, title: "Pens Are Okay", rating: 3, comment: "I swapped pens for my favorites, but the organizer itself is excellent." },
    ],
  },
  {
    id: 410,
    name: "Note & Pen Set",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: notepensImg,
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
    id: 411,
    name: "Desk Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: colorsketchImg,
    rating: 4,
    title: "Ergonomic Stapler for Class Packs",
    description:
      "Designed for classroom and office packets, this stapler reduces hand strain and delivers aligned, flat clinches. The side window helps track staple levels at a glance.",
    features: [
      "Cushioned press for comfort",
      "Precision anvil for tidy clinches",
      "Standard staples compatible",
      "Side window to check staple count",
      "Non-slip base for stability",
    ],
    reviews: [
      { id: 1, title: "Comfortable to Use", rating: 5, comment: "Feels stable and accurate. Makes neat booklets with notebooks." },
      { id: 2, title: "Great for Desks", rating: 4, comment: "No jams so far and loading is simple. Good day-to-day tool." },
      { id: 3, title: "Consistent Results", rating: 4, comment: "Reliable alignment on pages. Slightly loud click, nothing major." },
      { id: 4, title: "Best for Light Bundles", rating: 3, comment: "Works best under ~20 pages. Still great for handouts." },
    ],
  },
  {
    id: 412,
    name: "All-Purpose Notebook Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: penImg,
    rating: 4,
    title: "Notebook Starter Kit with Writing Tools",
    description:
      "A practical set pairing notebook-friendly pens with core accessories for lessons, meetings, and journaling. Built to travel and keep essentials together with minimal bulk.",
    features: [
      "Balanced assortment for daily notes",
      "Rugged zip case protects contents",
      "Elastic loops for quick access",
      "Backpack-friendly and lightweight",
      "Refillable items for long-term use",
    ],
    reviews: [
      { id: 1, title: "Great Starter Bundle", rating: 5, comment: "Perfect mix for new classes. Case fits next to my spiral notebook." },
      { id: 2, title: "Good Everyday Choice", rating: 4, comment: "Everything needed to get started. Pens don’t smear much." },
      { id: 3, title: "Organized and Simple", rating: 4, comment: "Case is sturdy and easy to open flat on a desk." },
      { id: 4, title: "Pens Okay, Case Excellent", rating: 3, comment: "I upgraded the pens, but the organizer itself is worth it." },
    ],
  },
];

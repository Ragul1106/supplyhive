import calcImg from "../assets/images/scientific_calculator.jpg";
import staplerImg from "../assets/images/stapler.jpg";
import kitImg from "../assets/images/notebookset.jpg";
import pensImg from "../assets/images/pen_kit.jpg";
import scissorsImg from "../assets/images/scissors.jpg";
import highlighterImg from "../assets/images/banner_img2.jpg";

export const officeProducts = [
  {
    id: 1,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: calcImg,
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
    id: 2,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Durable and Ergonomic Stapler",
    description:
      "A heavy-duty yet compact stapler built for daily office, school, and home use. The ergonomic top lever reduces strain during frequent stapling, while the reinforced metal anvil ensures consistent clinches. Designed to resist jamming with smooth loading and a secure base for stable, one-handed operation.",
    features: [
      "Jam-resistant mechanism for smooth stapling",
      "Ergonomic lever for reduced hand fatigue",
      "Reinforced metal anvil for consistent clinches",
      "Rear-loading tray compatible with standard staples",
      "Non-slip base for stable, one-handed use",
    ],
    reviews: [
      {
        id: 1,
        title: "Reliable Daily Performer",
        rating: 5,
        comment:
          "Staples cleanly every time and hasn’t jammed once in two months. The grip is comfortable, and it feels sturdy on the desk. Great buy for the price.",
      },
      {
        id: 2,
        title: "Good but Slightly Stiff",
        rating: 4,
        comment:
          "Works well overall, but the lever was a bit stiff for the first week. It loosened up with use. Solid construction and easy reload.",
      },
      {
        id: 3,
        title: "Does the Job",
        rating: 4,
        comment:
          "Nothing fancy, just a dependable stapler. I staple 20–30 pages frequently and it holds up well. Minimal jams so far.",
      },
      {
        id: 4,
        title: "Average Experience",
        rating: 3,
        comment:
          "It’s okay for light use, but it struggled on thicker stacks beyond 25 pages. For regular paperwork, it works fine.",
      },
    ],
  },
  {
    id: 3,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
    title: "Complete Stationery Kit for Students and Professionals",
    description:
      "An all-in-one stationery kit designed to cover daily writing, measuring, and correction needs. Organized in a compact, durable case, it’s ideal for backpacks and desks alike. Perfect for students, teachers, and office workers looking for a tidy, portable toolkit.",
    features: [
      "Includes pens, pencils, ruler, sharpener, and eraser",
      "Zippered, durable carrying case for organization",
      "Quick-access elastic loops to secure items",
      "Lightweight and travel-friendly design",
      "Refillable components for long-term use",
    ],
    reviews: [
      {
        id: 1,
        title: "Great Value for Students",
        rating: 5,
        comment:
          "Everything needed in one kit. The case keeps things organized and the ruler is sturdy. Perfect for school and assignments.",
      },
      {
        id: 2,
        title: "Handy and Portable",
        rating: 4,
        comment:
          "Compact and neat. Pens are smooth, and the eraser doesn’t smudge. Would love a small pair of scissors included.",
      },
      {
        id: 3,
        title: "Good Starter Pack",
        rating: 4,
        comment:
          "Ideal for basic use. The pencils are decent and the case feels durable. Some items are entry-level, but it’s priced fairly.",
      },
      {
        id: 4,
        title: "Decent but Replace Pens",
        rating: 3,
        comment:
          "Kit is convenient, but the pens ran out faster than expected. Swapped them with my preferred brand and now it’s perfect.",
      },
    ],
  },
  {
    id: 4,
    name: "Pens Pack",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: pensImg,
    rating: 5,
    title: "Smooth Ink Flow Pens for Writing and Drawing",
    description:
      "Premium ballpoint pens engineered for consistent ink flow and crisp lines. Quick-drying, smudge-resistant ink makes them ideal for note-taking, journaling, and sketching. The soft, contoured grip supports prolonged writing without fatigue.",
    features: [
      "Set of 10 pens with consistent ink flow",
      "Quick-drying, smudge-resistant formulation",
      "0.7 mm medium tip for versatile use",
      "Comfort grip for extended writing sessions",
      "Long-lasting ink cartridges",
    ],
    reviews: [
      {
        id: 1,
        title: "Super Smooth Writing",
        rating: 5,
        comment:
          "These glide effortlessly on paper and don’t smear. Great for lectures and meeting notes. Grip is comfortable too.",
      },
      {
        id: 2,
        title: "Perfect Everyday Pens",
        rating: 5,
        comment:
          "Reliable and neat lines every time. No skipping so far. Good value for a 10-pack.",
      },
      {
        id: 3,
        title: "Almost Perfect",
        rating: 4,
        comment:
          "Writes well, but one pen in the pack had a dry tip. The rest work flawlessly. I’d still repurchase.",
      },
      {
        id: 4,
        title: "Good for Sketching",
        rating: 4,
        comment:
          "Ink is consistent for quick sketches and annotations. Caps fit snugly, and they don’t leak in my bag.",
      },
    ],
  },
  {
    id: 5,
    name: "Scissors Set",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: scissorsImg,
    rating: 4,
    title: "Durable and Easy-to-Use Scissors Set",
    description:
      "A versatile scissors set with precision-ground stainless steel blades for clean cuts on paper, fabric, and packaging. Ergonomic handles provide a secure, ambidextrous grip for home, school, and office tasks. Built to stay sharp and resist adhesive buildup.",
    features: [
      "Precision stainless steel blades",
      "Comfortable, ambidextrous handles",
      "Non-stick coating reduces residue",
      "Suitable for paper, fabric, and light cardboard",
      "Protective blade covers for safe storage",
    ],
    reviews: [
      {
        id: 1,
        title: "Sharp and Comfortable",
        rating: 5,
        comment:
          "Cuts cleanly through paper and thin cardboard. Handles are comfy and don’t pinch. Excellent for crafts.",
      },
      {
        id: 2,
        title: "Good Everyday Pair",
        rating: 4,
        comment:
          "Reliable for office tasks and packaging. The non-stick coating helps when cutting tape.",
      },
      {
        id: 3,
        title: "Works Well, Slightly Tight",
        rating: 4,
        comment:
          "A little tight at first but smooth after a few uses. Great value for the quality.",
      },
      {
        id: 4,
        title: "Adequate for Light Use",
        rating: 3,
        comment:
          "Fine for paper and photos, but struggles with thicker fabric. For crafts, it’s decent.",
      },
    ],
  },
  {
    id: 6,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Compact Desk Stapler with Anti-Jam Design",
    description:
      "A compact desk stapler optimized for quick, reliable stapling in busy workspaces. The anti-jam guide and metal internal frame deliver consistent performance, while the soft-touch cap improves comfort during repetitive tasks.",
    features: [
      "Anti-jam guide for reliable operation",
      "Metal frame with soft-touch cap",
      "Holds standard 24/6 and 26/6 staples",
      "20–25 sheet stapling capacity",
      "Easy rear-loading mechanism",
    ],
    reviews: [
      {
        id: 1,
        title: "Consistent and Compact",
        rating: 5,
        comment:
          "Small footprint and big performance. It’s become my go-to stapler at work. No jams yet.",
      },
      {
        id: 2,
        title: "Solid Build",
        rating: 4,
        comment:
          "Feels sturdy and staples cleanly. Slightly louder click than expected but not a dealbreaker.",
      },
      {
        id: 3,
        title: "Good for Office",
        rating: 4,
        comment:
          "Doesn’t slide on the desk and staples straight. Loading is easy. Satisfied overall.",
      },
      {
        id: 4,
        title: "Okay for Light Bundles",
        rating: 3,
        comment:
          "Great up to ~20 pages, but you can feel it struggle beyond that. Still fine for daily tasks.",
      },
    ],
  },
  {
    id: 7,
    name: "Highlighter",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: highlighterImg,
    rating: 4,
    title: "Professional-Grade Highlighter for Office Use",
    description:
      "Bright, fade-resistant highlighters designed for study and professional workflows. The chisel tip enables both broad swipes and fine underlines, while quick-drying ink minimizes smears on most papers and printouts.",
    features: [
      "Set of 5 vibrant colors",
      "Quick-drying, low-smear ink",
      "Chisel tip for broad and fine lines",
      "Long-lasting, even ink distribution",
      "Comfortable barrel for extended use",
    ],
    reviews: [
      {
        id: 1,
        title: "Vivid and Clean",
        rating: 5,
        comment:
          "Colors pop without bleeding through. Great for textbooks and printed notes. Caps snap tight.",
      },
      {
        id: 2,
        title: "Great for Study",
        rating: 4,
        comment:
          "Ink dries quickly and the chisel tip is precise. The yellow and green are my favorites.",
      },
      {
        id: 3,
        title: "Good but One Color Light",
        rating: 4,
        comment:
          "All colors are strong except the blue, which is slightly lighter. Still a solid set.",
      },
      {
        id: 4,
        title: "Works Best on Standard Paper",
        rating: 3,
        comment:
          "Performs well on normal paper, but on thin notebook paper there’s mild shadowing. Not a dealbreaker.",
      },
    ],
  },
  {
    id: 8,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Heavy-Duty Stapler for Frequent Use",
    description:
      "Engineered for frequent stapling tasks, this heavy-duty unit offers smooth action and strong clinches on larger stacks. The reinforced hinge and anti-slip base keep it planted during high-volume workflows.",
    features: [
      "Reinforced hinge for durability",
      "Anti-slip base for stability",
      "Handles up to 30 sheets with compatible staples",
      "Smooth-action lever reduces effort",
      "Clear window to monitor staple levels",
    ],
    reviews: [
      {
        id: 1,
        title: "Sturdy Workhorse",
        rating: 5,
        comment:
          "Feels professional and handles thicker stacks better than my old stapler. Reliable and easy to reload.",
      },
      {
        id: 2,
        title: "Solid Choice",
        rating: 4,
        comment:
          "Good performance for the price. Slightly bulkier, but that’s expected for heavy-duty use.",
      },
      {
        id: 3,
        title: "No-Frills, Reliable",
        rating: 4,
        comment:
          "Does exactly what it should. If you staple a lot, this is a great upgrade from a compact model.",
      },
      {
        id: 4,
        title: "Okay with Thick Stacks",
        rating: 3,
        comment:
          "Works well up to 25–30 pages. Beyond that, you’ll need more force. For normal office use it’s perfect.",
      },
    ],
  },
  {
    id: 9,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
    title: "Organizer Stationery Kit with Essentials",
    description:
      "A curated kit that keeps study and work essentials within reach. The compact organizer case prevents clutter, and refill-friendly items ensure long-term value. Ideal for remote work setups and classrooms.",
    features: [
      "Essentials pack with organizer case",
      "Elastic bands keep items in place",
      "Refill-friendly components",
      "Lightweight and classroom-friendly",
      "Durable zipper and easy-carry handle",
    ],
    reviews: [
      {
        id: 1,
        title: "Neat and Complete",
        rating: 5,
        comment:
          "Helped declutter my kid’s desk. Everything has its place, and the case is sturdy.",
      },
      {
        id: 2,
        title: "Good for Remote Work",
        rating: 4,
        comment:
          "Keeps my workspace tidy. Would love a mini sticky-notes pad included, but still great.",
      },
      {
        id: 3,
        title: "Useful Everyday",
        rating: 4,
        comment:
          "Handy selection and easy to carry. Quality is good for the price point.",
      },
      {
        id: 4,
        title: "Pens Could Be Better",
        rating: 3,
        comment:
          "Everything is fine, but I swapped the pens for my preferred brand. The organizer alone is worth it.",
      },
    ],
  },
  {
    id: 10,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: calcImg,
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
    id: 11,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Ergo-Grip Stapler with Soft Base",
    description:
      "Designed for comfort and control, this stapler features a cushioned base and a contoured top for steady pressure. The precision anvil reduces bent staples and ensures tidy clinches on standard office stacks.",
    features: [
      "Cushioned base to reduce desk vibration",
      "Contoured top for ergonomic press",
      "Precision anvil for tidy clinches",
      "Standard staples compatibility",
      "Side window to check staple count",
    ],
    reviews: [
      {
        id: 1,
        title: "Comfortable to Use",
        rating: 5,
        comment:
          "Soft base absorbs impact and makes stapling feel easier. Clean, flat results every time.",
      },
      {
        id: 2,
        title: "Great for Office Desks",
        rating: 4,
        comment:
          "Feels stable and solid. No jams after a few hundred staples. Good everyday tool.",
      },
      {
        id: 3,
        title: "Works as Expected",
        rating: 4,
        comment:
          "Nothing flashy, but consistent. The side window is handy to know when to reload.",
      },
      {
        id: 4,
        title: "Fine for Light Use",
        rating: 3,
        comment:
          "Best for typical 15–20 page packets. For thicker reports, needed more effort.",
      },
    ],
  },
  {
    id: 12,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
    title: "All-Purpose Study and Office Kit",
    description:
      "A practical set of writing and measuring essentials that balances quality and portability. Built for classrooms, home offices, and exam preparation, with a rugged case to protect contents on the go.",
    features: [
      "Balanced assortment for daily tasks",
      "Rugged case protects contents",
      "Easy-access elastic loops",
      "Lightweight and backpack-friendly",
      "Refillable and replaceable items",
    ],
    reviews: [
      {
        id: 1,
        title: "Perfect Starter Set",
        rating: 5,
        comment:
          "Bought for exam prep—super convenient and well-organized. Case feels durable.",
      },
      {
        id: 2,
        title: "Good Mix of Items",
        rating: 4,
        comment:
          "Everything needed for notes and quick sketches. Could include sticky notes, but overall great.",
      },
      {
        id: 3,
        title: "Organized and Portable",
        rating: 4,
        comment:
          "Keeps my essentials in one place. Zipper is smooth and doesn’t snag.",
      },
      {
        id: 4,
        title: "Pens Are Average",
        rating: 3,
        comment:
          "The kit is great, but I replaced the pens. Still worth it for the case and accessories.",
      },
    ],
  },
];

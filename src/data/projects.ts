export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  coverImage: string;
  bannerImage: string;
  driveUrl: string;
  liveUrl: string;
  tags: string[];
  overview: string;
  objective: string;
  method: {
    description: string;
    tools: string[];
  };
  result: {
    description: string;
    metrics: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "clandestine",
    title: "Clandestine",
    category: "Digital Banking · Website",
    client: "Clandestine Inc.",
    year: "2024",
    role: "UI/UX Designer & Front-End Developer",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["Fintech", "Web App", "UI/UX", "React"],
    overview:
      "A modern digital banking platform designed for young professionals who demand clarity, speed, and trust in every financial interaction.",
    objective:
      "Clandestine needed a modern digital banking platform that would make financial management intuitive and accessible for young professionals. The core challenge was designing a trustworthy, secure-feeling interface that simplifies complex financial tasks — from multi-currency transactions to investment tracking — without overwhelming users with data density.",
    method: {
      description:
        "The process began with a 2-week competitive analysis of 8 existing banking apps, followed by 12 user interviews to map pain points. Wireframes were built in Figma and tested with 15 real users across 2 iteration rounds. A detailed component library and design token documentation were produced for developer handoff.",
      tools: ["Figma", "FigJam", "React", "Tailwind CSS", "Framer Motion", "REST API", "Hotjar"],
    },
    result: {
      description:
        "The redesigned platform launched to strong positive reception. Onboarding drop-off reduced by over a third, and users reported significantly higher confidence completing financial transactions independently. The project was delivered on time and became an internal reference design.",
      metrics: ["38% faster onboarding", "4.8 / 5 user rating", "2× task completion rate", "↓ 34% support tickets"],
    },
  },
  {
    slug: "bola-io",
    title: "Bola.io",
    category: "AI Platform · Calendar",
    client: "Bola Technologies",
    year: "2024",
    role: "Product Designer",
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["AI", "SaaS", "Productivity", "Web App"],
    overview:
      "An AI-powered scheduling assistant that learns from your behavior to auto-organize meetings, tasks, and deadlines — with a calm, human interface.",
    objective:
      "Bola.io needed to build an AI-powered scheduling assistant that learns from user behavior and auto-organizes meetings, tasks, and deadlines. The challenge was making an intelligent, data-heavy product feel simple, calm, and human — not cold or robotic — especially when the AI is actively processing or surfacing suggestions.",
    method: {
      description:
        "Conducted a 3-week discovery phase with product stakeholders and 8 beta users. Created a modular design system in Figma to handle the product's many UI states (empty, loading, AI-thinking, conflict-detected). Prototyped the AI suggestion flow and tested calendar conflict-resolution scenarios with 5 scheduler personas. Motion design for AI micro-interactions was defined using Principle.",
      tools: ["Figma", "Principle", "Notion", "OpenAI API", "Next.js", "TypeScript", "Supabase"],
    },
    result: {
      description:
        "Beta users reduced time spent on manual scheduling by more than half. The AI suggestion acceptance rate hit 71% within the first month of release, validating the core product hypothesis. The design system enabled the dev team to ship 40% faster than the previous sprint cycle.",
      metrics: ["71% AI suggestion acceptance", "52% less scheduling time", "900+ beta signups", "40% faster dev sprint"],
    },
  },
  {
    slug: "tani-smart",
    title: "Tani Smart",
    category: "AgriTech · Mobile App",
    client: "Capstone — Ministry of Agriculture (ID)",
    year: "2023",
    role: "UI/UX Designer",
    coverImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["Mobile", "Android", "AgriTech", "Social Impact"],
    overview:
      "A mobile app bridging the digital gap for Indonesian smallholder farmers — accessible, offline-capable, and built for entry-level Android devices.",
    objective:
      "Indonesian smallholder farmers face persistent challenges accessing timely information on weather, crop pricing, and fertilizer subsidies. Tani Smart aimed to bridge this digital divide with a mobile app that is accessible, offline-capable, and usable even on low-end Android devices — all while serving users with limited digital literacy.",
    method: {
      description:
        "Field research was conducted across 2 villages in East Java over 10 days, observing farmers firsthand and running facilitated interviews via local translators. Low-fidelity paper prototypes were tested on-site before digital wireframes were produced. The UI was built around icon-first navigation, large touch targets (min 48x48dp), and 2G-compatible asset sizes. All screens validated against WCAG AA contrast ratios.",
      tools: ["Figma", "FigJam", "Android Studio", "Firebase", "Google Maps API", "Optimal Workshop"],
    },
    result: {
      description:
        "Pilot testing across 3 villages showed strong adoption among farmers aged 40–60, a demographic rarely reached by digital products. Local agricultural officers reported a meaningful reduction in time spent answering routine subsidy and pricing inquiries, now handled directly through the app.",
      metrics: ["87% task success in pilot", "3 villages onboarded", "Works on 2G network", "Age 40–60 primary users"],
    },
  },
  {
    slug: "luminare",
    title: "Luminare",
    category: "Creative Agency · Website",
    client: "Luminare Studio",
    year: "2023",
    role: "UI Designer & Brand Designer",
    coverImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["Branding", "Webflow", "Motion", "Website"],
    overview:
      "A full brand and website rebuild for a premium creative agency — built to convert visitors into high-value clients through bold design and motion-first experience.",
    objective:
      "Luminare Studio's existing website felt generic and failed to convert visitors into project leads. The studio needed a site communicating their core values — bold, premium, and future-focused — while functioning as both a portfolio showcase and a lead-generation engine. The visual identity also required a refresh to match their repositioned market tier.",
    method: {
      description:
        "Started with a brand audit and competitor analysis of 12 agencies at a similar tier. Rebuilt the visual identity: refined color palette, new typography pair, and a motion-first design approach. Designed 12 page templates in Figma, reviewed in hi-fi prototype form with the client. Final implementation done in Webflow with GSAP for page transitions and scroll-triggered animations, in collaboration with a Webflow developer.",
      tools: ["Figma", "Webflow", "GSAP", "Adobe Fonts", "Hotjar", "Google Analytics 4"],
    },
    result: {
      description:
        "The new site launched to immediate positive feedback. Organic traffic and inbound project inquiries grew substantially in the first quarter post-launch. The redesigned identity was later extended to pitch decks and social media templates. The site was featured in Webflow's official showcase.",
      metrics: ["3× more inbound leads", "Avg. session: 4min 22s", "Bounce rate ↓ 74% → 41%", "Featured in Webflow Showcase"],
    },
  },
  {
    slug: "sumbang",
    title: "Sumbang",
    category: "Social Impact · Donation App",
    client: "NGO Collaboration — Capstone Project",
    year: "2023",
    role: "Lead UI/UX Designer",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["Mobile", "Social Impact", "React Native", "NGO"],
    overview:
      "A transparent, community-driven donation platform for Indonesian NGOs — making every rupiah traceable from payment to on-ground impact.",
    objective:
      "Sumbang was created to rebuild donor trust in Indonesian NGOs, which suffer from a widespread perception of opaque fund management. The app needed to make every donation fully traceable — from payment confirmation, to fund allocation, to on-ground impact reporting — using radical transparency as its core design principle.",
    method: {
      description:
        "Ran a 5-day design sprint with NGO stakeholders and potential donors. Mapped the full donation journey and identified 3 critical trust moments: payment confirmation, fund tracking, and impact reporting. Each was redesigned with maximum transparency: real-time fund breakdowns, photo-verified impact updates, and blockchain-anchored receipts. Usability tested with 20 participants across 2 rounds.",
      tools: ["Figma", "Maze", "React Native", "Expo", "Node.js", "MongoDB", "Midtrans API"],
    },
    result: {
      description:
        "Pilot NGOs reported a notable increase in donor retention compared to their previous platforms. New donors cited the transparency features as the primary reason for their donation decision. The app was shortlisted for a national student innovation award.",
      metrics: ["↑ 61% donor retention", "4.9 / 5 trust score", "12 NGOs onboarded", "National award shortlist"],
    },
  },
  {
    slug: "buildingblocks",
    title: "BuildingBlocks",
    category: "Real Estate · Website",
    client: "BuildingBlocks Property",
    year: "2022",
    role: "UI/UX Designer & Front-End Developer",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    bannerImage: "https://images.unsplash.com/photo-1582407947304-fd86f28f7b95?w=1400&q=80",
    driveUrl: "#",
    liveUrl: "#",
    tags: ["Real Estate", "Website", "React", "Property Search"],
    overview:
      "A property discovery and listing platform that makes finding your dream home as effortless and visual as scrolling through social media.",
    objective:
      "BuildingBlocks needed to move away from a legacy listing portal that felt outdated and difficult to navigate on mobile. The goal was to design a modern, social-media-inspired property discovery experience — where browsing homes feels effortless, visually rich, and trustworthy — driving both buyer inquiries and agent sign-ups.",
    method: {
      description:
        "Began with a thorough UX audit of the existing portal, identifying 9 critical drop-off points in the property search flow. Designed a card-based discovery UI inspired by social media scrolling patterns, with high-quality photo-first listings, map integration, and saved-search functionality. Conducted A/B testing on the listing card layout with 200 users before finalizing the design direction.",
      tools: ["Figma", "React", "Tailwind CSS", "Google Maps API", "Algolia Search", "Vercel"],
    },
    result: {
      description:
        "Post-launch data showed a dramatic improvement in mobile engagement. Users browsed significantly more listings per session and inquiry form submissions increased substantially. The platform was adopted as the company's primary customer-facing product within 3 months of launch.",
      metrics: ["↑ 85% mobile engagement", "3.2× more listings viewed", "↑ 44% inquiry submissions", "Adopted as primary platform"],
    },
  },
];

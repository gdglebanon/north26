/**
 * DevFest 2026 Configuration & Data Store
 * Easily toggle sections on/off by setting showAgenda, showSpeakers, or showSponsors to true or false.
 * You can edit the arrays below with your 2026 data whenever you're ready!
 */
const devFestConfig = {
    year: "2026",
    edition: "DevFest Tripoli 2026",
    tagline: "GDG North Lebanon",
    dateDisplay: "Coming in 2026",
    locationDisplay: "Tripoli, Lebanon",
    registrationUrl: "https://rsvp.gdglebanon.com/",
    contactEmail: "info@gdglebanon.com",

    // Visibility toggles: Set to true when you want to reveal the full content!
    showAgenda: false,          // Toggle agenda schedule / tracks
    showSpeakers: false,        // Toggle speakers grid
    showSponsors: false,        // Toggle sponsors grid
    showBadgeGenerator: false,  // Toggle badge generator
};

const devFestData = {
    sessions: [
    {
        "id": "reg-coffee-001",
        "title": "Registration & Welcome Coffee",
        "description": "Get your badge and enjoy some coffee before we start.",
        "format": "Networking",
        "level": "",
        "room": "Main Auditorium",
        "time": "08:30 AM - 09:30 AM",
        "tags": [],
        "isCommon": true,
        "targetAudience": "All Attendees"
    },
    {
        "id": "cf3d53f8-2f9b-456a-aab4-dfeb00f9df3f",
        "title": "Opening Keynote: Welcome to DevFest!",
        "description": "By GDG , BAU and Minister of State for Technology and AI Kamal Chehade",
        "format": "Keynote",
        "level": "Beginner",
        "room": "Main Auditorium",
        "time": "09:30 AM - 10:30 AM",
        "tags": [],
        "isCommon": true,
        "targetAudience": ""
    },
    {
        "id": "26b9e746-f352-406b-80cd-ab901112e987",
        "title": "Break",
        "description": "Snacks and Coffee Break.",
        "format": "Networking",
        "level": "Beginner",
        "room": "Main Auditorium",
        "time": "12:30 PM - 12:50 PM",
        "tags": [],
        "isCommon": true,
        "targetAudience": ""
    },
    {
        "id": "0a9293da-449f-47cd-bad8-ba48df440535",
        "title": "Lunch",
        "description": "End your day with a delicious lunch and a chance to network with other attendees.",
        "format": "Networking",
        "level": "Beginner",
        "room": "Main Auditorium",
        "time": "03:10 PM - 03:50 PM",
        "tags": [],
        "isCommon": true,
        "targetAudience": ""
    },
    {
        "id": "1074784",
        "title": "How ChatGPT Was Made: Behind the Scenes of a Large Language Model",
        "description": "In this talk, we\u2019ll go behind the scenes of how large language models like ChatGPT are built, from massive training datasets and transformer architectures to fine-tuning and real-world deployment. You\u2019ll get a high-level tour of the model\u2019s lifecycle, including the key breakthroughs that made systems like ChatGPT possible. Whether you\u2019re curious about the tech, the training process, or what it takes to align AI with human intent, this session will unpack the magic, without getting lost in the math",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B105",
        "time": "11:10 AM - 11:50 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Everyone",
        "speakerId": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
        "speakers": [
            {
                "id": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
                "name": "Mhamad El Itawi"
            }
        ]
    },
    {
        "id": "1074905",
        "title": "Opportunities Beyond the Local Market",
        "description": "I will talk about how I prepared for a global job in tech. I will also discuss how to prepare differently for big tech and startups. ",
        "format": "Talk",
        "level": "Beginner",
        "room": "B1008",
        "time": "01:25 PM - 02:00 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Junior emgineers",
        "speakerId": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
        "speakers": [
            {
                "id": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
                "name": "Judy Abi Nehme"
            }
        ]
    },
    {
        "id": "1076607",
        "title": "Deploy Like a Boss: Cloud and Containers",
        "description": "This hands-on workshop introduces beginner to intermediate developers to practical DevOps by guiding them and demonstrating the differences in deployments for the same application for the following environments. Locally on their laptops as a manual deployment. Locally on their laptops as a container deployment, on GCP as a manual deployment, on GCP as a container deployment\n\nParticipants will gain real-world experience with Docker, linux, and Google Cloud Platform. The workshop emphasizes on the deployment controlled changes, so that the learner clearly understands and removes the fear of containerized or cloud workloads. All tasks will be performed live, with guided instruction, collaborative debugging, and interactive exercises to ensure engagement and understanding. With some simple explanations to some topics such as containerization",
        "format": "Workshop",
        "level": "Intermediate Level",
        "room": "B110",
        "time": "11:30 AM - 12:30 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Senior students and above",
        "speakerId": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
        "speakers": [
            {
                "id": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
                "name": "Jaafar Nasrallah"
            }
        ]
    },
    {
        "id": "1078513",
        "title": "The Future of Tech: High-Impact Roles With Zero Coding",
        "description": "Coding is becoming the easiest and often lowest-paid\u2014skill, while real demand is shifting toward non-coding roles that drive strategy, communication, and product impact. This session highlights the rising careers in tech, including UX/UI, Business Analysis, Scrum Mastery, Technical Project Management, and the increasingly important Product Manager role. It provides a clear overview of the skills that matter today and how to build a successful career in tech with zero coding skills.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B105",
        "time": "11:50 AM - 12:30 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Computer science and engineering students, developers, business people in tech sector ",
        "speakerId": "d8b7c739-047a-463f-afa0-270fcdab38ce",
        "speakers": [
            {
                "id": "d8b7c739-047a-463f-afa0-270fcdab38ce",
                "name": "Gardenia Homsi"
            }
        ]
    },
    {
        "id": "1081297",
        "title": "AI Maturity Unlocked: Roadmap for Business Growth",
        "description": "Unlock the steps every business should take to move from AI experimentation to real, scalable value. This talk simplifies the \u201cAI maturity journey\u201d and equips attendees with a practical framework to assess where they stand\u2014and how to level up. Whether you\u2019re a developer, founder, or tech lead, you\u2019ll leave knowing how to drive sustainable AI adoption and avoid common pitfalls in building data-driven, competitive organizations.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B105",
        "time": "12:50 PM - 01:25 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers and technical leads curious about AI strategy.  Founders and product managers in SaaS, consulting, or service companies.  Anyone moving from AI experiments to delivering outcomes.",
        "speakerId": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
        "speakers": [
            {
                "id": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
                "name": "Abed-R Ghaleb"
            }
        ]
    },
    {
        "id": "1082686",
        "title": "Vibe Coding: Build a solution for Lebanon in 35min",
        "description": "Vibe Coding is redefining how humans create software. Instead of building apps, people now build flows of intent. In this talk, I\u2019ll show how Vibe Coding flips the entire product cycle: from ideas to prototypes, from problems to working tools, without traditional code or heavy engineering overhead.\n\nThis is more than productivity. It changes how we perceive products, creativity, and innovation. When anyone can build what they need in minutes, the role of \u201cdeveloper\u201d evolves, and so does the way we solve the problems in our own lives. I\u2019ll present real examples from my work in AI-native systems, multi-agent OS design, and everyday builders using Vibe Coding to ship projects they never thought they could create.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "Main Auditorium",
        "time": "01:25 PM - 02:00 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers, designers, founders, researchers, students, and anyone curious about AI-driven creation.",
        "speakerId": "d0523778-7fbc-41e4-b4a5-6122650a000e",
        "speakers": [
            {
                "id": "d0523778-7fbc-41e4-b4a5-6122650a000e",
                "name": "Stephane Boghossian"
            }
        ]
    },
    {
        "id": "1084180",
        "title": "Ruby on Rails: The One-Man Framework",
        "description": "Ruby on Rails is the fastest way for a single developer to build and ship full-featured applications. In this session, I\u2019ll introduce Rails to an audience that may have never worked with it before, explain how it enables rapid development through convention over configuration, and live-build a small web app with authentication, authorization, and basic CRUD. We\u2019ll end by deploying the app to production to show how quickly a solo developer can go from idea to launch.",
        "format": "Workshop",
        "level": "Beginner",
        "room": "B108",
        "time": "10:30 AM - 11:30 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers",
        "speakerId": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
        "speakers": [
            {
                "id": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
                "name": "Roc Khalil"
            }
        ]
    },
    {
        "id": "1085657",
        "title": "On-Device Multimodal Assistants: Can We Fit GPT-Vision on Small Hardware?",
        "description": "This talk explores whether the next generation of multimodal assistants, capable of vision, speech, and language reasoning, can run locally on consumer hardware.\nWe\u2019ll cover lightweight visual encoders, adapter-based multimodal fusion, 4-bit and 2-bit quantization, memory optimizations, and device-level acceleration.\nIncludes a live demo of a local multimodal assistant running on small hardware.",
        "format": "Talk",
        "level": "Beginner",
        "room": "B1008",
        "time": "11:10 AM - 11:50 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers, AI engineers, makers, and anyone interested in local AI or device intelligence.",
        "speakerId": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
        "speakers": [
            {
                "id": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
                "name": "Rami Kronbi"
            }
        ]
    },
    {
        "id": "1086205",
        "title": "Business-Mindset for Tech Talent",
        "description": "A workshop designed to help students especially those in tech, become familiar with the business side of building products. Many engineers jump straight into coding and creating solutions, but the real impact comes from understanding the purpose, business outcome, and problem behind the solution.\n\nIn this session, participants will learn to think beyond features and technology. They will explore how businesses operate, what challenges they face, and why identifying the right problem matters more than rushing into development. Through a practical scenario, students will analyze a business workflow, uncover pain points, and then propose a tech solution that aligns with real business goals.",
        "format": "Case Study (40 minutes)",
        "level": "Beginner",
        "room": "B105",
        "time": "02:35 PM - 03:10 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Tech Professionals - University Students",
        "speakerId": "b31b6747-781b-44d0-8189-cb4b222240be",
        "speakers": [
            {
                "id": "b31b6747-781b-44d0-8189-cb4b222240be",
                "name": "Aisha Harrash"
            }
        ]
    },
    {
        "id": "1087288",
        "title": "Vibe Coding with Google Antigravity",
        "description": "Vibe Coding is a modern approach to web and mobile development where creativity, intuition, and AI-powered assistance blend to accelerate innovation. Instead of writing code the traditional way, developers now collaborate with AI tools to generate components, refactor logic, design UI flows, and even build full features with conversational prompts.\n\nIn this workshop, we will explore how AI\u2014powered by Google\u2019s latest technologies\u2014can amplify your development process, unlock faster prototyping, and help you build more expressive and fluid digital experiences.\nAttendees will learn how to \u201cvibe-code\u201d: guiding AI models to write clean code, generate UI layouts, craft animations, fix bugs, design APIs, and improve performance across both web and mobile platforms.\n\nThis session is practical, hands-on, and focused on building real features with AI as your coding partner\u2014showing you how to code smarter, ship faster, and create more polished products with less friction.",
        "format": "Workshop",
        "level": "Beginner",
        "room": "B108",
        "time": "02:10 PM - 03:10 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers, designers, students, frontend engineers and mobile developers.",
        "speakerId": "3a70a459-beb6-4c10-af2f-9958d49b2793",
        "speakers": [
            {
                "id": "3a70a459-beb6-4c10-af2f-9958d49b2793",
                "name": "Ibrahim Zakaria"
            },
            {
                "id": "b17b7459-ef0f-45d1-b4c0-df52cc7cc691",
                "name": "Ahmad Kharma"
            }
        ]
    },
    {
        "id": "1092585",
        "title": "Are We There Yet? Live Al Coding Challenge Workshop",
        "description": "AI coding tools are everywhere now, but most developers still treat them like a smarter autocomplete.\n\nIn this live workshop, we\u2019ll ask the audience for a simple app/feature idea, agree on one together, and then build it live using AI tools. We\u2019ll go from idea \u2192 tiny spec \u2192 code \u2192 debug \u2192 polish, all on stage.\n\nI\u2019ll show exactly how I use AI day-to-day as a CTO: turning messy ideas into clear prompts, feeding the right context, handling hallucinations, and keeping control of architecture and quality. You\u2019ll see the full thought process, not just the perfect edited demo.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "Main Auditorium",
        "time": "02:00 PM - 02:35 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "- Developers who want to seriously adopt AI in their workflow, not just \u201cplay with it\u201d - Tech leads and managers defining AI guidelines for their teams - Students and juniors who want healthy, future-proof habits around AI-assisted coding",
        "speakerId": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
        "speakers": [
            {
                "id": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
                "name": "Rayan Salhab"
            }
        ]
    },
    {
        "id": "1092659",
        "title": "Kotlin Multiplatform + Compose Multiplatform: The Performance King of Cross-Platform.",
        "description": "Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP) are reshaping how modern apps are built with one shared codebase powering Android, iOS, desktop, and even web. In this beginner-friendly session, we\u2019ll explore what makes this approach so powerful, why the industry is moving toward shared logic, and how teams save time by reusing code across platforms.\n\nYou\u2019ll see real data on performance and productivity, and a simple live demo showing how one Kotlin project can run on multiple devices without diving into complex code. This talk is perfect for CS students curious about modern, efficient, and scalable app development.",
        "format": "Talk",
        "level": "Beginner",
        "room": "B105",
        "time": "10:30 AM - 11:10 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Android Developers, iOS Developers, Students, Developers.",
        "speakerId": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
        "speakers": [
            {
                "id": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
                "name": "Mohyddine Al-lahham"
            }
        ]
    },
    {
        "id": "1092828",
        "title": "Beyond Black Boxes: Building Explainable AI Systems with Knowledge Graphs",
        "description": "AI now plays a major role in job platforms, career guidance, and talent matching  yet most systems still operate as black boxes, offering recommendations without explaining why. In this workshop, we bridge that gap by introducing participants to Explainable AI (XAI) through the power of Knowledge Graphs (KGs) and Neo4j.\n\nThe session begins with an accessible introduction to knowledge graphs, graph structures, and why KGs are becoming essential for AI transparency. Then, in a fully hands-on segment, participants will model users, skills, roles, and companies into a real knowledge graph using Neo4j\u2019s browser-based sandbox. They\u2019ll learn how to write graph queries that surface the exact skill matches, experience alignments, and interest connections that justify a job recommendation.\n\nBy the end of the workshop, attendees will have built a mini Explainable Job-Matching System capable of showing users why a particular job fits them  using clear, visual reasoning paths directly derived from the knowledge graph. Whether you're a student discovering AI or a developer exploring semantic technologies, you\u2019ll leave with practical skills in combining KGs + XAI to create transparent, trustworthy AI systems used in modern platforms like LinkedIn and Indeed.",
        "format": "Workshop",
        "level": "Intermediate Level",
        "room": "B110",
        "time": "01:20 PM - 02:10 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "University students and Professionals ",
        "speakerId": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
        "speakers": [
            {
                "id": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
                "name": "Sarah Rashidi"
            }
        ]
    },
    {
        "id": "1092832",
        "title": "Under The Hood: How eXplainable AI (XAI) Changes Everything",
        "description": "This session introduces participants to the rapidly growing field of explainable AI , advantages challenges and real applications.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B1008",
        "time": "12:50 PM - 01:25 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Pregraduate as well as grad students ",
        "speakerId": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
        "speakers": [
            {
                "id": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
                "name": "Amani Raad"
            }
        ]
    },
    {
        "id": "1092872",
        "title": "Modular RAG with Spring AI",
        "description": "Learn how to bring generative AI capabilities into your java based application using spring AI without the need for python expertise",
        "format": "Talk",
        "level": "Beginner",
        "room": "B1008",
        "time": "10:30 AM - 11:10 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Spring and java developers",
        "speakerId": "089bb622-9b5d-436f-b531-e1a653264f51",
        "speakers": [
            {
                "id": "089bb622-9b5d-436f-b531-e1a653264f51",
                "name": "Omar Chaaban"
            }
        ]
    },
    {
        "id": "1093711",
        "title": "AI in the Real World - Stories & Case Studies from Leading Lebanese Companies",
        "description": "I will be talking about real-world AI implementations in some of the leading Lebanese companies. Some stories are humorous, others are lessons we learned that helped us shape the generative AI business model in Lebanon.",
        "format": "Talk",
        "level": "Beginner",
        "room": "B105",
        "time": "02:00 PM - 02:35 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Literally. everyone who uses a computer in their work",
        "speakerId": "08589cfa-0867-493b-b32b-66882fb54314",
        "speakers": [
            {
                "id": "08589cfa-0867-493b-b32b-66882fb54314",
                "name": "Elias Atik"
            }
        ]
    },
    {
        "id": "1093960",
        "title": "Modern Cloud Strategies: From Monitoring to Resilience",
        "description": " A practical talk on building secure, scalable cloud environments using Zabbix, Acronis, and Nextcloud. Covers monitoring, disaster recovery, vendor independence, and real-world deployment insights",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B1008",
        "time": "02:00 PM - 02:35 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Developers, IT Professionals, Students, University IT Teams",
        "speakerId": "ffc51179-bbaf-4e96-8101-1a770db74061",
        "speakers": [
            {
                "id": "ffc51179-bbaf-4e96-8101-1a770db74061",
                "name": "Mohamad Tabikh"
            }
        ]
    },
    {
        "id": "1094371",
        "title": "Production-Ready Engineers",
        "description": "This session discusses what it takes to become a reliable, efficient, and production-ready engineer at any level and make an impact where it counts.",
        "format": "Talk",
        "level": "Beginner",
        "room": "Main Auditorium",
        "time": "12:50 PM - 01:25 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "7b455539-7556-477b-9d3b-bec814e5f8b8",
        "speakers": [
            {
                "id": "7b455539-7556-477b-9d3b-bec814e5f8b8",
                "name": "Nicolas El Khoury"
            }
        ]
    },
    {
        "id": "1094377",
        "title": "Open Source Competition: Key Learnings & What's Next",
        "description": "Join us for a comprehensive review of our Open Source Competition, where we'll share winner highlights, analyze standout submissions, and discuss emerging trends that shaped the entries. We'll explore what worked, what surprised us, and how these innovations are pushing the boundaries of open source development.",
        "format": "Talk",
        "level": "Beginner",
        "room": "B1008",
        "time": "11:50 AM - 12:30 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
        "speakers": [
            {
                "id": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
                "name": "Omar Chouman"
            },
            {
                "id": "843f8376-0c95-40cd-9b31-1e8b8939e59d",
                "name": "Mohammad Omar"
            }
        ]
    },
    {
        "id": "1094958",
        "title": "Build Your Tech Path: Skills, Stacks, and Certifications for 2026",
        "description": "This session guides students through building a personalized tech career path by choosing a stack, identifying essential skills, and selecting relevant certifications. It breaks down major tech fields: Web, Mobile, AI, Cloud, Cybersecurity, and QA into beginner-friendly roadmaps. Attendees leave with a clear, practical plan tailored to their interests.",
        "format": "Talk",
        "level": "Beginner",
        "room": "B108",
        "time": "12:50 PM - 01:20 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "University students, fresh graduates, and early-career developers exploring tech career paths and looking for practical, structured guidance.",
        "speakerId": "ad560724-c409-406a-908a-f33583684a21",
        "speakers": [
            {
                "id": "ad560724-c409-406a-908a-f33583684a21",
                "name": "Nisrine Bou Ghannam"
            }
        ]
    },
    {
        "id": "1095160",
        "title": "Think Like a Data Consultant: From Raw Data to Real Impact",
        "description": "This session aims to equip participants with the consultative mindset and structured process to translate raw data insights into actionable business strategies that deliver measurable, real-world impact.",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "B105",
        "time": "01:20 PM - 02:00 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Students and early-career professionals with strong quantitative backgrounds in Computer Science, Engineering, and Business Analytics seeking to elevate technical data skills into strategic business consultancy",
        "speakerId": "5c886983-8e34-423a-ae2a-a6c222657667",
        "speakers": [
            {
                "id": "5c886983-8e34-423a-ae2a-a6c222657667",
                "name": "Majd Chahine"
            },
            {
                "id": "2bc79d2f-0b1d-4d69-9894-4e1deaff9482",
                "name": "Nader Bakir"
            }
        ]
    },
    {
        "id": "1095781",
        "title": "Cyber Resilience: A Multi-Sector Approach",
        "description": "",
        "format": "",
        "level": "",
        "room": "Main Auditorium",
        "time": "10:30 AM - 11:10 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
        "speakers": [
            {
                "id": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
                "name": "Robert Mansour"
            },
            {
                "id": "fa16bb05-09ae-429b-90d1-178f20ed8e2e",
                "name": "Bassel Al Ayoubi"
            },
            {
                "id": "a0981f90-70ea-4023-a1d6-b537899b4e73",
                "name": "Dr. Ali  El Masri"
            },
            {
                "id": "2ca1f722-a92b-407a-b4a1-6a43c08ea68a",
                "name": "Elias Dagher"
            }
        ]
    },
    {
        "id": "1096298",
        "title": "From classroom to career",
        "description": "From classroom to career: a workshop designed to prepare university students to confidently enter the job market by equipping them with practical, real-world skills that universities often overlook.",
        "format": "Workshop",
        "level": "Beginner",
        "room": "HUB",
        "time": "01:20 PM - 02:10 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "Students",
        "speakerId": "e060d7fd-6fec-426f-8978-07783bdd3896",
        "speakers": [
            {
                "id": "e060d7fd-6fec-426f-8978-07783bdd3896",
                "name": "Sally Harrouk"
            }
        ]
    },
    {
        "id": "1096501",
        "title": "The AI Accelerator: Supporting Investment Decisions, Empowering Managers, and Launching Startups",
        "description": "",
        "format": "",
        "level": "",
        "room": "Main Auditorium",
        "time": "02:30 PM - 03:10 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "26348375-0c9a-4c72-b32e-b6bbd455b060",
        "speakers": [
            {
                "id": "26348375-0c9a-4c72-b32e-b6bbd455b060",
                "name": "Mohammad Ahdab"
            },
            {
                "id": "95f10b13-6911-4611-961c-bde0294e8654",
                "name": "Rami Assoum"
            },
            {
                "id": "86ea4325-df87-47ff-8f93-7ad5f5188201",
                "name": "Jonah Tebaa"
            },
            {
                "id": "43e481ba-cf96-4c37-8abd-f5dc87a75530",
                "name": "Dr. Khaled Dassouki"
            }
        ]
    },
    {
        "id": "1101026",
        "title": "Inside the Mind of 1M$ Ethical Hackers",
        "description": "",
        "format": "Talk",
        "level": "Intermediate Level",
        "room": "Main Auditorium",
        "time": "11:50 AM - 12:30 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "5a5cc937-6540-4f05-ba7d-1bb939b06e0a",
        "speakers": [
            {
                "id": "5a5cc937-6540-4f05-ba7d-1bb939b06e0a",
                "name": "Majd Dhainy"
            },
            {
                "id": "00c8cf27-41d6-4c1c-8250-81adcbc82263",
                "name": "Kassem Bazzoun"
            }
        ]
    },
    {
        "id": "1101043",
        "title": "Career Skills Kahoot, Future Top 10 Skills, Activity: CS & Accounting",
        "description": "1- Kahoot game to explore needed soft skills in job interview and CV writing.\n2- Top 10 future skills needed.\n3- When tech meets numbers:an activity to make a link between computer science students and accounting needs.",
        "format": "Panel",
        "level": "Beginner",
        "room": "HUB",
        "time": "10:30 AM - 12:00 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakerId": "aaeba722-0aab-45b7-8679-7338efc49fbd",
        "speakers": [
            {
                "id": "aaeba722-0aab-45b7-8679-7338efc49fbd",
                "name": "Hassan Diab"
            },
            {
                "id": "788709c5-d070-4972-969b-fe783536f6f8",
                "name": "Karim Soueissi"
            },
            {
                "id": "1f119072-1d65-4d1d-ba7d-170e66f1e05b",
                "name": "Dania Hallab"
            },
            {
                "id": "60fd3502-9d97-4218-b206-71b03694c19b",
                "name": "Sally Harrouk"
            }
        ]
    },
    {
        "id": "huawei-session-001",
        "title": "Session from Huawei",
        "description": "Session from Huawei",
        "format": "Talk",
        "level": "Intermediate",
        "room": "Main Auditorium",
        "time": "11:10 AM - 11:50 AM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakers": []
    },
    {
        "id": "career-dialogue-001",
        "title": "Career Dialogue Panel",
        "description": "Career Dialogue Panel",
        "format": "Panel",
        "level": "Beginner",
        "room": "HUB",
        "time": "12:00 PM - 12:30 PM",
        "tags": [],
        "isCommon": false,
        "targetAudience": "",
        "speakers": []
    }
],
    speakers: [
    {
        "id": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
        "firstName": "Mhamad",
        "lastName": "El Itawi",
        "fullName": "Mhamad El Itawi",
        "tagLine": "Tech lead and Senior Software Engineer",
        "company": "Eddress",
        "bio": "Hi, I\u2019m Mhamad El-Itawi , a Tech Lead and Senior Software Engineer with over 8 years of experience building scalable systems, leading engineering teams, and driving digital transformation.\n\nI specialize in backend architecture, cloud infrastructure, Ai systems, DevOps practices, and legacy system modernization. Over the years, I\u2019ve led major cloud migrations, optimized backend systems for performance and cost-efficiency, and delivered impactful solutions across Europe and the Middle East. I\u2019m certified in Kubernetes and AWS, and hold an MBA in International Business  which helps me bridge the gap between technology and business strategy.\n\nAs a speaker, I focus on real-world lessons from the field, including:\n\n- Designing scalable, cloud-native architectures\n- Leading technical teams through change\n- Applying AI to create smarter systems\n- Transforming legacy codebases\n- Building efficient DevOps pipelines\n\nI\u2019m passionate about sharing knowledge, building communities, and helping teams deliver software that truly makes a difference. If you're organizing an event or panel around engineering, cloud, or leadership in tech I\u2019d love to connect.",
        "profilePicture": "https://sessionize.com/image/65f8-400o400o1-RdmRPqXwd4eSYev2puQGd1.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/mhamadelitawi/",
            "twitter": "https://x.com/mhamadelitawi",
            "website": "http://eddress.co/",
            "instagram": "https://www.instagram.com/shard.by.shard",
            "blog": "https://mhamadelitawi.com/"
        }
    },
    {
        "id": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
        "firstName": "Judy",
        "lastName": "Abi Nehme",
        "fullName": "Judy Abi Nehme",
        "tagLine": "Software engineer at Upwork ",
        "company": "Upwork ",
        "bio": "Judy started his career as an electrical engineer in smart homes and electrical installations before shifting into software engineering. He is currently a software engineer at Upwork, a data structures and algorithms teacher. Occasionally, he helps talent with mock interviews. ",
        "profilePicture": "https://sessionize.com/image/59c4-400o400o1-URnqw6nkqFD6oAsyoHsbBw.png",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/judyabinehme/",
            "website": "www.upwork.com",
            "blog": "https://medium.com/@judabne"
        }
    },
    {
        "id": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
        "firstName": "Jaafar",
        "lastName": "Nasrallah",
        "fullName": "Jaafar Nasrallah",
        "tagLine": "Senior DevOps Engineer",
        "company": "Cardinal Health",
        "bio": "I\u2019m a Google-certified DevOps engineer with over 10 years of experience across systems administration, cloud infrastructure, CI/CD, and backend development. I\u2019m passionate about breaking down complex DevOps concepts into clear, hands-on learning experiences that empower others to build, automate, and deploy with confidence",
        "profilePicture": "https://sessionize.com/image/be2d-400o400o1-U6MN4u9SbdoadfDUA67hqt.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/jaafarnasrallah",
            "website": "Cardinalhealth.com",
            "instagram": "https://www.instagram.com/jaafar_nasrallah"
        }
    },
    {
        "id": "d8b7c739-047a-463f-afa0-270fcdab38ce",
        "firstName": "Gardenia",
        "lastName": "Homsi",
        "fullName": "Gardenia Homsi",
        "tagLine": "Tech Product Manager at Wakilni ",
        "company": "Wakilni",
        "bio": "Gardenia Al Homsi is a Technical Product Manager at Wakilni, bringing over six years of experience across software development and product management. With a background in computer engineering and PMI-certified expertise in Agile methodologies, she specializes in digital transformation, cross-functional team leadership, and delivering scalable, business-driven technology solutions. Gardenia has worked with companies both locally and internationally on building in-house and SaaS products. She is known for her ability to create products that customers love while aligning with strategic business objectives.",
        "profilePicture": "https://sessionize.com/image/2de6-400o400o1-VHS7HAoRuxwbjTbo6oeEGh.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/gardenia-homsi",
            "website": "wakilni.com"
        }
    },
    {
        "id": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
        "firstName": "Abed-R",
        "lastName": "Ghaleb",
        "fullName": "Abed-R Ghaleb",
        "tagLine": "Co-founder & CEO @ SILNI AI",
        "company": "Khawarizme Community & SILNI AI",
        "bio": "Dr. Abed-R Ghaleb is the CEO and founder of SILNI, an AI-powered B2B sales platform, and an organizational strategist with over 15 years\u2019 experience in business development, SaaS solutions, and executive training across the MENA region. Passionate about turning AI potential into practical business wins, \n\nDr. Abed-R Ghaleb empowers companies to bridge the gap between technology and strategy. Whether working with startups or established enterprises, he brings a proven record in AI adoption, market analysis, and sales enablement that drives meaningful results for organizations at every stage.",
        "profilePicture": "https://sessionize.com/image/5063-400o400o1-UDpSa2Ax8Y4DTWoomV1tFr.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/abed-r-ghaleb-8b000653/",
            "website": "https://www.silni.ai/en"
        }
    },
    {
        "id": "d0523778-7fbc-41e4-b4a5-6122650a000e",
        "firstName": "Stephane",
        "lastName": "Boghossian",
        "fullName": "Stephane Boghossian",
        "tagLine": "Head of Customer Success, AI Builder & Vibe Coding Advocate",
        "company": "Lovable.dev / Vibemind",
        "bio": "Stephane Boghossian is an AI-native product builder working at the intersection of design, multi-agent systems, and rapid prototyping. He has helped hundreds of founders and creators build and ship products using Vibe Coding methods. He co-develops Vibemind, an AI operating system built around multi-agent automation and intent-driven creation.",
        "profilePicture": "https://sessionize.com/image/ed6f-400o400o1-Hx6emiLNXVJUNmBr36goHx.png",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/stephboghossian/",
            "website": "https://vibemind.space",
            "blog": "https://stephane.bio/"
        }
    },
    {
        "id": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
        "firstName": "Roc",
        "lastName": "Khalil",
        "fullName": "Roc Khalil",
        "tagLine": "VP of Engineering at HAQQ",
        "company": "HAQQ",
        "bio": "With over 12 years of experience in web development and team leadership, I specialize in building scalable applications, optimizing deployment workflows, and introducing innovative solutions. I\u2019m passionate about helping startups and developers discover tools and frameworks that can accelerate productivity and open up global opportunities.",
        "profilePicture": "https://sessionize.com/image/d45b-400o400o1-GgqRcwcx8hDtCC46fDuiv1.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/rockhalil/",
            "website": "https://haqq.ai"
        }
    },
    {
        "id": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
        "firstName": "Rami",
        "lastName": "Kronbi",
        "fullName": "Rami Kronbi",
        "tagLine": "Computer Vision Engineer, Oreyeon",
        "company": "Oreyeon",
        "bio": "Computer Vision Engineer and Edge AI Developer working on vision models, embedded AI, and embedded software design. A lifelong robotics enthusiast with several national competition wins, I\u2019m driven by impact-focused solutions and leadership in the AI field. Outside of work, I\u2019m passionate about space and exploration.",
        "profilePicture": "https://sessionize.com/image/1125-400o400o1-XynJB2xi41cDbCi11rpDWn.jpg",
        "socials": {
            "linkedin": "www.linkedin.com/in/rami-kronbi",
            "website": "https://www.oreyeon.com/",
            "instagram": "https://www.instagram.com/ramikronbi/",
            "blog": "https://ramikronbi.com/"
        }
    },
    {
        "id": "b31b6747-781b-44d0-8189-cb4b222240be",
        "firstName": "Aisha",
        "lastName": "Harrash",
        "fullName": "Aisha Harrash",
        "tagLine": "Namou Properties - Tech Business Analyst",
        "company": "Namou Properties",
        "bio": "A Tech BA, helping startups use technology to increase the business impact and team productivity",
        "profilePicture": "https://sessionize.com/image/caeb-400o400o1-3FyGpt12XhCM9afEyj1mGC.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/aichaharrach/",
            "website": "Not Launched yet"
        }
    },
    {
        "id": "3a70a459-beb6-4c10-af2f-9958d49b2793",
        "firstName": "Ibrahim",
        "lastName": "Zakaria",
        "fullName": "Ibrahim Zakaria",
        "tagLine": "Innovation Team Lead @NavyBits , mentor @ Winners Academy by NavyBits",
        "company": "NavyBits",
        "bio": "Ibrahim Zakaria is a software engineer and AI-driven product builder with experience designing and scaling modern web and mobile applications. He specializes in blending creative problem-solving with advanced development workflows, using tools like AI assistants, NestJS, Prisma, PostgreSQL, and cloud-based architectures to build efficient, user-centered digital products.",
        "profilePicture": "https://sessionize.com/image/e185-400o400o1-a97RKuSTDi6fZHvdiVBg1R.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/ibrahim-zakaria/",
            "website": "https://www.navybits.com",
            "instagram": "https://www.instagram.com/ibrahimzak10/",
            "facebook": "https://www.facebook.com/ibrahim.zakaria.1422/"
        }
    },
    {
        "id": "b17b7459-ef0f-45d1-b4c0-df52cc7cc691",
        "firstName": "Ahmad",
        "lastName": "Kharma",
        "fullName": "Ahmad Kharma",
        "tagLine": "Ai Solution Developer & Winners Academy Leadership",
        "company": "Navybits",
        "bio": "Full\u2011stack Developer with ~3 years of experience, delivering scalable frontend and backend solutions. Skilled\nin Next.js, React, Node.js, Laravel, Directus, MongoDB/MySQL. Passionate about shipping real product value,\nmentoring students, and integrating AI models and MCP\u2011based tools to automate workflows and unlock new\ncapabilities.",
        "profilePicture": "https://sessionize.com/image/4a74-400o400o1-DtkNbrSNmBXJdUbip7S1V6.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/ahmad-kharma-098596268/",
            "website": "https://www.navybits.com/",
            "instagram": "https://www.instagram.com/ahmad.kharma.8/",
            "facebook": "https://www.facebook.com/ahmad.kharma.96"
        }
    },
    {
        "id": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
        "firstName": "Rayan",
        "lastName": "Salhab",
        "fullName": "Rayan Salhab",
        "tagLine": "CTO @ AIY Expert Solutions",
        "company": "AIY Expert Solutions",
        "bio": "Rayan Salhab is the CTO at AIY Expert Solutions, leading a 40+ person team building automation and software products used by customers around the world.\n\nHe works across engineering, cloud infrastructure, and product, with a strong focus on developer experience and reliability. Inside AIY, he runs continuous education programs and internal workshops on AI tools, modern development practices, and engineering culture.\n\nRayan is obsessed with turning buzzwords into working systems: testing new technologies like AI in real products, then sharing the lessons, failures, and playbooks with the community.",
        "profilePicture": "https://sessionize.com/image/92c7-400o400o1-Ky8tH6jBLxVJ5umDDvJ1cF.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/rayan-salhab",
            "website": "https://www.aiyexpertsolutions.com/"
        }
    },
    {
        "id": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
        "firstName": "Mohyddine",
        "lastName": "Al-lahham",
        "fullName": "Mohyddine Al-lahham",
        "tagLine": "Senior Android Developer",
        "company": "Code With Mehyo",
        "bio": "Senior Android developer\nKotlin Multiplatform Developer \nGDG Android/Kotlin Speaker \nYouTube Content Creator ",
        "profilePicture": "https://sessionize.com/image/6b9f-400o400o1-KQkJHUgHanV5n5k7j3k4wo.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/mohyddine-lahham",
            "website": "www.codewithmehyo.com"
        }
    },
    {
        "id": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
        "firstName": "Sarah",
        "lastName": "Rashidi",
        "fullName": "Sarah Rashidi",
        "tagLine": "AI Architect & Researcher | University Instructor | Community Builder",
        "company": "RHU",
        "bio": "Sarah is a University Instructor at Rafik Hariri University (RHU), where she teaches computer science and helps students bridge theory with practical applications. She is also an AI Researcher, Engineer, and Architect with over three years of experience building scalable AI systems, with a focus on MLOps, generative AI, and applied machine learning. Holding dual master\u2019s degrees in Computer Science and Data Intelligence, she works at the intersection of research and engineering to design solutions that connect innovation with real-world impact.\n\nBeyond her professional work, Sarah is an active community leader. She joined Google Developer Groups (GDG) as an organizer earlier this year and is the founder of Code with Serah, a STEAM community at the crossroads of technology and creativity. Through these initiatives, she creates inclusive spaces for young people to learn, collaborate, and bring their ideas to life.\n\n",
        "profilePicture": "https://sessionize.com/image/5e37-400o400o1-R4sPDooML43Sq62Qwezq4f.jpg",
        "socials": {
            "linkedin": "linkedin.com/in/serahrashidi/",
            "website": "https://www.rhu.edu.lb/home"
        }
    },
    {
        "id": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
        "firstName": "Amani",
        "lastName": "Raad",
        "fullName": "Amani Raad",
        "tagLine": "Associate professor at the Lebanese University engineering faculty branch I",
        "company": "Lebanese University engineering faculty branch I",
        "bio": "Amani RAAD obtained her PhD in Information Technology and Systems from the University of Technology of Compiegne in France. After graduation, she was a Research and teaching Assistant in the Heudyasic Laboratory in France. She has been a part-time Assistant Professor in the Electrical and Electronics Engineering Department, Lebanese University, engineering faculty. Since July 2014, she has been a full-time assistant professor at the same department. Her research interests include mainly Digital Signal Processing and Artificial Intelligence for several applications and mainly for predictive maintenance. She received the award of the distinguished professor from the Lebanese University in 2019.",
        "profilePicture": "https://sessionize.com/image/0b02-400o400o1-WuN4JSxYEF1P1JbiTsffRt.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/amani-raad-60738384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            "website": "ul.edu.lb"
        }
    },
    {
        "id": "089bb622-9b5d-436f-b531-e1a653264f51",
        "firstName": "Omar",
        "lastName": "Chaaban",
        "fullName": "Omar Chaaban",
        "tagLine": "Senior Software Engineer at DTP",
        "company": "DTP",
        "bio": "Senior software engineer with 15+ years of experience developing and architecting enterprise-grade applications using the Java ecosystem. Skilled in leading technical teams, designing complex distributed systems, and driving end-to-end solution delivery.",
        "profilePicture": "https://sessionize.com/image/3d6c-400o400o1-Qru82oMapiiNwdniQxeQAX.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/omarchaaban",
            "website": "https://dtp.ae/"
        }
    },
    {
        "id": "08589cfa-0867-493b-b32b-66882fb54314",
        "firstName": "Elias",
        "lastName": "Atik",
        "fullName": "Elias Atik",
        "tagLine": "Co-founder and CEO/CTO at Webspot",
        "company": "Webspot",
        "bio": "Co-founder and CEO of Webspot, Lebanon\u2019s leading Generative AI solutions firm, Elias has spent more than a decade building and deploying end-to-end AI systems. A passionate instructor and speaker, he delivers practical AI education to both non-specialists and technical teams across sectors. He is driven by a mission to make AI accessible to every company, organization, and individual.",
        "profilePicture": "https://sessionize.com/image/09dc-400o400o1-Q6ee5cXhvGRy6at28qRB7m.png",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/eliasatik/",
            "website": "https://webspot me",
            "instagram": "https://Instagram.com/elias.atik"
        }
    },
    {
        "id": "ffc51179-bbaf-4e96-8101-1a770db74061",
        "firstName": "Mohamad",
        "lastName": "Tabikh",
        "fullName": "Mohamad Tabikh",
        "tagLine": "Netwatch-co founder - it consultant",
        "company": "Netwatch",
        "bio": "Mohamad \u2013 Strategic IT Consultant, Netwatch  \nMohamad is a Strategic IT Consultant specializing in cloud computing, MSP solutions, and digital transformation. He advises hospitals, universities, and enterprises on building secure, scalable, and vendor\u2011independent infrastructures. At DevFest, he bridges technical depth with practical impact, showcasing real\u2011world tools like Zabbix, Acronis, and Nextcloud alongside Google services to empower developers, students, and institutions.",
        "profilePicture": "https://sessionize.com/image/f1e4-400o400o1-PxH3w2BXWdXq5WFK9mM1QF.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/mohamad-tabikh-a907b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "website": "www.netwatchlb.com"
        }
    },
    {
        "id": "7b455539-7556-477b-9d3b-bec814e5f8b8",
        "firstName": "Nicolas",
        "lastName": "El Khoury",
        "fullName": "Nicolas El Khoury",
        "tagLine": "Technology Consultant | Lecturer - Lebanese American University",
        "company": "",
        "bio": "With 11 years of international experience, I specialize in designing and delivering reliable, and scalable web-based systems. My work has empowered startups, enterprises, and everything in between to grow faster, scale smarter, and operate more effectively.\n\nWhat sets me apart is my ability to bridge the gap between business, product, and technology. Having played many roles, including being an engineer, consultant, team leader, manager, and university lecturer, I bring both strategic vision and execution power to the table.\n\nToday I work independently, offering expertise and experience to anyone who wants to turn technology into a strategic advantage without the jargon or vendor lock\u2011in.\n\nI believe in building long-term relationships based on trust, transparency, and mutual respect.",
        "profilePicture": "https://sessionize.com/image/18a5-400o400o1-hYi16Tq9gZNwxSSw3Vuadi.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/nicolas-el-khoury/",
            "website": "https://devopsbeyondlimits.com/"
        }
    },
    {
        "id": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
        "firstName": "Omar",
        "lastName": "Chouman",
        "fullName": "Omar Chouman",
        "tagLine": "Senior Software Engineer | AWS Certified",
        "company": "Aspire Software",
        "bio": "Omar is a self-taught, dynamic, highly motivated individual with a passion for learning and solving problems. I work in teams and individually, driving quality and consistency throughout all phases of software development projects. Partner with developers, analysts, QA, and support engineers throughout the product lifecycle to produce high-quality, user-friendly, scalable, and bug-free software.\n\nOmar has worked on a diverse range of projects, from building scalable microservices to integrating AI and machine learning models into production environments. His expertise spans various cloud platforms, with a particular focus on AWS, where he has implemented numerous serverless applications that are both cost-effective and highly scalable.\n\nWhen he's not coding or speaking at events, Omar enjoys exploring the latest advancements in tech, mentoring aspiring developers, and contributing to open-source projects.",
        "profilePicture": "https://sessionize.com/image/b90e-400o400o1-H8uVDSn3oNFpSnE175bLKJ.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/omarchouman/",
            "twitter": "https://twitter.com/OmarChouman5",
            "website": "https://www.aspiresoftware.com/",
            "instagram": "https://www.instagram.com/omar__chouman/",
            "blog": "https://medium.com/@omarchouman"
        }
    },
    {
        "id": "843f8376-0c95-40cd-9b31-1e8b8939e59d",
        "firstName": "Mohammad",
        "lastName": "Omar",
        "fullName": "Mohammad Omar",
        "tagLine": " Technology Executive | CTO | Cloud & DevOps Leader",
        "company": "Drive Terra",
        "bio": "As Chief Technology Officer at Drive Terra, I focus on leveraging cloud and DevOps expertise to drive technological innovation and operational efficiency. My role builds on prior experience as Digital Transformation Manager at TEC-Tripoli Entrepreneurs Club, where I developed IT policies, customized software, and migrated technical operations to the cloud. \n\nWith a Master's degree in Computer Science from Arizona State University, I bring a strong foundation to roles requiring IT strategy and interpersonal communication. Passionate about aligning technology with organizational goals, I aim to foster innovation while enabling teams and stakeholders to thrive.",
        "profilePicture": "https://sessionize.com/image/9e00-400o400o1-KwNz8QdhoAfMUaMJkJE2MD.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/mohammad0omar/",
            "twitter": "https://twitter.com/mohamad0omar",
            "website": "driveterra.com",
            "instagram": "https://www.instagram.com/mohammadomar40/",
            "blog": "https://mohammad-omar.com/"
        }
    },
    {
        "id": "ad560724-c409-406a-908a-f33583684a21",
        "firstName": "Nisrine",
        "lastName": "Bou Ghannam",
        "fullName": "Nisrine Bou Ghannam",
        "tagLine": "CEO & Founder of Techlarious",
        "company": "Techlarious",
        "bio": "Nisrine Bou Ghannam is a passionate tech entrepreneur and educator, dedicated to empowering youth, women, and communities through innovative digital solutions and STEM education. She is the CEO of Techlarious and a STEM Certified\u2122 Master Trainer. She completed an internship at Apple, Cupertino, USA in September 2024. Nisrine is also a TechWomen 2024 Alumna, MongoDB Creator & Community Lead, Tech & Education Strategist, Product Manager, and co-founder of the Lebanese TechWomen Council.",
        "profilePicture": "https://sessionize.com/image/9829-400o400o1-KsKCtvA3PL8DYk1AS4se6K.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/company/107960122/admin/dashboard/",
            "website": "https://www.techlarious.academy/"
        }
    },
    {
        "id": "5c886983-8e34-423a-ae2a-a6c222657667",
        "firstName": "Majd",
        "lastName": "Chahine",
        "fullName": "Majd Chahine",
        "tagLine": "Founder of CBI (Corporate Business Intelligence) & Manager @ Forvis Mazars",
        "company": "CBI (Corporate Business Intelligence)",
        "bio": "Manager - Business Intelligence & Data Analysis",
        "profilePicture": "https://sessionize.com/image/81c7-400o400o1-YYtjyrv97iPAV46AheWqhT.png",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/majdchahine/",
            "website": "https://www.rcl-group.com/en/cBI-Business-intelligence/"
        }
    },
    {
        "id": "2bc79d2f-0b1d-4d69-9894-4e1deaff9482",
        "firstName": "Nader",
        "lastName": "Bakir",
        "fullName": "Nader Bakir",
        "tagLine": "Assistant professor BAU",
        "company": "",
        "bio": "Nader Bakir earned his Ph.D. in Image Processing and Artificial Intelligence (AI) from INSA Rennes (IETR-France) in 2020. Combining his robust academic foundation with over five years of industry experience, he is a specialist in key technological areas such as Deep Learning, Data Analysis, and ERP. He currently serves as an Assistant Professor at BAU University in Lebanon, focusing his research primarily on the fields of Deep Learning and Image Processing.",
        "profilePicture": "https://sessionize.com/image/be8e-400o400o1-G4kEVhftBMePdAG7hSDeN1.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/nader-b-09a1aa72/"
        }
    },
    {
        "id": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
        "firstName": "Robert",
        "lastName": "Mansour",
        "fullName": "Robert Mansour",
        "tagLine": "Commander of Signal Corps - Lebanese Armed Forces | Brigadier General Engineer PhD",
        "company": "",
        "bio": "Experienced Communications Specialist and researcher in International Strategy, Technology, & Security, with a demonstrated history of working in the Telecom applications, Mission Critical Networks, Military Communications & Services. Skilled in Private Mobile Radio (PMR) & Universal Mobile Telecommunications System (UMTS), Project Management, Business Support System (BSS), Defense Acquisition Systems, and Network Design, Technology Evolution & Security, and Domain Awareness. Entrepreneurship competencies & engineering professional with a PhD focused in Cyber Security & Cyber Deterrence within International Relations and Diplomacy from CEDS - Centre d'\u00c9tudes Diplomatiques et Strat\u00e9giques- Paris, part of OMNES Education",
        "profilePicture": "https://sessionize.com/image/9932-400o400o1-WtsBarwP68FLgG7CtjhRdJ.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/bgen-robert-mansour-phd-7847a715"
        }
    },
    {
        "id": "fa16bb05-09ae-429b-90d1-178f20ed8e2e",
        "firstName": "Bassel",
        "lastName": "Al Ayoubi  ",
        "fullName": "Bassel Al Ayoubi",
        "tagLine": "General Director of Investment and Maintenance - Ministry of Telecommunication",
        "company": "",
        "bio": "General Director of Investment and Maintenance- Ministry of Telecommunication",
        "profilePicture": "https://sessionize.com/image/ebe1-400o400o1-HJXGZRVQDXP8E3NtjJux9K.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/bayoubi/"
        }
    },
    {
        "id": "a0981f90-70ea-4023-a1d6-b537899b4e73",
        "firstName": "Dr. Ali ",
        "lastName": "El Masri",
        "fullName": "Dr. Ali  El Masri",
        "tagLine": "",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/acab-400o400o1-Ycf1PS9uBLvuKFQLbqrYKT.jpg",
        "socials": {}
    },
    {
        "id": "2ca1f722-a92b-407a-b4a1-6a43c08ea68a",
        "firstName": "Elias",
        "lastName": "Dagher",
        "fullName": "Elias Dagher",
        "tagLine": " Major IT Engineer, Internal Security ",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/8ebd-400o400o1-3RfjcDaKAHMRQp6aD4PE7n.jpg",
        "socials": {}
    },
    {
        "id": "e060d7fd-6fec-426f-8978-07783bdd3896",
        "firstName": "Sally",
        "lastName": "Harrouk",
        "fullName": "Sally Harrouk",
        "tagLine": "Certified public accountant",
        "company": "Basics for Auditing& Accounting",
        "bio": "Certified public accountant-founder of Basics for Accounting&Auditing- Co founder of Career lab",
        "profilePicture": "https://sessionize.com/image/bdd9-400o400o1-Tfsbo6cDrJ8iWNH2C2ghot.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/sally-harrouk-198478220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "website": "-"
        }
    },
    {
        "id": "26348375-0c9a-4c72-b32e-b6bbd455b060",
        "firstName": "Mohammad",
        "lastName": "Ahdab",
        "fullName": "Mohammad Ahdab",
        "tagLine": "DAS 360 Co-Founder- General Manager. , Degree in Law, EMBA , Scout Leader, Social Worker.",
        "company": "",
        "bio": "Born in Tripoli Lebanon in 1973, Graduated from Lebanese University Law Faculty in 1997. \nStarted to work for the Public Sector in 1998. \nin 2010 started teaching Business Law at AUL university and stayed for 10 years in delivering relevant legal information for Business students. \nstarted as a partner in DAS 360 in 2019, since then found my passion in Business, that's why i started my EMBA at UOB in 2021. \nmy ambition is always one thing SUCCESS. ",
        "profilePicture": "https://sessionize.com/image/4d07-400o400o1-S5C5TSYWWCAwZgNhm71vEW.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/mohamad-al-ahdab-emba-7b191670/"
        }
    },
    {
        "id": "95f10b13-6911-4611-961c-bde0294e8654",
        "firstName": "Rami",
        "lastName": "Assoum",
        "fullName": "Rami Assoum",
        "tagLine": "VAS head of department at Alfa Telecom",
        "company": "",
        "bio": "Director at one of the mobile operators in lebanon\n\nhe participated as as speaker in multiple telecoms conferences in UK,  dubai,  newyork,  and lebanon \n\nauthor of many articles on economic policies in Lebanese and international journals\n\n\nEducation: \n\n\nBachelor of engineering in telecoms and computer,  lebanese university\n\n\nMasters in technology management,  UCD Dublin,  Ireland\n\n\nMasters in Political Economy,  Kings colllege London,  UK",
        "profilePicture": "https://sessionize.com/image/4590-400o400o1-f24EyGpnw3KTGNSkWb6uY5.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/rami-assoum-8a5b60157/"
        }
    },
    {
        "id": "86ea4325-df87-47ff-8f93-7ad5f5188201",
        "firstName": "Jonah",
        "lastName": "Tebaa",
        "fullName": "Jonah Tebaa",
        "tagLine": "Marketing and AI Solutions Director | Digital Transformation Leader | Entrepreneur",
        "company": "",
        "bio": "With over 20 years of experience in marketing and business innovation, I specialize in leveraging AI to revolutionize strategies and deliver measurable results.\n\nAs the co-founder of Webspot, I\u2019ve helped businesses in the MENA region enhance their operations through AI-driven marketing, achieving tangible outcomes like reducing client acquisition costs by 43% and increasing ROI by over 340%. From directing startups to become nation leaders in their industry in less than a year, to spearheading campaigns that increased online sales efficiency by over 45%, to training global teams in AI adoption, my focus is always on driving growth through data-driven insights and cutting-edge solutions.\n\nWhether it\u2019s mentoring startups, consulting SMEs, or speaking on the transformative power of AI, I bring a visionary, results-oriented approach to every challenge. Let\u2019s connect to explore how AI and marketing innovation can unlock your business's full potential.",
        "profilePicture": "https://sessionize.com/image/d3b2-400o400o1-XeeNKySaso1iKsZKLbsetr.jpg",
        "socials": {
            "linkedin": "https://www.linkedin.com/in/jonahtebaa/"
        }
    },
    {
        "id": "43e481ba-cf96-4c37-8abd-f5dc87a75530",
        "firstName": "Dr. Khaled",
        "lastName": "Dassouki",
        "fullName": "Dr. Khaled Dassouki",
        "tagLine": "",
        "company": "",
        "bio": "Khaled Dassouki is a cybersecurity researcher and Senior Lecturer at the American University of Beirut. He holds a PhD in Cybersecurity with a focus on intrusion detection and has over 18 years of experience in telecom, AI, and cloud solutions. As co-founder of Ubility AI, he has led innovative projects in AI and DevOps, alongside publishing research on network security and intrusion detection. He is fluent in Arabic, English, and French.\n\n",
        "profilePicture": "https://sessionize.com/image/c736-400o400o1-aasPZtSsMYAAwFm49QoAkC.jpg",
        "socials": {}
    },
    {
        "id": "5a5cc937-6540-4f05-ba7d-1bb939b06e0a",
        "firstName": "Majd",
        "lastName": "Dhainy",
        "fullName": "Majd Dhainy",
        "tagLine": "Co-Founder, Semicolon Security",
        "company": "",
        "bio": "Cybersecurity Researcher with a strong background in software engineering, specializing in securing web services, mobile applications, APIs, and addressing issues from requirements to deployment. \n\nAcknowledged for uncovering global security vulnerabilities, listed on bug bounty Hall of Fames for Meta, Google, LinkedIn, Medium, Revolut, Trivago, and more.\n\nMerged cybersecurity skills with over three years of hands-on experience in backend development, contributing significantly to projects serving millions.",
        "profilePicture": "https://sessionize.com/image/e047-400o400o1-BjxWc51T49scc4oj149cCT.png",
        "socials": {
            "linkedin": "linkedin.com/in/majddhainy"
        }
    },
    {
        "id": "00c8cf27-41d6-4c1c-8250-81adcbc82263",
        "firstName": "Kassem",
        "lastName": "Bazzoun",
        "fullName": "Kassem Bazzoun",
        "tagLine": "Co-Founder, Semicolon Security",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/cc48-400o400o1-njP9HVgLSE1itqpNYNjyGt.png",
        "socials": {}
    },
    {
        "id": "aaeba722-0aab-45b7-8679-7338efc49fbd",
        "firstName": "Hassan",
        "lastName": "Diab",
        "fullName": "Hassan Diab",
        "tagLine": "Managing Director and Co-Founder of Aveo Studios, Co-Founder of Career Lab",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/dc5d-400o400o1-MF1scwXjvUxmneCp7xk1xD.jpg",
        "socials": {}
    },
    {
        "id": "788709c5-d070-4972-969b-fe783536f6f8",
        "firstName": "Karim",
        "lastName": "Soueissi",
        "fullName": "Karim Soueissi",
        "tagLine": "Business Consultant & Career Coach",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/d353-400o400o1-4iuK2WzTQCjf6Kz1WD1HFt.jpg",
        "socials": {}
    },
    {
        "id": "1f119072-1d65-4d1d-ba7d-170e66f1e05b",
        "firstName": "Dania",
        "lastName": "Hallab",
        "fullName": "Dania Hallab",
        "tagLine": "Managing Partner at KnD Consulting, The Analyst",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/0bc6-400o400o1-RL4wXWRgBELiNbs7oqsxa.jpg",
        "socials": {}
    },
    {
        "id": "60fd3502-9d97-4218-b206-71b03694c19b",
        "firstName": "Sally",
        "lastName": "Harrouk",
        "fullName": "Sally Harrouk",
        "tagLine": "Certified Public Accountant, Founder of Basics for Accounting & Auditing, Co-founder of Career Lab",
        "company": "",
        "bio": "",
        "profilePicture": "https://sessionize.com/image/ca30-400o400o1-HJf2GRt8SMa39kQNUoU3M3.jpg",
        "socials": {}
    }
],
    schedule: {
    "timeSlots": [
        "08:30 AM - 09:30 AM",
        "09:30 AM - 10:30 AM",
        "10:30 AM - 11:10 AM",
        "11:10 AM - 11:50 AM",
        "11:50 AM - 12:30 PM",
        "12:30 PM - 12:50 PM",
        "12:50 PM - 01:25 PM",
        "01:25 PM - 02:00 PM",
        "02:00 PM - 02:35 PM",
        "02:35 PM - 03:10 PM",
        "03:10 PM - 03:50 PM"
    ],
    "auditoriums": [
        "Main Auditorium",
        "B1008",
        "B105",
        "Workshops Auditorium"
    ]
},
    sponsors: [
        {
            name: "Semicolon Security",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/semsec-logo_Mkjxdc3.png",
            tier: "Gold",
            url: "https://semsec.org/home/",
            description: "A Lebanese cybersecurity company and training academy focused on ethical hacking, security workshops, penetration testing services and educational programs.",
            socials: {
                website: "https://semsec.org/home/"
            }
        },
        {
            name: "DAS360",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/DAS360_onDF0iW.png",
            tier: "Gold",
            url: "https://das-360.net/",
            description: "Delivering 360\u00B0\nDAS 360 is a driven and data-focused digital marketing firm that specializes in crafting comprehensive online solutions to enhance the visibility and success of companies in GCC.",
            socials: {
                website: "https://das-360.net/"
            }
        },
        {
            name: "AIY Experts Solutions",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Photo%2520from%2520%2540bed%2520%25283%2529-Photoroom_59T0KnY.png",
            tier: "Silver",
            url: "https://www.aiyexpertsolutions.com/",
            description: "AIY Expert Solutions is a 40+ member company with a vision to continuously gather talent, knowledge, and expertise to build a leading enterprise in various markets.\nThis talent, combined with expert-level practices, helped us create a specialized software that dominates the billion-dollar reselling industry and is used by tens of thousands of clients.\nIt’s been featured on CNBC, Yahoo Finance, Vice, The Globe, Forbes, and The Mail.",
            socials: {
                website: "https://www.aiyexpertsolutions.com/"
            }
        },
        {
            name: "Khwarizme",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Logo%2520-%2520Khwarizme%2520%25281%2529-Photoroom_PCz8iEh.png",
            tier: "Bronze",
            url: "https://www.khwarizme.com/",
            description: "At Khwarizme LB, we believe in the power of knowledge, innovation, and community.\n\nOur mission is to empower youth and entrepreneurs through education and hands-on experiences.\n\nFrom training programs and workshops to venture building and mentorship, we create real opportunities.\n\nWe connect students, startups, and professionals to resources that help them grow and thrive.\n\nRooted in Lebanon yet open to the world, we aim to build solutions with lasting impact.",
            socials: {
                website: "https://www.khwarizme.com/"
            }
        },
        {
            name: "NavyBits",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/navyBits_logo_final_2048_QPkBhgA.png",
            tier: "Bronze",
            url: "https://www.navybits.com/",
            description: "At NavyBits, our mission goes beyond delivering technology, we are here to empower businesses, strengthen communities, and bring happiness to families. We believe that innovation should be simple, effective, and accessible to everyone.\nBy providing tools that streamline operations and drive growth, we help our clients achieve success while creating a positive impact that extends far beyond their businesses. Together, we\u2019re building a future where technology is the foundation of stronger, happier",
            socials: {
                website: "https://www.navybits.com/"
            }
        },
        {
            name: "Career Lab (Aveo)",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/careerLAB_white-modified_60sZtTa.png",
            tier: "Bronze",
            url: "https://www.careerlab.space/",
            description: "Experiment. Learn. Evolve. Level Up Your Career with Career Lab\n\nWhether you're just starting out, growing your career, or running a business. Career Lab helps you master the software, skills, and strategies to stay ahead in today\u2019s fast-changing world",
            socials: {
                website: "https://www.careerlab.space/"
            }
        },
        {
            name: "Netwatch",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Netwatch-Logo_I7QlxVv.png",
            tier: "Bronze",
            url: "https://www.linkedin.com/company/netwatch-lb/about/",
            description: "NETWATCH is an IT Company was founded in 2007 in Tripoli, Lebanon, with over ten years of cumulative experience from its founding partners. The company is known for providing high-quality technical support services to businesses, as well as selling computers, laptops, accessories, surveillance systems, server systems, and cloud computing services. NETWATCH Technology always strives to meet the needs of its customers and achieve their complete satisfaction.\n\nThe company operates in four main area",
            socials: {
                linkedin: "https://www.linkedin.com/company/netwatch-lb/about/"
            }
        },
        {
            name: "Space Technology",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/space%2520technology%2520logo%2520%25281%2529-Photoroom_fZQh7Go.png",
            tier: "Bronze",
            url: "https://www.facebook.com/p/Space-Technology-100063717213064/",
            description: "Sales and maintenance of all computers and laptops, based in Tripoli",
            socials: {
                website: "https://www.facebook.com/p/Space-Technology-100063717213064/"
            }
        },
        {
            name: "Energy Plus",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Energy%2520Drink%2520Logo%2520%25282%2529_hyBfsvW.png",
            tier: "Bronze",
            url: "https://www.instagram.com/energypluslb/?hl=en",
            description: "Lebanese Energy drink, Naturally Powered by Guarana",
            socials: {
                website: "https://www.instagram.com/energypluslb/?hl=en"
            }
        },
        {
            name: "Qabassat Computers",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/QabassatComputers_LRRTlLU.png",
            tier: "Bronze",
            url: "https://qabassat.computer/",
            description: "Qabassat is an online shopping platform offering computers, electronics, gadgets, toys, home and stationary accessories.",
            socials: {
                website: "https://qabassat.computer/"
            }
        },
        {
            name: "NIC Group (Network and IT Consultancy)",
            logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/NIC-Photoroom_H2Lku2o.png",
            tier: "Bronze",
            url: "https://nicgroup.co",
            description: "NIC Group (Network and IT Consultancy) \n\nNIC Group is a leading IT consultancy firm specializing in network and IT services, including cybersecurity, network management, and IT infrastructure. Our expert developer teams can create any app, website, or solution tailored to your needs. With a focus on keeping your business connected, secure, and efficient, we deliver reliable, scalable, and secure IT solutions to help you achieve your business goals.",
            socials: {
                website: "https://nicgroup.co"
            }
        },
        {
            name: "Beirut Arab University",
            logo: "https://alefliban.org/wp-content/uploads/2015/02/BAU.gif",
            tier: "Host",
            url: "https://www.bau.edu.lb/",
            description: "Beirut Arab University is a private Lebanese higher education institution...",
            socials: {
                linkedin: "#",
                website: "https://www.bau.edu.lb/"
            }
        },
        {
            name: "Google For Developers",
            logo: "https://devfest25.gdglebanon.com/img/sponsors/googlefordevelopers.png", // Placeholder
            tier: "Main Supporter",
            url: "#",
            description: "Google's official developer platform offering APIs, SDKs, tools, documentation, training, and support for software developers worldwide.",
            socials: {
                linkedin: "#",
                website: "https://developers.google.com"
            }
        }
    ]
};

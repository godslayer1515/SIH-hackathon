const useCases = [
    {
        id: 1,
        title: 'User Registration',
        description: 'User authentication, user profile management, database storage for user information.',
    },
    {
        id: 2,
        title: 'Legal Service Provider Onboarding',
        description: 'Profile creation, service listing, pricing setup, availability management, and publishing services.',
    },
    {
        id: 3,
        title: 'Client Search for Legal Service Providers',
        description: 'Legal service provider listings, user interface for searching and filtering.',
    },
    {
        id: 4,
        title: 'Contact Legal Service Provider',
        description: 'User-to-user messaging, notification system for message alerts.',
    },
    {
        id: 5,
        title: 'Accept/Reject Case Requests (Legal Service Providers)',
        description: 'Notification system for incoming case requests, user interface for managing requests.',
    },
    {
        id: 6,
        title: 'Handle Legal Cases (Legal Service Providers)',
        description: 'Real-time chat/messaging for case discussions, file/document sharing, case management tools.',
    },
    {
        id: 7,
        title: 'Client Case Management',
        description: 'User interface for initiating cases, selecting legal service providers, monitoring case progress, and completing cases.',
    },
    {
        id: 8,
        title: 'Payment Processing',
        description: 'Integration with a secure payment gateway, user financial profiles, transaction tracking, and payout processing.',
    },
    {
        id: 9,
        title: 'Review and Rating System',
        description: 'User profiles, case completion, and user interface for leaving reviews and ratings.',
    },
    {
        id: 10,
        title: 'Notifications and Alerts',
        description: 'Real-time messaging, case updates, payment alerts, Email and SMS notifications.',
    },
    {
        id: 11,
        title: 'Reporting and Analytics',
        description: 'Data collection, analytics tools, and user behavior tracking.',
    },
    {
        id: 12,
        title: 'Help Center and Support',
        description: 'Knowledge base, user support team, and user interface for seeking assistance.',
    },
];

const dependencies = [
    {
        id: 1,
        title: 'Authentication and Authorization',
        description: 'Use of Firebase Authentication or enhanced alternative for secure user registration and access control.',
    },
    {
        id: 2,
        title: 'Database Management',
        description: 'Implement a database (Firebase Realtime Database or Firestore) for storing user data, legal service provider profiles, client information, case details, and reviews.',
    },
    {
        id: 3,
        title: 'Messaging and Notifications',
        description: 'Utilize a real-time messaging system (e.g., Firebase Cloud Messaging) and notifications to enable communication between users and keep them informed. Notifications include email and SMS services for sending important updates and alerts to users.',
    },
    {
        id: 4,
        title: 'Payment Gateway Integration',
        description: 'Integrate a secure payment gateway (e.g., Stripe, PayPal) for handling financial transactions and transaction tracking between clients and legal service providers.',
    },
    {
        id: 5,
        title: 'Search and Matching Algorithms',
        description: 'Develop advanced search and matching algorithms to connect clients with suitable legal service providers based on their needs, expertise, and location.',
    },
    {
        id: 6,
        title: 'User Interface and User Experience (UI/UX)',
        description: 'Design user-friendly interfaces for user registration, profile management, search, messaging, and case management.',
    },
    {
        id: 7,
        title: 'Security and Data Privacy',
        description: 'Implement robust security measures to protect user data and ensure compliance with data protection regulations.',
    },
    {
        id: 8,
        title: 'Analytics and Reporting Tools',
        description: 'Use analytics tools (e.g., Google Analytics) to collect and analyze user behavior data for continuous platform improvement.',
    },
    {
        id: 9,
        title: 'Support Team and Knowledge Base',
        description: 'Establish a support team to assist users and create a knowledge base with FAQs and guides.',
    },
    {
        id: 10,
        title: 'Case Management Tools',
        description: 'Create tools and interfaces for initiating, tracking, and managing legal cases. Along with Implementing file or document storage and sharing capabilities for handling legal case documents.',
    },
    {
        id: 11,
        title: 'Case File Management',
        description: 'Implement file/document storage and sharing capabilities for handling legal case documents.',
    },
    {
        id: 12,
        title: 'Legal and Regulatory Compliance',
        description: 'Stay informed adhere to legal and regulatory requirements specific to the legal services industry in India.',
    },
];

const dataPoints = [
    {
        id: 1,
        heading: "Large and Growing Legal Services Market",
        desc: "We recognize the vast and diverse legal services market in India, with a high demand for legal professionals and services. Our platform aims to serve individuals, businesses, startups, and government entities seeking legal assistance."
    },
    {
        id: 2,
        heading: "Fragmented and Unorganized Market",
        desc: "The team acknowledges the challenges posed by the fragmented and unorganized legal services market in India. Through our platform, we intend to bring structure and organization to this sector thereby simplifying the process for clients to connect with legal professionals."
    },
    {
        id: 3,
        heading: "Increased Accessibility",
        desc: "Accessibility to legal assistance is a top priority for our team. Aiming to significantly enhance accessibility by providing an online marketplace for legal services. This will particularly benefit individuals and businesses in remote areas with limited access to legal experts."
    },
    {
        id: 4,
        heading: "Transparency and Trust",
        desc: "Building trust is at the core of our project. The team is committed to establishing a transparent and accountable platform that includes user reviews and ratings. This is an initiative to addresses trust issues which is often encountered in this sector."
    },
    {
        id: 5,
        heading: "Efficiency and Convenience",
        desc: "Efficiency and convenience are the promises we make to our users. Clients will have the ease of searching for legal service providers, check the reviews, and engaging services online, ensuring a hassle-free experience."
    },
    {
        id: 6,
        heading: "Monetization Opportunities",
        desc: "Monetization is essential for our platform's resilience. We envision generating revenue through diverse strategies, including subscription plans for legal service providers, transaction fees for successful cases, premium listings, and advertising opportunities."
    },
    {
        id: 7,
        heading: "Data Insights",
        desc: "Our team recognizes the power of data. By collecting and analyzing data on legal service usage and user behavior, we empower our service providers with valuable insights. This enables them to curate their services and elevate client satisfaction."
    },
    {
        id: 8,
        heading: "Scalability",
        desc: "The growth trajectory extends beyond boundaries. As our platform gains momentum, we aspire to scale our impact by expanding to different parts of the country and explore opportunities in neighboring countries with parallel legal systems."
    },
    {
        id: 9,
        heading: "LegalTech Trends",
        desc: "Innovation is the driving force behind our platform. We remain at the forefront of LegalTech trends, including AI-driven legal assistance, blockchain for smart contracts, and online dispute resolution, to ensure we deliver cutting-edge services."
    },

];

const headerlinks = [
    {
        id: 1,
        name: "home",
    },
    {
        id: 2,
        name: "problem",
    },
    {
        id: 3,
        name: "cull",
    },
    {
        id: 4,
        name: "usecases",
    },
    {
        id: 5,
        name: 'dependencies',
    },
    {
        id: 6,
        name: "team",
    },
    {
        id: 7,
        name: "flowchart",
    },

]

const services = {
    corporate: [
        {
            name: 'Business Incorporation',
            description: 'Assist in registering and incorporating businesses with the appropriate legal structure. Ensure compliance with legal requirements for corporate entities.',
        },
        {
            name: 'Contract Drafting and Review',
            description: 'Provide legal expertise in drafting, reviewing, and negotiating contracts, such as partnership agreements, vendor contracts, and employment contracts. Ensure legal compliance and protect corporate interests.',
        },
        {
            name: 'Intellectual Property Protection',
            description: 'Help corporate clients protect their intellectual property rights, including trademark and copyright registration, patent applications, and intellectual property litigation. Safeguard valuable intangible assets.',
        },
        {
            name: 'Mergers and Acquisitions',
            description: 'Assist in mergers, acquisitions, and corporate restructuring processes. Conduct due diligence, negotiate deals, and ensure legal compliance throughout the transaction.',
        },
        {
            name: 'Taxation and Compliance',
            description: 'Provide tax advisory services, help corporations navigate complex tax regulations, and ensure compliance with tax laws. Optimize tax strategies to minimize liabilities.',
        },
    ],
    individual: [
        {
            name: 'Family Law',
            description: 'Handle family law cases, including divorce, child custody, spousal support, and adoption. Advocate for fair resolutions and protect family interests.',
        },
        {
            name: 'Estate Planning',
            description: 'Assist individuals in creating wills, trusts, and estate plans to manage their assets and ensure the smooth transfer of wealth. Minimize estate taxes and legal complications.',
        },
        {
            name: 'Criminal Defense',
            description: 'Provide legal representation and defense for individuals facing criminal charges, including DUI, drug offenses, and white-collar crimes. Protect individual rights and ensure a fair trial.',
        },
        {
            name: 'Personal Injury Claims',
            description: 'Handle personal injury cases resulting from accidents, negligence, or malpractice. Pursue compensation for medical expenses, pain and suffering, and lost wages.',
        },
        {
            name: 'Real Estate Transactions',
            description: 'Assist in real estate transactions, including buying, selling, or leasing property. Ensure legal compliance, review contracts, and resolve disputes related to property.',
        },
    ],
};


export { useCases, dependencies, dataPoints, headerlinks, services };
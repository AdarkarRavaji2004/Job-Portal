const appData = {
    jobs: [
        { id: 1, title: "Senior Frontend Engineer", company: "Meta", location: "Remote", type: "Full-time", salary: "$150k - $220k", date: "2d ago" },
        { id: 2, title: "Software Development Engineer", company: "Amazon", location: "Seattle, WA", type: "Full-time", salary: "$130k - $190k", date: "1d ago" },
        { id: 3, title: "Backend Developer (Go)", company: "Stripe", location: "San Francisco, CA", type: "Full-time", salary: "$160k - $210k", date: "4h ago" },
        { id: 4, title: "Product Designer", company: "Airbnb", location: "Remote", type: "Contract", salary: "$110k - $150k", date: "3d ago" },
        { id: 5, title: "Machine Learning Engineer", company: "Google", location: "Mountain View, CA", type: "Full-time", salary: "$170k - $250k", date: "1w ago" }
    ],
    prep: {
        aptitude: [
            { title: "Quantitative Aptitude", problems: 25, difficulty: "Moderate" },
            { title: "Logical Reasoning", problems: 18, difficulty: "Hard" },
            { title: "Verbal Ability", problems: 12, difficulty: "Easy" }
        ],
        dsa: [
            { title: "Arrays & Hashing", problems: 15, difficulty: "Easy-Medium" },
            { title: "Two Pointers", problems: 10, difficulty: "Medium" },
            { title: "Sliding Window", problems: 8, difficulty: "Hard" },
            { title: "Trees & Graphs", problems: 20, difficulty: "Medium-Hard" }
        ],
        technical: [
            { title: "Operating Systems", notes: "Memory Management, Process Scheduling", level: "Core" },
            { title: "DBMS", notes: "Normalization, SQL, Transactions", level: "Core" },
            { title: "Computer Networks", notes: "OSI Model, TCP/IP, HTTP", level: "Core" }
        ],
        hr: [
            { title: "Common HR Questions", content: "Tell me about yourself, strengths/weaknesses." },
            { title: "Behavioral Prep", content: "STAR Method (Situation, Task, Action, Result)" }
        ]
    },
    companies: [
        { name: "Google", pattern: "Online Test -> 3-4 Technical Rounds -> HR Round", eligibility: "60% or 6.0 CGPA", syllabus: "DSA, OS, DBMS, System Design" },
        { name: "Microsoft", pattern: "Codility Test -> Technical Interview -> AA Round", eligibility: "70% or 7.0 CGPA", syllabus: "DSA, Algorithms, Problem Solving" },
        { name: "TCS", pattern: "NQT -> Technical -> HR", eligibility: "60% throughout", syllabus: "Aptitude, Basic Coding, Core Subjects" }
    ],
    dsaSheet: [
        { 
            topic: "Arrays", 
            problems: [
                { name: "Two Sum", link: "#", difficulty: "Easy" },
                { name: "Best Time to Buy and Sell Stock", link: "#", difficulty: "Easy" },
                { name: "Contains Duplicate", link: "#", difficulty: "Easy" },
                { name: "Product of Array Except Self", link: "#", difficulty: "Medium" }
            ]
        },
        { 
            topic: "Strings", 
            problems: [
                { name: "Valid Anagram", link: "#", difficulty: "Easy" },
                { name: "Longest Substring Without Repeating Characters", link: "#", difficulty: "Medium" },
                { name: "Group Anagrams", link: "#", difficulty: "Medium" }
            ]
        }
    ]
};

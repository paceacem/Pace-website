/**
 * PACE Website — Shared Data
 * Centralized content for future CMS / API migration
 */

const PACE_DATA = {
  site: {
    name: "PACE",
    fullName: "Project Association for Computer and Electronics",
    college: "Advanced College of Engineering and Management",
    collegeShort: "ACEM",
    department: "Department of Computer and Electronics Engineering",
    location: "Kalanki, Kathmandu, Nepal",
    email: "info@acem.edu.np",
    phone: "+977-1-XXXXXXX",
    established: "2000",
  },

  focusAreas: [
    { title: "Software Development", description: "Build web, mobile, and desktop applications with modern tools and best practices.", icon: "code" },
    { title: "Electronics", description: "Design circuits, analyze signals, and bring hardware ideas to life on the bench.", icon: "cpu" },
    { title: "Embedded Systems", description: "Program microcontrollers and integrate sensors for real-world control systems.", icon: "chip" },
    { title: "Robotics", description: "Combine mechanics, electronics, and software to create intelligent machines.", icon: "bot" },
    { title: "Artificial Intelligence", description: "Explore machine learning, computer vision, and data-driven engineering.", icon: "brain" },
    { title: "IoT & Innovation", description: "Connect devices, collect data, and prototype solutions for everyday challenges.", icon: "wifi" },
  ],

  events: [
    {
      id: "protobytes-hackathon",
      title: "Protobytes Hackathon",
      date: "Date: TBD",
      location: "ACEM Campus",
      category: "Hackathon",
      status: "upcoming",
      description: "Our flagship annual hackathon. Teams conceptualize and build hardware/software prototypes solving local challenges within a limited timeframe.",
      image: "",
    },
    {
      id: "embedded-workshop",
      title: "Embedded Systems Workshop",
      date: "Date: TBD",
      location: "ECE Lab",
      category: "Workshop",
      status: "upcoming",
      description: "Hands-on boot camp on microcontrollers, sensor interfacing, breadboard assembly, and introductory IoT integration.",
      image: "",
    },
    {
      id: "git-seminar",
      title: "Git & Collaborative Dev Seminar",
      date: "Date: TBD",
      location: "Seminar Hall",
      category: "Training",
      status: "upcoming",
      description: "Interactive seminar on Git workflows, merge conflict resolution, and effective open-source contribution practices.",
      image: "",
    },
    {
      id: "techfest-prep",
      title: "Techfest Preparation Camp",
      date: "Past Event",
      location: "ACEM Campus",
      category: "Competition",
      status: "past",
      description: "Intensive preparation sessions for national and international technical festivals including IIT Bombay Techfest.",
      image: "",
    },
  ],

  projects: [
    {
      id: "smart-campus",
      title: "Smart Campus Monitoring",
      category: "IoT",
      status: "In Progress",
      description: "IoT-based environmental monitoring system for campus labs with real-time dashboards.",
      technologies: ["ESP32", "MQTT", "React", "Node.js"],
      team: ["PACE Core Team"],
      github: "#",
      demo: "#",
      image: "",
    },
    {
      id: "line-follower",
      title: "Autonomous Line Follower",
      category: "Robotics",
      status: "Completed",
      description: "Competition-ready robot with PID control, sensor fusion, and modular chassis design.",
      technologies: ["Arduino", "C++", "IR Sensors", "Motor Drivers"],
      team: ["PACE Robotics"],
      github: "#",
      demo: "#",
      image: "",
    },
    {
      id: "ml-classifier",
      title: "Engineering Part Classifier",
      category: "AI",
      status: "In Progress",
      description: "Computer vision model to identify electronic components for lab inventory management.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      team: ["PACE AI Team"],
      github: "#",
      demo: "#",
      image: "",
    },
    {
      id: "pace-portal",
      title: "PACE Member Portal",
      category: "Software",
      status: "Planned",
      description: "Internal platform for event registration, project tracking, and resource sharing.",
      technologies: ["HTML", "CSS", "JavaScript"],
      team: ["PACE Web Team"],
      github: "#",
      demo: "#",
      image: "",
    },
  ],

  leadership: [
    { name: "Biraj Pandey", role: "President", photo: "", bio: "Leading PACE with a vision for practical engineering excellence and community growth.", linkedin: "#", github: "#", email: "" },
    { name: "Thaneshwor Chaudhary", role: "Vice President", photo: "", bio: "Coordinating club operations and fostering collaboration across technical domains.", linkedin: "#", github: "#", email: "" },
    { name: "Anushka Aryal", role: "Technical Lead", photo: "", bio: "Driving technical workshops, project mentorship, and hands-on learning initiatives.", linkedin: "#", github: "#", email: "" },
  ],

  members: [
    { name: "Biraj Pandey", role: "President", group: "Executive Committee", photo: "" },
    { name: "Thaneshwor Chaudhary", role: "Vice-President", group: "Executive Committee", photo: "" },
    { name: "Anushka Aryal", role: "Secretary", group: "Executive Committee", photo: "" },
    { name: "Apekchhaya Bhattarai", role: "Joint Secretary", group: "Executive Committee", photo: "" },
    { name: "Praphul Dahal", role: "Vice Secretary", group: "Executive Committee", photo: "" },
    { name: "Aayusha Kunwor", role: "Treasurer", group: "Executive Committee", photo: "" },
    { name: "Nistha Maharjan", role: "Member", group: "Core Team", photo: "" },
    { name: "Prem Rai", role: "Member", group: "Core Team", photo: "" },
    { name: "Kripa Shrestha", role: "Member", group: "Core Team", photo: "" },
    { name: "Sandesh Bhatta", role: "Member", group: "Core Team", photo: "assests/member/sandesh.jpg" },
    { name: "Santosh Kumar Tharu", role: "Member", group: "Volunteers", photo: "" },
    { name: "Aayush Paudel", role: "Member", group: "Volunteers", photo: "" },
    { name: "Dipansh Sunar", role: "Member", group: "Volunteers", photo: "" },
    { name: "Niraj Shah", role: "Member", group: "Volunteers", photo: "" },
    { name: "Suraj Joshi", role: "Member", group: "Volunteers", photo: "" },
    { name: "Abishma Lamichhane", role: "Member", group: "Volunteers", photo: "" },
    { name: "Ankita Adhikari", role: "Member", group: "Volunteers", photo: "" },
    { name: "John Dhakal", role: "Member", group: "Volunteers", photo: "" },
    { name: "Kishor Kafle", role: "Member", group: "Volunteers", photo: "" },
    { name: "Krijal Tandukar", role: "Member", group: "Volunteers", photo: "" },
    { name: "Mohan Paudel", role: "Member", group: "Volunteers", photo: "" },
    { name: "Pranil Tandukar", role: "Member", group: "Volunteers", photo: "" },
    { name: "Prasubh Pokharel", role: "Member", group: "Volunteers", photo: "" },
    { name: "Sakshyam Nepal", role: "Member", group: "Volunteers", photo: "" },
  ],

  facultyAdvisors: [
    { name: "Faculty Advisor", role: "Department Advisor", photo: "", bio: "Mentoring PACE members and supporting technical initiatives within the department.", linkedin: "#", github: "", email: "info@acem.edu.np" },
  ],

  gallery: [
    { id: 1, title: "Workshop Session", category: "workshops", image: "" },
    { id: 2, title: "Hackathon Team", category: "events", image: "" },
    { id: 3, title: "Robotics Demo", category: "projects", image: "" },
    { id: 4, title: "Techfest Preparation", category: "competitions", image: "" },
    { id: 5, title: "Campus Lab", category: "campus", image: "" },
    { id: 6, title: "Guest Lecture", category: "events", image: "" },
    { id: 7, title: "Circuit Building", category: "workshops", image: "" },
    { id: 8, title: "Project Showcase", category: "projects", image: "" },
  ],

  resources: [
    { title: "Embedded Systems Roadmap", type: "Roadmap", description: "Structured learning path from basics to advanced embedded projects.", link: "#" },
    { title: "Git & GitHub Workshop Slides", type: "Slides", description: "Presentation materials from our collaborative development seminar.", link: "#" },
    { title: "Arduino Starter Guide", type: "Documentation", description: "Beginner-friendly guide for microcontroller programming and prototyping.", link: "#" },
    { title: "PACE GitHub Organization", type: "Repository", description: "Open-source projects and code samples maintained by PACE members.", link: "https://github.com/" },
    { title: "Competition Prep Materials", type: "Study Resources", description: "Notes and references for national technical festival preparation.", link: "#" },
    { title: "Workshop Toolkits", type: "Downloads", description: "Software setups, libraries, and starter templates for workshops.", link: "#" },
  ],

  achievements: [
    { year: "2025", title: "Techfest Participation", description: "Represented ACEM at IIT Bombay Techfest with an interdisciplinary engineering project." },
    { year: "2024", title: "Annual Hackathon", description: "Successfully organized Protobytes with cross-department student participation." },
    { year: "2023", title: "Workshop Series", description: "Delivered 10+ technical workshops covering embedded systems, Git, and IoT." },
    { year: "Ongoing", title: "Community Growth", description: "Expanded membership and established collaboration with ACEM technical clubs including ARC." },
  ],

  timeline: [
    { year: "2000", title: "PACE Founded", description: "Established as the official technical association for Computer and Electronics students at ACEM." },
    { year: "2010s", title: "Workshop Culture", description: "Built a tradition of hands-on technical workshops beyond the regular curriculum." },
    { year: "2020s", title: "Competition Focus", description: "Expanded participation in national and international technical festivals." },
    { year: "Today", title: "Innovation Hub", description: "Growing into a multidisciplinary community spanning software, hardware, AI, and robotics." },
  ],

  coreValues: [
    { title: "Innovation", description: "Turn ideas into working prototypes through experimentation and creativity." },
    { title: "Collaboration", description: "Learn together, build together, and grow as a unified engineering community." },
    { title: "Excellence", description: "Pursue quality in every project, workshop, and competition we undertake." },
    { title: "Leadership", description: "Develop responsibility and initiative through real club roles and project ownership." },
    { title: "Practical Learning", description: "Bridge theory and practice with hands-on engineering experiences." },
    { title: "Discipline", description: "Maintain professionalism, consistency, and commitment to our mission." },
  ],

  joinFaqs: [
    { question: "Who can join PACE?", answer: "Any student enrolled in the Department of Computer and Electronics Engineering at ACEM who is passionate about technology and hands-on learning." },
    { question: "Do I need prior experience?", answer: "No. PACE welcomes curious beginners and experienced builders alike. Workshops and mentorship help members grow at their own pace." },
    { question: "What is the application process?", answer: "Express your interest through our Join page, attend an orientation session, and participate in an introductory activity with the team." },
    { question: "How much time does membership require?", answer: "Flexibility is built in. Active members typically contribute to events and projects they are passionate about." },
  ],

  contactFaqs: [
    { question: "How do I collaborate with PACE?", answer: "Reach out via our contact form or email for workshop partnerships, guest sessions, or project collaborations." },
    { question: "Where is PACE located?", answer: "We operate within the Department of Computer and Electronics Engineering at ACEM, Kalanki, Kathmandu." },
    { question: "Can alumni stay connected?", answer: "Yes. We plan to expand our alumni network to connect graduates with current members for mentorship and opportunities." },
  ],
};

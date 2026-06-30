// ============================================================
// portfolio.js — Single source of truth for all portfolio content.
// แก้ไขข้อมูลในไฟล์นี้ไฟล์เดียว เพื่ออัปเดตเนื้อหาทั้งเว็บ
// ============================================================

// ============================================================
// PERSONAL INFO — ข้อมูลส่วนตัวที่แสดงใน Hero Section
// ============================================================
export const personalInfo = {
  greeting: "Hi I am",
  name: "Orntharisa Kajornpongpaisan",
  role: "Data & Marketing Operations",
  resumeUrl: "/Resume - Orntharisa Kajornpongpaisan.pdf",
  profileImage: "/mook.png",                 // ← ใส่ path รูปโปรไฟล์ เช่น "/profile.jpg" (วางใน public/)
};

// ============================================================
// HERO STATS — ตัวเลขที่แสดงด้านล่าง Hero
// ============================================================
export const heroStats = [
  { value: "6+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "10+", label: "Projects Delivered" },
];

// ============================================================
// SOCIAL LINKS — ลิงก์ social media (แสดงเป็น icon ใน Hero)
// ============================================================
export const socialLinks = {
  email: "orntharisa.k@gmail.com",
  linkedin: "https://www.linkedin.com/in/orntharisa-kajornpongpaisan-952a091a9/", // ← ใส่ LinkedIn URL จริง
  github: "",                                        // ← ใส่ GitHub URL (ว่างไว้จะไม่แสดง)
  behance: "",                                       // ← ใส่ Behance URL (ว่างไว้จะไม่แสดง)
  instagram: "",                                     // ← ใส่ Instagram URL (ว่างไว้จะไม่แสดง)
  resumeUrl: "/Resume - Orntharisa Kajornpongpaisan.pdf",
};

// ============================================================
// SERVICES — บริการที่ต้องการแสดง (แสดงเป็น grid 3 columns × 2 rows)
// เพิ่ม/ลบ item ได้ตามต้องการ
// ============================================================
export const services = [
  {
    title: "Data Analysis",                    // ← ใส่ชื่อบริการ
    description: "Analyze data to uncover meaningful business insights.", // ← ใส่รายละเอียด
  },
  {
    title: "Customer Insights",
    description: "Understand customer needs through data and feedback.",
  },
  {
    title: "Market Research",
    description: "Support research projects with structured analysis and reporting.",
  },
  {
    title: "Data Quality Management",
    description: "Maintain accurate and reliable data for better outcomes.",
  },
  {
    title: "Decision Support",
    description: "Deliver insights that support effective business decisions.",
  },
  {
    title: "Project Coordination",
    description: "Coordinate cross-functional teams to drive project success.",
  },
];

// ============================================================
// SERVICES SECTION TEXT
// ============================================================
export const servicesSection = {
  title: "Areas of Expertise",                    // ← หัวข้อ section
  subtitle: "Turning customer feedback and operational data into meaningful insights that support better business decisions.", // ← คำอธิบาย section
};

// ============================================================
// ABOUT ME — ข้อมูลเกี่ยวกับตัวคุณ (หน้า About)
// ============================================================
export const aboutMe = {
  title: "About Me",
  subtitle: "Marketing Operations | Data Analysis & Customer Insights",
  bio: "I'm a data-driven marketing operations with 4+ years of experience in project coordination, operational reporting, as well as analyzing survey and customer feedback data.\n\nIn my recent role at GMO-Z.com NetDesign, I analyzed data and customer feedback to identify user behavior patterns, uncover improvement opportunities, and support data-driven marketing decisions. These insights were used to improve point exchange systems, enhance member engagement activities, and coordinate practical solutions with marketing and technical teams.\n\nPreviously at Haupcar, I worked in operations support, managing vehicle operations and improving key management processes to enhance operational efficiency.\n\nI'm now seeking to grow into a more specialized role in data analysis, customer insights, or marketing operations, where I can contribute to insight-driven decision-making and operational efficiency.",
  profileImage: "/mook.png",                     // ← ใส่รูป About เช่น "/about-photo.jpg" (วางใน public/)
};

// ============================================================
// ABOUT SKILLS — ทักษะแบ่งตามกลุ่ม พร้อม icon
// icon: ชื่อ Lucide icon (ดูรายชื่อได้ที่ lucide.dev/icons)
// ============================================================
export const aboutSkills = [
  {
    category: "Analytical",
    skills: [
      { name: "Data Analysis", icon: "BarChart3", description: "Operational data analysis and insight reporting" },
      { name: "Excel & Reporting", icon: "Sheet", description: "PivotTables, Formulas, and structured reporting" },
      { name: "Survey Analysis", icon: "ClipboardList", description: "Survey data cleaning, tabulation, and feedback analysis" },
      { name: "Cost & Pricing Analysis", icon: "Calculator", description: "Fee comparison and cost-per-value analysis" },
    ],
  },
  {
    category: "Operations",
    skills: [
      { name: "Marketing Ops", icon: "Megaphone", description: "Campaign planning from concept to launch" },
      { name: "Process Improvement", icon: "Settings", description: "Data-driven operational optimization" },
      { name: "Project Tracking", icon: "ListChecks", description: "Task management with performance follow-up" },
      { name: "Data Validation", icon: "ShieldCheck", description: "Accuracy checks and pre-implementation review" },
    ],
  },
  {
    category: "Communication",
    skills: [
      { name: "Cross-team Coordination", icon: "Users", description: "Bridging Marketing, Technical, and Operations" },
      { name: "Stakeholder Communication", icon: "MessageSquare", description: "Clear and structured reporting to stakeholders" },
      { name: "Bilingual (TH/EN)", icon: "Globe", description: "Native Thai and intermediate English" },
    ],
  },
];

// ============================================================
// PROJECTS — 3 case studies with Problem / Analysis / Recommendation / Outcome
// (ข้อมูลเดิมจาก portfolio เดิม)
// ============================================================
export const projects = [
  {
    id: "truemoney",
    title: "Optimizing TrueMoney Rewards for Panelists",
    role: "Reward program · Cost & user analysis",
    tags: ["Excel", "Cost model", "User feedback"],
    metrics: [
      { value: "−20%", label: "Reduction in cost-per-value" },
      { value: "39", label: "User comments analyzed" },
      { value: "27", label: "Slow-moving items flagged" },
    ],
    problem:
      "Our panel used TrueMoney rewards as a key incentive, but panelists had to pay up to 25% in fees when moving cash card value into their wallet. At the same time, the 500 THB reward became a slow-moving item with stock not clearing as expected — 27 units remained after more than one year. 39 user comments explicitly mentioned unfair fees or low perceived value.",
    analysis:
      "Grouped open-ended user comments into themes (fees, wallet top-up, reward type). Used weekly stock logs to visualize redemption trends for 500 THB rewards. Built a cost-per-value model comparing Vendor A (1.33 THB/unit) vs Vendor B Direct Top Up (1.06 THB/unit) to quantify the savings opportunity.",
    recommendation:
      "Proposed switching to Direct Top Up via Vendor B to eliminate user fees entirely. Recommended clearing remaining 500 THB stock through a targeted promotion. Summarized findings and aligned direction with a regional stakeholder.",
    outcome:
      "Achieved approximately 20% reduction in cost-per-value. Confirmed the new direction with a regional stakeholder. Proposed a promotion plan for clearing remaining slow-moving stock.",
  },
  {
    id: "exchange-rate",
    title: "Exchange Rate Tier Design",
    role: "Reward ladder · Pricing logic",
    tags: ["Excel", "Tier logic", "Panel economics"],
    metrics: [
      { value: "3", label: "Reward tiers defined" },
      { value: "—", label: "Reduced pricing inconsistencies" },
      { value: "—", label: "Clearer reward list for users" },
    ],
    problem:
      "Our panel offered many reward items with different point requirements, but over time the list became hard to maintain and confusing for users. Similar items sometimes had very different point costs, making it difficult for panelists to tell what a 'fair' exchange rate was. Internally, margin and cost-per-engagement were hard to monitor consistently.",
    analysis:
      "Grouped rewards into tiers (low, mid, high value) and defined target point ranges for each. Built an Excel model to calculate point requirements based on item cost, desired margin, and step increments. Simulated different scenarios to avoid sudden jumps between similar items.",
    recommendation:
      "Implemented a tiered exchange rate structure with consistent step increments, making the reward list easier to scan, understand, and maintain. The structure made pricing logic transparent for both users and the internal team.",
    outcome:
      "Created a clearer reward list for panelists. Reduced complaints about inconsistent point prices. Made internal margin monitoring easier and provided a more structured basis for future reward optimization.",
  },
  {
    id: "notification",
    title: "Notification Feedback & Preferences",
    role: "User survey · Insight to guideline",
    tags: ["Survey", "Segmentation", "UX insight"],
    metrics: [
      { value: "1", label: "Survey designed & deployed" },
      { value: "2", label: "User segments identified" },
      { value: "—", label: "Notification guideline created" },
    ],
    problem:
      "We sent notifications (campaigns, reminders, system messages) to panelists via multiple channels, but had limited evidence on how they actually felt about frequency, timing, and content. There was a risk of sending notifications that felt spammy or irrelevant, and no clear guideline existed for when and how often to send different types of messages.",
    analysis:
      "Designed a short survey asking panelists about preferred notification channels (LINE, email, in-app), timing, and frequency. Cleaned and summarized responses into charts and segments (highly active vs. less active users) to identify different preference patterns.",
    recommendation:
      "Translated survey findings into a draft notification guideline for future campaigns, specifying acceptable frequency and preferred channels per user segment. Provided the team with concrete, user-backed guidelines instead of guesses.",
    outcome:
      "Gave the team actionable, user-backed guidelines to improve notification strategy. Connected simple survey data with UX decisions about communication. Supported internal decision-making with structured evidence rather than assumptions.",
  },
];

// ============================================================
// PORTFOLIO SECTION TEXT
// ============================================================
export const portfolioSection = {
  title: "Portfolio",                          // ← หัวข้อ section
  subtitle: "Selected case studies from real-world projects", // ← คำอธิบาย section
};

// ============================================================
// CONTACT SECTION TEXT
// ============================================================
export const contactSection = {
  title: "Contact Me",                          // ← หัวข้อ section
  subtitle: "Feel free to reach out — I'm open to new opportunities and collaborations.", // ← คำอธิบาย
};

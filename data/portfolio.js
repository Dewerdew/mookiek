// ============================================================
// portfolio.js — Single source of truth for all portfolio content.
// แก้ไขข้อมูลในไฟล์นี้ไฟล์เดียว เพื่ออัปเดตเนื้อหาทั้งเว็บ
// ============================================================

// ============================================================
// PERSONAL INFO — ข้อมูลส่วนตัวที่แสดงใน Hero Section
// ============================================================
export const personalInfo = {
  greeting: "Hi I am",              // ← ข้อความทักทาย
  name: "Your Name",                // ← ใส่ชื่อของคุณ
  role: "Your Role / Title",        // ← ใส่ตำแหน่ง เช่น "UI/UX Designer", "Marketing Specialist"
  resumeUrl: "/Resume - Orntharisa Kajornpongpaisan.pdf",         // ← วางไฟล์ resume ใน public/ folder
  profileImage: "",                 // ← ใส่ path รูปโปรไฟล์ เช่น "/profile.jpg" (วางใน public/)
};

// ============================================================
// HERO STATS — ตัวเลขที่แสดงด้านล่าง Hero
// ============================================================
export const heroStats = [
  { value: "5+", label: "Experiences" },     // ← แก้ตัวเลข/label ตามต้องการ
  { value: "20+", label: "Project done" },
  { value: "80+", label: "Happy Clients" },
];

// ============================================================
// SOCIAL LINKS — ลิงก์ social media (แสดงเป็น icon ใน Hero)
// ============================================================
export const socialLinks = {
  email: "your.email@example.com",                // ← ใส่ email จริง
  linkedin: "https://linkedin.com/in/your-profile", // ← ใส่ LinkedIn URL
  github: "https://github.com/your-profile",        // ← ใส่ GitHub URL (ลบออกได้ถ้าไม่มี)
  behance: "https://behance.net/your-profile",       // ← ใส่ Behance URL (ลบออกได้ถ้าไม่มี)
  instagram: "https://instagram.com/your-profile",   // ← ใส่ Instagram URL (ลบออกได้ถ้าไม่มี)
  resumeUrl: "/Resume - Orntharisa Kajornpongpaisan.pdf",
};

// ============================================================
// SERVICES — บริการที่ต้องการแสดง (แสดงเป็น grid 3 columns × 2 rows)
// เพิ่ม/ลบ item ได้ตามต้องการ
// ============================================================
export const services = [
  {
    title: "Service Title 1",                    // ← ใส่ชื่อบริการ
    description: "Brief description of what this service includes and the value it provides to clients.", // ← ใส่รายละเอียด
  },
  {
    title: "Service Title 2",
    description: "Brief description of what this service includes and the value it provides to clients.",
  },
  {
    title: "Service Title 3",
    description: "Brief description of what this service includes and the value it provides to clients.",
  },
  {
    title: "Service Title 4",
    description: "Brief description of what this service includes and the value it provides to clients.",
  },
  {
    title: "Service Title 5",
    description: "Brief description of what this service includes and the value it provides to clients.",
  },
  {
    title: "Service Title 6",
    description: "Brief description of what this service includes and the value it provides to clients.",
  },
];

// ============================================================
// SERVICES SECTION TEXT
// ============================================================
export const servicesSection = {
  title: "Services",                    // ← หัวข้อ section
  subtitle: "Brief description of the services you offer and your approach to delivering value.", // ← คำอธิบาย section
};

// ============================================================
// ABOUT ME — ข้อมูลเกี่ยวกับตัวคุณ (หน้า About)
// ============================================================
export const aboutMe = {
  title: "About Me",                    // ← หัวข้อ section
  subtitle: "Your specialty or tagline here",  // ← subtitle ใต้ชื่อ
  bio: "Write your detailed biography here. Describe your background, experience, passion, and what drives you in your career. This section should give visitors a comprehensive understanding of who you are and what you bring to the table.\n\nYou can include multiple paragraphs to tell your story effectively. Share your journey, achievements, and professional philosophy.", // ← ใส่ประวัติ (แยก paragraph ด้วย \\n\\n)
  profileImage: "",                     // ← ใส่รูป About เช่น "/about-photo.jpg" (วางใน public/)
};

// ============================================================
// ABOUT SKILLS — ทักษะที่แสดงเป็น circular progress bars
// percentage: 0-100
// ============================================================
export const aboutSkills = [
  { name: "Skill 1", percentage: 90 },    // ← ใส่ชื่อ + เปอร์เซ็นต์
  { name: "Skill 2", percentage: 85 },
  { name: "Skill 3", percentage: 80 },
  { name: "Skill 4", percentage: 75 },
  { name: "Skill 5", percentage: 70 },
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

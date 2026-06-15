// ============================================================
// portfolio.js — Single source of truth for all portfolio content.
// Edit this file to update text, projects, skills, and links.
// ============================================================

export const personalInfo = {
  name: "Mook",
  headline: "Marketing Operations & Data Analysis Hybrid",
  subtitle:
    "I turn user feedback, campaign data, and operational insights into clearer decisions, better reward experiences, and more effective communication.",
  body: "I work at the intersection of marketing operations and analysis, using feedback, stock logs, cost data, and simple models to improve reward programs and panel communication. My goal is to make decisions that are fair for users and practical for the business.",
  resumeUrl: "/resume.pdf", // Place your resume in /public/resume.pdf
};

// Compact credibility highlights shown below the Hero
export const credibilityHighlights = [
  "User Feedback & Campaign Data",
  "Stock Logs & Cost Analysis",
  "Bilingual: Thai / English",
  "Open to Marketing Ops & Analyst Roles",
];

// ============================================================
// PROJECTS — 3 case studies with Problem / Analysis / Recommendation / Outcome
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
// SKILLS — grouped into 3 categories
// ============================================================
export const skillCategories = [
  {
    title: "Marketing Operations",
    skills: [
      "Reward & incentive design",
      "Panel management",
      "Activity & campaign planning",
      "Bilingual communication (EN/TH)",
      "Client & user-facing copy",
    ],
  },
  {
    title: "Analysis & Reporting",
    skills: [
      "Excel (pivot, formulas, Power Query)",
      "Stock & cost tracking",
      "Survey analysis",
      "Cost modeling",
      "User feedback analysis",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Google Workspace",
      "Survey platforms",
      "Slack / Teams",
      "Basic data visualization",
    ],
  },
];

// ============================================================
// SOCIAL / CONTACT LINKS
// ============================================================
export const socialLinks = {
  email: "your.email@example.com",       // Replace with real email
  linkedin: "https://linkedin.com/in/your-profile", // Replace with real URL
  resumeUrl: "/resume.pdf",              // Same as personalInfo.resumeUrl
};

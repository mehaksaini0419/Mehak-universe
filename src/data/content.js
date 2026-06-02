// ============================================================
//  ALL CONTENT — edit here to update the whole site.
//  Sourced from Mehak Saini's resume, LinkedIn & live businesses.
// ============================================================

export const profile = {
  name: "Mehak Saini",
  role: "Business Analyst · Operations & Strategy",
  tagline: "Where business strategy meets analytics, AI, and operations excellence.",
  blurb:
    "MBA in Management Science (STEM) turning messy operational data into decisions. I work across analytics, operations, finance, HR, marketing, sales, and supply chain — owning the full stack from SQL query to executive deck.",
  email: "mehaksaini0419@gmail.com",
  phone: "(419) 565-9221",
  linkedin: "https://www.linkedin.com/in/mehaksaini04",
  github: "https://github.com/mehaksaini0419",
  location: "Newark, NY · Open to relocation (California Bay Area, LA, San Diego, Irvine)",
  workAuth: "F-1 STEM OPT — work-authorized in the U.S. through 2028 (E-Verify employers)",
  voiceIntro:
    "Hi, I'm Mehak Saini. Welcome to my portfolio, where business strategy meets analytics, A.I., and operations excellence.",
};

// CAREER UNIVERSE — domain orbs
export const careerPaths = [
  { id: "analytics", title: "Analytics", color: "#22d3ee", icon: "BarChart3",
    summary: "Turning raw operational data into dashboards and decisions.",
    skills: ["SQL", "Python (pandas)", "Power BI / DAX", "Tableau", "Advanced Excel"],
    tools: ["Power BI", "Tableau", "Python", "SQL", "Excel"],
    projects: ["Multi-Store Telecom Sales Dashboard", "Facility Usage Analytics"],
    story: "Built the primary KPI reporting infrastructure for a multi-store telecom operation — sales by product line, staffing utilization, inventory turn." },
  { id: "operations", title: "Operations", color: "#a855f7", icon: "Settings",
    summary: "Coordinating multi-location workflows and removing bottlenecks.",
    skills: ["Process improvement", "Inventory planning", "Root-cause analysis", "Six Sigma Green Belt"],
    tools: ["RT POS", "SAP ERP", "EDGE", "VidaPay"],
    projects: ["Demand-Driven Scheduling Engine", "Facility Operations Management"],
    story: "Reduced operational inefficiency 15% through demand-driven scheduling; rebuilt scheduling at AU Rec Services, cutting conflicts 30%." },
  { id: "finance", title: "Finance", color: "#f5c451", icon: "TrendingUp",
    summary: "Forecasting, budgeting, reconciliations, and cost optimization.",
    skills: ["FP&A modeling", "Reconciliations", "Revenue tracking", "Cost optimization"],
    tools: ["Excel (Power Pivot)", "Power BI", "FP&A models"],
    projects: ["KPI Dashboards for Forecasting & Budgeting", "Cash Flow & Revenue Analysis"],
    story: "Developed KPI dashboards supporting forecasting, budgeting, and leadership decisions; performed reconciliations and financial data validation." },
  { id: "supply-chain", title: "Supply Chain", color: "#34d399", icon: "Truck",
    summary: "Inventory planning, order fulfillment, and product availability.",
    skills: ["Inventory turn analysis", "Order fulfillment", "Stock transfers", "Discrepancy flagging"],
    tools: ["RT POS", "SAP ERP"],
    projects: ["Multi-Location Inventory Coordination"],
    story: "Coordinated inventory planning, order fulfillment, and availability across stores; transferred stock between sites and flagged discrepancies early." },
  { id: "hr", title: "HR", color: "#f472b6", icon: "Users",
    summary: "Hiring, onboarding, training, and people analytics.",
    skills: ["Recruiting", "Onboarding & training", "Employee satisfaction analysis", "Scheduling"],
    tools: ["MS 365", "Surveys"],
    projects: ["Staff Hiring & Onboarding (15–20 employees)", "HR Policy Improvement"],
    story: "Led staffing for 15–20 employees — interviews, onboarding, training. Earlier assessed employee satisfaction and recommended HR policy improvements." },
  { id: "marketing", title: "Marketing", color: "#fb923c", icon: "Megaphone",
    summary: "Market research, campaigns, and data-driven positioning.",
    skills: ["Competitor analysis", "Market research", "Digital campaigns", "Pricing strategy"],
    tools: ["Google Analytics", "Canva", "Excel"],
    projects: ["Competitor Analysis (+15% inquiries)", "Targeted Digital Campaigns"],
    story: "Conducted competitor analysis and market research that drove a 15% increase in marketing inquiries; built targeted digital campaigns from insights." },
  { id: "sales", title: "Sales", color: "#60a5fa", icon: "Target",
    summary: "Conversion analytics, promotions, and revenue growth.",
    skills: ["Sales-target analysis", "Conversion optimization", "Promotional initiatives", "RevOps"],
    tools: ["Power BI", "CRM workflows"],
    projects: ["Target-vs-Achieved Analysis (7 stores)", "Promotional Initiative Execution"],
    story: "Analyzed sales-target performance across 7 stores and 4 product lines; drove a 12% lift in conversion through demand-driven scheduling." },
];

// PROJECTS WORLD
export const projects = [
  { id: "wireless", type: "retail", title: "Wireless Store Performance Analysis",
    tagline: "Multi-store telecom sales dashboard", stack: ["Power BI", "Excel", "DAX", "Chart.js"],
    desc: "Interactive dashboard analyzing target-vs-achieved sales across 7 store locations and 4 product lines (HSI, Magenta, Voice, Tablet) with KPI cards, drill-down, and an attainment heatmap.",
    impact: ["7 stores", "4 product lines", "+12% conversion", "Live dashboard"],
    hasDashboard: true },
  { id: "supply", type: "supplychain", title: "Supply Chain & Inventory Project",
    tagline: "Multi-location inventory coordination", stack: ["RT POS", "Excel", "SAP ERP"],
    desc: "Coordinated inventory across sites — receiving, stock records, inter-site transfers, and early discrepancy flagging to protect product availability.",
    impact: ["Multi-site", "Stock transfers", "Discrepancy flagging", "Availability"] },
  { id: "finance", type: "finance", title: "Finance: Forecasting & Cash Flow",
    tagline: "KPI dashboards for budgeting & decisions", stack: ["Excel", "Power BI", "FP&A"],
    desc: "Built KPI dashboards and reports supporting forecasting, budgeting, and leadership decision-making; ran reconciliations and revenue tracking.",
    impact: ["Forecasting", "Budgeting", "Reconciliations", "Revenue"] },
  { id: "marketing", type: "marketing", title: "Marketing & Sales Growth",
    tagline: "Research-driven campaigns & funnel", stack: ["Google Analytics", "Excel", "Canva"],
    desc: "Competitor analysis and market research driving a 15% increase in inquiries; targeted digital campaigns and pricing/promotional optimization.",
    impact: ["+15% inquiries", "Funnel growth", "Pricing", "Campaigns"] },
  { id: "operations", type: "operations", title: "Operations Efficiency Engine",
    tagline: "Scheduling & bottleneck analysis", stack: ["Python", "Excel", "Six Sigma"],
    desc: "Demand-driven scheduling that cut operational inefficiency 15% and lifted conversion 12%; facility scheduling rebuild reduced conflicts 30%.",
    impact: ["-15% inefficiency", "-30% conflicts", "+25% staffing", "Root-cause"] },
  { id: "retailiq-sql", type: "sql", title: "RetailIQ SQL — Wireless Retail Analytics Database",
    tagline: "PostgreSQL database answering real business questions with advanced SQL",
    stack: ["SQL", "PostgreSQL", "pgAdmin"],
    desc: "A PostgreSQL database that models a multi-store wireless retailer and answers real business questions using advanced SQL. Designed a normalized 5-table schema and wrote 10 analytical queries using CTEs and window functions (RANK, ROW_NUMBER, LAG, NTILE, running totals). Analyzes sales performance, rep rankings, pace-to-goal, plan mix, and customer purchase patterns across 6 stores and 8 reps (~5,000 transactions). The SQL analysis confirmed the same accessory-sales drivers found by the Python ML model.",
    impact: ["6 stores · 8 reps", "~5,000 transactions", "5-table schema", "CTEs + window fns"],
    github: "https://github.com/mehaksaini0419/retailiq-sql-analytics" },
  { id: "retailiq-ml", type: "ml", title: "RetailIQ — Wireless Store Performance & Revenue Intelligence Engine",
    tagline: "Python analytics app with machine-learning predictions",
    stack: ["Python", "pandas", "scikit-learn", "Streamlit", "Plotly"],
    desc: "A Python analytics app that turns wireless retail sales data into manager-ready decisions, including machine-learning predictions. Trained a Random Forest model to predict accessory-attach likelihood per customer, quantified recoverable monthly revenue from coaching, and built an interactive dashboard with a live prediction tool and auto-generated business insights. Analyzes 5 core sales targets — Magenta migrations, voice lines, tablet lines, Home Internet, and insurance — across conversion, attach rates, and rep performance.",
    impact: ["Random Forest model", "Attach-rate prediction", "Recoverable revenue", "Live dashboard"],
    github: "https://github.com/mehaksaini0419/retailiq-wireless-analytics" },
];

// VENTURE — real live website
export const vikas = {
  name: "Vikas Steel Udyog",
  tag: "Real project · live website I built",
  url: "https://vikassteeludyog.com",
  logo: "/assets/vikas-steel-logo.png",
  desc: "Designed and built the live company website for my family's steel-furniture business in Ambala — full responsive site, product showcase, and contact flow.",
  stats: [
    { v: 22, suffix: "+", label: "Years Excellence" },
    { v: 10, suffix: "K+", label: "Happy Families" },
    { v: 6, suffix: "+", label: "Product Lines" },
  ],
  stack: ["Web Design", "Responsive Build", "Brand Identity"],
};

// AI & TOOLS GALAXY — planets
export const tools = [
  { name: "SQL", color: "#22d3ee", use: "Query and join operational datasets to find the signal." },
  { name: "Power BI", color: "#f5c451", use: "Build DAX models, dashboards, and scheduled refreshes." },
  { name: "Tableau", color: "#60a5fa", use: "Visual exploration and stakeholder-ready storytelling." },
  { name: "Python", color: "#34d399", use: "pandas for cleaning, automation, and analysis pipelines." },
  { name: "Excel", color: "#22c55e", use: "PivotTables, Power Pivot, Power Query, modeling." },
  { name: "Claude", color: "#d97757", use: "Analysis, synthesis, and drafting with AI assistance." },
  { name: "ChatGPT", color: "#10a37f", use: "Rapid ideation, summarization, and prototyping." },
  { name: "Gemini", color: "#a855f7", use: "Multimodal research and cross-checking insights." },
  { name: "Perplexity", color: "#06b6d4", use: "Evidence-first research with sourced answers." },
  { name: "Analytics", color: "#fb923c", use: "Traffic, conversion, and campaign performance." },
  { name: "Canva", color: "#ec4899", use: "Executive-ready visuals and campaign assets." },
];

// KNOWLEDGE GARDEN — strengths
export const strengths = [
  { name: "Leadership", icon: "Crown", note: "Led staffing for 15–20 employees; on-site emergency lead." },
  { name: "Analytics", icon: "BarChart3", note: "Full stack: SQL → Python → Power BI → executive deck." },
  { name: "Problem Solving", icon: "Lightbulb", note: "Root-cause analysis that removes bottlenecks." },
  { name: "Business Strategy", icon: "Compass", note: "Translates data into operational decisions." },
  { name: "Communication", icon: "MessageCircle", note: "Executive-ready recommendations, not just charts." },
  { name: "Operations", icon: "Settings", note: "Multi-location workflow and inventory coordination." },
  { name: "Finance", icon: "TrendingUp", note: "Forecasting, budgeting, reconciliations." },
];

// EXPERIENCE TIMELINE
export const experience = [
  { role: "Business Operations Lead", company: "Digicell UPNY Inc. / Digitalk Wireless of Oregon",
    location: "Newark, NY (transferred from Oregon)", period: "Feb 2026 – Present",
    achievements: [
      "Analyze sales-target performance across 7 stores and 4 product lines; surface gap-to-target to leadership.",
      "Build Power BI and Excel reports from target-vs-achieved data; translate into operational decisions.",
      "Coordinate multi-location inventory in RT POS — transfers, stock records, discrepancy flagging.",
      "Manage customer account workflows in EDGE and VidaPay across cross-functional teams.",
    ], tools: ["Power BI", "Excel", "RT POS", "EDGE", "VidaPay"] },
  { role: "Recreational Facility Operations Manager", company: "Ashland University Recreational Services",
    location: "Ashland, OH", period: "Dec 2024 – Dec 2025",
    achievements: [
      "Oversaw daily operations across 4 departments at a high-volume facility.",
      "Led staffing for 15–20 employees — hiring, onboarding, training, scheduling.",
      "Tracked member usage data; produced reports informing staffing decisions.",
      "On-site lead during emergency and safety situations.",
    ], tools: ["Excel", "Scheduling systems", "MS 365"] },
  { role: "Customer Service Representative", company: "Ashland University Recreational Services",
    location: "Ashland, OH", period: "May 2024 – Jan 2025",
    achievements: [
      "Managed customer relations and facility tours — drove a 45% increase in membership.",
      "Analyzed membership trends in Excel to enhance engagement and retention.",
    ], tools: ["Excel"] },
  { role: "MIS — Human Resources", company: "Aashman Foundation", location: "India", period: "Aug 2021 – May 2022",
    achievements: [
      "Assessed employee satisfaction and recommended HR policy improvements.",
      "Supported recruiting and onboarding — job postings, screening, paperwork.",
    ], tools: ["MS 365", "Surveys"] },
  { role: "Marketing Intern", company: "Vikas Steel Udyog", location: "Ambala, Haryana, India", period: "Aug 2021 – Oct 2021",
    achievements: [
      "Competitor analysis and market research → 15% increase in inquiries.",
      "Analyzed sales/market data to optimize pricing and promotional strategy.",
    ], tools: ["Excel", "Market research"] },
];

export const education = [
  { degree: "MBA — Management Science (STEM-Designated)", school: "Ashland University, Dauch College of Business", period: "2023 – 2025", detail: "GPA 3.77 / 4.0" },
  { degree: "Bachelor of Business Administration", school: "Shri Atmanand Jain Institute of Management & Technology", period: "2019 – 2022", detail: "India" },
];

export const certifications = [
  "Business Intelligence & Data Analyst (BIDA®) — CFI",
  "FP&A Professional (FPAP) — CFI",
  "Six Sigma Green Belt (CSSGB)",
  "Python for Data Analysis",
];

export const recruiterKpis = [
  { label: "Analytics", value: 92, icon: "BarChart3" },
  { label: "Strategy", value: 88, icon: "Compass" },
  { label: "Operations", value: 90, icon: "Settings" },
  { label: "Communication", value: 86, icon: "MessageCircle" },
  { label: "Leadership", value: 84, icon: "Crown" },
  { label: "AI Tools", value: 89, icon: "Sparkles" },
];

export const charts = {
  productAttainment: [
    { product: "HSI", value: 56 },
    { product: "Magenta", value: 74.4 },
    { product: "Voice", value: 86.9 },
    { product: "Tablet", value: 110.1 },
  ],
  storeAttainment: [
    { store: "Webster", value: 101.96 },
    { store: "Lake Ave", value: 98.68 },
    { store: "Dewey", value: 96.15 },
    { store: "Main", value: 88.32 },
    { store: "G1", value: 88.0 },
    { store: "Lyell", value: 84.44 },
    { store: "Newark", value: 56.86 },
  ],
  salesFunnel: [
    { stage: "Leads", value: 1000 },
    { stage: "Qualified", value: 640 },
    { stage: "Demo", value: 380 },
    { stage: "Proposal", value: 210 },
    { stage: "Closed", value: 120 },
  ],
  cashFlow: [
    { month: "Q1", revenue: 120, cost: 85 },
    { month: "Q2", revenue: 138, cost: 90 },
    { month: "Q3", revenue: 155, cost: 96 },
    { month: "Q4", revenue: 180, cost: 102 },
  ],
};

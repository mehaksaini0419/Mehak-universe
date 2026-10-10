// ============================================================
//  ALL CONTENT — edit here to update the whole site.
//  Sourced from Mehak Saini's resume, LinkedIn & live businesses.
// ============================================================

export const profile = {
  name: "Mehak Saini",
  role: "FP&A & Business Operations Analyst · Forecasting, Planning & Analytics",
  tagline: "Where business strategy meets analytics, AI, and operations excellence.",
  blurb:
    "Master's in Management Science (STEM) turning messy operational data into decisions. I work across analytics, operations, finance, HR, marketing, sales, and supply chain — owning the full stack from SQL query to executive deck.",
  email: "mehaksaini347@gmail.com",
  phone: "(419) 565-9221",
  linkedin: "https://www.linkedin.com/in/mehaksaini04",
  github: "https://github.com/mehaksaini0419",
  location: "Newark, NY · Open to relocation (California Bay Area, LA, San Diego, Irvine, Washington DC area)",
  workAuth: "",   // leave empty to hide the line site-wide
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
  { id: "weee", type: "bi", featured: true,
    title: "Weee! Regional Performance — Executive Summary",
    tagline: "4-page executive Power BI dashboard · 18 months · 6 markets",
    stack: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    desc: "A four-page executive dashboard covering 18 months (Jan 2025 – Jun 2026) of regional performance for a grocery-delivery business across 6 markets and 8 product categories — $314M gross revenue, $83.5M gross margin, 106% plan attainment, $59 AOV, +14.3% YoY. The KPIs are table stakes; the value is the insight layer. Every page opens with a quantified finding and a recommendation: regional attainment vs. plan, delivery cost per order, category margin erosion, and a growth/retention view covering new-customer acquisition, promo dependence, refund-rate trend, and repeat-rate gaps.",
    insight: "LA delivery cost per order is up ~30% since January while every other region stayed flat — roughly $130K/month in excess cost, annualising past $1.5M. Seattle seafood margin, already thin at ~22%, has been sliding since late 2025.",
    impact: ["$314M revenue", "106% attainment", "$1.5M+ cost leak found", "6 markets · 8 categories"] },

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

  { id: "apple", type: "tableau", title: "Apple Revenue & Services Growth Analysis",
    tagline: "A decade of revenue, margin and segment mix — live in Tableau",
    stack: ["Tableau", "Trend Analysis", "Variance Analysis"],
    desc: "An interactive Tableau dashboard analyzing ten years of Apple's revenue, margin and segment performance, focused on the Services-segment growth story and the underlying product-mix shift. Applied trend and variance analysis and designed the visuals for a non-technical audience — the financial storytelling piece of the portfolio, built on a business context everyone already understands.",
    impact: ["2015 – 2025", "Services growth", "Product-mix shift", "Live Tableau viz"],
    tableau: "https://public.tableau.com/views/AppleRevenueServicesGrowthAnalysis20152026/Dashboard1" },

  { id: "ecommerce", type: "ecommerce", title: "E-Commerce Customer Analytics Dashboard",
    tagline: "Python ETL → Tableau · 5,200 transactions across 6 channels",
    stack: ["Tableau", "Python", "pandas", "ETL"],
    desc: "An ETL pipeline plus interactive dashboard analyzing 5,200 transactions across 6 customer segments and 6 sales channels, surfacing where revenue and repeat purchases actually concentrate. pandas handles the preparation, Tableau tells the story — a marketing- and revenue-analytics example built on a real pipeline rather than a pre-cleaned sample file.",
    impact: ["5,200 transactions", "6 segments", "6 channels", "Live Tableau viz"],
    tableau: "https://public.tableau.com/views/E-CommerceCustomerAnalyticsMehakSaini/Dashboard1" },

  { id: "acg", type: "case", title: "ACG Cleveland Cup — Case Competition",
    tagline: "Integrated 3-statement modeling under judged time pressure",
    stack: ["Excel Modeling", "3-Statement Model", "Scenario Analysis"],
    desc: "Built integrated financial models — income statement, balance sheet and cash flow — plus scenario and sensitivity analysis for a live transaction scenario, then presented data-driven recommendations to a senior judging panel under tight time constraints. Corporate-finance modeling, structured problem-solving and executive communication, graded by people who do this for a living.",
    impact: ["3-statement model", "Scenario analysis", "Live transaction", "Ashland University · 2026"] },
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
  { role: "Business Operations Lead", company: "Digicell UPNY Inc. / Digitalk Wireless",
    location: "Newark, NY (transferred from Oregon)", period: "Feb 2026 – Present",
    achievements: [
      "Set and track sales targets across 7 locations and 4 product lines, reporting attainment by store, by rep and by product to regional leadership.",
      "Own the monthly P&L view — gross revenue, adjusted revenue, cost, margin % and profitability by location and category — improving revenue-versus-profit visibility by 20%.",
      "Build month-end forecasts from MTD run rate, seasonality, promotions, product mix and remaining selling days, improving forecast accuracy by 15%.",
      "Build and validate KPI dashboards, Excel models, SQL checks and Power Query workflows, improving reporting accuracy by 25%.",
      "Reconcile revenue, cost, margin, targets, returns and category mappings with finance and operations, cutting reporting discrepancies by 20% per monthly cycle.",
      "Root-cause underperforming locations — soft categories, inventory shortages, staffing and productivity gaps — supporting 10% category opportunity recovery.",
    ], tools: ["Power BI", "SQL", "Advanced Excel", "Power Query", "RT POS", "EDGE", "VidaPay"] },
  { role: "Business Analyst", company: "Tata Consultancy Services (TCS)",
    location: "India", period: "Jan 2021 – Jul 2023",
    achievements: [
      "Gathered and documented business requirements across manufacturing, supply chain, procurement, inventory and order management — BRDs, FRDs, user stories, business rules and acceptance criteria.",
      "Mapped AS-IS and TO-BE processes across production planning, demand planning, procurement, replenishment and warehouse operations, and ran fit-gap analysis against SAP S/4HANA target processes.",
      "Built reporting and data extracts in SQL, Excel, Power BI, Tableau, R and SAS Studio covering stock visibility, demand trends, order status, backorders and fulfillment performance.",
      "Wrote and executed SIT, UAT, regression and smoke test scenarios in JIRA, triaging defects and data mismatches through to resolution.",
      "Supported end-user training, go-live and hypercare on each rollout for global clients across onshore and offshore teams.",
    ], tools: ["SAP S/4HANA", "SQL", "Power BI", "Tableau", "JIRA", "Excel", "R", "SAS Studio"] },
];

export const education = [
  { degree: "Master's in Management Science (STEM-Designated)", school: "Ashland University, Dauch College of Business", period: "2023 – 2025", detail: "GPA 3.79 / 4.0" },
  { degree: "Bachelor's Degree in Business Administration", school: "Shri Atmanand Jain Institute of Management & Technology", period: "2019 – 2022", detail: "India" },
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

  // Weee! — attainment actual vs plan, illustrative of the 18-month trend
  weeeAttainment: [
    { q: "Q3'24", actual: 98, plan: 98 },
    { q: "Q4'24", actual: 101, plan: 100 },
    { q: "Q1'25", actual: 105, plan: 102 },
    { q: "Q2'25", actual: 109, plan: 105 },
    { q: "Q3'25", actual: 113, plan: 108 },
    { q: "Q4'25", actual: 111, plan: 111 },
    { q: "Q1'26", actual: 107, plan: 114 },
    { q: "Q2'26", actual: 103, plan: 117 },
  ],

  // Apple — Services as a share of total revenue
  appleServices: [
    { year: "'15", share: 8.5 }, { year: "'16", share: 10.7 }, { year: "'17", share: 12.5 },
    { year: "'18", share: 14.1 }, { year: "'19", share: 17.8 }, { year: "'20", share: 19.6 },
    { year: "'21", share: 18.7 }, { year: "'22", share: 19.8 }, { year: "'23", share: 22.2 },
    { year: "'24", share: 24.6 }, { year: "'25", share: 26.3 },
  ],

  // E-commerce — revenue share by sales channel
  ecomChannels: [
    { channel: "Marketplace", value: 28 },
    { channel: "Direct web", value: 23 },
    { channel: "Mobile app", value: 18 },
    { channel: "Retail ptnr", value: 13 },
    { channel: "Social", value: 10 },
    { channel: "Wholesale", value: 8 },
  ],

  // ACG — scenario sensitivity, indexed to base = 100
  acgScenarios: [
    { scenario: "Downside", ebitda: 62, fcf: 41 },
    { scenario: "Base", ebitda: 100, fcf: 78 },
    { scenario: "Upside", ebitda: 138, fcf: 121 },
  ],
};

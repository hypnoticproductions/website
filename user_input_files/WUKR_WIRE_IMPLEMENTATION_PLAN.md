# WUKR WIRE: IMPLEMENTATION DECISION DOCUMENT
## From Hypothesis to Actual Staging

**The Question:** We have a concept. Now WHERE do we build it, HOW do we connect Manus, and WHAT is the actual workflow?

---

## DECISION 1: WHERE TO BUILD THE FRONTEND + BACKEND

### Option A: Base44 (All-in-One)

```
PROS:
✓ Has built-in backend (database)
✓ Can embed into your MiniMax site
✓ Single platform = simpler
✓ You already have access

CONS:
✗ You said "not as powerful"
✗ Limited customization
✗ Unclear how to connect external tools (Manus)
✗ May hit ceiling with complex features

VERDICT: Good for MVP/proof-of-concept, may need migration later
```

### Option B: Lovable → GitHub → Supabase + Vercel

```
PROS:
✓ More powerful frontend (React)
✓ Supabase = proper database with API
✓ Vercel = production hosting with logs (Manus can monitor)
✓ Full control, scalable
✓ Industry standard stack

CONS:
✗ More pieces to manage
✗ Requires GitHub workflow
✗ More technical setup

VERDICT: Best for production, more work upfront
```

### Option C: MiniMax Space (Your Current Site)

```
WHAT IS IT: Your existing website (Cognitive Architect's Repository)
LIMITATION: MiniMax is for AI video/image generation, not app hosting
REALITY: You'd need to EMBED a component from Base44 or deploy separately

VERDICT: Not a development platform, but the destination for embedding
```

---

## RECOMMENDED PATH: HYBRID APPROACH

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    RECOMMENDED IMPLEMENTATION PATH                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: MVP (Week 1-2)                                                    │
│  ═══════════════════════                                                    │
│  Platform: BASE44                                                           │
│  Why: Fast, has backend, can embed                                          │
│                                                                             │
│  Build:                                                                     │
│  ├── Wukr Wire feed component                                              │
│  ├── Citation display                                                       │
│  ├── Insight Bank (Base44's database)                                      │
│  └── Basic onboarding                                                       │
│                                                                             │
│  Embed: Into your MiniMax/existing site as iframe or component             │
│  Test: With yourself, get it working                                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  PHASE 2: PRODUCTION (Week 3-4)                                             │
│  ══════════════════════════════                                             │
│  Platform: SUPABASE + VERCEL                                                │
│  Why: Proper backend, API access, Vercel logs for Manus                    │
│                                                                             │
│  Migrate:                                                                   │
│  ├── Export Base44 code (or rebuild in Lovable)                            │
│  ├── Set up Supabase database (Insight Bank)                               │
│  ├── Deploy to Vercel                                                       │
│  └── Replace embed with Vercel URL                                          │
│                                                                             │
│  Add:                                                                       │
│  ├── API endpoints for Manus to access                                     │
│  ├── Webhook triggers for syndication                                       │
│  └── Vercel logs for engagement tracking                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## DECISION 2: HOW MANUS CONNECTS

### The Problem

```
Manus needs to:
1. KNOW when a new insight is banked (trigger)
2. ACCESS the insight content + citations (data)
3. POST to 130+ social/blog channels (credentials)
4. MONITOR engagement (Vercel logs)
5. AMPLIFY trending content (UGC creation)

Questions:
- Is this a TASK we give Manus?
- Does Manus need CREDENTIALS in its knowledge base?
- How does Manus know when to act?
```

### Solution: Three Connection Methods

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     MANUS CONNECTION ARCHITECTURE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  METHOD 1: WEBHOOK TRIGGER (Recommended for syndication)                    │
│  ═══════════════════════════════════════════════════════                    │
│                                                                             │
│  Flow:                                                                      │
│  User banks insight → Supabase fires webhook → Manus receives task          │
│                                                                             │
│  Implementation:                                                            │
│  1. Supabase has "Database Webhooks" feature                               │
│  2. When row inserted into `insights` table with `syndication_status`      │
│     = 'pending', fire webhook                                               │
│  3. Webhook hits Manus API endpoint (or email trigger)                     │
│  4. Manus receives task with insight data                                   │
│                                                                             │
│  Manus Task Template:                                                       │
│  """                                                                        │
│  NEW INSIGHT TO SYNDICATE:                                                  │
│  Headline: {headline}                                                       │
│  Content: {personalized_take}                                               │
│  Citations: {citations_formatted}                                           │
│  Client Attribution: {client_name or "WUKR Wire"}                          │
│                                                                             │
│  TASK: Syndicate this to all configured channels using the                 │
│  platform-specific templates in your knowledge base.                        │
│  """                                                                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  METHOD 2: SCHEDULED CHECK (Recommended for monitoring)                     │
│  ══════════════════════════════════════════════════════                     │
│                                                                             │
│  Flow:                                                                      │
│  Manus runs daily/hourly → Checks Supabase for pending items               │
│  → Processes queue                                                          │
│                                                                             │
│  Implementation:                                                            │
│  1. Give Manus Supabase API credentials in knowledge base                  │
│  2. Scheduled task: "Check insight bank for pending syndication"           │
│  3. Manus queries API, gets pending items, processes                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  METHOD 3: MANUAL TRIGGER (For testing/control)                             │
│  ═══════════════════════════════════════════════                            │
│                                                                             │
│  Flow:                                                                      │
│  You click "Syndicate" → Copy insight data → Paste to Manus as task        │
│                                                                             │
│  Good for: Testing, high-value content you want to review first            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## DECISION 3: WHERE DO CREDENTIALS LIVE?

### The 130+ Channel Problem

```
To syndicate to 130+ channels, Manus needs credentials for:
- Metricool (manages 60+ social accounts)
- Medium API
- Substack (email/password or API)
- Dev.to API
- Individual platform APIs
- etc.

WHERE DO THESE LIVE?
```

### Solution: Tiered Credential Storage

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CREDENTIAL ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TIER 1: METRICOOL (60+ Social Channels)                                    │
│  ════════════════════════════════════════                                   │
│                                                                             │
│  What: Social media management platform                                     │
│  Cost: ~$20-50/month for multiple accounts                                  │
│  Handles: Twitter, LinkedIn, Facebook, Instagram, TikTok, etc.             │
│                                                                             │
│  How Manus Uses It:                                                         │
│  - Manus has Metricool API key in knowledge base                           │
│  - Manus calls Metricool API to schedule posts                             │
│  - Metricool handles the actual posting to platforms                        │
│                                                                             │
│  Credentials Manus Needs:                                                   │
│  - METRICOOL_API_KEY                                                        │
│  - METRICOOL_WORKSPACE_ID                                                   │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  TIER 2: BLOG PLATFORMS (Direct API)                                        │
│  ═══════════════════════════════════                                        │
│                                                                             │
│  Platforms with APIs:                                                       │
│  - Medium: Integration token                                                │
│  - Dev.to: API key                                                          │
│  - Hashnode: API key                                                        │
│  - Ghost: Admin API key                                                     │
│  - WordPress: Application password                                          │
│                                                                             │
│  Storage: Manus Knowledge Base (encrypted/secure section)                  │
│                                                                             │
│  Format in Knowledge Base:                                                  │
│  """                                                                        │
│  BLOG PLATFORM CREDENTIALS:                                                 │
│  - Medium: Bearer [token]                                                   │
│  - Dev.to: api_key=[key]                                                    │
│  - Hashnode: [key]                                                          │
│  """                                                                        │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  TIER 3: MANUAL/SEMI-AUTO PLATFORMS                                         │
│  ═══════════════════════════════════                                        │
│                                                                             │
│  Platforms without good APIs:                                               │
│  - Substack (can use email automation)                                      │
│  - Quora (browser automation)                                               │
│  - Reddit (API but strict rules)                                            │
│  - Industry-specific blogs (guest post submissions)                         │
│                                                                             │
│  How Manus Handles:                                                         │
│  - Prepares content in correct format                                       │
│  - Either uses browser automation OR                                        │
│  - Creates draft for manual posting OR                                      │
│  - Sends email submission to blog editors                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## DECISION 4: THE ACTUAL STAGING PLAN

### Week-by-Week Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         STAGING PLAN                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WEEK 1: BASE44 MVP                                                         │
│  ═════════════════                                                          │
│                                                                             │
│  Day 1-2: Set up Base44 project                                            │
│  ├── Create Wukr Wire app                                                   │
│  ├── Implement feed UI (copy from WukrWireCited.tsx)                       │
│  ├── Set up Base44's built-in database                                     │
│  └── Tables: insights, citations, users                                     │
│                                                                             │
│  Day 3-4: Core functionality                                                │
│  ├── Insight generation (mock data first, then API)                        │
│  ├── Citation display                                                       │
│  ├── Bank functionality (save to Base44 DB)                                │
│  └── Basic onboarding                                                       │
│                                                                             │
│  Day 5-7: Embed + Test                                                      │
│  ├── Get embed code from Base44                                            │
│  ├── Add "Newsletter" tab to your MiniMax site                             │
│  ├── Embed Base44 component                                                 │
│  └── Test full flow yourself                                                │
│                                                                             │
│  DELIVERABLE: Working Wukr Wire embedded in your site                      │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  WEEK 2: MANUS KNOWLEDGE BASE SETUP                                         │
│  ══════════════════════════════════                                         │
│                                                                             │
│  Day 1-2: Create Manus Knowledge Base documents                            │
│  ├── SYNDICATION_TEMPLATES.md (format for each platform)                   │
│  ├── PLATFORM_CREDENTIALS.md (API keys, tokens)                            │
│  ├── POSTING_RULES.md (frequency, timing, hashtags)                        │
│  └── WORKFLOW_INSTRUCTIONS.md (step-by-step for Manus)                     │
│                                                                             │
│  Day 3-4: Set up Metricool                                                  │
│  ├── Create Metricool account                                               │
│  ├── Connect your social accounts (start with 5-10)                        │
│  ├── Get API credentials                                                    │
│  └── Add to Manus knowledge base                                            │
│                                                                             │
│  Day 5-7: Test Manus syndication                                            │
│  ├── Manually give Manus a test insight                                    │
│  ├── Have Manus syndicate to 5 channels                                    │
│  ├── Verify posts went live                                                 │
│  └── Refine templates based on results                                      │
│                                                                             │
│  DELIVERABLE: Manus can syndicate on command                               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  WEEK 3: SUPABASE MIGRATION                                                 │
│  ══════════════════════════                                                 │
│                                                                             │
│  Day 1-2: Set up Supabase                                                   │
│  ├── Create Supabase project                                                │
│  ├── Create tables (insights, citations, clients, syndication_records)     │
│  ├── Set up Row Level Security                                              │
│  └── Create API endpoints                                                   │
│                                                                             │
│  Day 3-4: Migrate from Base44                                               │
│  ├── Export any data from Base44                                           │
│  ├── Update frontend to use Supabase                                        │
│  ├── Test database operations                                               │
│  └── Set up webhooks for Manus triggers                                     │
│                                                                             │
│  Day 5-7: Deploy to Vercel                                                  │
│  ├── Push code to GitHub                                                    │
│  ├── Connect to Vercel                                                      │
│  ├── Set environment variables (Supabase keys)                             │
│  ├── Update embed URL in your site                                          │
│  └── Enable Vercel Analytics (for Manus monitoring)                        │
│                                                                             │
│  DELIVERABLE: Production-ready system with proper backend                  │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  WEEK 4: AUTOMATION + B2B                                                   │
│  ════════════════════════                                                   │
│                                                                             │
│  Day 1-3: Automate Manus triggers                                           │
│  ├── Set up Supabase webhook → Manus                                       │
│  ├── Test automatic syndication on bank                                    │
│  ├── Add monitoring workflow (Vercel logs → Manus)                         │
│  └── Create amplification workflow                                          │
│                                                                             │
│  Day 4-7: B2B white-label setup                                             │
│  ├── Add client management to Supabase                                      │
│  ├── Create client dashboard UI                                             │
│  ├── Test with "Harbour Club" as mock client                               │
│  └── Create sales materials                                                 │
│                                                                             │
│  DELIVERABLE: Fully automated system ready for B2B clients                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## THE ACTUAL ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FINAL SYSTEM ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  YOUR SITE (MiniMax/Custom)                                                 │
│  ══════════════════════════                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  [Home] [Collections] [Newsletter] [About]                          │   │
│  │                           │                                          │   │
│  │                           ▼                                          │   │
│  │              ┌─────────────────────────┐                            │   │
│  │              │  <iframe> or Component  │                            │   │
│  │              │  src="wukr-wire.vercel  │                            │   │
│  │              │       .app"             │                            │   │
│  │              └─────────────────────────┘                            │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    │ LOADS                                  │
│                                    ▼                                        │
│  VERCEL (Frontend Hosting)                                                  │
│  ═════════════════════════                                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  wukr-wire.vercel.app                                               │   │
│  │  ├── React/Next.js frontend                                         │   │
│  │  ├── API routes (serverless functions)                              │   │
│  │  └── Vercel Analytics (engagement logs)                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                          │                              │                   │
│                   READS/WRITES                    LOGS TO                   │
│                          ▼                              ▼                   │
│  SUPABASE (Backend)                           MANUS MONITORING              │
│  ══════════════════                           ════════════════              │
│  ┌─────────────────────────┐                 ┌─────────────────┐           │
│  │  Database:              │                 │  Scheduled task: │           │
│  │  ├── insights           │                 │  "Check Vercel   │           │
│  │  ├── citations          │                 │   logs for       │           │
│  │  ├── clients            │                 │   trending       │           │
│  │  ├── syndication_records│                 │   content"       │           │
│  │  │                      │                 └─────────────────┘           │
│  │  Webhooks:              │                          │                     │
│  │  └── On INSERT insight  │─────────────────────────┘                     │
│  │      → Trigger Manus    │                                                │
│  └─────────────────────────┘                                                │
│              │                                                              │
│              │ WEBHOOK FIRES                                                │
│              ▼                                                              │
│  MANUS (Syndication Engine)                                                 │
│  ══════════════════════════                                                 │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Knowledge Base:                                                     │   │
│  │  ├── SYNDICATION_TEMPLATES.md                                       │   │
│  │  ├── PLATFORM_CREDENTIALS.md (Metricool API, blog APIs)            │   │
│  │  ├── POSTING_RULES.md                                               │   │
│  │  └── CLIENT_ATTRIBUTIONS.md                                         │   │
│  │                                                                      │   │
│  │  Tasks:                                                              │   │
│  │  ├── Syndicate insight to 130+ channels                             │   │
│  │  ├── Monitor engagement via Vercel logs                             │   │
│  │  └── Create UGC for trending content                                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│              │                                                              │
│              │ POSTS VIA                                                    │
│              ▼                                                              │
│  METRICOOL + DIRECT APIs                                                    │
│  ═══════════════════════                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Metricool: Twitter, LinkedIn, Facebook, Instagram, TikTok, etc.   │   │
│  │  Direct: Medium API, Dev.to API, Hashnode API, Ghost API           │   │
│  │  Manual: Substack, Quora, Reddit, guest blogs                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## MANUS KNOWLEDGE BASE FILES TO CREATE

### File 1: SYNDICATION_TEMPLATES.md

```markdown
# Syndication Templates for Manus

## Twitter/X (280 chars)
```
🚨 {headline}

Key insight: {one_sentence_take}

Sources: {source_1}, {source_2}

Full analysis: {link}

#{industry} #{category}
```

## LinkedIn (3000 chars)
```
{headline}

{personalized_take}

Key Takeaways:
• {point_1}
• {point_2}
• {point_3}

Sources:
{citations_formatted}

{client_attribution}

#{industry} #Analysis #Intelligence
```

## Medium (Full article)
```
# {headline}

*{client_attribution}*

---

{personalized_take_expanded}

## Key Insights

{detailed_analysis}

## Sources

{citations_academic_format}

---

*Powered by WUKR Wire Intelligence*
```

[Continue for all 130 platforms...]
```

### File 2: PLATFORM_CREDENTIALS.md

```markdown
# Platform Credentials (CONFIDENTIAL)

## Metricool
- API Key: [TO BE ADDED]
- Workspace ID: [TO BE ADDED]
- Connected accounts: Twitter @wukrwire, LinkedIn /wukr-wire, etc.

## Medium
- Integration Token: [TO BE ADDED]
- Publication ID: wukr-wire

## Dev.to
- API Key: [TO BE ADDED]

[etc.]
```

### File 3: WORKFLOW_INSTRUCTIONS.md

```markdown
# Manus Syndication Workflow

## When you receive a syndication task:

1. PARSE the insight data:
   - Headline
   - Personalized take
   - Citations (verify all URLs work)
   - Client attribution (if any)

2. FORMAT for each platform using SYNDICATION_TEMPLATES.md

3. POST via Metricool API for social channels:
   ```
   POST https://api.metricool.com/v1/posts
   Authorization: Bearer {METRICOOL_API_KEY}
   Body: { content, platforms, scheduled_time }
   ```

4. POST via direct APIs for blogs:
   - Medium: POST /v1/users/{userId}/posts
   - Dev.to: POST /articles
   - etc.

5. LOG all posts to Supabase syndication_records table

6. REPORT completion with links to all posts
```

---

## IMMEDIATE ACTIONS (This Week)

```
TODAY:
□ Decide: Start with Base44 or go direct to Lovable+Supabase?
  → Recommendation: Base44 for speed, migrate later

TOMORROW:
□ Create Base44 project "Wukr Wire"
□ Copy WukrWireCited.tsx component code
□ Set up Base44 database tables

DAY 3:
□ Get basic feed working in Base44
□ Test citation display
□ Test bank functionality

DAY 4:
□ Create Metricool account
□ Connect 5 social accounts (Twitter, LinkedIn, etc.)
□ Get API credentials

DAY 5:
□ Create Manus knowledge base documents
□ Upload SYNDICATION_TEMPLATES.md
□ Upload WORKFLOW_INSTRUCTIONS.md
□ Test manual syndication with Manus

DAY 6-7:
□ Embed Base44 component into your site
□ Create "Newsletter" tab
□ Test end-to-end flow
```

---

## COST BREAKDOWN

```
IMMEDIATE COSTS:
├── Base44: Free tier (to start)
├── Metricool: ~$20/month (basic plan)
├── Manus: Your existing subscription
└── TOTAL: ~$20/month

PRODUCTION COSTS (Week 3+):
├── Supabase: $25/month (Pro)
├── Vercel: $20/month (Pro)
├── Metricool: $50/month (more accounts)
├── API costs: ~$50/month (xAI, news APIs)
└── TOTAL: ~$145/month

REVENUE NEEDED TO COVER:
├── 5 Pro subscribers @ $29 = $145 ✓
└── OR 1 B2B client @ $999 = covered for 7 months ✓
```

---

## SUMMARY: THE CLEAR PATH

```
PHASE 1 (Week 1): 
Build MVP in BASE44 → Embed in your site → Test yourself

PHASE 2 (Week 2):
Set up MANUS knowledge base → Connect METRICOOL → Test syndication

PHASE 3 (Week 3):
Migrate to SUPABASE + VERCEL → Set up webhooks → Automate

PHASE 4 (Week 4):
Add B2B features → Onboard first client → Revenue
```

**The staging is now clear. The hypothesis has a home.**

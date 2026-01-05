# Ezra Rollout: Decisions Needed

**Target:** End of January 2026
**Status:** Built and ready. Blocked on approvals.

This document lists decisions that need to be made by stakeholders to move forward. Each item includes context, options, and consequences of delay.

---

## People

| Abbrev | Name | Role |
|--------|------|------|
| CO | Christian Owens | Chief Design Officer (Board) |
| LP | Lauren Paver | COO / co-CEO (Board) |
| LF | Lisa Ftize | Finance Director |
| CB | Craig Bogner | CIO/CTO (Innerium, outsourced) |
| CC | Cody Cunningham | Chief Growth Officer (Board) |
| CM | Chad Martin | Design Tech Director |
| TS | Tony Schmitz | Principal, Process Performance Director |
| JS | Josh Sawyer | Principal, Educational Planning Director |
| TH | Terry Hoyle | CEO |

---

## 1. Research Hours Policy (CO, LP, LF)

**Decision Owner:** CO, LP, LF
**Decision:** Reverse the "research on the clock" policy and restore OT eligibility for research hours.

### Context

- **Revenue decline:** $75M (2024) → ~$50M (2025) → expected decline in 2026
- **OT was cut firm-wide** to reduce costs during the downturn
- **Research OT got swept** because designers were the only ones using it
- **2026 reality:** Every hour needs to be billable

**The problem:** The on-clock model takes 2,000 billable hours and converts them to research. In a year where we need every hour billing, this costs $300,000 in lost revenue.

**The solution:** The OT model keeps those 2,000 hours billable and moves research to after hours. Cost: $33,350 in overhead.

**The irony:** OT was cut to save money, but this specific cut actually reduces revenue.

### Historical Data

**R&B Department:**
- 11 active projects in 2025 (X25-RB01 through X25-RB11)
- 5 Claude accounts allocated (research1-5@pflugerarchitects.com)
- ~7 active researchers

**2025 Research Hours (actual):** 726 total
- Hours by researcher: 253, 199, 129, 72, 49, 23, 1
- 7 researchers logged hours

**2026 Research Hours (approved):** 2,000

**Gap:** 2025 actual (726) was only 36% of 2026 target. Research is already being suppressed under current model.

**Quote from PM** (when trying to allocate two staff to research, not even on project hours):
> "Try to increase the efficiency of the process by removing 33% of the hours."

This is the reality: even when research is approved, PMs push back to cut hours. On-clock research will always lose to billable work.

**The math of "free" research:**

If the expectation is 2,000 hours of unpaid labor from 7 researchers:
- ~285 hrs/person/year
- ~5.5 hrs/week of free work
- On top of 40 billable hours
- With no compensation

The 726 vs 2,000 gap shows people aren't doing it. And they won't.

### The Math

**Assumptions:**
- Employee hourly rate: $50/hr
- Billing rate to client: $150/hr (3x)
- Utilization target: 85% (34 billable hrs/week expected)
- Research OT rate: $50/hr (1:1, not 1.5x)
- Old policy: First 4 hrs/week research unpaid, paid after
- Example: 1 person doing 6 hrs research/week

---

**Option A: Research on OT (Old Model)**

| Component | Calculation | Amount |
|-----------|-------------|--------|
| Revenue | 34 billable hrs × $150 (85% utilization) | +$5,100/week |
| Base wages | 40 hrs × $50 | -$2,000/week |
| Research OT | 2 hrs × $50 (first 4 unpaid) | -$100/week |
| **Net** | | **+$3,000/week** |
| **Annual** | × 52 weeks | **+$156,000/year** |

**Utilization:** 85% maintained (research is after hours)

---

**Option B: Research on Clock (Current Policy)**

| Component | Calculation | Amount |
|-----------|-------------|--------|
| Revenue | 28 billable hrs × $150 (6 hrs to research) | +$4,200/week |
| Base wages | 40 hrs × $50 | -$2,000/week |
| **Net** | | **+$2,200/week** |
| **Annual** | × 52 weeks | **+$114,400/year** |

**Utilization hit:** 85% target → 70% actual (6 hrs research out of 34 expected billable)

---

**Per Researcher (6 hrs research/week):**

| | Option A (OT) | Option B (On Clock) | Difference |
|-|---------------|---------------------|------------|
| Weekly net | +$3,000 | +$2,200 | -$800/week |
| Annual net | +$156,000 | +$114,400 | **-$41,600/year** |
| Utilization | 85% (maintained) | 70% (15pt drop) | |

---

**At Scale: 2,000 Approved Research Hours (10 projects @ 200 hrs each)**

| | Option A (OT) | Option B (On Clock) |
|-|---------------|---------------------|
| Research hours | 2,000 | 2,000 |
| OT cost | 667 hrs × $50 = $33,350 | $0 |
| Lost billing (at 85% util) | $0 | 2,000 × $150 × 85% = $255,000 |
| **Total impact** | **-$33,350** | **-$255,000** |

**2026 with 2,000 Research Hours - Compared to Baseline (No Research):**

To integrate 2,000 hours of research, there are two approaches:

| | Option A: On Clock (New) | Option B: OT (Old) |
|-|--------------------------|---------------------|
| Lost revenue (at 85% util) | -$255,000 | $0 |
| Overhead (OT) | $0 | -$33,350 |
| **Impact** | **-$255,000 lost revenue** | **-$33,350 overhead** |

**To get the same 2,000 hours of research:**
- Option A (on clock): **$255,000 in lost revenue** + utilization drops 85% → 70%
- Option B (OT): **$33,350 in overhead** + utilization maintained at 85%

**Option B delivers the same research output at 1/8th the cost, as overhead instead of lost revenue.**

### Additional Consequences

1. **Zero project friction** - Under OT model, research doesn't compete with project deadlines
2. **Employee incentive** - If OT is only available for research, research becomes desirable
3. **Training enablement** - Ezra training can happen during research OT, not billable hours

### Recommendation

Restore research OT eligibility. Use Ezra adoption as the pilot program.

---

## 2. Infrastructure Platform (LF, LP, CB + Board?)

**Decision Owner:** LF, LP, CB (budget approval may require shareholders/board)
**Decision:** Where does Ezra's data live?

### Options

| Platform | Pros | Cons |
|----------|------|------|
| Cloudflare D1/R2 | Fast, cheap, serverless, already used elsewhere | New vendor approval |
| Bluehost (existing) | Already approved, MySQL/PHP | Legacy stack, no serverless |
| Supabase | Modern, Postgres, real-time | New vendor approval |
| OpenAsset | Already have DAM | Not a database platform |
| Local drive | No approval needed | No web access, single point of failure |

### Consequence of Delay

Cannot finalize database schema. Cannot build persistence layer. Cannot store pitches, hours, preferences.

### Recommendation

Cloudflare D1/R2. Already proven in other projects. Minimal cost. No server management.

---

## 3. API Vendor Approvals (CB)

**Decision Owner:** CB
**Decision:** Approve external API usage for Ezra

### APIs Pending

| API / Service | Purpose | Monthly Cost | Approval Needed |
|---------------|---------|--------------|-----------------|
| Claude Teams | Standard + Premium seats, Claude Code | ~$30/user/mo | Username/account |
| Claude Developer API | AI assistant integration | ~$20-50 | Username/account |
| OpenAsset API | Project image sync | Included in license | Username/account |
| Vantage Point API | CRM / contact routing | Included in license | Username/account |
| Mapbox API | Interactive maps | Free tier (50k loads/mo) | Username/account |
| Cloudflare (D1/R2/Workers) | Database + storage + serverless | ~$5-20 | Username/account |
| Supabase | Database alternative | Free tier / ~$25 | Username/account |
| GitHub | Code repository, new username | Included / Free | Username/account |
| Census API | Demographics / district data | Free | Username/account |
| Bluehost | Existing hosting (MySQL/PHP) | Already paying | Access restoration |

### Consequence of Delay

- TheRepo (AI assistant) runs on mock responses only
- Images remain Unsplash placeholders
- Collaborate form doesn't route anywhere

### Recommendation

Approve Claude API first. Highest user impact, lowest cost.

---

## 4. Public Launch Content (CO, CC)

**Decision Owner:** CO, CC
**Decision:** Approve public-facing content for Ezra launch

### What Needs Review

- [ ] Research project descriptions (12 projects)
- [ ] About/Process/Tools page copy
- [ ] Use of AI transparency statement
- [ ] Map presentation of confidential projects (currently show as locked)

### Consequence of Delay

Cannot launch public map or portfolio. Research visibility remains internal only.

---

## 5. Public Launch Branding (CC)

**Decision Owner:** CC (new Marketing Director)
**Decision:** Approve Ezra branding alignment with firm standards

### What Needs Review

- [ ] Color palette alignment (currently using Pfluger brand colors)
- [ ] Typography consistency
- [ ] Logo usage on platform
- [ ] URL/domain decision (ezra.pfluger? research.pfluger?)

### Consequence of Delay

Cannot launch public-facing pages. Research team has no external showcase.

---

## 6. Internal Launch (CO, CB)

**Decision Owner:** CO, CB
**Decision:** Approve internal dashboard for research team

### What Needs Review

- [ ] Dashboard functionality scope
- [ ] TheRepo AI assistant approach
- [ ] Pitch submission workflow
- [ ] Analytics/metrics visibility

### Consequence of Delay

Research team continues using spreadsheets/email. No centralized project tracking.

---

## 7. Timesheet Code Creation (LP, LF)

**Decision Owner:** LP, LF
**Decision:** Create a timesheet project code for Ezra/Research participation

### The Problem

- Alex controls projects in Vantage Point
- But creating new project codes requires approval
- Without a code, hours have nowhere to go
- Even if OT is restored, researchers can't log time without a valid code

### What's Needed

| Code Type | Purpose | Approver |
|-----------|---------|----------|
| Research OT code | Track research overtime hours | ? |
| Ezra training code | One-time training allocation | ? |
| Ezra participation code | Ongoing tool usage | ? |

### Consequence of No Code

Researchers either:
1. Don't use the tool (can't log time)
2. Bury hours in project overhead (inaccurate tracking, PM friction)
3. Log incorrectly (audit risk)

### Dependency

This blocks Decision #8 (Training + Participation). Can't allocate time to something that doesn't exist in the system.

---

## 8. Training + Participation Time (CO, JS, CM, TS)

**Decision Owner:** CO, JS, CM (software tools integration), TS (process)
**Decision:** Where do training hours and ongoing participation hours live?

### The Fork

This decision branches entirely based on Decision #1 (Research OT Policy):

#### Branch A: OT Restored

| Concern | Resolution |
|---------|------------|
| Training time | Research OT hours - no project impact |
| Participation time | Research OT hours - no project impact |
| PM friction | Minimal - it's OT, not their budget |
| Timesheet | Clean category: Research OT |
| Incentive | Researchers want the hours (only OT available) |

**Problems reduced but not eliminated:**
- Still need department awareness
- Still need basic onboarding materials
- PMs need to know tool exists (for project benefit)

#### Branch B: No OT (Current State)

| Concern | Resolution |
|---------|------------|
| Training time | Competes with billable project hours |
| Participation time | Competes with billable project hours EVERY WEEK |
| PM friction | Constant - "why is my resource not billing?" |
| Timesheet | Where does it go? Overhead? Which code? |
| Incentive | None - researchers avoid it to protect billable % |

**Ongoing friction points:**
- Every hour of Ezra use requires implicit PM approval
- Researchers avoid using tool to maintain billable ratios
- Tool adoption fails regardless of quality
- Investment in building Ezra wasted

### The Real Question

It's not "how do we allocate training time?"

It's: **Does Ezra participation have a legitimate home in the timesheet, or does every use require justification?**

If participation has no home, adoption is dead on arrival.

---

## 9. Marketing & Publishing (CO, CC)

**Decision Owner:** CO, CC
**Decision:** Approve research publications and external marketing

### What Needs Approval

- [ ] Texas Architect submissions (e.g., X25-RB01 Sanctuary Spaces)
- [ ] Conference presentations (A4LE LearningScapes, etc.)
- [ ] External research shareouts
- [ ] Case studies and white papers
- [ ] Social media / firm website content

### The Problem

Research is completed but sits unpublished. Marketing integration unclear. No clear path from "research done" to "research visible."

### Consequence of Delay

- Research investment yields no external visibility
- Firm differentiation doesn't happen
- Thought leadership stays internal
- Competitive advantage from research unrealized

---

## 10. Prism SaaS / Subscription Model (TH, LP, PMs/Principals)

**Decision Owner:** TH (CEO), LP, any PM or Principal (client-facing)
**Decision:** Approve Prism as commercial SaaS product

### What Needs Approval

- [ ] Subscription pricing model
- [ ] Client partnership agreements
- [ ] Licensing structure
- [ ] Help desk / support infrastructure
- [ ] Insurance / liability coverage
- [ ] IP ownership clarity

### The Problem

Prism is built. Leadership wants it to be a full-fledged SaaS. But no infrastructure exists for:
- Client support
- Licensing
- Partnerships
- Insurance

Any PM or Principal who talks to a client can create expectations the firm can't meet.

### Consequence of Delay

- Tool sits unused or under-utilized
- No revenue from subscription model
- Competitive advantage unrealized
- Risk of client expectations without support structure

---

## Summary: Critical Path

```
Research OT Policy (#1)
        |
        v
Infrastructure Decision (#2) --> API Approvals (#3)
        |                              |
        v                              v
Content/Brand Approval (#4, #5)   Internal Approval (#6)
        |                              |
        +--------- Training (#7) ------+
                       |
                       v
                  LAUNCH
```

**Minimum viable launch:** Decisions #4 + #5 (public only, no internal features)
**Full launch:** All 7 decisions

---

## Ask

Schedule 30-minute decision meeting with:
- CO (Design Director)
- CC (Marketing Director)
- CB (Tech/Budget)
- LF (Finance)
- LP (?)

Agenda: Review this document, make decisions, unblock January launch.

---

## Summary by Person

| Person | Decisions | Role |
|--------|-----------|------|
| CO | #1, #4, #6, #8, #9 | Chief Design Officer (Board) |
| LP | #1, #2, #7 | COO / co-CEO (Board) |
| LF | #1, #2, #7 | Finance Director |
| CB | #2, #3, #6 | CIO/CTO (Innerium) |
| CC | #4, #5, #9 | Chief Growth Officer (Board) |
| CM | #8 | Design Tech Director (software tools) |
| TS | #8 | Principal, Process Performance Director |
| JS | #8 | Principal, Educational Planning Director |
| TH | #10 | CEO |

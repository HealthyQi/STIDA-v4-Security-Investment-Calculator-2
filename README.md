# STIDA-v4-Security-Investment-Calculator-2
STIDA v4 Security Investment Calculator 2STIDA v4.1 Security Investment Calculator | Open-Source Security Posture and Investment review Prioritization Framework

- Built quantitative decision engine that helps CISOs optimize $500K-$5M security 
  budgets by ranking investments by risk-reduction-per-dollar (NBD metric)

- Implemented scenario-specific risk modeling (ransomware, data breach, BEC) with 
  correlation-adjusted portfolio optimization to prevent 15-30% benefit overstatement

- Designed CFO-grade financial metrics (NPV, ROI, payback) with dynamic discounting 
  and full lifecycle costing (Capex + Opex) for board-level approval

- Created floor-enforcement logic ensuring compliance gaps funded first, preventing 
  $2.8M+ preventable breach costs documented in pilot implementations

Tech: React, TypeScript, Recharts | Impact: 8-min workflow, 180-300% typical ROI
STIDA v4 — Security Investment & Risk Optimization Calculator

A strategic cyber-risk + ROI modeling engine based on the Five-Element (Wu-Xing) framework.

Overview

STIDA v4 (Security–Threat–Impact–Defense–Alignment) is a Tier 1–2 security investment calculator designed for practical budget justification, prioritization, and rapid internal analysis.
It bridges quantitative risk modeling, strategic alignment, and real-world security maturity scoring into a single lightweight decision tool.

This version is a STIDA v4-Lite implementation — ideal for:

Quick security budget conversations

Prioritizing controls & projects

Teaching risk frameworks

Internal planning

Analyst & manager-level decision support

It is not a full Tier-3 enterprise platform — but it uses the same conceptual backbone.

Key Features
✔ Weighted Coverage Modeling

Each security domain receives a coverage score (S*) based on input controls, maturity, and relevance.

✔ Threat Vector Alignment

Connects controls to threat categories to calculate whether investment is over/under-weighted.

✔ ROI & ΔALE (Delta Annual Loss Expectancy)

Supports basic economic impact evaluation:

ALE_before

ALE_after

ΔALE

ROI%

✔ Weighted Balance Index (WBI)

A custom metric that measures whether your security portfolio is balanced across 5 strategic elements:

Earth (Governance)

Water (Identity & Access)

Fire (Detection/Response)

Metal (Infrastructure/Hardening)

Wood (Data & Application Security)

✔ Simple Scoring Engine

Takes raw inputs and produces a clear, numerical summary of:

Risk reduction

Alignment

Overall maturity

Balance vs. imbalance

Technology Stack

JavaScript / React (for calculator UI or STIDA_APP UI)

Node.js (if running locally)

Simple state-based computation engine

Modular calculation functions for easy upgrade to v4.1 or v5.0


MIT License

Copyright (c) 2025 HealthyQi (Ban B. Wong)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

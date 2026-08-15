import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    number: "01",
    title: "Inventory Variance Control - Heat Treatment Stage",
    subtitle: "Manufacturing Environment • SAP MM • Inventory Governance",
    problem:
      "Recurring stock mismatches were observed during physical verification, particularly at the Heat Treatment (HT) stage, impacting inventory accuracy and audit confidence.",
    role:
      "Led variance investigation, analyzed SAP movement data, and developed a Power BI dashboard to isolate stage-wise discrepancies.",
    findings: [
      "42 materials impacted",
      "−1161 Qty variance identified",
      "100% variance traced to HT stage",
      "Root cause: removal of movement-based control",
    ],
    impact: [
      "Restored system-level accountability",
      "Prevented undetected inventory leakage",
      "Strengthened audit readiness",
      "Improved inventory governance discipline",
    ],
    tools: ["SAP MM", "Power BI", "Excel", "Physical Stock Verification"],
    accent: "blue",
    github: "",
  },
  {
    number: "02",
    title: "Weighing Scale Accuracy & Inventory Conversion Optimization",
    subtitle: "Process Study • Inventory Accuracy • Metrological Analysis",
    problem:
      "Minor but recurring stock discrepancies were observed during weight-to-piece conversion of lightweight components.",
    role:
      "Conducted controlled experimental trials, analyzed sampling logic, and validated metrological behavior across weight ranges.",
    findings: [
      "Scale accuracy stabilizes above 2kg load",
      "Below threshold → rounding variation increases",
      "Discrepancies were systemic, not operator-driven",
    ],
    impact: [
      "Reduced inventory conversion variance",
      "Scientifically justified audit discrepancies",
      "Improved operational accuracy",
      "Lowered reconciliation effort",
    ],
    tools: ["Excel", "Statistical Analysis", "Process Validation"],
    accent: "orange",
    github: "",
  },
  {
    number: "03",
    title: "SAP MM Inventory Flow Analysis",
    subtitle: "GRN → Consumption → Reconciliation • Financial Impact Analysis",
    problem:
      "Limited visibility existed between Goods Receipt (GRN), production consumption, and reconciliation processes.",
    role:
      "Modeled SAP MM transactional data and developed a Power BI MIS dashboard to track movement trends and variance patterns.",
    findings: [
      "GRN vs consumption trend gaps identified",
      "Material-level discrepancy mapping",
      "Quantity & value-based variance visibility",
      "Plant and storage-location filtering logic applied",
    ],
    impact: [
      "Improved inventory movement visibility",
      "Enabled faster discrepancy detection",
      "Supported structured audit reconciliation",
      "Strengthened reporting reliability",
    ],
    tools: ["SAP MM", "Power BI", "Advanced Excel", "MIS Reporting"],
    accent: "green",
    github: "",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#020817] px-6 pb-28 pt-20 text-slate-100 md:px-10 lg:pt-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[500px] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Projects & Case Studies
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Turning operational problems into{" "}
              <span className="text-blue-400">
                measurable improvements.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Selected projects across inventory intelligence, SAP MM,
              manufacturing controls, process validation, and operational
              analytics.
            </p>
          </motion.div>
          {/* FEATURED PROJECTS */}

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Featured Projects
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Analytics built around real business problems.
            </h2>
          </div>

          {/* GRN SHORTAGE ANALYTICS */}

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mb-8 overflow-hidden rounded-3xl border border-blue-400/20 bg-white/[0.035] p-7 shadow-[0_0_70px_rgba(37,99,235,0.08)] md:p-10"
          >
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Featured Project
                </span>

                <span className="text-xs font-medium text-slate-500">
                  01 — Manufacturing Inventory Analytics
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                GRN Shortage Analytics Suite V2
              </h2>

              <p className="mt-3 text-sm text-blue-300">
                GRN Shortage Analysis • Vendor Risk • Material Risk • Lead-Time
                Analysis • Pareto • Executive Analytics
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <CaseSection
                  title="Business Problem"
                  content="GRN shortage and delayed receipt data required a structured analytical framework to identify shortage exposure, prioritize high-risk materials and vendors, and provide management with actionable visibility."
                />

                <CaseSection
                  title="Project Objective"
                  content="Build an end-to-end GRN shortage analytics suite capable of converting raw receipt data into vendor performance, material performance, risk prioritization, shortage exposure, and executive decision-support insights."
                />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <CaseSection
                  title="Analytics Engine"
                  list={[
                    "Vendor Performance Analysis",
                    "Material Performance Analysis",
                    "Risk Classification Engine",
                    "Supplier Lead-Time Analysis",
                    "Shortage Quantity & Value Analysis",
                    "Executive KPI Engine",
                  ]}
                />

                <CaseSection
                  title="Project Scale"
                  list={[
                    "1,408 GRN records analyzed",
                    "57 vendors evaluated",
                    "218 materials analyzed",
                    "Vendor & material performance engines",
                    "Executive filter and drill-down framework",
                    "Pareto-based concentration analysis",
                  ]}
                />
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Decision Framework
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {[
                    "Risk Level",
                    "Supplier Lead Time",
                    "Shortage Exposure",
                    "Vendor / Material Priority",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="rounded-lg border border-emerald-400/10 bg-[#071426] px-3 py-2 text-xs font-medium text-slate-300">
                        {item}
                      </span>

                      {index < 3 && (
                        <span className="text-emerald-400">→</span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-400">
                  The framework prioritizes materials and suppliers by combining
                  risk exposure with supplier lead-time behavior, helping
                  management focus attention on the shortages most likely to
                  create operational impact.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "WPS Office",
                  "Advanced Excel",
                  "Inventory Analytics",
                  "Vendor Analytics",
                  "Risk Analysis",
                  "Pareto Analysis",
                  "Executive Dashboard",
                ].map((tool) => (
                  <ToolTag key={tool}>{tool}</ToolTag>
                ))}
              </div>

              <div className="mt-9">
                <ProjectLink
                  href="https://github.com/SakthiSivakumar-io/GRN-Shortage-Analytics-Suite-V2"
                  label="GitHub Repository"
                  primary
                />
              </div>
            </div>
          </motion.article>

          {/* RETAIL INVENTORY INTELLIGENCE */}

          <motion.article
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-emerald-400/15 bg-white/[0.035] p-7 shadow-[0_0_70px_rgba(16,185,129,0.06)] md:p-10"
          >
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[100px]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Featured Project
                </span>

                <span className="text-xs font-medium text-slate-500">
                  02 — Retail Intelligence
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl">
                Retail Inventory Intelligence Solution
              </h2>

              <p className="mt-3 text-sm text-emerald-300">
                Power BI • DAX • Power Query • Inventory Analytics • Business Intelligence
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <CaseSection
                  title="Business Context"
                  content="Retail inventory teams often struggle with stock visibility, replenishment planning, inventory risk identification, stock availability monitoring, and executive decision-making."
                />

                <CaseSection
                  title="Project Objective"
                  content="Develop an end-to-end Inventory Intelligence Solution capable of monitoring inventory health, identifying risks, analyzing products, supporting replenishment decisions, and delivering executive-level business recommendations."
                />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <CaseSection
                  title="Solution Developed"
                  list={[
                    "Executive Inventory Overview Dashboard",
                    "Inventory Risk & Replenishment Dashboard",
                    "Product Intelligence Drill-through Center",
                    "Executive Recommendations Dashboard",
                  ]}
                />

                <CaseSection
                  title="Key Insights Identified"
                  list={[
                    "1,670 Products Analyzed",
                    "14 Categories Monitored",
                    "453 Out-of-Stock Products Identified",
                    "546 Low-Stock Products Monitored",
                    "₹7.20 Lakhs Inventory Risk Exposure",
                    "87.86% Inventory Availability",
                  ]}
                />
              </div>

              <div className="mt-5 rounded-2xl border border-blue-400/10 bg-blue-400/[0.035] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Business Impact
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Improved inventory visibility",
                    "Enabled proactive replenishment planning",
                    "Reduced stock-out identification effort",
                    "Provided executive-level decision support",
                    "Centralized inventory monitoring framework",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1 text-blue-400">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Power BI",
                  "DAX",
                  "Power Query",
                  "Excel",
                  "Inventory Analytics",
                  "Business Intelligence",
                ].map((tool) => (
                  <ToolTag key={tool}>{tool}</ToolTag>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <ProjectLink
                  href="https://github.com/SakthiSivakumar-io/zepto-retail-inventory-intelligence-dashboard"
                  label="GitHub Repository"
                  primary
                />

                <ProjectLink
                  href="https://github.com/SakthiSivakumar-io/zepto-retail-inventory-intelligence-dashboard/blob/main/reports/Zepto_Retail_Inventory_Intelligence_Report.pdf"
                  label="View Project Report"
                />
              </div>
            </div>
          </motion.article>

          {/* OTHER PROJECTS */}

          <div className="mt-16">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Selected Work
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                Operations, control & analytics.
              </h2>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className={`rounded-2xl border bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 md:p-9 ${
                    project.accent === "green"
                      ? "border-emerald-400/10 hover:border-emerald-400/25"
                      : project.accent === "orange"
                        ? "border-orange-400/10 hover:border-orange-400/25"
                        : "border-blue-400/10 hover:border-blue-400/25"
                  }`}
                >
                  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                    {/* Project identity */}

                    <div>
                      <p
                        className={`text-xs font-bold tracking-[0.2em] ${
                          project.accent === "green"
                            ? "text-emerald-400"
                            : project.accent === "orange"
                              ? "text-orange-400"
                              : "text-blue-400"
                        }`}
                      >
                        {project.number}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-slate-500">
                        {project.subtitle}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <ToolTag key={tool}>{tool}</ToolTag>
                        ))}
                      </div>

                      {project.github ? (
                        <div className="mt-8">
                          <ProjectLink
                            href={project.github}
                            label="GitHub Repository"
                          />
                        </div>
                      ) : (
                        <div className="mt-8">
                          <span className="text-xs text-slate-600">
                            Repository link will be added
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project analysis */}

                    <div className="grid gap-5 md:grid-cols-2">
                      <CaseSection
                        title="Core Problem"
                        content={project.problem}
                      />

                      <CaseSection
                        title="My Role"
                        content={project.role}
                      />

                      <CaseSection
                        title="Key Findings"
                        list={project.findings}
                      />

                      <CaseSection
                        title="Business Impact"
                        list={project.impact}
                        highlight
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Closing statement */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 text-center"
          >
            <p className="text-sm text-slate-500">
              From operational problem
              <span className="mx-2 text-blue-400">→</span>
              analysis
              <span className="mx-2 text-blue-400">→</span>
              control
              <span className="mx-2 text-blue-400">→</span>
              measurable impact
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              Every project starts with a business problem.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ================= Reusable Components ================= */

function CaseSection({
  title,
  content,
  list,
  highlight = false,
}: {
  title: string;
  content?: string;
  list?: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-emerald-400/10 bg-emerald-400/[0.025]"
          : "border-blue-400/10 bg-white/[0.015]"
      }`}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.16em] ${
          highlight ? "text-emerald-400" : "text-blue-400"
        }`}
      >
        {title}
      </p>

      {content && (
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {content}
        </p>
      )}

      {list && (
        <ul className="mt-3 space-y-2">
          {list.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm leading-6 text-slate-400"
            >
              <span
                className={
                  highlight ? "mt-1 text-emerald-400" : "mt-1 text-blue-400"
                }
              >
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ToolTag({ children }: { children: string }) {
  return (
    <span className="rounded-lg border border-blue-400/10 bg-[#071426] px-3 py-1.5 text-xs font-medium text-slate-400">
      {children}
    </span>
  );
}

function ProjectLink({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 ${
        primary
          ? "bg-blue-600 text-white hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
          : "border border-slate-700 bg-white/[0.02] text-slate-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:text-white"
      }`}
    >
      {label}
      <span className="text-blue-300">↗</span>
    </a>
  );
}





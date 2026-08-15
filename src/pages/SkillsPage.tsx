import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillGroups = [
  {
    title: "INVENTORY & SUPPLY CHAIN",
    subtitle: "Operations & Control",
    accent: "blue",
    icon: "▣",
    skills: [
      "Inventory Control",
      "Stock Reconciliation",
      "GRN & Goods Receipt",
      "Variance Analysis",
      "Physical Inventory",
      "Audit Support",
      "Root Cause Analysis",
    ],
  },
  {
    title: "SAP MM & ERP",
    subtitle: "Enterprise Systems",
    accent: "green",
    icon: "◈",
    skills: [
      "Procure to Pay (P2P)",
      "GR / IR",
      "Material Master",
      "Inventory Management",
      "MIGO / MB51 / MB52",
      "Data Integrity",
      "SAP MM Operations",
    ],
  },
  {
    title: "ANALYTICS & REPORTING",
    subtitle: "Data & Decision Support",
    accent: "orange",
    icon: "▥",
    skills: [
      "Advanced Excel",
      "Power Query",
      "Power BI",
      "DAX",
      "SQL",
      "Data Modeling",
      "Dashboard Reporting",
    ],
  },
];

const tools = [
  "SAP MM",
  "Excel",
  "Power BI",
  "Power Query",
  "DAX",
  "SQL",
  "Inventory Analytics",
  "MIS Reporting",
];

export default function SkillsPage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#020817] px-6 pb-24 pt-20 text-slate-100 md:px-10 lg:pt-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[300px] h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Skills & Expertise
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Skills that connect{" "}
              <span className="text-blue-400">operations</span> with data.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A practical combination of inventory operations, SAP MM,
              analytics, reporting, and process improvement capabilities built
              through hands-on manufacturing experience.
            </p>
          </motion.div>

          {/* Skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-6 lg:grid-cols-3"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 ${
                  group.accent === "green"
                    ? "border-emerald-400/15 hover:border-emerald-400/30"
                    : group.accent === "orange"
                      ? "border-orange-400/15 hover:border-orange-400/30"
                      : "border-blue-400/15 hover:border-blue-400/30"
                }`}
              >
                {/* Accent glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-[70px] ${
                    group.accent === "green"
                      ? "bg-emerald-400/10"
                      : group.accent === "orange"
                        ? "bg-orange-400/10"
                        : "bg-blue-400/10"
                  }`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`mb-7 flex h-14 w-14 items-center justify-center rounded-xl border text-xl ${
                      group.accent === "green"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : group.accent === "orange"
                          ? "border-orange-400/20 bg-orange-400/10 text-orange-300"
                          : "border-blue-400/20 bg-blue-400/10 text-blue-300"
                    }`}
                  >
                    {group.icon}
                  </div>

                  <p
                    className={`text-xs font-semibold tracking-[0.18em] ${
                      group.accent === "green"
                        ? "text-emerald-400"
                        : group.accent === "orange"
                          ? "text-orange-400"
                          : "text-blue-400"
                    }`}
                  >
                    {group.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {group.subtitle}
                  </h2>

                  <div className="mt-7 space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            group.accent === "green"
                              ? "bg-emerald-400"
                              : group.accent === "orange"
                                ? "bg-orange-400"
                                : "bg-blue-400"
                          }`}
                        />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`mt-8 h-px w-24 ${
                      group.accent === "green"
                        ? "bg-emerald-400/70"
                        : group.accent === "orange"
                          ? "bg-orange-400/70"
                          : "bg-blue-400/70"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-2xl border border-blue-400/10 bg-white/[0.025] p-7 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Working Toolkit
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Systems & analytical tools
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 md:max-w-2xl md:justify-end">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-blue-400/10 bg-[#071426] px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-blue-400/30 hover:text-blue-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500">
              Operations knowledge{" "}
              <span className="mx-2 text-blue-400">+</span> SAP MM{" "}
              <span className="mx-2 text-blue-400">+</span> Analytics
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              Turning operational data into better business decisions.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

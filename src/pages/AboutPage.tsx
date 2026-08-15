import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  const careerDNA = [
    {
      title: "OPERATIONS",
      text: "Understanding business & process",
      icon: "◈",
    },
    {
      title: "SAP MM",
      text: "Managing data in real-time",
      icon: "▣",
    },
    {
      title: "INVENTORY CONTROL",
      text: "Ensuring accuracy & compliance",
      icon: "◉",
    },
    {
      title: "DATA ANALYSIS",
      text: "Extracting meaningful insights",
      icon: "◌",
    },
    {
      title: "BUSINESS DECISION",
      text: "Driving measurable impact",
      icon: "↗",
    },
  ];

  const capabilities = [
    {
      title: "Inventory Governance",
      description:
        "Ensuring inventory accuracy through reconciliation, variance analysis, cycle counting, physical stock audits, and inventory control frameworks.",
      accent: "blue",
    },
    {
      title: "SAP MM & ERP",
      description:
        "Managing GRN, consumption, stock transfers, material movements, reconciliation processes, and inventory visibility through SAP MM.",
      accent: "green",
    },
    {
      title: "Audit & Compliance",
      description:
        "Supporting inventory audits, documentation reviews, control validation, root-cause analysis, and corrective action tracking.",
      accent: "purple",
    },
    {
      title: "Business Analytics",
      description:
        "Using Excel, Power BI, Power Query, SQL, and reporting tools to convert operational data into actionable management insights.",
      accent: "orange",
    },
  ];

  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#020817] px-6 pb-24 pt-20 text-slate-100 md:px-10 lg:pt-24">
        {/* Ambient background */}
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[260px] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              About Me
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Where Operations{" "}
              <span className="text-blue-400">Meet Data.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Results-driven Inventory Analyst with 4+ years of experience in
              Inventory Control, SAP MM, Business Analytics, and operational
              governance.
            </p>
          </motion.div>

          {/* Main profile */}
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-blue-400/10 bg-white/[0.025] p-7 md:p-10"
            >
              <div className="grid gap-10 md:grid-cols-[1fr_220px]">
                <div>
                  <p className="text-base leading-8 text-slate-300">
                    I specialize in inventory governance, SAP MM operations,
                    inventory reconciliation, audit support, and operational
                    reporting within manufacturing environments.
                  </p>

                  <p className="mt-6 text-base leading-8 text-slate-400">
                    Throughout my career, I have worked with{" "}
                    <span className="font-semibold text-white">
                      10,000+ materials
                    </span>
                    , supported audit activities covering approximately{" "}
                    <span className="font-semibold text-emerald-400">
                      {"\u20B9"}16 Crore
                    </span>{" "}
                    of inventory value, and investigated stock discrepancies,
                    process failures, and inventory control gaps.
                  </p>

                  <p className="mt-6 text-base leading-8 text-slate-400">
                    My work extends beyond routine inventory transactions. I
                    focus on identifying root causes behind operational issues,
                    strengthening internal controls, improving inventory
                    visibility, and ensuring that physical stock aligns with
                    system records.
                  </p>

                  <p className="mt-6 text-base leading-8 text-slate-400">
                    By combining SAP MM expertise with analytical thinking, I
                    transform operational data into actionable business
                    insights that support better decisions and reduce
                    inventory-related risks.
                  </p>
                </div>

                {/* Profile visual */}
                <div className="flex items-center justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/[0.04]">
                    <div className="absolute inset-3 rounded-full border border-blue-400/20" />
                    <div className="absolute inset-7 rounded-full border border-blue-400/10" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-slate-900 text-4xl font-bold text-blue-300 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                      SS
                    </div>

                    <span className="absolute right-1 top-10 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                    <span className="absolute bottom-6 left-4 h-1.5 w-1.5 rounded-full bg-blue-400" />
                  </div>
                </div>
              </div>

              {/* Profile tags */}
              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  ["Manufacturing", "Domain"],
                  ["SAP MM", "Core System"],
                  ["India", "Based in Coimbatore"],
                  ["English", "Communication"],
                ].map(([title, subtitle]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-blue-400/10 bg-white/[0.02] p-4"
                  >
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career DNA */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-blue-400/10 bg-white/[0.025] p-7 md:p-8"
            >
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                My Career DNA
              </p>

              <div className="relative">
                <div className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-blue-500/50 via-emerald-400/30 to-orange-400/50" />

                <div className="space-y-7">
                  {careerDNA.map((item, index) => (
                    <div key={item.title} className="relative flex gap-4">
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-[#071426] text-xs text-blue-300">
                        {item.icon}
                      </div>

                      <div className="pt-0.5">
                        <p className="text-xs font-bold tracking-wide text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* KPI strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 grid grid-cols-2 divide-x divide-blue-400/10 rounded-2xl border border-blue-400/10 bg-white/[0.025] md:grid-cols-4"
          >
            {[
              ["4+", "Years Experience"],
              ["10K+", "Materials Managed"],
              ["\u20B9" + "16 Cr", "Audit Exposure"],
              ["92%", "Inventory Accuracy"],
            ].map(([value, label]) => (
              <div key={label} className="px-5 py-6 text-center">
                <p className="text-2xl font-bold text-white md:text-3xl">
                  {value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24"
          >
            <div className="mb-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                What I Bring
              </p>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Operations expertise backed by{" "}
                <span className="text-blue-400">analytics.</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-blue-400/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.accent === "green"
                          ? "bg-emerald-400"
                          : item.accent === "purple"
                            ? "bg-purple-400"
                            : item.accent === "orange"
                              ? "bg-orange-400"
                              : "bg-blue-400"
                      }`}
                    />
                  </div>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

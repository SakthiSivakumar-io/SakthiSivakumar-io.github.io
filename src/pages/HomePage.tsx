import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";

export default function HomePage({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden">
        {/* Background glow */}

        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="pointer-events-none absolute top-[500px] -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

        {/* HERO */}

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

          {/* HERO CONTENT */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-blue-400"
            >
              Inventory Analyst
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Transforming
              <span className="block text-blue-400">
                Inventory Data
              </span>
              Into Better
              <span className="block">
                Business Decisions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Inventory Analyst with 4+ years of experience in SAP MM,
              inventory governance, audit support, and operational analytics.
              Specialized in identifying inventory risks, improving stock
              accuracy, and transforming operational data into actionable
              business insights.
            </motion.p>

            {/* Technology line */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500"
            >
              <span>SAP MM</span>
              <span className="text-blue-500">•</span>
              <span>Inventory Control</span>
              <span className="text-blue-500">•</span>
              <span>Business Analytics</span>
              <span className="text-blue-500">•</span>
              <span>Audit & Governance</span>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => setCurrentPage("projects")}
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
              >
                View Case Studies
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ?
                </span>
              </button>

              <button
                onClick={() => setCurrentPage("resume")}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500/5"
              >
                Download Resume
                <span className="text-blue-400">?</span>
              </button>
            </motion.div>
          </div>

          {/* INVENTORY INTELLIGENCE PANEL */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="portfolio-card portfolio-glow rounded-2xl p-6 sm:p-8">

              {/* Panel header */}

              <div className="flex items-center justify-between border-b border-blue-400/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Inventory Intelligence
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Operational performance overview
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                  <span className="text-xs text-green-400">
                    Active
                  </span>
                </div>
              </div>

              {/* Main metric */}

              <div className="py-8">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Materials Managed
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight text-white">
                    10K+
                  </span>
                  <span className="pb-2 text-sm text-slate-500">
                    materials
                  </span>
                </div>
              </div>

              {/* Risk bar */}

              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">
                    Inventory Accuracy
                  </span>
                  <span className="font-semibold text-blue-400">
                    92%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.4, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-400"
                  />
                </div>
              </div>

              {/* Metrics */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-xl border border-blue-400/10 bg-white/[0.02] p-4">
                  <p className="text-xs text-slate-500">
                    Audit Exposure
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    ₹16 Cr
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Inventory value
                  </p>
                </div>

                <div className="rounded-xl border border-blue-400/10 bg-white/[0.02] p-4">
                  <p className="text-xs text-slate-500">
                    Experience
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    4+
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Years
                  </p>
                </div>

              </div>

              {/* Systems */}

              <div className="mt-6 flex flex-wrap gap-2">
                {["SAP MM", "Excel", "Power BI", "SQL"].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative line */}

            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-blue-500/10" />
          </motion.div>
        </div>

        {/* KPI STRIP */}

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 overflow-hidden rounded-2xl border border-blue-400/10 bg-white/[0.02] md:grid-cols-4"
          >
            <KPI
              value={4}
              suffix="+"
              label="Years Experience"
            />

            <KPI
              value={10000}
              suffix="+"
              label="Materials Managed"
            />

            <KPI
              value={16}
              prefix="₹"
              suffix=" Cr"
              label="Inventory Audited"
            />

            <KPI
              value={92}
              suffix="%"
              label="Inventory Accuracy"
            />
          </motion.div>
        </div>

        {/* MISSION */}

        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                01 — Profile
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Where Operations
                <span className="block text-slate-500">
                  Meet Data.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-slate-400">
                I work at the intersection of manufacturing operations,
                inventory management, SAP MM, and business analytics.
                My focus is turning operational data into clear insights
                that help teams improve stock accuracy, identify risk,
                strengthen process controls, and make better decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Inventory Governance",
                  "SAP MM",
                  "Risk Analysis",
                  "Audit Support",
                  "Operational Analytics",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-400/15 bg-blue-500/5 px-4 py-2 text-xs text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAREER DNA */}

        <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              02 — Career DNA
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              From Operations to
              <span className="text-blue-400">
                {" "}Business Intelligence.
              </span>
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {[
              "Operations",
              "SAP MM",
              "Inventory Control",
              "Analytics",
              "Business Decisions",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="portfolio-card rounded-xl p-5 text-center"
              >
                <p className="text-sm font-semibold text-white">
                  {item}
                </p>

                {index < 4 && (
                  <p className="mt-3 text-blue-500 md:hidden">
                    ?
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}

        <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 lg:px-10">
          <div className="portfolio-card rounded-2xl p-8 sm:p-10">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
                  03 — Impact
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Selected
                  <span className="block text-slate-500">
                    Achievements.
                  </span>
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Managed inventory operations involving 10,000+ materials",
                  "Supported audits covering ₹16 Crore inventory value",
                  "Improved inventory accuracy through variance investigations",
                  "Built analytical dashboards for operational reporting",
                  "Identified process control failures impacting stock accuracy",
                  "Supported SAP MM inventory governance and compliance",
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="rounded-xl border border-blue-400/10 bg-white/[0.02] p-5"
                  >
                    <span className="text-blue-400">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}

/* KPI COMPONENT */

function KPI({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="border-b border-r border-blue-400/10 p-6 text-center last:border-r-0 md:p-8">
      <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
        {prefix}
        <CountUp end={value} duration={1.8} />
        {suffix}
      </div>

      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
}





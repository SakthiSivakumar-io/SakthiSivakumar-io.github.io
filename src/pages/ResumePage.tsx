import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const resumePath = "/Sakthi_Sivakumar_Inventory_Analytics_Resume.pdf";

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#020817] px-6 pb-28 pt-20 text-slate-100 md:px-10 lg:pt-24">
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[420px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">

          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Resume & Professional Profile
            </p>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              A focused profile of my{" "}
              <span className="text-blue-400">
                experience and capabilities.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Inventory Analyst with experience across inventory control,
              SAP MM operations, audit support, MIS reporting, and
              business analytics within manufacturing environments.
            </p>
          </motion.div>

          {/* PROFILE HIGHLIGHTS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            <ProfileMetric
              value="4+"
              label="Years Experience"
            />

            <ProfileMetric
              value="SAP MM"
              label="Core ERP"
            />

            <ProfileMetric
              value="Analytics"
              label="Data & Reporting"
            />

            <ProfileMetric
              value="Manufacturing"
              label="Industry Experience"
            />
          </motion.div>

          {/* RESUME CARD */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mt-12 overflow-hidden rounded-3xl border border-blue-400/20 bg-white/[0.035] p-8 shadow-[0_0_70px_rgba(37,99,235,0.08)] md:p-12"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative">

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">

                <div>
                  <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    Latest Resume
                  </span>

                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Sakthi Sivakumar
                  </h2>

                  <p className="mt-2 text-lg font-medium text-blue-400">
                    Inventory Analyst | SAP MM | Audit & MIS | Business Analytics
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                    A professional summary covering inventory management,
                    SAP MM, inventory governance, audit support, MIS reporting,
                    and analytical project experience.
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl border border-blue-400/10 bg-[#071426] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Document
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white">
                    PDF Resume
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Latest version
                  </p>
                </div>

              </div>

              {/* CONTENT AREAS */}

              <div className="mt-10 grid gap-4 md:grid-cols-3">

                <ResumeArea
                  title="Core Expertise"
                  items={[
                    "Inventory Management",
                    "SAP MM",
                    "Inventory Governance",
                    "Physical Stock Audit",
                  ]}
                />

                <ResumeArea
                  title="Analytics"
                  items={[
                    "Power BI",
                    "Advanced Excel",
                    "DAX",
                    "MIS Reporting",
                  ]}
                />

                <ResumeArea
                  title="Professional Focus"
                  items={[
                    "Inventory Accuracy",
                    "Risk Analysis",
                    "Process Improvement",
                    "Decision Support",
                  ]}
                />

              </div>

              {/* ACTIONS */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={resumePath}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.22)]"
                >
                  Download Latest Resume
                  <span>↓</span>
                </a>

                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:text-white"
                >
                  View Resume
                  <span className="text-blue-300">↗</span>
                </a>

              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Resume available in PDF format
              </div>

            </div>
          </motion.div>

          {/* CAREER MESSAGE */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500">
              Inventory
              <span className="mx-2 text-blue-400">→</span>
              SAP MM
              <span className="mx-2 text-blue-400">→</span>
              Analytics
              <span className="mx-2 text-blue-400">→</span>
              Business Impact
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              Turning operational experience into data-driven decisions.
            </p>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
}

/* ================= COMPONENTS ================= */

function ProfileMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-blue-400/10 bg-white/[0.025] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25">
      <p className="text-xl font-bold text-blue-300 md:text-2xl">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {label}
      </p>
    </div>
  );
}

function ResumeArea({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-blue-400/10 bg-[#071426] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">
        {title}
      </p>

      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-slate-400"
          >
            <span className="mt-1 text-emerald-400">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

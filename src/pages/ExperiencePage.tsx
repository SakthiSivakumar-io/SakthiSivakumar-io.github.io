import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const currentRole = {
  title: "Inventory Analyst | SAP MM",
  company: "L.G. Balakrishnan & Bros. Ltd.",
  period: "Mar 2025 — Present",
  location: "Tamil Nadu • Manufacturing",
  metrics: [
    ["10,000+", "Materials Managed"],
    ["₹16 Cr", "Audit Exposure"],
    ["SAP MM", "Core ERP"],
    ["92%", "Inventory Accuracy"],
  ],
  responsibilities: [
    "Managed inventory operations through SAP MM across approximately 10,000+ materials and multiple storage locations and plants.",
    "Performed stock reconciliation, physical-versus-system verification, cycle counting, and inventory variance analysis.",
    "Supported internal and statutory audits through audit-ready documentation, variance explanations, and compliance tracking.",
    "Developed MIS reports and analytical dashboards for inventory monitoring and management decision-making.",
    "Identified slow-moving and non-moving inventory categories supporting inventory optimization initiatives.",
    "Coordinated with production, procurement, warehouse, stores, and quality teams to maintain material availability and process control.",
    "Investigated inventory discrepancies and supported corrective actions to reduce recurring stock variances.",
    "Supported SAP MM transaction monitoring and inventory process governance.",
  ],
  impact: [
    "Identified system control gaps contributing to inventory variance.",
    "Conducted Heat Treatment inventory variance analysis and established the origin of discrepancies through data-driven investigation.",
    "Strengthened inventory audit readiness through structured documentation and control practices.",
    "Built analytical reporting and dashboard solutions to improve management visibility.",
  ],
  tools: [
    "SAP MM",
    "Advanced Excel",
    "Power BI",
    "MIS Reporting",
    "Inventory Analytics",
    "Internal Audit",
  ],
};

const previousRole = {
  title: "Inventory / Warehouse Executive",
  company: "Goflex Wires & Cables | C.R.I. Pumps Pvt. Ltd.",
  period: "Jun 2022 — Dec 2024",
  location: "Tamil Nadu • Manufacturing",
  metrics: [
    ["5,000+", "SKUs Managed"],
    ["SAP MM", "ERP Exposure"],
    ["Warehouse", "Operations"],
    ["ISO 9001", "Audit Exposure"],
  ],
  responsibilities: [
    "Managed inventory operations across 5,000+ SKUs and multiple warehouse locations.",
    "Executed SAP MM transactions for inventory movement, stock transfers, and material tracking.",
    "Performed physical inventory verification and cycle counting activities.",
    "Supported ISO 9001 compliance and quality audit requirements.",
    "Assisted warehouse process improvement initiatives to strengthen inventory visibility and control.",
    "Collaborated with cross-functional teams to improve inventory discipline and operational efficiency.",
    "Reduced stock discrepancies through systematic monitoring and reconciliation processes.",
  ],
  impact: [
    "Built strong fundamentals in inventory management and warehouse operations.",
    "Gained hands-on exposure to manufacturing material flow.",
    "Developed practical discipline in stock accuracy, reconciliation, and operational control.",
    "Established the foundation for progression into SAP MM, analytics, audit, and inventory governance.",
  ],
  tools: [
    "SAP MM & WM",
    "Inventory Management",
    "Warehouse Operations",
    "Material Movement",
    "Stock Verification",
    "ISO 9001",
  ],
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <section className="relative overflow-hidden bg-[#020817] px-6 pb-28 pt-20 text-slate-100 md:px-10 lg:pt-24">
        <div className="pointer-events-none absolute left-[-180px] top-[-100px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-180px] top-[600px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Professional Experience
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Four years of{" "}
              <span className="text-blue-400">
                inventory & supply chain experience.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A career built from hands-on warehouse operations into SAP MM,
              inventory governance, audit support, analytics, and
              data-driven decision support.
            </p>
          </motion.div>

          {/* CAREER TIMELINE */}

          <div className="relative">
            <div className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-gradient-to-b from-blue-500/50 via-blue-400/20 to-transparent md:block" />

            {/* CURRENT ROLE */}

            <ExperienceCard
              number="01"
              role={currentRole}
              current
            />

            {/* PREVIOUS ROLE */}

            <ExperienceCard
              number="02"
              role={previousRole}
            />
          </div>

          {/* CAREER PROGRESSION */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-3xl border border-blue-400/10 bg-white/[0.025] p-7 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Career Progression
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              From operations to analytics.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                "Warehouse Operations",
                "Inventory Control",
                "SAP MM & Governance",
                "Analytics & Decision Support",
              ].map((stage, index) => (
                <div key={stage} className="relative">
                  <div className="rounded-xl border border-blue-400/10 bg-[#071426] p-5">
                    <p className="text-xs font-bold text-blue-400">
                      0{index + 1}
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">
                      {stage}
                    </p>
                  </div>

                  {index < 3 && (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-blue-400 md:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CLOSING */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500">
              Operations
              <span className="mx-2 text-blue-400">→</span>
              Control
              <span className="mx-2 text-blue-400">→</span>
              Systems
              <span className="mx-2 text-blue-400">→</span>
              Analytics
            </p>

            <p className="mt-3 text-xl font-semibold text-white">
              Building better decisions from better inventory data.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* ================= EXPERIENCE CARD ================= */

function ExperienceCard({
  number,
  role,
  current = false,
}: {
  number: string;
  role: typeof currentRole;
  current?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-10 md:pl-14"
    >
      {/* Timeline node */}

      <div
        className={`absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full border md:flex ${
          current
            ? "border-blue-400/40 bg-blue-500/15 text-blue-300"
            : "border-slate-700 bg-[#071426] text-slate-500"
        }`}
      >
        <span className="text-xs font-bold">{number}</span>
      </div>

      <div
        className={`overflow-hidden rounded-3xl border p-7 md:p-9 ${
          current
            ? "border-blue-400/20 bg-white/[0.04] shadow-[0_0_60px_rgba(37,99,235,0.07)]"
            : "border-blue-400/10 bg-white/[0.025]"
        }`}
      >
        {/* Role Header */}

        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            {current && (
              <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Current Role
              </span>
            )}

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {role.title}
            </h2>

            <p className="mt-2 text-lg font-medium text-blue-400">
              {role.company}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {role.period} <span className="mx-2">•</span> {role.location}
            </p>
          </div>

          <div className="rounded-xl border border-blue-400/10 bg-[#071426] px-5 py-4 lg:min-w-[170px]">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Experience
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              {current ? "Current" : "Foundation"}
            </p>
          </div>
        </div>

        {/* Metrics */}

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {role.metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-blue-400/10 bg-white/[0.02] p-4"
            >
              <p className="text-xl font-bold text-blue-300">{value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Responsibilities */}

        <div className="mt-9">
          <SectionHeading>Responsibilities</SectionHeading>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {role.responsibilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}

        <div className="mt-9 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-6">
          <SectionHeading green>Selected Contributions</SectionHeading>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {role.impact.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-slate-300"
              >
                <span className="mt-1 text-emerald-400">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}

        <div className="mt-8 flex flex-wrap gap-2">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-blue-400/10 bg-[#071426] px-3 py-1.5 text-xs font-medium text-slate-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SectionHeading({
  children,
  green = false,
}: {
  children: React.ReactNode;
  green?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        green ? "text-emerald-400" : "text-blue-400"
      }`}
    >
      {children}
    </p>
  );
}


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
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">

        {/* HERO */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-blue-600 font-semibold uppercase tracking-wider"
        >
          Inventory Analyst | SAP MM | Business Analytics
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-5xl md:text-7xl font-bold leading-tight text-gray-900"
        >
          Transforming
          <br />
          Inventory Data Into
          <br />
          Business Decisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-xl text-gray-600 max-w-4xl leading-relaxed"
        >
          Inventory Analyst with 3.5+ years of experience in SAP MM,
          inventory governance, audit support, and operational analytics.
          Specialized in identifying inventory risks, improving stock
          accuracy, and transforming operational data into actionable
          business insights.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => setCurrentPage("projects")}
            className="px-7 py-3 bg-blue-600 text-white rounded-lg
            hover:bg-blue-700 transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg"
          >
            View Case Studies
          </button>

          <button
            onClick={() => setCurrentPage("about")}
            className="px-7 py-3 border border-gray-300 rounded-lg
            hover:bg-gray-50 transition-all duration-300
            hover:-translate-y-1"
          >
            Professional Profile
          </button>
        </motion.div>

        {/* KPI STRIP */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >

          <KPI
            value={3.5}
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
            value={80}
            suffix="%"
            label="Inventory Accuracy Improvement"
          />

        </motion.div>

        {/* ACHIEVEMENTS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gray-50 border rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Selected Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <p>
              ✔ Managed inventory operations involving 10,000+ materials
            </p>

            <p>
              ✔ Supported audits covering ₹16 Crore inventory value
            </p>

            <p>
              ✔ Improved inventory accuracy through variance investigations
            </p>

            <p>
              ✔ Built analytical dashboards for operational reporting
            </p>

            <p>
              ✔ Identified process control failures impacting stock accuracy
            </p>

            <p>
              ✔ Supported SAP MM inventory governance and compliance
            </p>

          </div>
        </motion.div>

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
    <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
      <div className="text-3xl font-bold text-blue-600">
        {prefix}
        <CountUp end={value} duration={2} />
        {suffix}
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );
}

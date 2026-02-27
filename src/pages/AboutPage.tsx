import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Inventory Control Specialist focused on SAP-driven governance,
            variance reduction, and data-backed operational decision-making.
          </p>
          <div className="w-24 h-1 bg-blue-600 mt-6"></div>
        </div>

        {/* KPI STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "3.5+", label: "Years Experience" },
            { value: "SAP MM", label: "Core System Expertise" },
            { value: "Audit-Ready", label: "Control Orientation" },
            { value: "Data-Driven", label: "Decision Approach" }
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
            >
              <p className="text-2xl font-bold text-gray-900">
                {item.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Narrative */}
        <div className="max-w-4xl space-y-8 text-lg text-gray-700 leading-relaxed mb-20">
          <p>
            I am a <span className="font-semibold text-gray-900">results-oriented Inventory Analyst</span> with hands-on
            experience in manufacturing environments where precision,
            accountability, and system discipline are critical.
          </p>

          <p>
            My work centers around <span className="font-semibold text-gray-900">inventory reconciliation,
            SAP MM process control, and variance investigation</span> —
            ensuring that system stock aligns with physical reality and that
            discrepancies are analyzed at root-cause level.
          </p>

          <p>
            I operate at the intersection of <span className="font-semibold text-gray-900">operations,
            financial impact, and system integrity</span>, transforming raw
            transactional data into actionable insights that strengthen
            governance and reduce risk exposure.
          </p>

          <p>
            As I continue advancing toward analytics-driven roles, I am
            integrating <span className="font-semibold text-gray-900">Advanced Excel,
            reporting automation, and business intelligence tools</span> into
            my workflow to deliver scalable, data-backed solutions.
          </p>
        </div>

        {/* Capability Sections */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Core Capabilities
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>Inventory Control & Stock Reconciliation</li>
              <li>SAP MM – GRN, Consumption & Movement Analysis</li>
              <li>Variance & Root Cause Investigation</li>
              <li>Internal Audit Documentation & Compliance Support</li>
              <li>Physical vs System Stock Validation</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Strategic Growth Focus
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>Advanced Excel & Reporting Automation</li>
              <li>Power BI Dashboard Development</li>
              <li>Data-Driven Process Optimization</li>
              <li>Inventory Governance Strengthening</li>
              <li>Control-Based Risk Reduction</li>
            </ul>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Professional Profile
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Bridging Inventory Operations,
            SAP MM, and Business Analytics
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            Inventory Analyst with 3.5+ years of experience improving inventory
            accuracy, audit readiness, and operational control through SAP MM,
            inventory analytics, and data-driven decision making.
          </p>
        </div>

        {/* KPI SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">3.5+</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Years Experience
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Materials Managed
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">₹16 Cr</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Inventory Audited
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">80%</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Inventory Accuracy Improvement
            </p>
          </div>

        </div>

        {/* ABOUT STORY */}
        <div className="max-w-5xl space-y-8 text-lg text-gray-700 leading-relaxed mb-20">

          <p>
            I specialize in inventory governance, SAP MM operations,
            inventory reconciliation, audit support, and operational
            reporting within manufacturing environments.
          </p>

          <p>
            Throughout my career, I have managed inventory operations
            involving <span className="font-semibold text-gray-900">
            10,000+ materials</span>, supported audit activities covering
            approximately <span className="font-semibold text-gray-900">
            ₹16 Crore worth of inventory</span>, and led investigations into
            stock discrepancies, process failures, and inventory control gaps.
          </p>

          <p>
            My work extends beyond routine inventory transactions.
            I focus on identifying root causes behind operational issues,
            strengthening internal controls, improving inventory visibility,
            and ensuring that physical stock aligns with system records.
          </p>

          <p>
            By combining SAP MM expertise with analytical thinking,
            I help transform operational data into actionable business insights,
            enabling better decision-making and reducing inventory-related risks.
          </p>

          <p>
            As I continue evolving toward analytics-focused roles,
            I am expanding my capabilities in Power BI, reporting automation,
            SQL, and business analytics to bridge the gap between operations,
            systems, and data.
          </p>

        </div>

        {/* VALUE PROPOSITION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Inventory Governance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring inventory accuracy through reconciliation,
                variance analysis, cycle counting, and inventory control
                frameworks.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                SAP MM Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Managing GRN, consumption, stock transfers,
                material movements, reconciliation processes,
                and inventory visibility through SAP MM.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Audit & Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting inventory audits, documentation reviews,
                control validation, and corrective action tracking
                to improve governance.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging Power BI, Excel, and reporting tools
                to convert operational data into actionable insights
                for management decision-making.
              </p>
            </div>

          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
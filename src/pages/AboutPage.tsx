import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            I am a <span className="font-semibold text-gray-900">results-driven Inventory Analyst</span> with 
            over <span className="font-semibold text-gray-900">3.5+ years of experience</span> in 
            manufacturing environments, specializing in 
            <span className="font-semibold text-gray-900"> SAP MM, inventory reconciliation, internal audits, and MIS reporting</span>.
          </p>

          <p>
            My expertise lies in ensuring <span className="font-semibold text-gray-900">inventory accuracy</span>, 
            identifying <span className="font-semibold text-gray-900">stock variances</span>, 
            strengthening internal controls, and supporting audit-ready documentation through 
            structured reporting and data validation.
          </p>

          <p>
            I operate at the intersection of <span className="font-semibold text-gray-900">operations, systems, and data</span>, 
            transforming raw transactional records into actionable insights that improve 
            control, efficiency, and decision-making.
          </p>

          <p>
            Currently, I am expanding my capabilities toward 
            <span className="font-semibold text-gray-900"> analytics-driven roles</span>, 
            combining my strong SAP foundation with advanced Excel, reporting automation, 
            and data analysis skills to deliver business-focused solutions.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* Core Expertise */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Core Expertise
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Inventory Control & Stock Reconciliation</li>
              <li>• SAP MM – P2P & GR/IR Process</li>
              <li>• Physical vs System Stock Validation</li>
              <li>• Inventory Variance & Root Cause Analysis</li>
              <li>• Audit Documentation & Compliance Support</li>
            </ul>
          </div>

          {/* Growth & Direction */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Growth & Direction
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Advanced Excel & Reporting Automation</li>
              <li>• Power BI Dashboard Development</li>
              <li>• Business Data Analysis</li>
              <li>• Process Optimization through Insights</li>
              <li>• Control Strengthening & Risk Reduction</li>
            </ul>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}

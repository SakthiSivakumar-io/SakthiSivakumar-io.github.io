import PageWrapper from "../components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects & Case Studies
          </h1>
          <div className="w-24 h-1 bg-blue-600"></div>
        </div>

        <div className="space-y-20">

          {/* ================= PROJECT 1 ================= */}
          <div className="border border-gray-200 rounded-xl p-10 shadow-sm bg-white hover:shadow-md transition">

            <h2 className="text-2xl font-bold mb-2">
              Inventory Variance Control – Heat Treatment Stage
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Manufacturing Environment · SAP MM · Inventory Governance
            </p>

            <Section
              title="Business Context"
              content="Recurring stock mismatches were observed during physical verification, particularly at the Heat Treatment (HT) stage, impacting inventory accuracy and audit confidence."
            />

            <Section
              title="Core Problem"
              content="SAP indicated sufficient stock, yet physical shortages existed. Removal of SAP 311 movement eliminated receipt-level accountability."
            />

            <Section
              title="My Role"
              content="Led variance investigation, analyzed SAP movement data, and developed a Power BI dashboard to isolate stage-wise discrepancies."
            />

            <Section
              title="Key Findings"
              list={[
                "42 materials impacted",
                "–1161 Qty variance identified",
                "100% variance traced to HT stage",
                "Root cause: removal of movement-based control"
              ]}
            />

            <Section
              title="Business Impact"
              list={[
                "Restored system-level accountability",
                "Prevented undetected inventory leakage",
                "Strengthened audit readiness",
                "Improved inventory governance discipline"
              ]}
              highlight
            />

            <Tools
              tools={["SAP MM", "Power BI", "Excel", "Physical Stock Verification"]}
            />
          </div>


          {/* ================= PROJECT 2 ================= */}
          <div className="border border-gray-200 rounded-xl p-10 shadow-sm bg-white hover:shadow-md transition">

            <h2 className="text-2xl font-bold mb-2">
              Weighing Scale Accuracy & Inventory Conversion Optimization
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Process Study · Inventory Accuracy · Metrological Analysis
            </p>

            <Section
              title="Business Context"
              content="Minor but recurring stock discrepancies were observed during weight-to-piece conversion of lightweight components."
            />

            <Section
              title="Core Problem"
              content="Despite calibration compliance, scale resolution below 2kg load caused systematic rounding errors and quantity mismatches."
            />

            <Section
              title="My Role"
              content="Conducted controlled experimental trials, analyzed sampling logic, and validated metrological behavior across weight ranges."
            />

            <Section
              title="Key Findings"
              list={[
                "Scale accuracy stabilizes above 2kg load",
                "Below threshold → rounding variation increases",
                "Discrepancies were systemic, not operator-driven"
              ]}
            />

            <Section
              title="Business Impact"
              list={[
                "Reduced inventory conversion variance",
                "Scientifically justified audit discrepancies",
                "Improved operational accuracy",
                "Lowered reconciliation effort"
              ]}
              highlight
            />

            <Tools
              tools={["Excel", "Statistical Analysis", "Process Validation"]}
            />
          </div>


          {/* ================= PROJECT 3 ================= */}
          <div className="border border-gray-200 rounded-xl p-10 shadow-sm bg-white hover:shadow-md transition">

            <h2 className="text-2xl font-bold mb-2">
              SAP MM Inventory Flow Analysis (GRN → Consumption → Reconciliation)
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              SAP MM · Inventory Flow Visibility · Financial Impact Analysis
            </p>

            <Section
              title="Business Context"
              content="Limited visibility existed between Goods Receipt (GRN), production consumption, and reconciliation processes."
            />

            <Section
              title="Core Problem"
              content="Material-level discrepancies impacted inventory accuracy, financial reporting, and audit reconciliation timelines."
            />

            <Section
              title="My Role"
              content="Modeled SAP MM transactional data and developed a Power BI MIS dashboard to track movement trends and variance patterns."
            />

            <Section
              title="Key Findings"
              list={[
                "GRN vs consumption trend gaps identified",
                "Material-level discrepancy mapping",
                "Quantity & value-based variance visibility",
                "Plant and storage-location filtering logic applied"
              ]}
            />

            <Section
              title="Business Impact"
              list={[
                "Improved inventory movement visibility",
                "Enabled faster discrepancy detection",
                "Supported structured audit reconciliation",
                "Strengthened reporting reliability"
              ]}
              highlight
            />

            <Tools
              tools={["SAP MM", "Power BI", "Advanced Excel", "MIS Reporting"]}
            />
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}


/* ================= Reusable Components ================= */

function Section({
  title,
  content,
  list,
  highlight
}: {
  title: string;
  content?: string;
  list?: string[];
  highlight?: boolean;
}) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>

      {content && (
        <p className="text-gray-600">{content}</p>
      )}

      {list && (
        <ul className={`list-disc list-inside space-y-1 ${highlight ? "text-gray-800 font-medium" : "text-gray-600"}`}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-gray-900 mb-2">Tools Used</h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

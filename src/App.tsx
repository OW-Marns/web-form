import React, { useState } from "react";

interface ChecklistItem {
  category: string;
  name: string;
  subname: string;
  agent: string;
  reviewer: string;
  comments: string;
}

interface ChecklistSection {
  [key: string]: ChecklistItem[];
}

const App: React.FC = () => {
  const [propertyAddress, setPropertyAddress] = useState<string>("");
  const [agentTeamName, setAgentTeamName] = useState<string>("");

  const initialChecklistState: ChecklistSection = {
    listing: [
      {
        category: "Appraisals",
        name: "Verbal appraisal provided",
        subname: "(Notes to be added on Box & Dice)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Appraisals",
        name: "Written appraisal provided",
        subname: "(Attach valuation email in sales file)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Appraisals",
        name: "Appraisal price supported by comparable sales / CMA report with notes",
        subname:
          "(CMA reports need to be generated first to identify comparable sales which ascertain ESP. Ensure CMA dates must be before or the same day as the valuation email and / or authority generated.)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Appraisals",
        name: "Multiple appraisals conducted on the property in the last 12 months",
        subname:
          "(Attach any previous valuations, appraisals conducted on the property in the last 12 months)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Sales Authority",
        name: "Where a conjunctional listing both Corporate Licensee details included",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Sales Authority",
        name: "Auction details provided correctly",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Sales Authority",
        name: "Vendor's reserve",
        subname: "(Dated if provided after the signing of the authority)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Sales Authority",
        name: "Where conjunctional listing occurs commission sharing must be reflected on the authority at the time of signing the authority",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Sales Authority",
        name: "Marketing expenses reflect marketing schedule",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Estimated Selling Price",
        name: "ESP reflects any appraisal price quoted to the vendor",
        subname:
          "(If not, are there file notes explaining why there is a difference)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "Confirmation of receiving the completed material facts and vendor questionnaire",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "If not received, proof of email sent to the vendor requesting the material facts to be completed",
        subname: "(Save the email to the property file)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "Sighting the CIV and making notes when applicable",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Comparable Sales",
        name: "Of similar standard or condition to the property",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Comparable Sales",
        name: "Within a 2km radius of the property within metropolitan Melbourne or 5kms outside Metropolitan Melbourne",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Comparable Sales",
        name: "Sold within the preceding 6 months within Metropolitan Melbourne or 18 months outside Metropolitan Melbourne",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Comparable Sales",
        name: "If no comparable sales identified, is there a file note explaining how the agent determined the ESP?",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    marketing: [
      {
        category: "Marketing Schedule",
        name: "Completed marketing schedule attached",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Advertising",
        name: "All advertising checked against known facts (e.g. property appraisal)",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Advertising",
        name: "Checked against vendor's instructions and marketing schedule",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Advertising",
        name: "Prices comply with Indicative Selling Price",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Advertising",
        name: "Search prices not below lowest ISP range",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "Advertising",
        name: "Approval of marketing material given by vendor",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    selling: [
      {
        category: "Revision of ESP",
        name: "Detailed internal notes via RTA if ESP changes",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Online Price Changes uploaded within 24 hours",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Correspondence - File notes on vendor price discussions maintained",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Offers - All offers maintained in the file",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Offers - Evidence of offers communicated to the vendor",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    closing: [
      {
        category: "",
        name: "Closing - Key sales documentation retained on file",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Closing - Section 32 signed and dated before contract",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Closing - Vendor reserve entered on authority day of auction",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        category: "",
        name: "Closing - Attach Bid Sheet / Record for auction",
        subname: "",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
  };

  const [checklist, setChecklist] = useState<ChecklistSection>(
    initialChecklistState
  );

  const sections = Object.keys(
    initialChecklistState
  ) as (keyof ChecklistSection)[];
  const [currentPage, setCurrentPage] = useState<number>(0);

  const updateChecklist = (
    section: keyof ChecklistSection,
    index: number,
    field: keyof ChecklistItem,
    value: string
  ) => {
    const updatedSection = [...checklist[section]];
    updatedSection[index][field] = value;
    setChecklist({ ...checklist, [section]: updatedSection });
  };

  const handleSubmit = async () => {
    const payload = {
      propertyAddress,
      agentTeamName,
      checklist,
    };

    try {
      const response = await fetch("https://your-api-endpoint.com/checklists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Checklist submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the checklist.");
    }
  };

  const renderSection = (title: string, key: keyof ChecklistSection) => (
    <div className="">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-6">
        {checklist[key].map((item, index) => (
          <div
            key={index}
            className="w-full p-4 bg-white border border-b-2 border-gray-200 rounded-lg space-y-2"
          >
            <p className="font-medium text-gray-700">{item.name}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <div className="flex-1 flex items-center gap-2">
                <span>Agent:</span>
                {["Y", "N", "NA"].map((option) => (
                  <button
                    key={option}
                    className={`h-8 min-w-[2rem] px-2 py-1 border rounded-md transition ${
                      item.agent === option
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => updateChecklist(key, index, "agent", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex-1 flex items-center gap-2">
                <span>Reviewer:</span>
                {["Y", "N", "NA"].map((option) => (
                  <button
                    key={option}
                    className={`h-8 min-w-[2rem] px-2 py-1 border rounded-md transition ${
                      item.reviewer === option
                        ? "border-green-600 bg-green-600 text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      updateChecklist(key, index, "reviewer", option)
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              className="outline-none w-full border border-gray-300 rounded-md p-3 mt-1 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Comments"
              rows={3}
              name="comments"
              value={item.comments}
              onChange={(e) =>
                updateChecklist(key, index, "comments", e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );

  const currentSection = sections[currentPage];
  const sectionTitles: Record<keyof ChecklistSection, string> = {
    listing: "Listing Documentation",
    marketing: "Marketing",
    selling: "Selling Campaign",
    closing: "Closing Off Sales File",
  };

  return (
    <main className="h-auto w-full p-6">
      <div className="h-auto w-full max-w-[794px] mx-auto px-6 py-16 space-y-16 bg-white/75">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Compliance Sales Files Review Checklist
          </h1>
          <p className="text-center text-sm text-gray-600 mb-8">
            Version: 5.0 (20102024)
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label htmlFor="property-address" className="min-w-[160px]">
              Property Address
            </label>
            <input
              type="text"
              id="property-address"
              name="property-address"
              placeholder="Property Address"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              className="outline-none flex-1 border border-gray-300 rounded-md p-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="agent-name-team" className="min-w-[160px]">
              Name of Agent / Team
            </label>
            <input
              type="text"
              id="agent-name-team"
              name="agent-name-team"
              placeholder="Name of Agent / Team"
              value={agentTeamName}
              onChange={(e) => setAgentTeamName(e.target.value)}
              className="outline-none flex-1 border border-gray-300 rounded-md p-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {renderSection(sectionTitles[currentSection], currentSection)}

        {/* {renderSection("Listing Documentation", "listing")}
        {renderSection("Marketing", "marketing")}
        {renderSection("Selling Campaign", "selling")}
        {renderSection("Closing Off Sales File", "closing")} */}

        {/* Pagination Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 0
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "text-blue-600 border-blue-600 hover:bg-blue-50"
            }`}
          >
            Previous
          </button>

          {currentPage < sections.length - 1 ? (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>

        {/* Page Indicator */}
        <div className="text-center text-sm text-gray-500">
          Page {currentPage + 1} of {sections.length}
        </div>
      </div>
    </main>
  );
};

export default App;

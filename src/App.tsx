import React, { useState } from "react";

interface ChecklistItem {
  name: string;
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
        name: "Appraisals - Verbal appraisal provided",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Appraisals - Written appraisal provided",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Appraisals - Appraisal price supported by comparable sales / CMA report with notes",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Appraisals - Multiple appraisals conducted on the property in the last 12 months",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Sales Authority - Where a conjunctional listing both Corporate Licensee details included",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Sales Authority - Auction details provided correctly",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Sales Authority - Vendor’s reserve",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Sales Authority - Where conjunctional listing occurs commission sharing must be reflected on the authority at the time of signing the authority",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Sales Authority - Marketing expenses reflect marketing schedule",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Estimated Selling Price - ESP reflects any appraisal price quoted to the vendor",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Material Facts / Vendor Questionnaire - Confirmation of receiving the completed material facts and vendor questionnaire",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Material Facts / Vendor Questionnaire - If not received, proof of email sent to the vendor requesting the material facts to be completed",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Material Facts / Vendor Questionnaire - Sighting the CIV and making notes when applicable",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Comparable Sales - Of similar standard or condition to the property",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Comparable Sales - Within a 2km radius of the property within metropolitan Melbourne or 5kms outside Metropolitan Melbourne",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Comparable Sales - Sold within the preceding 6 months within Metropolitan Melbourne or 18 months outside Metropolitan Melbourne",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Comparable Sales - If no comparable sales identified, is there a file note explaining how the agent determined the ESP?",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    marketing: [
      {
        name: "Marketing Schedule - Completed marketing schedule attached",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Advertising - All advertising checked against known facts (e.g. property appraisal)",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Advertising - Checked against vendor’s instructions and marketing schedule",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Advertising - Prices comply with Indicative Selling Price",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Advertising - Search prices not below lowest ISP range",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Advertising - Approval of marketing material given by vendor",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    selling: [
      {
        name: "Revision of ESP - Detailed internal notes via RTA if ESP changes",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Online Price Changes uploaded within 24 hours",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Correspondence - File notes on vendor price discussions maintained",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Offers - All offers maintained in the file",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Offers - Evidence of offers communicated to the vendor",
        agent: "",
        reviewer: "",
        comments: "",
      },
    ],
    closing: [
      {
        name: "Closing - Key sales documentation retained on file",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Closing - Section 32 signed and dated before contract",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Closing - Vendor reserve entered on authority day of auction",
        agent: "",
        reviewer: "",
        comments: "",
      },
      {
        name: "Closing - Attach Bid Sheet / Record for auction",
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
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <p className="font-medium text-gray-700 mb-3">{item.name}</p>

            <div className="flex items-center flex-wrap gap-3 mb-3">
              <span className="font-medium text-gray-600">Agent:</span>
              {["Y", "N", "NA"].map((option) => (
                <button
                  key={option}
                  className={`px-3 py-1 rounded-md border text-sm font-medium transition ${
                    item.agent === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => updateChecklist(key, index, "agent", option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center flex-wrap gap-3 mb-3">
              <span className="font-medium text-gray-600">Reviewer:</span>
              {["Y", "N", "NA"].map((option) => (
                <button
                  key={option}
                  className={`px-3 py-1 rounded-md border text-sm font-medium transition ${
                    item.reviewer === option
                      ? "bg-green-600 text-white border-green-600"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    updateChecklist(key, index, "reviewer", option)
                  }
                >
                  {option}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Comments"
              value={item.comments}
              onChange={(e) =>
                updateChecklist(key, index, "comments", e.target.value)
              }
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
      <div className="h-auto w-full max-w-[794px] mx-auto px-4 py-16 space-y-16 bg-white">
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

import React, { useState } from "react";

interface ChecklistItem {
  category: string;
  name: string;
  note: string;
  agent: string;
  reviewer: string;
  comments: string;
  helperText: string;
}

interface ChecklistSection {
  [key: string]: ChecklistItem[];
}

interface SignOff {
  [key: string]: {
    agentName: string;
    agentDate: string;
    reviewerName: string;
    reviewerDate: string;
  };
}

const App: React.FC = () => {
  const [propertyAddress, setPropertyAddress] = useState<string>("");
  const [agentTeamName, setAgentTeamName] = useState<string>("");

  const initialChecklistState: ChecklistSection = {
    listing: [
      {
        category: "Appraisals",
        name: "Verbal appraisal provided",
        note: "(Notes to be added on Box & Dice)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES - BOXNDICE LINK REQUIRED TO BE ABLE TO VIEW COMMENTS.",
      },
      {
        category: "Appraisals",
        name: "Written appraisal provided",
        note: "(Attach valuation email in sales file)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES - BOXNDICE LINK REQUIRED TO BE ABLE TO VIEW COMMENTS.",
      },
      {
        category: "Appraisals",
        name: "Appraisal price supported by comparable sales / CMA report with notes",
        note: "(CMA reports need to be generated first to identify comparable sales which ascertain ESP. Ensure CMA dates must be before or the same day as the valuation email and / or authority generated.)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, ABILITY TO ATTACH THE CMA REPORT. IF NO, CANNOT PROCEED RED FLAG - REQUIRES A COMMENTS FIELD FOR FURTHER EXPLAINATION; ABIITY TO ATTACH A FILE WILL ALSO BE REQUIRED.",
      },
      {
        category: "Appraisals",
        name: "Multiple appraisals conducted on the property in the last 12 months",
        note: "(Attach any previous valuations, appraisals conducted on the property in the last 12 months)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES, ABIITY TO ATTACH FILE OF MUTLIPLE APPRAISALS.",
      },
      {
        category: "Sales Authority",
        name: "Where a conjunctional listing both Corporate Licensee details included",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Sales Authority",
        name: "Auction details provided correctly",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, REG FLAG NEEDS TO ACTIONED AND THEN REVERTS TO YES.",
      },
      {
        category: "Sales Authority",
        name: "Vendor's reserve",
        note: "(Dated if provided after the signing of the authority)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Sales Authority",
        name: "Where conjunctional listing occurs commission sharing must be reflected on the authority at the time of signing the authority",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, IT NEEDS TO BE IN THE AUTHOIRTY. ABILITY TO ATTACH THE AUHTOITRY HERE TO VIEW CORRECTION IS REQUIRED. IF NOT RED FLAD.",
      },
      {
        category: "Sales Authority",
        name: "Marketing expenses reflect marketing schedule",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Estimated Selling Price",
        name: "ESP reflects any appraisal price quoted to the vendor",
        note: "(If not, are there file notes explaining why there is a difference)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, RED FLAG, NOTES NEED TO BE ADDED TO PROCEED TO THE NEXT QUESTION.",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "Confirmation of receiving the completed material facts and vendor questionnaire",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES ABILITY TO ATTACH FILE.",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "If not received, proof of email sent to the vendor requesting the material facts to be completed",
        note: "(Save the email to the property file)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, RED FLAG NEE TO ATTACH FILE BEOFRE PROCEEDING TO NEXT QUESTION.",
      },
      {
        category: "Material Facts / Vendor Questionnaire",
        name: "Sighting the CIV and making notes when applicable",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, NEED TO ATTACHED FILE. IF NO, COMMENTS FIELD REQUIRED.",
      },
      {
        category:
          "Comparable Sales - Where there are comparable sales identified are they:",
        name: "Of similar standard or condition to the property",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category:
          "Comparable Sales - Where there are comparable sales identified are they:",
        name: "Within a 2km radius of the property within metropolitan Melbourne or 5kms outside Metropolitan Melbourne",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category:
          "Comparable Sales - Where there are comparable sales identified are they:",
        name: "Sold within the preceding 6 months within Metropolitan Melbourne or 18 months outside Metropolitan Melbourne from the date of the authority being signed",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category:
          "Comparable Sales - Where there are comparable sales identified are they:",
        name: "If no comparable sales identified, is there a file note explaining how the agent determined the ESP?",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, RED FLAG - COMMENTS FIELD REQUIRED TO BE FILED OUT.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "The vendor's reserve price (refer to authority) and can be expressed as a single figure or range",
        note: "(Where the lower end of the range is not below the vendors price and the upper end does not exceed more than 10% of the lower end of the range)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "The agents ESP in the absence of the vendor's reserve",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, CANNOT PROCEEDUNLESS  COMMENT FIELD IS USED FOR EXPLANATION.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "SOI generated within one business day of authority being signed, if not why?",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, COMPLUSORY COMMENTS FIELD REQUIRED IN ORDER TO PROCEED.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "Comparable sales must be the same as what was used to determine the ESP and include the address, price, date of sale (DD / MM / YYYY)",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, COMPLUSORY COMMENTS FIELD REQUIRED IN ORDER TO PROCEED.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "Where there are fewer than three comparable sales statement stating that there are fewer than three comparable sales",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, COMPLUSORY COMMENTS FIELD REQUIRED IN ORDER TO PROCEED.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "Where the agent's ESR does not align with the median price of property prices in the suburb, a file note should be prepared to explain the difference.",
        note: "This is critical when the agent's ESR is BELOW the suburb's median price. File notes may reference – property condition, and location of the property (i.e., next to a cemetery, easement, etc)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, COMPLUSORY COMMENTS FIELD REQUIRED IN ORDER TO PROCEED.",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "Ensure the median price date does not become older than 6 ",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category:
          "Statement of Information - Indicative selling price consists of:",
        name: "Ensure the correct property type has been selected when creating the Statement Of Information.",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Commission & Sharing",
        name: "Commission sharing component completed on RTA at the time of signing the authority listing",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, NEEDS TO BE ACTIONED AND ATTACH FILE TO PROVE ITS A CORRECT.",
      },
      {
        category: "Consideration of Offers",
        name: "Consideration of offers completed by vendor",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES, ABILITY TO ATTACH THE FILE.",
      },
      {
        category: "Power of Attorney",
        name: "Evidence retained on file",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES, ABILITY TO ATTACH THE FILE.",
      },
      {
        category: "Proof of Ownership",
        name: "Where vendor is a company evidence of Proof of Ownership obtained",
        note: "(Detailed ASIC report that states who the Directors are. You will need to purchase the report (and pass on the cost to the vendor as part of your fees) otherwise the vendor could provide you with one.)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES, ABILITY TO ATTACH THE FILE.",
      },
    ],
    marketing: [
      {
        category: "Marketing Schedule",
        name: "Completed marketing schedule attached",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Advertising",
        name: "All advertising and marketing material checked against known facts, e.g. property appraisal",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Advertising",
        name: "All advertising and marketing material checked against vendor's instructions and marketing schedule ",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Advertising",
        name: "Prices stated in advertising marketing materials comply with Indicative Selling Price",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Advertising",
        name: "Search prices uploaded in the backend is not below the lowest range of the ISP and with the 10% range",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Advertising",
        name: "Approval of marketing material given by vendor",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
    ],
    selling: [
      {
        category: "Revision of ESP / Price Adjustment",
        name: "Detailed internal notes via RTA where the ESP is no longer reasonable.",
        note: "(Update ESP on authority and SOI accordingly to reflect the price change. For all online advertising, the price change needs to be done within 24 hours)",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF NO, CANNOT PROCEED NEEDSA  RED FLAG ATTENTIONED  TO COMPLIANCE MANAGER.",
      },
      {
        category: "Online Price Changes",
        name: "All price changes have been uploaded within 24 hours (online advertising). This can be viewed in the record log in Box Dice.",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Correspondence",
        name: "All file notes relating to price discussions with the vendor maintained on file",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, ABILITY TO ATTACH FILE OR ADD A HYPERLINK TO BOX N DICE. IF NO CANNOT PROCEED. IF N/A PROCEED TO NEXT QUESTION.",
      },
      {
        category: "Offers",
        name: "Offers - All offers maintained in the file",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF NO, CANNOT PROCCED UNTIL A FILE  HAS  BEEN ATTACHED.",
      },
      {
        category: "Offers",
        name: "Evidence of offers communicated to the vendor",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "ABILITY TO ATTACH FILE IF YES OR NO.C CANNOT PROCEED TO NEXT QUESTION. IF N/A CAN PROCEED.",
      },
      {
        category: "Offers",
        name: "Evidence of notification to purchaser on vendor's acceptance / decline of offer and reasons for decline",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, ABILITY TO ATTACH FILE, IF NO, CANNOT PROCEED TO NEXT QUESTION. IF N/A PROCEED TO NEXT QUESTION.",
      },
      {
        category: "Offers",
        name: "Advertising updated to reflect changes in the advertised selling price as a result of rejection (based on price) of offers",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText:
          "IF YES, ABILITY TO ATTACH FILE. IF NO CANNOT PROCEED. IF N/A PROCEED.",
      },
    ],
    closing: [
      {
        category: "Closing",
        name: "Key sales documentation retained on file (all versions authority, all SOI, evidence of comparable sales, contracts etc)",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "Section 32 signed and dated by all parties prior to contract of sale signed",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "COMPULSORY - ABILITY TO ATTACH CONTRACT OF SALE.",
      },
      {
        category: "Closing",
        name: "If property is sold at auction, vendor reserve was entered on authority on day of auction",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "If the property went to auction, attach the Bid Sheet / Record to the compliance folder",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "IF YES, ABILITY TO ATTACH BID SHEET.",
      },
      {
        category: "Closing",
        name: "Notes to be added to Capital Improved Value on Rates Notice",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "All offers received were retained and, where relevant, ISP updated within 1 business day (based on rejection of offer based on price)",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "Marketing expenses correspond with the amount approved by vendor",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "Where relevant, referral arrangements disclosed in the Notice of Commission Sharing form prior to referral paid",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "Commissions paid to the agency align with the commission amount disclosed in authority",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
      {
        category: "Closing",
        name: "Where relevant, evidence of Material Facts disclosed to buyer before signing of Contract of Sale",
        note: "",
        agent: "",
        reviewer: "",
        comments: "",
        helperText: "",
      },
    ],
  };

  const [checklist, setChecklist] = useState<ChecklistSection>(
    initialChecklistState
  );

  const [signOff, setSignOff] = useState<SignOff>({
    listing: {
      agentName: "",
      agentDate: "",
      reviewerName: "",
      reviewerDate: "",
    },
    marketing: {
      agentName: "",
      agentDate: "",
      reviewerName: "",
      reviewerDate: "",
    },
    selling: {
      agentName: "",
      agentDate: "",
      reviewerName: "",
      reviewerDate: "",
    },
    closing: {
      agentName: "",
      agentDate: "",
      reviewerName: "",
      reviewerDate: "",
    },
  });

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
      signOff,
    };

    console.log("Submitting payload:", JSON.stringify(payload, null, 2));

    // try {
    //   const response = await fetch("https://your-api-endpoint.com/checklists", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   if (!response.ok) {
    //     throw new Error("RES: Failed to submit form.");
    //   }

    //   alert("Checklist submitted successfully!");
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("There was an error submitting the checklist.");
    // }
  };

  const inputCommonStyles =
    "outline-none w-full border border-gray-300 rounded-md p-3 focus:ring-1 focus:ring-sky-500 focus:border-sky-500";

  const buttonCommonStyles = "h-auto w-fit px-4 py-2 rounded-md";

  const renderSection = (
    title: string,
    subtitle: string,
    key: keyof ChecklistSection
  ) => (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        {title}
      </h2>

      <div className="space-y-4">
        <h6 className="text-base sm:text-lg md:text-xl leading-none font-semibold text-gray-500">
          {subtitle}
        </h6>

        {checklist[key].map((item, index) => (
          <div
            key={index}
            className="w-full p-6 bg-white border border-b-2 border-gray-200 rounded-lg space-y-3"
          >
            <p className="text-sm text-gray-500 italic">{item.category}</p>

            <p className="font-medium">{item.name}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
              <div className="flex-1 flex items-center gap-2">
                <span>Agent:</span>
                {["Y", "N", "NA"].map((option) => (
                  <button
                    key={option}
                    className={`h-7 min-w-[1.75rem] px-2 border rounded-md transition ${
                      item.agent === option
                        ? "border-sky-600 bg-sky-600 text-white"
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
                    className={`h-7 min-w-[1.75rem] px-2 border rounded-md transition ${
                      item.reviewer === option
                        ? "border-emerald-600 bg-emerald-600 text-white"
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

            <div className="w-full flex flex-col gap-1">
              <textarea
                className={inputCommonStyles + " text-sm"}
                rows={2}
                name="comments"
                placeholder="Comments"
                value={item.comments}
                onChange={(e) =>
                  updateChecklist(key, index, "comments", e.target.value)
                }
              />
              <span className="text-xs text-gray-500">{item.helperText}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-6 bg-white border border-b-2 border-gray-200 rounded-lg space-y-3">
        <div className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name of Agent completing form:
            </label>
            <input
              type="text"
              name="agent-name"
              value={signOff[key].agentName}
              onChange={(e) =>
                setSignOff((prev) => ({
                  ...prev,
                  [key]: { ...prev[key], agentName: e.target.value },
                }))
              }
              placeholder="Enter agent name"
              className={inputCommonStyles}
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date:
            </label>
            <input
              type="date"
              value={signOff[key].agentDate}
              onChange={(e) =>
                setSignOff((prev) => ({
                  ...prev,
                  [key]: { ...prev[key], agentDate: e.target.value },
                }))
              }
              className={inputCommonStyles}
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name of Reviewer completing form:
            </label>
            <input
              type="text"
              name="reviewer-name"
              value={signOff[key].reviewerName}
              onChange={(e) =>
                setSignOff((prev) => ({
                  ...prev,
                  [key]: { ...prev[key], reviewerName: e.target.value },
                }))
              }
              placeholder="Enter reviewer name"
              className={inputCommonStyles}
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date:
            </label>
            <input
              type="date"
              value={signOff[key].reviewerDate}
              onChange={(e) =>
                setSignOff((prev) => ({
                  ...prev,
                  [key]: { ...prev[key], reviewerDate: e.target.value },
                }))
              }
              className={inputCommonStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const currentSection = sections[currentPage];
  const sectionTitles: Record<keyof ChecklistSection, string> = {
    listing: "Sales File",
    marketing: "Marketing",
    selling: "Selling Campaign",
    closing: "Closing Off Sales File",
  };

  const sectionSubtitles: Record<keyof ChecklistSection, string> = {
    listing: "Listing Documentation",
    marketing: "Marketing Checklist",
    selling: "Selling Campaign Process",
    closing: "Closing Off Sales Process",
  };

  return (
    <main className="h-auto w-full p-0 sm:p-4 md:p-6 text-gray-800 bg-gray-300 text-sm sm:text-base">
      <>
        <div className="h-auto w-full max-w-[794px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16 bg-white/75">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Compliance Sales Files Review Checklist
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Version: 5.0 (20102024)
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
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
                className={inputCommonStyles}
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
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
                className={inputCommonStyles}
              />
            </div>
          </div>

          {renderSection(
            sectionTitles[currentSection],
            sectionSubtitles[currentSection],
            currentSection
          )}

          <div className="flex items-center justify-between">
            <button
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`${buttonCommonStyles} border ${
                currentPage === 0
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-sky-600 border-sky-600 hover:bg-sky-50"
              }`}
            >
              Previous
            </button>

            <div className="text-center text-sm text-gray-500">
              Page {currentPage + 1} of {sections.length}
            </div>

            {currentPage < sections.length - 1 ? (
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`${buttonCommonStyles} bg-sky-600 text-white hover:bg-sky-700`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className={`${buttonCommonStyles} bg-emerald-600 text-white hover:bg-emerald-700`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </>
    </main>
  );
};

export default App;

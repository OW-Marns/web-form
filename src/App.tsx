import React, { useState } from "react";
import type { ChecklistSection, SignOff } from "./types";
import { initialChecklistState, initialSignOffState } from "./data";
import { Card } from "./components/Card";
import { CheckList } from "./components/CheckList";

const App: React.FC = () => {
  const [propertyAddress, setPropertyAddress] = useState<string>("");
  const [agentTeamName, setAgentTeamName] = useState<string>("");

  const [notes, setNotes] = useState<string>("");
  const [signOff, setSignOff] = useState<SignOff>(initialSignOffState);
  const [checklist, setChecklist] = useState<ChecklistSection>(
    initialChecklistState
  );

  const handleSubmit = async () => {
    const payload = {
      propertyAddress,
      agentTeamName,
      checklist,
      notes,
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

  const sections = Object.keys(
    initialChecklistState
  ) as (keyof ChecklistSection)[];
  const [currentPage, setCurrentPage] = useState<number>(0);

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

  const renderSection = (
    title: string,
    subtitle: string,
    key: keyof ChecklistSection
  ) => (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        {title}
      </h2>

      {/* Main section checklist form */}
      <div className="space-y-4">
        <h6 className="text-base sm:text-lg md:text-xl leading-none font-semibold text-gray-500">
          {subtitle}
        </h6>

        {checklist[key].map((item, index) => (
          <CheckList
            key={index}
            sectionIndex={index}
            sectionKey={key}
            checklist={item}
            stateChecklist={checklist}
            stateSetChecklist={setChecklist}
          />
        ))}
      </div>

      {/* Agent and Reviewer */}
      <Card id="agent-reviewer-card">
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
      </Card>

      {/* Notes under selling section */}
      {currentSection === "selling" && (
        <Card id="notes-card">
          <div className="w-full flex flex-col gap-1">
            <label className="block text-sm font-medium text-gray-600">
              Notes:
            </label>
            <textarea
              rows={10}
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={inputCommonStyles + " text-sm"}
            />
          </div>
        </Card>
      )}
    </div>
  );

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

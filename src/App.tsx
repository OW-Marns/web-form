import React, { useState } from "react";
import type { ChecklistSection, SignOff } from "./types";
import { initialChecklistState, initialSignOffState } from "./data";

import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { TextArea } from "./components/TextArea";
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
      <div className="space-y-2 sm:space-y-4">
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
          <Input
            type="text"
            id="agent-name"
            label="Name of Agent completing form:"
            value={signOff[key].agentName}
            onChange={(e) =>
              setSignOff((prev) => ({
                ...prev,
                [key]: { ...prev[key], agentName: e.target.value },
              }))
            }
          />

          <Input
            type="date"
            id="agent-date"
            label="Date:"
            value={signOff[key].agentDate}
            onChange={(e) =>
              setSignOff((prev) => ({
                ...prev,
                [key]: { ...prev[key], agentDate: e.target.value },
              }))
            }
          />

          <Input
            type="text"
            id="reviewer-name"
            label="Name of Reviewer completing form:"
            value={signOff[key].reviewerName}
            onChange={(e) =>
              setSignOff((prev) => ({
                ...prev,
                [key]: { ...prev[key], reviewerName: e.target.value },
              }))
            }
          />

          <Input
            type="date"
            id="reviewer-date"
            label="Date:"
            value={signOff[key].reviewerDate}
            onChange={(e) =>
              setSignOff((prev) => ({
                ...prev,
                [key]: { ...prev[key], reviewerDate: e.target.value },
              }))
            }
          />
        </div>
      </Card>

      {/* Notes under selling section */}
      {currentSection === "selling" && (
        <Card id="notes-card">
          <TextArea
            id="notes"
            name="notes"
            label="Notes:"
            rows={10}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
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
            <Input
              type="text"
              id="property-address"
              label="Property Address"
              parentClassname="sm:flex-row sm:items-center gap-0.5 sm:gap-3"
              labelClassname="min-w-[160px] sm:text-base"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
            />
            <Input
              type="text"
              id="agent-name-team"
              label="Name of Agent / Team"
              parentClassname="sm:flex-row sm:items-center gap-0.5 sm:gap-3"
              labelClassname="min-w-[160px] sm:text-base"
              value={agentTeamName}
              onChange={(e) => setAgentTeamName(e.target.value)}
            />
          </div>

          {renderSection(
            sectionTitles[currentSection],
            sectionSubtitles[currentSection],
            currentSection
          )}

          <div className="flex items-center justify-between">
            <Button
              label="Previous"
              color={currentPage === 0 ? "neutral" : "primary"}
              variant="outline"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            />

            <div className="text-center text-sm text-gray-500">
              Page {currentPage + 1} of {sections.length}
            </div>

            {currentPage < sections.length - 1 ? (
              <Button
                label="Next"
                color="primary"
                variant="solid"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              />
            ) : (
              <Button
                label="Submit"
                color="success"
                variant="solid"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
      </>
    </main>
  );
};

export default App;

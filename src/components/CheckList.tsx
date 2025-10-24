import React from "react";
import { TextArea } from "./TextArea";
import { Card, type CardProps } from "./Card";
import type { ChecklistItem, ChecklistSection } from "../types";

interface CheckListProps extends CardProps {
  sectionKey: string | number;
  sectionIndex: number;
  checklist: ChecklistItem;
  stateChecklist: ChecklistSection;
  stateSetChecklist: React.Dispatch<React.SetStateAction<ChecklistSection>>;
}

export const CheckList: React.FC<CheckListProps> = (props) => {
  const {
    sectionKey,
    sectionIndex,
    checklist,
    stateChecklist,
    stateSetChecklist,
    ...restProps
  } = props;

  const updateChecklist = (
    section: keyof ChecklistSection,
    index: number,
    field: keyof ChecklistItem,
    value: string
  ) => {
    const updatedSection = [...stateChecklist[section]];
    updatedSection[index][field] = value;
    stateSetChecklist({ ...stateChecklist, [section]: updatedSection });
  };

  return (
    <Card {...restProps} id="checklist-card">
      <p className="text-sm text-gray-500 italic">{checklist.category}</p>

      <p className="font-medium">{checklist.name}</p>

      <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
        <div className="flex-1 flex items-center gap-2">
          <span>Agent:</span>
          {["Y", "N", "NA"].map((option) => (
            <button
              key={option}
              className={`h-7 min-w-[1.75rem] px-2 border rounded-md transition ${
                checklist.agent === option
                  ? "border-sky-600 bg-sky-600 text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() =>
                updateChecklist(sectionKey, sectionIndex, "agent", option)
              }
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
                checklist.reviewer === option
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() =>
                updateChecklist(sectionKey, sectionIndex, "reviewer", option)
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <TextArea
        id={"comment-" + (sectionIndex + 1)}
        placeholder="Comments"
        helperText={checklist.helperText}
        value={checklist.comments}
        onChange={(e) =>
          updateChecklist(sectionKey, sectionIndex, "comments", e.target.value)
        }
      />
    </Card>
  );
};

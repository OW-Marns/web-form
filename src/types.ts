export interface ChecklistItem {
  category: string;
  name: string;
  note: string;
  agent: string;
  reviewer: string;
  comments: string;
  helperText: string;
}

export interface ChecklistSection {
  [key: string]: ChecklistItem[];
}

export interface SignOff {
  [key: string]: {
    agentName: string;
    agentDate: string;
    reviewerName: string;
    reviewerDate: string;
  };
}

import { createContext } from "react";

const SectionContext = createContext({ currentSection: "services" });

function sectionReducer(state, action) {
  switch (action.type) {
    case "SECTION_CHANGE":
      return { ...state, currentSection: action.payload };
  }
}

export { SectionContext, sectionReducer };

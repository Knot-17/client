import React, { useState } from "react";
import useCollapse from "react-collapsed";
import ChecklistContent from "./ChecklistContent";
import {
  Checklist,
  DollarIcon,
  YourBudget,
  YourWeddingH1,
  ArrowDownIcon,
  ArrowForwardIcon,
  YourWeddingH1Border,
  YWLink,
} from "./YourWeddingElements";

import Wed from "./../../../../images/Wed.jpg";

const YourWedding = () => {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      <div className="flex">
        <YourWeddingH1>
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? <ArrowDownIcon /> : <ArrowForwardIcon />}
          </button>
          Your Wedding
        </YourWeddingH1>
        <YourWeddingH1Border />
      </div>
      <section {...getCollapseProps()}>
        <div className="flex mb-[5%]  mt-[50px] w-[85%] ml-[8.5%] justify-between">
          <Checklist>
            <ChecklistContent />
          </Checklist>
          <div className="w-[45%] bg-slate-600 rounded-[10px]">
            <img src={Wed} alt="Wed" className="h-full w-full rounded-[10px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default YourWedding;

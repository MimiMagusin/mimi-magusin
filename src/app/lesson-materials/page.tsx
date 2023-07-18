'use client'
import React, { useState } from "react";
import { LMOverview } from "./01-overview";
import { LMGroep12 } from "./02-groep-1-2";
import { LMGroep3 } from "./03-groep-3";
import { LMGroep4 } from "./04-groep-4";
import { LMGroep5 } from "./05-groep-5";
import { LMGroep6 } from "./06-groep-6";
import { LMGroep7 } from "./07-groep-7";
import { LMGroep8 } from "./08-groep-8";

export default function LessonMaterialOverview({ params }: { params: { id: string}}) {
  const tabs = [
    { title: 'Overzicht', content: <LMOverview /> },
    { title: 'Groep 1/2', content: <LMGroep12 /> },
    { title: 'Groep 3', content: <LMGroep3 /> },
    { title: 'Groep 4', content: <LMGroep4 />},
    { title: 'Groep 5', content: <LMGroep5 /> },
    { title: 'Groep 6', content: <LMGroep6 /> },
    { title: 'Groep 7', content: <LMGroep7 /> },
    { title: 'Groep 8', content: <LMGroep8 /> }
  ]
  
  const [ tabIndex, setTabIndex] = useState(0);
  
  
  return (
    <div className="bg-white px-6 w-full max-w-6xl sm:py-32 lg:px-16 rounded-3xl my-8">
      <ul className="flex justify-between">
        { tabs.map((tab, index) => (
          <li key={`nav-${tab.title}-${index}`}>
            <button  
              className={`h-16 my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:bg-neutral-100 ${tabIndex===index? "border-b-4 border-b-indigo-500" : ""}`}
              onClick={() => setTabIndex(index)}>
              {tab.title}
            </button>
           </li>
        )) }
      </ul>

      <div className="px-7">
        {tabs[tabIndex].content}
      </div>

    </div>
  )
}
  
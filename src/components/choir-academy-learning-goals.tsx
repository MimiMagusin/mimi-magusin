import {
  MusicalNoteIcon,
  UsersIcon,
  PresentationChartBarIcon,
  SparklesIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

export default function LearningGoalsSection() {
  const items = [
    {
      icon: <MusicalNoteIcon className="h-6 w-6 text-yellow-500" />,
      text: "Stemgebruik en ademtechniek",
    },
    {
      icon: <UsersIcon className="h-6 w-6 text-yellow-500" />,
      text: "Samenwerken en luisteren",
    },
    {
      icon: <PresentationChartBarIcon className="h-6 w-6 text-yellow-500" />,
      text: "Podium- en presentatietechniek",
    },
    {
      icon: <SparklesIcon className="h-6 w-6 text-yellow-500" />,
      text: "Ritmegevoel en muzikale expressie",
    },
    {
      icon: <BookOpenIcon className="h-6 w-6 text-yellow-500" />,
      text: "Noten lezen en meerstemmig zingen",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-12">
        Wat ga je leren?
      </h2>

      <div className="grid sm:grid-cols-1 gap-y-6 gap-x-12 text-left max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="shrink-0 mt-1">{item.icon}</div>
            <span className="text-lg text-gray-800">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

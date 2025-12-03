import { Clock } from "lucide-react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";

// 🟦 ثابت — لا يعمل rerender ولا performance cost
const colorMap = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
};

function HeaderDash() {
  type Metric = {
    icon: typeof IoChatboxEllipsesOutline;
    label: string;
    value: string;
    color: keyof typeof colorMap;
  };

  const Metrics: Metric[] = [
    {
      icon: IoChatboxEllipsesOutline,
      label: "Active Chats",
      color: "blue",
      value: "47",
    },
    {
      icon: IoCheckmarkCircleSharp,
      label: "Resolved Today",
      color: "green",
      value: "156",
    },
    {
      icon: FaUsers,
      label: "Agents",
      color: "purple",
      value: "12",
    },
    {
      icon: Clock,
      label: "Avg Response",
      color: "orange",
      value: "2.3m",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {Metrics.map((metric, index) => {
          const Icon = metric.icon;
          const colors = colorMap[metric.color];

          return (
            <div
              key={index}
              className={`flex justify-between items-center p-6 rounded-lg ${colors.bg}`}
            >
              <div>
                <p className={`${colors.text} text-md font-medium mb-1`}>
                  {metric.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>

              <Icon className={`w-7 h-7 ${colors.text}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderDash;

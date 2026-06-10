import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const stats = [
  {
    number: "2.7K+",
    label: "Active Users",
    icon: <GroupsIcon />,
  },
  {
    number: "1.8K+",
    label: "Subscribers",
    icon: <WorkspacePremiumIcon />,
  },
  {
    number: "35K+",
    label: "Downloads",
    icon: <DownloadDoneIcon />,
  },
  {
    number: "4+",
    label: "Products",
    icon: <Inventory2Icon />,
  },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Achievements
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Helping businesses grow through innovative digital solutions and
            modern technology services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-6
                shadow-sm
                border
                border-gray-200
                text-center
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#0A1F44]">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
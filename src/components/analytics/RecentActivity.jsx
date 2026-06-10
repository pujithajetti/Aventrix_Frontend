import React from "react";

import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const activities = [
  {
    id: 1,
    title: "New User Registered",
    description:
      "John Doe created a new account.",
    time: "5 mins ago",
    icon: <PeopleIcon />,
    color:
      "bg-blue-100 text-blue-600",
  },

  {
    id: 2,
    title: "Revenue Updated",
    description:
      "Monthly revenue report generated.",
    time: "30 mins ago",
    icon: <AnalyticsIcon />,
    color:
      "bg-green-100 text-green-600",
  },

  {
    id: 3,
    title: "New Order Received",
    description:
      "Order #A1023 successfully placed.",
    time: "1 hour ago",
    icon: <ShoppingBagIcon />,
    color:
      "bg-orange-100 text-orange-600",
  },
];

function RecentActivity() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-5
      "
    >
     

      <div className="mb-6">
        <h2
          className="
            text-lg
            font-semibold
            text-slate-800
          "
        >
          Recent Activity
        </h2>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Latest actions happening
          across the platform
        </p>
      </div>

      

      <div className="space-y-4">
        {activities.map(
          (activity) => (
            <div
              key={activity.id}
              className="
                flex
                items-start
                gap-4
                p-4
                rounded-xl
                border
                border-slate-100
                hover:bg-slate-50
                transition
              "
            >
              

              <div
                className={`
                  h-10
                  w-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${activity.color}
                `}
              >
                {activity.icon}
              </div>

            

              <div className="flex-1">
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-slate-800
                  "
                >
                  {activity.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-slate-500
                    mt-1
                  "
                >
                  {activity.description}
                </p>
              </div>


              <span
                className="
                  text-xs
                  text-slate-400
                  whitespace-nowrap
                "
              >
                {activity.time}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RecentActivity;
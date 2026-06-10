import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { activityFeed } from "../../data/dashboardData";

function ActivityFeed() {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Latest actions across your platform
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View All
          <ArrowForward fontSize="small" />
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-slate-100" />

        <div className="space-y-7">
          {activityFeed?.map((activity) => {
            const Icon = activity?.icon;

            return (
              <div
                key={activity.id}
                className="relative flex gap-4"
              >
                <div
                  className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center ${
                    activity.color || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {Icon ? (
                    <Icon fontSize="small" />
                  ) : (
                    <span className="text-sm font-semibold">
                      !
                    </span>
                  )}
                </div>

                <div className="flex-1 pb-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {activity.title}
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        {activity.subtitle}
                      </p>
                    </div>

                    <span className="text-xs text-slate-400 whitespace-nowrap">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 rounded-2xl p-4 text-center">
            <h3 className="text-lg font-bold text-slate-800">
              28
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Today
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 text-center">
            <h3 className="text-lg font-bold text-blue-600">
              143
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              This Week
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 text-center">
            <h3 className="text-lg font-bold text-emerald-600">
              584
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
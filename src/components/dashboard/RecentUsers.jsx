import React from "react";

import {
  Avatar,
  LinearProgress,
  IconButton,
} from "@mui/material";

import { MoreVert } from "@mui/icons-material";

import { users } from "../../data/dashboardData";

function RecentUsers() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-700";

      case "Pending":
        return "bg-amber-100 text-amber-700";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">
          Recent Users
        </h2>

        <p className="text-sm text-slate-400">
          Latest registered users
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-left">
                User
              </th>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Progress
              </th>

              <th className="px-6 py-4 text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.email}
                className="border-b border-slate-100 hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Avatar
                      sx={{
                        bgcolor: user.avatarColor,
                      }}
                    >
                      {user.avatar}
                    </Avatar>

                    <div>
                      <h4 className="font-semibold">
                        {user.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  {user.role}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-5 min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <LinearProgress
                      variant="determinate"
                      value={user.progress}
                      sx={{
                        flex: 1,
                        height: 8,
                        borderRadius: 10,
                      }}
                    />

                    <span>
                      {user.progress}%
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5 text-right">
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentUsers;
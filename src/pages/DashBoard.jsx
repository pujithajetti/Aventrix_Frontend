import React from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsSection from "../components/dashboard/StatsSection";
import RevenueChart from "../components/dashboard/RevenueChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import RecentUsers from "../components/dashboard/RecentUsers";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      
      
      <Sidebar />

      
      <div className="flex-1 md:ml-[280px]">
        
       
        <Navbar
          title="Dashboard"
          subtitle="Welcome back 👋"
        />

        
        <main className="p-6 lg:p-8 max-w-[1800px]">
          <WelcomeCard />

          <div className="mt-6">
            <StatsSection />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            <RevenueChart />
            <ActivityFeed />
          </div>

          <div className="mt-6">
            <RecentUsers />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
import React from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsFilters from "../components/analytics/AnalyticsFilters";
import AnalyticsStats from "../components/analytics/AnalyticsStats";
import RevenueChart from "../components/analytics/RevenueChart";
import SalesCategoryChart from "../components/analytics/SalesCategoryChart";
import UserActivityChart from "../components/analytics/UserActivityChart";
import TopProducts from "../components/analytics/TopProducts";
import RecentActivity from "../components/analytics/RecentActivity";

function Analytics() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      

      <Sidebar />

      

      <div className="flex-1 md:ml-[280px]">
        

        <Navbar />

        

        <main className="p-5 md:p-6">
          

          <AnalyticsHeader />

          

          <div className="mt-5">
            <AnalyticsFilters />
          </div>

          

          <div className="mt-6">
            <AnalyticsStats />
          </div>

         

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-3
              gap-6
              mt-6
            "
          >
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>

            <div>
              <SalesCategoryChart />
            </div>
          </div>

          

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-3
              gap-6
              mt-6
            "
          >
            <div className="xl:col-span-2">
              <UserActivityChart />
            </div>

            <div>
              <TopProducts />
            </div>
          </div>

          

          <div className="mt-6">
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Analytics;
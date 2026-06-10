import React from "react";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import {
  topProducts,
} from "../../data/analyticsData";

function TopProducts() {
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
          Top Products
        </h2>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Best performing products
        </p>
      </div>

      

      <div className="space-y-4">
        {topProducts.map(
          (product, index) => (
            <div
              key={product.id}
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-xl
                border
                border-slate-100
                hover:bg-slate-50
                transition
              "
            >
              
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  {index + 1}
                </div>

                <div>
                  <h3
                    className="
                      font-medium
                      text-slate-800
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    {product.sales} Sales
                  </p>
                </div>
              </div>

              

              <div className="text-right">
                <h4
                  className="
                    font-semibold
                    text-slate-800
                  "
                >
                  {product.revenue}
                </h4>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-green-600
                    text-sm
                    justify-end
                  "
                >
                  <TrendingUpIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />

                  {product.growth}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TopProducts;
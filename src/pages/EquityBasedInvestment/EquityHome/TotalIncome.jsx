import { Button } from "@/components/ui/button";

import { FaArrowDown } from "react-icons/fa";

const IncomeBoard = () => {
  return (
    <section className="pt-5 px-2 md:px-20 overflow-x-hidden">
      
      <div className="border-2 my-14 md:my-10">
        <div className="p-5 md:p-20 px-3 md:px-40">
          <img
            className="mx-auto w-1/2 md:w-1/6"
            src="https://i.ibb.co/JRHSrS3/new-sitelogo.png"
            alt=""
          />

          <div className="flex justify-end my-5 md:my-10">
            <Button className="font-bold bg-white text-black border-2 flex items-center">
              <FaArrowDown className="pr-2 text-xl" />
              Export CSV
            </Button>
          </div>

          <h2 className="font-bold text-lg md:text-xl">Revenue:</h2>
          <div className="ml-0 md:ml-14 max-w-full md:max-w-[600px] pb-5">
            <div className="flex md:flex-row items-start md:items-center justify-between">
              <p>Gross Sales</p>
              <p>*******</p>
            </div>
            <div className="flex md:flex-row items-start md:items-center justify-between">
              <p>Less Sales returns/ Allowance</p>
              <p>*******</p>
            </div>
            <div className="flex  md:flex-row items-start md:items-center justify-between">
              <p>Net sales</p>
              <p>*******</p>
            </div>
          </div>

          <h2 className="font-bold text-lg md:text-xl">Cost of Goods Sold:</h2>

          <div className="ml-0 md:ml-14 max-w-full md:max-w-[600px] pb-5">
            <div className="flex  md:flex-row items-start md:items-center justify-between">
              <p>Purchase</p>
              <p>*******</p>
            </div>
            <div className="flex  md:flex-row items-start md:items-center justify-between">
              <p>Delivery Charges</p>
              <p>*******</p>
            </div>
            <div className="flex  md:flex-row items-start md:items-center justify-between">
              <p>Cost of Goods Sold</p>
              <p>*******</p>
            </div>
            <div className="flex  md:flex-row items-start md:items-center justify-between">
              <p>Gross Sales Profit</p>
              <p>*******</p>
            </div>
          </div>

          <div className="flex  md:flex-row max-w-full md:max-w-[655px] pb-5 items-start md:items-center justify-between">
            <h2 className="font-bold text-lg md:text-xl">Total Expenses</h2>
            <p className="ml-0 md:ml-4">*******</p>
          </div>

          <div className="flex  md:flex-row max-w-full md:max-w-[655px] items-start md:items-center justify-between">
            <h2 className="font-bold text-lg md:text-xl">Net Income</h2>
            <p>*******</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeBoard;

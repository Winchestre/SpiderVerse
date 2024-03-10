import { PlusIcon } from "@radix-ui/react-icons";
import check from "../assets/icons/check-tick.svg";
import filter from "../assets/icons/filter.svg";

const FilterProducts = () => {
  return (
    <div
      id="sidebar"
      className="flex flex-col mr-4 text-gray-700 bg-white w-72"
    >
      <button className="flex gap-2 justify-center px-4 py-2 mb-4 text-white bg-blue-900 border border-transparent rounded-md">
        <img src={filter} alt="" className=" my-auto" />
        <span>Filter By</span>
      </button>
      <div className="border-2 border-gray-100 rounded-md p-3">
        <h4 className="mb-2 text-lg">Products</h4>
        <div className="mb-6 flex flex-col gap-3">
          <div className="relative w-[43.4%] min-w-52">
            <h3 className=" text-blue-900 text-base font-semibold">
              <span className="pr-8">
                <img
                  src={check}
                  alt=""
                  className="absolute"
                />
              </span>
              Gift Card
            </h3>
          </div>
          <div className="pl-8 flex flex-col gap-2 pt-2">
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Food
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Sports
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Towel
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Bitcoin
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Gaming
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Clothing
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Shopping
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Streaming
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Electronics
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Restaurant
            </label>
            <label className="flex items-center subsection">
              <input type="checkbox" className="mr-2" /> Mobile Phone
            </label>
            <label className="flex items-center subsection text-blue-900">
              <input type="checkbox" checked className="mr-2" />New Category
            </label>
          </div>


          <div className="relative w-[43.4%] min-w-52">
            <h3 className="mb-2 text-blue-900 text-base font-semibold">
              <span className="pr-8">
                <img
                  src={check}
                  alt=""
                  className="absolute"
                />
              </span>
              Mobile Top Up
            </h3>
            <div className="pl-8 flex flex-col gap-2 pt-2">
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Data
              </label>
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Bundles
              </label>
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Airtime
              </label>
              <label className="flex items-center subsection text-blue-900">
                <input type="checkbox" checked className="mr-2" />New Category
              </label>
            </div>
          </div>

          <div className="relative w-[43.4%] min-w-52">
            <h3 className="mb-2 text-blue-900 text-base font-semibold">
              <span className="pr-8">
                <img
                  src={check}
                  alt=""
                  className="absolute"
                />
              </span>
              Bill Payment
            </h3>
            <div className="pl-8 flex flex-col gap-2 pt-2">
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Electricity Bill
              </label>
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Water Bill
              </label>
              <label className="flex items-center subsection">
                <input type="checkbox" className="mr-2" />Betting
              </label>
              <label className="flex items-center subsection text-blue-900">
                <input type="checkbox" checked className="mr-2" />New Category
              </label>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <PlusIcon className="bg-blue-900 text-white rounded-sm" />
            <span>Add A Category</span>
          </div>
        </div>
      </div>

      <button className="px-4 py-2 text-white bg-blue-900 border border-transparent rounded-md mt-3 cursor-pointer">
        Apply
      </button>
    </div>
  );
};

export default FilterProducts;

import { useEffect, useState } from "react";
import Handleaxios from "./handleaxios";

function Filter(props) {
  const [filterData, setFilterData] = useState([]);

  const fetchData = async () => {
    try {
      let result = await Handleaxios("filter", null, props.item);
      console.log("filter-result: ", result.data);
      setFilterData(result.data);
    } catch (error) {
      console.error("Error fetching data in Filter:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.item]);

  return (
    <div>
      <table className="border-collapse border border-black w-full mt-[15px]">
        <thead>
          <tr className="border-b border-black">
            <th className="border-r border-black p-2">org_id</th>
            <th className="border-r border-black p-2">orderscount</th>
            <th className="border-r border-black p-2">email-campaigncount</th>
            <th className="border-r border-black p-2">buyboxcount</th>
            <th className="border-r border-black p-2">globalreviewscount</th>
            <th className="border-r border-black p-2">pricetrackingcount</th>
            <th className="border-r border-black p-2">reviewratingscount</th>
            <th className="border-r border-black p-2">inventorycount</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((filter, index) => (
            <tr key={index} className="border-b border-black">
              <td className="border-r border-black p-2">
                {filter.orgid !== null ? filter.orgid.toString() : "null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.orderscount !== null
                  ? filter.orderscount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.emailcampaigncount !== null
                  ? filter.email_campaigncount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.buyboxcount !== null
                  ? filter.buyboxcount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.globalreviewscount !== null
                  ? filter.globalreviewscount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.pricetrackingcount !== null
                  ? filter.pricetrackingcount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.reviewratingcount !== null
                  ? filter.reviewratingcount.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filter.inventorycount !== null
                  ? filter.inventorycount.toString()
                  : "Null"}
              </td>
              <td className="p-2 flex items-center justify-center"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filter;

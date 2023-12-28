import { useEffect, useState } from "react";
import Handleaxios from "./handleaxios";

function Filter(props) {
    console.log(props,"props")
  const [filterData, setFilterData] = useState();

  const fetchData = async () => {
    try {
      let result = await Handleaxios("filter", null, null,props.item);
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
          {/* {filterData?.map((filter, index) => ( */}
            <tr  className="border-b border-black">
              <td className="border-r border-black p-2">
                {filterData && filterData?.org_id !== null ?  filterData && filterData.org_id?.toString() : "null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.orders_count !== null
                  ? filterData && filterData.orders_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.email_campaign_count !== null
                  ? filterData && filterData.email_campaign_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.buybox_count !== null
                  ? filterData && filterData.buybox_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.global_reviews_count !== null
                  ? filterData && filterData.global_reviews_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.price_tracking_count !== null
                  ? filterData && filterData.price_tracking_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.review_ratings_count !== null
                  ? filterData && filterData.review_ratings_count?.toString()
                  : "Null"}
              </td>
              <td className="border-r border-black p-2">
                {filterData && filterData.inventory_count !== null
                  ? filterData && filterData.inventory_count?.toString()
                  : "Null"}
              </td>
              <td className="p-2 flex items-center justify-center"></td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Filter;

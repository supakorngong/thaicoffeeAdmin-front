import Ordercard from "../component/Ordercard";
import useOrder from "../hooks/useOrder";

export default function HomePage() {
  const { order } = useOrder();

  return (
    <>
      <div className="flex justify-center mt-10">
        <table className="table-auto border-collapse">
          <tr className="bg-white ">
            <th className="p-2">Order Id</th>
            <th className="p-2">User Id</th>
            <th className="p-2">Created At</th>
            <th className="p-2">Total Cost</th>
            <th className="p-2">Slip</th>
            <th className="p-2">Status</th>
          </tr>
          {order?.map((el, index) => (
            <>
              <Ordercard el={el} index={index} />
            </>
          ))}
        </table>
      </div>
    </>
  );
}

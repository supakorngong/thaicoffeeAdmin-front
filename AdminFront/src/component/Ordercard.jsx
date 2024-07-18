import { useState } from "react";
import OrderApi from "../api/Order";

export default function Ordercard({ el, index }) {
  const [buttonLabel, setButtonLabel] = useState(el.status);

  const handleChange = async (e) => {
    try {
      // console.log(e.target.value);
      setButtonLabel(e.target.value);
      //   console.log(el.order_id, "hwyyyyy");
      const result = await OrderApi.updateStatus(el.order_id, e.target.value);
      // setOrder((prev) => [...prev, (prev[el.order_id].status = result.status)]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <tr className="text-[#1a120e]" style={index % 2 === 0 ? { background: "#6bb0fa" } : { background: "white" }}>
      <td className="border border-slate-300 p-2">{el.order_id}</td>
      <td className="border border-slate-300 p-2">{el.user_id}</td>
      <td className="border border-slate-300 p-2">{formatDate(el.order_date)}</td>
      <td className="border border-slate-300 p-2">{el.total_cost}</td>
      <td className="w-20 h-14 border border-slate-300 p-2">
        <a href={el.evidence} target="_blank">
          <img src={el.evidence} />
        </a>
      </td>
      <td className="border border-slate-300 p-2">
        <select value={buttonLabel} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="checking">checking</option>
          <option value="payed">Payed</option>
          <option value="received">Received</option>
        </select>
      </td>
    </tr>
  );
}

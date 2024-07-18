import axios from "../config/axios";
const OrderApi = {};
OrderApi.getAllOrder = async () => {
  try {
    const order = await axios.get("/order");
    return order;
  } catch (err) {
    console.log(err.message);
  }
};
OrderApi.updateStatus = async (orderId, statuss) => {
  try {
    await axios.patch(`/order/${orderId}`, { status: statuss });
  } catch (err) {
    console.log(err.message);
  }
};
export default OrderApi;

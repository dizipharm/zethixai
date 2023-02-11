import OrderTable from "./OrderTable";

interface MyOrdersProps {
  data: Array<any>;
  orderType: string;
  viewSingleOrderFn: (orderID: string) => void;
}

const MyOrders = ({ data, orderType, viewSingleOrderFn }: MyOrdersProps) => {
  return (
    <OrderTable
      data={data}
      orderType={orderType}
      viewSingleOrderFn={viewSingleOrderFn}
    />
  );
};

export default MyOrders;

import OrderTable from "./OrderTable";

interface rejectedOrdersProps {
  data: Array<any>;
  orderType: string;
  viewSingleOrderFn: (orderID: string) => void;
}

const RejectedOrders = ({
  data,
  orderType,
  viewSingleOrderFn,
}: rejectedOrdersProps) => {
  return (
    <OrderTable
      data={data}
      orderType={orderType}
      viewSingleOrderFn={viewSingleOrderFn}
    />
  );
};

export default RejectedOrders;

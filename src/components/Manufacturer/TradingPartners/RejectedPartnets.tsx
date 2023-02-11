import TradingTable from "./TradingTable";

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
    <TradingTable
      data={data}
      orderType={orderType}
      viewSingleOrderFn={viewSingleOrderFn}
    />
  );
};

export default RejectedOrders;

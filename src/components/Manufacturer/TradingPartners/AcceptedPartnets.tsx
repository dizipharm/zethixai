import TradingTable from "./TradingTable";

interface acceptedOrdersProps {
  data: Array<any>;
  orderType: string;
  viewSingleOrderFn: (orderID: string) => void;
}

const AcceptedOrders = ({
  data,
  orderType,
  viewSingleOrderFn,
}: acceptedOrdersProps) => {
  return (
    <TradingTable
      data={data}
      orderType={orderType}
      viewSingleOrderFn={viewSingleOrderFn}
    />
  );
};

export default AcceptedOrders;

import TradingTable from "./TradingTable";

interface newOrdersProps {
  data: Array<any>;
  orderType: string;
  viewSingleOrderFn: any;
  acceptPartnerFn: (orderID: string) => void;
  rejectPartnerFn: (orderID: string) => void;
}

const NewOrders = ({
  data,
  orderType,
  viewSingleOrderFn,
  acceptPartnerFn,
  rejectPartnerFn,
}: newOrdersProps) => {
  return (
    <>
      <TradingTable
        data={data}
        orderType={orderType}
        viewSingleOrderFn={viewSingleOrderFn}
        acceptPartnerFn={acceptPartnerFn}
        rejectPartnerFn={rejectPartnerFn}
      />
    </>
  );
};

export default NewOrders;

import OrderTable from "./OrderTable";

interface newOrdersProps {
  data: Array<any>;
  orderType: string;
  viewSingleOrderFn: (orderID: string) => void;
  acceptOrderFn: (orderID: string) => void;
  rejectOrderFn: (orderID: string) => void;
}

const NewOrders = ({
  data,
  viewSingleOrderFn,
  acceptOrderFn,
  rejectOrderFn,
  orderType,
}: newOrdersProps) => {
  return (
    <>
      <OrderTable
        data={data}
        viewSingleOrderFn={viewSingleOrderFn}
        acceptOrderFn={acceptOrderFn}
        rejectOrderFn={rejectOrderFn}
        orderType={orderType}
      />
    </>
  );
};

export default NewOrders;

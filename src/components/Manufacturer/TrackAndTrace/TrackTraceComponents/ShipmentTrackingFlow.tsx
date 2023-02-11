import moment from "moment";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";
import { trackEventFn } from "./trackEvent";

const ShipmentTrackingFlow = ({ data }: any) => {
  return (
    <>
      <PageTitle title="Shipment Tracking" />
      <div className="techhiwwrapper">
        {data?.length > 0 ? (
          data.map((d: any, i: number) => {
            let dt = trackEventFn(d);

            return (
              <div className="techhiwitem" key={i}>
                <div className="techhiwitem__leftside">
                  <div className="techhiw__iconwrapper">{dt?.icon}</div>
                  <div className="techhiw__arrow"></div>
                </div>
                <div className="techhiwitem__content">
                  <h4>{dt?.status}</h4>
                  <p className="techhiw__paragraph">
                    {dt?.dateTime &&
                      moment(dt?.dateTime).format("DD-MMM-YYYY - h:mm a")}
                  </p>
                  <div style={{ height: "90px" }}></div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-data">No data available</p>
        )}
      </div>
    </>
  );
};

export default ShipmentTrackingFlow;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
};

export default Loading;

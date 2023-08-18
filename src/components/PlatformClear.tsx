import { MdRefresh } from "react-icons/md";
import { GameQuery } from "../App";

interface Props {
  clearPlatform: (platfrom: null, genre: null) => void;
}

const PlatformClear = ({ clearPlatform }: Props) => {
  return (
    <MdRefresh
      size="40px"
      color="silver"
      style={{ marginTop: "10px" }}
      onClick={(platfrom) => clearPlatform(null, null)}
    />
  );
};

export default PlatformClear;

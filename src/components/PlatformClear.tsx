import { Button } from "@chakra-ui/react";

interface Props {
  clearPlatform: (platfrom: null) => void;
}

const PlatformClear = ({ clearPlatform }: Props) => {
  return (
    <Button marginLeft={2} onClick={(platfrom) => clearPlatform(null)}>
      Clear
    </Button>
  );
};

export default PlatformClear;

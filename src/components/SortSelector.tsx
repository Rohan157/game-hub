import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By relevence
      </MenuButton>
      <MenuList>
        <MenuItem>R</MenuItem>
        <MenuItem>d</MenuItem>
        <MenuItem>d</MenuItem>
        <MenuItem>w</MenuItem>
        <MenuItem>d</MenuItem>
        <MenuItem>g</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

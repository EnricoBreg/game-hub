import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, matchPath, useLocation } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={".625rem"} justifyContent="space-between">
      <Link to="/">
        <Image src={logo} boxSize={"3.75rem"} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

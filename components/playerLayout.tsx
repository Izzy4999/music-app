import React from "react";
import { Box } from "@chakra-ui/layout";
import SideBar from "./sideBar";

type Props = {};

const PlayerLayout = ({ children }: any) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250PX" left="0">
        <SideBar/>
      </Box>
      <Box marginLeft="250px" marginBottom="100px">{children}</Box>
      <Box position="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;

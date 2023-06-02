import HomeScreen from "../../screens/HomeScreen";
import { Box } from "./Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <HomeScreen />
  </Box>
);

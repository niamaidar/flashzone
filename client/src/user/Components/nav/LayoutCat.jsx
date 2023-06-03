import Category from "../../Category";
import { Box } from "./Box";

export const LayoutCat = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Category />
  </Box>
);

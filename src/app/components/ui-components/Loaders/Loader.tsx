import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";

interface LoaderProps {
  color?: string;
  size?: SpinnerProps["size"];
  margin?: SpinnerProps["m"];
}

const Loader = ({
  color = "brand.500",
  size = "xl",
  margin = 10,
}: LoaderProps) => {
  return (
    <Flex h="full" justifyContent="center" alignItems="center">
      <Spinner
        borderWidth="3px"
        animationDuration="0.65s"
        css={{ "--spinner-track-color": "#e2e8f0" }}
        color={color}
        size={size}
        m={margin}
      />
    </Flex>
  );
};

export default Loader;

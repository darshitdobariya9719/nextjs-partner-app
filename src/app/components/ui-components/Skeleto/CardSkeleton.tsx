import {
  Box,
  Card,
  Flex,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const CardSkeleton = (props:{arrLength?:number[]}) => {
  const arr = props.arrLength || [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {arr?.map((arr: number) => {
        return (
          <Card.Root
            key={arr}
            variant={"outline"}
            size="md"
            border="1px solid #F9FAFB"
            borderRadius="8px"
            cursor="pointer"
            boxShadow="0px 0px 6px -2px #E6E7E9"
          >
            <Card.Body>
              <Flex direction={"column"} h={"100%"}>
                <Skeleton h={"13px"} w={"99px"} borderRadius={"30px"} />
                <Box minH={"230px"} flexGrow={1} mt={"20px"}>
                  <SkeletonText noOfLines={2} />
                </Box>
                <Skeleton h="36px" />
              </Flex>
            </Card.Body>
          </Card.Root>
        );
      })}
    </>
  );
};

export default CardSkeleton;

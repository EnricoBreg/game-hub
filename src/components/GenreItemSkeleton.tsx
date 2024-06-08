import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <>
      <Skeleton boxSize="32px" borderRadius="8px" />
      <SkeletonText noOfLines={1} />
    </>
  );
};

export default GenreItemSkeleton;

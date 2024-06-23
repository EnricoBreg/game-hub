import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  const res = data?.results;
  return res ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={2}>
      {res.map((file) => (
        <Image key={file.id} objectFit="cover" src={file.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;

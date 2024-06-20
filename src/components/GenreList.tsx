import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
import GenreItemSkeleton from "./GenreItemSkeleton";
import GenreContainer from "./GenreContainer";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { selectedGenreId, setGenreId } = useGameQueryStore((s) => ({
    selectedGenreId: s.gameQuery.genreId,
    setGenreId: s.setGenreId,
  }));

  if (error) return null;
  if (isLoading) {
    return (
      <GenreContainer>
        {skeletons.map((genre) => (
          <GenreItemSkeleton key={genre} />
        ))}
      </GenreContainer>
    );
  }

  return (
    <GenreContainer>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px">
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant={"link"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </GenreContainer>
  );
};

export default GenreList;

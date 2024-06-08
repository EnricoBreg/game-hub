import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
import GenreItemSkeleton from "./GenreItemSkeleton";
import GenreItemContainer from "./GenreItemContainer";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  if (isLoading) {
    return skeletons.map((skeleton) => (
      <GenreItemContainer>
        <GenreItemSkeleton key={skeleton} />
      </GenreItemContainer>
    ));
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <GenreItemContainer>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant={"link"}
            >
              {genre.name}
            </Button>
          </GenreItemContainer>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

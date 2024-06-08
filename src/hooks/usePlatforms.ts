import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () => ({
  data: platforms.results,
  isLoading: false,
  error: null,
});

export default usePlatform;

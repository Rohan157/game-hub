import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import PlatformClear from "./components/PlatformClear";

function App() {
  // Genre is being used in both Genre and Games component so we have to defined the state
  //at the closest parent and that in our case is App.tsx
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // Now to update Genre the GenreComponent should tell app.tsx to update the state
  // becasue the component that holds the state should only change it.
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatfrom={selectedPlatform}
          onSelectPlatform={(platfrom) => setSelectedPlatform(platfrom)}
        />
        {selectedPlatform?.name && (
          <PlatformClear
            clearPlatform={(platform) => setSelectedPlatform(platform)}
          />
        )}
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}
export default App;

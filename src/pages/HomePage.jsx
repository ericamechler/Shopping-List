import { useState } from "react";
import { MyListsPage } from "./MyListsPage";

export const HomePage = () => {
  const [hasLists, setHasLists] = useState(false);
  return (
    <div>
      HomePage
      <MyListsPage />
    </div>
  );
};

// Renders either ListsPage or StartPage based on whether the user has lists or not

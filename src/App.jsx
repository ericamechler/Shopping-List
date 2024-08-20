import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./index.css";
import { MyListsPage } from "./pages/MyListsPage";
import { CreateListPage } from "./pages/CreateListPage";
import { ListDetailsPage } from "./pages/ListDetailsPage";

export const App = () => {
  return (
    <>
      {/* Any component that is within the browser-router can expose routes & use links  */}
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-lists" element={<MyListsPage />} />
            <Route path="/create-list" element={<CreateListPage />} />
            <Route path="list/:id" element={<ListDetailsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

// If no items have been added, then you start on the first screen
// Start by creating list- Your smart shopping list will be shown here. Start by creating a new list

// Återkommande: add-list-button
// Add new item
//Listcard
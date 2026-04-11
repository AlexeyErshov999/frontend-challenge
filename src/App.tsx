import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GalleryPage />} />
        <Route path="favorites" element={<FavoritesPage />} />

        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Route>
    </Routes>
  );
}

export default App;

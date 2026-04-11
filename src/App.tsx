import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route 
          index 
          element={<h1>Gallery</h1>} 
        />
        
        <Route 
          path="favorites"
          element={<h1>Favourites</h1>} 
        />
        
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
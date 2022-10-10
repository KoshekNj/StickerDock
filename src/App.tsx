import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Canvas } from "./Components/Sticker/Canvas/canvas";
import { IStickerProps, Sticker } from "./Components/Sticker/sticker";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Edit from "./Pages/Edit/edit";

export const ItemTypes = {
  STICKER: "sticker",
};

function App() {
  const [stickers, setStickers] = React.useState<IStickerProps[]>([
    { path: "//picsum.photos/200/200", x: 0, y: 0 },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

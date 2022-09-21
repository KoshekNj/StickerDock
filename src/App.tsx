import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Canvas } from "./Components/Sticker/Canvas/canvas";
import { IStickerProps, Sticker } from "./Components/Sticker/sticker";

export const ItemTypes = {
  STICKER: "sticker",
};

function App() {
  const [stickers, setStickers] = React.useState<IStickerProps[]>([
    { path: "//picsum.photos/200/200", x: 0, y: 0 },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Canvas setStickers={setStickers}></Canvas>
      {stickers.map((sticker) => (
        <Sticker path={sticker.path} x={sticker.x} y={sticker.y}></Sticker>
      ))}
    </DndProvider>
  );
}

export default App;

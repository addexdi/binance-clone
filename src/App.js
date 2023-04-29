import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ComponentTesting from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ComponentTesting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

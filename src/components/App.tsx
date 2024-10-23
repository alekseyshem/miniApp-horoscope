import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sign from "./Sign/Sign";
import Layout from "./Layout/Layout";
import HomePage from "./HomePage/HomePage";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path=":sign" element={<Sign />} />
              {/* <Route path="*" element={<NotFound />}/> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

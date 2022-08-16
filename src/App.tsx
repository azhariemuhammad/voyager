import React from "react";

import Header from "./components/Header";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <div className="grid place-items-center p-[80px]">
        <div className="max-w-screen-md">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-0">
            <div className="mt-[40px]">
              <Header />
              {routes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

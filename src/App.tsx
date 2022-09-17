import React from "react";

import Header from "./components/Header";
import { routes } from "./routes";

function App() {
  return (
    <div>
      <div className="grid sm:place-items-initial lg:place-items-center ">
        <div className="sm:max-w-full lg:max-w-md lg:mt-[40px]">
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

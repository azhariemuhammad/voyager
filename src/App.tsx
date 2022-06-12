import React from 'react';

import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div className="grid place-items-center p-[80px]">
        <div className="max-w-screen-md">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-0">
            <div className="mt-[40px]">
              <Header />
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

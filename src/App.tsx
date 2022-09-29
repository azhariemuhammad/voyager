import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';

function App() {
	return (
		<HelmetProvider>
			<div>
				<div className="grid sm:place-items-initial lg:place-items-center ">
					<div className="sm:max-w-full lg:max-w-lg lg:mt-[40px]">
						<div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-0">
							<div className="mt-[40px]">
								<Header />
								{routes}
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</HelmetProvider>
	);
}

export default App;

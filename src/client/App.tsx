import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* FONT AWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import fa regular icons

/* PAGE IMPORTS */
// CORE PAGES
import Home from './pages/Home';
import Health from './pages/Health';
import Family from './pages/Family';
import Careers from './pages/Careers';
import Covid from './pages/Covid';
// SUBPAGES
import Partners from './pages/subpages/Partners';
import WhyNow from './pages/subpages/WhyNow';
// TRIALS PAGES
import Trials from './pages/trials/Trials';
import Results from './pages/trials/Results';
import FullStudy from './pages/trials/FullStudy';
// UTILS PAGES
import Privacy from './pages/utils/Privacy';
import Terms from './pages/utils/Terms';

/* COMPONENT IMPORTS */
import Header from './components/Header';
import Footer from './components/Footer';

library.add(fab, fas, far);

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) =>
{


	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Core Paths */}
					<Route path="/" element={<Home />} />
					<Route path="/health" element={<Health />} />
					<Route path="/family" element={<Family />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/covid" element={<Covid />} />
					{/* SubPage Paths */}
					<Route path="/partners" element={<Partners />} />
					<Route path="/whynow" element={<WhyNow />} />
					{/* Trial Paths */}
					<Route path="/trials" element={<Trials />} />
					<Route path="/trials/results/:text" element={<Results />} />
					<Route path="/trials/results/study/:text/:id" element={<FullStudy />} />
					<Route path="/trials/study/:id" element={<FullStudy />} />
					{/* Utils Paths */}
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />					
					<Route path="*" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

interface AppProps { }

export default App;

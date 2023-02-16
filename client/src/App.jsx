import { Routes, Route } from 'react-router-dom';

import { ProductPage } from '@views/ProductPage/ProductPage';
import { HomePage } from '@views/HomePage/HomePage';
import { NavBar } from '@components/NavBar/NavBar';
import { Footer } from '@components/Footer/Footer';
import '@styles/App.css';

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/product/:productId' element={<ProductPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;

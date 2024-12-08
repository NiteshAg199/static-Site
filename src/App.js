import logo from './logo.svg';
import './App.css';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Career from './Career/Career';
import ContactUs from './ContactUs/ContactUs';
import ProductAndServiceCard from './ProductAndServices/ProductAndServices';
import WhyWe from './WhyWe/WhyWe';
import AboutPage from './AboutPage/AboutPage';
import Header from './Component/Header/Header';
import HomePage from './HomePage/HomePage';
import Footer from './Component/Footer/Footer';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/home" element={<HomePage/>}/>
          <Route index element={<HomePage/>} />
          <Route path="/whywe" element={<WhyWe/>} />
          <Route path="/services" element={<ProductAndServiceCard/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/carrer" element={<Career/>} />
          <Route path="/aboutUs" element={<AboutPage/>} />
        {/* </Route> */}
    </Routes>

    {/* <NotFoundPage/> */}
    {/* <Career/> */}
    {/* <ContactUs/> */}
    {/* <ProductAndServiceCard/> */}
    {/* <WhyWe/> */}
    {/* <AboutPage/> */}
    <Footer/>
    </>
  );
}


export default App;

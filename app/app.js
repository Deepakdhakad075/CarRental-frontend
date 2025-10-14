import './i18n';
import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Landing, NotFound } from './containers/pageListAsync';
import LoginPage from './containers/Auth/LoginPage';
import RegistrationPage from './containers/Auth/RegistrationPage';
import Navbar from './containers/Layout/Navbar/Navbar';
import Footer from './containers/Layout/Footer/Footer';
import FilterLayout from './containers/Layout/Filter/FilterLayout';
import Fleets from './containers/Layout/Fleets/Fleets';
import About from './containers/Layout/About/About';
import store from './redux/store';
import CarListingPage from './containers/Layout/CarListingPage';
import Faq from './containers/Layout/FAQ/Faq';
import Profile from './containers/Profile/Profile';
import Everification from './containers/Layout/Everification/E-verification';

// const sagaMiddleware = createSagaMiddleware();
// const reducer = createReducer();
// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware),
//   devTools:
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
// });

// sagaMiddleware.run(rootSaga);

function AppContent() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === '/login' || location.pathname === '/registration';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/filter" element={<FilterLayout />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Everification" element={<Everification />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/custom-verification" element={<Everification />} />
        <Route path="/cars/:city" element={<CarListingPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </Provider>
  );
}

export default App;

import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import SavedArticles from '../SavedArticles/SavedArticles';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//Modals
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';

//Side Api
import { searchNews } from '../../utils/NewsApi';
import { test_data } from '../../utils/constanst';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const [isModalRegistraionOpen, setIsModalRegistraionOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const [articles, setArticles] = useState(null);
  const [articlesObserv, setObservArticles] = useState(3);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isSerchingStarted, setSerchingStart] = useState(false);

  //Side Api Methods
  const searchNewsHandler = (query)=>
  {
    setSerchingStart(true);
    setObservArticles(3);
    searchNews({query:query})
      .then((data) =>
      {
        setSerchingStart(false);
        setTotalArticles(data["totalResults"])
        setArticles(data["articles"]);
      })
      .catch(console.error);
  }

  const showMoreHandler = ()=>{
    setObservArticles(articlesObserv+3);
  }

  // REgistration Modal Methods
  const handleOnSignUp = (data) => {

  };

  const handleRegistrartionModalOpen = () =>
  {
    setIsModalRegistraionOpen(true);
  }

  const handleRegistrartionModalClose = () => {
    setIsModalRegistraionOpen(false);
  };
  const handleSwitchToLogin = ()=>{
    handleRegistrartionModalClose();
    handleLoginModalOpen();
  };

  //Login Modal Methods
  const handleOnLogin = (data) => {}

  const handleLoginModalClose = () => {
    setIsModalLoginOpen(false);
  };
  const handleSwitchToSignUp = ()=>{
    handleLoginModalClose();
    handleRegistrationModalOpen();
  }

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>   
              <Header 
                onSignUpOpen={handleRegistrartionModalOpen}  
                isLoggedIn={isLoggedIn}
                onSerch={searchNewsHandler}/>
              <Main 
                isSerchingStarted={isSerchingStarted} 
                articlesObserv={articlesObserv}
                totalArticles={totalArticles}
                articles={articles}
                showMoreHandler={showMoreHandler}
                isLoggedIn={isLoggedIn}/>
            </>
          }
        />
        <Route
          exact
          path="/articles"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={
                <>
                  <Header 
                    onSignUpOpen={handleRegistrartionModalOpen} 
                    isLoggedIn={isLoggedIn} 
                    onSerch={searchNewsHandler}
                    isArticles={true}/>
                  <SavedArticles articles={test_data} isLoggedIn={isLoggedIn}/>
                </>
              }
            />
          }
        />
      </Routes>
      <Footer/>

      <RegisterModal 
        isOpen={isModalRegistraionOpen}
        onSighUp={handleOnSignUp}
        onCloseModal={handleRegistrartionModalClose}
        onSwitchToLogin={handleSwitchToLogin}/>

      <LoginModal
            isOpen={isModalLoginOpen}
            onCloseModal={handleLoginModalClose}
            onSignIn={handleOnLogin}
            onSingUpOpen={handleSwitchToSignUp}
          />
    </>
  )
}

export default App

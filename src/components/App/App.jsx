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

//Context
import CurrentUserContext from "../../context/CurrentUserContext";

//My Api
import { getCurrentUser, getArticle, signUp, signin, saweArticle, deleteArticle } from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const [isModalRegistraionOpen, setIsModalRegistraionOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const [articles, setArticles] = useState(null);
  const [articlesObserv, setObservArticles] = useState(3);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isSerchingStarted, setSerchingStart] = useState(false);
  const [userArticles, setUserArticles] = useState(null);
  const [keyword, setKeyword] = useState("");

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  //Authorization
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser()
        .then((res) => {
          setCurrentUser(res);

          setLoggedIn(true);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  //Articles
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getArticle()
        .then((res)=> {
          setUserArticles(res)
        })
        .catch(console.error);
    }
  }, [userArticles]);

  const handleSaweArticle = ({ article }) =>
  {
    const token = localStorage.getItem("jwt");
    console.log(article);
    if(token){
      saweArticle(article)
        .then((newArticle)=>{
          setUserArticles((prevAtrticles) => [...prevAtrticles, newArticle]);
        })
        .catch(console.error);
    }
  }

  const isArticleSawed = ({article}) =>
  {
    const index = userArticles.findIndex(item =>
      item.title === article.title &&
      item.text === article.text &&
      item.keyword === article.keyword
    );
    return index
  }

  const handleDeleteFromSaweList = ({ article }) =>{
    console.log("delete");
    const token = localStorage.getItem("jwt");
    if(token){
      const index= isArticleSawed({article}) 
      if (index !== -1) {
        const curArticle = userArticles[index];
        deleteArticle({id:curArticle._id})
          .then((res)=>{
            console.log("article deleted")
            userArticles.splice(index, 1)
          })
          .catch(console.error);
        
    }
    }
  }

  //Side Api Methods
  const searchNewsHandler = (query)=>
  {
    if(query=="") return;
    setSerchingStart(true);
    setObservArticles(3);
    searchNews({query:query})
      .then((data) =>
      {
        setSerchingStart(false);
        setTotalArticles(data["totalResults"])
        setArticles(data["articles"]);
        setKeyword(query);
      })
      .catch(console.error);
  }

  const showMoreHandler = ()=>{
    setObservArticles(articlesObserv+3);
  }

  // Registration Modal Methods
  const handleOnSignUp = (data) => {
    signUp(data)
      .then((res) => {
        handleOnLogin({ email: data.email, password: data.password });
        handleRegistrartionModalClose();
      })
      .catch(console.error);
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
  const handleOnLogin = (data) => {
    signin(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLoginModalClose();
        setLoggedIn(true);
      })
      .catch(console.error);
  }

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const handleLoginModalOpen = () => {
    setIsModalLoginOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsModalLoginOpen(false);
  };
  const handleSwitchToSignUp = ()=>{
    handleLoginModalClose();
    handleRegistrartionModalOpen();
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>   
              <Header 
                onSignUpOpen={handleLoginModalOpen}  
                isLoggedIn={isLoggedIn}
                onSerch={searchNewsHandler}
                onLogOut={handleLogOut}/>
              <Main 
                isSerchingStarted={isSerchingStarted} 
                articlesObserv={articlesObserv}
                totalArticles={totalArticles}
                articles={articles}
                keyword={keyword}
                showMoreHandler={showMoreHandler}
                isLoggedIn={isLoggedIn}
                onSawe={handleSaweArticle}
                onDelete={handleDeleteFromSaweList}
                isArticleSawed={isArticleSawed}/>
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
                    onLogOut={handleLogOut}
                    isArticles={true}/>
                  <SavedArticles 
                    articles={userArticles} 
                    isLoggedIn={isLoggedIn}
                    onSawe={handleSaweArticle}
                    onDelete={handleDeleteFromSaweList}/>
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
    </CurrentUserContext.Provider>
  )
}

export default App

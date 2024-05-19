import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { withAuthentificator } from 'aws-amplify-react';
import Header from './components/HeaderComponent';
import AllReviews from './components/reviews/AllReviewsGrid';
import UserReviews from './components/reviews/UserReviewsGrid';
import ReviewPage from './components/reviews/ReviewPage';
import Login from './components/users/LoginPage';
import Registration from './components/users/RegistrationPage';
import { CookieBanner } from './components/modals/CookiesModal';
import AuthProvider from './hooks/auth/AuthProvider';
import PrivateRoute from './components/PrivateRouteComponent';
import Profile from './components/users/UserProfile';

//const ProtectedReviewModal = withAuthentificator()

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={ <Header/> }>
            <Route index element={ <AllReviews/> }/>
            <Route element={ <PrivateRoute /> }>
              <Route path='/my_reviews' element={ <UserReviews/> }/>
            </Route>
            <Route element={ <PrivateRoute /> }>
              <Route path='/review/:id' element={ <ReviewPage/> }/>
            </Route>
            <Route element={ <PrivateRoute /> }>
              <Route path='/profile' element={ <Profile /> }/>
            </Route>
            <Route path='/login' element={ <Login/> } />
            <Route path='/registration' element={ <Registration/> } />  
          </Route>
        </Routes>
        <CookieBanner/>
      </Router>
    </AuthProvider>
  );
}

export default App;

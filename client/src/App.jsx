import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { withAuthentificator } from 'aws-amplify-react';
import Header from './components/HeaderComponent';
import OrganizationsReviews from './components/reviews/OrganizationsReviewsGrid';
import UserReviews from './components/reviews/UserReviewsGrid';
import ReviewModal from './components/modals/ReviewModal';
import Login from './components/users/LoginPage';
import Registration from './components/users/RegistrationPage';

//const ProtectedReviewModal = withAuthentificator()

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Header/> }>
          <Route index element={ <OrganizationsReviews/> }/>
          <Route path='/my_reviews' element={ <UserReviews/> }/>
          <Route path='/review/:id' element={ <ReviewModal/> }/>
          <Route path='/login' element={ <Login/> } />
          <Route path='/registration' element={ <Registration/> } />
        </Route>
      </Routes>
    </Router>
    // <>
    //   <Header/>
    //   <main>
    //     <Reviews/>
    //   </main>
    // </>
  );
}

export default App;

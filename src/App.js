import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// context
import { AuthProvider } from './context/AuthProvider'
import { FirestoreProvider } from './context/FirestoreProvider'
// pages
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <Router>
      <AuthProvider>
        <FirestoreProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
          </Routes>
        </FirestoreProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

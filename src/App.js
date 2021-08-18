import './App.css';
import LoginPage from './pages/Login';
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import ChatRoom from 'pages/ChatRoom';
import AuthProvider from 'context/AuthProvider';
import AppProvider from 'context/AppProvider';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={LoginPage} path='/login' />
            <Route component={ChatRoom} path='/' />
          </Switch>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
    // <LoginPage />
  );
}

export default App;

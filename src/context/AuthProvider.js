import { Spin } from 'antd';
import { auth } from 'Firebase/config';
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'


export const AuthContext = React.createContext();


export default function AuthProvider({children}) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL});
        setLoading(false);
        history.push('/');
      } else {
        setLoading(false);
        history.push('/login');
      }

      
    });
    // will unmount
    return () => {
      unsubcribe();
    }
  },[history])
  return (
    <AuthContext.Provider value = {user}>
      {loading ? <Spin></Spin>:children}
    </AuthContext.Provider>
  )
}

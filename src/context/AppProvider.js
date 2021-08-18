import { Spin } from 'antd';
import { auth } from 'Firebase/config';
import useFireStore from 'hooks/useFireStore';
import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from './AuthProvider';


export const AppContext = React.createContext();


export default function AppProvider({ children }) {
  const { uid } = useContext(AuthContext);
  const roomsCondition = useMemo(() => {// useMemo for that we only changes conditions when user changes.
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    }
  }, [uid])
  const rooms = useFireStore('rooms', roomsCondition);
  return (
    <AppContext.Provider value={rooms}>
      {children}
    </AppContext.Provider>
  )
}

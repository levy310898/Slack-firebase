import React from 'react'
import { Button, Typography, Col, Row } from 'antd';
import firebase,{ auth, db } from 'Firebase/config';
import { addDocument } from 'Firebase/services';


// dành cho sử dụng facebook provider
const fbProvider = new firebase.auth.FacebookAuthProvider();


const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function LoginPage() {
  const handleFbLogin = async() => {
    try {
      const { additionalUserInfo,user} = await auth.signInWithPopup(fbProvider);
      console.log("new user: ",additionalUserInfo.isNewUser);
      if (additionalUserInfo.isNewUser) {
        console.log('run add data');
        addDocument('users', {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: additionalUserInfo.providerId
        })
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const data = auth.signInWithPopup(googleProvider);
      console.log('data = ', { data });
    } catch (error) {
      console.log(error.message);
    }
      
      // console.log('login name = ',login.user.displayName);
  }
  return (
    <Row justify = 'center'>
      <Col span={8}>
      <Typography.Title>Slack Firebase</Typography.Title>
      
        <Button style={{ width: '100%', marginBottom: '5px' }} onClick = {handleGoogleLogin}>Đăng nhập bằng google</Button>
        <Button style = {{width:'100%'}} onClick = {handleFbLogin}>Đăng nhập bằng facebook</Button>
      </Col>
    </Row>
  )
}

import React from 'react'
import { Button, Typography, Col, Row } from 'antd';
import firebase,{ auth } from 'Firebase/config';


// dành cho sử dụng facebook provider
// const fbProvider = new firebase.auth.FacebookAuthProvider();


const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function LoginPage() {
  // const handleFbLogin = () => {
  //   auth.signInWithPopup(fbProvider);
  // }

  const handleGoogleLogin = () => {
      auth.signInWithPopup(googleProvider);
      // console.log('login name = ',login.user.displayName);
  }
  return (
    <Row justify = 'center'>
      <Col span={8}>
      <Typography.Title>Slack Firebase</Typography.Title>
      
        <Button style={{ width: '100%', marginBottom: '5px' }} onClick = {handleGoogleLogin}>Đăng nhập bằng google</Button>
        {/* <Button style = {{width:'100%'}} onClick = {handleFbLogin}>Đăng nhập bằng facebook</Button> */}
      </Col>
    </Row>
  )
}

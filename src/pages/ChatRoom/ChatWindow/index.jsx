import { Button,Avatar,Tooltip,Form,Input } from 'antd'
import React from 'react'
import { UserAddOutlined } from '@ant-design/icons';
import './ChatWindow.css';
import Message from './Message';
export default function ChatWindow() {
  return (
    <div className = "ChatRoom">
      <div className="ChatRoom__header">
        <div className= "ChatRoom__header__info">
          <p className= "ChatRoom__header__title">Room 1</p>
          <p className= "ChatRoom__header__description">Kenh chat bi mat</p>
        </div>

        <div className = "ChatRoom__header__invite">
          <Button type = 'text' icon = {<UserAddOutlined />}>Mời</Button>

          <Avatar.Group maxCount = {3}>
            <Tooltip title='A'>
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title='B'>
              <Avatar>B</Avatar>
            </Tooltip>

            <Tooltip title='C'>
              <Avatar>C</Avatar>
            </Tooltip>

            <Tooltip title='A'>
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title='B'>
              <Avatar>B</Avatar>
            </Tooltip>

            <Tooltip title='C'>
              <Avatar>C</Avatar>
            </Tooltip>

            
            
            
            
          </Avatar.Group>
        </div>
      </div>

      <div className="ChatRoom__content">

        <div className="ChatRoom__content__message-box">
          <Message text="text" displayName="le vy" createdAt="2021-07-28T04:36:18.622Z" />
          <Message text="text" displayName="le vy" createdAt="2021-07-28T04:36:18.622Z" />
          <Message text="text" displayName="le vy" createdAt="2021-07-28T04:36:18.622Z" />
        </div>
          <Form className="ChatRoom__content__form">
            <Form.Item name = 'text'>
              <Input placeholder = "Nhập tin nhắn"/>
            </Form.Item>

            <Button>Gửi</Button>
          </Form>
      </div>
    </div>
    
  )
}

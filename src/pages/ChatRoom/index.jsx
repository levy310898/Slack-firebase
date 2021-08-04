import { Col, Row } from 'antd'
import React from 'react'
import ChatWinDow from './ChatWinDow'
import SideBar from './SideBar'

export default function ChatRoom() {
  return (
    <Row>
      <Col span={6}>
        <SideBar/>
      </Col>

      <Col span={18}>
        <ChatWinDow />
      </Col>
    </Row>
  )
}

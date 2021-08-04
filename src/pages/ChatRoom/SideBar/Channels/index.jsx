import React from 'react'
import { Button, Collapse, Typography } from 'antd';
import './Channels.css';
import { PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
export default function Channels() {
  return (
    <Collapse className = "channel__collapse" ghost defaultActiveKey={['1']}>
      <Panel header="Danh sách kênh" key="1">
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
        <Button type='primary' icon={<PlusOutlined />}>Thêm phòng</Button>
      </Panel>
    </Collapse>
  )
}

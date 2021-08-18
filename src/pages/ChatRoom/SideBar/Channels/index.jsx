import React, { useContext, useEffect, useMemo,useRef } from 'react'
import { Button, Collapse, Typography } from 'antd';
import './Channels.css';
import { PlusOutlined } from '@ant-design/icons';
import useFireStore from 'hooks/useFireStore';
import { AuthContext } from 'context/AuthProvider';
import ModalAddRooms from './ModalAddRooms';
const { Panel } = Collapse;
export default function Channels() {
  const {uid}  = useContext(AuthContext);
  const ModalRef = useRef();
  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
   } 
  },[uid])
  const rooms = useFireStore('rooms', roomsCondition);

  useEffect(() => {
    console.log('rooms Condition  =', roomsCondition);
    console.log('Rooms = ', rooms);
  }, []);
  return (
    <Collapse className = "channel__collapse" ghost defaultActiveKey={['1']}>
      <Panel header="Danh sách kênh" key="1">
        {!rooms || !rooms.length && <Typography.Paragraph>Chưa có phòng</Typography.Paragraph>}
        {rooms.length && rooms.map((room,index) => (<Typography.Link key = {index}># {room.name}</Typography.Link>))}
        {/* <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link> */}
        <Button type='primary'style = {{marginTop:'20px'}} onClick={() => {ModalRef.current.showModal() }} icon={<PlusOutlined />}>Thêm phòng</Button>

        <ModalAddRooms ref={ModalRef} uid={ uid}/>
      </Panel>
    </Collapse>
  )
}

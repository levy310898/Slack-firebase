import React from 'react';
import { Comment,Avatar,Tooltip } from 'antd';
import moment from 'moment';
export default function Message({text,displayName,createdAt=null,photoUrl=null}) {
  return (
    <div style = {{marginBottom:'10px'}}>
      <Comment
        author={displayName}
        avatar={
          photoUrl ?
            <Avatar
              src={photoUrl}
              alt={displayName}
            />
            : <Avatar>L</Avatar>
        }
        content={
          <p>
            {text}
          </p>
        }
        datetime={
          <span>{moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        }
      />
    </div>
      
  )
}

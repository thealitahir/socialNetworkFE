import React, { useState } from 'react';
import { Menu, Dropdown, Modal, Input } from 'antd';
import TimeAgo from 'timeago-react';

import { BsThreeDots } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import './style.css';

const URL = 'http://localhost:3000';

const CardHeader = ({ item, handleChange, handleUpdatePost, setData, handleDeltePost }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href={URL} onClick={() => setIsModalVisible(true)}>
          Update Post
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href={URL} onClick={() => handleDeltePost(item?._id)}>
          Delete post
        </a>
      </Menu.Item>
    </Menu>
  );
  const handleOk = () => {
    handleUpdatePost(item?._id);
    setData('');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="header-container">
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder={item?.content} onChange={(e) => handleChange('content', e.target.value)} />
      </Modal>
      <div className="right-container">
        <div>
          <img alt="" className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png" />
        </div>
        <div>
          <div className="header-user-name">
            {item?.user?.firstName} {item?.user?.lastName}
          </div>
          <div className="post-card-time">
            <TimeAgo datetime={item?.createdAt} locale="en" />
          </div>
        </div>
      </div>
      <div>
        <Dropdown overlay={menu} trigger={['click']}>
          <a href={URL} className="ant-dropdown-link">
            <BsThreeDots size={22} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default CardHeader;

import React, { useState } from 'react';
import { Menu, Dropdown, Modal, Input } from 'antd';

import { BsThreeDots } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import './style.css';

const CardHeader = ({ item, handleChange, handleUpdatePost, setData, data, isPostLoading, handleDeltePost }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => setIsModalVisible(true)}>Update Post</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => handleDeltePost(item?._id)} href="#">
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
          <div className="location-container">
            <FaMapMarkerAlt size={10} />
            <div className="location-heading">OH, USA</div>
          </div>
          <div className="post-card-time">1 mint ago</div>
        </div>
      </div>
      <div>
        <Dropdown overlay={menu} trigger={['click']}>
          <a href="http://localhost:3000" className="ant-dropdown-link" onClick={(e) => console.log('salman')}>
            <BsThreeDots size={22} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default CardHeader;

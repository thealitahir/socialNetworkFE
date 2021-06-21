import React, { useState } from 'react';

import { Row, Col, Image, Modal, Input } from 'antd';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';

import './style.css';

const AllComents = ({ item, handleUpdateComment, handleChange, handleDelteComment, postId, firstName, lastName, handleLikeComment, handleUnLikeComment }) => {
  const [likeComment, setLikeComment] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    handleUpdateComment(postId, item?._id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ width: '100%' }}>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder={item?.content} onChange={(e) => handleChange('content', e.target.value)} />
      </Modal>
      <Row align="middle">
        <Col md={2}>
          <Image className="comment-image" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        </Col>
        <Col md={20}>
          <div className="comment-body">
            <Row justify="space-between" align="middle">
              <Col>
                <div className="user-name">
                  {firstName} {lastName}
                </div>
              </Col>
            </Row>
            <div className="user-profession">Professional Student</div>
            <div className="user-comment">{item?.content}</div>
            <Row gutter={[10, 0]}>
              <Col>
                <div className="total-likes">{item?.like ? 1 : 0} Likes</div>
              </Col>
              <Col>
                <div>|</div>
              </Col>
              <Col>
                <Row style={{ cursor: 'pointer' }} onClick={() => setLikeComment(!likeComment)} gutter={[5, 0]}>
                  <Col>
                    {item?.like ? (
                      <div onClick={() => handleUnLikeComment(postId, item?._id)}>
                        <AiFillHeart size={14} />
                      </div>
                    ) : (
                      <div onClick={() => handleLikeComment(postId, item?._id)}>
                        <AiOutlineHeart />
                      </div>
                    )}
                  </Col>
                  <Col>
                    <div>Like</div>
                  </Col>
                </Row>
              </Col>
              <Col>|</Col>
              <Col>
                <Row
                  onClick={() => {
                    setIsModalVisible(true);
                  }}
                  style={{ cursor: 'pointer' }}
                  gutter={[5, 0]}
                >
                  <Col>
                    <GrEdit size={14} />
                  </Col>
                  <Col>
                    <div>Edit</div>
                  </Col>
                </Row>
              </Col>
              <Col>|</Col>
              <Col>
                <Row onClick={() => handleDelteComment(postId, item?._id)} style={{ cursor: 'pointer' }} align="middle" gutter={[5, 0]}>
                  <Col>
                    <MdDelete style={{ marginTop: '-4px' }} size={16} />
                  </Col>
                  <Col>
                    <div>Delete</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AllComents;

import React from 'react';

import { Row, Col, Image, Input } from 'antd';

import './style.css';

const { TextArea } = Input;

const UploadPost = ({ handleChange, handlePost, data }) => {
  return (
    <div className="post-card-container-main-header">
      <div className="post-card-container">
        <Row>
          <Col md={2}>
            <Image className="upload-user-image" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </Col>
          <Col md={22}>
            <TextArea
              value={data?.content}
              onChange={(e) => handleChange('content', e.target.value)}
              style={{ fontWeight: '500' }}
              bordered={false}
              placeholder="Whats is on your mind?"
              rows={4}
            />
          </Col>
        </Row>
      </div>
      <div className="post-card-container-bottom">
        <div>
          <div></div>
        </div>
        <div onClick={() => handlePost()} className="postit-container">
          <div style={{ color: 'white' }}>Post it</div>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;

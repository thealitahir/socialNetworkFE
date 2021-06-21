import React, { useState } from 'react';
import { Row, Col } from 'antd';

import { PostCard, UploadPost } from '../Components/index';

import './style.css';

const HomeScreen = ({
  postData,
  handleChange,
  handleUpdatePost,
  setData,
  handleAddComment,
  data,
  handleUpdateComment,
  handlePost,
  handleDelteComment,
  handleDeltePost,
  handleLikeComment,
  handleUnLikeComment,
  likePostFunc,
}) => {
  const [state, setState] = useState(false);
  console.log('item', postData?.data);
  return (
    <div>
      <Row>
        <Col md={24}>
          <Row justify="center">
            <UploadPost data={data} handleChange={handleChange} handlePost={handlePost} />
            {postData?.data?.map((item) => {
              return (
                <PostCard
                  key={item._id}
                  item={item}
                  data={data}
                  handleChange={handleChange}
                  handleUpdatePost={handleUpdatePost}
                  handleUpdateComment={handleUpdateComment}
                  handleDelteComment={handleDelteComment}
                  handleDeltePost={handleDeltePost}
                  handleLikeComment={handleLikeComment}
                  handleAddComment={handleAddComment}
                  handleUnLikeComment={handleUnLikeComment}
                  setData={setData}
                  setState={setState}
                  state={state}
                  likePostFunc={likePostFunc}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;

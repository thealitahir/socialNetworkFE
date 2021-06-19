import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { PostCard, UploadPost } from '../Components/index';

import './style.css';

const HomeScreen = ({
  postData,
  handleChange,
  handleUpdatePost,
  setData,
  isPostLoading,
  handleAddComment,
  handleGetComment,
  data,
  allComments,
  handleUpdateComment,
  handlePost,
  handleDelteComment,
  handleDeltePost,
  handleLikeComment,
  handleUnLikeComment,
  likePostFunc,
}) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Row>
        <Col md={24}>
          <Row justify="center">
            <UploadPost data={data} handleChange={handleChange} handlePost={handlePost} />
            {/* {isPostLoading ? <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'rgba(0,0,0,0.4)' }}></div> : null} */}

            {postData?.data?.map((item) => {
              return (
                <PostCard
                  isPostLoading={isPostLoading}
                  key={item._id}
                  item={item}
                  handleChange={handleChange}
                  handleUpdatePost={handleUpdatePost}
                  setData={setData}
                  data={data}
                  handleAddComment={handleAddComment}
                  handleGetComment={handleGetComment}
                  allComments={allComments}
                  setState={setState}
                  state={state}
                  handleUpdateComment={handleUpdateComment}
                  handleDelteComment={handleDelteComment}
                  handleDeltePost={handleDeltePost}
                  handleLikeComment={handleLikeComment}
                  handleUnLikeComment={handleUnLikeComment}
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

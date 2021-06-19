import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { Row, Col, Input, Image } from 'antd';
import './style.css';
import AllComents from '../AllComents';

const AddComment = ({
  handleChange,
  handleAddComment,
  handleGetComment,
  allComments,
  data,
  handleUpdateComment,
  handleDelteComment,
  handleLikeComment,
  handleUnLikeComment,
  item,
  likePostFunc,
}) => {
  const [showComment, setShowComment] = useState(false);
  const [addLike, setAddLike] = useState(false);
  const [id, setId] = useState(item?._id);
  const [value, setValue] = useState();

  console.log('likePostFunc', item?.like);
  return (
    <div className="add-comment-container-main">
      <Row gutter={8}>
        <Col>
          {item?.like ? (
            <Row onClick={() => likePostFunc(item?._id, false)} className="child-container">
              <Col>
                <AiFillHeart />
              </Col>
              <Col>
                <div className="child-text">Like</div>
              </Col>
            </Row>
          ) : (
            <Row onClick={() => likePostFunc(item?._id, true)} className="child-container">
              <Col>
                <AiOutlineHeart />
              </Col>
              <Col>
                <div className="child-text">Like</div>
              </Col>
            </Row>
          )}
        </Col>
        <Col>
          <Row
            onClick={() => {
              setValue(item?._id);
              setShowComment(!showComment);
              handleGetComment(item?._id);
            }}
            className="child-container"
          >
            <Col>
              <FaRegCommentDots />
            </Col>
            <Col>
              <div className="child-text">Comments</div>
            </Col>
          </Row>
        </Col>
      </Row>

      {showComment ? (
        <div className="add-comment-container">
          <Row align="middle">
            <Col md={2}>
              <Image className="add-user-image" height={40} width={40} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
            </Col>
            <Col md={18}>
              <Input
                onPressEnter={() => handleAddComment(item?._id)}
                onChange={(e) => handleChange('content', e.target.value)}
                className="add-comment-input"
                placeholder="Add Comment"
              />
            </Col>
          </Row>
          <div style={{ marginTop: '10px' }}>
            {item?.comments?.length === 0 ? (
              <div>No Comments</div>
            ) : (
              item?.comments?.map((items) => {
                return (
                  <div>
                    <AllComents
                      key={item?._id}
                      firstName={item?.user?.firstName}
                      lastName={item?.user?.lastName}
                      handleDelteComment={handleDelteComment}
                      postId={item?._id}
                      handleChange={handleChange}
                      handleUpdateComment={handleUpdateComment}
                      item={items}
                      handleLikeComment={handleLikeComment}
                      handleUnLikeComment={handleUnLikeComment}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default AddComment;

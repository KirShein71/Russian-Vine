import React from "react";

import CommentForm from "./CommentForm";

function Comment({comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId,}) {
    const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="comment">
      <div className="comment__image">
        <img src="./img/user-icon.png" alt="icon_user"/>
      </div>
      <div className="comment__right">
        <div className="comment__content">
          <div className="comment__author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment__text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Редактировать"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment__actions">
          {canReply && (
            <div
              className="comment__action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Ответить
            </div>
          )}
          {canEdit && (
            <div
              className="comment__action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Редактировать
            </div>
          )}
          {canDelete && (
            <div
              className="comment__action"
              onClick={() => deleteComment(comment.id)}
            >
              Удалить
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Оветить"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


export default Comment;

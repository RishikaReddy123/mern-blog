import React from "react";

const CommentsList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return (
      <h3 className="text-lg font-semibold text-gray-800">
        No comments available.
      </h3>
    );
  }

  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div key={`${comment.username}-${index}`} className="mb-4">
          <h4 className="text-lg font-semibold text-gray-800">
            {comment.username}
          </h4>
          <p className="text-gray-700">{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;

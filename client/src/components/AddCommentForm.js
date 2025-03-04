import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticlesInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComments = async (e) => {
    e.preventDefault();
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const body = await result.json();
    setArticlesInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <form className="shadow rounded px-8 pt-6 mb-4" onSubmit={addComments}>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Comment:
      </label>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows="4"
        cols="50"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add comment
      </button>
    </form>
  );
};

export default AddCommentForm;

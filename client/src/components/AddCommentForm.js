import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticlesInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComments = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/${articleName}/add-comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, text: commentText }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const body = await response.json();
      setArticlesInfo(body);
      setUsername("");
      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <form className="shadow rounded px-8 pt-6 mb-4" onSubmit={addComments}>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>

      <label
        htmlFor="username"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Name:
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />

      <label
        htmlFor="commentText"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Comment:
      </label>
      <textarea
        id="commentText"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows="4"
        cols="50"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      />

      <button
        type="submit"
        disabled={!username.trim() || !commentText.trim()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
      >
        Add comment
      </button>
    </form>
  );
};

export default AddCommentForm;

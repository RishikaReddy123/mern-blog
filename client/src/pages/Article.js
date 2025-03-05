import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./ArticleContent";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
  const [articlesInfo, setArticlesInfo] = useState({ comments: [] });
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://nodeblog-41ui.onrender.com/api/articles/${name}`
        );
        const body = await result.json();
        setArticlesInfo(body);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  if (!article) {
    return (
      <>
        <NotFound />
        <h2 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
          Other articles
        </h2>
        <div className="flex flex-wrap -m-4">
          <Articles articles={otherArticles} />
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articlesInfo?.comments || []} />

      <AddCommentForm articleName={name} setArticlesInfo={setArticlesInfo} />
      <h2 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other articles
      </h2>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;

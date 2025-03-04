import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./ArticleContent";
// import Articles from "../components/Articles";

const ArticleList = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Articles</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articleContent.map((article, index) => (
            <div key={index} className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt="blog"
                  />
                </Link>
              </div>
            </div>
          ))}
          {/* <Articles articles={articleContent} /> */}
        </div>
      </div>
    </>
  );
};

export default ArticleList;

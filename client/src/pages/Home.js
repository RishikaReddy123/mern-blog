import React from "react";

const Home = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        Welcome to My Blog!
      </h1>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Hello there! Thank you for visiting my blog. This is a place where I
        share my thoughts, experiences, and knowledge on a variety of topics
        that I'm passionate about, from technology and programming to personal
        development and lifestyle.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Whether you're here to read about the latest in web development, learn
        new coding techniques, or just explore interesting articles, you've come
        to the right place! My goal is to provide helpful and engaging content
        that not only educates but also inspires and motivates.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 my-4">
        What You'll Find Here
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Articles on web development, coding tutorials, and tech news</li>
        <li>Tips on personal growth, productivity, and mindfulness</li>
        <li>Interviews with experts and influencers in the industry</li>
        <li>Stories about my journey and experiences as a developer</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 my-4">
        Join the Conversation!
      </h2>
      <p className="mx-auto leading-relaxed text-base mb-6">
        I encourage you to leave your thoughts and comments on the articles.
        This blog is meant to be a platform for discussion and sharing of ideas,
        and I would love to hear from you!
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        So, grab a cup of coffee, explore the posts, and let's get started on
        this exciting journey of learning and growing together!
      </p>
    </div>
  );
};

export default Home;

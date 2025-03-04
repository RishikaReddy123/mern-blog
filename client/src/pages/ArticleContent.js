const articleContent = [
  {
    name: "React",
    title: "Learn React",
    thumbnail: "/images/reactjs.png",
    content: [
      "React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the application state using hooks. Some key features of React include JSX syntax, the Virtual DOM, and a component-based architecture. React's declarative nature allows developers to build dynamic UIs with ease, and its ecosystem provides a vast array of tools and libraries to enhance functionality. With its ability to render components efficiently, React has become one of the most popular frameworks for front-end development.",
    ],
  },
  {
    name: "MongoDB",
    title: "Learn MongoDB",
    thumbnail: "/images/mongo.png",
    content: [
      "MongoDB is a NoSQL database designed for scalability and flexibility. It stores data in JSON-like documents, making it a great choice for applications that require fast, flexible data storage. Some features include automatic scaling, flexible schema, and powerful querying capabilities. Unlike traditional relational databases, which store data in tables with rows and columns, MongoDB stores data as collections of JSON-like documents, making it more suitable for modern web applications that require scalability and flexibility. One of the key features of MongoDB is its ability to scale horizontally. This means that as the amount of data grows, MongoDB can distribute data across multiple servers, improving performance and storage capacity without significant changes to the application code. Additionally, MongoDB supports high availability through replication, where data is automatically duplicated across multiple servers to ensure it remains accessible even if one server goes down. MongoDB is also schema-less, meaning developers don’t need to define a fixed schema for the database. This is particularly useful for agile development environments where data requirements may change over time. The flexibility allows developers to store different types of data within the same collection, which is difficult to achieve in traditional relational databases. Overall, MongoDB's scalability, flexibility, and ease of use make it an excellent choice for building modern applications, particularly those that need to handle large amounts of unstructured or semi-structured data.",
    ],
  },
  {
    name: "Express",
    title: "Learn Express",
    thumbnail: "/images/expressjs.png",
    content: [
      "Express.js, commonly referred to as Express, is a fast and minimal web application framework built for Node.js. It simplifies the process of building server-side applications by providing a robust set of features, such as routing, middleware support, and templating engines. Express allows developers to quickly set up server-side applications and APIs with minimal configuration, making it a popular choice for building web applications and RESTful services. One of the primary features of Express is its routing system, which allows developers to define routes that handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and paths. This makes it easy to define API endpoints or handle requests for various parts of a web application. Express also provides middleware, which is code that runs before the route handlers. Middleware functions can perform tasks such as request validation, authentication, logging, or modifying the request/response objects. Additionally, Express is highly customizable, allowing developers to integrate it with various third-party libraries, databases, and tools. It can be easily combined with other technologies like MongoDB, JWT for authentication, or even template engines like EJS to render dynamic HTML pages. Express's lightweight nature and wide community support make it an essential tool for any Node.js developer.",
    ],
  },
  {
    name: "Node",
    title: "Learn Node",
    thumbnail: "/images/node.png",
    content: [
      "Node.js is a runtime environment built on Google Chrome's V8 JavaScript engine, which enables you to run JavaScript code server-side. It allows developers to build scalable and fast network applications. One of the standout features of Node.js is its event-driven, non-blocking I/O model, which makes it lightweight and highly efficient for handling numerous concurrent requests. This makes it perfect for real-time applications like chat apps, live data feeds, and collaborative tools. Node.js also provides a rich ecosystem through npm, the largest collection of open-source libraries and modules. With its event-loop architecture and non-blocking nature, Node.js is well-suited for building fast and scalable applications that handle high traffic.",
    ],
  },
];

export default articleContent;

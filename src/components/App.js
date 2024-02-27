import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const data = blogData.map((post) => {
    console.log(post);
    return (
      <ArticleList key={post.id} post={post} />
    );
  });

  return (
    <div className="App">
      <Header name={"Overreacted"} />
      <About image={"https://via.placeholder.com/215"} />
      {data}
    </div>
  );
}

export default App;
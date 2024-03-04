import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App(){
  // You can pass the necessary props to these components
  const blogName = "Overreacted";
  const blogImage = "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vMWYyOGM3MzUtNWZjNC00NGFmLWFhMTQtY2FkYmU3ZGYxNzM2LmpwZWc.webp";
  const aboutText = "Personal Blog by Shan Siddiqui.";
  const articles = [
    {
      id: 1,
      title: "First Article",
      date: "2022-01-01",
      preview: "Good news everyone! With placeholder text from shows like Futurama, Doctor Who, Dexter, and Monty Python, Fillerama is the perfect Lorem Ipsum for the TV lover in all of us."
    },
    // Add more articles here
    {
      id: 2,
      title: "Story of a Girl",
      date: "2006-10-05",
      preview: "Lorem ipsum dolor sit  This is the story of a girl. Who cried a river and drowned the whole world. And while she looks so sad in photographs. I absolutely love she Smiles!!!",
    },
  ];

  return (
    <div>
      <Header name={blogName} />
      <About image={blogImage} about={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
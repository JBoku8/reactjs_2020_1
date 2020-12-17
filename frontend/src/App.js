import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  console.log(posts);
  // useEffect(() => {
  //   axios
  //     .get("/posts")
  //     .then((result) => {
  //       if (result.data) {
  //         setPosts(result.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    dispatch({
      type: "GET_POSTS_REQUESTED",
    });
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.title}>
              <h1>{post.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            </div>
          );
        })}
    </div>
  );
}

export default App;

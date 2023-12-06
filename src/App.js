import React, { useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
      {id:1, title: 'Javascript', body: 'Description'},
      {id:2, title: 'Javascript 2', body: 'Description'},
      {id:3, title: 'Javascript 3', body: 'Description'},
      {id:4, title: 'Javascript 4', body: 'Description'},
      {id:5, title: 'Javascript 5', body: 'Description'},
  ])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
        ? 
        <PostList  posts={posts} title="Список постов" remove={removePost}/>
        : 
        <h1 style={{textAlign:'center', }}>
          Посты не найдены!
        </h1>
      }

    </div>
  );
}

export default App;

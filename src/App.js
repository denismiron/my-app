import React, { useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
      {id:1, title: 'Govno', body: '1Description'},
      {id:2, title: 'Zopa', body: '2Description'},
      {id:3, title: 'Zalupa', body: '3Description'},
      {id:4, title: '2Pidoras', body: '4Description'},
      {id:5, title: 'Ebanutsya', body: '5Description'},
  ])

  const [filter, setFilter] = useState({sort:'',query:''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(()=>{
      console.log('Фунция сорт отработала')
      if(filter.sort)  {
          return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
  },[filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:'25px'}} onClick={() => setModal(true)}>
          Создать
      </MyButton>
      <MyModal 
        visible={modal}
        setVisible={setModal}
      >
          <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
          filter={filter} 
          setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
        ? 
        <PostList  posts={sortedAndSearchedPosts} title="Список постов" remove={removePost}/>
        : 
        <h1 style={{textAlign:'center', }}>
          Посты не найдены!
        </h1>
      }

    </div>
  );
}

export default App;

import React, {useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description 1'},
        {id: 2, title: 'JavaScript 2', body: 'Description 2'},
        {id: 3, title: 'JavaScript 3', body: 'Description 3'},
        {id: 4, title: 'JavaScript 4', body: 'Description 4'},
        {id: 5, title: 'JavaScript 5', body: 'Description 5'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a , b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}} />
            <div>
                <MyInput
                    style={{width: '175px'}}
                    placeholder="Поиск ..."
                />
                <br/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue={"Сортировка по"}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title={'Список 1'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не были найдены</h1>
            }
        </div>
    );
}

export default App
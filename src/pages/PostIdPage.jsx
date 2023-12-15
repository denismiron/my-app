import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Spinner from '../components/UI/spinner/spinner';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const responce = await PostService.getById(id)
        setPost(responce.data)
    })
    
    const [fetchComments, isCommentsLoading, comError] = useFetching(async (id) => {
          const responce = await PostService.getCommentsByPostId(id);
          setComments(responce.data);
        });


    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h1>Страница поста с ID = {params.id}</h1>
            {isLoading
                ? <Spinner/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isCommentsLoading
                ? <Spinner/>
                : <div>
                    {comments.map(comm =>
                        <div style = {{marginTop: 20}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>    
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
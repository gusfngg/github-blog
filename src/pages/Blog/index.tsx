import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { BlogProfile } from "./components/BlogProfile";
import { ResumePost } from "./components/ResumePost";
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'

import { BlogContainer, SearchContainer, Posts } from './styles'
import { useEffect, useState } from "react";

export interface IPost {
   title: string;
   body: string;
   created_at: string;
   number: string;
}

export function Blog() {
   const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
   const [postCounter, setPostsCounter] = useState(0);

   const navigate = useNavigate();

   async function fetchPosts(query = '') {
      const response = await api.get(
         `search/issues?q=${
            query ? query : ""
         }%20repo:${"gusfngg"}/github-blog`
      )

      console.log(response.data)
      setPosts(response.data.items)
      setPostsCounter(response.data.total_count)
   }

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const query = formData.get('query') as string;
      fetchPosts(query);
   };

   function handlePostDetail(postNumber: string) {
      navigate(`/post/${postNumber}`)
   }

   useEffect(() => {
      fetchPosts()
   }, [])

   return (
      <div>
         <Header/>
         <BlogContainer>
            <BlogProfile/>

            <SearchContainer onSubmit={handleSubmit}>
               <header>
                  <h3>Publicações</h3>

                  <span>{`${postCounter} publicações`}</span>
               </header>

               <input 
                  type="text"
                  name="query"
                  placeholder="Buscar conteúdo"
                  onBlur={(e) => fetchPosts(e.target.value)}
               />
            </SearchContainer>

            <Posts>
               {posts && 
                  posts.map(post => (
                     <ResumePost
                        key={post.number}
                        post={post}
                        onClick={() => handlePostDetail(post.number)}
                     />
                  ))
               }
            </Posts>
         </BlogContainer>
      </div>
   )
}
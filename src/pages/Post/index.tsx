import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { InfoInssue } from "./InfoInssue";
import { Content } from './styles'
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale";
import Markdown from 'react-markdown'

interface IPostDetail {
   title: string;
   comments: number;
   createdAt: string;
   githubUsername: string;
   url: string;
   body: string;
}

export interface infoInssueProps {
   title: string;
   githubUsername: string;
   createdAt: string;
   comments: number;
   url: string;
}


export function Post() {
   const [posts, setPosts] = useState<IPostDetail>({} as IPostDetail)
   const [infoInssue, setInfoInssue] = useState<infoInssueProps>({} as infoInssueProps)
   const { id } = useParams();

   async function fetchPost() {
      const response = await api.get(
         `repos/gusfngg/github-blog/issues/${id}`
      )

      const { title, comments, created_at, user, html_url, body } = response.data;

      const date = formatDistanceToNow(new Date(created_at), {
         locale: ptBR,
         addSuffix: true,
       })

      const newPost ={
         title,
         githubUsername: user.login,
         comments,
         createdAt: date,
         url: html_url,
         body,
      }

      const newIssueInfo = {
         title,
         githubUsername: user.login,
         createdAt: date,
         comments,
         url: html_url,
      }

      setPosts(newPost);
      setInfoInssue(newIssueInfo);
   }

   useEffect(() => {
      fetchPost();
    }, []);
   

   return (
      <div>
         <Header/>

         <InfoInssue
            info={infoInssue}
         />

         <Content>
            <div>
               <Markdown>{posts.body}</Markdown>
            </div>
         </Content>
      </div>
   )
}
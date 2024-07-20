import { useEffect, useState } from 'react'
import { UserCircle, Share, Building, User } from '@phosphor-icons/react'
import { BlogProfileContainer, ProfileInfo, SocialLinks, Header } from './style'
import { Button } from '../../../../components/Button'
import { Info } from '../../../../components/Info'
import { api } from '../../../../lib/axios'

interface IUserInfo {
   name: string;
   followers: number;
   githubUserName: string;
   company: string | null;
   url: string;
   imgUrl: string;
   description: string;
}

export function BlogProfile() {
   const [userInfo, setUserInfo] = useState<IUserInfo>()

   async function fetchUsers() {
      const response = await api.get('users/gusfngg')
      const { name, followers, html_url, avatar_url, bio, company, login } = response.data;

      const user = {
         name,
         followers,
         githubUserName: login,
         company,
         url: html_url,
         imgUrl: avatar_url,
         description: bio
      }

      setUserInfo(user)
   }

   useEffect(() => {
      fetchUsers();
   }, []) 

   return (
      <BlogProfileContainer>
         <img src={userInfo?.imgUrl} alt="" />

         <ProfileInfo>
            <Header>
               <h1>{userInfo?.name}</h1>
               <Button
                  title='Github'
                  href={userInfo?.url}
                  icon={<Share/>}
               />
            </Header>

            <p>{userInfo?.description}</p>

            <SocialLinks>
               <Info
                     title={userInfo?.githubUserName ?? 'Sem username'}
                     icon={<UserCircle/>} 
               />
               
               <Info
                     title={userInfo?.company ? `${userInfo?.company}` : 'Sem empresa'}
                     icon={<Building/>}
               />
               
               <Info
                  title={`${userInfo?.followers} seguidores`}
                  icon={<User/>}
               />
            
            </SocialLinks>
         </ProfileInfo>
      </BlogProfileContainer>
   )
}
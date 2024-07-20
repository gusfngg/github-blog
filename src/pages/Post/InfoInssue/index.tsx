import { Calendar, ChatCircle, Share, UserCircle } from "@phosphor-icons/react";
import { InfoInssueContainer, SocialInfo } from './styles'
import { Button } from "../../../components/Button";
import { Info } from "../../../components/Info";
import { useNavigate } from "react-router-dom";
import { infoInssueProps } from "..";

interface InfoProps {
   info: infoInssueProps
}

export function InfoInssue({ info }: InfoProps) {
   const navigate  = useNavigate();

   const { title, githubUsername, createdAt, comments, url } = info;

   return (
      <InfoInssueContainer>
         <header>
            <Button
                  title='Voltar'
                  onClick={() => navigate(-1)}
               />

            <Button
               title='Ver no github'
               icon={<Share/>}
               href={url}
            />
         </header>

         <h1>{title}</h1>

         <SocialInfo>
            <Info
               title={githubUsername}
               icon={<UserCircle/>}
            />
            
            <Info
               title={createdAt}
               icon={<Calendar />}
            />

            <Info
               title={`${comments} comentários`}
               icon={<ChatCircle />}
            />
         </SocialInfo>
      </InfoInssueContainer>
   )
}
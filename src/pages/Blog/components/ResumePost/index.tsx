import { ResumePostContainer } from './styles';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale/pt-BR';
import { IPost } from '../../'

interface ResumePostProps {
   post: IPost; 
   onClick: () => void;
}

export function ResumePost({ post, ...rest }: ResumePostProps) {
   const { title, created_at, body } = post;

   const date = formatDistanceToNow(new Date(created_at), {
      addSuffix: true,
      locale: ptBR
   })

   return (
      <ResumePostContainer {...rest}>
         <header>
            <h1>{title}</h1>

            <span>{date}</span>
         </header>

         <p>{body}</p>
      </ResumePostContainer>
   )
}
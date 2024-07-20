import { InfoContainer } from './styles';

interface InfoProps { 
   title: string | number;
   icon?:  JSX.Element
}

export function Info({ title, icon: Icon }: InfoProps) {
   return (
      <InfoContainer>
         {Icon}
         {title}
      </InfoContainer>
   )
}
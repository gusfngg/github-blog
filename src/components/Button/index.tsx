import { ButtonContainer } from './styles';


interface ButtonProps { 
   href?: string;
   title: string;
   icon?:  JSX.Element
   onClick?: () => void
}

export function Button({ href, title, icon: Icon, ...rest }: ButtonProps) {
   return (
      <ButtonContainer {...rest}>
         <a href={href}>
            {title}
            {Icon}
         </a>
      </ButtonContainer>
   )
}
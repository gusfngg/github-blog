import { HeaderContainer } from './styles';
import CoverBackground from '../../assets/Cover.svg'

export function Header() {
   return (
      <HeaderContainer>
         <img src={CoverBackground} alt="" />
      </HeaderContainer>
   )
}
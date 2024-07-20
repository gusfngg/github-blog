import styled from "styled-components";

export const BlogProfileContainer = styled.header`
   display: flex;
   align-items: self-end;
   gap: 2rem;

   position: relative;
   z-index: 8;

   padding: 2rem;
   padding-right: 2.5rem;

   background-color: ${props => props.theme.profile}; 
   border-radius: 10px;

   img {
      width: 148px;
      height: 148px;
      object-fit: cover;
      border-radius: 8px;
   }
`;

export const ProfileInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   p {
      line-height: 160%;
   }
`
export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

      h1 {
         font-size: 1.5rem;
         font-weight: bold;
         color: ${props => props.theme.title};
         line-height: 130%;
      }
`;

export const SocialLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;

   margin-top: 1rem;
`;
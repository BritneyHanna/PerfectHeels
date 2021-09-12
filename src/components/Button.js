import styled from 'styled-components';
// Styled button Component 
export const ButtonContainer=styled.button` text-transform:capitalize; font-size:1.4rem; border-radius:12%; 
background:transparent ;border:0.05rem dashed  var(--mainBrown); 
color var(--cartBrown);padding:0.2rem 0.5rem;margin:0.2rem;cursor:default;
 transition 0.5s ease-in-out;&:hover{background:var(--cartBrown); color:var(--mainCream)}`;

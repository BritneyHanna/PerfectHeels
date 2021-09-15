import styled from 'styled-components';
// Styled button Component 
export const ButtonContainer=styled.button` text-transform:capitalize; font-size:1.4rem; border-radius:12%; letter-spacing:.25rem;
background:transparent ;border:0.05rem dashed  var(--mainBrown); 
color var(--cartBrown);padding:0.2rem 0.5rem;margin:0.4rem;cursor:default;
 transition 0.5s ease-in-out;&:hover{background:var(--cartBrown); color:var(--mainCream)}`;


 export const HomeButtonContainer=styled.button` text-transform:capitalize; font-size:2.0rem; border-radius:20%; 
background:rgb(247, 238, 238,.5) ;border:.15rem solid  var(--mainCream); font-weight:700;
color var(--mainDark);letter-spacing: 0.2em;padding:0.3rem 0.5rem;margin:0.2rem;cursor:default;position: absolute; top: 50%;left: 50%;  transform: translateX(-50%) translateY(-50%);
 transition 0.5s ease-in-out;&:hover{background:var(--cartBrown); color:var(--mainCream)}`;

import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  width: 100%;
  display:flex;
  flex-direction:row;
`;

export const Content = styled.div`
  height:100vh;
  
  padding:20px;
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  h1{
    margin-bottom:50px;
    font-weight:bold;

  }
`; 

export const Image = styled.img`
 height:100%;
 opacity:1;
 width:50%;
`


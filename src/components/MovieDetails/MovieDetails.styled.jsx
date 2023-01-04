import { Link } from 'react-router-dom';
import styled from "@emotion/styled";
export const GoBackLink = styled(Link)`
  font-family: Teko;
  font-weight: 0;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(90deg, #818589 0%, #28a718 100%);
  padding: 10px 47px;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 22px 50px;
  transition: 327ms;
  transform: translateY(0);
  width: 55px;
  &:hover,
  &:focus {
    transition: 327ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background: linear-gradient(90deg, #818589 0%, #cfe70b 100%);
    color: #ffffff;
    border: none;
  }
`;

export const Container = styled.div`
margin-top:50px;
display:flex;
`
export const Description = styled.div`
margin-left:50px;
`
export const Details = styled.div`
padding:15px;
`
export const InfoLink = styled(Link)`
text-decoration:none;
`
export const InfoContainer = styled.div`
margin-top:40px;
`
export const InfoUl = styled.ul`
padding:15px;
`
export const InfoLi = styled.li`
margin-bottom:15px;
`
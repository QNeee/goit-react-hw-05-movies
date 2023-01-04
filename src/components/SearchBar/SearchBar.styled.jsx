import styled from "@emotion/styled";
export const Form = styled.form`  display: flex;
  align-items: center;
  width: 100%;
  margin-top:15px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;`;
export const Button = styled.button`   display: inline-block;
  width: 100px;
  height: 100%;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color:blue;
  color:white;
  margin-left:15px;
`;
export const Input = styled.input`display: inline-block;
  width: 50%;
  font: inherit;
  font-size: 20px;
  border: none;
 outline: 1px solid black;
  padding-left: 4px;
  padding-right: 4px;
 background-color:yellow;
 color:black;
  `;
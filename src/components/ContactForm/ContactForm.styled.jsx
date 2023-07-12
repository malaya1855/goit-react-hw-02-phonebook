import styled from '@emotion/styled'
export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
align-items: start;
`
export const Input = styled.input`
margin-left: 10px;
`
export const ButtonForm = styled.button`

display: inline-block;
outline: 0;
border: 0;
cursor: pointer;
font-weight: 600;
color: rgb(72, 76, 122);
font-size: 14px;
height: 38px;
padding: 8px 24px;
border-radius: 50px;
background-image: linear-gradient(180deg,#fff,#f5f5fa);
box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%);
transition: all .2s ease-out;
:hover{
    box-shadow: 0 8px 22px 0 rgb(37 44 97 / 15%), 0 4px 6px 0 rgb(93 100 148 / 20%);
}
`
import styled from 'styled-components';
import illustration from '../../assets/Illustration.svg';
import BlocoServices from '../../assets/bloco_services.svg';
import BlocoFinal from '../../assets/bloco_final_image.svg';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    height:100vh;
    display: flex;
    background-image: url(${illustration});
    background-repeat: no-repeat;
    background-position: top right;
    justify-content: space-between;
    padding-left: 15px;
    font-family: 'Mukta', sans-serif;
    transition: ease 0.3s;
    h1{
        color: #badc58;
        font-size: 25px;
        margin-top: 28px;
        padding-right: 5px;
    }
    
    p{
        padding:  25px;
        color: #1d164d;
    }
    @media(max-width: 1200px) {
        color: #badc58;
        a{
            color: #fff;
        }
    }
    }
    @media(max-width: 1200px) {
        background: #fff;
      }
`;

export const Header = styled.div`
    display: flex;
    row-direction: row;
    margin-right: 8px;   
    transition: ease 0.3s;
    a{
        color: #badc58;
        text-decoration: none;
    }
    a:hover{
        color: #fff;
    }
    a.menu{
        margin-right: 8px;
        font-size: 15pt;
        margin-top: 35px;
        background: none;
        text-decoration: none;
        color: #fff;
        font-family: 'Mukta', sans-serif;
        border-radius: 8px;
        transition: ease 0.7s;
        height: 25px;
    }

    @media(max-width: 1200px) {
        a{
            color: #fff;
        }
       a.menu{
        color: #badc58;
       }
    }
`;

export const ResgisterButton = styled.button`
    height: 35px;
    margin-top: 32px;
    margin-left: 10px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    font-weight: 300;
    font-family: 'Mukta', sans-serif;
    transition: ease 0.7s;
    :hover{
        background: #b5d164;
        color: #fff;
    }
    @media(max-width: 1200px) {
        background: #badc58;
        color: #fff;
    }
`;

export const Search = styled.div`    
    position:absolute;    
    margin-left: 10%;
    transition: ease 0.3s;
    h1{
        margin-top: 280px;
        width: 280px;
        color: #1d164d;
        font-weight: bold;
        font-size: 38pt;
    }
    button{
        height: 42px;
        margin-top: 18px;
        margin-left: 10px;
        background-color: #badc58;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        padding: 3px 10px;
        color: #fff;
        font-weight: 300;
        font-family: 'Mukta', sans-serif;
        transition: ease 0.7s;
    }
    button:hover{
        background: #89a140;
    }
    input{
        height: 28px;
        width: 240px;
        border: 2px solid #505057;
        border-radius: 5px;
        padding: 5px;
    }
`;

export const Options = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    height: 100%;  
    background: #fafafc;
    transition: ease 0.3s;
    p{
        font-family: 'Mukta', sans-serif;
        padding: 25px 0 25px;
        margin-left: 25%;
        color: #1d164d;
    }
    h1{
        font-family: 'Mukta', sans-serif;
        padding: 25px 0 0;
        margin-left: 45%;
        color: #1d164d;
    }
    @media(max-width: 1200px){
        p{
            margin-left: 10%;
        }
        h1{
            margin-left: 10%;
        }
    }
    @media(max-width: 900px){
        p{
            margin-left: 5%;
        }
        h1{
            margin-left: 5%;
        }
    }
`;

export const OptionDishe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    align-content: stretch;
    width: 100%;
    transition: ease 0.3s;
`;

export const TextInfo = styled.div`
    margin-top: -320px;

    @media(max-width: 1100px){
        margin-top: -100px;
    }
`;

export const Info = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    font-family: 'Mukta', sans-serif;
    padding-top: 28%;
    height: 40vh;
    background-image: url(${BlocoServices});
    background-repeat: no-repeat;
    transition: ease 0.3s;
    h1{
        margin-left: 50%;
 
        color: #1d164d;
    }
    p{
        margin-left: 50%;
        width: 35%
        color: #1d164d;
    }
    button{
        height: 42px;
        margin-top: 18px;
        margin-left: 50%;
        background-color: #badc58;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        margin-bottom: 15px;
        color: #fff;
        font-weight: 300;
        font-family: 'Mukta', sans-serif;
        transition: ease 0.7s;

    }
    button:hover{
        background: #89a140;
    }
    @media(max-width: 1043px){
        background: #fff;
        h1{
            margin-left: 10%;
        }
        p{
            margin-left: 10%;
        }
        button{
            margin-left: 10%;
        }
    }
    @media(max-width: 900px){
        background: #fff;
        h1{
            margin-left: 5%;
        }
        p{
            margin-left: 5%;
        }
        button{
            margin-left: 5%;
        }
    }
`;

export const ContainerBlog = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    height: 100%;  
    background: #fafafc;
    transition: ease 0.3s;
    p{
        font-family: 'Mukta', sans-serif;
        padding: 25px 0 25px;
        margin-bottom: -150px;
        margin-left: 25%;
        color: #1d164d;
    }
    h1{
        padding-top: 15px;
        font-family: 'Mukta', sans-serif;
        padding: 25px 0 0;
        margin-left: 45%;
        color: #1d164d;
    }
    @media(max-width: 1043px){
        background: #fff;
        h1{
            margin-left: 10%;
        }
        p{
            margin-left: 10%;
        }
    }
    @media(max-width: 900px){
        background: #fff;
        h1{
            margin-left: 5%;
        }
        p{
            margin-left: 5%;
        }
        
    }
`;

export const BlogRead = styled.div`
    display: flex;
    transition: ease 0.3s;
    row-direction: row;
    overflow-x: hidden; 
    .Right{
        position: absolute;
        margin-left: 95%;
        margin-top: 25%;
        padding: 10px;
        background: #badc58;
        border: none;
        border-radius: 50%;
        color: #fff;
    }
    @media(max-width: 700px){
        background: #fff;
        h1{
            margin-left: 5%;
        }
        p{
            margin-left: 5%;
        }
        .Right{
            margin-left: 80%;
        }
    }
`;

export const Contact = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');    
    background-image: url(${BlocoFinal}); 
    background-repeat: no-repeat;
    background-position: top right;
    height: 100vh;
    font-family: 'Mukta', sans-serif;
    transition: ease 0.3s;
    h1{
        position:absolute;
        margin-top: 15%;
        left: 15%;
        width: 280px;
        color: #1d164d;
        font-weight: bold;
        font-size: 38pt;
    }
    button{
        height: 42px;
        width: 80px;
        background-color: #badc58;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        padding: 3px 10px;
        color: #fff;
        font-weight: 300;
        font-family: 'Mukta', sans-serif;
        transition: ease 0.7s;
        position:absolute;
        margin-top: 580px;
        left: 490px;
    }
    button:hover{
        background: #89a140;
    }
    input{
        position:absolute;
        margin-top: 580px;
        left: 15%;
        height: 28px;
        width: 240px;
        border: 2px solid #505057;
        border-radius: 5px;
        padding: 5px;
    }
    @media(max-width: 1200px){
        background: #fff;
    }

    @media(max-width: 650px){
        button{
            margin-top: 580px;
            left: 350px; 
        }
    }
`;

export const Footer = styled.footer`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap'); 
    font-family: 'Mukta', sans-serif;   
    color: #000;
    height: 60px;
    display: flex;
    justify-content: space-between;
    h2{
        font-size: 14px;
        padding: 5px;
        font-weight: 100;
    }
`;

export const Links = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap'); 
    font-family: 'Mukta', sans-serif;   
    font-weight: 100;  
    a{
        text-decoration: none;
        color: #cdcdcd;
        padding: 5px;
    }
`;
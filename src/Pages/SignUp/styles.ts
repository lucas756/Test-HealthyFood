import styled from 'styled-components';
import BlocoServices from '../../assets/bloco_services.svg';

export const Container = styled.div`
    background-image: url(${BlocoServices});
    background-repeat: no-repeat;
    height: 97vh;
    position: absolute;
    top: 0;
    left: 0;
    @media(max-width: 1069px){
        background: #fff;
    }
`;

export const Inputs = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    width: 21%;
    margin-left: 50%;
    font-family: 'Mukta', sans-serif;
    margin-top: 7%;
    input{
        width: 270px; 
        padding: 18px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 2px solid #cdcdcd;
    }

    input.bairro{
        width: 210px; 
        padding: 18px;
        margin-bottom: 15px;
    }
    button{
        width: 55px; 
        padding: 18px;
        margin-left: 5px;
        color: #fff;
        background: #badc58;
        border: 2px solid #badc58;
        border-radius: 5px;
    }
    @media(max-width: 500px) {
        margin-left: 0px;
    }

    @media(max-width: 700px) {
        margin-left: 25px;
    }
    
    @media(max-width: 1069px) {
        margin-left: 200px;
    }
    a{
        text-decoration: none;
        color: #000;
        font-family: 'Mukta', sans-serif;
        font-weight: 100;
    }
`;


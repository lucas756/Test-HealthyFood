import styled from 'styled-components';


export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    font-family: 'Mukta', sans-serif;
    display:flex;
    row-direction: row;
    margin-bottom: 25px;
    
`;
export const Info = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    font-family: 'Mukta', sans-serif;
    background: #fff;
    width: 250px;
    border-radius: 0px 10px 10px 0px;
    h3{
        font-family: 'Mukta', sans-serif !important;
        width: 60%;
        margin-left: 23%;
        margin-top: 15%;
        color: #1d164d;
    }
    button{
        background: #badc58;
        border: none;
        border-radius: 8px;
        padding: 15px;    
        color: #fff;
        margin-left: 20%;
        margin-top: 15%;
    }
    @media(max-width: 500px){
        display: none;
        
    }
`;

export const Main = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;500&display=swap');
    font-family: 'Mukta', sans-serif;
    margin-top: 25px;
    margin-left: 10%;
    margim=n-bottom: 50px;
    padding: 5px;
    @media(max-width: 700px) {
            margin-left: 5px;
      }
`;
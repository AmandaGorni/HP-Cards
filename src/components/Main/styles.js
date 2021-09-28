import styled from "styled-components";
import chamas from '../../images/fundoverde.jpg'
import papel from '../../images/papel.jpg'

export const BoxCard = styled.div`
    border:30px solid;
    border-image:url(${papel}) 33%;
    width:300px;
    background-image: url(${chamas});
    margin: 15px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    

    img {
        width:190px;
        height:250px;
    }
    
    h3 {
        text-align:center;
        background-image: url(${papel});
        width:80%;
        margin-top:10px;
        margin-bottom:10px;
        border-radius: 4px 4px 4px 4px;
        
    }
`;


export const Container = styled.section`
    max-width:1300px;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
`
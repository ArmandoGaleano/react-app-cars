import styled from 'styled-components';

const setStyleTr = (type) => {
    if(type === 'dark'){
        return `
        background: linear-gradient(to right, #ff6a00, #e8cc03);
        `;
    }
    else if(type === 'light'){
        return `
        background: linear-gradient(to right, #6200ff ,#05ca93);
        `;
    }
}
const setStyleTd = (border) => {
    if(border){
        return `
            border-right: 2px solid #414644;
        `;
    }
}
const TableStyled = styled.table`
    border-spacing: 0;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
`;
const TrHead = styled.tr`
background: white;
`;
const TrBody = styled.tr`
    ${(props) => setStyleTr(props.type)}

`;
const Td = styled.td`
text-align: center;
padding: 15px 50px;
font-size: 25px;
font-weight: bold;
color: white;
    ${(props) => setStyleTd(props.border)}

`;


export { TableStyled , TrHead, TrBody, Td };
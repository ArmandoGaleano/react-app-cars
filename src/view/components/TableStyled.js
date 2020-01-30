import styled from 'styled-components';

const setStyleTr = (type) => {
    if (type === 'dark') {
        return `
        background: linear-gradient(to right, #ff6a00, #e8cc03);
        `;
    }
    else if (type === 'light') {
        return `
        background: linear-gradient(to right, #6200ff ,#05ca93);
        `;
    }
}
const setStyleTd = (border) => {
    if (border) {
        return `
            border-right: 2px solid #414644;
        `;
    }
}
const TableStyled = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    width: 70%;
`;
const Head = styled.div`
display: flex;
background: white;
`;
const TrBody = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
    ${(props) => setStyleTr(props.type)}

`;
const Container = styled.div`
    display: flex;
    align-items-center;
    justify-content: center;
    width: 25%;
`;
const Td = styled.div`
text-align: center;
font-size: 25px;
font-weight: bold;
color: white;
padding: 20px 0px;
width: 100%;
${(props) => setStyleTd(props.border)}

`;
const Th = styled.div`
text-align: center;
width: 25%;
`


export { TableStyled, Head, TrBody, Td, Container, Th };
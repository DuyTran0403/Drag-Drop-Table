import styled from 'styled-components';

export const DivWrapper = styled.div`
    width: 100%;
    height: auto;
    display: inline-block;
`;

export const WrapItem = styled.div`
    margin: 20px;
    text-align: center;
`;

export const PError = styled.p`
    color: red;
`;

export const Title = styled.p`
    color: #000;
    font-size: 30px;
    text-align: center;
`;

export const DivResult = styled.div`
    width: auto;
    max-height: 600px;
    overflow: auto;
    margin: auto;
    display: grid;
`;


export const DivRow = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    text-align: center;
`;

export const DivCell = styled.div`
    border: 1px solid;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    justify-items: center;
    text-align: center;
    vertical-align: middle;
`;
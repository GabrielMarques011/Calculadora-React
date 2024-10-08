import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Content = styled.div`

    background-color: #282a2f;
    width: 80%;
    min-height: 350px;
    border-radius: 13px;
    box-shadow: rgb(0 0 0 / 81%) 0px 5px 15px;;

`

export const Row = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Column = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
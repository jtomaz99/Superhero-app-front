import styled from "styled-components"

export const SuperHeroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CardHero = styled.section`
    width: 300px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 5%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
`;

export const DivName = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ebff44;
    color: black;
    margin-top: inherit;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.9;
`;

export const HeroInfo = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    opacity: 0.8;
    color: black;
    margin: 30px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 14px;
`;
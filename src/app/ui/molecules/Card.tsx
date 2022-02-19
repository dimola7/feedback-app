import {ReactNode} from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode,
    reverse: boolean
}

const Card = ({children, reverse}:Props) => {
  return (
    <CardDiv style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "#000"
    }}>
        {children}
    </CardDiv>
  )
}

Card.defaultProps = {
    reverse: false
}

export default Card;

export const CardDiv = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
  position: relative;
`;

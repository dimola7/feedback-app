import styled from "styled-components";

interface Props {
    text: string,
    bgColor: string,
    textColor: string
}

const Header = ({text, bgColor, textColor}:Props) => {
  return (
    <HeaderDiv style={{backgroundColor: bgColor, color: textColor }}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </HeaderDiv>

  )
}

const HeaderDiv = styled.header`
    

`

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}

export default Header
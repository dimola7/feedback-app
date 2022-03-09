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

Header.defaultProps = {
    text: "Feedback App",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#fff"
}

export default Header


const HeaderDiv = styled.header`
        
`
import { Link } from "react-router-dom";
import Card from "../ui/molecules/Card";

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem omnis esse reprehenderit quod magni aut, ex velit, voluptatum perferendis recusandae expedita repellendus?</p>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    </Card>
  )
}

export default About
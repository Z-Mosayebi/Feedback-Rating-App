import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>This is Zahra Project for feedback rating</h1>
        <p>This is a React app to leave feedback for a product or services and I can use it in many projects</p>
      <p>Version : 1.0.0</p>
      <Link to="/"> back to Home page</Link>
      </div>
    </Card>
  )
}

export default AboutPage

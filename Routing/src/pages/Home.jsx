import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        Go to <Link to="/products">products</Link> page.
      </p>
    </>
  );
}

export default Homepage;

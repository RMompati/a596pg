import './App.css';
import { Link, Outlet} from "react-router-dom";

function Home() {
  return (
      <div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
        <h1>My Website</h1>
      </div>
  );
}

export function Contact() {
  return (
      <div>
        <h1>Contact Us</h1>
      </div>
  );
}

export function About() {
  return (
      <div>
        <h1>About Us</h1>
        <Outlet />
      </div>
  );
}

export function History() {
  return (
      <div>
        <h1>Our History</h1>
      </div>
  );
}

export function App() {
  return (
      <Home />
  );
}

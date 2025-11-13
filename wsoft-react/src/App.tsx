import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Placeholder pages - these can be converted from the HTML files later
const About = () => <div className="container"><h1>About Page</h1><p>About page content will go here</p></div>;
const Services = () => <div className="container"><h1>Services Page</h1><p>Services page content will go here</p></div>;
const ServiceDetails = () => <div className="container"><h1>Service Details Page</h1><p>Service details content will go here</p></div>;
const Projects = () => <div className="container"><h1>Projects Page</h1><p>Projects page content will go here</p></div>;
const ProjectDetails = () => <div className="container"><h1>Project Details Page</h1><p>Project details content will go here</p></div>;
const Blog = () => <div className="container"><h1>Blog Page</h1><p>Blog page content will go here</p></div>;
const BlogDetails = () => <div className="container"><h1>Blog Details Page</h1><p>Blog details content will go here</p></div>;
const Contact = () => <div className="container"><h1>Contact Page</h1><p>Contact page content will go here</p></div>;
const Pricing = () => <div className="container"><h1>Pricing Page</h1><p>Pricing page content will go here</p></div>;
const Team = () => <div className="container"><h1>Team Page</h1><p>Team page content will go here</p></div>;
const TeamDetails = () => <div className="container"><h1>Team Details Page</h1><p>Team details content will go here</p></div>;
const Home1 = () => <Home />;
const Home2 = () => <div className="container"><h1>Home 2 Page</h1><p>Home 2 page content will go here</p></div>;
const Home3 = () => <div className="container"><h1>Home 3 Page</h1><p>Home 3 page content will go here</p></div>;
const NotFound = () => <div className="container"><h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-1" element={<Home1 />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/home-3" element={<Home3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

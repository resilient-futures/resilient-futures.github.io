
// import React from 'react';
// import { Box, Typography, Container, Grid2, Card, CardContent, Link } from '@mui/material';
// import logo from './logo.svg';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Publications from './pages/Publications';
// import Contact from './pages/Contact';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           height: '100vh',
//           backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/7140d540-e2bd-4633-b1e1-78f2e1a01b4f/antarctica_dms_2009289_lrg_.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           textAlign: 'center',
//           position: 'relative',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           },
//         }}
//       >
//         <Container>
//           <Typography variant="h1" sx={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>
//             Welcome to our group!
//           </Typography>
//           {/* <Typography variant="h4" sx={{ position: 'relative', zIndex: 1, mt: 2 }}>
//             Professor of City and Regional Planning
//           </Typography> */}
//         </Container>
//       </Box>

//       {/* Bio Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           About Me
//         </Typography>
//         <Typography variant="body1">
//           Our group tackles fundamental questions in fluid mechanics, climate science, and geophysics by integrating mathematical and machine-learned models with observed data. We use our findings to address challenges facing the world, such as advancing our scientific knowledge of the climate system.
//           The length scale of the systems we are interested in varies broadly from a few microns to thousands of kilometers, because the governing physical principles are often universal across a range of length and time scales. We use mathematical models, simulations, and machine learning to study the complex interactions between fluids and elasticity and their interfacial dynamics, such as multiphase flows, flows in deformable structures, and cracks. We extend our findings to tackle emerging topics in climate science and geophysics, such as understand the missing physics that govern the flow of ice sheets in a warming climate.
//           We welcome collaborations across disciplinary lines, from geophysics, engineering, physics, math to computer science, since we believe combining expertise and methodologies across fields is crucial for new discoveries.
//           Dr. John Doe is a renowned professor specializing in artificial intelligence and machine learning. With over 20 years of experience, he has published numerous papers and mentored countless students.
//         </Typography>
//       </Container>

//       {/* Research Interests Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           Research Interests
//         </Typography>
//         <Grid2 container spacing={4}>
//           {['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'].map((interest, index) => (
//             <Grid2 item key={index} xs={12} sm={6} md={4}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{interest}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid2>
//           ))}
//         </Grid2>
//       </Container>

//       {/* Publications Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           Publications
//         </Typography>
//         <ul>
//           {[
//             'Paper 1: AI in Healthcare',
//             'Paper 2: Deep Learning for NLP',
//             'Paper 3: Reinforcement Learning',
//           ].map((pub, index) => (
//             <li key={index}>
//               <Typography variant="body1">{pub}</Typography>
//             </li>
//           ))}
//         </ul>
//       </Container>

//       {/* Teaching Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           Teaching
//         </Typography>
//         <ul>
//           {['CS101: Introduction to Programming', 'CS501: Advanced Machine Learning'].map((course, index) => (
//             <li key={index}>
//               <Typography variant="body1">{course}</Typography>
//             </li>
//           ))}
//         </ul>
//       </Container>

//       {/* Contact Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" gutterBottom>
//           Contact
//         </Typography>
//         <Typography variant="body1">
//           Email: <Link href="mailto:john.doe@university.edu">john.doe@university.edu</Link>
//         </Typography>
//         <Typography variant="body1">Office: Room 123, Computer Science Building</Typography>
//       </Container>
//     </Box>
//   );
// };

// export default App;

import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import './App.css';
import Introduction from './pages/Introduction';
import PhotoGallery from './pages/PhotoGallery';

const App = () => {
  return (
    <Router>
      <Box>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/gallery" element={<PhotoGallery />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
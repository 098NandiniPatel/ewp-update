import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Card from './components/PointCard';
// import Card from './components/Card';
// import Accordion from './components/AccordionSection';
import Overview from './Overview';
import { DigitalMarketing } from './CardOverviewList';
// import WeCare from './WeCare';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Card/> */}
    {/* <Card/> */}
    {/* <Accordion/> */}
    <Overview data={DigitalMarketing}/>
    {/* <WeCare/> */}
  </React.StrictMode>
);

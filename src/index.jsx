import "./index.css"

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from "./components/home.jsx";

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<Home tab="home" />);



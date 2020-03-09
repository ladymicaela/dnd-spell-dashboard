import React from 'react';
import ReactDOM from 'react-dom';

import SpellDashboard from './spell_dashboard';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<SpellDashboard />, root);
})
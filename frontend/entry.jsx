import React from 'react';
import ReactDOM from 'react-dom';

import SpellDashboard from './components/spell_dashboard';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<SpellDashboard />, root);
})
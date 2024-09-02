// src/globalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  /* Globale Stile für verschiedene Bildschirmgrößen */
  @media (max-width: 1024px) {
    /* Tablets und kleinere Laptops */
    body {
      font-size: 14px; /* Beispiel: Schriftgröße ändern */
    }
  }

  @media (max-width: 768px) {
    /* Tablets im Hochformat und große Handys */
    body {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    /* Kleine Handys */
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;

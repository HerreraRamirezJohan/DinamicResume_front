import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    margin: 0,
  },
};

export default Footer;
import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer>
        <p className="center">
          &copy; Slick's Slices {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

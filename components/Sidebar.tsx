"use client"
import { useState } from 'react';
import '../styles/fonts.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button
          className='p-4 btn'
          onClick={toggleSidebar}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            fontSize: '20px'
          }}
        >
          <FontAwesomeIcon icon={faBars} size='lg' />
        </button>
        <div className="navbar-title">AmiibosDB</div>
        
      </nav>
      <div
        style={{
          backgroundColor: isOpen ? '#f0f0f0' : 'transparent',
          position: 'fixed',
          top: '0',
          left: '0',
          bottom: '0',
          zIndex: '999',
          width: isOpen ? '250px' : '0',
          transition: 'width 0.3s ease',
        }}
        className={`w3-sidebar w3-bar-block`}
      >
        <div className="close-button">
          <button
            className='p-4 btn'
            onClick={toggleSidebar}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              fontSize: '25px',
            }}
          >
            <FontAwesomeIcon icon={faTimes} size='lg' style={{ display: isOpen ? 'block' : 'none'}} />
          </button>
        </div>
        {/* Menu content */}
        <ol style={{ listStyle: 'none', display: isOpen ? 'block' : 'none' }}>
          <li className='p-3'>
            <Link style={{ textDecoration: 'none' }} href="/">
              Home
            </Link>
          </li>
          <li className='p-3'>
            <Link style={{ textDecoration: 'none' }} href="/services">
              Services
            </Link>
          </li>
          <li className='p-3'>
            <Link style={{ textDecoration: 'none' }} href="/about">
              About
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

/* Resto de tus estilos... */

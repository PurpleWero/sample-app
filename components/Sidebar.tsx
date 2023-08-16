"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: isOpen ? 'white' : 'transparent' }} className={`w3-sidebar w3-bar-block`}>
      <button
        className='p-4 btn'
        onClick={toggleSidebar}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <FontAwesomeIcon icon={faBars} size='lg' />
      </button>
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
  );
}
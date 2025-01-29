import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(user ? '/dashboard' : '/');
  };

  const sizes = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  return (
    <a href="#" onClick={handleClick} className={`flex items-center ${className}`}>
      <div className="relative">
        <svg
          viewBox="0 0 40 40"
          className={`${sizes[size]} aspect-square text-pink-500`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-500"
          />
          
          {/* Small dots around circle */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle
              key={angle}
              cx={20 + 16 * Math.cos((angle * Math.PI) / 180)}
              cy={20 + 16 * Math.sin((angle * Math.PI) / 180)}
              r="1"
              fill="currentColor"
            />
          ))}
          
          {/* Center dot */}
          <circle
            cx="20"
            cy="20"
            r="2"
            fill="currentColor"
          />
          
          {/* Compass needle */}
          <path
            d="M20 6L23 20H17L20 6Z"
            fill="currentColor"
            className="origin-center rotate-45"
          />
          <path
            d="M20 34L17 20H23L20 34Z"
            fill="currentColor"
            className="origin-center rotate-45"
          />
        </svg>
      </div>
      <div className="ml-2 font-semibold text-gray-900">
        <span>Connection</span>
        <span className="text-pink-500">Compass</span>
      </div>
    </a>
  );
}
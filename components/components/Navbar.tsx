'use client'

import { AlignStartHorizontal, CreditCard, Percent, ShieldUser } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { ThemeToggle } from '../ThemeToggle'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/transactions');

  const navLinks = [
    { path: '/', icon: <AlignStartHorizontal className="h-5 w-5" />, label: 'Transactions', color: 'bg-blue-500/10 text-blue-500' },
    { path: '/loan', icon: <CreditCard className="h-5 w-5" />, label: 'Prêts', color: 'bg-emerald-500/10 text-emerald-500' },
    { path: '/about', icon: <ShieldUser className="h-5 w-5" />, label: 'À propos', color: 'bg-violet-500/10 text-violet-500' },
  ];

  return (
    <div className="top-0 left-0 fixed w-64 h-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg z-50 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
            <Percent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-medium">
              Transactions
              <span className="block text-blue-600 dark:text-blue-400 font-semibold">Analysis</span>
            </h2>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 overflow-y-auto">
        <div className="space-y-1">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${activeLink === link.path
                ? 'bg-white dark:bg-gray-800 shadow-sm'
                : 'hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm'
                }`}
            >
              <span className={`p-2 rounded-md ${link.color}`}>
                {link.icon}
              </span>
              <span className="font-medium text-sm">{link.label}</span>
              {activeLink === link.path && (
                <div className="ml-auto h-2 w-2 rounded-full bg-blue-500"></div>
              )}
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <Link
          href={"/author"}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Image
                src="/avatar.jpg"
                alt="User Avatar"
                className='h-10 w-10 rounded-full'
                width={32}
                height={32}
              />
            </div>
            <div className="text-xs">
              <p className="font-medium">AVADRA Martial</p>
              <span>Auteur</span>
            </div>
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
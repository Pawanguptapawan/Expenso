'use client';

import React from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { BarLoader } from 'react-spinners'; // Assuming you're using react-spinners
import { useStoreUser } from '@/hooks/use-store-user'; // Adjust the path if different

function Header() {
  const { isLoading } = useStoreUser();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <SignedOut>
          <div className="flex gap-2">
            <SignInButton />
            <SignUpButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      {isLoading && (
        <div className="w-full">
          <BarLoader width={'100%'} color="#d6651e" />
        </div>
      )}
    </header>
  );
}

export default Header;

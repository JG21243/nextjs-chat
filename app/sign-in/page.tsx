import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function SignInPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <SignIn path="/" />
    </div>
  );
}
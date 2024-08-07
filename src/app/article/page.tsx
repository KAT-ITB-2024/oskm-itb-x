"use client";

import React from 'react';
import ClientOnlyCarousel from 'src/app/article/components/ClientOnlyCarousel';


export default function Page() {
  return (
    <>
      <h2>Article Page</h2>
      <ClientOnlyCarousel />
    </>
  );
}

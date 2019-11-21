import React, { Suspense } from 'react';

export const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
);

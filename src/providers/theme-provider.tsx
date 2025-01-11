'use client';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NuqsAdapter>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </NuqsAdapter>
  );
}

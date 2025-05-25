'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes'

export function ThemeProvider(props: NextThemeProviderProps) {
  return <NextThemesProvider {...props} />
}
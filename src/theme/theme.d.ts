// src/theme/theme.d.ts
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    gray: Record<string, string>
    white: string
  }

  interface PaletteOptions {
    gray: Record<string, string>
    white: string
  }

  interface TypographyVariants {
    headingHg: React.CSSProperties
    headingXl: React.CSSProperties
    headingLg: React.CSSProperties
    headingMd: React.CSSProperties
    headingSm: React.CSSProperties
    headingXs: React.CSSProperties
    textLg: React.CSSProperties
    textMd: React.CSSProperties
    textSm: React.CSSProperties
    textXs: React.CSSProperties
    
  }

  interface TypographyVariantsOptions {
    headingHg: React.CSSProperties
    headingXl: React.CSSProperties
    headingLg: React.CSSProperties
    headingMd: React.CSSProperties
    headingSm: React.CSSProperties
    headingXs: React.CSSProperties
    textLg: React.CSSProperties
    textMd: React.CSSProperties
    textSm: React.CSSProperties
    textXs: React.CSSProperties
  }
}
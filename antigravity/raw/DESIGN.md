---
name: Ethereal Professional
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffffff'
  on-tertiary: '#003824'
  tertiary-container: '#6ffbbe'
  on-tertiary-container: '#00734e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1120px
  gutter: 24px
---

## Brand & Style

This design system is built on a foundation of **Minimalism** blended with **Subtle Glassmorphism**. The personality is sophisticated, calm, and technically proficient, aiming to evoke a sense of quiet confidence and premium craftsmanship. It avoids the "flashiness" of typical portfolios in favor of depth and precision.

The aesthetic relies on high-quality typography and a layered approach to dark mode. Elements appear to float in a deep 3D space, separated by light-refracting borders and soft backdrop blurs. The focus is on clarity and the content itself, using glass effects only to provide context and hierarchy rather than visual noise.

## Colors

The palette is rooted in a monochromatic spectrum of "Ebonies" and "Ink Grays."
- **Background**: A near-black `#050505` to ensure perfect OLED blacks and high contrast for glass elements.
- **Surface**: Subtle grays (`#121212`) are used for container backgrounds to create a sense of elevation.
- **Accents**: Pure White is the primary driver for text and iconography. Secondary (Blue) and Tertiary (Emerald) colors are reserved for high-intent actions or status indicators, used sparingly to maintain the minimalist rigor.
- **Glass Tint**: All glass surfaces use a white tint at extremely low opacity (3-8%) to simulate a polished surface.

## Typography

This design system utilizes a dual-font strategy. **Manrope** is used for headlines to provide a modern, geometric, and slightly warm professional feel. **Inter** is used for body copy and labels due to its exceptional legibility and systematic, utilitarian nature.

Typography should be treated as a primary design element. Large headings use tight letter spacing to feel "locked in," while small labels use increased tracking (letter spacing) for better readability on dark backgrounds. Paragraphs are kept to a comfortable width to ensure a frictionless reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** approach for the main content container (max 1120px) to maintain editorial control over line lengths and image placement. 

A strict 8-point spacing system is applied to create a rhythmic vertical flow. Section segmentation is achieved through generous whitespace (`xl` spacing) rather than heavy dividers. Professional and social sections are separated into distinct "Glass Zones"—large, semi-transparent containers that group related content.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Low-Contrast Outlines**.
- **Level 0 (Base)**: The `#050505` canvas.
- **Level 1 (Sections)**: Subtle containers with a `12px` backdrop blur and a `1px` solid border at 8% opacity.
- **Level 2 (Interactive/Cards)**: Increased background opacity (up to 12%) and a more prominent border (15% opacity).
- **Hover State**: When an element is hovered, the scale increases to `1.05`, the backdrop blur intensifies, and a soft, white glow (shadow) with 5% opacity appears to simulate the object moving closer to the viewer.

Transitions for all depth changes are set to `300ms` with a `cubic-bezier(0.4, 0, 0.2, 1)` easing for a "heavy" but smooth feel.

## Shapes

The shape language uses a **Rounded** (Level 2) philosophy. Standard components use an `8px` (0.5rem) radius to soften the technical edge of the dark theme. Larger section containers and glass cards use a `16px` (1rem) or `24px` (1.5rem) radius to emphasize their role as distinct visual "islands." Buttons should always feature a consistent `8px` radius to maintain a professional, cohesive look.

## Components

### Buttons
- **Primary**: Solid white background with black text. Hover effect: `scale-105` and a subtle drop shadow.
- **Secondary (Glass)**: Transparent background with a `1px` white border (20% opacity). Hover effect: Background fill increases to 10% white opacity.

### Glass Cards (Professional/Social)
- Large containers with `backdrop-filter: blur(12px)`. 
- Professional cards use a vertical layout with high-contrast typography. 
- Social cards utilize a more compact, horizontal layout with monochromatic icons.

### Inputs
- Background: Deep gray (`#121212`) with an `8px` radius.
- Focus State: Border color shifts to pure white at 40% opacity with a `300ms` transition.

### Chips/Tags
- Small, low-contrast pills. 
- Background: White at 5% opacity.
- Border: White at 10% opacity.
- Text: `label-caps` style.

### Interactive Transitions
- All interactive elements must implement a `transition: all 300ms ease`.
- Hovering over a card should trigger a `transform: scale(1.05)` and an increase in the border brightness.
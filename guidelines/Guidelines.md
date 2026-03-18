# General guidelines
* Design with a "Soft Minimalist" aesthetic. Prioritize ample whitespace, clean layouts, and a delicate visual hierarchy to reduce cognitive load.
* Absolutely AVOID sharp corners, 90-degree angles, and aggressive geometric shapes. The overall feel should be organic, friendly, approachable, and modern B2B.
* Use flexbox and grid for well-structured, responsive layouts with generous padding and margins. Elements should feel like they have room to "breathe".

--------------

# Design system guidelines
* Shape & Borders: ALL interactive elements and containers MUST have rounded corners. Never use square corners for buttons, inputs, or cards.
* Cards & Containers: Use a smooth border-radius of 16px to 24px for all content blocks, sections, and images. 
* Depth & Shadows: Do not use heavy, dark borders. Instead, define boundaries using very subtle, soft, and blurred drop shadows (e.g., y: 4, blur: 24, opacity: 5%) or extremely delicate light-gray borders (1px solid #F0F0F0).
* Typography: Use a clean, geometric sans-serif font. Keep font weights delicate (Regular/Medium for body text, Semi-Bold for headings). Avoid overly heavy, black, or condensed typography.
* Form Inputs (Zero Friction): Input fields must have rounded corners (border-radius: 12px), a subtle background fill (very light gray), and no harsh black borders until focused.

## Button
Buttons are the primary conversion drivers. They must appear soft, clickable, and completely rounded to maintain the delicate aesthetic.

### Usage
Buttons should guide users toward the most important action without feeling like an aggressive sales pitch. 

### Variants
* Primary Button
  * Purpose: Used for the main action (e.g., "Skonsultuj bezpłatnie", "Zidentyfikuj wąskie gardła").
  * Visual Style: Pill-shaped (border-radius: 999px or 100px). Solid background (Black or very dark gray) with white text. Absolutely no square edges.
  * Usage: One primary button per section.
* Secondary Button
  * Purpose: Used for alternative actions (e.g., "Zwiń wyniki", "Poznaj pełnię możliwości").
  * Visual Style: Pill-shaped (border-radius: 999px). Transparent background with a delicate 1px solid border.
* Tertiary Button / Text Link
  * Purpose: Used for the least important actions or inline links.
  * Visual Style: Text-only, but if placed in a container, the hover state must be a rounded pill shape.
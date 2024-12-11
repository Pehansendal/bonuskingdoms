# Casino Review Website Project Overview

## Project Structure
This is a Next.js project that displays cryptocurrency casino reviews. The main components are:

### Core Files
- `app/cryptocasinos/[slug]/page.tsx` - Individual casino review page
- `designtekst/` - Directory containing casino review files in .txt format
- `components/` - Reusable React components

### Content Structure
Each casino review is stored as a text file in the `designtekst/` directory with the following format:
- Casino name as filename (e.g., "LuckyStar Casino.txt")
- React component structure with consistent sections
- Links embedded using HTML <a> tags (automatically converted to React components)
- Standardized sections for all reviews

## Key Components

### RichText Component
- Handles text content with embedded links
- Converts HTML links to React Link components
- Maintains proper paragraph structure
- Prevents hydration errors
- Handles incomplete content gracefully

### Content Processing
The system:
1. Normalizes casino slugs for URL compatibility
2. Handles both "Casino.txt" and plain .txt file formats
3. Parses HTML content:
   - Converts <a> tags to markdown-style links
   - Maintains proper paragraph structure
   - Preserves formatting and spacing
4. Provides fallbacks for missing content

## Page Structure
Each casino review includes:
1. Header section:
   - Casino name with year
   - Last updated date
   - Trust indicators
2. Quick summary box
3. Key facts grid
4. Main content sections:
   - Safety & Security
   - Game Selection
   - Pros & Cons
   - FAQ Section

## Styling Approach
- Using Tailwind CSS for styling
- Dark theme with consistent color scheme:
  - Background: #070a0f (dark)
  - Section backgrounds: #1a1f2d
  - Text: gray-300 for body, white for headers
  - Links: blue-400 with hover effects
- Special styling for:
  - Headers (gradient text)
  - Trust indicators (colored badges)
  - Pros/Cons boxes (colored backgrounds)
  - FAQ accordions

## Content Guidelines
Each review should include:
1. Overview with trust indicators
2. Key facts (Founded, License, Games)
3. Safety & Security section
4. Game selection details
5. Pros and Cons
6. FAQ section
7. External links to:
   - Official casino website
   - Gambling support resources

## Error Handling
- Graceful handling of missing content
- Fallback values for incomplete data
- Proper 404 handling for invalid slugs
- Hydration error prevention

## Future Enhancements
1. Logo Integration
2. CSV Data Integration
3. Comparison Tables
4. Mobile App Information
5. Payment Method Details
6. Customer Support Information

## Important Considerations
1. Mobile-first responsive design
2. Consistent styling across all reviews
3. Proper link handling and formatting
4. Accessibility considerations
5. SEO optimization
6. Performance optimization

This overview reflects the current state of the project and should help any developer or AI understand the structure and implementation details. 
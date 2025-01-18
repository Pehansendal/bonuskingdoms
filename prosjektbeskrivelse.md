# BonusKingdoms - Crypto Casino Comparison Platform

## Project Overview
BonusKingdoms is a modern web application built with Next.js that helps users find and compare crypto-friendly online casinos. The platform provides detailed information about casino bonuses, accepted cryptocurrencies, and user ratings.

## Core Features
- Comprehensive casino comparison table
- Detailed casino information including pros, cons, and reviews
- Cryptocurrency support visualization with custom icons
- Responsive design for all devices
- Interactive expandable casino details

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Asset Handling**: Static assets served from /public directory

## Project Structure
```
bonuskingdoms/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── all-casinos/
│   │   │   └── page.tsx            # Casino comparison page
│   │   └── about/
│   │       └── page.tsx            # About page
│   ├── components/
│   │   ├── Navigation.tsx          # Top navigation bar
│   │   └── CasinoTable.tsx         # Main casino comparison table
│   ├── types/
│   │   └── casino.ts               # TypeScript interfaces
│   └── utils/
│       └── textLoader.ts           # Content loading utility
├── public/
│   ├── casino_logos/              # Casino logo images
│   ├── crypto/                    # Cryptocurrency icons
│   ├── pros/                      # Casino pros text files
│   ├── cons/                      # Casino cons text files
│   └── review/                    # Casino review text files
└── data/
    └── casinos.json              # Main casino data
```

## Data Structure
Casino data is stored in `casinos.json` with the following structure:
```typescript
interface Casino {
  casino_name: string;
  logo_path: string;
  bonus_percentage: string;
  bonus_max_amount_in_euro: string;
  max_bonus_value: string;
  free_spins: number;
  accepted_crypto: string;
  casino_rating: number;
  pros_path: string;
  cons_path: string;
  review_path: string;
  website_url: string;
}
```

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bonuskingdoms.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up cryptocurrency icons:
   ```bash
   npm install cryptocurrency-icons
   npx tsx scripts/setupCryptoIcons.ts
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Content Management
- Casino data is managed through the `casinos.json` file
- Pros, cons, and reviews are stored as text files in their respective directories
- Images (logos, icons) are stored in the public directory

## File Path Conventions and Image Handling
- All file paths in `casinos.json` must be relative to the `public/` directory
- Screenshots must follow the naming convention: `/screenshots/www_domain_com_screenshot.webp`
- Casino logos must be stored in `/casino_logos/` with format: `casino_name_casino.webp`
- All images should use the `.webp` format for optimal performance
- File paths in components should use the exact paths from `casinos.json` without modification
- Never construct screenshot paths dynamically - always use the paths from the data source

Example paths:
```
// Correct screenshot path
screenshot_path: "/screenshots/www_example_com_screenshot.webp"

// Correct logo path
logo_path: "casino_logos/example_casino.webp"
```

The `convertCsvToJson.ts` script handles the conversion of CSV data to JSON while maintaining these path conventions.

## Future Development Plans
- Implementation of filtering and sorting functionality
- Advanced search capabilities
- User authentication system
- Admin interface for content management
- SEO optimization
- Performance monitoring and optimization

## Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 

## Data Processing and Image Handling
The project includes several data processing scripts in the `scripts/` directory:
- `convertCsvToJson.ts`: Converts casino data from CSV to JSON format, handling file paths correctly
- `fix-screenshot-paths.ts`: Manages screenshot file paths and ensures correct mapping
- `merge-screenshots.ts`: Handles screenshot file organization

## Weekly Bonus Updates
The casino bonus data is updated weekly through the following process:

1. **Data Preparation**:
   - New bonus data is scraped and saved as CSV in the scraping project
   - The CSV file should maintain the same structure as `public/nyliste_bonus_processed.csv`
   - Required columns:
     ```
     casino_name, website_url, accepted_crypto, bonus_percentage,
     bonus_max_amount_in_euro, max_bonus_value, free_spins,
     bonus_type, logo_path, player_rating, casino_rating,
     pros_path, cons_path, review_path, screenshot_path
     ```

2. **Backup Current Data**:
    ```bash
    # Create a backup of current data
    cp public/nyliste_bonus_processed.csv public/nyliste_bonus_processed.backup.csv
    cp src/data/casinos.json src/data/casinos.backup.json
    ```

3. **Update Process**:
    ```bash
    # 1. Copy the new CSV file to the project
    cp /path/to/scraping/project/latest_bonuses.csv public/nyliste_bonus_processed.csv
    
    # 2. Convert the updated CSV to JSON
    npx tsx scripts/convertCsvToJson.ts
    
    # 3. Verify the changes
    git diff src/data/casinos.json
    
    # 4. Build and test locally
    npm run build
    npm run preview
    
    # 5. If something goes wrong, restore from backup
    # cp public/nyliste_bonus_processed.backup.csv public/nyliste_bonus_processed.csv
    # cp src/data/casinos.backup.json src/data/casinos.json
    ```

4. **Validation Steps**:
    - Ensure all casino names match existing entries
    - Verify that all required fields are present
    - Check that bonus values and percentages are correctly formatted
    - Confirm that all file paths (logos, screenshots, etc.) are valid
    - Compare key metrics with previous data:
      - Number of casinos should not decrease unexpectedly
      - Bonus values should be within reasonable ranges
      - No missing cryptocurrency symbols
      - All image paths should be valid

5. **Deployment**:
    ```bash
    # After verifying changes
    git add public/nyliste_bonus_processed.csv src/data/casinos.json
    git commit -m "chore: Weekly bonus update $(date +%Y-%m-%d)"
    git push origin main
    
    # Optional: Tag the release for easy rollback if needed
    git tag -a "bonus-update-$(date +%Y-%m-%d)" -m "Weekly bonus update"
    git push origin --tags
    ```

6. **Monitoring**:
    - Check the deployed site to verify updates
    - Verify sorting and filtering still work correctly
    - Ensure all casino details expand properly
    - Monitor error logs for any image loading issues
    - Check that all cryptocurrency filters work with updated data
    - Verify that bonus sorting works correctly with new values

7. **Troubleshooting**:
    If issues are found after deployment:
    ```bash
    # 1. Revert to previous version
    git revert HEAD
    git push origin main
    
    # 2. Restore from backup files
    cp public/nyliste_bonus_processed.backup.csv public/nyliste_bonus_processed.csv
    cp src/data/casinos.backup.json src/data/casinos.json
    
    # 3. Rebuild and redeploy
    npm run build
    git add .
    git commit -m "fix: Restore previous bonus data due to issues"
    git push origin main
    ``` 
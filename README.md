# USWDS Sandbox

A comprehensive demonstration site for the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) with working examples of every component, complete page templates, and design patterns for common government website tasks.

**Live site:** https://uswds.github.io/uswds-sandbox/

## What This Is

This is a complete reference implementation of USWDS that you can:

- **Browse** - Explore 40+ USWDS components with multiple variations
- **Copy** - Grab working code examples for your own projects
- **Test** - See how components work together in real page layouts
- **Learn** - Understand best practices for accessibility and responsive design

## Why This Matters

Building government websites with USWDS is more than just including CSS and JavaScript. This sandbox shows you:

- How to properly structure pages with USWDS components
- Working examples of accessible forms, navigation, and interactive elements
- Complete page templates for common use cases (landing pages, documentation, error pages)
- Design patterns for real-world tasks (search, authentication, contact forms)
- Quality assurance through automated accessibility and performance testing

## Getting Started

### Prerequisites

- Node.js v20 (LTS)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/uswds/uswds-sandbox.git
cd uswds-sandbox

# Install dependencies
npm install

# Copy USWDS assets (images, fonts, JavaScript)
npm run init

# Start the development server
npm start
```

Visit http://localhost:8080 to see the site.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with live reload |
| `npm run build` | Build the site for production |
| `npm run init` | Copy USWDS assets to project |
| `npm test` | Run security scan |
| `npm run test:accessibility` | Run accessibility tests |
| `npm run test:accessibility:generate-report` | Generate accessibility report |

## Project Structure

```
uswds-sandbox/
├── src/                    # Source files
│   ├── _data/              # Site data (navigation, reports)
│   ├── _includes/          # Reusable partials
│   ├── _layouts/           # Page layouts
│   ├── components/         # USWDS component demos
│   ├── patterns/           # Design patterns
│   ├── templates/          # Page templates
│   └── reports/            # Quality scan reports
├── scripts/                # Build scripts
├── tests/                  # Playwright tests
├── .github/workflows/      # GitHub Actions
├── eleventy.config.js      # Eleventy configuration
├── gulpfile.js             # Gulp tasks
└── package.json            # Dependencies
```

## What's Included

### Components (40+)

Every USWDS component with multiple variations:

- Accordion, Alert, Banner, Breadcrumb, Button, Card
- Checkbox, Combo Box, Date Picker, Dropdown
- Form elements, Grid, Header, Icon, Identifier
- Link, List, Modal, Navigation, Pagination
- Radio, Range Slider, Search, Side Navigation
- Table, Tag, Text Input, Tooltip, Typography
- And more...

### Patterns

Design patterns for common government website tasks:

- Contact forms
- User registration
- Search with autocomplete
- Password reset flows
- User profiles

### Templates

Complete page layouts:

- Landing pages
- Documentation pages
- Error pages (404)
- Authentication pages
- Forms with validation

### Quality Assurance

Automated testing on every push:

- **Accessibility:** axe-core testing across desktop, tablet, and mobile
- **Performance:** Lighthouse CI for performance scoring
- **Link Checking:** Automated detection of broken links
- **Meta Tags:** Validation of required HTML meta tags

## Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

### Adding Components

To add a new component page:

1. Create a new Markdown file in `src/components/`
2. Use the `sandbox` layout
3. Add USWDS component markup
4. Include multiple variations
5. Add to `src/_data/nav.json`

### Adding Patterns

To add a new pattern:

1. Create a directory in `src/patterns/`
2. Add an `index.md` file
3. Include working examples with real forms
4. Document use cases and accessibility considerations

## Deployment

The site is automatically deployed to GitHub Pages on every push to the main branch. Quality scans (accessibility, Lighthouse, link checking) run on every pull request.

### Installing USWDS from a Branch

If you have made changes to the `uswds` project and want to test it with `uswds-sandbox`:

1. Push your changes to `uswds` to a branch on GitHub.
2. In your `uswds-sandbox` working copy, run:
   ```bash
   npm install "https://github.com/YOUR_USERNAME/uswds/tree/YOUR_BRANCH" --save
   ```
3. Run `npm install` to install dependencies including your new version of `uswds`.
4. Run `npm run init`.
5. Run `npm start` and open http://localhost:8080.

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [axe-core Documentation](https://axe-core.org/docs/)
- [Playwright Documentation](https://playwright.dev/)

## License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). To the extent that under applicable copyright and related rights in the work worldwide are waived through the CC0 1.0 Universal public domain dedication, all copyright and related rights in the work are waived.
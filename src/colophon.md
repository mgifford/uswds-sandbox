---
layout: sandbox
title: Colophon
---

# Colophon

How this site is built and maintained.

## About This Site

USWDS Sandbox is an Eleventy-powered demonstration site for exploring, testing, and prototyping with the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/). It provides working examples of every USWDS component, complete page templates, and design patterns for common government website tasks.

## Technology Stack

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-6">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Core Technologies</h3>
      </div>
      <div class="usa-card__body">
        <ul class="usa-list">
          <li><strong>Static Site Generator:</strong> Eleventy 3.x (ESM)</li>
          <li><strong>Design System:</strong> USWDS 3.13.0</li>
          <li><strong>CSS Preprocessor:</strong> Dart Sass (via Gulp)</li>
          <li><strong>Task Runner:</strong> Gulp 5.x</li>
          <li><strong>JavaScript:</strong> Vanilla JS with USWDS components</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="grid-col-6">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Testing & Quality</h3>
      </div>
      <div class="usa-card__body">
        <ul class="usa-list">
          <li><strong>Accessibility Testing:</strong> Playwright + axe-core</li>
          <li><strong>Performance Testing:</strong> Lighthouse CI</li>
          <li><strong>Link Checking:</strong> Lychee</li>
          <li><strong>Meta Tag Validation:</strong> Custom scripts</li>
          <li><strong>Security Scanning:</strong> Snyk</li>
        </ul>
      </div>
    </div>
  </div>
</div>

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

## How It Works

### Content Structure

- **Components:** Each USWDS component has its own page demonstrating all variations
- **Patterns:** Design patterns show how to combine components for common tasks
- **Templates:** Complete page layouts for different page types
- **Reports:** Automated quality scan results

### Build Process

1. **Eleventy** processes Markdown and Liquid templates into HTML
2. **Gulp** compiles Sass to CSS and copies assets
3. **GitHub Actions** runs quality scans and deploys to GitHub Pages

### Deployment

The site is automatically deployed to GitHub Pages on every push to the main branch. Quality scans (accessibility, Lighthouse, link checking) run on every pull request.

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

## Maintenance

### Automated Updates

- **Weekly:** USWDS version check runs every Monday
- **On Push:** Accessibility and quality scans run automatically
- **On PR:** All scans run to catch issues before merging

### Manual Updates

To update USWDS:

```bash
npm run uswds:update
```

To rebuild assets:

```bash
npm run init
```

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [axe-core Documentation](https://axe-core.org/docs/)
- [Playwright Documentation](https://playwright.dev/)

## License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). To the extent that under applicable copyright and related rights in the work worldwide are waived through the CC0 1.0 Universal public domain dedication, all copyright and related rights in the work are waived.
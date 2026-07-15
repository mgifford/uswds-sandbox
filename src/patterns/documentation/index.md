---
layout: sandbox
title: Documentation
---

# Documentation

Documentation pages provide structured content with navigation, tables of contents, and clear information hierarchy for government services and policies.

## Documentation Page Layout

A complete documentation page with sidebar navigation and main content area.

<div class="grid-grid-row">
  <div class="grid-col-3">
    <nav class="usa-sidenav" aria-label="Documentation navigation">
      <ul class="usa-sidenav__list">
        <li class="usa-sidenav__item">
          <a href="#" class="usa-current">Getting started</a>
          <ul class="usa-sidenav__list">
            <li class="usa-sidenav__item"><a href="#">Installation</a></li>
            <li class="usa-sidenav__item"><a href="#">Quick start</a></li>
            <li class="usa-sidenav__item"><a href="#">Configuration</a></li>
          </ul>
        </li>
        <li class="usa-sidenav__item"><a href="#">User guide</a></li>
        <li class="usa-sidenav__item"><a href="#">API reference</a></li>
        <li class="usa-sidenav__item"><a href="#">Troubleshooting</a></li>
        <li class="usa-sidenav__item"><a href="#">FAQs</a></li>
      </ul>
    </nav>
  </div>
  <div class="grid-col-9">
    <h2>Getting started</h2>
    <p class="usa-intro">This guide will help you set up and configure the system for your agency. Follow these steps to get started quickly.</p>

    <h3>Prerequisites</h3>
    <ul>
      <li>A .gov or .mil email address</li>
      <li>Administrative access to your agency's systems</li>
      <li>USWDS version 3.0 or higher installed</li>
    </ul>

    <h3>Step 1: Create an account</h3>
    <p>Navigate to the registration page and complete the form with your government email address. You will receive a verification email within 15 minutes.</p>

    <div class="usa-alert usa-alert--info" role="status">
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>Note:</strong> Only .gov and .mil email addresses are accepted for registration.</p>
      </div>
    </div>

    <h3>Step 2: Verify your identity</h3>
    <p>Click the verification link in your email and follow the prompts to complete identity verification using Login.gov.</p>

    <h3>Step 3: Configure your profile</h3>
    <p>After verification, complete your profile settings:</p>
    <ol>
      <li>Select your agency from the dropdown</li>
      <li>Confirm your role and permissions</li>
      <li>Set your notification preferences</li>
    </ol>

    <div class="usa-accordion">
      <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="doc-accordion-1">
          Troubleshooting tips
        </button>
      </h4>
      <div id="doc-accordion-1" class="usa-accordion__content" hidden>
        <ul>
          <li>Check your spam folder if you don't receive the verification email</li>
          <li>Ensure you're using a .gov or .mil email address</li>
          <li>Contact support if you continue having issues</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Documentation with Table

A documentation page featuring a data table for reference information.

<h2>System requirements</h2>

<table class="usa-table usa-table--striped">
  <caption>Minimum system requirements by component</caption>
  <thead>
    <tr>
      <th scope="col">Component</th>
      <th scope="col">Minimum RAM</th>
      <th scope="col">Storage</th>
      <th scope="col">Processor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Web server</th>
      <td>4 GB</td>
      <td>50 GB</td>
      <td>2 GHz dual-core</td>
    </tr>
    <tr>
      <th scope="row">Database server</th>
      <td>8 GB</td>
      <td>200 GB</td>
      <td>2.5 GHz quad-core</td>
    </tr>
    <tr>
      <th scope="row">Cache server</th>
      <td>2 GB</td>
      <td>20 GB</td>
      <td>2 GHz dual-core</td>
    </tr>
  </tbody>
</table>

## Documentation with Code Example

A page showing code examples with proper formatting.

<h2>Installation</h2>
<p>Install the package using npm:</p>

<pre class="usa-code"><code>npm install @agency-name/design-system</code></pre>

<h3>Import in your project</h3>

<pre class="usa-code"><code>// In your main stylesheet
@use '@agency-name/design-system' as uswds;

// Include all USWDS components
@include uswds.styles;</code></pre>

<div class="usa-alert usa-alert--warning" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text"><strong>Warning:</strong> Always test in a development environment before deploying to production.</p>
  </div>
</div>

## FAQ Documentation

A page using accordions to organize frequently asked questions.

<h2>Frequently asked questions</h2>

<div class="usa-accordion usa-accordion--bordered">
  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-1">
      How do I reset my password?
    </button>
  </h3>
  <div id="faq-1" class="usa-accordion__content" hidden>
    <p>Go to the sign-in page and click "Forgot password." Enter your email address and follow the instructions sent to your inbox. Password reset links expire after 24 hours.</p>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-2">
      Can I have multiple accounts?
    </button>
  </h3>
  <div id="faq-2" class="usa-accordion__content" hidden>
    <p>No. Each user is limited to one account associated with their government email address. If you need to change agencies, update your profile settings.</p>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-3">
      How do I contact support?
    </button>
  </h3>
  <div id="faq-3" class="usa-accordion__content" hidden>
    <p>You can reach our support team through the <a href="/patterns/contact-form/">contact form</a> or by emailing <a href="mailto:support@example.gov">support@example.gov</a>. Response time is typically within 2 business days.</p>
  </div>

  <h3 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-4">
      What browsers are supported?
    </button>
  </h3>
  <div id="faq-4" class="usa-accordion__content" hidden>
    <p>We support the latest two versions of Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.</p>
  </div>
</div>

## Documentation with Breadcrumbs

A documentation page showing proper breadcrumb navigation.

<nav aria-label="Breadcrumb">
  <ol class="usa-breadcrumb">
    <li class="usa-breadcrumb__item">
      <a href="/">Home</a>
    </li>
    <li class="usa-breadcrumb__item">
      <a href="#">Documentation</a>
    </li>
    <li class="usa-breadcrumb__item">
      <a href="#">User guide</a>
    </li>
    <li class="usa-breadcrumb__item usa-breadcrumb__item--current" aria-current="page">
      Getting started
    </li>
  </ol>
</nav>

<h1>Getting started</h1>
<p>This page provides step-by-step instructions for new users.</p>

## Print-Friendly Documentation

Documentation pages should include print styles for users who need to print or save as PDF.

<div class="usa-alert usa-alert--info usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text"><strong>Tip:</strong> Use Ctrl+P (Cmd+P on Mac) to print this page or save it as a PDF for offline reference.</p>
  </div>
</div>

## Accessibility Considerations

- Use proper heading hierarchy (h1, h2, h3) for document structure
- Provide skip navigation links for long documentation pages
- Use descriptive link text (avoid "click here")
- Ensure code examples are accessible with proper contrast
- Use `aria-current="page"` for the current page in navigation
- Include alt text for all images and diagrams

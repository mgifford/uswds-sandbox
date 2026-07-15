---
layout: basic-prose
title: Documentation Page Template
---

<div class="grid-row grid-gap">
  <div class="grid-col-3">
    <nav class="usa-sidenav" aria-label="Documentation navigation">
      <ul class="usa-sidenav__list">
        <li class="usa-sidenav__item">
          <a href="#getting-started" class="usa-current">Getting Started</a>
          <ul class="usa-sidenav__list">
            <li class="usa-sidenav__item"><a href="#installation">Installation</a></li>
            <li class="usa-sidenav__item"><a href="#quick-start">Quick Start</a></li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#configuration">Configuration</a>
          <ul class="usa-sidenav__list">
            <li class="usa-sidenav__item"><a href="#basic-config">Basic Config</a></li>
            <li class="usa-sidenav__item"><a href="#advanced-config">Advanced Config</a></li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#components">Using Components</a>
          <ul class="usa-sidenav__list">
            <li class="usa-sidenav__item"><a href="#buttons">Buttons</a></li>
            <li class="usa-sidenav__item"><a href="#forms">Forms</a></li>
            <li class="usa-sidenav__item"><a href="#navigation">Navigation</a></li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#api-reference">API Reference</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="grid-col-9 usa-prose">
    <h1 id="getting-started">Getting Started</h1>
    <p class="usa-intro">This guide walks you through setting up and using the U.S. Web Design System (USWDS) in your project. Follow these steps to quickly integrate accessible, mobile-friendly components.</p>

    <h2 id="installation">Installation</h2>
    <p>Install USWDS using your preferred package manager:</p>

    <h3>Using npm</h3>
    <pre><code>npm install @uswds/uswds --save</code></pre>

    <h3>Using yarn</h3>
    <pre><code>yarn add @uswds/uswds</code></pre>

    <h3>Using the CDN</h3>
    <p>For quick prototyping, you can include USWDS directly from the CDN:</p>
    <pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.8.0/dist/css/uswds.min.css"&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/@uswds/uswds@3.8.0/dist/js/uswds.min.js"&gt;&lt;/script&gt;</code></pre>

    <div class="usa-alert usa-alert--info margin-y-2">
      <div class="usa-alert__body">
        <h4 class="usa-alert__heading">Prerequisites</h4>
        <p class="usa-alert__text">USWDS requires Node.js version 18 or higher. Check your version with <code>node --version</code>.</p>
      </div>
    </div>

    <h2 id="quick-start">Quick Start</h2>
    <p>After installation, create a basic HTML file to verify everything is working:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My USWDS Project&lt;/title&gt;
  &lt;link rel="stylesheet" href="./path/to/uswds.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, USWDS!&lt;/h1&gt;
  &lt;button class="usa-button"&gt;Click me&lt;/button&gt;
  &lt;script src="./path/to/uswds.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <hr class="usa-divider margin-y-3">

    <h1 id="configuration">Configuration</h1>
    <p>USWDS can be customized through its settings files. These files let you adjust colors, spacing, fonts, and component behavior.</p>

    <h2 id="basic-config">Basic Configuration</h2>
    <p>Create a <code>uswds-settings.scss</code> file in your project:</p>
    <pre><code>// Override USWDS default settings
@uswds-overrides (
  $theme-body-font-family: "Source Sans Pro", sans-serif,
  $theme-heading-font-family: "Merriweather", serif,
  $theme-primary-color: "blue",
  $theme-site-max-width: "desktop",
  $theme-site-alert-height: "auto",
);</code></pre>

    <table class="usa-table">
      <caption>Common settings</caption>
      <thead>
        <tr>
          <th scope="col">Setting</th>
          <th scope="col">Default</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>$theme-body-font-family</code></td>
          <td>"Source Sans Pro"</td>
          <td>Primary body font family</td>
        </tr>
        <tr>
          <td><code>$theme-heading-font-family</code></td>
          <td>"Merriweather"</td>
          <td>Heading font family</td>
        </tr>
        <tr>
          <td><code>$theme-primary-color</code></td>
          <td>"blue"</td>
          <td>Primary theme color</td>
        </tr>
        <tr>
          <td><code>$theme-site-max-width</code></td>
          <td>"desktop"</td>
          <td>Maximum site width breakpoint</td>
        </tr>
      </tbody>
    </table>

    <h2 id="advanced-config">Advanced Configuration</h2>
    <p>For advanced customization, you can modify the component-level settings:</p>
    <pre><code>// Component-specific overrides
@uswds-overrides (
  // Button settings
  $theme-button-font-family: "Source Sans Pro",
  $theme-button-primary-font-color: "white",

  // Card settings
  $theme-card-background-color: "white",
  $theme-card-border-color: "base-lighter",

  // Form settings
  $theme-form-font-family: "Source Sans Pro",
  $theme-input-line-height-size: "lg",
);</code></pre>

    <hr class="usa-divider margin-y-3">

    <h1 id="components">Using Components</h1>
    <p>USWDS provides a comprehensive library of accessible, reusable components. Here are some of the most commonly used ones.</p>

    <h2 id="buttons">Buttons</h2>
    <p>Buttons communicate actions users can take. They are typically placed throughout your UI.</p>

    <div class="usa-button-group margin-y-2">
      <button class="usa-button" type="button">Primary button</button>
      <button class="usa-button usa-button--secondary" type="button">Secondary</button>
      <button class="usa-button usa-button--accent-cool" type="button">Accent cool</button>
      <button class="usa-button usa-button--outline" type="button">Outline</button>
      <button class="usa-button usa-button--unstyled" type="button">Unstyled</button>
    </div>

    <h3>Button variants</h3>
    <div class="usa-button-group margin-y-2">
      <button class="usa-button usa-button--big" type="button">Big button</button>
      <button class="usa-button usa-button--small" type="button">Small button</button>
      <button class="usa-button usa-button--full-width" type="button">Full-width button</button>
    </div>

    <pre><code>&lt;button class="usa-button" type="button"&gt;Primary button&lt;/button&gt;
&lt;button class="usa-button usa-button--secondary" type="button"&gt;Secondary&lt;/button&gt;
&lt;button class="usa-button usa-button--accent-cool" type="button"&gt;Accent cool&lt;/button&gt;
&lt;button class="usa-button usa-button--outline" type="button"&gt;Outline&lt;/button&gt;</code></pre>

    <h2 id="forms">Forms</h2>
    <p>Form components collect information from users. USWDS provides accessible form patterns with proper labeling and validation.</p>

    <div class="usa-form margin-y-2">
      <label class="usa-label" for="doc-example-input">Example text input</label>
      <input class="usa-input" id="doc-example-input" type="text" placeholder="Enter text here">

      <label class="usa-label" for="doc-example-select">Example select</label>
      <select class="usa-select" id="doc-example-select">
        <option value="">-- Select an option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label class="usa-label" for="doc-example-textarea">Example textarea</label>
      <textarea class="usa-textarea" id="doc-example-textarea" rows="3" placeholder="Enter your message"></textarea>
    </div>

    <h2 id="navigation">Navigation</h2>
    <p>USWDS provides several navigation patterns for different contexts.</p>

    <nav aria-label="Breadcrumb example">
      <ol class="usa-breadcrumb">
        <li class="usa-breadcrumb__item">
          <a href="/">Home</a>
        </li>
        <li class="usa-breadcrumb__item">
          <a href="/components/">Components</a>
        </li>
        <li class="usa-breadcrumb__item usa-breadcrumb__item--current" aria-current="page">
          Navigation
        </li>
      </ol>
    </nav>

    <hr class="usa-divider margin-y-3">

    <h1 id="api-reference">API Reference</h1>
    <p>Complete reference for all USWDS JavaScript components and their configuration options.</p>

    <h2>Accordion</h2>
    <table class="usa-table">
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>multiSelect</code></td>
          <td>boolean</td>
          <td>false</td>
          <td>Allow multiple sections open at once</td>
        </tr>
        <tr>
          <td><code>openOnLoad</code></td>
          <td>boolean</td>
          <td>false</td>
          <td>Open specified sections on page load</td>
        </tr>
      </tbody>
    </table>

    <h2>Modal</h2>
    <table class="usa-table">
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">Type</th>
          <th scope="col">Default</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>forceRole</code></td>
          <td>boolean</td>
          <td>true</td>
          <td>Force role="dialog" on modal element</td>
        </tr>
        <tr>
          <td><code>isModal</code></td>
          <td>boolean</td>
          <td>true</td>
          <td>Enable modal behavior (trap focus)</td>
        </tr>
      </tbody>
    </table>

    <hr class="usa-divider margin-y-3">

    <h1 id="faq">Frequently Asked Questions</h1>

    <div class="usa-accordion margin-y-2" aria-label="FAQ accordion">
      <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-1" type="button">
          What browsers does USWDS support?
        </button>
      </h2>
      <div id="faq-1" class="usa-accordion__content" hidden>
        <p>USWDS supports the latest versions of Chrome, Firefox, Safari, and Edge. It also provides graceful degradation for older browsers.</p>
      </div>

      <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-2" type="button">
          Can I use USWDS with React or Vue?
        </button>
      </h2>
      <div id="faq-2" class="usa-accordion__content" hidden>
        <p>Yes. USWDS provides a vanilla JavaScript implementation, but you can use the CSS classes with any framework. Community-maintained React and Vue wrappers are also available.</p>
      </div>

      <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-3" type="button">
          Is USWDS Section 508 compliant?
        </button>
      </h2>
      <div id="faq-3" class="usa-accordion__content" hidden>
        <p>Yes. USWDS components are designed to meet Section 508 accessibility requirements and WCAG 2.1 AA standards.</p>
      </div>

      <h2 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-4" type="button">
          How do I customize USWDS colors?
        </button>
      </h2>
      <div id="faq-4" class="usa-accordion__content" hidden>
        <p>USWDS uses a design token system. You can override color tokens in your settings file or use the theme color variables in your custom SCSS.</p>
      </div>
    </div>
  </div>
</div>

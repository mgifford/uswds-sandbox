---
layout: sandbox
title: Grid Content
---

# Grid Content

Grid-based content layouts organize information into columns and rows for better readability and visual hierarchy.

## Two-Column Layout

A basic two-column layout with sidebar navigation.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Navigation</h2>
        </header>
        <div class="usa-card__body">
          <nav aria-label="Section navigation">
            <ul class="usa-sidenav">
              <li class="usa-sidenav__item"><a href="#" class="usa-current">Overview</a></li>
              <li class="usa-sidenav__item"><a href="#">Eligibility</a></li>
              <li class="usa-sidenav__item"><a href="#">How to apply</a></li>
              <li class="usa-sidenav__item"><a href="#">Required documents</a></li>
              <li class="usa-sidenav__item"><a href="#">Contact us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-8">
    <h2>Program overview</h2>
    <p class="usa-intro">This program provides assistance to eligible individuals and families. Learn about the benefits, eligibility requirements, and how to apply.</p>

    <h3>Key benefits</h3>
    <ul>
      <li>Financial assistance for qualifying expenses</li>
      <li>Access to support services and resources</li>
      <li>Continued support throughout the program period</li>
    </ul>

    <h3>Who is eligible?</h3>
    <p>Eligibility is based on household income, family size, and residency status. Use our <a href="#">eligibility calculator</a> to determine if you qualify.</p>

    <a href="#" class="usa-button">Check your eligibility</a>
  </div>
</div>

## Three-Column Grid

A three-column layout for displaying related content blocks.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Apply online</h2>
        </header>
        <div class="usa-card__body">
          <p>Complete your application online in approximately 20 minutes. You'll need your tax documents and identification.</p>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button">Start application</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Apply by mail</h2>
        </header>
        <div class="usa-card__body">
          <p>Download the application form, complete it, and mail it with required documents to the address provided.</p>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline">Download form</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Apply in person</h2>
        </header>
        <div class="usa-card__body">
          <p>Visit your local office with required documents. Walk-ins are welcome, but appointments are recommended.</p>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline">Find a location</a>
        </footer>
      </div>
    </div>
  </div>
</div>

## Asymmetric Grid

A layout with a wider main content area and narrower sidebar.

<div class="grid-grid-row">
  <div class="grid-col-8">
    <h2>News and updates</h2>
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h3 class="usa-card__heading">System maintenance scheduled</h3>
          <p class="usa-card__subheading">Posted on March 15, 2026</p>
        </header>
        <div class="usa-card__body">
          <p>The system will undergo scheduled maintenance on Saturday, March 20, 2026 from 10:00 PM to 6:00 AM EST. During this time, the application portal will be unavailable.</p>
          <p>We recommend saving any in-progress applications before the maintenance window.</p>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline">Read more</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Quick links</h2>
        </header>
        <div class="usa-card__body">
          <ul class="usa-list">
            <li><a href="#">Check application status</a></li>
            <li><a href="#">Update your information</a></li>
            <li><a href="#">Find a service center</a></li>
            <li><a href="#">Contact support</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Equal-Width Columns

A balanced layout with equal-width columns for comparison content.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Standard plan</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Free</p>
          <ul>
            <li>Basic features</li>
            <li>Email support</li>
            <li>Up to 5 users</li>
          </ul>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline">Get started</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first usa-card--flag usa-card--media-right">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Professional plan</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">$50/month</p>
          <ul>
            <li>All standard features</li>
            <li>Priority support</li>
            <li>Up to 25 users</li>
            <li>Advanced analytics</li>
          </ul>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button">Get started</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Enterprise plan</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Custom pricing</p>
          <ul>
            <li>All professional features</li>
            <li>Dedicated support</li>
            <li>Unlimited users</li>
            <li>Custom integrations</li>
          </ul>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline">Contact sales</a>
        </footer>
      </div>
    </div>
  </div>
</div>

## Featured Content Grid

A grid layout highlighting featured content with images.

<div class="grid-grid-row">
  <div class="grid-col-8">
    <div class="usa-card usa-card--media-right">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Featured: New digital services</h2>
        </header>
        <div class="usa-card__media">
          <div class="usa-card__media--img">
            <img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="Digital services illustration">
          </div>
        </div>
        <div class="usa-card__body">
          <p>Our new digital services platform makes it easier for agencies to build accessible, mobile-friendly websites. Learn how your agency can get started.</p>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button">Learn more</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Recent updates</h2>
        </header>
        <div class="usa-card__body">
          <ul class="usa-list">
            <li><a href="#">USWDS 3.0 released</a></li>
            <li><a href="#">New accessibility tools</a></li>
            <li><a href="#">Updated design tokens</a></li>
            <li><a href="#">Component library updates</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

- Use `grid-row` and `grid-col` classes for responsive layouts
- Maintain logical reading order in the HTML source
- Ensure proper heading hierarchy within grid layouts
- Use `aria-label` for navigation regions
- Test responsive behavior at different viewport sizes

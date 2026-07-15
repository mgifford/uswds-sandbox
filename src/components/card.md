---
layout: sandbox
title: Card
---

# Card

Cards provide a flexible and extensible content container with multiple variants and options.

## Default Card

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Card Title</h2>
    </header>
    <div class="usa-card__body">
      <p>This is a basic card with a header, body content, and footer actions. Cards are flexible containers that can hold any type of content.</p>
    </div>
    <footer class="usa-card__footer">
      <a href="#" class="usa-button">Action</a>
    </footer>
  </div>
</div>

## Card with Media

<div class="usa-card usa-card--media-right">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Card with Media</h2>
    </header>
    <div class="usa-card__media">
      <div class="usa-card__media--img">
        <img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="Card image">
      </div>
    </div>
    <div class="usa-card__body">
      <p>This card includes an image positioned to the right of the content. Media can be displayed on the left, right, top, or inset.</p>
    </div>
    <footer class="usa-card__footer">
      <a href="#" class="usa-button usa-button--outline">Learn More</a>
    </footer>
  </div>
</div>

## Card with Inset Media

<div class="usa-card">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Card with Inset Media</h2>
    </header>
    <div class="usa-card__media usa-card__media--inset">
      <div class="usa-card__media--img">
        <img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="Card image">
      </div>
    </div>
    <div class="usa-card__body">
      <p>This card uses inset media, which provides padding around the image within the card container.</p>
    </div>
  </div>
</div>

## Card with Header First

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Header First</h2>
      <p class="usa-card__subheading">Subtitle goes here</p>
    </header>
    <div class="usa-card__body">
      <p>The header appears first in the card layout, followed by the media and body content.</p>
    </div>
  </div>
</div>

## Card with CTA Footer

<div class="usa-card usa-card--cta">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Call to Action Card</h2>
    </header>
    <div class="usa-card__body">
      <p>This card has a call-to-action footer with a prominent button link.</p>
    </div>
    <footer class="usa-card__footer">
      <a href="#" class="usa-button">Get Started</a>
    </footer>
  </div>
</div>

## Grid of Cards

<div class="grid-grid-row margin-top-2">
  <div class="grid-col-4 padding-2">
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Card One</h2>
        </header>
        <div class="usa-card__body">
          <p>The first card in a grid layout with three columns.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4 padding-2">
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Card Two</h2>
        </header>
        <div class="usa-card__body">
          <p>The second card in a grid layout with three columns.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4 padding-2">
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Card Three</h2>
        </header>
        <div class="usa-card__body">
          <p>The third card in a grid layout with three columns.</p>
        </div>
      </div>
    </div>
  </div>
</div>

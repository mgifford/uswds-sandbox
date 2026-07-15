---
layout: sandbox
title: Banner
---

# Banner

The banner identifies an official website of the United States government.

## Default Banner

<div class="usa-banner">
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-row grid-gap-2 align-items-center">
          <div class="usa-banner__header-flag">
            <img src="/assets/img/us_flag_small.png" alt="U.S. flag" width="16" height="11">
          </div>
          <p class="usa-banner__header-text">An official website of the United States government</p>
          <button class="usa-banner__button" aria-expanded="false" aria-controls="banner-content">
            <span class="usa-banner__button-text">Here's how you know</span>
            <span class="usa-banner__button-media">
              <svg class="usa-banner__icon" width="12" height="8" viewBox="0 0 12 8">
                <path fill="currentColor" d="M6 8L0 0h12z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
    <div id="banner-content" class="usa-banner__content" aria-hidden="true">
      <div class="grid-row grid-gap-lg">
        <div class="usa-banner__guidance">
          <img class="usa-banner__icon" src="/assets/img/icon-dot-gov.svg" alt="" width="40" height="40">
          <div class="usa-media-block__body">
            <h3>Official websites use .gov</h3>
            <p>A <strong>.gov</strong> website belongs to an official government organization in the United States.</p>
          </div>
        </div>
        <div class="usa-banner__guidance">
          <img class="usa-banner__icon" src="/assets/img/icon-https.svg" alt="" width="40" height="40">
          <div class="usa-media-block__body">
            <h3>Secure .gov websites use HTTPS</h3>
            <p>A <strong>lock</strong> or <strong>https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

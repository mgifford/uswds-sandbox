---
layout: sandbox
title: Tooltip
---

# Tooltip

Tooltips provide contextual help or definitions when users hover over or focus on an element.

## Default Tooltip

<p>
  The Federal Housing Finance Agency (
  <a href="#"
     class="usa-tooltip"
     data-position="top"
     aria-describedby="tooltip-1"
     title="The Federal Housing Finance Agency regulates Fannie Mae, Freddie Mac, and the Federal Home Loan Banks.">
    FHFA
  </a>
  ) regulates housing finance.
</p>

## Tooltip with Definition

<p>
  A
  <a href="#"
     class="usa-tooltip"
     data-position="bottom"
     aria-describedby="tooltip-2"
     title="A government-issued unique identifier for tracking tax records.">
    TIN
  </a>
  is required for tax filing.
</p>

## Tooltip on Button

<div class="margin-top-2">
  <button
    class="usa-button usa-tooltip"
    data-position="right"
    aria-describedby="tooltip-3"
    title="Click to save your progress">
    Save
  </button>
</div>

## Tooltip Placement

<div class="grid-row grid-gap margin-top-2">
  <div class="grid-col">
    <button class="usa-button usa-tooltip" data-position="top" title="Tooltip on top">Top</button>
  </div>
  <div class="grid-col">
    <button class="usa-button usa-tooltip" data-position="bottom" title="Tooltip on bottom">Bottom</button>
  </div>
  <div class="grid-col">
    <button class="usa-button usa-tooltip" data-position="left" title="Tooltip on left">Left</button>
  </div>
  <div class="grid-col">
    <button class="usa-button usa-tooltip" data-position="right" title="Tooltip on right">Right</button>
  </div>
</div>

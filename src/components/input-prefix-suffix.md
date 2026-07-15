---
layout: sandbox
title: Input Prefix/Suffix
---

# Input Prefix/Suffix

Input prefixes and suffixes provide context to help users understand what type of value they should enter.

## Default Prefix

<div class="usa-input-prefix">
  <label class="usa-label" for="input-prefix-default">Amount</label>
  <div class="input-prefix-container">
    <span class="input-prefix" aria-hidden="true">$</span>
    <input class="usa-input" id="input-prefix-default" type="text" inputmode="decimal">
  </div>
</div>

## Default Suffix

<div class="usa-input-suffix">
  <label class="usa-label" for="input-suffix-default">Weight</label>
  <div class="input-suffix-container">
    <input class="usa-input" id="input-suffix-default" type="text" inputmode="decimal">
    <span class="input-suffix" aria-hidden="true">lbs</span>
  </div>
</div>

## Prefix with Hint

<div class="usa-input-prefix">
  <label class="usa-label" for="input-prefix-hint">Price</label>
  <div class="input-prefix-container">
    <span class="input-prefix" aria-hidden="true">$</span>
    <input class="usa-input" id="input-prefix-hint" type="text" aria-describedby="price-hint" inputmode="decimal">
  </div>
  <span class="usa-hint" id="price-hint">Enter the price in dollars.</span>
</div>

## Prefix and Suffix Combined

<div class="usa-input-suffix">
  <label class="usa-label" for="input-prefix-suffix">Dimensions</label>
  <div class="input-prefix-container">
    <span class="input-prefix" aria-hidden="true">W:</span>
    <input class="usa-input" id="input-prefix-suffix" type="text" inputmode="decimal">
    <span class="input-suffix" aria-hidden="true">inches</span>
  </div>
</div>

## Currency Input

<div class="usa-input-prefix">
  <label class="usa-label" for="input-currency">Total cost</label>
  <div class="input-prefix-container">
    <span class="input-prefix" aria-hidden="true">USD $</span>
    <input class="usa-input" id="input-currency" type="text" inputmode="decimal">
  </div>
</div>

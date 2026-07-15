---
layout: sandbox
title: Label
---

# Label

Labels describe form fields and help users understand what information to enter.

## Default Label

<div class="usa-fieldset">
  <label class="usa-label" for="label-default">Full name</label>
  <input class="usa-input" id="label-default" type="text">
</div>

## Required Label

<div class="usa-fieldset">
  <label class="usa-label" for="label-required">
    Email address
    <span class="usa-label--required">*</span>
  </label>
  <input class="usa-input" id="label-required" type="email" required aria-required="true">
</div>

## Label with Hint

<div class="usa-fieldset">
  <label class="usa-label" for="label-hint">Phone number</label>
  <span class="usa-hint" id="label-hint">Include area code</span>
  <input class="usa-input" id="label-hint" type="tel" aria-describedby="label-hint">
</div>

## Label with Error

<div class="usa-fieldset">
  <label class="usa-label usa-label--error" for="label-error">
    Username
    <span class="usa-label--required">*</span>
  </label>
  <span class="usa-error-message" id="label-error-message" role="alert">This field is required.</span>
  <input class="usa-input usa-input--error" id="label-error" type="text" aria-describedby="label-error-message" aria-invalid="true">
</div>

## Large Label

<div class="usa-fieldset">
  <label class="usa-label usa-label--large" for="label-large">Search terms</label>
  <input class="usa-input" id="label-large" type="text">
</div>

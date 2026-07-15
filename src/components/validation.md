---
layout: sandbox
title: Validation
---

# Validation

Form validation communicates errors and successes to help users correct invalid data.

## Error Validation

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Registration form</legend>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="validation-name">
        Full name
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="validation-name-message" role="alert">
        Please enter your full name.
      </span>
      <input class="usa-input usa-input--error" id="validation-name" type="text" aria-describedby="validation-name-message" aria-invalid="true">
    </div>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="validation-email">
        Email address
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="validation-email-message" role="alert">
        Please enter a valid email address.
      </span>
      <input class="usa-input usa-input--error" id="validation-email" type="email" aria-describedby="validation-email-message" aria-invalid="true" value="invalid-email">
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="validation-phone">Phone number</label>
      <input class="usa-input" id="validation-phone" type="tel">
    </div>

    <button class="usa-button" type="submit">Submit</button>
  </fieldset>
</div>

## Success Validation

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Contact form</legend>

    <div class="usa-fieldset usa-fieldset--success">
      <label class="usa-label" for="validation-success-name">Name</label>
      <input class="usa-input usa-input--success" id="validation-success-name" type="text" aria-describedby="validation-success-name-message" value="Jane Smith">
      <span class="usa-input__message" id="validation-success-name-message">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
        Name is valid.
      </span>
    </div>

    <div class="usa-fieldset usa-fieldset--success">
      <label class="usa-label" for="validation-success-email">Email</label>
      <input class="usa-input usa-input--success" id="validation-success-email" type="email" aria-describedby="validation-success-email-message" value="jane@example.gov">
      <span class="usa-input__message" id="validation-success-email-message">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
        Email address is valid.
      </span>
    </div>

    <button class="usa-button" type="submit">Submit</button>
  </fieldset>
</div>

## Validation Summary

<div class="usa-error-summary" role="alert" aria-labelledby="error-summary-title">
  <h2 class="usa-error-summary__heading" id="error-summary-title">There are errors in your form</h2>
  <ul class="usa-error-summary__list">
    <li>
      <a href="#validation-name">Please enter your full name.</a>
    </li>
    <li>
      <a href="#validation-email">Please enter a valid email address.</a>
    </li>
    <li>
      <a href="#validation-password">Password must be at least 8 characters.</a>
    </li>
  </ul>
</div>

## Validation on Select

<div class="usa-form">
  <div class="usa-fieldset usa-fieldset--error">
    <label class="usa-label usa-label--error" for="validation-select">
      State
      <span class="usa-label--required">*</span>
    </label>
    <select class="usa-select usa-input--error" id="validation-select" aria-describedby="validation-select-message" aria-invalid="true">
      <option value>Select a state</option>
      <option value="ca">California</option>
      <option value="ny">New York</option>
      <option value="tx">Texas</option>
    </select>
    <span class="usa-error-message" id="validation-select-message" role="alert">
      Please select a state.
    </span>
  </div>
</div>

## Validation on Textarea

<div class="usa-form">
  <div class="usa-fieldset usa-fieldset--error">
    <label class="usa-label usa-label--error" for="validation-textarea">
      Comments
      <span class="usa-label--required">*</span>
    </label>
    <textarea class="usa-textarea usa-input--error" id="validation-textarea" aria-describedby="validation-textarea-message" aria-invalid="true"></textarea>
    <span class="usa-error-message" id="validation-textarea-message" role="alert">
      Please enter your comments.
    </span>
  </div>
</div>

## Validation with Hint

<div class="usa-form">
  <div class="usa-fieldset usa-fieldset--error">
    <label class="usa-label usa-label--error" for="validation-hint-input">
      Social Security Number
      <span class="usa-label--required">*</span>
    </label>
    <span class="usa-hint" id="validation-hint-input-hint">Format: 000-00-0000</span>
    <span class="usa-error-message" id="validation-hint-input-message" role="alert">
      Please enter a valid Social Security Number.
    </span>
    <input class="usa-input usa-input--error" id="validation-hint-input" type="text" aria-describedby="validation-hint-input-hint validation-hint-input-message" aria-invalid="true" value="123-45">
  </div>
</div>

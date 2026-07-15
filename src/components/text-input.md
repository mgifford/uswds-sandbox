---
layout: sandbox
title: Text Input
---

# Text Input

Text inputs allow users to enter single-line text, numbers, or passwords.

## Default Text Input

<div class="usa-fieldset">
  <label class="usa-label" for="text-input-default">Full name</label>
  <input class="usa-input" id="text-input-default" type="text" name="text-input-default">
</div>

## Text Input with Hint

<div class="usa-fieldset">
  <label class="usa-label" for="text-input-hint">Phone number</label>
  <span class="usa-hint" id="text-input-hint">Include area code</span>
  <input class="usa-input" id="text-input-hint" type="tel" name="text-input-hint" aria-describedby="text-input-hint">
</div>

## Required Text Input

<div class="usa-fieldset">
  <label class="usa-label" for="text-input-required">
    Email address
    <span class="usa-label--required">*</span>
  </label>
  <input class="usa-input" id="text-input-required" type="email" name="text-input-required" required aria-required="true">
</div>

## Error Text Input

<div class="usa-fieldset">
  <label class="usa-label usa-label--error" for="text-input-error">
    Username
    <span class="usa-label--required">*</span>
  </label>
  <span class="usa-error-message" id="text-input-error-message" role="alert">This field is required.</span>
  <input class="usa-input usa-input--error" id="text-input-error" type="text" name="text-input-error" aria-describedby="text-input-error-message" aria-invalid="true">
</div>

## Success Text Input

<div class="usa-fieldset">
  <label class="usa-label" for="text-input-success">Email</label>
  <input class="usa-input usa-input--success" id="text-input-success" type="email" name="text-input-success" aria-describedby="text-input-success-message">
  <span class="usa-input__message" id="text-input-success-message">Success message</span>
</div>

## Disabled Text Input

<div class="usa-fieldset">
  <label class="usa-label" for="text-input-disabled">Disabled field</label>
  <input class="usa-input" id="text-input-disabled" type="text" name="text-input-disabled" disabled>
</div>

## Textarea

<div class="usa-fieldset">
  <label class="usa-label" for="textarea-default">Description</label>
  <textarea class="usa-textarea" id="textarea-default" name="textarea-default"></textarea>
</div>

## Textarea with Character Count

<div class="usa-character-count">
  <div class="usa-fieldset">
    <label class="usa-label" for="textarea-count">Short description</label>
    <textarea class="usa-textarea" id="textarea-count" name="textarea-count" maxlength="100" aria-describedby="textarea-count-hint textarea-count-feedback"></textarea>
  </div>
  <span class="usa-hint" id="textarea-count-hint">Maximum 100 characters</span>
  <span class="usa-character-count__message" id="textarea-count-feedback" aria-live="polite">100 characters allowed</span>
</div>

## Password Input

<div class="usa-fieldset">
  <label class="usa-label" for="password-input">Password</label>
  <input class="usa-input" id="password-input" type="password" name="password-input">
</div>

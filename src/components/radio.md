---
layout: sandbox
title: Radio
---

# Radio

Radio buttons allow users to select exactly one option from a group.

## Default Radio

<div class="usa-fieldset">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Select one option</legend>
    <div class="usa-radio">
      <input class="usa-radio__input" id="radio-default-1" type="radio" name="radio-default" value="option1">
      <label class="usa-radio__label" for="radio-default-1">Option 1</label>
    </div>
    <div class="usa-radio">
      <input class="usa-radio__input" id="radio-default-2" type="radio" name="radio-default" value="option2">
      <label class="usa-radio__label" for="radio-default-2">Option 2</label>
    </div>
    <div class="usa-radio">
      <input class="usa-radio__input" id="radio-default-3" type="radio" name="radio-default" value="option3" disabled>
      <label class="usa-radio__label" for="radio-default-3">Option 3 (disabled)</label>
    </div>
  </fieldset>
</div>

## Radio with Description

<div class="usa-fieldset">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Select delivery method</legend>
    <div class="usa-radio">
      <input class="usa-radio__input" id="radio-desc-1" type="radio" name="radio-desc" value="standard">
      <label class="usa-radio__label" for="radio-desc-1">Standard delivery</label>
      <p class="usa-radio__description">Free delivery within 5-7 business days.</p>
    </div>
    <div class="usa-radio">
      <input class="usa-radio__input" id="radio-desc-2" type="radio" name="radio-desc" value="express">
      <label class="usa-radio__label" for="radio-desc-2">Express delivery</label>
      <p class="usa-radio__description">Priority delivery within 1-2 business days. Additional fees may apply.</p>
    </div>
  </fieldset>
</div>

## Tile Radio

<div class="usa-fieldset">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Select a plan</legend>
    <div class="usa-radio usa-radio--tile">
      <input class="usa-radio__input" id="radio-tile-1" type="radio" name="radio-tile" value="basic">
      <label class="usa-radio__label" for="radio-tile-1">
        <span class="usa-radio__label-text">Basic Plan</span>
        <span class="usa-radio__description">Free for personal use</span>
      </label>
    </div>
    <div class="usa-radio usa-radio--tile">
      <input class="usa-radio__input" id="radio-tile-2" type="radio" name="radio-tile" value="pro">
      <label class="usa-radio__label" for="radio-tile-2">
        <span class="usa-radio__label-text">Pro Plan</span>
        <span class="usa-radio__description">$9.99/month for professional use</span>
      </label>
    </div>
    <div class="usa-radio usa-radio--tile">
      <input class="usa-radio__input" id="radio-tile-3" type="radio" name="radio-tile" value="enterprise">
      <label class="usa-radio__label" for="radio-tile-3">
        <span class="usa-radio__label-text">Enterprise Plan</span>
        <span class="usa-radio__description">Custom pricing for organizations</span>
      </label>
    </div>
  </fieldset>
</div>

## Radio with Validation

<div class="usa-fieldset">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Required selection</legend>
    <div class="usa-radio usa-radio--input-error">
      <input class="usa-radio__input usa-radio__input--error" id="radio-error-1" type="radio" name="radio-error" value="yes" aria-describedby="radio-error-msg">
      <label class="usa-radio__label" for="radio-error-1">Yes</label>
    </div>
    <div class="usa-radio usa-radio--input-error">
      <input class="usa-radio__input usa-radio__input--error" id="radio-error-2" type="radio" name="radio-error" value="no" aria-describedby="radio-error-msg">
      <label class="usa-radio__label" for="radio-error-2">No</label>
    </div>
    <span class="usa-input__message" id="radio-error-msg" role="alert">Please select an option.</span>
  </fieldset>
</div>

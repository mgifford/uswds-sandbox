---
layout: sandbox
title: Form
---

# Form

Forms allow users to enter and submit data. USWDS provides form components and layouts to ensure accessibility and usability.

## Basic Form Layout

<form class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-sans">Personal information</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="first-name">First name</label>
      <input class="usa-input" id="first-name" name="first-name" type="text">
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="last-name">Last name</label>
      <input class="usa-input" id="last-name" name="last-name" type="text">
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="email">Email address</label>
      <input class="usa-input" id="email" name="email" type="email">
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="phone">Phone number</label>
      <input class="usa-input" id="phone" name="phone" type="tel">
    </div>
    <button class="usa-button" type="submit">Submit</button>
  </fieldset>
</form>

## Form with Select

<form class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Application details</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="form-select">Select an option</label>
      <select class="usa-select" id="form-select" name="form-select">
        <option value>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="form-textarea">Description</label>
      <textarea class="usa-textarea" id="form-textarea" name="form-textarea"></textarea>
    </div>
  </fieldset>
</form>

## Inline Form

<form class="usa-form usa-form--inline">
  <label class="usa-label" for="inline-search">Search</label>
  <input class="usa-input" id="inline-search" name="inline-search" type="search">
  <button class="usa-button" type="submit">Search</button>
</form>

## Form with Fieldset

<form class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Mailing address</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="street-address">Street address</label>
      <input class="usa-input" id="street-address" name="street-address" type="text">
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="city">City</label>
      <input class="usa-input" id="city" name="city" type="text">
    </div>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="state">State</label>
          <select class="usa-select" id="state" name="state">
            <option value>Select a state</option>
            <option value="al">Alabama</option>
            <option value="ak">Alaska</option>
            <option value="az">Arizona</option>
          </select>
        </div>
      </div>
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="zip">ZIP code</label>
          <input class="usa-input" id="zip" name="zip" type="text" pattern="[0-9]{5}">
        </div>
      </div>
    </div>
  </fieldset>
</form>

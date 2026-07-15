---
layout: sandbox
title: Dropdown
---

# Dropdown

Dropdowns allow users to select one option from a list of options.

## Default Dropdown

<div class="usa-fieldset">
  <label class="usa-label" for="dropdown-default">Select an option</label>
  <select class="usa-select" id="dropdown-default" name="dropdown-default">
    <option value>Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </select>
</div>

## Dropdown with Option Groups

<div class="usa-fieldset">
  <label class="usa-label" for="dropdown-grouped">Select a fruit</label>
  <select class="usa-select" id="dropdown-grouped" name="dropdown-grouped">
    <option value>Select a fruit</option>
    <optgroup label="Citrus">
      <option value="orange">Orange</option>
      <option value="lemon">Lemon</option>
      <option value="lime">Lime</option>
    </optgroup>
    <optgroup label="Berries">
      <option value="strawberry">Strawberry</option>
      <option value="blueberry">Blueberry</option>
      <option value="raspberry">Raspberry</option>
    </optgroup>
  </select>
</div>

## Disabled Dropdown

<div class="usa-fieldset">
  <label class="usa-label" for="dropdown-disabled">Disabled select</label>
  <select class="usa-select" id="dropdown-disabled" name="dropdown-disabled" disabled>
    <option value>Select an option</option>
    <option value="option1">Option 1</option>
  </select>
</div>

## Dropdown with Validation

<div class="usa-fieldset">
  <label class="usa-label" for="dropdown-required">Required field</label>
  <select class="usa-select usa-input--error" id="dropdown-required" name="dropdown-required" aria-describedby="dropdown-error-msg">
    <option value>Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <span class="usa-input__message" id="dropdown-error-msg">This field is required.</span>
</div>

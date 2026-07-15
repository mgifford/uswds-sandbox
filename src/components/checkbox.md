---
layout: sandbox
title: Checkbox
---

# Checkbox

Checkboxes allow users to select one or more options from a list.

## Default Checkbox

<div class="usa-fieldset">
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="check-default" type="checkbox" name="check-default">
    <label class="usa-checkbox__label" for="check-default">Default checkbox</label>
  </div>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="check-checked" type="checkbox" name="check-checked" checked>
    <label class="usa-checkbox__label" for="check-checked">Checked checkbox</label>
  </div>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="check-disabled" type="checkbox" name="check-disabled" disabled>
    <label class="usa-checkbox__label" for="check-disabled">Disabled checkbox</label>
  </div>
</div>

## Checkbox Group

<fieldset class="usa-fieldset">
  <legend class="usa-legend">Select all that apply</legend>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="group-check-1" type="checkbox" name="group-check">
    <label class="usa-checkbox__label" for="group-check-1">Option one</label>
  </div>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="group-check-2" type="checkbox" name="group-check">
    <label class="usa-checkbox__label" for="group-check-2">Option two</label>
  </div>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="group-check-3" type="checkbox" name="group-check">
    <label class="usa-checkbox__label" for="group-check-3">Option three</label>
  </div>
</fieldset>

## Checkbox with Description

<div class="usa-fieldset">
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="check-desc-1" type="checkbox" name="check-desc">
    <label class="usa-checkbox__label" for="check-desc-1">Option with description</label>
    <p class="usa-checkbox__description">This is an optional description that provides more information about this option.</p>
  </div>
  <div class="usa-checkbox">
    <input class="usa-checkbox__input" id="check-desc-2" type="checkbox" name="check-desc">
    <label class="usa-checkbox__label" for="check-desc-2">Another option</label>
    <p class="usa-checkbox__description">Additional context for this selection.</p>
  </div>
</div>

## Tile Checkbox

<div class="usa-fieldset">
  <div class="usa-checkbox usa-checkbox--tile">
    <input class="usa-checkbox__input" id="tile-check-1" type="checkbox" name="tile-check">
    <label class="usa-checkbox__label" for="tile-check-1">
      <span class="usa-checkbox__label-text">Tile option one</span>
      <span class="usa-checkbox__description">This is a tile-style checkbox that can include a description.</span>
    </label>
  </div>
  <div class="usa-checkbox usa-checkbox--tile">
    <input class="usa-checkbox__input" id="tile-check-2" type="checkbox" name="tile-check">
    <label class="usa-checkbox__label" for="tile-check-2">
      <span class="usa-checkbox__label-text">Tile option two</span>
      <span class="usa-checkbox__description">Select this option for an alternative choice.</span>
    </label>
  </div>
</div>

## Validation

<div class="usa-fieldset">
  <div class="usa-checkbox usa-checkbox--input-error">
    <input class="usa-checkbox__input usa-input--error" id="check-error" type="checkbox" name="check-error" aria-describedby="check-error-msg">
    <label class="usa-checkbox__label" for="check-error">Required checkbox</label>
    <p class="usa-checkbox__description usa-input__message" id="check-error-msg">This field is required.</p>
  </div>
</div>

---
layout: sandbox
title: Range Slider
---

# Range Slider

Range sliders allow users to select a value from a range by moving a slider thumb.

## Default Range Slider

<div class="usa-range" role="group" aria-labelledby="range-label">
  <label class="usa-label" id="range-label" for="range-default">Example range</label>
  <input class="usa-range" id="range-default" type="range" min="0" max="100" step="1" value="50">
</div>

## Range with Value Display

<div class="usa-range" role="group" aria-labelledby="range-value-label">
  <label class="usa-label" id="range-value-label" for="range-value">Select value</label>
  <input class="usa-range" id="range-value" type="range" min="0" max="100" step="5" value="25" aria-valuetext="25">
  <div class="text-base font-body-xs">Value: <span id="range-value-display">25</span></div>
</div>

## Range with Step Markers

<div class="usa-range" role="group" aria-labelledby="range-step-label">
  <label class="usa-label" id="range-step-label" for="range-step">Rating (0-10)</label>
  <input class="usa-range usa-range--step" id="range-step" type="range" min="0" max="10" step="1" value="5">
</div>

## Disabled Range

<div class="usa-range" role="group" aria-labelledby="range-disabled-label">
  <label class="usa-label" id="range-disabled-label" for="range-disabled">Disabled range</label>
  <input class="usa-range" id="range-disabled" type="range" min="0" max="100" step="1" value="50" disabled>
</div>

## Range with Custom Min/Max

<div class="usa-range" role="group" aria-labelledby="range-custom-label">
  <label class="usa-label" id="range-custom-label" for="range-custom">Temperature (°F)</label>
  <input class="usa-range" id="range-custom" type="range" min="-20" max="120" step="1" value="72" aria-valuetext="72 degrees Fahrenheit">
  <div class="text-base font-body-xs">Temperature: <span id="range-custom-display">72</span>°F</div>
</div>

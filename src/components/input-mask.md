---
layout: sandbox
title: Input Mask
---

# Input Mask

Input masks help users format input values like dates, phone numbers, and social security numbers.

## Default Input Mask

<div class="usa-input-mask">
  <label class="usa-label" for="input-mask-default">Phone number</label>
  <input class="usa-input" id="input-mask-default" type="text" data-mask="000-000-0000" aria-describedby="input-mask-default-hint" inputmode="numeric">
  <span class="usa-hint" id="input-mask-default-hint">Enter a phone number in the format 000-000-0000.</span>
</div>

## Social Security Number Mask

<div class="usa-input-mask">
  <label class="usa-label" for="input-mask-ssn">Social Security Number</label>
  <input class="usa-input" id="input-mask-ssn" type="text" data-mask="000-00-0000" aria-describedby="input-mask-ssn-hint" inputmode="numeric">
  <span class="usa-hint" id="input-mask-ssn-hint">Enter a Social Security Number in the format 000-00-0000.</span>
</div>

## ZIP Code Mask

<div class="usa-input-mask">
  <label class="usa-label" for="input-mask-zip">ZIP code</label>
  <input class="usa-input" id="input-mask-zip" type="text" data-mask="00000-0000" aria-describedby="input-mask-zip-hint" inputmode="numeric">
  <span class="usa-hint" id="input-mask-zip-hint">Enter a ZIP code in the format 00000-0000.</span>
</div>

## Date Mask

<div class="usa-input-mask">
  <label class="usa-label" for="input-mask-date">Date</label>
  <input class="usa-input" id="input-mask-date" type="text" data-mask="00/00/0000" aria-describedby="input-mask-date-hint" inputmode="numeric">
  <span class="usa-hint" id="input-mask-date-hint">Enter a date in the format MM/DD/YYYY.</span>
</div>

## Custom Mask

<div class="usa-input-mask">
  <label class="usa-label" for="input-mask-custom">Part number</label>
  <input class="usa-input" id="input-mask-custom" type="text" data-mask="AAA-000-AAA" aria-describedby="input-mask-custom-hint">
  <span class="usa-hint" id="input-mask-custom-hint">Enter a part number in the format AAA-000-AAA.</span>
</div>

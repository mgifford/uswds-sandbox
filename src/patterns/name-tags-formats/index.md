---
layout: sandbox
title: Name Tags/Formats
---

# Name Tags and Formats

Name display patterns show how to properly format and display personal names in various contexts, including formal documents, informal interactions, and government forms.

## Name Display Formats

Different ways to display names based on context.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Formal format</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Mr. James Robert Smith</p>
          <p class="usa-text-small">Used in official documents, formal correspondence, and legal papers.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Professional format</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">James R. Smith</p>
          <p class="usa-text-small">Used in business communications, email signatures, and professional contexts.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Informal format</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Jim Smith</p>
          <p class="usa-text-small">Used in casual settings, team communications, and internal tools.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Name Tag Display

A visual name tag pattern for events and conferences.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card" style="border: 2px solid #005ea2; padding: 1rem;">
      <div class="usa-card__container">
        <div class="usa-card__body" style="text-align: center;">
          <p class="usa-text-small usa-text-secondary">GENCY NAME</p>
          <p class="usa-text-bold usa-text-large">Jane Smith</p>
          <p class="usa-text-small">Director of Engineering</p>
          <hr class="usa-divider">
          <p class="usa-text-small">jane.smith@agency.gov</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card" style="border: 2px solid #d83933; padding: 1rem;">
      <div class="usa-card__container">
        <div class="usa-card__body" style="text-align: center;">
          <span class="usa-tag usa-tag--emergency">SPEAKER</span>
          <p class="usa-text-bold usa-text-large">John Doe</p>
          <p class="usa-text-small">Chief Technology Officer</p>
          <hr class="usa-divider">
          <p class="usa-text-small">john.doe@agency.gov</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card" style="border: 2px solid #00a91c; padding: 1rem;">
      <div class="usa-card__container">
        <div class="usa-card__body" style="text-align: center;">
          <span class="usa-tag usa-tag--success">ATTENDEE</span>
          <p class="usa-text-bold usa-text-large">Emily Chen</p>
          <p class="usa-text-small">Product Manager</p>
          <hr class="usa-divider">
          <p class="usa-text-small">emily.chen@agency.gov</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Name Format in Forms

A form demonstrating proper name field organization.

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Name information</legend>
    <p class="usa-text-small usa-text-secondary">Enter your name as it appears on official documents</p>

    <div class="grid-row grid-gap">
      <div class="grid-col-4">
        <div class="usa-fieldset">
          <label class="usa-label" for="name-prefix">Prefix</label>
          <select class="usa-select" id="name-prefix" name="name-prefix">
            <option value="">--</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="ms">Ms.</option>
            <option value="dr">Dr.</option>
            <option value="rev">Rev.</option>
          </select>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="usa-fieldset">
          <label class="usa-label" for="name-first">First name</label>
          <input class="usa-input" id="name-first" name="name-first" type="text" autocomplete="given-name" required>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="usa-fieldset">
          <label class="usa-label" for="name-middle">Middle name</label>
          <input class="usa-input" id="name-middle" name="name-middle" type="text" autocomplete="additional-name">
        </div>
      </div>
    </div>

    <div class="grid-row grid-gap">
      <div class="grid-col-8">
        <div class="usa-fieldset">
          <label class="usa-label" for="name-last">Last name</label>
          <input class="usa-input" id="name-last" name="name-last" type="text" autocomplete="family-name" required>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="usa-fieldset">
          <label class="usa-label" for="name-suffix">Suffix</label>
          <select class="usa-select" id="name-suffix" name="name-suffix">
            <option value="">--</option>
            <option value="jr">Jr.</option>
            <option value="sr">Sr.</option>
            <option value="ii">II</option>
            <option value="iii">III</option>
            <option value="phd">Ph.D.</option>
            <option value="md">M.D.</option>
          </select>
        </div>
      </div>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="name-preferred">Preferred name</label>
      <span class="usa-hint" id="name-preferred-hint">Optional: What should we call you?</span>
      <input class="usa-input" id="name-preferred" name="name-preferred" type="text" aria-describedby="name-preferred-hint">
    </div>

    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Save name</button>
    </div>
  </fieldset>
</div>

## Name Display in Directory

A directory-style name display with roles and contact information.

<table class="usa-table usa-table--striped">
  <caption>Staff directory</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Department</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <p class="usa-text-bold">Sarah Johnson</p>
        <p class="usa-text-small usa-text-secondary">Preferred: Sarah</p>
      </th>
      <td>Program Manager</td>
      <td>Office of Digital Services</td>
      <td><a href="mailto:sarah.johnson@agency.gov">sarah.johnson@agency.gov</a></td>
    </tr>
    <tr>
      <th scope="row">
        <p class="usa-text-bold">Michael Chen</p>
        <p class="usa-text-small usa-text-secondary">Preferred: Mike</p>
      </th>
      <td>Senior Developer</td>
      <td>Engineering</td>
      <td><a href="mailto:michael.chen@agency.gov">michael.chen@agency.gov</a></td>
    </tr>
    <tr>
      <th scope="row">
        <p class="usa-text-bold">Dr. Patricia Williams</p>
        <p class="usa-text-small usa-text-secondary">Preferred: Dr. Williams</p>
      </th>
      <td>Chief Medical Officer</td>
      <td>Health Services</td>
      <td><a href="mailto:patricia.williams@agency.gov">patricia.williams@agency.gov</a></td>
    </tr>
  </tbody>
</table>

## Accessibility Considerations

- Use `autocomplete="given-name"` and `autocomplete="family-name"` for name fields
- Provide both formal and informal name options where appropriate
- Use clear labels for name field sections
- Consider cultural naming conventions when designing name forms
- Ensure name displays handle long names gracefully

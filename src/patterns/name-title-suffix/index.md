---
layout: sandbox
title: Name Title Suffix
---

# Name with Title and Suffix

This pattern demonstrates how to properly display and collect names that include professional titles, academic credentials, and generational suffixes.

## Name Format Examples

Different combinations of names with titles and suffixes.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Professional title</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Dr. Robert James Smith, M.D.</p>
          <p class="usa-text-small usa-text-secondary">Medical doctor with professional suffix</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Academic title</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Professor Jane Doe, Ph.D.</p>
          <p class="usa-text-small usa-text-secondary">Academic with doctoral degree</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Generational suffix</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">James Smith Jr.</p>
          <p class="usa-text-small usa-text-secondary">Name with generational suffix</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Complete Name Form with Titles and Suffixes

A comprehensive form for collecting names with all possible components.

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Personal identification</legend>
    <p>Enter your full legal name as it appears on your government-issued ID</p>

    <div class="grid-row grid-gap">
      <div class="grid-col-3">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-prefix">Prefix</label>
          <select class="usa-select" id="full-prefix" name="full-prefix">
            <option value="">-- Select --</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="ms">Ms.</option>
            <option value="dr">Dr.</option>
            <option value="prof">Prof.</option>
            <option value="hon">Hon.</option>
            <option value="rev">Rev.</option>
          </select>
        </div>
      </div>
      <div class="grid-col-5">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-first">First name</label>
          <input class="usa-input" id="full-first" name="full-first" type="text" autocomplete="given-name" required>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-middle">Middle name</label>
          <input class="usa-input" id="full-middle" name="full-middle" type="text" autocomplete="additional-name">
        </div>
      </div>
    </div>

    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-last">Last name</label>
          <input class="usa-input" id="full-last" name="full-last" type="text" autocomplete="family-name" required>
        </div>
      </div>
      <div class="grid-col-3">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-suffix">Suffix</label>
          <select class="usa-select" id="full-suffix" name="full-suffix">
            <option value="">-- Select --</option>
            <option value="jr">Jr.</option>
            <option value="sr">Sr.</option>
            <option value="ii">II</option>
            <option value="iii">III</option>
            <option value="iv">IV</option>
          </select>
        </div>
      </div>
      <div class="grid-col-3">
        <div class="usa-fieldset">
          <label class="usa-label" for="full-credential">Credential</label>
          <select class="usa-select" id="full-credential" name="full-credential">
            <option value="">-- Select --</option>
            <option value="phd">Ph.D.</option>
            <option value="md">M.D.</option>
            <option value="jd">J.D.</option>
            <option value="mba">MBA</option>
            <option value="mpa">MPA</option>
            <option value="pe">P.E.</option>
          </select>
        </div>
      </div>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="full-preferred">Preferred display name</label>
      <span class="usa-hint" id="full-preferred-hint">How would you like to be addressed? (e.g., "Dr. Smith" or "Bob")</span>
      <input class="usa-input" id="full-preferred" name="full-preferred" type="text" aria-describedby="full-preferred-hint">
    </div>

    <div class="usa-alert usa-alert--info usa-alert--slim" role="status">
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>Note:</strong> Your legal name will appear on official documents. The preferred name is used for informal communications.</p>
      </div>
    </div>

    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Save name information</button>
    </div>
  </fieldset>
</div>

## Name Display Formats Table

A reference table showing how different name components are displayed.

<table class="usa-table usa-table--striped">
  <caption>Name format examples</caption>
  <thead>
    <tr>
      <th scope="col">Format type</th>
      <th scope="col">Example</th>
      <th scope="col">Usage context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Full legal</th>
      <td>Robert James Smith III, Ph.D.</td>
      <td>Legal documents, contracts</td>
    </tr>
    <tr>
      <th scope="row">Professional</th>
      <td>Dr. Robert Smith</td>
      <td>Business correspondence, directories</td>
    </tr>
    <tr>
      <th scope="row">Formal</th>
      <td>Mr. Robert Smith</td>
      <td>Formal letters, ceremonies</td>
    </tr>
    <tr>
      <th scope="row">Standard</th>
      <td>Robert Smith</td>
      <td>General use, email</td>
    </tr>
    <tr>
      <th scope="row">Informal</th>
      <td>Bob Smith</td>
      <td>Casual interactions, teams</td>
    </tr>
    <tr>
      <th scope="row">Last name only</th>
      <td>Smith</td>
      <td>Formal introductions, rosters</td>
    </tr>
  </tbody>
</table>

## Name with Honorifics

A pattern for displaying names with military or government honorifics.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Military rank</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">Colonel (Ret.) James Smith</p>
          <p class="usa-text-small usa-text-secondary">Former military personnel use rank with retirement indicator</p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Government title</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-bold">The Honorable Jane Smith</p>
          <p class="usa-text-small usa-text-secondary">Used for appointed officials and judges</p>
        </div>
      </div>
    </div>
  </div>
</div>

## Name in Signature Block

A professional signature block pattern.

<div class="usa-card" style="border-left: 4px solid #005ea2; padding: 1rem;">
  <div class="usa-card__container">
    <div class="usa-card__body">
      <p class="usa-text-bold">James Robert Smith, Ph.D.</p>
      <p>Director, Office of Technology</p>
      <p>General Services Administration</p>
      <p>james.smith@gsa.gov</p>
      <p>(202) 555-0123</p>
    </div>
  </div>
</div>

## Accessibility Considerations

- Use separate fields for each name component (prefix, first, middle, last, suffix)
- Implement `autocomplete` attributes for each name field
- Provide clear labels explaining each field's purpose
- Allow flexible input for names with special characters or non-Western naming conventions
- Ensure name displays truncate gracefully on mobile devices
- Consider right-to-left languages when designing name display patterns

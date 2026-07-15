---
layout: sandbox
title: Create a Form
---

# Create a Form

Form creation patterns demonstrate different field types, layouts, and validation approaches for building accessible government forms.

## Complete Registration Form

A comprehensive form with multiple field types demonstrating common patterns.

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Account registration</legend>
    <p><span class="usa-label--required">*</span> indicates a required field</p>

    <div class="usa-fieldset">
      <label class="usa-label" for="reg-first-name">First name</label>
      <input class="usa-input" id="reg-first-name" name="reg-first-name" type="text" autocomplete="given-name" required>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="reg-last-name">Last name</label>
      <input class="usa-input" id="reg-last-name" name="reg-last-name" type="text" autocomplete="family-name" required>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="reg-email">Email address</label>
      <span class="usa-hint" id="reg-email-hint">Use your work or .gov email</span>
      <input class="usa-input" id="reg-email" name="reg-email" type="email" autocomplete="email" aria-describedby="reg-email-hint" required>
    </div>

    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="reg-password">Password</label>
          <span class="usa-hint" id="reg-password-hint">At least 12 characters</span>
          <input class="usa-input" id="reg-password" name="reg-password" type="password" autocomplete="new-password" aria-describedby="reg-password-hint" required>
        </div>
      </div>
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="reg-confirm-password">Confirm password</label>
          <input class="usa-input" id="reg-confirm-password" name="reg-confirm-password" type="password" autocomplete="new-password" required>
        </div>
      </div>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="reg-role">Role</label>
      <select class="usa-select" id="reg-role" name="reg-role" required>
        <option value="">-- Select a role --</option>
        <option value="user">Standard user</option>
        <option value="admin">Administrator</option>
        <option value="manager">Manager</option>
      </select>
    </div>

    <div class="usa-fieldset">
      <legend class="usa-legend usa-legend--sm">Notifications</legend>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="reg-notify-email" type="checkbox" name="reg-notify-email" value="email" checked>
        <label class="usa-checkbox__label" for="reg-notify-email">Email notifications</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="reg-notify-sms" type="checkbox" name="reg-notify-sms" value="sms">
        <label class="usa-checkbox__label" for="reg-notify-sms">SMS notifications</label>
      </div>
    </div>

    <div class="usa-fieldset">
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--sm">Preferred contact method</legend>
        <div class="usa-radio">
          <input class="usa-radio__input" id="reg-contact-email" type="radio" name="reg-contact" value="email" checked>
          <label class="usa-radio__label" for="reg-contact-email">Email</label>
        </div>
        <div class="usa-radio">
          <input class="usa-radio__input" id="reg-contact-phone" type="radio" name="reg-contact" value="phone">
          <label class="usa-radio__label" for="reg-contact-phone">Phone</label>
        </div>
      </fieldset>
    </div>

    <div class="usa-fieldset">
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="reg-terms" type="checkbox" name="reg-terms" required>
        <label class="usa-checkbox__label" for="reg-terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a></label>
      </div>
    </div>

    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Create account</button>
      <button class="usa-button usa-button--unstyled" type="reset">Clear form</button>
    </div>
  </fieldset>
</div>

## Form with Input Groups

Forms using input prefixes and suffixes for better context.

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Payment information</legend>

    <div class="usa-fieldset">
      <label class="usa-label" for="payment-amount">Amount</label>
      <div class="usa-input-group">
        <div class="usa-input-prefix" aria-hidden="true">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#attach_money"></use></svg>
        </div>
        <input class="usa-input" id="payment-amount" name="payment-amount" type="number" min="0" step="0.01" required>
      </div>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="payment-routing">Routing number</label>
      <span class="usa-hint" id="payment-routing-hint">9-digit routing number</span>
      <div class="usa-input-group">
        <input class="usa-input" id="payment-routing" name="payment-routing" type="text" pattern="[0-9]{9}" maxlength="9" aria-describedby="payment-routing-hint">
        <div class="usa-input-suffix" aria-hidden="true">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#help"></use></svg>
        </div>
      </div>
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="payment-phone">Phone number</label>
      <div class="usa-input-group">
        <div class="usa-input-prefix" aria-hidden="true">+1</div>
        <input class="usa-input" id="payment-phone" name="payment-phone" type="tel" autocomplete="tel">
      </div>
    </div>

    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Process payment</button>
    </div>
  </fieldset>
</div>

## Form with Character Count

A form with a textarea that includes a character counter.

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Provide feedback</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="feedback-text">Comments</label>
      <span class="usa-hint" id="feedback-text-hint">Maximum 500 characters</span>
      <textarea class="usa-textarea" id="feedback-text" name="feedback-text" maxlength="500" aria-describedby="feedback-text-hint" rows="5"></textarea>
      <span class="usa-character-count" data-character-count data-target="feedback-text">0 of 500 characters used</span>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Submit feedback</button>
    </div>
  </fieldset>
</div>

## Multi-Section Form

A form organized into multiple sections with a step indicator.

<nav class="usa-step-indicator" aria-label="Form progress">
  <ol class="usa-step-indicator__segments">
    <li class="usa-step-indicator__segment usa-step-indicator__segment--complete" aria-current="false">
      <span class="usa-step-indicator__segment-label">Personal info</span>
    </li>
    <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="step">
      <span class="usa-step-indicator__segment-label">Contact details</span>
    </li>
    <li class="usa-step-indicator__segment" aria-current="false">
      <span class="usa-step-indicator__segment-label">Review</span>
    </li>
  </ol>
  <div class="usa-step-indicator__body">
    <p><strong>Step 2 of 3:</strong> Contact details</p>
  </div>
</nav>

<div class="usa-form usa-form--large margin-top-2">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Contact details</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="multi-street">Street address</label>
      <input class="usa-input" id="multi-street" name="multi-street" type="text" autocomplete="street-address">
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="multi-city">City</label>
      <input class="usa-input" id="multi-city" name="multi-city" type="text" autocomplete="address-level2">
    </div>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="multi-state">State</label>
          <select class="usa-select" id="multi-state" name="multi-state" autocomplete="address-level1">
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
          </select>
        </div>
      </div>
      <div class="grid-col-6">
        <div class="usa-fieldset">
          <label class="usa-label" for="multi-zip">ZIP code</label>
          <input class="usa-input" id="multi-zip" name="multi-zip" type="text" pattern="[0-9]{5}" autocomplete="postal-code">
        </div>
      </div>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Continue to review</button>
      <button class="usa-button usa-button--unstyled" type="button">Back</button>
    </div>
  </fieldset>
</div>

## Form with Conditional Fields

A form that shows/hides fields based on user selection.

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Report type</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="report-type">What would you like to report?</label>
      <select class="usa-select" id="report-type" name="report-type">
        <option value="">-- Select a type --</option>
        <option value="bug">Bug or technical issue</option>
        <option value="feature">Feature request</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="usa-fieldset" id="report-bug-fields" style="display: none;">
      <label class="usa-label" for="bug-url">Page URL</label>
      <input class="usa-input" id="bug-url" name="bug-url" type="url">
    </div>
    <div class="usa-fieldset" id="report-feature-fields" style="display: none;">
      <label class="usa-label" for="feature-priority">Priority</label>
      <select class="usa-select" id="feature-priority" name="feature-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="report-description">Description</label>
      <textarea class="usa-textarea" id="report-description" name="report-description" required></textarea>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Submit report</button>
    </div>
  </fieldset>
</div>

## Accessibility Considerations

- Use `autocomplete` attributes on all personal data fields
- Group related fields with `fieldset` and `legend`
- Provide hint text for format requirements
- Use `aria-describedby` to associate hints and errors with inputs
- Ensure form labels are properly associated with inputs
- Use `aria-required` for required fields in addition to visual indicators
- Test keyboard navigation and screen reader compatibility

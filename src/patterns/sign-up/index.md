---
layout: sandbox
title: Sign Up
---

# Sign Up

Sign up pages guide new users through account registration. This pattern demonstrates multi-step registration, validation, and accessible form design.

## Basic Sign Up Form

A simple registration form for creating a new account.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Create your account</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="signup-email">Email address</label>
              <span class="usa-hint" id="signup-email-hint">Use your work or .gov email</span>
              <input class="usa-input" id="signup-email" name="signup-email" type="email" autocomplete="email" aria-describedby="signup-email-hint" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="signup-password">Password</label>
              <span class="usa-hint" id="signup-password-hint">At least 12 characters with uppercase, lowercase, and numbers</span>
              <input class="usa-input" id="signup-password" name="signup-password" type="password" autocomplete="new-password" aria-describedby="signup-password-hint" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="signup-confirm">Confirm password</label>
              <input class="usa-input" id="signup-confirm" name="signup-confirm" type="password" autocomplete="new-password" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Create account</button>
            </div>
          </form>

          <hr class="usa-divider">

          <p class="usa-text-center">Already have an account? <a href="/patterns/sign-in/">Sign in</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

## Multi-Step Registration

A multi-step registration form with progress indicator.

<nav class="usa-step-indicator" aria-label="Registration progress">
  <ol class="usa-step-indicator__segments">
    <li class="usa-step-indicator__segment usa-step-indicator__segment--complete" aria-current="false">
      <span class="usa-step-indicator__segment-label">Account</span>
    </li>
    <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="step">
      <span class="usa-step-indicator__segment-label">Profile</span>
    </li>
    <li class="usa-step-indicator__segment" aria-current="false">
      <span class="usa-step-indicator__segment-label">Verification</span>
    </li>
  </ol>
  <div class="usa-step-indicator__body">
    <p><strong>Step 2 of 3:</strong> Complete your profile</p>
  </div>
</nav>

<div class="grid-grid-row margin-top-2">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Complete your profile</h2>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="grid-row grid-gap">
              <div class="grid-col-6">
                <div class="usa-fieldset">
                  <label class="usa-label" for="profile-first">First name</label>
                  <input class="usa-input" id="profile-first" name="profile-first" type="text" autocomplete="given-name" required>
                </div>
              </div>
              <div class="grid-col-6">
                <div class="usa-fieldset">
                  <label class="usa-label" for="profile-last">Last name</label>
                  <input class="usa-input" id="profile-last" name="profile-last" type="text" autocomplete="family-name" required>
                </div>
              </div>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="profile-org">Organization</label>
              <input class="usa-input" id="profile-org" name="profile-org" type="text" autocomplete="organization" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="profile-role">Role</label>
              <select class="usa-select" id="profile-role" name="profile-role" required>
                <option value="">-- Select a role --</option>
                <option value="user">Standard user</option>
                <option value="admin">Administrator</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Continue to verification</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign Up with Validation Errors

A registration form showing validation errors.

<div class="usa-error-summary" role="alert" aria-labelledby="signup-error-title">
  <h2 class="usa-error-summary__heading" id="signup-error-title">Please correct the following errors</h2>
  <ul class="usa-error-summary__list">
    <li><a href="#error-signup-email">Please enter a valid email address</a></li>
    <li><a href="#error-signup-password">Password must be at least 12 characters</a></li>
    <li><a href="#error-signup-confirm">Passwords do not match</a></li>
    <li><a href="#error-signup-terms">You must agree to the terms of service</a></li>
  </ul>
</div>

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Create your account</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="error-signup-email">
                Email address
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="error-signup-email-error" role="alert">
                Please enter a valid email address.
              </span>
              <input class="usa-input usa-input--error" id="error-signup-email" name="error-signup-email" type="email" aria-describedby="error-signup-email-error" aria-invalid="true" value="invalid-email">
            </div>
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="error-signup-password">
                Password
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="error-signup-password-error" role="alert">
                Password must be at least 12 characters.
              </span>
              <input class="usa-input usa-input--error" id="error-signup-password" name="error-signup-password" type="password" aria-describedby="error-signup-password-error" aria-invalid="true" value="short">
            </div>
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="error-signup-confirm">
                Confirm password
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="error-signup-confirm-error" role="alert">
                Passwords do not match.
              </span>
              <input class="usa-input usa-input--error" id="error-signup-confirm" name="error-signup-confirm" type="password" aria-describedby="error-signup-confirm-error" aria-invalid="true" value="different">
            </div>
            <div class="usa-fieldset usa-fieldset--error">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input usa-checkbox__input--error" id="error-signup-terms" type="checkbox" name="error-signup-terms" aria-describedby="error-signup-terms-error" aria-invalid="true">
                <label class="usa-checkbox__label usa-checkbox__label--error" for="error-signup-terms">
                  I agree to the <a href="#">terms of service</a>
                </label>
              </div>
              <span class="usa-error-message" id="error-signup-terms-error" role="alert">
                You must agree to the terms of service.
              </span>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign Up with External Identity Provider

A registration page offering multiple sign-up methods.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Create an account</h1>
        </header>
        <div class="usa-card__body">
          <p>Choose how you want to create your account:</p>

          <div class="usa-button-group usa-button-group--stacked">
            <button class="usa-button usa-button--outline usa-button--full-width" type="button">
              <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#login"></use></svg>
              Sign up with Login.gov
            </button>
            <button class="usa-button usa-button--outline usa-button--full-width" type="button">
              <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#badge"></use></svg>
              Sign up with ID.me
            </button>
          </div>

          <hr class="usa-divider">

          <p class="usa-text-center usa-text-small">Or create an account with your email</p>

          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="direct-email">Email address</label>
              <input class="usa-input" id="direct-email" name="direct-email" type="email" autocomplete="email">
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--secondary usa-button--full-width" type="submit">Continue with email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign Up Confirmation

A confirmation page after successful registration.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Check your email</h1>
        </header>
        <div class="usa-card__body">
          <div class="usa-alert usa-alert--success" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">We've sent a verification link to j***@email.gov</p>
            </div>
          </div>
          <p>Click the link in the email to verify your account and complete registration.</p>
          <p class="usa-text-small">The verification link will expire in 24 hours. If you don't see the email, check your spam folder.</p>
          <div class="usa-fieldset">
            <button class="usa-button usa-button--outline usa-button--full-width" type="button">Resend verification email</button>
          </div>
          <hr class="usa-divider">
          <p class="usa-text-center"><a href="/patterns/sign-in/">Back to sign in</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

## Agency Registration Page

A branded registration page for a specific agency.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header" style="background-color: #005ea2; color: white; padding: 1.5rem;">
          <p class="usa-text-small" style="margin: 0; opacity: 0.8;">General Services Administration</p>
          <h1 class="usa-card__heading" style="color: white;">Register for GSA Services</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-signup-email">Work email address</label>
              <input class="usa-input" id="gsa-signup-email" name="gsa-signup-email" type="email" autocomplete="email" placeholder="name@agency.gov" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-signup-org">Agency or organization</label>
              <select class="usa-select" id="gsa-signup-org" name="gsa-signup-org" required>
                <option value="">-- Select your agency --</option>
                <option value="gsa">General Services Administration</option>
                <option value="dod">Department of Defense</option>
                <option value="va">Department of Veterans Affairs</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-signup-password">Password</label>
              <input class="usa-input" id="gsa-signup-password" name="gsa-signup-password" type="password" autocomplete="new-password" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-signup-confirm">Confirm password</label>
              <input class="usa-input" id="gsa-signup-confirm" name="gsa-signup-confirm" type="password" autocomplete="new-password" required>
            </div>
            <div class="usa-fieldset">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input" id="gsa-signup-terms" type="checkbox" name="gsa-signup-terms" required>
                <label class="usa-checkbox__label" for="gsa-signup-terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a></label>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Create GSA account</button>
            </div>
          </form>
          <hr class="usa-divider">
          <p class="usa-text-center">Already have an account? <a href="/patterns/sign-in/">Sign in to GSA</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

- Use `autocomplete="new-password"` for password fields
- Provide clear password requirements with hint text
- Associate error messages with form fields using `aria-describedby`
- Use `role="alert"` for error summaries
- Ensure form labels are properly associated with inputs
- Support keyboard navigation through multi-step forms
- Announce step changes to screen readers

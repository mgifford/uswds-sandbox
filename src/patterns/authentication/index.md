---
layout: sandbox
title: Authentication
---

# Authentication

Authentication patterns provide secure access to protected resources. This page demonstrates common login forms, multi-factor authentication, and session management patterns.

## Basic Login Form

A simple username and password login form for government services.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Sign in to your account</h2>
        </header>
        <div class="usa-card__body">
          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="login-username">Username or email address</label>
              <input class="usa-input" id="login-username" name="login-username" type="text" autocomplete="username" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="login-password">Password</label>
              <input class="usa-input" id="login-password" name="login-password" type="password" autocomplete="current-password" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Sign in</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <a href="/patterns/password-reset/">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Login with Remember Me

A login form with a checkbox to remember the user's session.

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Sign in to your account</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="remember-username">Email address</label>
      <input class="usa-input" id="remember-username" name="remember-username" type="email" autocomplete="email" required>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="remember-password">Password</label>
      <input class="usa-input" id="remember-password" name="remember-password" type="password" autocomplete="current-password" required>
    </div>
    <div class="usa-fieldset">
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="remember-me" type="checkbox" name="remember-me" value="remember">
        <label class="usa-checkbox__label" for="remember-me">Keep me signed in for 30 days</label>
      </div>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Sign in</button>
    </div>
  </fieldset>
</div>

## Login with Validation Errors

A login form demonstrating error states for invalid credentials.

<div class="usa-error-summary" role="alert" aria-labelledby="login-error-title">
  <h2 class="usa-error-summary__heading" id="login-error-title">Sign in failed</h2>
  <ul class="usa-error-summary__list">
    <li><a href="#mfa-email">Please enter a valid email address</a></li>
    <li><a href="#mfa-password">Password is required</a></li>
  </ul>
</div>

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Sign in to your account</legend>
    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="mfa-email">
        Email address
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="mfa-email-error" role="alert">
        Please enter a valid email address.
      </span>
      <input class="usa-input usa-input--error" id="mfa-email" name="mfa-email" type="email" aria-describedby="mfa-email-error" aria-invalid="true" value="invalid-email">
    </div>
    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="mfa-password">
        Password
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="mfa-password-error" role="alert">
        Password is required.
      </span>
      <input class="usa-input usa-input--error" id="mfa-password" name="mfa-password" type="password" aria-describedby="mfa-password-error" aria-invalid="true">
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Sign in</button>
    </div>
  </fieldset>
</div>

## Multi-Factor Authentication (MFA)

A verification code entry form for two-factor authentication.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Verify your identity</h2>
        </header>
        <div class="usa-card__body">
          <div class="usa-alert usa-alert--info" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">We sent a 6-digit verification code to j***@email.gov</p>
            </div>
          </div>
          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="mfa-code">Verification code</label>
              <span class="usa-hint" id="mfa-code-hint">Enter the 6-digit code sent to your email or phone</span>
              <input class="usa-input" id="mfa-code" name="mfa-code" type="text" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" aria-describedby="mfa-code-hint" inputmode="numeric" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Verify</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small">Didn't receive a code? <a href="#">Resend code</a> or <a href="#">use a different method</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Login with External Identity Provider

A login page offering multiple sign-in options including external identity providers.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Sign in</h2>
        </header>
        <div class="usa-card__body">
          <p>Choose how you want to sign in:</p>
          <div class="usa-button-group usa-button-group--stacked">
            <button class="usa-button usa-button--outline usa-button--full-width" type="button">
              <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#login"></use></svg>
              Sign in with Login.gov
            </button>
            <button class="usa-button usa-button--outline usa-button--full-width" type="button">
              <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#badge"></use></svg>
              Sign in with ID.me
            </button>
          </div>
          <hr class="usa-divider">
          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="alt-email">Or sign in with your email</label>
              <input class="usa-input" id="alt-email" name="alt-email" type="email" autocomplete="email">
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--secondary" type="submit">Continue with email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Session Management

A banner showing session status with options to extend or end the session.

<div class="usa-alert usa-alert--warning usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <strong>Session expiring:</strong> Your session will expire in 5 minutes.
      <button class="usa-button usa-button--unstyled" type="button">Extend session</button> or
      <a href="#">sign out</a> now.
    </p>
  </div>
</div>

### Session Expired

<div class="usa-alert usa-alert--info usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Your session has expired. Please <a href="/patterns/sign-in/">sign in</a> again to continue.</p>
  </div>
</div>

## Accessibility Considerations

When implementing authentication forms:

- Use proper `autocomplete` attributes for username and password fields
- Associate error messages with form fields using `aria-describedby`
- Use `aria-invalid="true"` for fields with validation errors
- Provide clear instructions for MFA code format
- Ensure form labels are properly associated with inputs
- Use `role="alert"` for error messages to announce them to screen readers

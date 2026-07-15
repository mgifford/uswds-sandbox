---
layout: sandbox
title: Password Reset
---

# Password Reset

Password reset patterns guide users through the process of recovering access to their accounts when they've forgotten their password.

## Password Reset Request

The initial form where users enter their email to request a password reset.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Reset your password</h2>
        </header>
        <div class="usa-card__body">
          <p>Enter your email address and we'll send you a link to reset your password.</p>
          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="reset-email">Email address</label>
              <input class="usa-input" id="reset-email" name="reset-email" type="email" autocomplete="email" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Send reset link</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small"><a href="/patterns/sign-in/">Back to sign in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Reset Link Sent Confirmation

A confirmation page shown after the reset request is submitted.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Check your email</h2>
        </header>
        <div class="usa-card__body">
          <div class="usa-alert usa-alert--success" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">A password reset link has been sent to j***@email.gov</p>
            </div>
          </div>
          <p>The link will expire in 24 hours. If you don't see the email, check your spam folder.</p>
          <p>Didn't receive the email?</p>
          <ul>
            <li>Check your spam or junk folder</li>
            <li>Make sure you entered the correct email address</li>
            <li><a href="#">Resend the reset link</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Set New Password Form

The form where users enter their new password after clicking the reset link.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Create new password</h2>
        </header>
        <div class="usa-card__body">
          <div class="usa-alert usa-alert--info usa-alert--slim" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Your reset link is valid for 24 hours</p>
            </div>
          </div>
          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="new-password">New password</label>
              <span class="usa-hint" id="new-password-hint">Must be at least 12 characters with one uppercase, one lowercase, and one number</span>
              <input class="usa-input" id="new-password" name="new-password" type="password" autocomplete="new-password" aria-describedby="new-password-hint" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="confirm-password">Confirm new password</label>
              <input class="usa-input" id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Password Reset with Validation Errors

A form showing validation errors for password requirements.

<div class="usa-error-summary" role="alert" aria-labelledby="reset-error-title">
  <h2 class="usa-error-summary__heading" id="reset-error-title">Password does not meet requirements</h2>
  <ul class="usa-error-summary__list">
    <li><a href="#reset-new-password">Password must be at least 12 characters</a></li>
    <li><a href="#reset-new-password">Password must include an uppercase letter</a></li>
    <li><a href="#reset-confirm-password">Passwords do not match</a></li>
  </ul>
</div>

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Create new password</h2>
        </header>
        <div class="usa-card__body">
          <form class="usa-form">
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="reset-new-password">
                New password
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="reset-new-password-error" role="alert">
                Password must be at least 12 characters and include an uppercase letter.
              </span>
              <input class="usa-input usa-input--error" id="reset-new-password" name="reset-new-password" type="password" aria-describedby="reset-new-password-error" aria-invalid="true" value="weak">
            </div>
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="reset-confirm-password">
                Confirm new password
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="reset-confirm-password-error" role="alert">
                Passwords do not match.
              </span>
              <input class="usa-input usa-input--error" id="reset-confirm-password" name="reset-confirm-password" type="password" aria-describedby="reset-confirm-password-error" aria-invalid="true" value="different">
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Password Reset Success

Confirmation after successful password reset.

<div class="grid-grid-row">
  <div class="grid-col-6">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Password reset complete</h2>
        </header>
        <div class="usa-card__body">
          <div class="usa-alert usa-alert--success" role="status">
            <div class="usa-alert__body">
              <h4 class="usa-alert__heading">Success!</h4>
              <p class="usa-alert__text">Your password has been reset successfully. You can now sign in with your new password.</p>
            </div>
          </div>
          <a href="/patterns/sign-in/" class="usa-button">Sign in to your account</a>
        </div>
      </div>
    </div>
  </div>
</div>

## Password Reset Error States

### Expired Reset Link

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Reset link expired</h4>
    <p class="usa-alert__text">This password reset link has expired. <a href="#">Request a new reset link</a>.</p>
  </div>
</div>

### Invalid Reset Link

<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Invalid reset link</h4>
    <p class="usa-alert__text">This password reset link is invalid or has already been used. <a href="#">Request a new reset link</a>.</p>
  </div>
</div>

### Password Reset Confirmation Modal

A modal dialog confirming the user wants to reset their password.

<div class="usa-modal-wrapper" role="dialog" aria-labelledby="reset-modal-title" aria-hidden="true">
  <div class="usa-modal-overlay">
    <div class="usa-modal usa-modal--sm" role="dialog" aria-labelledby="reset-modal-title">
      <div class="usa-modal__header">
        <h2 class="usa-modal__title" id="reset-modal-title">Reset your password?</h2>
        <button class="usa-modal__close" aria-label="Close modal" type="button">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
        </button>
      </div>
      <div class="usa-modal__body">
        <p>You'll be signed out and need to create a new password. Any active sessions on other devices will also be signed out.</p>
      </div>
      <div class="usa-modal__footer">
        <button class="usa-button usa-button--unstyled usa-modal__close">Cancel</button>
        <button class="usa-button">Continue with reset</button>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

- Provide clear instructions for password requirements
- Use `aria-describedby` to associate hint text with password fields
- Announce validation errors with `role="alert"`
- Ensure password requirements are visible and accessible
- Use `autocomplete="new-password"` for new password fields
- Provide feedback when reset links expire or are invalid

---
layout: sandbox
title: Sign In
---

# Sign In

Sign in pages provide secure authentication for government services. This pattern demonstrates various sign-in layouts and states.

## Basic Sign In Page

A centered sign-in form for government services.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Sign in to your account</h1>
        </header>
        <div class="usa-card__body">
          <p>Enter your credentials to access your account.</p>
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="signin-email">Email address</label>
              <input class="usa-input" id="signin-email" name="signin-email" type="email" autocomplete="email" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="signin-password">Password</label>
              <input class="usa-input" id="signin-password" name="signin-password" type="password" autocomplete="current-password" required>
            </div>
            <div class="usa-fieldset">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input" id="signin-remember" type="checkbox" name="signin-remember" value="remember">
                <label class="usa-checkbox__label" for="signin-remember">Keep me signed in</label>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Sign in</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small usa-text-center">
                <a href="/patterns/password-reset/">Forgot your password?</a>
              </p>
            </div>
          </form>

          <hr class="usa-divider">

          <p class="usa-text-center">Don't have an account? <a href="/patterns/sign-up/">Create one now</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign In with External Identity Provider

A sign-in page offering multiple authentication methods.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Sign in</h1>
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

          <p class="usa-text-center usa-text-small">Or sign in with your email</p>

          <form class="usa-form">
            <div class="usa-fieldset">
              <label class="usa-label" for="alt-email">Email address</label>
              <input class="usa-input" id="alt-email" name="alt-email" type="email" autocomplete="email">
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="alt-password">Password</label>
              <input class="usa-input" id="alt-password" name="alt-password" type="password" autocomplete="current-password">
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

## Sign In with Error State

A sign-in form showing validation errors.

<div class="usa-error-summary" role="alert" aria-labelledby="signin-error-title">
  <h2 class="usa-error-summary__heading" id="signin-error-title">Sign in failed</h2>
  <ul class="usa-error-summary__list">
    <li><a href="#error-email">Please enter a valid email address</a></li>
    <li><a href="#error-password">Password is required</a></li>
  </ul>
</div>

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Sign in to your account</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="error-email">
                Email address
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="error-email-message" role="alert">
                Please enter a valid email address.
              </span>
              <input class="usa-input usa-input--error" id="error-email" name="error-email" type="email" aria-describedby="error-email-message" aria-invalid="true" value="invalid-email">
            </div>
            <div class="usa-fieldset usa-fieldset--error">
              <label class="usa-label usa-label--error" for="error-password">
                Password
                <span class="usa-label--required">*</span>
              </label>
              <span class="usa-error-message" id="error-password-message" role="alert">
                Password is required.
              </span>
              <input class="usa-input usa-input--error" id="error-password" name="error-password" type="password" aria-describedby="error-password-message" aria-invalid="true">
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign In Success State

A confirmation shown after successful sign-in.

<div class="usa-alert usa-alert--success" role="status">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Welcome back!</h4>
    <p class="usa-alert__text">You have successfully signed in. Redirecting to your dashboard...</p>
  </div>
</div>

## Sign In with Session Warning

A sign-in page with an active session warning.

<div class="usa-alert usa-alert--warning" role="status">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Existing session detected</h4>
    <p class="usa-alert__text">You are already signed in on another device. <a href="#">Sign in here anyway</a> or <a href="#">sign out of all sessions</a>.</p>
  </div>
</div>

## Agency Sign In Page

A branded sign-in page for a specific agency.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header" style="background-color: #005ea2; color: white; padding: 1.5rem;">
          <p class="usa-text-small" style="margin: 0; opacity: 0.8;">General Services Administration</p>
          <h1 class="usa-card__heading" style="color: white;">GSA Services Portal</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-email">Email address</label>
              <input class="usa-input" id="gsa-email" name="gsa-email" type="email" autocomplete="email" placeholder="name@agency.gov" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="gsa-password">Password</label>
              <input class="usa-input" id="gsa-password" name="gsa-password" type="password" autocomplete="current-password" required>
            </div>
            <div class="usa-fieldset">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input" id="gsa-remember" type="checkbox" name="gsa-remember">
                <label class="usa-checkbox__label" for="gsa-remember">Remember my email</label>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Sign in to GSA</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small usa-text-center">
                <a href="#">Forgot password?</a> | <a href="#">Need help?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Sign In with Password Show/Hide

A sign-in form with a button to toggle password visibility.

<div class="grid-grid-row">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h1 class="usa-card__heading">Sign in</h1>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="show-email">Email address</label>
              <input class="usa-input" id="show-email" name="show-email" type="email" autocomplete="email" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="show-password">Password</label>
              <div class="usa-input-group">
                <input class="usa-input" id="show-password" name="show-password" type="password" autocomplete="current-password" required>
                <div class="usa-input-suffix">
                  <button type="button" class="usa-button usa-button--unstyled" aria-label="Show password">
                    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#visibility"></use></svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

- Use `autocomplete="email"` and `autocomplete="current-password"` for credentials
- Provide clear error messages associated with form fields
- Use `role="alert"` for error summaries
- Ensure the sign-in form is keyboard accessible
- Provide alternative authentication methods
- Use proper heading hierarchy for page structure
- Include skip links for keyboard users

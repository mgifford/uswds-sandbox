---
layout: basic-prose
title: Authentication Pages Template
---

<p class="usa-intro">This template demonstrates complete authentication flows for government services, including sign in, account creation, password recovery, and two-factor authentication.</p>

<hr class="usa-divider margin-y-3">

<h1 id="sign-in">Sign in</h1>
<p>A centered sign-in form for government services. Includes email/password fields, remember me checkbox, and links to password recovery and account creation.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Sign in to your account</h2>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large" id="signin-form" novalidate>
            <div class="usa-fieldset">
              <label class="usa-label" for="signin-email">Email address</label>
              <input class="usa-input" id="signin-email" name="signin-email" type="email" autocomplete="email" required aria-describedby="signin-email-hint">
              <span class="usa-hint" id="signin-email-hint">Enter the email associated with your account</span>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="signin-password">Password</label>
              <input class="usa-input" id="signin-password" name="signin-password" type="password" autocomplete="current-password" required>
            </div>
            <div class="usa-fieldset">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input" id="signin-remember" type="checkbox" name="signin-remember" value="remember">
                <label class="usa-checkbox__label" for="signin-remember">Keep me signed in for 30 days</label>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Sign in</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small usa-text-center">
                <a href="#forgot-password">Forgot your password?</a>
              </p>
            </div>
          </form>

          <hr class="usa-divider">

          <p class="usa-text-center">Don't have an account? <a href="#create-account">Create one now</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="create-account">Create an account</h1>
<p>A registration form for new users. Collects name, email, and password with confirmation.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Create your account</h2>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large" id="create-account-form" novalidate>
            <div class="usa-fieldset">
              <label class="usa-label" for="create-first-name">First name <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="create-first-name" name="create-first-name" type="text" autocomplete="given-name" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="create-last-name">Last name <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="create-last-name" name="create-last-name" type="text" autocomplete="family-name" required>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="create-email">Email address <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="create-email" name="create-email" type="email" autocomplete="email" required aria-describedby="create-email-hint">
              <span class="usa-hint" id="create-email-hint">Use your work or personal email address</span>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="create-password">Create a password <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="create-password" name="create-password" type="password" autocomplete="new-password" required aria-describedby="create-password-hint">
              <span class="usa-hint" id="create-password-hint">Must be at least 12 characters with one uppercase, one lowercase, and one number</span>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="create-password-confirm">Confirm password <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="create-password-confirm" name="create-password-confirm" type="password" autocomplete="new-password" required>
            </div>
            <div class="usa-fieldset">
              <div class="usa-checkbox">
                <input class="usa-checkbox__input" id="create-terms" type="checkbox" name="create-terms" value="agree" required>
                <label class="usa-checkbox__label" for="create-terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a></label>
              </div>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Create account</button>
            </div>
          </form>

          <hr class="usa-divider">

          <p class="usa-text-center">Already have an account? <a href="#sign-in">Sign in</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="forgot-password">Forgot password</h1>
<p>A password recovery form that sends a reset link to the user's email address.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-6 grid-offset-3">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Reset your password</h2>
        </header>
        <div class="usa-card__body">
          <p>Enter your email address and we'll send you a link to reset your password.</p>
          <form class="usa-form usa-form--large" id="forgot-password-form" novalidate>
            <div class="usa-fieldset">
              <label class="usa-label" for="forgot-email">Email address <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="forgot-email" name="forgot-email" type="email" autocomplete="email" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Send reset link</button>
            </div>
          </form>

          <hr class="usa-divider">

          <p class="usa-text-center">Remember your password? <a href="#sign-in">Sign in</a></p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="two-factor">Two-factor authentication</h1>
<p>A verification code entry form for two-factor authentication. The user receives a 6-digit code via email or SMS.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-6 grid-offset-3">
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
          <form class="usa-form usa-form--large" id="mfa-form" novalidate>
            <div class="usa-fieldset">
              <label class="usa-label" for="mfa-code">Verification code <span class="usa-label--required">*</span></label>
              <span class="usa-hint" id="mfa-code-hint">Enter the 6-digit code sent to your email or phone</span>
              <input class="usa-input" id="mfa-code" name="mfa-code" type="text" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" aria-describedby="mfa-code-hint" inputmode="numeric" required>
            </div>
            <div class="usa-fieldset">
              <button class="usa-button usa-button--full-width" type="submit">Verify code</button>
            </div>
            <div class="usa-fieldset margin-top-1">
              <p class="usa-text-small usa-text-center">Didn't receive a code? <a href="#" id="resend-code">Resend code</a> or <a href="#" id="use-different-method">use a different method</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h2>MFA code entry states</h2>

<h3>Loading state</h3>
<div class="usa-alert usa-alert--info usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Sending verification code...</p>
  </div>
</div>

<h3>Success state</h3>
<div class="usa-alert usa-alert--success" role="status">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Verification successful</h4>
    <p class="usa-alert__text">You have been authenticated. Redirecting to your dashboard...</p>
  </div>
</div>

<h3>Error state</h3>
<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Verification failed</h4>
    <p class="usa-alert__text">The code you entered is incorrect or has expired. Please try again.</p>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h2>Session management</h2>

<h3>Session expiring warning</h3>
<div class="usa-alert usa-alert--warning usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">
      <strong>Session expiring:</strong> Your session will expire in 5 minutes.
      <button class="usa-button usa-button--unstyled" type="button">Extend session</button> or
      <a href="#">sign out</a> now.
    </p>
  </div>
</div>

<h3>Session expired</h3>
<div class="usa-alert usa-alert--info usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Your session has expired. Please <a href="#sign-in">sign in</a> again to continue.</p>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h2>Accessibility considerations</h2>
<ul class="usa-list">
  <li>Use proper <code>autocomplete</code> attributes for username and password fields</li>
  <li>Associate error messages with form fields using <code>aria-describedby</code></li>
  <li>Use <code>aria-invalid="true"</code> for fields with validation errors</li>
  <li>Provide clear instructions for MFA code format (6 digits, numeric only)</li>
  <li>Ensure form labels are properly associated with inputs</li>
  <li>Use <code>role="alert"</code> for error messages to announce them to screen readers</li>
  <li>Provide alternative authentication methods for users who cannot receive SMS or email</li>
</ul>

<script>
document.addEventListener('DOMContentLoaded', function() {
  function setupForm(formId, successMessage) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var origText = btn.textContent;
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = origText;
        btn.disabled = false;
        var alertDiv = document.createElement('div');
        alertDiv.className = 'usa-alert usa-alert--success margin-top-2';
        alertDiv.setAttribute('role', 'status');
        alertDiv.innerHTML = '<div class="usa-alert__body"><p class="usa-alert__text">' + successMessage + '</p></div>';
        form.parentNode.insertBefore(alertDiv, form.nextSibling);
        setTimeout(function() { alertDiv.remove(); }, 5000);
      }, 1500);
    });
  }
  setupForm('signin-form', 'Sign in successful! Redirecting to your dashboard...');
  setupForm('create-account-form', 'Account created! Check your email for a verification link.');
  setupForm('forgot-password-form', 'Password reset link sent! Check your email inbox.');
  setupForm('mfa-form', 'Verification successful! Redirecting to your dashboard...');

  var resendLink = document.getElementById('resend-code');
  if (resendLink) {
    resendLink.addEventListener('click', function(e) {
      e.preventDefault();
      var alert = document.createElement('div');
      alert.className = 'usa-alert usa-alert--info margin-top-2';
      alert.setAttribute('role', 'status');
      alert.innerHTML = '<div class="usa-alert__body"><p class="usa-alert__text">A new verification code has been sent to your email.</p></div>';
      resendLink.parentNode.parentNode.parentNode.insertBefore(alert, resendLink.parentNode.parentNode.nextSibling);
      setTimeout(function() { alert.remove(); }, 3000);
    });
  }
});
</script>

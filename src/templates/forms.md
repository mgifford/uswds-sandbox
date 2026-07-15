---
layout: basic-prose
title: Form Templates
---

<p class="usa-intro">This template demonstrates functional form examples with validation, multiple input types, and interactive submission handling. Each form is fillable and shows a success message on submit.</p>

<hr class="usa-divider margin-y-3">

<h1 id="contact-form">Contact form</h1>
<p>A standard contact form for government agencies. Collects name, email, subject, and message with proper validation states.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-8">
    <form class="usa-form usa-form--large" id="contact-form" novalidate>
      <div class="usa-fieldset">
        <label class="usa-label" for="contact-name">Full name <span class="usa-label--required">*</span></label>
        <input class="usa-input" id="contact-name" name="contact-name" type="text" autocomplete="name" required aria-describedby="contact-name-error" data-validate="required">
      </div>
      <div class="usa-fieldset">
        <label class="usa-label" for="contact-email">Email address <span class="usa-label--required">*</span></label>
        <input class="usa-input" id="contact-email" name="contact-email" type="email" autocomplete="email" required aria-describedby="contact-email-error" data-validate="email">
      </div>
      <div class="usa-fieldset">
        <label class="usa-label" for="contact-phone">Phone number</label>
        <input class="usa-input" id="contact-phone" name="contact-phone" type="tel" autocomplete="tel" aria-describedby="contact-phone-hint">
        <span class="usa-hint" id="contact-phone-hint">Optional. Format: (555) 555-5555</span>
      </div>
      <div class="usa-fieldset">
        <label class="usa-label" for="contact-subject">Subject <span class="usa-label--required">*</span></label>
        <select class="usa-select" id="contact-subject" name="contact-subject" required>
          <option value="">-- Select a subject --</option>
          <option value="general">General inquiry</option>
          <option value="technical">Technical support</option>
          <option value="billing">Billing question</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="usa-fieldset">
        <label class="usa-label" for="contact-message">Message <span class="usa-label--required">*</span></label>
        <textarea class="usa-textarea" id="contact-message" name="contact-message" rows="5" required aria-describedby="contact-message-hint" data-validate="required"></textarea>
        <span class="usa-hint" id="contact-message-hint">Provide as much detail as possible (minimum 20 characters)</span>
      </div>
      <div class="usa-fieldset">
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="contact-copy" type="checkbox" name="contact-copy" value="copy">
          <label class="usa-checkbox__label" for="contact-copy">Send me a copy of this message</label>
        </div>
      </div>
      <div class="usa-fieldset">
        <button class="usa-button" type="submit">Send message</button>
        <button class="usa-button usa-button--outline" type="reset">Clear form</button>
      </div>
    </form>
  </div>
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Contact information</h2>
        </header>
        <div class="usa-card__body">
          <p class="usa-text-small">General Services Administration</p>
          <p class="usa-text-small">1800 F Street NW</p>
          <p class="usa-text-small">Washington, DC 20405</p>
          <p class="usa-text-small">Phone: <a href="tel:18005550199">1-800-555-0199</a></p>
          <p class="usa-text-small">Email: <a href="mailto:help@example.gov">help@example.gov</a></p>
          <p class="usa-text-small margin-top-1">Hours: Mon-Fri, 8am-6pm ET</p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="registration-form">Registration form</h1>
<p>A multi-section registration form with personal information, account details, and preferences.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-8">
    <form class="usa-form usa-form--large" id="registration-form" novalidate>
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--large">Personal information</legend>
        <p class="usa-text-small">Fields marked with <span class="usa-label--required">*</span> are required.</p>

        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-first-name">First name <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="reg-first-name" name="reg-first-name" type="text" autocomplete="given-name" required>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-middle-name">Middle name</label>
              <input class="usa-input" id="reg-middle-name" name="reg-middle-name" type="text" autocomplete="additional-name">
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-last-name">Last name <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="reg-last-name" name="reg-last-name" type="text" autocomplete="family-name" required>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-suffix">Suffix</label>
              <select class="usa-select" id="reg-suffix" name="reg-suffix">
                <option value="">-- Suffix (optional) --</option>
                <option value="jr">Jr.</option>
                <option value="sr">Sr.</option>
                <option value="ii">II</option>
                <option value="iii">III</option>
                <option value="iv">IV</option>
              </select>
            </div>
          </div>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="reg-dob">Date of birth <span class="usa-label--required">*</span></label>
          <input class="usa-input" id="reg-dob" name="reg-dob" type="date" required>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="reg-phone">Phone number <span class="usa-label--required">*</span></label>
          <input class="usa-input" id="reg-phone" name="reg-phone" type="tel" autocomplete="tel" required>
        </div>
      </fieldset>

      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--large">Account details</legend>

        <div class="usa-fieldset">
          <label class="usa-label" for="reg-email">Email address <span class="usa-label--required">*</span></label>
          <input class="usa-input" id="reg-email" name="reg-email" type="email" autocomplete="email" required>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="reg-username">Username <span class="usa-label--required">*</span></label>
          <input class="usa-input" id="reg-username" name="reg-username" type="text" autocomplete="username" required aria-describedby="reg-username-hint">
          <span class="usa-hint" id="reg-username-hint">3-20 characters, letters and numbers only</span>
        </div>

        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-password">Password <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="reg-password" name="reg-password" type="password" autocomplete="new-password" required aria-describedby="reg-password-hint">
              <span class="usa-hint" id="reg-password-hint">Min 12 characters, 1 uppercase, 1 lowercase, 1 number</span>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="reg-password-confirm">Confirm password <span class="usa-label--required">*</span></label>
              <input class="usa-input" id="reg-password-confirm" name="reg-password-confirm" type="password" autocomplete="new-password" required>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--large">Preferences</legend>

        <div class="usa-fieldset">
          <label class="usa-label" for="reg-role">Role <span class="usa-label--required">*</span></label>
          <select class="usa-select" id="reg-role" name="reg-role" required>
            <option value="">-- Select your role --</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="pm">Product Manager</option>
            <option value="content">Content Author</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label">Communication preferences</label>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="reg-email-updates" type="checkbox" name="reg-email-updates" value="email">
            <label class="usa-checkbox__label" for="reg-email-updates">Email updates about new features</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="reg-newsletter" type="checkbox" name="reg-newsletter" value="newsletter">
            <label class="usa-checkbox__label" for="reg-newsletter">Monthly newsletter</label>
          </div>
        </div>
      </fieldset>

      <div class="usa-fieldset">
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="reg-terms" type="checkbox" name="reg-terms" value="agree" required>
          <label class="usa-checkbox__label" for="reg-terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a> <span class="usa-label--required">*</span></label>
        </div>
      </div>

      <div class="usa-fieldset">
        <button class="usa-button" type="submit">Create account</button>
        <button class="usa-button usa-button--outline" type="reset">Clear form</button>
      </div>
    </form>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="survey-form">Survey / feedback form</h1>
<p>A satisfaction survey with rating scales, checkboxes, and open-ended questions.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-8">
    <form class="usa-form usa-form--large" id="survey-form" novalidate>
      <fieldset class="usa-fieldset">
        <legend class="usa-legend usa-legend--large">Customer satisfaction survey</legend>
        <p class="usa-text-small">Help us improve our services by sharing your experience.</p>

        <div class="usa-fieldset">
          <label class="usa-label" for="survey-overall">Overall, how satisfied are you with our service? <span class="usa-label--required">*</span></label>
          <div class="usa-fieldset" role="radiogroup" aria-labelledby="survey-overall">
            <div class="usa-radio">
              <input class="usa-radio__input" id="survey-very-satisfied" type="radio" name="survey-overall" value="very-satisfied" required>
              <label class="usa-radio__label" for="survey-very-satisfied">Very satisfied</label>
            </div>
            <div class="usa-radio">
              <input class="usa-radio__input" id="survey-satisfied" type="radio" name="survey-overall" value="satisfied">
              <label class="usa-radio__label" for="survey-satisfied">Satisfied</label>
            </div>
            <div class="usa-radio">
              <input class="usa-radio__input" id="survey-neutral" type="radio" name="survey-overall" value="neutral">
              <label class="usa-radio__label" for="survey-neutral">Neutral</label>
            </div>
            <div class="usa-radio">
              <input class="usa-radio__input" id="survey-unsatisfied" type="radio" name="survey-overall" value="unsatisfied">
              <label class="usa-radio__label" for="survey-unsatisfied">Unsatisfied</label>
            </div>
            <div class="usa-radio">
              <input class="usa-radio__input" id="survey-very-unsatisfied" type="radio" name="survey-overall" value="very-unsatisfied">
              <label class="usa-radio__label" for="survey-very-unsatisfied">Very unsatisfied</label>
            </div>
          </div>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label">How did you hear about us? (Select all that apply)</label>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="survey-search" type="checkbox" name="survey-source" value="search">
            <label class="usa-checkbox__label" for="survey-search">Search engine</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="survey-social" type="checkbox" name="survey-source" value="social">
            <label class="usa-checkbox__label" for="survey-social">Social media</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="survey-word" type="checkbox" name="survey-source" value="word">
            <label class="usa-checkbox__label" for="survey-word">Word of mouth</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="survey-news" type="checkbox" name="survey-source" value="news">
            <label class="usa-checkbox__label" for="survey-news">News article</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="survey-other" type="checkbox" name="survey-source" value="other">
            <label class="usa-checkbox__label" for="survey-other">Other</label>
          </div>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="survey-ease">How easy was it to find what you were looking for? <span class="usa-label--required">*</span></label>
          <select class="usa-select" id="survey-ease" name="survey-ease" required>
            <option value="">-- Select --</option>
            <option value="very-easy">Very easy</option>
            <option value="easy">Easy</option>
            <option value="neutral">Neither easy nor difficult</option>
            <option value="difficult">Difficult</option>
            <option value="very-difficult">Very difficult</option>
          </select>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="survey-improvements">What could we improve? (optional)</label>
          <textarea class="usa-textarea" id="survey-improvements" name="survey-improvements" rows="4" placeholder="Share your suggestions..."></textarea>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="survey-contact">May we contact you about your feedback? (optional)</label>
          <input class="usa-input" id="survey-contact" name="survey-contact" type="email" autocomplete="email" placeholder="your@email.gov" aria-describedby="survey-contact-hint">
          <span class="usa-hint" id="survey-contact-hint">If you'd like us to follow up, provide your email</span>
        </div>
      </fieldset>

      <div class="usa-fieldset">
        <button class="usa-button" type="submit">Submit survey</button>
        <button class="usa-button usa-button--outline" type="reset">Clear form</button>
      </div>
    </form>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h1 id="search-form">Search form</h1>
<p>A site-wide search form with advanced filtering options.</p>

<h2>Basic search</h2>
<div class="grid-row grid-gap margin-bottom-3">
  <div class="grid-col-8">
    <form class="usa-search" role="search" aria-label="Site search" id="search-basic-form">
      <label class="usa-sr-only" for="search-basic-input">Search</label>
      <input class="usa-input" id="search-basic-input" type="search" name="search" placeholder="Search this site" required>
      <button class="usa-button" type="submit">
        <span class="usa-search__submit-text">Search</span>
      </button>
    </form>
  </div>
</div>

<h2>Advanced search with filters</h2>
<div class="grid-row grid-gap">
  <div class="grid-col-8">
    <form class="usa-form usa-form--large" id="search-advanced-form" novalidate>
      <div class="usa-fieldset">
        <label class="usa-label" for="search-query">Search term <span class="usa-label--required">*</span></label>
        <input class="usa-input" id="search-query" name="search-query" type="search" placeholder="Enter search terms" required>
      </div>

      <div class="grid-row grid-gap">
        <div class="grid-col-6">
          <div class="usa-fieldset">
            <label class="usa-label" for="search-category">Category</label>
            <select class="usa-select" id="search-category" name="search-category">
              <option value="">All categories</option>
              <option value="components">Components</option>
              <option value="patterns">Patterns</option>
              <option value="templates">Templates</option>
              <option value="guides">Guides</option>
            </select>
          </div>
        </div>
        <div class="grid-col-6">
          <div class="usa-fieldset">
            <label class="usa-label" for="search-date">Date range</label>
            <select class="usa-select" id="search-date" name="search-date">
              <option value="">Any time</option>
              <option value="day">Past 24 hours</option>
              <option value="week">Past week</option>
              <option value="month">Past month</option>
              <option value="year">Past year</option>
            </select>
          </div>
        </div>
      </div>

      <div class="usa-fieldset">
        <label class="usa-label">Content type</label>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="search-type-docs" type="checkbox" name="search-type" value="docs" checked>
          <label class="usa-checkbox__label" for="search-type-docs">Documentation</label>
        </div>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="search-type-code" type="checkbox" name="search-type" value="code" checked>
          <label class="usa-checkbox__label" for="search-type-code">Code examples</label>
        </div>
        <div class="usa-checkbox">
          <input class="usa-checkbox__input" id="search-type-design" type="checkbox" name="search-type" value="design" checked>
          <label class="usa-checkbox__label" for="search-type-design">Design guidance</label>
        </div>
      </div>

      <div class="usa-fieldset">
        <button class="usa-button" type="submit">Search</button>
        <button class="usa-button usa-button--outline" type="reset">Clear filters</button>
      </div>
    </form>
  </div>
</div>

<h2>Search results example</h2>
<div class="grid-row grid-gap">
  <div class="grid-col-8">
    <div id="search-results" class="display-none">
      <p class="usa-text-small">Showing <strong>3</strong> results for "<span id="search-results-term"></span>"</p>

      <div class="usa-card">
        <div class="usa-card__container">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">USWDS Button Component</h3>
            <span class="usa-tag">Components</span>
          </div>
          <div class="usa-card__body">
            <p>Buttons communicate actions users can take. They are typically placed throughout your UI, for example in dialogs, forms, and cards.</p>
          </div>
          <div class="usa-card__footer">
            <a href="/components/button/">View component</a>
          </div>
        </div>
      </div>

      <div class="usa-card margin-top-2">
        <div class="usa-card__container">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Form Button Patterns</h3>
            <span class="usa-tag">Patterns</span>
          </div>
          <div class="usa-card__body">
            <p>Best practices for button placement in forms, including primary/secondary patterns, loading states, and disabled states.</p>
          </div>
          <div class="usa-card__footer">
            <a href="/patterns/">View pattern</a>
          </div>
        </div>
      </div>

      <div class="usa-card margin-top-2">
        <div class="usa-card__container">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Button Accessibility Guide</h3>
            <span class="usa-tag">Guides</span>
          </div>
          <div class="usa-card__body">
            <p>Learn how to make buttons accessible, including proper ARIA attributes, keyboard navigation, and focus management.</p>
          </div>
          <div class="usa-card__footer">
            <a href="#">Read guide</a>
          </div>
        </div>
      </div>
    </div>

    <div id="search-placeholder" class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <div class="usa-card__body usa-text-center padding-y-3">
          <svg class="usa-icon usa-icon--lg" aria-hidden="true" style="color: #71767a;"><use xlink:href="/assets/img/sprite.svg#search"></use></svg>
          <p class="margin-top-1">Use the search form above to find components, patterns, and guides.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="usa-divider margin-y-3">

<h2>Form validation states</h2>
<p>Demonstration of USWDS validation states for form fields.</p>

<div class="grid-row grid-gap">
  <div class="grid-col-6">
    <h3>Error state</h3>
    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="demo-error-input">
        Email address <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="demo-error-message" role="alert">
        Please enter a valid email address.
      </span>
      <input class="usa-input usa-input--error" id="demo-error-input" type="email" aria-describedby="demo-error-message" aria-invalid="true" value="invalid-email">
    </div>
  </div>
  <div class="grid-col-6">
    <h3>Success state</h3>
    <div class="usa-fieldset">
      <label class="usa-label" for="demo-success-input">
        Email address <span class="usa-label--required">*</span>
      </label>
      <input class="usa-input usa-input--success" id="demo-success-input" type="email" value="user@example.gov" aria-describedby="demo-success-message">
      <span class="usa-success-message" id="demo-success-message" role="status">
        Valid email address entered.
      </span>
    </div>
  </div>
</div>

<div class="grid-row grid-gap margin-top-2">
  <div class="grid-col-6">
    <h3>Disabled state</h3>
    <div class="usa-fieldset">
      <label class="usa-label" for="demo-disabled-input">
        Email address
      </label>
      <input class="usa-input" id="demo-disabled-input" type="email" disabled value="Cannot edit this field">
    </div>
  </div>
  <div class="grid-col-6">
    <h3>Required indicator</h3>
    <div class="usa-fieldset">
      <label class="usa-label" for="demo-required-input">
        Full name <span class="usa-label--required">*</span>
      </label>
      <input class="usa-input" id="demo-required-input" type="text" required aria-describedby="demo-required-hint">
      <span class="usa-hint" id="demo-required-hint">This field is required</span>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  function validateField(field) {
    var valid = true;
    var type = field.getAttribute('data-validate');
    if (!type && field.hasAttribute('required')) type = 'required';

    if (type === 'required' && !field.value.trim()) valid = false;
    if (type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) valid = false;

    var fieldset = field.closest('.usa-fieldset');
    if (!fieldset) return valid;

    var errorEl = fieldset.querySelector('.usa-error-message');
    if (!valid) {
      field.classList.add('usa-input--error');
      field.setAttribute('aria-invalid', 'true');
      if (!errorEl) {
        var msg = document.createElement('span');
        msg.className = 'usa-error-message';
        msg.setAttribute('role', 'alert');
        msg.textContent = type === 'email' ? 'Please enter a valid email address.' : 'This field is required.';
        field.parentNode.appendChild(msg);
      }
    } else {
      field.classList.remove('usa-input--error');
      field.removeAttribute('aria-invalid');
      if (errorEl) errorEl.remove();
    }
    return valid;
  }

  document.querySelectorAll('[data-validate]').forEach(function(field) {
    field.addEventListener('blur', function() { validateField(field); });
    field.addEventListener('input', function() {
      if (field.classList.contains('usa-input--error')) validateField(field);
    });
  });

  function setupForm(formId, successMsg) {
    var form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function(field) {
        if (!validateField(field)) valid = false;
      });
      if (!valid) {
        var summary = document.createElement('div');
        summary.className = 'usa-error-summary margin-bottom-2';
        summary.setAttribute('role', 'alert');
        summary.innerHTML = '<h2 class="usa-error-summary__heading">Please fix the errors below</h2><ul class="usa-error-summary__list"><li>Correct the highlighted fields and try again.</li></ul>';
        form.parentNode.insertBefore(summary, form);
        setTimeout(function() { summary.remove(); }, 5000);
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      var origText = btn.textContent;
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = origText;
        btn.disabled = false;
        var alert = document.createElement('div');
        alert.className = 'usa-alert usa-alert--success margin-top-2';
        alert.setAttribute('role', 'status');
        alert.innerHTML = '<div class="usa-alert__body"><p class="usa-alert__text">' + successMsg + '</p></div>';
        form.parentNode.insertBefore(alert, form.nextSibling);
        setTimeout(function() { alert.remove(); }, 5000);
      }, 1500);
    });
    form.addEventListener('reset', function() {
      form.querySelectorAll('.usa-error-message').forEach(function(el) { el.remove(); });
      form.querySelectorAll('.usa-input--error').forEach(function(el) {
        el.classList.remove('usa-input--error');
        el.removeAttribute('aria-invalid');
      });
    });
  }

  setupForm('contact-form', 'Message sent! We\'ll respond within 2 business days.');
  setupForm('registration-form', 'Account created! Check your email for a verification link.');
  setupForm('survey-form', 'Thank you for your feedback! Your response helps us improve.');

  var searchBasicForm = document.getElementById('search-basic-form');
  if (searchBasicForm) {
    searchBasicForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var term = document.getElementById('search-basic-input').value;
      document.getElementById('search-results-term').textContent = term;
      document.getElementById('search-results').classList.remove('display-none');
      document.getElementById('search-placeholder').classList.add('display-none');
    });
  }

  var searchAdvancedForm = document.getElementById('search-advanced-form');
  if (searchAdvancedForm) {
    searchAdvancedForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var term = document.getElementById('search-query').value;
      document.getElementById('search-results-term').textContent = term;
      document.getElementById('search-results').classList.remove('display-none');
      document.getElementById('search-placeholder').classList.add('display-none');
    });
  }
});
</script>

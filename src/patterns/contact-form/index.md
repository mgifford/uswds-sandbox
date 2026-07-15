---
layout: sandbox
title: Contact Form
---

# Contact Form

Contact forms allow users to send messages or inquiries to an organization. This pattern demonstrates accessible form validation and proper field grouping.

## Basic Contact Form

A simple contact form with required fields and validation.

<div class="usa-error-summary" role="alert" aria-labelledby="contact-error-title">
  <h2 class="usa-error-summary__heading" id="contact-error-title">Please correct the following errors</h2>
  <ul class="usa-error-summary__list">
    <li><a href="#contact-name">Please enter your full name</a></li>
    <li><a href="#contact-email">Please enter a valid email address</a></li>
    <li><a href="#contact-subject">Please select a subject</a></li>
    <li><a href="#contact-message">Please enter your message</a></li>
  </ul>
</div>

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Contact us</legend>
    <p><span class="usa-label--required">*</span> indicates a required field</p>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="contact-name">
        Full name
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="contact-name-error" role="alert">
        Please enter your full name.
      </span>
      <input class="usa-input usa-input--error" id="contact-name" name="contact-name" type="text" autocomplete="name" aria-describedby="contact-name-error" aria-invalid="true">
    </div>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="contact-email">
        Email address
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="contact-email-error" role="alert">
        Please enter a valid email address.
      </span>
      <input class="usa-input usa-input--error" id="contact-email" name="contact-email" type="email" autocomplete="email" aria-describedby="contact-email-error" aria-invalid="true">
    </div>

    <div class="usa-fieldset">
      <label class="usa-label" for="contact-phone">Phone number</label>
      <span class="usa-hint" id="contact-phone-hint">Format: (555) 555-5555</span>
      <input class="usa-input" id="contact-phone" name="contact-phone" type="tel" autocomplete="tel" aria-describedby="contact-phone-hint">
    </div>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="contact-subject">
        Subject
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="contact-subject-error" role="alert">
        Please select a subject.
      </span>
      <select class="usa-select usa-input--error" id="contact-subject" name="contact-subject" aria-describedby="contact-subject-error" aria-invalid="true">
        <option value="">-- Select a subject --</option>
        <option value="general">General inquiry</option>
        <option value="support">Technical support</option>
        <option value="feedback">Feedback</option>
        <option value="billing">Billing question</option>
      </select>
    </div>

    <div class="usa-fieldset usa-fieldset--error">
      <label class="usa-label usa-label--error" for="contact-message">
        Message
        <span class="usa-label--required">*</span>
      </label>
      <span class="usa-error-message" id="contact-message-error" role="alert">
        Please enter your message.
      </span>
      <textarea class="usa-textarea usa-input--error" id="contact-message" name="contact-message" aria-describedby="contact-message-error" aria-invalid="true" rows="6"></textarea>
    </div>

    <div class="usa-fieldset">
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="contact-copy" type="checkbox" name="contact-copy" value="copy">
        <label class="usa-checkbox__label" for="contact-copy">Send me a copy of this message</label>
      </div>
    </div>

    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Send message</button>
      <button class="usa-button usa-button--unstyled" type="reset">Clear form</button>
    </div>
  </fieldset>
</div>

## Contact Form with Success State

A contact form showing successful submission feedback.

<div class="usa-alert usa-alert--success" role="status">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Message sent successfully</h4>
    <p class="usa-alert__text">Thank you for contacting us. We'll respond within 2-3 business days. A confirmation has been sent to your email address.</p>
  </div>
</div>

## Simple Contact Form

A minimal contact form for quick inquiries.

<div class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Send us a message</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="simple-email">Your email</label>
      <input class="usa-input" id="simple-email" name="simple-email" type="email" autocomplete="email" required>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="simple-message">Message</label>
      <textarea class="usa-textarea" id="simple-message" name="simple-message" required></textarea>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Send</button>
    </div>
  </fieldset>
</div>

## Contact Form with File Upload

A contact form that allows users to attach files to their message.

<div class="usa-form usa-form--large">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend">Submit a request</legend>
    <div class="usa-fieldset">
      <label class="usa-label" for="upload-name">Your name</label>
      <input class="usa-input" id="upload-name" name="upload-name" type="text" autocomplete="name" required>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="upload-email">Email address</label>
      <input class="usa-input" id="upload-email" name="upload-email" type="email" autocomplete="email" required>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="upload-description">Description</label>
      <span class="usa-hint" id="upload-description-hint">Please describe your issue or question</span>
      <textarea class="usa-textarea" id="upload-description" name="upload-description" aria-describedby="upload-description-hint" rows="4" required></textarea>
    </div>
    <div class="usa-fieldset">
      <label class="usa-label" for="upload-file">Attachments</label>
      <span class="usa-hint" id="upload-file-hint">Accepted formats: PDF, JPG, PNG. Maximum file size: 10MB.</span>
      <input class="usa-input" id="upload-file" name="upload-file" type="file" accept=".pdf,.jpg,.jpeg,.png" aria-describedby="upload-file-hint" multiple>
    </div>
    <div class="usa-fieldset">
      <button class="usa-button" type="submit">Submit request</button>
    </div>
  </fieldset>
</div>

## Contact Information Block

Display contact information alongside a form.

<div class="grid-grid-row">
  <div class="grid-col-8">
    <div class="usa-form usa-form--large">
      <fieldset class="usa-fieldset">
        <legend class="usa-legend">Send a message</legend>
        <div class="usa-fieldset">
          <label class="usa-label" for="info-name">Name</label>
          <input class="usa-input" id="info-name" name="info-name" type="text" autocomplete="name" required>
        </div>
        <div class="usa-fieldset">
          <label class="usa-label" for="info-email">Email</label>
          <input class="usa-input" id="info-email" name="info-email" type="email" autocomplete="email" required>
        </div>
        <div class="usa-fieldset">
          <label class="usa-label" for="info-message">Message</label>
          <textarea class="usa-textarea" id="info-message" name="info-message" required></textarea>
        </div>
        <div class="usa-fieldset">
          <button class="usa-button" type="submit">Send message</button>
        </div>
      </fieldset>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Contact information</h2>
        </header>
        <div class="usa-card__body">
          <address class="usa-text-small">
            <p><strong>Phone</strong><br>(800) 555-1234</p>
            <p><strong>Email</strong><br><a href="mailto:contact@example.gov">contact@example.gov</a></p>
            <p><strong>Hours</strong><br>Monday–Friday, 8am–6pm ET</p>
            <p><strong>Mailing address</strong><br>
              General Services Administration<br>
              1800 F Street NW<br>
              Washington, DC 20405
            </p>
          </address>
        </div>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

When building contact forms:

- Mark required fields with both visual indicators and `aria-required`
- Provide hint text for format requirements using `usa-hint`
- Use `autocomplete` attributes for common fields (name, email, phone)
- Group related fields with `fieldset` and `legend`
- Ensure error messages are associated with fields via `aria-describedby`
- Use `role="alert"` for error summaries to announce them immediately

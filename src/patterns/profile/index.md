---
layout: sandbox
title: Profile
---

# User Profile

User profile pages display account information, preferences, and activity. This pattern demonstrates a complete profile management interface.

## Profile Overview

A complete profile page with user information and navigation.

<div class="grid-grid-row">
  <div class="grid-col-4">
    <div class="usa-card usa-card--header-first">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h2 class="usa-card__heading">Jane Smith</h2>
          <p class="usa-card__subheading">Director of Engineering</p>
        </header>
        <div class="usa-card__body">
          <ul class="usa-list usa-list--unstyled">
            <li><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#building"></use></svg> Office of Digital Services</li>
            <li><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#location_on"></use></svg> Washington, DC</li>
            <li><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#email"></use></svg> jane.smith@agency.gov</li>
            <li><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#phone"></use></svg> (555) 123-4567</li>
          </ul>
        </div>
        <footer class="usa-card__footer">
          <a href="#" class="usa-button usa-button--outline usa-button--full-width">Edit profile</a>
        </footer>
      </div>
    </div>
  </div>
  <div class="grid-col-8">
    <nav class="usa-tabs" aria-label="Profile sections">
      <ul class="usa-tabs__list">
        <li class="usa-tabs__item usa-tabs__item--current">
          <a href="#profile-overview" class="usa-tabs__link">Overview</a>
        </li>
        <li class="usa-tabs__item">
          <a href="#profile-activity" class="usa-tabs__link">Activity</a>
        </li>
        <li class="usa-tabs__item">
          <a href="#profile-settings" class="usa-tabs__link">Settings</a>
        </li>
      </ul>
    </nav>

    <h3>Account details</h3>
    <table class="usa-table usa-table--borderless">
      <caption>Account information</caption>
      <tbody>
        <tr>
          <th scope="row">Account type</th>
          <td>Agency administrator</td>
        </tr>
        <tr>
          <th scope="row">Member since</th>
          <td>January 15, 2024</td>
        </tr>
        <tr>
          <th scope="row">Last login</th>
          <td>March 22, 2026 at 9:45 AM ET</td>
        </tr>
        <tr>
          <th scope="row">Two-factor authentication</th>
          <td><span class="usa-tag usa-tag--success">Enabled</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Edit Profile Form

A form for updating profile information.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Edit profile</h2>
    </header>
    <div class="usa-card__body">
      <form class="usa-form usa-form--large">
        <div class="usa-fieldset">
          <label class="usa-label" for="profile-photo">Profile photo</label>
          <div class="grid-grid-row">
            <div class="grid-col-2">
              <div style="width: 80px; height: 80px; border-radius: 50%; background-color: #005ea2; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">JS</div>
            </div>
            <div class="grid-col-10">
              <input class="usa-input" id="profile-photo" name="profile-photo" type="file" accept="image/*">
              <span class="usa-hint">JPG, PNG, or GIF. Maximum 2MB.</span>
            </div>
          </div>
        </div>

        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="profile-first">First name</label>
              <input class="usa-input" id="profile-first" name="profile-first" type="text" value="Jane" autocomplete="given-name" required>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-fieldset">
              <label class="usa-label" for="profile-last">Last name</label>
              <input class="usa-input" id="profile-last" name="profile-last" type="text" value="Smith" autocomplete="family-name" required>
            </div>
          </div>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="profile-title">Job title</label>
          <input class="usa-input" id="profile-title" name="profile-title" type="text" value="Director of Engineering">
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="profile-dept">Department</label>
          <select class="usa-select" id="profile-dept" name="profile-dept">
            <option value="digital" selected>Office of Digital Services</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
          </select>
        </div>

        <div class="usa-fieldset">
          <label class="usa-label" for="profile-bio">Bio</label>
          <span class="usa-hint" id="profile-bio-hint">Brief description for your public profile (max 500 characters)</span>
          <textarea class="usa-textarea" id="profile-bio" name="profile-bio" maxlength="500" aria-describedby="profile-bio-hint" rows="4">Engineering leader with 15 years of experience in government technology.</textarea>
        </div>

        <div class="usa-fieldset">
          <button class="usa-button" type="submit">Save changes</button>
          <button class="usa-button usa-button--unstyled" type="reset">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

## Activity History

A profile section showing recent user activity.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Recent activity</h2>
    </header>
    <div class="usa-card__body">
      <ul class="usa-list usa-list--unstyled">
        <li style="padding: 0.75rem 0; border-bottom: 1px solid #dfe1e2;">
          <p class="usa-text-bold">Updated project documentation</p>
          <p class="usa-text-small usa-text-secondary">Project: USWDS Migration | 2 hours ago</p>
        </li>
        <li style="padding: 0.75rem 0; border-bottom: 1px solid #dfe1e2;">
          <p class="usa-text-bold">Approved deployment request</p>
          <p class="usa-text-small usa-text-secondary">Request #12345 | Yesterday at 3:45 PM</p>
        </li>
        <li style="padding: 0.75rem 0; border-bottom: 1px solid #dfe1e2;">
          <p class="usa-text-bold">Created new team member</p>
          <p class="usa-text-small usa-text-secondary">User: John Doe | March 20, 2026</p>
        </li>
        <li style="padding: 0.75rem 0;">
          <p class="usa-text-bold">Changed notification settings</p>
          <p class="usa-text-small usa-text-secondary">March 18, 2026</p>
        </li>
      </ul>
    </div>
    <footer class="usa-card__footer">
      <a href="#" class="usa-button usa-button--outline">View all activity</a>
    </footer>
  </div>
</div>

## Profile Privacy Settings

A section for managing privacy and visibility preferences.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Privacy settings</h2>
    </header>
    <div class="usa-card__body">
      <form class="usa-form">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Profile visibility</legend>
          <div class="usa-radio">
            <input class="usa-radio__input" id="visibility-public" type="radio" name="visibility" value="public" checked>
            <label class="usa-radio__label" for="visibility-public">Public - Visible to all agency members</label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input" id="visibility-private" type="radio" name="visibility" value="private">
            <label class="usa-radio__label" for="visibility-private">Private - Only visible to administrators</label>
          </div>
        </fieldset>

        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Show on profile</legend>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="show-email" type="checkbox" name="show-email" checked>
            <label class="usa-checkbox__label" for="show-email">Email address</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="show-phone" type="checkbox" name="show-phone">
            <label class="usa-checkbox__label" for="show-phone">Phone number</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="show-location" type="checkbox" name="show-location" checked>
            <label class="usa-checkbox__label" for="show-location">Office location</label>
          </div>
        </fieldset>

        <div class="usa-fieldset">
          <button class="usa-button" type="submit">Save privacy settings</button>
        </div>
      </form>
    </div>
  </div>
</div>

## Account Management

Options for account deactivation and data export.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Account management</h2>
    </header>
    <div class="usa-card__body">
      <div class="grid-grid-row">
        <div class="grid-col-6">
          <h3>Export your data</h3>
          <p class="usa-text-small">Download a copy of all your profile data and activity history.</p>
          <button class="usa-button usa-button--outline" type="button">Request data export</button>
        </div>
        <div class="grid-col-6">
          <h3>Deactivate account</h3>
          <p class="usa-text-small usa-text-red">This action is permanent and cannot be undone.</p>
          <button class="usa-button usa-button--secondary usa-button--unstyled usa-text-red" type="button">Deactivate account</button>
        </div>
      </div>
    </div>
  </div>
</div>

## Accessibility Considerations

- Use proper heading hierarchy for profile sections
- Ensure form labels are associated with inputs
- Provide alt text for profile photos
- Use semantic HTML for profile data display
- Ensure activity lists are accessible with screen readers
- Use `aria-current` for active navigation items

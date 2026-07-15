---
layout: sandbox
title: Index Settings
---

# Settings Page

Settings and configuration pages allow users to manage their preferences, account details, and application configurations.

## User Settings Page

A complete settings page with multiple configuration sections.

<div class="grid-grid-row">
  <div class="grid-col-3">
    <nav class="usa-sidenav" aria-label="Settings navigation">
      <ul class="usa-sidenav__list">
        <li class="usa-sidenav__item"><a href="#" class="usa-current">Profile</a></li>
        <li class="usa-sidenav__item"><a href="#">Notifications</a></li>
        <li class="usa-sidenav__item"><a href="#">Security</a></li>
        <li class="usa-sidenav__item"><a href="#">Privacy</a></li>
        <li class="usa-sidenav__item"><a href="#">Accessibility</a></li>
      </ul>
    </nav>
  </div>
  <div class="grid-col-9">
    <h2>Profile settings</h2>
    <p class="usa-intro">Manage your account information and preferences.</p>

    <div class="usa-card">
      <div class="usa-card__container">
        <header class="usa-card__header">
          <h3 class="usa-card__heading">Personal information</h3>
        </header>
        <div class="usa-card__body">
          <form class="usa-form usa-form--large">
            <div class="usa-fieldset">
              <label class="usa-label" for="settings-name">Display name</label>
              <input class="usa-input" id="settings-name" name="settings-name" type="text" value="Jane Smith">
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="settings-email">Email address</label>
              <input class="usa-input" id="settings-email" name="settings-email" type="email" value="jane.smith@agency.gov" disabled>
              <span class="usa-hint">Contact IT to change your email address</span>
            </div>
            <div class="usa-fieldset">
              <label class="usa-label" for="settings-phone">Phone number</label>
              <input class="usa-input" id="settings-phone" name="settings-phone" type="tel" value="(555) 123-4567">
            </div>
            <div class="usa-fieldset">
              <button class="usa-button" type="submit">Save changes</button>
              <button class="usa-button usa-button--unstyled" type="reset">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

## Notification Settings

A settings page for managing email and push notification preferences.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Notification preferences</h2>
      <p class="usa-card__subheading">Choose how and when you receive notifications</p>
    </header>
    <div class="usa-card__body">
      <form class="usa-form">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Email notifications</legend>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="notify-updates" type="checkbox" name="notify-updates" checked>
            <label class="usa-checkbox__label" for="notify-updates">System updates and announcements</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="notify-security" type="checkbox" name="notify-security" checked>
            <label class="usa-checkbox__label" for="notify-security">Security alerts</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="notify-activity" type="checkbox" name="notify-activity">
            <label class="usa-checkbox__label" for="notify-activity">Account activity reports</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="notify-newsletter" type="checkbox" name="notify-newsletter">
            <label class="usa-checkbox__label" for="notify-newsletter">Monthly newsletter</label>
          </div>
        </fieldset>

        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Email frequency</legend>
          <div class="usa-radio">
            <input class="usa-radio__input" id="freq-realtime" type="radio" name="notify-frequency" value="realtime" checked>
            <label class="usa-radio__label" for="freq-realtime">Real-time</label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input" id="freq-daily" type="radio" name="notify-frequency" value="daily">
            <label class="usa-radio__label" for="freq-daily">Daily digest</label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input" id="freq-weekly" type="radio" name="notify-frequency" value="weekly">
            <label class="usa-radio__label" for="freq-weekly">Weekly digest</label>
          </div>
        </fieldset>

        <div class="usa-fieldset">
          <button class="usa-button" type="submit">Save preferences</button>
        </div>
      </form>
    </div>
  </div>
</div>

## Security Settings

A settings page for managing password and security options.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Security settings</h2>
    </header>
    <div class="usa-card__body">
      <h3>Password</h3>
      <p class="usa-text-small usa-text-secondary">Last changed: March 1, 2026</p>
      <a href="/patterns/password-reset/" class="usa-button usa-button--outline">Change password</a>

      <hr class="usa-divider">

      <h3>Two-factor authentication</h3>
      <div class="usa-alert usa-alert--success usa-alert--slim" role="status">
        <div class="usa-alert__body">
          <p class="usa-alert__text">Two-factor authentication is enabled</p>
        </div>
      </div>
      <div class="usa-fieldset">
        <label class="usa-label" for="mfa-method">Preferred method</label>
        <select class="usa-select" id="mfa-method" name="mfa-method">
          <option value="authenticator" selected>Authenticator app</option>
          <option value="sms">SMS text message</option>
          <option value="email">Email</option>
        </select>
      </div>
      <button class="usa-button usa-button--outline" type="button">Manage backup codes</button>

      <hr class="usa-divider">

      <h3>Active sessions</h3>
      <table class="usa-table usa-table--striped">
        <caption>Currently active sessions</caption>
        <thead>
          <tr>
            <th scope="col">Device</th>
            <th scope="col">Location</th>
            <th scope="col">Last activity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Chrome on Windows</th>
            <td>Washington, DC</td>
            <td>Current session</td>
            <td><span class="usa-tag usa-tag--success">Active</span></td>
          </tr>
          <tr>
            <th scope="row">Safari on iPhone</th>
            <td>Arlington, VA</td>
            <td>2 hours ago</td>
            <td><button class="usa-button usa-button--unstyled usa-text-red" type="button">Revoke</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

## Application Settings

A settings page for configuring application-specific options.

<div class="usa-card usa-card--header-first">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Application settings</h2>
    </header>
    <div class="usa-card__body">
      <form class="usa-form">
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Display preferences</legend>
          <div class="usa-fieldset">
            <label class="usa-label" for="app-language">Language</label>
            <select class="usa-select" id="app-language" name="app-language">
              <option value="en" selected>English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div class="usa-fieldset">
            <label class="usa-label" for="app-timezone">Timezone</label>
            <select class="usa-select" id="app-timezone" name="app-timezone">
              <option value="est" selected>Eastern Time (ET)</option>
              <option value="cst">Central Time (CT)</option>
              <option value="mst">Mountain Time (MT)</option>
              <option value="pst">Pacific Time (PT)</option>
            </select>
          </div>
          <div class="usa-fieldset">
            <div class="usa-checkbox">
              <input class="usa-checkbox__input" id="app-compact" type="checkbox" name="app-compact">
              <label class="usa-checkbox__label" for="app-compact">Compact view mode</label>
            </div>
            <div class="usa-checkbox">
              <input class="usa-checkbox__input" id="app-dark" type="checkbox" name="app-dark">
              <label class="usa-checkbox__label" for="app-dark">Dark mode (beta)</label>
            </div>
          </div>
        </fieldset>

        <div class="usa-fieldset">
          <button class="usa-button" type="submit">Save settings</button>
        </div>
      </form>
    </div>
  </div>
</div>

## Settings with Success State

<div class="usa-alert usa-alert--success" role="status">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Settings saved successfully</h4>
    <p class="usa-alert__text">Your preferences have been updated. Changes will take effect immediately.</p>
  </div>
</div>

## Accessibility Considerations

- Group related settings with `fieldset` and `legend`
- Use descriptive labels for all form controls
- Provide feedback for save actions with `role="status"`
- Ensure settings tables have proper headers and captions
- Use `disabled` attribute for read-only fields

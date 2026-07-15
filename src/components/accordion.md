---
layout: sandbox
title: Accordion
---

# Accordion

An accordion is a collapsible content area that allows users to show or hide sections of related content.

## Default Accordion

<div class="usa-accordion" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="acc1">
      First Amendment
    </button>
  </h2>
  <div id="acc1" class="usa-accordion__content usa-prose">
    <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</p>
  </div>
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="acc2">
      Second Amendment
    </button>
  </h2>
  <div id="acc2" class="usa-accordion__content usa-prose">
    <p>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</p>
  </div>
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="acc3">
      Third Amendment
    </button>
  </h2>
  <div id="acc3" class="usa-accordion__content usa-prose">
    <p>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</p>
  </div>
</div>

## Bordered Accordion

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="bordered1">
      How do I reset my password?
    </button>
  </h2>
  <div id="bordered1" class="usa-accordion__content usa-prose">
    <p>To reset your password, click the "Forgot Password" link on the login page. You will receive an email with instructions to create a new password.</p>
  </div>
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="bordered2">
      How do I update my account information?
    </button>
  </h2>
  <div id="bordered2" class="usa-accordion__content usa-prose">
    <p>Navigate to your account settings page by clicking on your profile icon in the top right corner. Select "Edit Profile" to update your information.</p>
  </div>
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="bordered3">
      How do I contact support?
    </button>
  </h2>
  <div id="bordered3" class="usa-accordion__content usa-prose">
    <p>You can reach our support team by calling 1-800-GOV-HELP or emailing support@agency.gov. Our hours are Monday through Friday, 8am to 6pm EST.</p>
  </div>
</div>

## Multiselectable Accordion

<div class="usa-accordion" aria-multiselectable="true">
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="true" aria-controls="multi1">
      Expanded Section
    </button>
  </h2>
  <div id="multi1" class="usa-accordion__content usa-prose">
    <p>This section is expanded by default. Multiple sections can be open at the same time when <code>aria-multiselectable="true"</code> is set on the accordion container.</p>
  </div>
  <h2 class="usa-accordion__heading">
    <button class="usa-accordion__button" aria-expanded="false" aria-controls="multi2">
      Collapsed Section
    </button>
  </h2>
  <div id="multi2" class="usa-accordion__content usa-prose">
    <p>This section starts collapsed but can be opened independently of other sections.</p>
  </div>
</div>

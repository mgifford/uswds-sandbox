---
layout: sandbox
title: Link Checker Report
---

# Link Checker Report

Results from automated link validation scans.

Last scan: {% if link-report.timestamp %}{{ link-report.timestamp | date: "%B %d, %Y at %I:%M %p UTC" }}{% else %}No scan data available{% endif %}

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-4">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Total Links</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl text-ink">
          {% if link-report.summary.totalLinks > 0 %}{{ link-report.summary.totalLinks }}{% else %}--{% endif %}
        </span>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Working</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl usa-color-success">
          {% assign working = link-report.summary.totalLinks | minus: link-report.summary.brokenLinks %}
          {% if working > 0 %}{{ working }}{% else %}--{% endif %}
        </span>
      </div>
    </div>
  </div>
  <div class="grid-col-4">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Broken</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl usa-color-error">
          {% if link-report.summary.brokenLinks > 0 %}{{ link-report.summary.brokenLinks }}{% else %}0{% endif %}
        </span>
      </div>
    </div>
  </div>
</div>

{% if link-report.summary.brokenLinks > 0 %}
<section class="usa-section">
  <div class="usa-alert usa-alert--error" role="alert">
    <div class="usa-alert__body">
      <h4 class="usa-alert__heading">Broken Links Found</h4>
      <p class="usa-alert__text">{{ link-report.summary.brokenLinks }} broken link(s) were found. Check the uploaded artifact for details.</p>
    </div>
  </div>
</section>
{% else %}
<section class="usa-section">
  <div class="usa-alert usa-alert--success">
    <div class="usa-alert__body">
      <h4 class="usa-alert__heading">All Links Working</h4>
      <p class="usa-alert__text">No broken links were found during the scan.</p>
    </div>
  </div>
</section>
{% endif %}

<section class="bg-base-lightest padding-y-4 margin-top-4">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-bottom-2">About Link Checking</h2>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <h3 class="font-heading-lg">What We Check</h3>
        <ul class="usa-list">
          <li><strong>HTTP Status:</strong> Links returning 4xx or 5xx errors</li>
          <li><strong>Redirects:</strong> Links with unnecessary redirects</li>
          <li><strong>Timeouts:</strong> Links that take too long to respond</li>
          <li><strong>Internal Links:</strong> Links to pages within the site</li>
        </ul>
      </div>
      <div class="grid-col-6">
        <h3 class="font-heading-lg">Scan Schedule</h3>
        <ul class="usa-list">
          <li><strong>On Push:</strong> All links checked before deployment</li>
          <li><strong>Weekly:</strong> Full site scan every Monday</li>
          <li><strong>Manual:</strong> Run anytime via GitHub Actions</li>
        </ul>
      </div>
    </div>
  </div>
</section>
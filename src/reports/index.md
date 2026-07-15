---
layout: sandbox
title: Quality Reports
---

# Quality Reports

Comprehensive quality metrics and scan results for the USWDS Sandbox.

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Accessibility</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center {% if accessibility-report.summary.failed > 0 %}text-red{% else %}text-green{% endif %}">
          {% if accessibility-report.summary.totalTests > 0 %}
            {{ accessibility-report.summary.passed }}/{{ accessibility-report.summary.totalTests }}
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">tests passed</p>
      </div>
      <div class="usa-card__footer">
        <a href="/accessibility/" class="usa-button usa-button--outline width-full">View Report</a>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Performance</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center {% if lighthouse-report.summary.averagePerformance >= 90 %}text-green{% elsif lighthouse-report.summary.averagePerformance >= 50 %}text-yellow{% else %}text-red{% endif %}">
          {% if lighthouse-report.summary.averagePerformance > 0 %}
            {{ lighthouse-report.summary.averagePerformance }}
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">Lighthouse score</p>
      </div>
      <div class="usa-card__footer">
        <a href="/reports/lighthouse/" class="usa-button usa-button--outline width-full">View Report</a>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Links</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center {% if link-report.summary.brokenLinks > 0 %}text-red{% else %}text-green{% endif %}">
          {% if link-report.summary.totalLinks > 0 %}
            {{ link-report.summary.brokenLinks }}
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">broken links</p>
      </div>
      <div class="usa-card__footer">
        <a href="/reports/links/" class="usa-button usa-button--outline width-full">View Report</a>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Meta Tags</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center {% if meta-report.summary.failed > 0 %}text-red{% else %}text-green{% endif %}">
          {% if meta-report.summary.totalPages > 0 %}
            {% assign pass_rate = meta-report.summary.passed | times: 100 | divided_by: meta-report.summary.totalPages %}
            {{ pass_rate }}%
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">pass rate</p>
      </div>
      <div class="usa-card__footer">
        <a href="/reports/meta/" class="usa-button usa-button--outline width-full">View Report</a>
      </div>
    </div>
  </div>
</div>

<section class="bg-base-lightest padding-y-4">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-bottom-2">Recent Scan Results</h2>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <div class="usa-card">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Last Accessibility Scan</h3>
          </div>
          <div class="usa-card__body">
            {% if accessibility-report.timestamp %}
              <p><strong>Date:</strong> {{ accessibility-report.timestamp | date: "%B %d, %Y at %I:%M %p UTC" }}</p>
              <p><strong>Result:</strong> 
                {% if accessibility-report.summary.failed > 0 %}
                  <span class="usa-tag usa-tag--error">Failed</span>
                {% else %}
                  <span class="usa-tag usa-tag--success">Passed</span>
                {% endif %}
              </p>
            {% else %}
              <p>No scan data available</p>
            {% endif %}
          </div>
        </div>
      </div>
      <div class="grid-col-6">
        <div class="usa-card">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Last Lighthouse Scan</h3>
          </div>
          <div class="usa-card__body">
            {% if lighthouse-report.timestamp %}
              <p><strong>Date:</strong> {{ lighthouse-report.timestamp | date: "%B %d, %Y at %I:%M %p UTC" }}</p>
              <p><strong>Result:</strong> 
                {% if lighthouse-report.summary.averagePerformance >= 90 %}
                  <span class="usa-tag usa-tag--success">Good</span>
                {% elsif lighthouse-report.summary.averagePerformance >= 50 %}
                  <span class="usa-tag">Needs Improvement</span>
                {% else %}
                  <span class="usa-tag usa-tag--error">Poor</span>
                {% endif %}
              </p>
            {% else %}
              <p>No scan data available</p>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="grid-container padding-y-4">
  <h2 class="font-heading-xl margin-bottom-2">About These Reports</h2>
  <div class="grid-row grid-gap">
    <div class="grid-col-8">
      <p>These reports are automatically generated by GitHub Actions workflows that run on every push to the main branch and on pull requests. The scans ensure the USWDS Sandbox maintains high quality standards across multiple dimensions.</p>
      
      <h3 class="font-heading-lg">Scan Types</h3>
      <ul class="usa-list">
        <li><strong>Accessibility:</strong> WCAG 2.0/2.1 Level A and AA compliance using axe-core</li>
        <li><strong>Performance:</strong> Lighthouse scores for performance, accessibility, best practices, and SEO</li>
        <li><strong>Links:</strong> Broken link detection across all pages</li>
        <li><strong>Meta Tags:</strong> Validation of required and recommended meta tags</li>
      </ul>
      
      <h3 class="font-heading-lg">Schedule</h3>
      <ul class="usa-list">
        <li><strong>On Push:</strong> Accessibility, Lighthouse, and Meta Tags scans run on every push to main</li>
        <li><strong>On PR:</strong> All scans run to catch issues before merging</li>
        <li><strong>Weekly:</strong> Link checker runs every Monday to catch newly broken links</li>
      </ul>
    </div>
    <div class="grid-col-4">
      <div class="usa-card usa-card--flag">
        <div class="usa-card__header">
          <h3 class="usa-card__heading">Resources</h3>
        </div>
        <div class="usa-card__body">
          <ul class="usa-list">
            <li><a href="https://accessibility.digital.gov/">Digital.gov Accessibility</a></li>
            <li><a href="https://web.dev/performance/">Web.dev Performance</a></li>
            <li><a href="https://developers.google.com/web/tools/lighthouse">Lighthouse Documentation</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
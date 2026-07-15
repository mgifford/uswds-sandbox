---
layout: sandbox
title: Step Indicator
---

# Step Indicator

The step indicator component shows a user's progress through a multi-step process.

## Default Step Indicator

<nav aria-label="Progress">
  <div class="usa-step-indicator" aria-label="current step">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Personal info <span class="usa-sr-only">- Completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Authentication <span class="usa-sr-only">- Completed</span></span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
        <span class="usa-step-indicator__segment-label">Verification</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Confirmation</span>
      </li>
    </ol>
    <div class="usa-step-indicator__header">
      <h2 class="usa-step-indicator__title">Step 3 of 4: Verification</h2>
    </div>
    <div class="usa-step-indicator__body">
      <p>Verify your identity to continue. This is the current step in the process.</p>
    </div>
  </div>
</nav>

## Step Indicator with Centered Labels

<nav aria-label="Progress">
  <div class="usa-step-indicator usa-step-indicator--centered" aria-label="current step">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Step 1</span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Step 2</span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
        <span class="usa-step-indicator__segment-label">Step 3</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Step 4</span>
      </li>
    </ol>
    <div class="usa-step-indicator__header">
      <h2 class="usa-step-indicator__title">Current Step</h2>
    </div>
  </div>
</nav>

## Step Indicator without Labels

<nav aria-label="Progress">
  <div class="usa-step-indicator usa-step-indicator--no-labels" aria-label="current step">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete"></li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete"></li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true"></li>
      <li class="usa-step-indicator__segment"></li>
    </ol>
    <div class="usa-step-indicator__header">
      <h2 class="usa-step-indicator__title">Step 3 of 4</h2>
    </div>
  </div>
</nav>

## Small Step Indicator

<nav aria-label="Progress">
  <div class="usa-step-indicator usa-step-indicator--small" aria-label="current step">
    <ol class="usa-step-indicator__segments">
      <li class="usa-step-indicator__segment usa-step-indicator__segment--complete">
        <span class="usa-step-indicator__segment-label">Done</span>
      </li>
      <li class="usa-step-indicator__segment usa-step-indicator__segment--current" aria-current="true">
        <span class="usa-step-indicator__segment-label">In Progress</span>
      </li>
      <li class="usa-step-indicator__segment">
        <span class="usa-step-indicator__segment-label">Upcoming</span>
      </li>
    </ol>
  </div>
</nav>

---
layout: sandbox
title: Modal
---

# Modal

Modals present content in a layer above the page. They are used for important alerts or interactions that require user attention.

## Default Modal

<div class="usa-modal-wrapper" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="usa-modal-overlay">
    <div class="usa-modal usa-modal--lg" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div class="usa-modal__header">
        <h2 class="usa-modal__title" id="modal-title">Are you sure you want to continue?</h2>
        <button class="usa-modal__close" aria-label="Close modal" type="button">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
        </button>
      </div>
      <div class="usa-modal__body">
        <p id="modal-description">This action cannot be undone. All data will be permanently deleted from the server. Please confirm you want to proceed.</p>
      </div>
      <div class="usa-modal__footer">
        <button class="usa-button usa-button--unstyled usa-modal__close">Cancel</button>
        <button class="usa-button usa-button--secondary">Delete</button>
        <button class="usa-button">Confirm</button>
      </div>
    </div>
  </div>
</div>

## Small Modal

<div class="usa-modal-wrapper" role="dialog" aria-labelledby="small-modal-title" aria-hidden="true">
  <div class="usa-modal-overlay">
    <div class="usa-modal usa-modal--sm" role="dialog" aria-labelledby="small-modal-title">
      <div class="usa-modal__header">
        <h2 class="usa-modal__title" id="small-modal-title">Small modal</h2>
        <button class="usa-modal__close" aria-label="Close modal" type="button">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
        </button>
      </div>
      <div class="usa-modal__body">
        <p>This is a smaller modal dialog with less content space.</p>
      </div>
      <div class="usa-modal__footer">
        <button class="usa-button usa-button--unstyled usa-modal__close">Cancel</button>
        <button class="usa-button">Continue</button>
      </div>
    </div>
  </div>
</div>

## Modal with Custom Footer

<div class="usa-modal-wrapper" role="dialog" aria-labelledby="custom-modal-title" aria-hidden="true">
  <div class="usa-modal-overlay">
    <div class="usa-modal" role="dialog" aria-labelledby="custom-modal-title">
      <div class="usa-modal__header">
        <h2 class="usa-modal__title" id="custom-modal-title">Custom footer modal</h2>
        <button class="usa-modal__close" aria-label="Close modal" type="button">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
        </button>
      </div>
      <div class="usa-modal__body">
        <p>This modal has a custom footer with different button arrangements.</p>
      </div>
      <div class="usa-modal__footer">
        <button class="usa-button usa-button--outline">Learn more</button>
        <button class="usa-button">Got it</button>
      </div>
    </div>
  </div>
</div>

## Activation Code

<button
  type="button"
  class="usa-button"
  aria-controls="demo-modal"
  data-open-modal
>
  Open modal
</button>

<div class="usa-modal" id="demo-modal" role="dialog" aria-labelledby="demo-modal-title" aria-describedby="demo-modal-description">
  <div class="usa-modal__header">
    <h2 class="usa-modal__title" id="demo-modal-title">Open modal demo</h2>
    <button class="usa-modal__close" aria-label="Close this modal" type="button" data-close-modal>
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#close"></use></svg>
    </button>
  </div>
  <div class="usa-modal__body">
    <p id="demo-modal-description">This modal can be opened with a button click and closed with the X button or pressing Escape.</p>
  </div>
  <div class="usa-modal__footer">
    <button class="usa-button usa-button--unstyled usa-modal__close" data-close-modal>Cancel</button>
    <button class="usa-button" data-close-modal>Got it</button>
  </div>
</div>

---
layout: sandbox
title: Find a Federal Service Office
---

<section class="usa-hero usa-hero--media padding-y-4" style="background-image: url('/assets/img/heroes/find-office.jpg');">
  <div class="grid-container">
    <h1 class="usa-hero__heading">Find a Federal Service Office</h1>
    <p class="font-body-lg">Locate government offices near you for passports, Social Security, veterans services, and more. Schedule an appointment to skip the line.</p>
  </div>
</section>

<section class="usa-section" id="search">
  <div class="grid-container">
    <h2 class="font-heading-xl">Search for Offices</h2>
    
    <div class="usa-card">
      <div class="usa-card__body">
        <div class="grid-row grid-gap">
          <div class="grid-col-8">
            <div class="usa-form-group">
              <label class="usa-label" for="location-input">Enter your address or ZIP code</label>
              <input class="usa-input" id="location-input" type="text" placeholder="e.g., 20001 or 1600 Pennsylvania Ave NW, Washington, DC">
            </div>
          </div>
          <div class="grid-col-4">
            <div class="usa-form-group">
              <label class="usa-label" for="service-filter">Service type</label>
              <select class="usa-select" id="service-filter">
                <option value="all">All Services</option>
                <option value="passport">Passports</option>
                <option value="social-security">Social Security</option>
                <option value="veterans">Veterans Services</option>
                <option value="irs">IRS / Tax Services</option>
                <option value="dmv">DMV / Motor Vehicles</option>
                <option value="postal">Post Office</option>
              </select>
            </div>
          </div>
        </div>
        <button type="button" id="btn-search" class="usa-button">Search Offices</button>
      </div>
    </div>

    <div id="search-results" class="margin-top-4">
      <p id="results-status" class="usa-text-body">Enter your location to find nearby offices.</p>
      
      <div class="grid-row grid-gap" id="results-container">
        <!-- Results will be populated by JavaScript -->
      </div>
    </div>
  </div>
</section>

<section class="usa-section bg-base-lightest" id="offices">
  <div class="grid-container">
    <h2 class="font-heading-xl">Federal Offices Near You</h2>
    <p class="font-body-lg margin-bottom-2">Showing offices in the Washington, D.C. metropolitan area.</p>
    
    <div class="grid-row grid-gap">
      <div class="grid-col-4">
        <div class="usa-card" data-services="passport,social-security">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Federal Services Center - Downtown</h3>
            <span class="usa-tag">0.5 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 1200 Main Street, Washington, DC 20001</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Fri 8:00 AM - 5:00 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Passports, Social Security, Veterans</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-green">~15 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="Federal Services Center - Downtown">Schedule Appointment</button>
          </div>
        </div>
      </div>

      <div class="grid-col-4">
        <div class="usa-card" data-services="veterans,irs">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Veterans Affairs Office</h3>
            <span class="usa-tag">1.2 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 456 Veterans Blvd, Arlington, VA 22201</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Fri 9:00 AM - 4:00 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Veterans Benefits, VA Loans, Healthcare</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-green">~10 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="Veterans Affairs Office">Schedule Appointment</button>
          </div>
        </div>
      </div>

      <div class="grid-col-4">
        <div class="usa-card" data-services="passport,postal">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Main Post Office & Passport Services</h3>
            <span class="usa-tag">1.8 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 789 Constitution Ave NW, Washington, DC 20001</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Fri 8:30 AM - 6:00 PM, Sat 9:00 AM - 2:00 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Passports, Postal Services, Money Orders</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-yellow">~30 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="Main Post Office & Passport Services">Schedule Appointment</button>
          </div>
        </div>
      </div>

      <div class="grid-col-4">
        <div class="usa-card" data-services="social-security,irs">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Social Security Administration</h3>
            <span class="usa-tag">2.1 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 321 Federal Plaza, Bethesda, MD 20814</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Fri 9:00 AM - 4:00 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Social Security Cards, Benefits, Medicare</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-yellow">~45 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="Social Security Administration">Schedule Appointment</button>
          </div>
        </div>
      </div>

      <div class="grid-col-4">
        <div class="usa-card" data-services="irs">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">IRS Taxpayer Assistance Center</h3>
            <span class="usa-tag">2.5 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 555 Tax Lane, Silver Spring, MD 20910</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Fri 8:30 AM - 4:30 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Tax Help, ITIN Applications, Payment Plans</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-green">~20 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="IRS Taxpayer Assistance Center">Schedule Appointment</button>
          </div>
        </div>
      </div>

      <div class="grid-col-4">
        <div class="usa-card" data-services="dmv,passport">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Motor Vehicles Division</h3>
            <span class="usa-tag">3.0 mi</span>
          </div>
          <div class="usa-card__body">
            <p class="usa-text-small"><strong>Address:</strong> 888 DMV Drive, Falls Church, VA 22040</p>
            <p class="usa-text-small"><strong>Hours:</strong> Mon-Sat 8:00 AM - 5:00 PM</p>
            <p class="usa-text-small"><strong>Services:</strong> Driver's Licenses, Vehicle Registration, IDs</p>
            <p class="usa-text-small"><strong>Wait Time:</strong> <span class="text-red">~60 minutes</span></p>
          </div>
          <div class="usa-card__footer">
            <button class="usa-button usa-button--outline width-full schedule-btn" data-office="Motor Vehicles Division">Schedule Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Appointment Modal -->
<div class="usa-modal" id="appointment-modal" aria-labelledby="modal-heading" aria-describedby="modal-description" hidden>
  <div class="usa-modal__main">
    <h3 class="usa-modal__heading" id="modal-heading">Schedule an Appointment</h3>
    <div class="usa-modal__body">
      <p id="modal-description">Office: <strong id="modal-office-name"></strong></p>
      
      <div id="appointment-form">
        <div class="usa-form-group">
          <label class="usa-label" for="appt-name">Full Name <span class="usa-hint--required">*</span></label>
          <input class="usa-input" id="appt-name" type="text" required>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="appt-email">Email Address <span class="usa-hint--required">*</span></label>
          <input class="usa-input" id="appt-email" type="email" required>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="appt-phone">Phone Number</label>
          <input class="usa-input" id="appt-phone" type="tel" placeholder="555-555-5555">
        </div>
        
        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="appt-date">Preferred Date <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="appt-date" type="date" required>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="appt-time">Preferred Time <span class="usa-hint--required">*</span></label>
              <select class="usa-select" id="appt-time" required>
                <option value="">Select Time</option>
                <option value="8:00">8:00 AM</option>
                <option value="8:30">8:30 AM</option>
                <option value="9:00">9:00 AM</option>
                <option value="9:30">9:30 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="14:30">2:30 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="15:30">3:30 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="appt-service">Service Needed <span class="usa-hint--required">*</span></label>
          <select class="usa-select" id="appt-service" required>
            <option value="">Select Service</option>
            <option value="passport-new">New Passport Application</option>
            <option value="passport-renew">Passport Renewal</option>
            <option value="ss-card">Social Security Card</option>
            <option value="ss-benefits">Social Security Benefits</option>
            <option value="va-benefits">Veterans Benefits</option>
            <option value="va-healthcare">VA Healthcare</option>
            <option value="tax-help">Tax Assistance</option>
            <option value="itin">ITIN Application</option>
            <option value="dl">Driver's License</option>
            <option value="vehicle-reg">Vehicle Registration</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="appt-notes">Additional Notes</label>
          <textarea class="usa-textarea" id="appt-notes" rows="3" placeholder="Any special requirements or documents you'll be bringing..."></textarea>
        </div>
      </div>
      
      <div id="appointment-confirmation" hidden>
        <div class="usa-alert usa-alert--success">
          <div class="usa-alert__body">
            <h4 class="usa-alert__heading">Appointment Scheduled!</h4>
            <p class="usa-alert__text">You'll receive a confirmation email with your appointment details.</p>
          </div>
        </div>
        
        <div class="usa-card margin-top-4">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Appointment Details</h3>
          </div>
          <div class="usa-card__body">
            <p><strong>Confirmation #:</strong> <span id="appt-confirm-number" class="font-heading-xl text-accent-base"></span></p>
            <p><strong>Office:</strong> <span id="appt-confirm-office"></span></p>
            <p><strong>Date:</strong> <span id="appt-confirm-date"></span></p>
            <p><strong>Time:</strong> <span id="appt-confirm-time"></span></p>
            <p><strong>Service:</strong> <span id="appt-confirm-service"></span></p>
          </div>
        </div>
      </div>
    </div>
    
    <button type="button" class="usa-modal__close" aria-label="Close modal" id="modal-close">
      <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="/assets/img/usa-icons/close.svg"></use>
      </svg>
    </button>
  </div>
</div>

<script src="/assets/js/find-office.js"></script>

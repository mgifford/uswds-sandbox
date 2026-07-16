---
layout: sandbox
title: Federal Entrepreneur Support Program
---

<section class="usa-hero padding-y-4" style="background-color: #1a4480;">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="grid-col-8">
        <p class="usa-hero__subtitle font-heading-sm">U.S. Economic Development Administration</p>
        <h1 class="usa-hero__heading">Federal Entrepreneur Support Program</h1>
        <p class="font-body-lg">Helping American innovators start, grow, and succeed. Access grants, mentorship, and resources to turn your business idea into reality.</p>
        <div class="margin-top-3">
          <a href="#eligibility" class="usa-button usa-button--big usa-button--secondary">Check Eligibility</a>
          <a href="#apply" class="usa-button usa-button--big usa-button--outline usa-button--inverse">Apply Now</a>
        </div>
      </div>
      <div class="grid-col-4">
        <div class="bg-white padding-2 radius-md">
          <h3 class="font-heading-lg margin-top-0">Program Impact</h3>
          <ul class="usa-list">
            <li><strong>$500M</strong> available in grants</li>
            <li><strong>10,000+</strong> businesses funded</li>
            <li><strong>95%</strong> approval rate</li>
            <li><strong>50,000+</strong> jobs created</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="usa-section bg-base-lightest" id="eligibility">
  <div class="grid-container">
    <h2 class="font-heading-xl">Am I Eligible?</h2>
    <p class="font-body-lg margin-bottom-2">Answer a few quick questions to find out which programs you qualify for.</p>
    
    <div class="usa-card">
      <div class="usa-card__body">
        <div id="eligibility-wizard">
          <!-- Question 1 -->
          <div class="wizard-step" id="wizard-step-1">
            <fieldset class="usa-fieldset">
              <legend class="usa-legend usa-legend--large">What best describes your business?</legend>
              <div class="usa-radio">
                <input class="usa-radio__input" id="biz-startup" type="radio" name="business-type" value="startup">
                <label class="usa-radio__label" for="biz-startup">Startup (pre-revenue or <1 year)</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="biz-existing" type="radio" name="business-type" value="existing">
                <label class="usa-radio__label" for="biz-existing">Existing business (1-5 years old)</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="biz-veteran" type="radio" name="business-type" value="veteran">
                <label class="usa-radio__label" for="biz-veteran">Veteran-owned business</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="biz-women" type="radio" name="business-type" value="women">
                <label class="usa-radio__label" for="biz-women">Women-owned business</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="biz-rural" type="radio" name="business-type" value="rural">
                <label class="usa-radio__label" for="biz-rural">Rural business (population <50,000)</label>
              </div>
            </fieldset>
            <button type="button" class="usa-button margin-top-2" onclick="wizardNext(2)">Continue</button>
          </div>

          <!-- Question 2 -->
          <div class="wizard-step" id="wizard-step-2" hidden>
            <fieldset class="usa-fieldset">
              <legend class="usa-legend usa-legend--large">What is your annual revenue?</legend>
              <div class="usa-radio">
                <input class="usa-radio__input" id="rev-pre" type="radio" name="revenue" value="pre-revenue">
                <label class="usa-radio__label" for="rev-pre">Pre-revenue (no income yet)</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="rev-low" type="radio" name="revenue" value="under-50k">
                <label class="usa-radio__label" for="rev-low">Under $50,000</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="rev-mid" type="radio" name="revenue" value="50k-500k">
                <label class="usa-radio__label" for="rev-mid">$50,000 - $500,000</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="rev-high" type="radio" name="revenue" value="500k-5m">
                <label class="usa-radio__label" for="rev-high">$500,000 - $5,000,000</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="rev-enterprise" type="radio" name="revenue" value="over-5m">
                <label class="usa-radio__label" for="rev-enterprise">Over $5,000,000</label>
              </div>
            </fieldset>
            <div class="margin-top-2">
              <button type="button" class="usa-button usa-button--outline" onclick="wizardPrev(1)">Back</button>
              <button type="button" class="usa-button margin-left-1" onclick="wizardNext(3)">Continue</button>
            </div>
          </div>

          <!-- Question 3 -->
          <div class="wizard-step" id="wizard-step-3" hidden>
            <fieldset class="usa-fieldset">
              <legend class="usa-legend usa-legend--large">What industry are you in?</legend>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-tech" type="radio" name="industry" value="technology">
                <label class="usa-radio__label" for="ind-tech">Technology & Software</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-mfg" type="radio" name="industry" value="manufacturing">
                <label class="usa-radio__label" for="ind-mfg">Manufacturing</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-services" type="radio" name="industry" value="services">
                <label class="usa-radio__label" for="ind-services">Professional Services</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-ag" type="radio" name="industry" value="agriculture">
                <label class="usa-radio__label" for="ind-ag">Agriculture & Food</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-health" type="radio" name="industry" value="healthcare">
                <label class="usa-radio__label" for="ind-health">Healthcare</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-retail" type="radio" name="industry" value="retail">
                <label class="usa-radio__label" for="ind-retail">Retail & E-commerce</label>
              </div>
              <div class="usa-radio">
                <input class="usa-radio__input" id="ind-other" type="radio" name="industry" value="other">
                <label class="usa-radio__label" for="ind-other">Other</label>
              </div>
            </fieldset>
            <div class="margin-top-2">
              <button type="button" class="usa-button usa-button--outline" onclick="wizardPrev(2)">Back</button>
              <button type="button" class="usa-button margin-left-1" onclick="showResults()">See Results</button>
            </div>
          </div>

          <!-- Results -->
          <div class="wizard-step" id="wizard-results" hidden>
            <h3 class="font-heading-lg margin-top-0">You May Qualify For:</h3>
            <div id="eligibility-results"></div>
            <div class="margin-top-3">
              <button type="button" class="usa-button usa-button--outline" onclick="resetWizard()">Start Over</button>
              <a href="#apply" class="usa-button margin-left-1">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="usa-section" id="programs">
  <div class="grid-container">
    <h2 class="font-heading-xl">Program Tiers</h2>
    <p class="font-body-lg margin-bottom-2">Choose the program that fits your business stage and goals.</p>
    
    <div class="grid-row grid-gap">
      <div class="grid-col-4">
        <div class="usa-card usa-card--flag">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Launch Pad</h3>
            <span class="usa-tag">Startup</span>
          </div>
          <div class="usa-card__body">
            <p class="font-heading-2xl text-accent-base">Up to $10,000</p>
            <p>Perfect for new entrepreneurs turning ideas into reality.</p>
            <ul class="usa-list">
              <li>MVP development</li>
              <li>Market research</li>
              <li>Initial marketing</li>
              <li>Equipment purchases</li>
            </ul>
          </div>
          <div class="usa-card__footer">
            <a href="#apply" class="usa-button width-full">Apply for Launch Pad</a>
          </div>
        </div>
      </div>
      
      <div class="grid-col-4">
        <div class="usa-card usa-card--flag usa-card--accent-base">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Growth Engine</h3>
            <span class="usa-tag usa-tag--info">Growing</span>
          </div>
          <div class="usa-card__body">
            <p class="font-heading-2xl text-accent-base">Up to $50,000</p>
            <p>For established businesses ready to scale operations.</p>
            <ul class="usa-list">
              <li>Hiring and training</li>
              <li>Facility expansion</li>
              <li>Technology upgrades</li>
              <li>Inventory financing</li>
            </ul>
          </div>
          <div class="usa-card__footer">
            <a href="#apply" class="usa-button width-full">Apply for Growth Engine</a>
          </div>
        </div>
      </div>
      
      <div class="grid-col-4">
        <div class="usa-card usa-card--flag usa-card--accent-cool">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Innovation Accelerator</h3>
            <span class="usa-tag usa-tag--success">High-Growth</span>
          </div>
          <div class="usa-card__body">
            <p class="font-heading-2xl text-accent-base">Up to $100,000</p>
            <p>For high-potential businesses with significant job creation.</p>
            <ul class="usa-list">
              <li>Research & development</li>
              <li>Patent protection</li>
              <li>National expansion</li>
              <li>Strategic partnerships</li>
            </ul>
          </div>
          <div class="usa-card__footer">
            <a href="#apply" class="usa-button width-full">Apply for Innovation Accelerator</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="usa-section bg-base-lightest" id="how-it-works">
  <div class="grid-container">
    <h2 class="font-heading-xl">How It Works</h2>
    
    <div class="usa-process">
      <ol class="usa-process__list">
        <li class="usa-process__item usa-process__item--active">
          <div class="usa-process__header">
            <span class="usa-process__step-number">1</span>
            <h3 class="usa-process__heading">Apply Online</h3>
          </div>
          <p class="usa-process__text">Complete the application in 15 minutes. No paperwork required—everything is digital.</p>
        </li>
        <li class="usa-process__item">
          <div class="usa-process__header">
            <span class="usa-process__step-number">2</span>
            <h3 class="usa-process__heading">Expert Review</h3>
          </div>
          <p class="usa-process__text">Our team reviews your application and matches you with the best program tier. Takes 5-10 business days.</p>
        </li>
        <li class="usa-process__item">
          <div class="usa-process__header">
            <span class="usa-process__step-number">3</span>
            <h3 class="usa-process__heading">Get Funded</h3>
          </div>
          <p class="usa-process__text">Approved applicants receive funds via direct deposit within 14-21 business days. No repayment required.</p>
        </li>
      </ol>
    </div>
  </div>
</section>

<section class="usa-section" id="success-stories">
  <div class="grid-container">
    <h2 class="font-heading-xl">Success Stories</h2>
    <p class="font-body-lg margin-bottom-2">Meet entrepreneurs who used the program to grow their businesses.</p>
    
    <div class="grid-row grid-gap">
      <div class="grid-col-4">
        <div class="usa-card">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Maya Rodriguez</h3>
            <span class="usa-tag">Launch Pad Recipient</span>
          </div>
          <div class="usa-card__body">
            <p class="font-text-sm text-base-dark italic">"The $8,000 grant helped me develop my app prototype and get my first 100 customers. Within 6 months, I was generating revenue and hiring my first employee."</p>
            <p class="usa-text-small"><strong>Business:</strong> EcoTrack — Sustainable living app</p>
            <p class="usa-text-small"><strong>Result:</strong> 3 employees, $150K annual revenue</p>
          </div>
        </div>
      </div>
      
      <div class="grid-col-4">
        <div class="usa-card">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">James Chen</h3>
            <span class="usa-tag usa-tag--info">Growth Engine Recipient</span>
          </div>
          <div class="usa-card__body">
            <p class="font-text-sm text-base-dark italic">"We used the $45,000 to expand our manufacturing capacity and hire 5 new workers. The program gave us the boost we needed to compete with larger companies."</p>
            <p class="usa-text-small"><strong>Business:</strong> Precision Parts Co. — Custom manufacturing</p>
            <p class="usa-text-small"><strong>Result:</strong> 12 employees, $2M annual revenue</p>
          </div>
        </div>
      </div>
      
      <div class="grid-col-4">
        <div class="usa-card">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Aisha Patel</h3>
            <span class="usa-tag usa-tag--success">Innovation Accelerator Recipient</span>
          </div>
          <div class="usa-card__body">
            <p class="font-text-sm text-base-dark italic">"The $95,000 grant allowed us to patent our medical device and expand to 3 new states. We've now treated over 5,000 patients and are looking at international expansion."</p>
            <p class="usa-text-small"><strong>Business:</strong> MedTech Innovations — Medical devices</p>
            <p class="usa-text-small"><strong>Result:</strong> 25 employees, $8M annual revenue</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="usa-section bg-base-lightest" id="faq">
  <div class="grid-container">
    <h2 class="font-heading-xl">Frequently Asked Questions</h2>
    
    <div class="usa-accordion" aria-multiselectable="true">
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-1">
          Who is eligible to apply?
        </button>
      </h3>
      <div id="faq-1" class="usa-accordion__content" hidden>
        <p>U.S. citizens, permanent residents, and qualified aliens who own a business operating in the United States. Businesses must be for-profit, have fewer than 500 employees, and meet revenue requirements based on the program tier. Startups, existing businesses, veteran-owned, women-owned, and rural businesses are all eligible.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-2">
          What can grant funds be used for?
        </button>
      </h3>
      <div id="faq-2" class="usa-accordion__content" hidden>
        <p>Funds must be used for business development purposes including: equipment and technology, facility improvements, hiring and training, marketing and customer acquisition, inventory, research and development, and working capital. Funds cannot be used for personal expenses, debt repayment, or political activities.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-3">
          Do I need to repay the grant?
        </button>
      </h3>
      <div id="faq-3" class="usa-accordion__content" hidden>
        <p>No. These are grants, not loans. You do not repay grant funds. However, recipients must complete a brief impact report at 6 months and 12 months to help us understand how the funds were used and what outcomes were achieved.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-4">
          How long does the approval process take?
        </button>
      </h3>
      <div id="faq-4" class="usa-accordion__content" hidden>
        <p>Initial eligibility determination: 3-5 business days. Full review and tier matching: 5-10 business days. Funding disbursement: 14-21 business days after approval. Total time from application to funding: approximately 3-5 weeks.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-5">
          Can I apply for multiple program tiers?
        </button>
      </h3>
      <div id="faq-5" class="usa-accordion__content" hidden>
        <p>You can apply for one tier at a time. If your application is denied, you may reapply after 90 days. If you receive a grant, you can apply for a higher tier after 12 months if you've met all reporting requirements and demonstrated growth.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-6">
          What if my application is denied?
        </button>
      </h3>
      <div id="faq-6" class="usa-accordion__content" hidden>
        <p>You'll receive a detailed explanation of why your application was denied. Common reasons include incomplete documentation, ineligibility, or funding limits. You can reapply after 90 days, or appeal within 30 days if you believe there was an error in the review.</p>
      </div>

      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button" aria-expanded="false" aria-controls="faq-7">
          Are there reporting requirements?
        </button>
      </h3>
      <div id="faq-7" class="usa-accordion__content" hidden>
        <p>Yes. Recipients must submit a brief impact report at 6 months and 12 months after receiving funds. Reports cover how funds were used, number of jobs created or retained, and revenue impact. Reports are simple online forms that take approximately 15 minutes to complete.</p>
      </div>
    </div>
  </div>
</section>

<section class="usa-section" id="apply">
  <div class="grid-container">
    <h2 class="font-heading-xl">Start Your Application</h2>
    <p class="font-body-lg margin-bottom-2">All fields marked with an asterisk (<span class="usa-hint--required">*</span>) are required.</p>

    <div id="application-form-container">
      <!-- Step 1: Business Information -->
      <div id="step-1" class="application-step">
        <h3 class="font-heading-lg margin-top-0">Step 1: Business Information</h3>
        
        <div class="usa-form-group">
          <label class="usa-label" for="business-name">Business Name <span class="usa-hint--required">*</span></label>
          <input class="usa-input" id="business-name" name="business-name" type="text" required placeholder="Legal business name">
        </div>
        
        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="ein">Employer Identification Number (EIN) <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="ein" name="ein" type="text" required placeholder="XX-XXXXXXX">
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="date-established">Date Business Established <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="date-established" name="date-established" type="date" required>
            </div>
          </div>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="business-type-select">Business Type <span class="usa-hint--required">*</span></label>
          <select class="usa-select" id="business-type-select" name="business-type-select" required>
            <option value="">Select One</option>
            <option value="sole-proprietor">Sole Proprietorship</option>
            <option value="llc">Limited Liability Company (LLC)</option>
            <option value="corporation">Corporation</option>
            <option value="partnership">Partnership</option>
            <option value="nonprofit">Nonprofit (501c3)</option>
          </select>
        </div>
        
        <div class="grid-row grid-gap">
          <div class="grid-col-8">
            <div class="usa-form-group">
              <label class="usa-label" for="business-address">Business Address <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="business-address" name="business-address" type="text" required>
            </div>
          </div>
          <div class="grid-col-4">
            <div class="usa-form-group">
              <label class="usa-label" for="business-zip">ZIP Code <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="business-zip" name="business-zip" type="text" pattern="[0-9]{5}" required>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Financial Information -->
      <div id="step-2" class="application-step" hidden>
        <h3 class="font-heading-lg margin-top-0">Step 2: Financial Information</h3>
        
        <div class="grid-row grid-gap">
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="annual-revenue">Annual Revenue (Last 12 Months) <span class="usa-hint--required">*</span></label>
              <div class="usa-input-mask">
                <span class="usa-input-mask--currency">$</span>
                <input class="usa-input usa-input-mask--input" id="annual-revenue" name="annual-revenue" type="text" placeholder="0.00" required>
              </div>
            </div>
          </div>
          <div class="grid-col-6">
            <div class="usa-form-group">
              <label class="usa-label" for="employee-count">Number of Employees <span class="usa-hint--required">*</span></label>
              <input class="usa-input" id="employee-count" name="employee-count" type="number" min="0" max="500" required>
            </div>
          </div>
        </div>
        
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Program Tier Applying For <span class="usa-hint--required">*</span></legend>
          <div class="usa-radio">
            <input class="usa-radio__input" id="tier-launch" type="radio" name="program-tier" value="launch-pad" required>
            <label class="usa-radio__label" for="tier-launch">Launch Pad (Up to $10,000)</label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input" id="tier-growth" type="radio" name="program-tier" value="growth-engine">
            <label class="usa-radio__label" for="tier-growth">Growth Engine (Up to $50,000)</label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input" id="tier-innovation" type="radio" name="program-tier" value="innovation-accelerator">
            <label class="usa-radio__label" for="tier-innovation">Innovation Accelerator (Up to $100,000)</label>
          </div>
        </fieldset>
        
        <div class="usa-form-group">
          <label class="usa-label" for="funding-purpose">How Will You Use the Funds? <span class="usa-hint--required">*</span></label>
          <textarea class="usa-textarea" id="funding-purpose" name="funding-purpose" rows="4" required placeholder="Describe specifically how you plan to use the grant funds to grow your business..."></textarea>
          <span class="usa-hint">Be specific—this helps reviewers match you with the right program</span>
        </div>
      </div>

      <!-- Step 3: Impact & Certification -->
      <div id="step-3" class="application-step" hidden>
        <h3 class="font-heading-lg margin-top-0">Step 3: Impact Statement & Certification</h3>
        
        <div class="usa-form-group">
          <label class="usa-label" for="jobs-created">Expected Jobs Created (Next 12 Months) <span class="usa-hint--required">*</span></label>
          <input class="usa-input" id="jobs-created" name="jobs-created" type="number" min="0" required>
        </div>
        
        <div class="usa-form-group">
          <label class="usa-label" for="community-impact">Community Impact <span class="usa-hint--required">*</span></label>
          <textarea class="usa-textarea" id="community-impact" name="community-impact" rows="4" required placeholder="How will your business growth benefit your local community?"></textarea>
        </div>
        
        <fieldset class="usa-fieldset">
          <legend class="usa-legend">Business Ownership (Select all that apply)</legend>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="own-veteran" type="checkbox" name="ownership" value="veteran">
            <label class="usa-checkbox__label" for="own-veteran">Veteran-owned</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="own-women" type="checkbox" name="ownership" value="women">
            <label class="usa-checkbox__label" for="own-women">Women-owned</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="own-minority" type="checkbox" name="ownership" value="minority">
            <label class="usa-checkbox__label" for="own-minority">Minority-owned</label>
          </div>
          <div class="usa-checkbox">
            <input class="usa-checkbox__input" id="own-disability" type="checkbox" name="ownership" value="disability">
            <label class="usa-checkbox__label" for="own-disability">Disability-owned</label>
          </div>
        </fieldset>
        
        <div class="usa-checkbox margin-top-4">
          <input class="usa-checkbox__input" id="certification" type="checkbox" name="certification" required>
          <label class="usa-checkbox__label" for="certification">
            I certify that all information provided is true and accurate. I understand that providing false information may result in denial of assistance and potential legal consequences. <span class="usa-hint--required">*</span>
          </label>
        </div>
      </div>

      <!-- Confirmation -->
      <div id="step-confirmation" class="application-step" hidden>
        <div class="usa-alert usa-alert--success">
          <div class="usa-alert__body">
            <h4 class="usa-alert__heading">Application Submitted Successfully</h4>
            <p class="usa-alert__text">Your application has been received and is being processed.</p>
          </div>
        </div>

        <div class="usa-card margin-top-4">
          <div class="usa-card__header">
            <h3 class="usa-card__heading">Application Details</h3>
          </div>
          <div class="usa-card__body">
            <p><strong>Reference Number:</strong> <span id="reference-number" class="font-heading-xl text-accent-base"></span></p>
            <p><strong>Submitted:</strong> <span id="submission-date"></span></p>
            <p><strong>Business:</strong> <span id="confirmation-business"></span></p>
            <p><strong>Email:</strong> <span id="confirmation-email"></span></p>
          </div>
          <div class="usa-card__footer">
            <p class="usa-text-small">Save this reference number. You'll need it to check your application status or resume a saved application.</p>
          </div>
        </div>

        <div class="usa-alert usa-alert--info margin-top-4">
          <div class="usa-alert__body">
            <h4 class="usa-alert__heading">What Happens Next?</h4>
            <ul class="usa-list">
              <li>You'll receive a confirmation email within 24 hours</li>
              <li>Initial eligibility review: 3-5 business days</li>
              <li>Full review and tier matching: 5-10 business days</li>
              <li>Funding disbursement: 14-21 business days after approval</li>
              <li>Questions? Call 1-800-555-0188</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div id="form-navigation" class="margin-top-4">
        <button type="button" id="btn-prev" class="usa-button usa-button--outline" hidden>Previous</button>
        <button type="button" id="btn-next" class="usa-button">Save & Continue</button>
        <button type="button" id="btn-submit" class="usa-button usa-button--accent-cool" hidden>Submit Application</button>
        <button type="button" id="btn-save" class="usa-button usa-button--outline margin-left-1">Save Progress</button>
      </div>
    </div>

    <div id="saved-applications" class="margin-top-6">
      <h3 class="font-heading-lg">Resume a Saved Application</h3>
      <p>If you saved your progress, enter your business email address to continue where you left off.</p>
      <div class="usa-form-group">
        <label class="usa-label" for="resume-email">Email Address</label>
        <div class="display-flex">
          <input class="usa-input" id="resume-email" name="resume-email" type="email">
          <button type="button" id="btn-resume" class="usa-button margin-left-1">Resume</button>
        </div>
      </div>
      <div id="resume-status" class="margin-top-2" hidden></div>
    </div>
  </div>
</section>

<script src="/assets/js/eligibility-wizard.js"></script>
<script src="/assets/js/small-business.js"></script>

---
layout: sandbox
title: State Combobox Test
---

<section class="usa-section">
  <div class="grid-container">
    <h1 class="font-heading-xl">State Combobox Test</h1>
    <p class="font-body-lg">Test page for state/territory combo box keyboard accessibility across Firefox and Chrome. Two variants: USWDS combo box and native select fallback.</p>

    <div class="usa-alert usa-alert--info margin-bottom-4">
      <div class="usa-alert__body">
        <p class="usa-alert__text">Each selector writes its selected value and label to a live region below the form. Use this to verify that keyboard selection commits correctly in both browsers.</p>
      </div>
    </div>

    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <h2 class="font-heading-lg">USWDS Combo Box</h2>
        <div class="usa-form-group">
          <label class="usa-label" for="state-combo-box">Select a state or territory</label>
          <div class="usa-combo-box" data-placeholder="Select a state or territory...">
            <select class="usa-select" name="state-combo-box" id="state-combo-box">
              <option value>Select a state or territory</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
        </div>
        <div class="usa-alert usa-alert--success margin-top-2" hidden id="combo-box-output-container">
          <div class="usa-alert__body">
            <p class="usa-alert__heading">Selected value</p>
            <p class="usa-alert__text" id="combo-box-output">No selection</p>
          </div>
        </div>
      </div>

      <div class="grid-col-6">
        <h2 class="font-heading-lg">Native Select Fallback</h2>
        <div class="usa-form-group">
          <label class="usa-label" for="state-native-select">Select a state or territory</label>
          <select class="usa-select" name="state-native-select" id="state-native-select">
            <option value>Select a state or territory</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VI">Virgin Islands</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div class="usa-alert usa-alert--success margin-top-2" hidden id="native-select-output-container">
          <div class="usa-alert__body">
            <p class="usa-alert__heading">Selected value</p>
            <p class="usa-alert__text" id="native-select-output">No selection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var comboSelect = document.getElementById('state-combo-box');
    var comboOutput = document.getElementById('combo-box-output');
    var comboContainer = document.getElementById('combo-box-output-container');
    var nativeSelect = document.getElementById('state-native-select');
    var nativeOutput = document.getElementById('native-select-output');
    var nativeContainer = document.getElementById('native-select-output-container');

    function updateOutput(select, outputEl, containerEl) {
      var value = select.value;
      var label = select.options[select.selectedIndex]
        ? select.options[select.selectedIndex].text
        : '';
      if (value && value !== 'Select a state or territory') {
        outputEl.textContent = value + ' — ' + label;
        containerEl.hidden = false;
      } else {
        outputEl.textContent = 'No selection';
        containerEl.hidden = true;
      }
    }

    if (comboSelect) {
      comboSelect.addEventListener('change', function () {
        updateOutput(comboSelect, comboOutput, comboContainer);
      });
    }

    if (nativeSelect) {
      nativeSelect.addEventListener('change', function () {
        updateOutput(nativeSelect, nativeOutput, nativeContainer);
      });
    }
  });
</script>

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="numeric-controls"
export default class NumericControls extends Controller {
  static targets = ["value"];

  connect() {
    console.log("Numeric Controls connected"); // Useful for debugging to confirm connection
  }

  increment() {
    const currentValue = parseInt(this.valueTarget.value);
    const step = parseInt(this.valueTarget.step) || 1; // Default to 1 if step isn't defined
    const max = parseInt(this.valueTarget.max) || Infinity; // Handle case where max isn't defined
    console.log(parseInt(this.valueTarget.min));
    if (currentValue + step <= max) {
      this.valueTarget.value = currentValue + step;
    }
  }

  decrement() {
    const currentValue = parseInt(this.valueTarget.value);
    const step = parseInt(this.valueTarget.step) || 1; // Default to 1 if step isn't defined
    const min = parseInt(this.valueTarget.min);
    const safeMin = Number.isNaN(min) ? -Infinity : min;
    if (currentValue - step >= safeMin) {
      this.valueTarget.value = currentValue - step;
    }
  }
}

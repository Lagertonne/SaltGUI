import {OutputYaml} from '../output/OutputYaml.js';
import {PageRoute} from './Page.js';

export class OptionsRoute extends PageRoute {

  constructor(router) {
    super("^[\/]options$", "Options", "#page_options", "#button_options", router);
  }

  onShow() {
    const myThis = this;

    const templatesValue = window.localStorage.getItem("templates");
    const templatesTd = document.getElementById("option-templates-value");
    templatesTd.innerText = this.makeTemplatesValue(templatesValue);

    const publicPillarsValue = window.localStorage.getItem("public_pillars");
    const publicPillarsTd = document.getElementById("option-public-pillars-value");
    publicPillarsTd.innerText = this.makePublicPillarsValue(publicPillarsValue);

    const previewGrainsValue = window.localStorage.getItem("preview_grains");
    const previewGrainsTd = document.getElementById("option-preview-grains-value");
    previewGrainsTd.innerText = this.makePreviewGrainsValue(previewGrainsValue);

    const hideJobsValue = window.localStorage.getItem("hide_jobs");
    const hideJobsTd = document.getElementById("option-hide-jobs-value");
    hideJobsTd.innerText = this.makeHideJobsValue(hideJobsValue);

    const showJobsValue = window.localStorage.getItem("show_jobs");
    const showJobsTd = document.getElementById("option-show-jobs-value");
    showJobsTd.innerText = this.makeShowJobsValue(showJobsValue);

    const nodegroupsValue = window.localStorage.getItem("nodegroups");
    const nodegroupsTd = document.getElementById("option-nodegroups-value");
    nodegroupsTd.innerText = this.makeNodegroupsValue(nodegroupsValue);

    const outputFormatsValue = window.localStorage.getItem("output_formats");
    const outputFormatsTd = document.getElementById("option-output-formats-value");
    outputFormatsTd.innerText = this.makeOutputFormatsValue(outputFormatsValue);

    const datetimeFractionDigitsValue = window.localStorage.getItem("datetime_fraction_digits");
    const datetimeFractionDigitsTd = document.getElementById("option-datetime-fraction-digits-value");
    datetimeFractionDigitsTd.innerText = this.makeDatetimeFractionDigitsValue(datetimeFractionDigitsValue);
    const dfd0 = document.getElementById("datetime-fraction-digits0")
    dfd0.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 0) dfd0.checked = true;
    const dfd1 = document.getElementById("datetime-fraction-digits1")
    dfd1.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 1) dfd1.checked = true;
    const dfd2 = document.getElementById("datetime-fraction-digits2")
    dfd2.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 2) dfd2.checked = true;
    const dfd3 = document.getElementById("datetime-fraction-digits3")
    dfd3.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 3) dfd3.checked = true;
    const dfd4 = document.getElementById("datetime-fraction-digits4")
    dfd4.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 4) dfd4.checked = true;
    const dfd5 = document.getElementById("datetime-fraction-digits5")
    dfd5.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 5) dfd5.checked = true;
    const dfd6 = document.getElementById("datetime-fraction-digits6")
    dfd6.addEventListener("change", this.newDatetimeFractionDigits);
    if(datetimeFractionDigitsValue == 6) dfd6.checked = true;

    const useEventsValue = window.localStorage.getItem("use_events");
    const useEventsTd = document.getElementById("option-use-events-value");
    useEventsTd.innerText = this.makeUseEventsValue(useEventsValue);

    const tooltipModeValue = window.localStorage.getItem("tooltip_mode");
    const tooltipModeTd = document.getElementById("option-tooltip-mode-value");
    tooltipModeTd.innerText = this.makeTooltipModeValue(tooltipModeValue);
    const tm0 = document.getElementById("tooltip-mode-full")
    tm0.addEventListener("change", this.newTooltipMode);
    if(tooltipModeValue == "full") tm0.checked = true;
    const tm1 = document.getElementById("tooltip-mode-simple")
    tm1.addEventListener("change", this.newTooltipMode);
    if(tooltipModeValue == "simple") tm1.checked = true;
    const tm2 = document.getElementById("tooltip-mode-none")
    tm2.addEventListener("change", this.newTooltipMode);
    if(tooltipModeValue == "none") tm2.checked = true;

    const msgSpan = this.getPageElement().querySelector(".msg");
    msgSpan.style.display = "none";
  }

  parseAndFormat(valueStr) {
    if(valueStr === undefined) return "(undefined)";
    if(valueStr === "undefined") return "(undefined)";
    const value = JSON.parse(valueStr);
    return OutputYaml.formatYAML(value);
  }

  makeTemplatesValue(value) {
    return this.parseAndFormat(value);
  }

  makePublicPillarsValue(value) {
    return this.parseAndFormat(value);
  }

  makePreviewGrainsValue(value) {
    return this.parseAndFormat(value);
  }

  makeHideJobsValue(value) {
    return this.parseAndFormat(value);
  }

  makeShowJobsValue(value) {
    return this.parseAndFormat(value);
  }

  makeNodegroupsValue(value) {
    return this.parseAndFormat(value);
  }

  makeOutputFormatsValue(value) {
    return this.parseAndFormat(value);
  }

  makeDatetimeFractionDigitsValue(value) {
    return this.parseAndFormat(value);
  }

  newDatetimeFractionDigits(evt) {
    window.localStorage.setItem("datetime_fraction_digits", parseInt(evt.target.value));
    const datetimeFractionDigitsTd = document.getElementById("option-datetime-fraction-digits-value");
    datetimeFractionDigitsTd.innerText = evt.target.value;
  }

  makeUseEventsValue(value) {
    return this.parseAndFormat(value);
  }

  makeTooltipModeValue(value) {
    return value;
  }

  newTooltipMode(evt) {
    window.localStorage.setItem("tooltip_mode", evt.target.value);
    const tooltipModeTd = document.getElementById("option-tooltip-mode-value");
    tooltipModeTd.innerText = evt.target.value;
  }
}

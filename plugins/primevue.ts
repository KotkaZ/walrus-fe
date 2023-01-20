import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import FileUpload from 'primevue/fileupload';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Checkbox from 'primevue/checkbox';
import Slider from 'primevue/slider';
import InputSwitch from 'primevue/inputswitch';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import Chip from 'primevue/chip';
import Steps from 'primevue/steps';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import OverlayPanel from 'primevue/overlaypanel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  // Primevue Components
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('FileUpload', FileUpload);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('InputNumber', InputNumber);
  nuxtApp.vueApp.component('InputMask', InputMask);
  nuxtApp.vueApp.component('Checkbox', Checkbox);
  nuxtApp.vueApp.component('Slider', Slider);
  nuxtApp.vueApp.component('InputSwitch', InputSwitch);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
  nuxtApp.vueApp.component('AutoComplete', AutoComplete);
  nuxtApp.vueApp.component('Chip', Chip);
  nuxtApp.vueApp.component('Steps', Steps);
  nuxtApp.vueApp.component('Badge', Badge);
  nuxtApp.vueApp.component('DataTable', DataTable);
  nuxtApp.vueApp.component('Column', Column);
  nuxtApp.vueApp.component('DataView', DataView);
  nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);

  // Primevue Directives
  nuxtApp.vueApp.directive('ripple', Ripple);
  nuxtApp.vueApp.directive('badge', BadgeDirective);
  nuxtApp.vueApp.directive('styleclass', StyleClass);
});

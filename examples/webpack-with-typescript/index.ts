// eslint-disable-next-line import/no-unresolved
import { CookieConsentManager, DisplayMode } from '@almacareer/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  config: {
      cookie: {
        name:  'almacareer_ccm_example',
        domain: 'example.com',
        expiresAfterDays: 365,
      }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  CookieConsentManager('example', ccmArgs);
});

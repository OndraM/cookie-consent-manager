import {
  addSeparators,
  assembleCategoryAd,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryNecessary,
  assembleCategoryPersonalization,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';

const extra = {
  and: 'a',
  company: 'společnosti',
  companies: 'společnostem',
  legalName: 'Alma Career a společnostem z její obchodní skupiny',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: lang.consentTitle ?? 'Díky Cookies budou naše stránky ještě lepší',
      description: `
      ${assembleDescriptionIntro(
        'Když lépe pochopíme, co vás zajímá, budeme vám zobrazovat přesnější obsah na míru.',
        lang.descriptionIntro,
      )}
      <p>
        Kliknutím na tlačítko „Přijmout všechny“ dáte
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        souhlas s využíváním souborů Cookies na účely personalizace, analýzy a cíleného marketingu.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Další informace o Cookies a úpravu jejich používání naleznete ve <strong><a href="" data-cc="c-settings">vlastním nastavení</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Přijmout všechny',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Přijmout nezbytné', 'Vlastní nastavení'),
    },
    settings_modal: {
      title: 'Přizpůsobit nastavení Cookies',
      accept_all_btn: 'Přijmout všechny',
      reject_all_btn: 'Přijmout nezbytné',
      save_settings_btn: 'Uložit nastavení',
      cookie_table_headers: [{ name: 'Název' }, { description: 'Popis' }, { expiration: 'Platnost' }],
      blocks: [
        {
          description: `Abyste z našich stránek získali maximum, je nejlepší povolit všechny typy cookies.
            ${
              lang.settingsModalMoreInfo ??
              `Další informace o tom, co jsou cookies a jak s nimi pracujeme, najdete v <a href="https://www.almacareer.com/gdpr" target="_blank">Zásadách cookies</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Technicky nezbytné Cookies',
          'Tyto Cookies jsou pro správné fungování našeho webu nezbytné, proto není možné je vypnout. Bez nich by na našich stránkách např. nešel zobrazit žádný obsah nebo by nefungovalo přihlášení.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analytické Cookies',
          'Pomocí nich sledujeme, kolik lidí náš web navštěvuje a jak ho používají. Díky tomu můžeme stránky a další služby neustále vylepšovat.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkční Cookies',
          'Díky těmto Cookies jsou naše stránky ještě výkonnější a fungují lépe. Například nám umožňují používat chat, abychom na vaše otázky mohli odpovídat rychle a jednoduše.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketingové Cookies',
          'S těmito Cookies můžeme měřit, jak efektivní je naše reklama a cílené nabídky našich služeb. Marketingové Cookies nám umožní vás na Internetu upozornit na novinky, které vás můžou zajímat.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizační Cookies',
          'Naše služby fungují lépe, když je můžeme přizpůsobit na míru konkrétnímu uživateli. Povolením Personalizačních cookies zvýšíte šanci, že najdete právě takový obsah, jaký hledáte.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;

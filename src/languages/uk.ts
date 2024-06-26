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
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
  legalName: 'Alma Career та компаніям з її групи',
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
      title: lang.consentTitle ?? 'Цей сайт використовує файли cookie',
      description: `
      ${assembleDescriptionIntro(
        'Якщо ми краще зрозуміємо, що вас цікавить, ми покажемо вам точніший контент.',
        lang.descriptionIntro,
      )}
      <p>
        Натиснувши «Прийняти все», Ви даєте свою згоду
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Використання файлів Cookies Ви можете змінити в своїх <strong><a href="" data-cc="c-settings">власних Налаштуваннях</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Прийняти все',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Прийняття необхідно', 'Власнйe налаштуваннйe'),
    },
    settings_modal: {
      title: 'Користувацькі налаштування файлів Cookies',
      accept_all_btn: 'Прийняти все',
      reject_all_btn: 'Прийняття необхідно',
      save_settings_btn: 'Зберегти налаштування',
      cookie_table_headers: [{ name: 'Назва' }, { description: 'Опис' }, { expiration: 'Термін Дії' }],
      blocks: [
        {
          description: `Щоб отримати максимальну віддачу від нашого сайту, найкраще дозволити всі типи файлів Cookies.
            ${
              lang.settingsModalMoreInfo ??
              `Додаткову інформацію про те, що таке файли Cookies, і як ми з ними працюємо, можна отримати на сторінках <a href="https://www.almacareer.com/gdpr" target="_blank">Політика конфіденційності</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Технічно необхідні файли Cookies',
          'Ці файли Cookies необхідні для правильного функціонування нашого сайту, тому вимкнути їх неможливо. Без них було б неможливо відображати на нашому сайті його контент, або не працював би вхід на сайт.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Аналітичні файли Cookies',
          'Ми використовуємо їх для відстеження того, скільки людей відвідують наш веб-сайт і як вони ним користуються. Завдяки цьому ми можемо постійно покращувати сайт та інші сервіси.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Функціональні файли Cookies',
          'Ці файли Cookies роблять наш сайт ще більш ефективним і покращують його роботу. Наприклад, вони дозволяють нам використовувати чат, щоб швидко і легко відповідати на ваші запитання.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Маркетингові файли Cookies',
          'За допомогою цих файлів Cookies ми можемо оцінити, наскільки ефективна наша реклама і цільові пропозиції наших послуг. Маркетингові файли Cookies дозволяють нам інформувати Вас в Інтернеті про новини, які можуть вас зацікавити.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Персоналізовані файли Cookies',
          'Наші сервіси працюють краще, коли ми можемо адаптувати їх до конкретного користувача. Дозволивши персоналізовані файли Cookies, ви збільшуєте ймовірність того, що знайдете потрібний контент.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;

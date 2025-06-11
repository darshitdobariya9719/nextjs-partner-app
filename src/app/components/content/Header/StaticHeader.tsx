const StaticHeader = () => {
  const headerHtml = `
  <style>img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }</style>
  <link rel="alternate" type="application/rss+xml" title="Coachbar &raquo; Feed" href="https://coachbar.io/feed/" />
  <link rel="alternate" type="application/rss+xml" title="Coachbar &raquo; Comments Feed" href="https://coachbar.io/comments/feed/" />
  <link rel='stylesheet' id='xpro-elementor-addons-widgets-css' href='https://coachbar.io/wp-content/plugins/xpro-elementor-addons/assets/css/xpro-widgets.css?ver=1.4.7' media='all' />
  <link rel='stylesheet' id='xpro-elementor-addons-responsive-css' href='https://coachbar.io/wp-content/plugins/xpro-elementor-addons/assets/css/xpro-responsive.css?ver=1.4.7' media='all' />
  <link rel='stylesheet' id='font-awesome-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=5.15.3' media='all' />
  <link rel='stylesheet' id='xpro-icons-css' href='https://coachbar.io/wp-content/plugins/xpro-elementor-addons/assets/css/xpro-icons.min.css?ver=1.0.0' media='all' />
  <style id='wp-emoji-styles-inline-css'>
  
  .elementor-invisible {
  visibility: visible !important;
  }
  img.wp-smiley, img.emoji {
	  display: inline !important;
	  border: none !important;
	  box-shadow: none !important;
	  height: 1em !important;
	  width: 1em !important;
	  margin: 0 0.07em !important;
	  vertical-align: -0.1em !important;
	  background: none !important;
	  padding: 0 !important;
  }
  </style>
  <style id='safe-svg-svg-icon-style-inline-css'>
  .safe-svg-cover{text-align:center}.safe-svg-cover .safe-svg-inside{display:inline-block;max-width:100%}.safe-svg-cover svg{height:100%;max-height:100%;max-width:100%;width:100%}
  
  </style>
  <style id='global-styles-inline-css'>
  :root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:root { --wp--style--global--content-size: 800px;--wp--style--global--wide-size: 1200px; }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: underline;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
  :root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
  </style>
  <link rel='stylesheet' id='wp-job-manager-job-listings-css' href='https://coachbar.io/wp-content/plugins/wp-job-manager/assets/dist/css/job-listings.css?ver=598383a28ac5f9f156e4' media='all' />
  <link rel='stylesheet' id='dashicons-css' href='https://coachbar.io/wp-includes/css/dashicons.min.css?ver=6.7.2' media='all' />
  <link rel='stylesheet' id='wp-job-manager-applications-frontend-css' href='https://coachbar.io/wp-content/plugins/wp-job-manager-applications/assets/dist/css/frontend.css?ver=3.2.0' media='all' />
  <link rel='stylesheet' id='wp-job-manager-resume-frontend-css' href='https://coachbar.io/wp-content/plugins/wp-job-manager-resumes/assets/dist/css/frontend.css?ver=2.2.0' media='all' />
  
  <link rel='stylesheet' id='hello-elementor-theme-style-css' href='https://coachbar.io/wp-content/themes/hello-elementor/theme.min.css?ver=3.2.1' media='all' />
  <link rel='stylesheet' id='hello-elementor-header-footer-css' href='https://coachbar.io/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.2.1' media='all' />
  <link rel='stylesheet' id='elementor-frontend-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='elementor-post-5-css' href='https://coachbar.io/wp-content/uploads/elementor/css/post-5.css?ver=1741218831' media='all' />
  <link rel='stylesheet' id='widget-text-editor-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='widget-image-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='widget-nav-menu-css' href='https://coachbar.io/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css?ver=3.27.5' media='all' />
  <link rel='stylesheet' id='e-animation-fadeInUp-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='widget-icon-list-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='widget-social-icons-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='e-apple-webkit-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='xpro-elementor-widgetarea-editor-css' href='https://coachbar.io/wp-content/plugins/xpro-elementor-addons/inc/controls/assets/css/widgetarea-editor.css?ver=1.4.7' media='all' />
  <link rel='stylesheet' id='widget-heading-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='e-animation-fadeIn-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='e-animation-fadeInRight-css' href='https://coachbar.io/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInRight.min.css?ver=3.27.6' media='all' />
  <link rel='stylesheet' id='widget-loop-common-css' href='https://coachbar.io/wp-content/plugins/elementor-pro/assets/css/widget-loop-common.min.css?ver=3.27.5' media='all' />
  <link rel='stylesheet' id='widget-loop-grid-css' href='https://coachbar.io/wp-content/plugins/elementor-pro/assets/css/widget-loop-grid.min.css?ver=3.27.5' media='all' />
  <link rel='stylesheet' id='elementor-post-163-css' href='https://coachbar.io/wp-content/uploads/elementor/css/post-163.css?ver=1741225420' media='all' />
  <link rel='stylesheet' id='elementor-post-530-css' href='https://coachbar.io/wp-content/uploads/elementor/css/post-530.css?ver=1741218831' media='all' />
  <link rel='stylesheet' id='elementor-post-169-css' href='https://coachbar.io/wp-content/uploads/elementor/css/post-169.css?ver=1741218831' media='all' />
  <link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2' media='all' />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  
  <link rel="https://api.w.org/" href="https://coachbar.io/wp-json/" /><link rel="alternate" title="JSON" type="application/json" href="https://coachbar.io/wp-json/wp/v2/pages/163" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://coachbar.io/xmlrpc.php?rsd" />
  <link rel="canonical" href="https://coachbar.io/" />
  <link rel='shortlink' href='https://coachbar.io/' />
  <link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://coachbar.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcoachbar.io%2F" />
  <link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://coachbar.io/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcoachbar.io%2F&#038;format=xml" />
  <style id='script-67a993acef9f0-css' type='text/css'>
  .blog-content h1,
  .blog-content h2 {
  font-size: 38px;
  }
  
  .blog-content h3 {
  font-size: 32px;
  }
  
  .blog-content h4 {
  font-size: 28px;
  }
  
  .blog-content h5,
  .blog-content h6 {
  font-size: 22px;
  }
  
  .blog-content img {
  border-radius: 12px;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  }
  
  .blog-content h1,
  .blog-content h2,
  .blog-content h3,
  .blog-content h4,
  .blog-content h5,
  .blog-content h6 {
  color: #0c94ac;
  }
  
  .blog-content blockquote.wp-block-quote.is-layout-flow.wp-block-quote-is-layout-flow {
  font-size: 22px;
  font-weight: 500;
  color: #1C2C44;
  }
  
  </style>
  <meta name="generator" content="Elementor 3.27.6; features: e_font_icon_svg, additional_custom_breakpoints, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap">
		  <style>
			  .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
			  .e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
				  background-image: none !important;
			  }
			  @media screen and (max-height: 1024px) {
				  .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
				  .e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
					  background-image: none !important;
				  }
			  }
			  @media screen and (max-height: 640px) {
				  .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
				  .e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
					  background-image: none !important;
				  }
			  }
		  </style>
		  <link rel="icon" href="https://coachbar.io/wp-content/uploads/2025/02/CBFavicon-150x150.png" sizes="32x32" />
  <link rel="icon" href="https://coachbar.io/wp-content/uploads/2025/02/CBFavicon-300x300.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="https://coachbar.io/wp-content/uploads/2025/02/CBFavicon-300x300.png" />
  <meta name="msapplication-TileImage" content="https://coachbar.io/wp-content/uploads/2025/02/CBFavicon-300x300.png" />
  <div class="home page-template-default page page-id-163 wp-custom-logo wp-embed-responsive hello-elementor elementor-default elementor-kit-5 elementor-page elementor-page-163">
  
  
  <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
  
	  <div data-elementor-type="header" data-elementor-id="530" class="elementor elementor-530 elementor-location-header" data-elementor-post-type="elementor_library">
		  <div class="elementor-element elementor-element-2281892 e-con-full elementor-hidden-mobile e-flex e-con e-parent" data-id="2281892" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			  <div class="elementor-element elementor-element-1b486a9 no-padding-p elementor-widget elementor-widget-text-editor" data-id="1b486a9" data-element_type="widget" data-widget_type="text-editor.default">
			  <div class="elementor-widget-container">
								  <p>Innovators behind</p>								</div>
			  </div>
			  <div class="elementor-element elementor-element-8e27135 elementor-widget elementor-widget-image" data-id="8e27135" data-element_type="widget" data-widget_type="image.default">
			  <div class="elementor-widget-container">
															  <a href="https://appventory.com/" target="_blank">
						  <img fetchpriority="high" width="612" height="131" src="https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1-3.png" class="attachment-large size-large wp-image-266" alt="" srcset="https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1-3.png 612w, https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1-3-300x64.png 300w" sizes="(max-width: 612px) 100vw, 612px" />								</a>
														  </div>
			  </div>
			  <div class="elementor-element elementor-element-fff97c1 elementor-widget elementor-widget-image" data-id="fff97c1" data-element_type="widget" data-widget_type="image.default">
			  <div class="elementor-widget-container">
															  <a href="https://channelboost.com/" target="_blank">
						  <img width="681" height="144" src="https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1.png" class="attachment-large size-large wp-image-268" alt="" srcset="https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1.png 681w, https://coachbar.io/wp-content/uploads/2025/02/Appventory-Pink-1-300x63.png 300w" sizes="(max-width: 681px) 100vw, 681px" />								</a>
														  </div>
			  </div>
			  <div class="elementor-element elementor-element-05a1585 elementor-widget elementor-widget-image" data-id="05a1585" data-element_type="widget" data-widget_type="image.default">
			  <div class="elementor-widget-container">
															  <a href="https://stackplan.com/" target="_blank">
						  <img width="608" height="122" src="https://coachbar.io/wp-content/uploads/2025/02/StackPlans-Logo_White.png" class="attachment-large size-large wp-image-645" alt="" srcset="https://coachbar.io/wp-content/uploads/2025/02/StackPlans-Logo_White.png 608w, https://coachbar.io/wp-content/uploads/2025/02/StackPlans-Logo_White-300x60.png 300w" sizes="(max-width: 608px) 100vw, 608px" />								</a>
														  </div>
			  </div>
			  </div>
	  <div style="background-color: #0E859D;" class="elementor-element elementor-element-d20a1bf e-con-full nav-menu e-flex e-con e-parent" data-id="d20a1bf" data-element_type="container">
			  <div class="elementor-element elementor-element-912184d elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="912184d" data-element_type="widget" data-widget_type="theme-site-logo.default">
			  <div class="elementor-widget-container">
										  <a href="https://coachbar.io">
		  <img loading="lazy" width="189" height="61" src="https://coachbar.io/wp-content/uploads/2024/12/coachbar_logo_primary_all-white_site.svg" class="attachment-full size-full wp-image-541" alt="" />				</a>
										  </div>
			  </div>
	  <div class="elementor-element elementor-element-61bbc60 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child" data-id="61bbc60" data-element_type="container">
				  <div class="e-con-inner">
			  <div class="elementor-element elementor-element-7ef1d0b elementor-nav-menu--dropdown-none elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-nav-menu" data-id="7ef1d0b" data-element_type="widget" data-settings="{&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;svg class=\&quot;fa-svg-chevron-down e-font-icon-svg e-fas-chevron-down\&quot; viewBox=\&quot;0 0 448 512\&quot; xmlns=\&quot;http:\/\/www.w3.org\/2000\/svg\&quot;&gt;&lt;path d=\&quot;M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\&quot;&gt;&lt;\/path&gt;&lt;\/svg&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;layout&quot;:&quot;horizontal&quot;}" data-widget_type="nav-menu.default">
			  <div class="elementor-widget-container">
							  <nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
			  <ul id="menu-1-7ef1d0b" class="elementor-nav-menu" ><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-547"
				  onmouseover="document.getElementById('cb-website-menu-ul-1').style.display='block'; 
					 document.getElementById('cb-website-menu-link-1').classList.add('highlighted');"
		onmouseleave="setTimeout(() => { 
						if (!this.matches(':hover')) { 
						  document.getElementById('cb-website-menu-ul-1').style.display='none'; 
						  document.getElementById('cb-website-menu-link-1').classList.remove('highlighted'); 
						} 
					 }, 0);" ><a href="https://coachbar.io/product-archive/" class="elementor-item" id="cb-website-menu-link-1" 
				 
	 
				  >Products <span class="sub-arrow"><svg class="fa-svg-chevron-down e-font-icon-svg e-fas-chevron-down" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></span></a>
  <ul class="sub-menu elementor-nav-menu--dropdown" style="width: auto;" id="cb-website-menu-ul-1" 
  >
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-548"><a href="https://coachbar.io/appventory/" class="elementor-sub-item">AppVentory</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a href="https://coachbar.io/stackplans/" class="elementor-sub-item">StackPlans</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-549"><a href="https://coachbar.io/channelboost/" class="elementor-sub-item">ChannelBoost</a></li>
  </ul>
  </li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-551" 
  onmouseover="document.getElementById('cb-website-menu-ul-2').style.display='block'; 
  document.getElementById('cb-website-menu-link-2').classList.add('highlighted');"
  onmouseleave="setTimeout(() => { 
	 if (!this.matches(':hover')) { 
	   document.getElementById('cb-website-menu-ul-2').style.display='none'; 
	   document.getElementById('cb-website-menu-link-2').classList.remove('highlighted'); 
	 } 
  }, 0);"><a class="elementor-item" id="cb-website-menu-link-2">Who&#8217;s it for <span class="sub-arrow"><svg class="fa-svg-chevron-down e-font-icon-svg e-fas-chevron-down" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></span></a>
  <ul class="sub-menu elementor-nav-menu--dropdown" style="width: auto;" id="cb-website-menu-ul-2">
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a href="https://coachbar.io/businesses/" class="elementor-sub-item">Businesses</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-594"><a href="https://coachbar.io/accounting-and-bookkeeping-firms/" class="elementor-sub-item">Accounting and Bookkeeping Firms</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-593"><a href="https://coachbar.io/tech-advisors/" class="elementor-sub-item">Tech Advisors</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-592"><a href="https://coachbar.io/software-providers/" class="elementor-sub-item">Software Providers</a></li>
  </ul>
  </li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-596" 
  onmouseover="document.getElementById('cb-website-menu-ul-3').style.display='block'; 
  document.getElementById('cb-website-menu-link-3').classList.add('highlighted');"
  onmouseleave="setTimeout(() => { 
	 if (!this.matches(':hover')) { 
	   document.getElementById('cb-website-menu-ul-3').style.display='none'; 
	   document.getElementById('cb-website-menu-link-3').classList.remove('highlighted'); 
	 } 
  }, 0);"><a class="elementor-item" id="cb-website-menu-link-3">Company <span class="sub-arrow"><svg class="fa-svg-chevron-down e-font-icon-svg e-fas-chevron-down" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></span></a>
  <ul class="sub-menu elementor-nav-menu--dropdown" style="width: auto;" id="cb-website-menu-ul-3">
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-598"><a href="https://coachbar.io/about/" class="elementor-sub-item">About</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-600"><a href="https://coachbar.io/innovation-timeline/" class="elementor-sub-item">Innovation Timeline</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601"><a href="https://coachbar.io/partner-program/" class="elementor-sub-item">Partner Program</a></li>
  </ul>
  </li>
  </ul>			</nav>
					  <nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
			  <ul id="menu-2-7ef1d0b" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-547"><a href="https://coachbar.io/product-archive/" class="elementor-item" tabindex="-1">Products</a>
  <ul class="sub-menu elementor-nav-menu--dropdown">
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-548"><a href="https://coachbar.io/appventory/" class="elementor-sub-item" tabindex="-1">AppVentory</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a href="https://coachbar.io/stackplans/" class="elementor-sub-item" tabindex="-1">StackPlans</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-549"><a href="https://coachbar.io/channelboost/" class="elementor-sub-item" tabindex="-1">ChannelBoost</a></li>
  </ul>
  </li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-551"><a class="elementor-item" tabindex="-1">Who&#8217;s it for</a>
  <ul class="sub-menu elementor-nav-menu--dropdown">
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a href="https://coachbar.io/businesses/" class="elementor-sub-item" tabindex="-1">Businesses</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-594"><a href="https://coachbar.io/accounting-and-bookkeeping-firms/" class="elementor-sub-item" tabindex="-1">Accounting and Bookkeeping Firms</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-593"><a href="https://coachbar.io/tech-advisors/" class="elementor-sub-item" tabindex="-1">Tech Advisors</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-592"><a href="https://coachbar.io/software-providers/" class="elementor-sub-item" tabindex="-1">Software Providers</a></li>
  </ul>
  </li>
  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-596"><a class="elementor-item" tabindex="-1">Company</a>
  <ul class="sub-menu elementor-nav-menu--dropdown">
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-598"><a href="https://coachbar.io/about/" class="elementor-sub-item" tabindex="-1">About</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-600"><a href="https://coachbar.io/innovation-timeline/" class="elementor-sub-item" tabindex="-1">Innovation Timeline</a></li>
  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-601"><a href="https://coachbar.io/partner-program/" class="elementor-sub-item" tabindex="-1">Partner Program</a></li>
  </ul>
  </li>
  </ul>			</nav>
					  </div>
			  </div>
				  </div>
			  </div>
			  <div class="elementor-element elementor-element-c250654 elementor-hidden-desktop elementor-view-default elementor-widget elementor-widget-icon" data-id="c250654" data-element_type="widget" data-widget_type="icon.default">
			  <div class="elementor-widget-container">
						  <div class="elementor-icon-wrapper">
		  <a class="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjYwMyIsInRvZ2dsZSI6ZmFsc2V9">
		  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 9H13" stroke="#F9FCFF" stroke-linecap="round"></path><path d="M1 5H13" stroke="#F9FCFF" stroke-linecap="round"></path><path d="M1 1H13" stroke="#F9FCFF" stroke-linecap="round"></path></svg>			</a>
	  </div>
					  </div>
			  </div>
	  <div class="elementor-element elementor-element-dc9f19f elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-child" data-id="dc9f19f" data-element_type="container">
				  <div class="e-con-inner">
			  <div class="elementor-element elementor-element-f4624d7 primary-button light bright elementor-widget__width-auto elementor-widget elementor-widget-global elementor-global-452 elementor-widget-button" data-id="f4624d7" data-element_type="widget" data-widget_type="button.default">
			  <div class="elementor-widget-container">
								  <div class="elementor-button-wrapper">
				  <a class="elementor-button elementor-button-link elementor-size-sm" href="https://coachbar.io/contact/">
					  <span class="elementor-button-content-wrapper">
								  <span class="elementor-button-text">Get in Touch</span>
				  </span>
				  </a>
			  </div>
							  </div>
			  </div>
				  </div>
			  </div>
			  </div>
			  </div>
			  </div>`;
        
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: headerHtml }} />{" "}
    </>
  );
};

export default StaticHeader;

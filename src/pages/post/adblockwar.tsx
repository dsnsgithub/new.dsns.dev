import React from "react";
import adblock from "../../../public/images/blog/adblock.webp";
import Image from "next/image";
import CustomTags from "../components/CustomTags";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function AdBlockWar() {
	return (
		<div className="container">
			<CustomTags
				title={`Google vs Adblock - In-Depth Analysis`}
				description={`Google, in particular Youtube, has recently waged a full on war on ad blockers, as these browser extensions cut into their profits significantly. Unfortunately for Google,
							this battle cannot be won.`}
			></CustomTags>

			<div className="flex flex-row justify-between items-center not-prose text-slate-900 mt-10">
				<div className="flex flex-row">
					<Link href="/blog">
						<FaChevronLeft className="mr-6 text-4xl"></FaChevronLeft>
					</Link>
					<h1 className="text-4xl font-bold">Google vs Adblock - In-Depth Analysis</h1>
				</div>

				<h2 className="text-2xl">11/08/2023</h2>
			</div>

			<div className="lg:flex px-4">
				<div className="p-4 pt-6 lg:pt-12 lg:sticky top-0 self-start prose flex-[0.55]">
					<h2>Table of Contents</h2>
					<ul>
						<li>
							<a href="#introduction">Introduction</a>
						</li>
						<li>
							<a href="#a-fine-line">A Fine Line</a>
						</li>
						<li>
							<a href="#the-rise-of-adblock">The Rise of Adblock</a>
						</li>
						<li>
							<a href="#conflict-of-interest">Conflict of Interest</a>
						</li>
						<li>
							<a href="#what-does-this-have-to-do-with-youtube">What does this have to do with YouTube?</a>
						</li>
						<li>
							<a href="#the-war-technical-analysis">War - Technical Analysis</a>
						</li>
						<li>
							<a href="#how-is-youtube-detecting-ad-blockers">How is YouTube detecting ad blockers?</a>
						</li>
						<li>
							<a href="#how-ublock-origin-fights-back">How uBlock Origin fights back</a>
						</li>
						<li>
							<a href="#why-this-war-is-unwinnable-for-youtube">Why this war is unwinnable for YouTube</a>
						</li>
						<li>
							<a href="#finishing-notes">Finishing Notes</a>
						</li>
					</ul>
				</div>

				{/* Main Content */}
				<div className="prose p-6 md:p-2 lg:p-0">
					<article>
						<section id="introduction">
							<h2>Introduction</h2>
							<p>
								Google has recently waged a full-on war on ad blockers, as these browser extensions cut into their profits significantly. Unfortunately for Google, this battle{" "}
								<strong>cannot</strong> be won. This article will go in-depth on the growth of Adblock, the background that led to the war, the war itself, and how unpaid volunteers
								are bypassing YouTube{`'`}s anti-Adblock.
							</p>
						</section>

						<section id="a-fine-line">
							<h2>A Fine Line</h2>
							<p>
								YouTube, the largest video platform on the internet and owned by Google, used to have a simple business model, Google/YouTube would provide the platform and the hosting
								of videos for free, and in return, the people using the platform would have to watch ads. This worked for a while, but Google attempted to capitalize on its market
								share by increasing both the <a href="https://www.pcmag.com/news/youtube-irks-users-by-displaying-5-to-10-unskippable-ads-in-a-row">number of ads</a> and the duration
								of ads, with Google now pushing <a href="https://www.theverge.com/2023/5/18/23728150/youtube-tv-unskippable-ads-premium-pause-commercial">30-second unskippable ads</a>{" "}
								if you are watching on TV. People didn{`'`}t take these changes lightly, as they had enough and were looking for something to save them from multiple unskippable ads.
								This balance, or compromise, that YouTube held with the consumer was broken.
							</p>
						</section>

						<section id="the-rise-of-adblock">
							<h2>The Rise of Adblock</h2>
							<p>
								Behold, the savior to these long, unskippable ads. With Adblock, you no longer have to view ridiculous amounts of ads while browsing the internet. Adblock is typically
								found either in the form of network request blocking like <a href="https://pi-hole.net/">Pi-Hole</a> or a browser extension that would filter out requests that were
								caught in the filters, with these more advanced/integrated adblockers filtering out cosmetic artifacts that might be left behind when blocking ads. These browser
								extensions have grown in popularity for many years, with uBlock Origin, a popular AdBlock extension, having over{" "}
								<a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">10 million</a> downloads on the Google Web Store. In 2023, these
								adblock extensions are almost required to have a safe and usable experience on the internet. Even the{" "}
								<a href="https://techcrunch.com/2022/12/22/fbi-ad-blocker/">FBI is recommending that people install an adblocker</a> due to the added safety that is provided when
								malicious scripts and scam ads can also be blocked. Interestingly, these adblockers are becoming popular on the Google Web Store and on the Chrome browser, which are
								both controlled by Google. Why doesn{`'`}t Google block access to these ad blockers? Aren{`'`}t these extensions cutting into their profits?
							</p>
						</section>

						<section id="conflict-of-interest">
							<h2>Conflict of Interest</h2>
							<p>
								Google controls both the browser that these extensions run on and the platform that they are served/downloaded from, so why doesn{`'`}t Google remove these extensions?
								The reason is simple, Google wants to reap the benefits of its immense market share. By explicitly banning adblockers, it would incentivize many people to switch away
								from Chrome and the Google ecosystem, in search of other, non-Chromium-based browsers. Chrome allows the user to have very tight integration with Google services such
								as Google Docs, and <a href="https://gs.statcounter.com/browser-market-share">Google{`'`}s complete dominance</a> helps Google in other ways. In the end, there is
								nothing stopping Google from weakening or outright banning adblockers from their platform, as shown in the case when Google released plans for Manifest v3, an update to
								Chrome extensions that would{" "}
								<a href="https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening">potentially cripple many existing adblocker extensions</a> and
								force Chrome users to use inferior adblockers. Google has{" "}
								<a href="https://arstechnica.com/gadgets/2022/12/chrome-delays-plan-to-limit-ad-blockers-new-timeline-coming-in-march/">delayed/rolled back these proposed changes</a>,
								but it still shows how much of a grip Google has over the entire browser market, and the importance of having other non-Chromium based browser options.
							</p>
						</section>

						<section id="what-does-this-have-to-do-with-youtube">
							<h2>What does this have to do with YouTube?</h2>
							<p>
								These events all culminate together to show Google{`'`}s repeated actions to limit the effects of AdBlock on their profits. Google is a company after all, and with{" "}
								<a href="https://techcrunch.com/2023/04/25/youtube-q1-2023/">YouTube{`'`}s ad revenue stagnating and even dropping year over year</a>, they are heavily incentivized to
								make any money back that they can. The only problem with this is that it goes against the sentiment of most active internet users, who believe that the modern web is
								basically unusable without an adblocker. Luckily for the internet, these adblockers (especially uBlock origin) are extremely powerful, completely open source, and run
								by volunteers who believe that no one should have to watch long, unskippable, ads that sometimes{" "}
								<a href="https://www.dexerto.com/entertainment/mrbeast-hits-out-at-fake-youtube-ads-using-his-identity-1842598/">link to scams</a>. At this point, fighting adblock is
								fighting the entire internet, as people have realized that the current web with no adblock is basically a disaster waiting to happen.
							</p>
						</section>

						<section id="the-war-technical-analysis">
							<h2>The War + Technical Analysis</h2>
							<p>
								Even with these massive obstacles in the way, Google attempted to get rid of these adblockers once and for all on the largest video platform. Originally created as an
								experiment, a global rollout of anti-adblock popups started, stating that adblockers violate YouTube{`'`}s terms of service.{" "}
								<Image src={adblock} width={600} alt="adblock image"></Image> Almost immediately, volunteers from adblocker extensions like uBlock Origin immediately put out patches to
								bypass YouTube{`'`}s adblock detection. This initiated an all-out war between the Adblock developers and YouTube. You could draw a connection to the fight between David
								and Goliath, where Google, a multi-billion dollar corporation, is fighting a determined group of volunteers (who don{`'`}t accept donations) who believe no one should
								have to watch these ads.
							</p>
						</section>

						<section id="how-is-youtube-detecting-ad-blockers">
							<h2>How is YouTube detecting ad blockers?</h2>
							<p>
								YouTube uses its video player script, <code className="not-prose">desktop_polymer_enable_wil_icons.js</code>, to play YouTube videos. To detect ads, they check for
								specific properties that only exist when ads are playing. For instance <code className="not-prose">h.playerAds</code>, <code className="not-prose">h.adPlacements</code>
								, and other properties in the code created by Google{`'`}s Adsense are checked. YouTube ships minified and sometimes obfuscated code, both to make the file size smaller
								and make it harder to reverse engineer.
							</p>
						</section>

						<section id="how-ublock-origin-fights-back">
							<h2>How uBlock Origin fights back</h2>
							<p>
								This is one of many{" "}
								<a href="https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/quick-fixes.txt#:~:text=www.youtube.com%23%23%2Bjs(trusted%2Dreplace%2Dfetch%2Dresponse%2C%20/(contextParams%22%3A%22Q0F%5BA%2DZ%5DU.*%3F)%22adPlacements.*%3F%22%5C%7D%5C%7D%5C%7D%5C%5D%5C%2C/%2C%20%241%2C%20player%3Fkey%3D)">
									rules
								</a>{" "}
								that uBlock Origin uses to fight back.
							</p>

							<pre>{`www.youtube.com##+js(trusted-replace-fetch-response, /(contextParams":"Q0F[A-Z]U.*?)"adPlacements.*?"\}\}\}\]\,/, $1, player?key=)`}</pre>
							<p>
								uBlock Origin uses the{" "}
								<a href="https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#syntax-1:~:text=%E2%9A%A1%EF%B8%8F%20trusted%2Dreplace%2Dfetch%2Dresponse">
									trusted-replace-fetch-response
								</a>{" "}
								scriptlet, which was created <a href="https://github.com/uBlockOrigin/uBlock-issues/issues/2742">specifically for fighting back against YouTube</a>, to search for
								specific places in the YouTube script where this adblock detection starts, then replace it with new code that effectively neutralizes it. These filters constantly
								change as YouTube continues to modify its script in an attempt to outpace the Adblock developers. You might have noticed that YouTube was able to bypass your adblock
								detection for a few hours, but{" "}
								<a href="https://www.reddit.com/r/uBlockOrigin/comments/17j6ygs/youtube_antiadblock_and_ads_october_29_2023_mega/">updating your filters</a> and{" "}
								<a href="https://drhyperion451.github.io/does-uBO-bypass-yt/">checking if the developers have fixed their filters</a> is your best bet in staying ahead of YouTube.
							</p>
						</section>

						<section id="why-this-war-is-unwinnable-for-youtube">
							<h2>Why this war is unwinnable for YouTube</h2>
							<p>
								This arms race between unpaid volunteers and huge corporations over the free use of their products has happened before, in the form of online content piracy. People who
								don
								{`'`}t want to or can{`'`}t pay for movies/TV shows/etc. resort to piracy to get the product at absolutely no charge. While{" "}
								<a href="https://www.astronomaestro.com/2022/02/breaking-down-linus-take-on-adblock.html">comparing adblock to piracy</a> is considered a {`"`}hot take{`"`}, the
								solutions are similar. <strong>Offer the consumer an easier and more affordable way to use and consume your product, and they will stop pirating.</strong> People will
								only resort to piracy and adblock if the current offerings are bad enough that they are willing to go out of their way to make it better. This is what happened with
								music streaming, with LimeWire and similar pirating tools moving out of the public spotlight when better and easier offerings like streaming took off. Until better
								alternatives to piracy came out, <a href="https://www.youtube.com/watch?v=UJqyxmhDWTM">most/if not all attempts at fighting it off failed</a>.<br></br>
								<br></br>
								This analogy can be brought to YouTube, with <a href="https://www.youtube.com/premium">YouTube Premium</a> costing $13.99, which many consider way too much money for
								the content that is provided on YouTube. Along with this, this subscription service can only cover the large platforms where people are willing to pay for these
								subscriptions. This completely leaves out small blogs and websites that rely purely on ad revenue, so as ad block extensions gain popularity as people learn more about
								them, we might have to reconsider what money-making model we want on the web, either an ad-supported internet or an internet locked behind a paywall.
							</p>
						</section>

						<footer>
							<h2>Finishing Notes</h2>
							<section id="finishing-notes">
								<h3>Adblock Market Penetration</h3>
								<p>
									Even if this situation seems almost unwinnable for YouTube, it is not all doom and gloom. Most consumers don{`'`}t know about AdBlock extensions. The tech-literate
									people who do use AdBlock are{" "}
									<a href="https://www.insiderintelligence.com/insights/ad-blocking/#:~:text=As%20of%20March%202023%2C%2031%25%20of%20US%20adult%20consumers%20said%20they%20used%20an%20ad%20blocker%20to%20protect%20their%20privacy%2C%20with%20baby%20boomers%20(31%25)%20being%20more%20likely%20than%20Gen%20Zers%20(27%25)%20to%20use%20the%20tech%2C%20according%20to%20Tinuiti.%C2%A0">
										in the minority
									</a>{" "}
									when compared to the wider internet. YouTube blocking AdBlock might actually bring more attention to it, leading to the{" "}
									<a href="https://en.wikipedia.org/wiki/Perverse_incentive">cobra effect</a>, where fighting the problem actually makes it worse.
								</p>
							</section>

							<section>
								<h3>YouTube isn{"'"}t really losing much to Adblock</h3>
								<p>
									The people who took the time to download/install an extension to block ads are not really the target audience that advertisers want, as they were unlikely to click
									or buy anything shown to them in an ad, at least compared to the general population.
								</p>
							</section>

							<section>
								<h3>Update 11/10/2023</h3>
								<p>
									YouTube{"'"}s adblock crackdown might even be{" "}
									<a href="https://www.theverge.com/2023/11/7/23950513/youtube-ad-blocker-crackdown-privacy-advocates-eu">against EU privacy laws</a>. I would recommend researching
									this topic yourself, but it might just lead to more popups, like how websites are required to ask you to {`"`}accept cookies{`"`} to visit their website, not
									actually solve any problems.
								</p>
							</section>
						</footer>
					</article>
				</div>
			</div>
		</div>
	);
};

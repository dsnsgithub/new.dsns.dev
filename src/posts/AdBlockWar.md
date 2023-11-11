---
title: "Google vs Adblock - In-Depth Analysis"
date: "2023-11-08"
description: "Google, in particular Youtube, has recently waged a full on war on ad blockers, as these browser extensions cut into their profits significantly. Unfortunately for Google, this battle cannot be won."
---

## Table of Contents - Feel Free to Skip Around

#### Background Information:

-   [Introduction](#introduction)
-   [A Fine Line](#a-fine-line)
-   [The Rise of Adblock](#the-rise-of-adblock)
-   [Conflict of Interest](#conflict-of-interest)

#### YouTube/Actual War

-   [What does this have to do with YouTube?](#what-does-this-have-to-do-with-youtube)
-   [War - Technical Analysis](#the-war--technical-analysis)
-   [How uBlock Origin Fights Back](#how-ublock-origin-fights-back)
-   [Why This War is Unwinnable](#why-this-war-is-unwinnable-for-youtube)
-   [Finishing Notes](#finishing-notes)

## Introduction

Google has recently waged a full-on war on ad blockers, as these browser extensions cut into their profits significantly. Unfortunately for Google, this battle **cannot** be won. This article will go in-depth on the growth of Adblock, the background that led to the war, the war itself, and how unpaid volunteers are bypassing YouTube's anti-Adblock.

## A Fine Line

YouTube, the largest video platform on the internet and owned by Google, used to have a simple business model, Google/YouTube would provide the platform and the hosting of videos for free, and in return, the people using the platform would have to watch ads.
This worked for a while, but Google attempted to capitalize on its market share by increasing both the [number of ads](https://www.pcmag.com/news/youtube-irks-users-by-displaying-5-to-10-unskippable-ads-in-a-row) and the duration of ads, with Google now pushing [30-second unskippable ads](https://www.theverge.com/2023/5/18/23728150/youtube-tv-unskippable-ads-premium-pause-commercial) if you are watching on TV. People didn't take these changes lightly, as they had enough and were looking for something to save them from multiple unskippable ads. This balance, or compromise, that YouTube held with the consumer was broken.

## The Rise of Adblock

Behold, the savior to these long, unskippable ads. With Adblock, you no longer have to view ridiculous amounts of ads while browsing the internet. Adblock is typically found either in the form of network request blocking like [Pi-Hole](https://pi-hole.net/) or a browser extension that would filter out requests that were caught in the filters, with these more advanced/integrated adblockers filtering out cosmetic artifacts that might be left behind when blocking ads. These browser extensions have grown in popularity for many years, with uBlock Origin, a popular AdBlock extension, having over [10 million](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) downloads on the Google Web Store. In 2023, these adblock extensions are almost required to have a safe and usable experience on the internet. Even the [FBI is recommending that people install an adblocker](https://techcrunch.com/2022/12/22/fbi-ad-blocker/) due to the added safety that is provided when malicious scripts and scam ads can also be blocked.
Interestingly, these adblockers are becoming popular on the Google Web Store and on the Chrome browser, which are both controlled by Google. Why doesn't Google block access to these ad blockers? Aren't these extensions cutting into their profits?

## Conflict of Interest

Google controls both the browser that these extensions run on and the platform that they are served/downloaded from, so why doesn't Google remove these extensions? The reason is simple, Google wants to reap the benefits of
its immense market share. By explicitly banning adblockers, it would incentivize many people to switch away from Chrome and the Google ecosystem, in search of other, non-Chromium-based browsers. Chrome allows the user to have
very tight integration with Google services such as Google Docs, and [Google's complete dominance](https://gs.statcounter.com/browser-market-share) helps Google in other ways. In the end, there is nothing stopping Google from
weakening or outright banning adblockers from their platform, as shown in the case when Google released plans for Manifest v3, an update to Chrome extensions that would [potentially cripple many existing adblocker extensions](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening) and force Chrome users to use inferior adblockers. Google has [delayed/rolled back these proposed changes](https://arstechnica.com/gadgets/2022/12/chrome-delays-plan-to-limit-ad-blockers-new-timeline-coming-in-march/), but it still shows how much of a grip Google has over the entire browser market, and the importance of having other non-Chromium based browser options.

## What does this have to do with YouTube?

These events all culminate together to show Google's repeated actions to limit the effects of AdBlock on their profits. Google is a company after all, and with [YouTube's ad revenue stagnating and even dropping year over year](https://techcrunch.com/2023/04/25/youtube-q1-2023/), they are heavily incentivized to make any money back that they can. The only problem with this is that it goes against the sentiment of most active internet users, who
believe that the modern web is basically unusable without an adblocker. Luckily for the internet, these adblockers (especially uBlock origin) are extremely powerful, completely open source, and run by volunteers who believe that no one should have to watch long, unskippable, ads that sometimes [link to scams](https://www.dexerto.com/entertainment/mrbeast-hits-out-at-fake-youtube-ads-using-his-identity-1842598/). At this point, fighting adblock
is fighting the entire internet, as people have realized that the current web with no adblock is basically a disaster waiting to happen.

## The War + Technical Analysis

Even with these massive obstacles in the way, Google attempted to get rid of these adblockers once and for all on the largest video platform. Originally created as an experiment, a global rollout of anti-adblock popups started, stating that adblockers violate YouTube's terms of service. ![](/images/blog/adblock.webp)
Almost immediately, volunteers from adblocker extensions like uBlock Origin immediately put out patches to bypass YouTube's adblock detection. This initiated an all-out war between the Adblock developers and YouTube.
You could draw a connection to the fight between David and Goliath, where Google, a multi-billion dollar corporation, is fighting a determined group of volunteers (who don't accept donations) who believe no one should have to watch these ads.

### How is YouTube detecting ad blockers?

YouTube uses its video player script, `desktop_polymer_enable_wil_icons.js`, to play YouTube videos. To detect ads, they check for specific properties that only exist when ads are playing.
For instance `h.playerAds`, `h.adPlacements`, and other properties in the code created by Google's Adsense are checked. YouTube ships minified and sometimes obfuscated code, both to make the file size smaller and make it harder to reverse engineer.

### How uBlock Origin fights back.

This is one of many [rules](<https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/quick-fixes.txt#:~:text=www.youtube.com%23%23%2Bjs(trusted%2Dreplace%2Dfetch%2Dresponse%2C%20/(contextParams%22%3A%22Q0F%5BA%2DZ%5DU.*%3F)%22adPlacements.*%3F%22%5C%7D%5C%7D%5C%7D%5C%5D%5C%2C/%2C%20%241%2C%20player%3Fkey%3D)>) that uBlock Origin uses to fight back.

```
www.youtube.com##+js(trusted-replace-fetch-response, /(contextParams":"Q0F[A-Z]U.*?)"adPlacements.*?"\}\}\}\]\,/, $1, player?key=)
```

uBlock Origin uses the [`trusted-replace-fetch-response` scriptlet](https://github.com/AdguardTeam/Scriptlets/blob/master/wiki/about-trusted-scriptlets.md#syntax-1:~:text=%E2%9A%A1%EF%B8%8F%20trusted%2Dreplace%2Dfetch%2Dresponse), which was created [specifically for fighting back against YouTube](https://github.com/uBlockOrigin/uBlock-issues/issues/2742), to search for specific places in the YouTube script where this adblock detection starts, then replace it with new code that effectively neutralizes it. These filters constantly change as YouTube continues to modify its script in an attempt to outpace the Adblock developers. You might have noticed that YouTube was able to bypass your adblock detection for a few hours, but [updating your filters](https://www.reddit.com/r/uBlockOrigin/comments/17j6ygs/youtube_antiadblock_and_ads_october_29_2023_mega/) and [checking if the developers have fixed their filters](https://drhyperion451.github.io/does-uBO-bypass-yt/) is your best bet in staying ahead of YouTube.

## Why this war is unwinnable for YouTube

This arms race between unpaid volunteers and huge corporations over the free use of their products has happened before, in the form of online content piracy.
People who don't want to or can't pay for movies/TV shows/etc. resort to piracy to get the product at absolutely no charge. While [comparing adblock to piracy](https://www.astronomaestro.com/2022/02/breaking-down-linus-take-on-adblock.html) is considered a "hot take", the solutions are similar. **Offer the consumer an easier and more affordable way to use and consume your product, and they will stop pirating.** People will only resort to piracy and adblock if the current offerings are bad enough that they are willing to go out of their way to make it better. This is what happened with music streaming, with LimeWire and similar pirating tools moving out of the public spotlight when better and easier offerings like streaming took off. Until better alternatives to piracy came out, [most/if not all attempts at fighting it off failed](https://www.youtube.com/watch?v=UJqyxmhDWTM). This analogy can be brought to YouTube, with [YouTube Premium](https://www.youtube.com/premium) costing $13.99, which many consider way too much money for the content that is provided on YouTube. Along with this, this subscription service can only cover the large platforms where people are willing to pay for these subscriptions. This completely leaves out small blogs and websites that rely purely on ad revenue, so as ad block extensions gain popularity as people learn more about them, we might have to reconsider what money-making model we want on the web, either an ad-supported internet or an internet locked behind a paywall.

## Finishing Notes

### Adblock Market Penetration

Even if this situation seems almost unwinnable for YouTube, it is not all doom and gloom. Most consumers don't know about AdBlock extensions. The tech-literate people who do use AdBlock are [in the minority](<https://www.insiderintelligence.com/insights/ad-blocking/#:~:text=As%20of%20March%202023%2C%2031%25%20of%20US%20adult%20consumers%20said%20they%20used%20an%20ad%20blocker%20to%20protect%20their%20privacy%2C%20with%20baby%20boomers%20(31%25)%20being%20more%20likely%20than%20Gen%20Zers%20(27%25)%20to%20use%20the%20tech%2C%20according%20to%20Tinuiti.%C2%A0>) when compared to the wider internet. YouTube blocking AdBlock might actually bring more attention to it, leading to the [cobra effect](https://en.wikipedia.org/wiki/Perverse_incentive), where fighting the problem actually makes it worse.

### YouTube isn't really losing much to Adblock

The people who took the time to download/install an extension to block ads are not really the target audience that advertisers want, as they were unlikely to click or buy anything shown to them in an ad, at least compared to the general population.

### Update 11/10/2023

YouTube's adblock crackdown might even be [against EU privacy laws](https://www.theverge.com/2023/11/7/23950513/youtube-ad-blocker-crackdown-privacy-advocates-eu). I would recommend researching this topic yourself, but it might just lead to more popups, like how websites are required to ask you to "accept cookies" to visit their website, not actually solve any problems.

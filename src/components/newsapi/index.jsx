import React from 'react';

const data = [
    {
        "status": "ok",
        "totalResults": 100,
        "articles": [
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Devon M. Sayers",
                "title": "4 injured when a fire rescue helicopter crashes in Pompano Beach, Florida - CNN",
                "description": "A Broward County, Florida, sheriff’s fire rescue helicopter crashed Monday morning, sending four people to the hospital, including two crew members and two people from an apartment complex where it came down, authorities said.",
                "url": "https://www.cnn.com/2023/08/28/us/helicopter-crash-pompano-beach-florida/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230828101239-01-florida-helicopter-crash-0828.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-08-28T16:15:00Z",
                "content": "A Broward County, Florida, sheriffs fire rescue helicopter crashed Monday morning, sending four people to the hospital, including two crew members and two people from an apartment complex where it ca… [+847 chars]"
            },
            {
                "source": {
                    "id": "abc-news",
                    "name": "ABC News"
                },
                "author": "Katherine Faulders, Alexander Mallin, Laura Romero",
                "title": "Judge sets start date of March 4 for Trump's federal election interference trial - ABC News",
                "description": "Jack Smith wanted it to start in January, while Trump's attorneys proposed 2026.",
                "url": "https://abcnews.go.com/US/special-counsel-trump-attorneys-clash-start-date-federal/story?id=102608637",
                "urlToImage": "https://s.abcnews.com/images/US/donald-trump-rt-jef-230718_1689685493390_hpMain_16x9_992.jpg",
                "publishedAt": "2023-08-28T15:56:15Z",
                "content": "The federal judge overseeing former President Donald Trump's federal election interference case has ordered the trial to begin on March 4, 2024.\r\nThe ruling came after Trump's attorneys and special c… [+5042 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "Kylie Maclellan",
                "title": "UK air traffic issue fixed but flight disruption to continue - Reuters UK",
                "description": "Britain's National Air Traffic Service (NATS) was hit by a technical problem for several hours on Monday, causing widespread disruption to flights using UK airspace that airlines and airports said would continue for some time despite the issue being fixed.",
                "url": "https://www.reuters.com/world/uk/uk-air-traffic-control-experiencing-technical-issue-2023-08-28/",
                "urlToImage": "https://www.reuters.com/resizer/VLnInsGqI_NOdJoQInQnRpMcj1k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VMCIIIHE45LAVHO5PGAZB34BKM.jpg",
                "publishedAt": "2023-08-28T15:56:00Z",
                "content": "LONDON, Aug 28 (Reuters) - Britain's National Air Traffic Service (NATS) was hit by a technical problem for several hours on Monday, causing widespread disruption to flights using UK airspace that ai… [+2577 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Emma Kinery",
                "title": "Biden signs state of emergency order for Florida as Tropical Storm Idalia approaches - CNBC",
                "description": "Idalia is projected to grow to a Category 3 hurricane as it approaches the Florida coast.",
                "url": "https://www.cnbc.com/2023/08/28/tropical-storm-idalia-biden-signs-state-of-emergency-in-florida.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107292755-1693236748552-Screen_Shot_2023-08-28_at_113156_AM.png?v=1693236789&w=1920&h=1080",
                "publishedAt": "2023-08-28T15:42:18Z",
                "content": "WASHINGTON  President Joe Biden approved an emergency declaration for Florida as Tropical Storm Idalia approaches and strengthens.\r\nIdalia is projected to grow to a Category 3 hurricane as it approac… [+1538 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Variety"
                },
                "author": "Brent Lang",
                "title": "Box Office Battle: ‘Barbie’ and ‘Gran Turismo’ Feud Over Who Won the Weekend - Variety",
                "description": "“Barbie” and “Gran Turismo” are both claiming victory at the box office in a showdown that has a lot to do with movie accounting and shifting definitions of the meaning of a…",
                "url": "https://variety.com/2023/film/news/box-office-battle-barbie-gran-turismo-feud-over-first-place-finish-1235706049/",
                "urlToImage": "https://variety.com/wp-content/uploads/2023/08/DF-21712_2000x1126_thumbnail.jpg?w=1000&h=563&crop=1",
                "publishedAt": "2023-08-28T15:21:00Z",
                "content": "“Barbie” and “Gran Turismo” are both claiming victory at the box office in a showdown that has a lot to do with movie accounting and shifting definitions of the meaning of an opening weekend. \r\nWarne… [+1726 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Jen Christensen",
                "title": "Most cancer screenings don’t extend life, study finds, but don’t cancel that appointment - CNN",
                "description": "Most cancer screenings don’t ultimately give someone extra time beyond their regular lifespan, according to a new review of recent clinical trials involving more than 2.1 million people who had six kinds of common tests for cancer. But experts say this doesn’…",
                "url": "https://www.cnn.com/2023/08/28/health/cancer-screenings-extend-life-wellness/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230330103254-mammogram-stock.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-08-28T15:08:00Z",
                "content": "Most cancer screenings dont ultimately give someone extra time beyond their regular lifespan, according to a new review of clinical trials involving more than 2.1 million people who had six kinds of … [+5686 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5Mac"
                },
                "author": "Zac Hall",
                "title": "iPhone 15 Pro Max starting 'mass shipments' this week, says Kuo - 9to5Mac",
                "description": "Reliable supply chain analyst Ming Chi Kuo says that Apple’s upcoming iPhone 15 Pro Max “will start mass shipments this...",
                "url": "https://9to5mac.com/2023/08/28/iphone-15-pro-max-shipments/",
                "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Pro-and-Max-Comparison-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2023-08-28T14:50:00Z",
                "content": "Reliable supply chain analyst Ming Chi Kuo says that Apple’s upcoming iPhone 15 Pro Max “will start mass shipments this week” despite supply chain issue reports. Kuo also forecasts strong unit shipme… [+1987 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hollywood Reporter"
                },
                "author": "Mesfin Fekadu",
                "title": "Elton John “Back At Home and In Good Health” After Fall - Hollywood Reporter",
                "description": "The singer was discharged from the hospital Monday morning after slipping at his home in the South of France.",
                "url": "https://www.hollywoodreporter.com/news/music-news/elton-john-discharged-hospital-slip-france-1235575922/",
                "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/GettyImages-1479155117-H-2023.jpg?w=1024",
                "publishedAt": "2023-08-28T14:48:16Z",
                "content": "Elton John was discharged from the hospital on Monday morning after slipping at his home in the South of France.\r\nA spokesperson for the singer says the fall happened on Sunday. “Elton visited the lo… [+1423 chars]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": "Brian Windhorst",
                "title": "Team USA routs Greece to reach second round of FIBA World Cup - ESPN - ESPN",
                "description": "Team USA played a more focused, cleaner and overall better game in beating Greece 109-81 to move to 2-0 at the FIBA World Cup.",
                "url": "https://www.espn.com/olympics/story/_/id/38277146/team-usa-routs-greece-reach-second-round-fiba-world-cup",
                "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0828%2Fr1216825_1296x729_16%2D9.jpg",
                "publishedAt": "2023-08-28T14:38:00Z",
                "content": "MANILA, Philippines -- When coach Steve Kerr came to practice Sunday and saw some of his Team USA players were a little frustrated after a 27-point win, he smiled. The first FIBA World Cup lesson had… [+3586 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Gabrielle Fonrouge",
                "title": "Avon owner Natura & Co considers sale of The Body Shop as revenue declines - CNBC",
                "description": "Brazilian beauty conglomerate Natura & Co, which owns the Avon brand, is considering a sale of The Body Shop after numerous quarters of declining sales.",
                "url": "https://www.cnbc.com/2023/08/28/avon-owner-natura-co-considers-sale-of-the-body-shop.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/103846032-GettyImages-504737472.jpg?v=1693232036&w=1920&h=1080",
                "publishedAt": "2023-08-28T14:13:56Z",
                "content": "Brazilian beauty conglomerate Natura &amp; Co is considering a sale of The Body Shop after the skin care and cosmetics line saw another quarter of declining sales, according to a Monday securities fi… [+1820 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Ashley Capoot",
                "title": "Apple reportedly planning major iPad Pro upgrade - CNBC",
                "description": "Apple is reportedly planning some major updates for its iPad Pro next year.",
                "url": "https://www.cnbc.com/2023/08/28/apple-ipad-pro-major-upgrade-reportedly-coming-next-year.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/106871098-1618941466431Screen-Shot-2021-04-20-at-1-51-40-PM-png?v=1693232383&w=1920&h=1080",
                "publishedAt": "2023-08-28T13:59:01Z",
                "content": "Apple is planning some major updates for its iPad Pro in 2024, including a new Magic Keyboard, a shift to the M3 chip, and brighter and sharper displays, according to a report from Bloomberg.\r\nChange… [+1249 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Pff.com"
                },
                "author": "Gordon McGuinness",
                "title": "PFF Team of the 2023 NFL Preseason & Player Awards | NFL News, Rankings and Statistics - Pro Football Focus",
                "description": "Pittsburgh Steelers quarterback Kenny Pickett and Kansas City Chiefs wide receiver Ihmir Smith-Marsette headline PFF's Team of the 2023 NFL Preseason.",
                "url": "https://www.pff.com/news/nfl-preseason-pff-team-of-the-preseason-player-awards-2023",
                "urlToImage": "https://media.pff.com/2023/08/Herbig-Nick-Alamy-scaled.jpg?w=956&h=538",
                "publishedAt": "2023-08-28T13:48:51Z",
                "content": "QB Kenny Pickett: The Pittsburgh Steelers‘ second-year signal-caller leads the all-preseason team at quarterback.\r\n WR Ihmir Smith-Marsette: After lackluster stints with the Vikings and Bears, the th… [+2258 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Marianne Garvey",
                "title": "Adele stops Las Vegas show to tell security to leave a fan alone - CNN",
                "description": "Adele stopped her show Saturday night in Las Vegas to scold a security guard who was “bothering” an audience member.",
                "url": "https://www.cnn.com/2023/08/28/entertainment/adele-show-security-performer-performance-fans/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230828082923-adele-stops-las-vegas-show.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2023-08-28T13:33:00Z",
                "content": "Adele stopped her show Saturday night in Las Vegas to scold a security guard who was bothering an audience member.\r\nAccording to video of the incident shared on social media, Adele was in the middle … [+1265 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Niners Nation"
                },
                "author": "Kyle Posey",
                "title": "49ers 53-man roster projection: Nick Bosa insurance and 3 quarterbacks - Niners Nation",
                "description": "An extra receiver, a surprise at linebacker, and going “safe” along the defensive line.",
                "url": "https://www.ninersnation.com/2023/8/28/23848380/trey-lance-brandon-allen-nick-bosa-49ers-roster",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/DakH2GL4DzRzPQt2izQCKFd3l5w=/0x0:4800x2513/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24878038/1642660282.jpg",
                "publishedAt": "2023-08-28T13:30:00Z",
                "content": "The 53-man roster projection we made for the 49ersearlier this month will look a little different today as Trey Lance is now a Dallas Cowboy. One of the biggest questions surrounding the 49ers final … [+7160 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Jacob Kastrenakes",
                "title": "Google might recreate Apple's satellite SOS on Android - The Verge",
                "description": "Google Messages appears to be adding support for emergency SOS over satellite using Garmin Response. This could rival Apple’s feature for the iPhone 14.",
                "url": "https://www.theverge.com/2023/8/28/23848719/google-messages-satellite-emergency-services-garmin-rumor",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/zV7Z2L51UrEKDcJ0rGPWDOW51l4=/0x0:2040x1360/1200x628/filters:focal(842x637:843x638)/cdn.vox-cdn.com/uploads/chorus_asset/file/24751358/DSCF1750_Enhanced_NR.jpg",
                "publishedAt": "2023-08-28T13:23:02Z",
                "content": "Google might recreate Apples satellite SOS on Android\r\nGoogle might recreate Apples satellite SOS on Android\r\n / The details are limited right now, but they show emergency services features being int… [+2906 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "Reuters",
                "title": "French ban of abaya robes in schools draws applause, criticism - Reuters",
                "description": "French conservatives on Monday applauded the government's decision to <a href=\"/world/europe/france-ban-muslim-abaya-dress-state-schools-2023-08-27/\">ban children from wearing the abaya</a>, the loose-fitting, full-length robes worn by some Muslim women, in s…",
                "url": "https://www.reuters.com/world/europe/french-ban-abaya-robes-schools-draws-applause-criticism-2023-08-28/",
                "urlToImage": "https://www.reuters.com/resizer/cW30umSfYe4-4RmtEI_iMMlqjqU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q54X4NFUSVDR7LSKQFHVUSIZYU.JPG",
                "publishedAt": "2023-08-28T13:22:00Z",
                "content": "PARIS, Aug 28 (Reuters) - French conservatives on Monday applauded the government's decision to ban children from wearing the abaya, the loose-fitting, full-length robes worn by some Muslim women, in… [+3001 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ABC6OnYourSide.com"
                },
                "author": "WSYX Staff",
                "title": "COVID-19 virus rapidly evolving in Ohio deer, study shows - ABC6OnYourSide.com",
                "description": "Sientists collected more than 1,500 nasal swabs from free-ranging deer in 83 counties in 2021 and 2022. Of these samples, more than 10% came back positive",
                "url": "https://abc6onyourside.com/news/local/covid-19-virus-rapidly-evolves-in-deer-study-shows-coronavirus-sars-cov-2-ohio-state-university-delta-variant-alpha-variant-nature-weekly-andrew-bowman",
                "urlToImage": "https://abc6onyourside.com/resources/media/a877c515-0e4a-4e6f-9a60-44adc28a85b1-large16x9_DEER_DEANTAYLOR4.jpg?1644372666616",
                "publishedAt": "2023-08-28T13:11:42Z",
                "content": null
            },
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Al Jazeera",
                "title": "Who was Dmitry Utkin, a key Wagner mercenary who died alongside Prigozhin? - Al Jazeera English",
                "description": "The secretive war-hardened career-officer-turned-mercenary is said to have given the Wagner group its name.",
                "url": "https://www.aljazeera.com/news/2023/8/28/who-was-dmitry-utkin-a-key-wagner-mercenary-who-died-alongside-prigozhin",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-27T191449Z_193774146_RC2GW2A6GKOA_RTRMADP_3_RUSSIA-CRASH-WAGNER-NIZHNY-NOVGOROD-1693167680.jpg?resize=1920%2C1440",
                "publishedAt": "2023-08-28T13:05:01Z",
                "content": "Dmitry Utkin, a shadowy figure whose call sign Wagner allegedly inspired the Russian private mercenary groups name, died alongside Yevgeny Prigozhin in a plane crash on Wednesday.\r\nUtkin, who served … [+4720 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Jennifer Pattison Tuohy",
                "title": "iRobot launches two new robot vacuum mops - The Verge",
                "description": "The Roomba Combo j5 Plus and the Roomba Combo i5 Plus robot vacuums can also mop thanks to swappable mopping bins.",
                "url": "https://www.theverge.com/2023/8/28/23845899/irobot-roomba-combo-j5-plus-robot-vacuum-mop-price",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/OlScRXnBjeYnhni79gYUemjIa6k=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24874226/236757_iRobot_s_two_newest_Roombas_br_WJoel.jpg",
                "publishedAt": "2023-08-28T13:00:00Z",
                "content": "iRobots two newest Roombas bring more mopping\r\niRobots two newest Roombas bring more mopping\r\n / The Roomba Combo j5 Plus and Roomba Combo i5 Plus are robot vacuum mops with swappable mopping bins.\r\n… [+4345 chars]"
            },
            {
                "source": {
                    "id": "bloomberg",
                    "name": "Bloomberg"
                },
                "author": null,
                "title": "BRICS Invites Saudi, UAE, Egypt; Lira (TRY/USD) Outlook, Dubai Real Estate Boom - Bloomberg",
                "description": null,
                "url": "https://www.bloomberg.com/news/newsletters/2023-08-28/brics-invites-saudi-uae-egypt-lira-try-usd-outlook-dubai-real-estate-boom",
                "urlToImage": null,
                "publishedAt": "2023-08-28T12:38:06Z",
                "content": "To continue, please click the box below to let us know you're not a robot."
            },

        ]
    },

    [
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Paulo Trevisani, Dow Jones Newswires, Philip Waller, Dow Jones Newswires, Angela Palumbo, Emily Dattilo, Dan Molinski, Dow Jones Newswires, Sabrina Escobar, Shaina Mishkin, Jack Denton, Dominic Chopping, Dow Jones Newswires",
            "title": "U.S. Stock Futures Pause Ahead of JOLTs Data, With Jobs Report in Focus - Barron's",
            "description": "Barron's live coverage of financial markets, from stocks and bonds to oil and crypto.",
            "url": "https://www.barrons.com/livecoverage/stock-market-today-082923",
            "urlToImage": "https://images.barrons.com/im-783602/social",
            "publishedAt": "2023-08-29T16:26:00Z",
            "content": "The number of job openings dropped in July when economists were expecting an increase.\r\nThe Job Openings and Labor Turnover Survey showed that the number of job openings declined to 8.8 million in Ju… [+1422 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jordan Valinsky",
            "title": "3M agrees to pay $6 billion after US military said faulty earplugs led to hearing loss - CNN",
            "description": "3M has agreed to pay $6 billion to resolve roughly 300,000 lawsuits alleging that the manufacturing company supplied faulty combat earplugs to the military that resulted in significant injuries, such as hearing loss.",
            "url": "https://www.cnn.com/2023/08/29/business/3m-settlement-military-earplugs-lawsuits/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230829073308-01-3m-hq-040620-file-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-29T16:09:00Z",
            "content": "3M has agreed to pay $6 billion to resolve roughly 300,000 lawsuits alleging that the manufacturing company supplied faulty combat earplugs to the military that resulted in significant injuries, such… [+2122 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "Apple Announces 'Wonderlust' Event Expected to Feature iPhone 15, Apple Watch Series 9 and More - MacRumors",
            "description": "Apple today announced plans to hold a special event on Tuesday, September 12 at 10:00 a.m. Pacific Time. Like last year, the event will take place at...",
            "url": "https://www.macrumors.com/2023/08/29/apple-september-12-event-announcement/",
            "urlToImage": "https://images.macrumors.com/t/x8xcZyvgpJN-hrTnmu3gk6Xce-E=/2098x/article-new/2023/08/wonderlust-iphone-event-thumb.jpg",
            "publishedAt": "2023-08-29T16:01:19Z",
            "content": "Apple today announced plans to hold a special event on Tuesday, September 12 at 10:00 a.m. Pacific Time. Like last year, the event will take place at the Steve Jobs Theater on the Apple Park campus i… [+2201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC Bay Area"
            },
            "author": "Marcia Dunn | The Associated Press",
            "title": "Rare blue supermoon brightens the night sky this week in the closest full moon of the year - NBC Bay Area",
            "description": "Stargazers are in for a double treat this week: a rare blue supermoon with Saturn peeking from behind.",
            "url": "https://www.nbcbayarea.com/news/national-international/rare-blue-supermoon-brightens-the-night-sky-this-week-in-the-closest-full-moon-of-the-year/3306003/",
            "urlToImage": "https://media.nbcbayarea.com/2023/08/AP23240634559780.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-08-29T15:55:02Z",
            "content": "Stargazers are in for a double treat this week: a rare blue supermoon with Saturn peeking from behind.\r\nThe cosmic curtain rises Wednesday night with the second full moon of the month, the reason its… [+1250 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "NFL.com",
            "title": "Bills LB Von Miller to begin 2023 NFL season on PUP, out at least four games - NFL.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3Lm5mbC5jb20vbmV3cy9iaWxscy1sYi12b24tbWlsbGVyLXRvLWJlZ2luLTIwMjMtbmZsLXNlYXNvbi1vbi1wdXAtb3V0LWF0LWxlYXN0LWZvdXItZ2FtZXPSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-08-29T15:49:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Kim Zolciak Still Wearing Wedding Ring Despite Divorce with Kroy Biermann - TMZ",
            "description": "Kim Zolciak and Kroy Biermann might be in the middle of yet ANOTHER divorce, but you wouldn't know it by looking at her hand and listening to what she's got to say.",
            "url": "https://www.tmz.com/2023/08/29/kim-zolciak-kroy-biermann-wearing-ring-divorce-brielle/",
            "urlToImage": "https://imagez.tmz.com/image/a8/16by9/2023/08/29/a8a09ad6a4c5461abe132e89b43e650f_xl.jpg",
            "publishedAt": "2023-08-29T15:43:00Z",
            "content": "Kim Zolciak and Kroy Biermann might be in the middle of yet ANOTHER divorce, but you wouldn't know it by looking at her hand and listening to what she's got to say.\r\nThe ex-'RHOA' star and her daught… [+1204 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Christian Hoard",
            "title": "Bob Dylan Gave Post Malone Some Lyrics to Record. Then Things Got Weird - Rolling Stone",
            "description": "A collaboration between the legendary songwriter and the streaming-era pop star seemed like it was coming together. So how did it fizzle out?",
            "url": "https://www.rollingstone.com/music/music-features/bob-dylan-post-malone-collaboration-1234813148/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/08/Dylan_Malone.jpeg?w=1600&h=900&crop=1",
            "publishedAt": "2023-08-29T15:25:58Z",
            "content": "A few years ago, producer Michael Cash had an idea he thought could be big. Cash is based in Woodstock, New York, a town rich in Bob Dylan history. Early in the pandemic, he got to thinking about a r… [+7638 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "What to Expect From the Next iPad Mini, iPad Air, and Entry-Level iPad - MacRumors",
            "description": "While it is widely expected that Apple will release new iPad Pro models with OLED displays and an M3 chip in 2024, rumors about the next iPad mini,...",
            "url": "https://www.macrumors.com/2023/08/29/what-to-expect-from-next-ipad-mini-and-air/",
            "urlToImage": "https://images.macrumors.com/t/y6ZSy8WBm_S2t-Iwp48bYFrhtqA=/2500x/article-new/2023/08/iPad-mini-AND-Air-Feature.jpg",
            "publishedAt": "2023-08-29T15:15:16Z",
            "content": "While it is widely expected that Apple will release new iPad Pro models with OLED displays and an M3 chip in 2024, rumors about the next iPad mini, iPad Air, and entry-level iPad models have been few… [+2565 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "NPR",
            "title": "House Majority Leader Steve Scalise diagnosed with blood cancer - NPR",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiPmh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyMy8wOC8yOS8xMTk2NTU1NDAxL3NjYWxpc2UtYmxvb2QtY2FuY2Vy0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-08-29T15:14:19Z",
            "content": null
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Mithil Aggarwal, The Associated Press",
            "title": "Worm plucked from brain of woman in Australia - NBC News",
            "description": "A woman who was admitted to hospital with mystery symptoms in Australia had a live, parasitic worm plucked from her brain.",
            "url": "https://www.nbcnews.com/news/world/worm-plucked-brain-woman-australia-rcna102285",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230829-australia-brain-parasite-scan-mb-2up-0919-3c5825.jpg",
            "publishedAt": "2023-08-29T15:02:11Z",
            "content": "Infectious Disease expert Sanjaya Senanayake was working the wards in the Canberra Hospital in Australia that day when he got a call from his neurosurgical colleagues. \r\nHe did not expect the news th… [+1858 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "MacKenzie Sigalos, Tanaya Macheel",
            "title": "First bitcoin ETF could be coming soon as court rules in favor of Grayscale over SEC - CNBC",
            "description": "First bitcoin ETF could be coming soon as court rules in favor of Grayscale over SEC.",
            "url": "https://www.cnbc.com/2023/08/29/first-bitcoin-etf-could-be-coming-soon-as-court-rules-in-favor-of-grayscale-over-sec.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107047831-GrayscaleInvestments-OB-Photo-20220418-ACJ-016-PRESS-6.jpg?v=1693323235&w=1920&h=1080",
            "publishedAt": "2023-08-29T14:36:45Z",
            "content": "The U.S. Court of Appeals for the D.C. Circuit has paved the way for bitcoin exchange-traded funds.\r\nOn Tuesday, the court sided with Grayscale in a lawsuit against the Securities and Exchange Commis… [+3525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Nick Vivarelli",
            "title": "Venice Set to Start With Oscar Hopefuls, Smattering of Stars, and Italian Politics Looming on the Lido - Variety",
            "description": "The 80th Venice Film Festival kicks off tomorrow with a robust roster of awards season hopefuls making their bows, such as Michael Mann’s “Ferrari,” Bradley Cooper’s “Maestro,” Sophia Coppola’s “Pr…",
            "url": "https://variety.com/2023/film/global/venice-oscar-hopefuls-stars-italian-politics-1235706057/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/08/Palazzo-Del-Cinema.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-08-29T14:34:00Z",
            "content": "The 80th Venice Film Festival kicks off tomorrow with a robust roster of awards season hopefuls making their bows, such as Michael Mann’s “Ferrari,” Bradley Cooper’s “Maestro,” Sophia Coppola’s “Pris… [+3325 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Russian mercenaries bid farewell to Prigozhin's logistics chief - Reuters",
            "description": "The funeral of Russian mercenary chief Yevgeny Prigozhin, who was killed in a plane crash last week, was held privately at a cemetery on the outskirts of his hometown St Petersburg, his press service said on Tuesday.",
            "url": "https://www.reuters.com/world/europe/russias-putin-wont-attend-prigozhin-funeral-kremlin-2023-08-29/",
            "urlToImage": "https://www.reuters.com/resizer/IanR7lnnalmPUhs7jdrYYamH-0I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DVNDKYPXYRIURKX4QOOYWVPE7Y.jpg",
            "publishedAt": "2023-08-29T14:32:36Z",
            "content": "ST PETERSBURG, Russia, Aug 29 (Reuters) - The funeral of Russian mercenary chief Yevgeny Prigozhin, who was killed in a plane crash last week, was held privately at a cemetery on the outskirts of his… [+1843 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nick Valencia, Devon M. Sayers, Eric Levenson, Steve Almasy, Sara Smart",
            "title": "Doctoral student arrested on murder charge in fatal shooting of UNC faculty member, source says - CNN",
            "description": "The suspect in the fatal shooting of a faculty member at the University of North Carolina at Chapel Hill on Monday is a graduate student at the school, UNC police said in a news release Tuesday.",
            "url": "https://www.cnn.com/2023/08/29/us/unc-chapel-hill-campus-shooting-tuesday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230829095608-04-chapel-hill-lockdown-shooting.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-29T14:22:00Z",
            "content": "The suspect in the fatal shooting of a faculty member at the University of North Carolina at Chapel Hill on Monday is a graduate student at the school, UNC police said in a news release Tuesday.\r\nTai… [+4040 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Mark Schlabach",
            "title": "Brooks Koepka among Zach Johnson's picks for U.S. Ryder Cup team - ESPN - ESPN",
            "description": "Brooks Koepka was among Zach Johnson's six captain's picks for the United States Ryder Cup team.",
            "url": "https://www.espn.com/golf/story/_/id/38282894/brooks-koepka-zach-johnson-picks-us-ryder-cup-team",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0829%2Fr1217184_1296x729_16%2D9.jpg",
            "publishedAt": "2023-08-29T14:03:00Z",
            "content": "A LIV Golf League captain will represent the United States when it takes on Europe in next month's Ryder Cup in Italy.\r\nFive-time major champion Brooks Koepka was among U.S. team captain Zach Johnson… [+4158 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Marco Bello, Joseph Ax",
            "title": "Intensifying Idalia threatens Florida's Gulf Coast with storm surges - Reuters",
            "description": "Hurricane Idalia was strengthening on Tuesday as it lumbered toward Florida's Gulf Coast, where officials ordered evacuations and urged millions of residents to brace for a possible major Category 3 storm when it makes landfall on Wednesday.",
            "url": "https://www.reuters.com/business/environment/idalia-set-slam-floridas-gulf-coast-wednesday-major-hurricane-2023-08-29/",
            "urlToImage": "https://www.reuters.com/resizer/x7pm2nmEfvBMEjp9KtINN98csiA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QXIJWALCJRJZXHIH7R5X4KU57Y.jpg",
            "publishedAt": "2023-08-29T14:00:48Z",
            "content": "CEDAR KEY, Florida, Aug 29 (Reuters) - Hurricane Idalia was strengthening on Tuesday as it lumbered toward Florida's Gulf Coast, where officials ordered evacuations and urged millions of residents to… [+5904 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Belleville News-Democrat"
            },
            "author": "Teri Maddox",
            "title": "Former Belleville resident, Althoff grad one of three Marines killed in Osprey crash - Belleville News-Democrat",
            "description": "Marine Eleanor Cooke, formerly Ellie LeBeau of Belleville, Illinois, an Althoff and Murray graduate, died in an aircraft crash in Australia.",
            "url": "https://www.bnd.com/news/local/article278692879.html",
            "urlToImage": "https://www.bnd.com/latest-news/wo542/picture278697794/alternates/LANDSCAPE_1140/ElleLeBeauCookeChase.jpg",
            "publishedAt": "2023-08-29T13:55:02Z",
            "content": "A 29-year-old former Belleville resident and Althoff Catholic High School graduate was one of three U.S. Marines killed in the crash of a hybrid military aircraft on Sunday in Australia.\r\nCapt. Elean… [+3556 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Dennis Romero, Elizabeth Chuck",
            "title": "Two young children, two adults dead in possible NYC murder-suicide - NBC News",
            "description": "Two young children were among four people found dead in a New York City apartment Monday, police said.",
            "url": "https://www.nbcnews.com/news/us-news/two-young-children-two-adults-dead-possible-nyc-murder-suicide-rcna102254",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230828-new-york-upper-west-side-stabbing-mn-1810-f4f097.jpg",
            "publishedAt": "2023-08-29T13:09:00Z",
            "content": "Two young children were among four people found dead in a New York City apartment Monday, police said.\r\nPolice identified the four Tuesday morning as Edison Lopez, 41; Alexandra Witek, 40; Lucien Lop… [+2260 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "NBC News",
            "title": "More than 60 people arrested at a gay wedding in southern Nigeria - NBC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25iYy1vdXQvb3V0LW5ld3MvNjAtcGVvcGxlLWFycmVzdGVkLWdheS13ZWRkaW5nLXNvdXRoZXJuLW5pZ2VyaWEtcmNuYTEwMjMwMtIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExMDIzMDI?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-08-29T13:00:24Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "https://www.theguardian.com/profile/chris-stein,https://www.theguardian.com/profile/richardluscombe",
            "title": "First Trump co-defendant pleads not guilty in Georgia election case – live - The Guardian US",
            "description": "David Shafer and Cathleen Latham to make cases to move cases to federal court at hearing – follow all the latest politics news",
            "url": "https://www.theguardian.com/us-news/live/2023/aug/29/trump-trial-georgia-mark-meadows-biden-medicare-live-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/8f00ceb7bc539a2a4e0833f4235e35bb83a4ccf8/0_54_3400_2040/master/3400.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=280781eff042a537c70cce085194b1ff",
            "publishedAt": "2023-08-29T12:58:00Z",
            "content": "Judge sets 20 September hearing for Trump co-defendants' federal trial request\r\nTwo of Donald Trumps co-defendants in the Georgia election subversion case will on 20 September go before a judge as th… [+46691 chars]"
        }
    ]
]

function App() {
    return (
        <div className="container col-lg-8 col-12 my-5">
            <h1>News Articles</h1>
            <div className="news-container">
                {data[0].articles.map((article, index) => (
                    (article.title && article.description) && (
                        <div key={index} className="article">
                            <h2>{article.title}</h2>
                            <img className='img-fluid' src={article.urlToImage} alt='' />
                            <p>Author: {article.author}</p>
                            <p>Description: {article.description}</p>
                            {article.source && article.source.name && (
                                <p>Source: {article.source.name}</p>
                            )}
                            <p>Published At: {article.publishedAt}</p>
                            {article.content && <p>{article.content}</p>}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default App;
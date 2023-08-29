import React from 'react';

const data = [
    {
        "status": "ok",
        "totalResults": 35,
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
            }
        ]
    }
]

function App() {
    return (
      <div className="container col-10 my-5">
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
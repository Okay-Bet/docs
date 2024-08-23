"use strict";(self.webpackChunkdocs_okaybet_fun=self.webpackChunkdocs_okaybet_fun||[]).push([[1740],{6817:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"nate-silver-sports-betting","metadata":{"permalink":"/docs/intro/blog/nate-silver-sports-betting","editUrl":"https://github.com/Okay-Bet/Docs/tree/main/blog/2024-08-22-nate-silver-sports-betting.md","source":"@site/blog/2024-08-22-nate-silver-sports-betting.md","title":"This is why not even Nate Silver could make Money from Sports Betting [It\'s the Juice]","description":"Nate Silver, Mr. FiveThirtyEight, is famous for his professional poker performance and considered the best political pollster in the country. He knows risk and odds better than anyone. Recently, on his Risky Business podcast he mentioned that he tried sports betting for an NBA season. He wagered a total of 1.8 million dollars and spent about 5000 hours to win $5000. While that is technically making money, it works out to working for 1 dollar an hour which barely counts as a profit.","date":"2024-08-22T00:00:00.000Z","tags":[{"inline":true,"label":"betting","permalink":"/docs/intro/blog/tags/betting"},{"inline":true,"label":"sportsbooks","permalink":"/docs/intro/blog/tags/sportsbooks"}],"readingTime":4.34,"hasTruncateMarker":true,"authors":[{"name":"Ben","title":"Building Okay Bet","url":"https://github.com/theschein","page":{"permalink":"/docs/intro/blog/authors/ben"},"socials":{"x":"https://x.com/schein_berg","github":"https://github.com/theschein"},"imageURL":"https://github.com/theschein.png","key":"ben"}],"frontMatter":{"slug":"nate-silver-sports-betting","title":"This is why not even Nate Silver could make Money from Sports Betting [It\'s the Juice]","authors":"ben","tags":["betting","sportsbooks"]},"unlisted":false,"nextItem":{"title":"Superchain App Accelerator","permalink":"/docs/intro/blog/superchain-accelerator"}},"content":"[Nate Silver](https://www.natesilver.net/), Mr. FiveThirtyEight, is famous for his professional poker performance and considered the best political pollster in the country. He knows risk and odds better than anyone. Recently, on his [Risky Business](https://www.pushkin.fm/podcasts/risky-business-with-nate-silver-maria-konnikova/lessons-from-the-river-maria-interviews-nate-about-his-book) podcast he mentioned that he tried sports betting for an NBA season. He wagered a total of 1.8 million dollars and spent about 5000 hours to win $5000. While that is technically making money, it works out to working for 1 dollar an hour which barely counts as a profit. \\n\\n<img src=\\"/img/nate-silver.png\\" alt=\\"Nate Silver Poker\\" />\\n\\n#### Let\'s see why he got a raw deal. \\n\\n\x3c!-- truncate --\x3e\\n\\n## What is Juice?\\n\\nJuice, vigorish (vig), the cut, the rake, etc. are simply terms for the fee that sportsbooks charge to take a bet. This cut can go up or down as different books try to entice gamblers to certain wagers to balance their books. On average, the juice is around 4.5% for each bettor, however it is only charged to the winner.\\n\\nAs an example, let\'s assume you bet \\\\$100 at even odds with average juice. If you lose, you lose your \\\\$100, but if you win then you profit \\\\$91. While the vig is 4.5% it is on all money bet, not just your wager. So when you win they take 9%, not the 4.5% as you would expect. \\n\\n\\n## Finding Nate\'s Win Rate\\n\\nEvery bettor needs to know how well they do over a long period of time. Finding the win rate is key to predicting how much a bettor can make over time. \\n\\n$$\\n\\\\text{Win Rate} = \\\\frac{\\\\text{Number of Wins} }{\\\\text{Total Bets}}\\n$$\\n\\nNate gave some rough estimates that we can use to find how many wins he had. He made a profit of \\\\$5000 on 1,500 bets and had a unit size of $1200. For this simple calculation here we are going to assume average juice of 4.5% but if you want to dig deeper across a whole range check out the full analysis [**here**](https://github.com/Okay-Bet/research/blob/main/nate_silver/silver_betting_analysis.ipynb).\\n\\nAlso we know from how the juice is applied that our Loss Amount is the whole unit size, but the Win Amount is the unit with the vig taken out, so in Nate\'s case he wins \\\\$1092 for every \\\\$1200 wager won. This formula below can solve for the number of wins, keep in mind the Loss Amount it negative.\\n\\n$$\\n\\\\text{Number of Wins} = \\\\frac{\\\\text{Overall Profit} - (\\\\text{Total Bets} \\\\times \\\\text{Loss Amount})}{\\\\text{Win Amount} - \\\\text{Loss Amount}}\\n$$\\n\\nFrom these numbers it looks like Nate had a win rate of **52.5%**. That is respectable for someone that is not doing this at a professional level, but just barely above breaking even.  In the long run, professional sports bettors have sustained win rates of around 53-55%.\\n\\n\\n## Finding the Profit without Juice\\n\\nWithout the sportsbook\'s cut the Win Amount would be the same as the wager. Rearranging the earlier equation the profit can be found from using the same win rate. \\n\\n$$\\n\\\\begin{align*}\\n\\\\text{Profit} = & (\\\\text{Number of Wins} \\\\times \\\\text{Win Amount}) \\\\\\\\\\n               & + ((\\\\text{Total Number of Bets} - \\\\text{Number of Wins}) \\\\times \\\\text{Loss Amount})\\n\\\\end{align*}\\n$$\\n\\nThis gives a profit of \\\\$90k which means Nate Silver lost \\\\$85k of his revenue to the juice. This would not come as a surprise to seasoned bettors, as it is seen as the cost of doing business. But this shows that sports betting is a highly profitable business and the bettors are the product. \\n\\n## Is the Juice worth the Squeeze?\\n\\nIt is **hard** to make a sustainable income from sports betting in the long run, as even Nate Silver, the odds master, struggled to do so. However, there can be many positive expected value opportunities in the short term, though you may not come across these consistently enough to quit your job.\\n\\n- Milk the promotions: Sportsbooks give better odds or bonus money to new users, use this to your advantage.\\n- Play the news: Injury news that could effect the betting lines may reach you before the books have time to update their lines. This is a rare chance to have the odds in your favor.\\n- Public Bias: Sometimes a popular culture news story about a game brings a lot of casual money on one side. This forces books to set the their lines according to the market and not the odds, which is an opportunity.\\n\\n\\n## How can you avoid Juice?\\n\\nUnfortunately, anytime you bet with a sportsbook the juice is simply part of the deal. The service that they are offering bettors is deep liquidity in making wagers with a variety of options, but clearly these offerings come at a steep price. When betting on sportsbooks here is how to limit their vig:\\n\\n- Don\'t do exotic bets like parlays or teasers. These have far more juice than money line or point spread missionary style betting.\\n- Bargain hunt different sportsbooks for the best price and value, there are always small discrepancies between books that can make a difference over time.\\n\\nYou can avoid the juice entirely and get better value by betting within a community instead of at the casino. **Check out [Okay Bet](https://www.okaybet.fun/) for fee free peer to peer PvP betting!**"},{"id":"superchain-accelerator","metadata":{"permalink":"/docs/intro/blog/superchain-accelerator","editUrl":"https://github.com/Okay-Bet/Docs/tree/main/blog/2024-08-06-superchain-accelerator.md","source":"@site/blog/2024-08-06-superchain-accelerator.md","title":"Superchain App Accelerator","description":"Superchain Accelerator","date":"2024-08-06T00:00:00.000Z","tags":[{"inline":false,"label":"Thirdweb","permalink":"/docs/intro/blog/tags/thirdweb","description":"A complete web3 development platform"},{"inline":false,"label":"Optimism","permalink":"/docs/intro/blog/tags/optimism","description":"Ethereum Layer 2 scaling solution"}],"readingTime":0.33,"hasTruncateMarker":false,"authors":[{"name":"Ben","title":"Building Okay Bet","url":"https://github.com/theschein","page":{"permalink":"/docs/intro/blog/authors/ben"},"socials":{"x":"https://x.com/schein_berg","github":"https://github.com/theschein"},"imageURL":"https://github.com/theschein.png","key":"ben"}],"frontMatter":{"slug":"superchain-accelerator","title":"Superchain App Accelerator","authors":"ben","tags":["thirdweb","optimism"]},"unlisted":false,"prevItem":{"title":"This is why not even Nate Silver could make Money from Sports Betting [It\'s the Juice]","permalink":"/docs/intro/blog/nate-silver-sports-betting"},"nextItem":{"title":"Product Hunt Launch","permalink":"/docs/intro/blog/product-hunt"}},"content":"![Superchain Accelerator](/img/opaccelerator.png)\\n\\n[Okay Bet](https://www.okaybet.fun/) received a $5,000 grant from the OP x Thirdweb Superchain App Accelerator program. This grant will be used to sponsor all transaction fees for Inapp wallets. This means you as a user can make and settle your bets all for free. Actually Okay Bet is not even currently monetized, this is costing me money. The least you could do is use it!"},{"id":"product-hunt","metadata":{"permalink":"/docs/intro/blog/product-hunt","editUrl":"https://github.com/Okay-Bet/Docs/tree/main/blog/2024-07-24-product-hunt.md","source":"@site/blog/2024-07-24-product-hunt.md","title":"Product Hunt Launch","description":"Okay Bet got launched on Product Hunt!","date":"2024-07-24T00:00:00.000Z","tags":[{"inline":false,"label":"Product Hunt","permalink":"/docs/intro/blog/tags/product-hunt","description":"The platform to share and discover new products"},{"inline":false,"label":"Base","permalink":"/docs/intro/blog/tags/base","description":"Ethereum Layer 2 operated by Coinbase and Optimism"}],"readingTime":0.34,"hasTruncateMarker":false,"authors":[{"name":"Ben","title":"Building Okay Bet","url":"https://github.com/theschein","page":{"permalink":"/docs/intro/blog/authors/ben"},"socials":{"x":"https://x.com/schein_berg","github":"https://github.com/theschein"},"imageURL":"https://github.com/theschein.png","key":"ben"}],"frontMatter":{"slug":"product-hunt","title":"Product Hunt Launch","authors":"ben","tags":["product-hunt","base"]},"unlisted":false,"prevItem":{"title":"Superchain App Accelerator","permalink":"/docs/intro/blog/superchain-accelerator"},"nextItem":{"title":"Bets With Friends","permalink":"/docs/intro/blog/bets-with-friends"}},"content":"Okay Bet got launched on [Product Hunt](https://www.producthunt.com/posts/okay-bet)! \\n\\n![Product Hunt Launch](/img/productlaunch.png)\\n\\nThis was the debutante of Okay Bet for users to get in on the action with the contracts deployed on Base mainnet. With over 50 upvotes and over 20 comments I was excited to get some positive feedback after throwing it out there to the public. This also informed further iterations in both style features for Okay Bet."},{"id":"bets-with-friends","metadata":{"permalink":"/docs/intro/blog/bets-with-friends","editUrl":"https://github.com/Okay-Bet/Docs/tree/main/blog/2024-06-31-Onchain-Summer.md","source":"@site/blog/2024-06-31-Onchain-Summer.md","title":"Bets With Friends","description":"The idea for Okay Bet started at the Base Onchain Summer Hackathon. Thirdweb sponsored the gaming track, and I decided to make a betting game based on escrow contracts in the parody style of Words with Friends.","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":false,"label":"Onchain","permalink":"/docs/intro/blog/tags/onchain","description":"Crypto without the scammy baggage"},{"inline":false,"label":"Base","permalink":"/docs/intro/blog/tags/base","description":"Ethereum Layer 2 operated by Coinbase and Optimism"},{"inline":false,"label":"Thirdweb","permalink":"/docs/intro/blog/tags/thirdweb","description":"A complete web3 development platform"}],"readingTime":0.535,"hasTruncateMarker":false,"authors":[{"name":"Ben","title":"Building Okay Bet","url":"https://github.com/theschein","page":{"permalink":"/docs/intro/blog/authors/ben"},"socials":{"x":"https://x.com/schein_berg","github":"https://github.com/theschein"},"imageURL":"https://github.com/theschein.png","key":"ben"}],"frontMatter":{"slug":"bets-with-friends","title":"Bets With Friends","authors":["ben"],"tags":["onchain","base","thirdweb"]},"unlisted":false,"prevItem":{"title":"Product Hunt Launch","permalink":"/docs/intro/blog/product-hunt"}},"content":"The idea for Okay Bet started at the [Base Onchain Summer Hackathon](https://devfolio.co/projects/bets-with-friends-4af6). [Thirdweb](https://thirdweb.com/) sponsored the gaming track, and I decided to make a betting game based on escrow contracts in the parody style of [Words with Friends](https://wordswithfriends.com/).\\n\\nBets With Friends was deployed on the Base Sepolia testnet and, while janky, had the core betting functionality working great.\\n\\n![Description of image](/img/betswithfriends.png)\\n\\nUnfortunately, my entry did not become a finalist, but I choose to believe it is due to Coinbase and our other lovely sponsors not wanting anything to do with appearing to sponsor gambling. I do not share those reservations, so I decided to continue with Okay Bet."}]}}')}}]);
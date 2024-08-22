---
slug: nate-silver-sports-betting
title: This is why not even Nate Silver could make Money Sports Betting [It's the Juice]
authors: ben
tags: [betting, sportsbooks]
---

[Nate Silver](https://www.natesilver.net/), Mr. FiveThirtyEight, is famous for his professional poker performance and considered the best political pollster in the country. He knows risk and odds better than anyone. Recently, on his [Risky Business](https://www.pushkin.fm/podcasts/risky-business-with-nate-silver-maria-konnikova/lessons-from-the-river-maria-interviews-nate-about-his-book) podcast he mentioned that he tried sports betting for an NBA season. He wagered a total of 1.8 million dollars and spent about 5000 hours to win $5000. While that is technically making money, it works out to working for 1 dollar an hour so I'd say barely. 


#### Let's see why he got a raw deal. 

<!-- truncate -->

## What is Juice?

Juice, Vigorish (Vig), the cut, the rake, etc. is simply the fee that sportsbooks charge to take a bet. This cut can go up or down as different books try to entice gamblers to certain wagers to balance their books. On average, the juice is around 4.5% for each bettor, however it is only charged to the winner.

As an example, let's assume you bet $100 at even odds with average juice. If you lose, you lose your $100, but if you win then you profit $91. While the vig is 4.5% it is on all money bet, not just your wager. So when you win they 9%, not the 4.5% as you would expect. 


## Finding Nate's Win Rate

Every bettor needs to know how well they do over a long period of time. Finding the win rate is key to predicting how much a bettor can make over time. 

Win Rate = (Number of Wins / Total Number of Bets) * 100

Nate gave some rough estimates that we can use to find the amount of wins he had. He made a profit of $5000 on 1,500 bets and had a unit size of $1200. For this simple calculation here we are going to assume average juice of 4.5% but if you want to dig deeper across a whole range check out the full analysis [**here**](https://github.com/Okay-Bet/research/blob/main/nate_silver/silver_betting_analysis.ipynb).

Also we know from how the juice is applied that our Loss Amount is the whole unit size, but the Win Amount is the unit with the vig taken out, so in Nate's case he wins $1092 for every $1200 wager won. This formula below can solve for the number of wins.

Number of Wins = (Overall Profit - (Total Bets * Loss Amount)) / (Win Amount - Loss Amount)

From these numbers it looks like Nate had a win rate of **52.5%**. That is respectable for someone that is not doing this at a professional level, but just barely above breaking even.  In the long run, professional sports bettors have sustained win rates of around 53-55%.


## Finding the Profit without Juice

Without the sportsbook cut the Win Amount would be the same as the wager. Rearranging the earlier equation the profit can be found from using the same win rate. 

Profit = (Number of Wins * Win Amount) + ((Total Number of Bets - Number of Wins) * Loss Amount)

This gives a profit of $90k which mean Nate Silver lost $85k of his revenue to the juice. This would not come as a surprise to seasoned bettors, as it is seen as the cost of doing business. This just goes to shows that sports betting is a highly profitable business and the bettors are the product. 

## Is the Juice worth the Squeeze?

It is **hard** to make a sustainable income from sports betting in the long run, as even Nate Silver, the odds master, struggled to do so. However, there can be many positive expected value opportunities in the short term, even you may not come across these consistently enough to quit your job.

- Milk the promotions: sportsbooks give better odds or bonus funds to new users, use this to your advantage
- Play the news: injury news that could effect the betting lines may reach you before the books have time to update their lines. This is a rare chance to have the odds in your favor
- Public Bias: sometimes a popular culture news story about a game brings a lot of casual money on one side. This forces books to set the their lines according to the market and not the odds, which is your opportunity


## How can you avoid Juice?

Unfortunately, anytime you bet with a sportsbook the juice is simply part of the deal. The service that they are offering bettors is deep liquidity in making wagers as well as a variety of options on what to bet on, but clearly these offerings come at a steep price. When betting on sportsbooks here is how to limit their vig:

- Don't do exotic bets like parlays or teasers. These have far more juice than money line or point spread missionary style betting.
- Bargain hunt different sportsbooks for the best price and value, there are always small discrepancies between books that can make a difference over time.

You can avoid the juice entirely and get better value by betting within a community instead of at the casino. Check out [Okay Bet](https://www.okaybet.fun/) for fee free peer to peer PvP betting!

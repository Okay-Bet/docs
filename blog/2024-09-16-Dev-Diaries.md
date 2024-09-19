---
slug: september-dev-diaries
title: Dev Diaries- September 2024
authors: ben
tags: [development, contracts]
---

Okay Bet saw a substantial new upgrade this month with new contracts deployed and a major app update. 

<img src="/img/newbetform.png" alt="New Bet Form Update" />

#### Here is a deep dive on the development progress

<!-- truncate -->


## Bets in USDC

A major pain point for users has been having to bet in native ETH. It sucks when you take a risk and make a bet, only to find the value of what you are betting with is also a risk. The contracts can now allow bets to be placed in any ERC20 token deployed on Base. However for the ease and simplicity of our app we have set the bets to only use USDC, which is a stablecoin whose value is tied 1:1 with the US Dollar.

For users that take advantage of the In-App wallet (that is an account tied to your phone number, email, or other social login) that means all gas transactions are sponsored and the user only has to have USDC to fund bets on Okay Bet. They do not need any crypto market exposure at all, limiting their financial risk when using the app.


## Tilted Bets

So far all bets on Okay Bet were Even Money, if you bet $10 then you could only win $10. However not everything you would want to bet on has an even chance of happening. Now with Tilted Bets the pot split can be changed to reflect the agreed upon odds. If the pot size is $10, instead of putting in $5 you put in more money if you were taking less risk but less money to put in more.

For example, let’s say you think the Buffalo Bills NFL team will win the Super Bowl. With 32 other teams early in the season this is not even close to a coin flip chance of happening. Instead, the bettors may come to an agreement that this has a 10% chance of happening, so the bet can be split accordingly. For a $100 pot the Bills bettor puts in $10 and the other side puts in $90 for a winner-take-all pot.

This allows for more creativity in bets made as well as a new opportunity to add leverage.

## Expiration Dates

Another user pain point that needs addressed is if the Judge becomes absent what happens? Now with expiration dates the funded bet will be canceled and fully refunded if the Judge does not resolve it by the given date. This is another way of reducing the risk of having users funds tied up unnecessarily.

## Emitted Events

While this is not a change that will show up on the app (yet!) the contracts have been improved in order to emit events upon changing the status and give much more information. This will be used to make metrics and notifications much more seamless. Stay tuned to see even more apps integrate with Okay Bet contracts!

### Check out [**Okay Bet**](https://www.okaybet.fun/) to make fee-free bets between friends! Don’t have any friends? Join the [**Discord**](https://discord.gg/ptXTA5TeVE) and make friends! We are offering $5 USDC to new users
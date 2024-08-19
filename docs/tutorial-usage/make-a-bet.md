---
sidebar_position: 3
---

# Make a Bet

Fill out the **New Bet** form to create and fund a bet. Let's take a look of each part of an example bet:

![New Bet](/img/newbet.png)

## Conditions

This what the Judge should use to determine a winner. It is a string of text that could be anything the Maker feels like betting on. It is recommended that the Maker should make clear terms for thier bet conditions to avoid confusion and cancelled bets. 

## Maker

The person making the bet. The address is autopopulated with the logged in user's wallet, but it could technically be anyone. This person will also be placing thier own money into the bet as a wager.

## Taker

This is the person on the other side of the bet. Confirm that this has been inputted correctly, if the address or username does not map to an EVM address the form will be blocked from being completed, but if the address or username is wrongly inputed to someone you do not know, then you will have to cancel the bet and try again. 

## Judge

This is the person that decides who wins the bet. It is important to choose the Judge carefully and make sure this is someone that both parties can trust. The conditions of the bet are technically arbitrary for how the bet is resolved, it is entirely up to the descrition of the Judge. The Judge recieves no financial compensation for thier role, this arrangement is entirely trust based. 

The Judge may be the Maker or the Taker for simplicity. This arrangement is not recommended for high stakes wagers or bets with argumentative people. 

## Wager Amount

This is the amount the each side puts into the bet. For example if the wager is worth $100 then the fully funded contract will have $200 in it. While the wagers are entered in USD, currently the bet contract wagers only accept ETH. 

## Make Bet

This button is greyed out until all the fields are filled out successfully. Clicking the make bet button will create a new bet contract using this form data. If the user is the Maker then they will fund the bet automatically after the bet is created. If the bet was made incorrectly, don't worry, there is still an oppurtunity to cancel it.  
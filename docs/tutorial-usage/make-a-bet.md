---
sidebar_position: 3
---

# Make a Bet

Fill out the **New Bet** form to create and fund a bet. Let's take a look at each section of this example:

![New Bet](/img/newbet.png)

## Conditions
 
The conditions is what the Judge should review to determine a winner. It is a string of text which could be anything the Maker feels like creating a bet on. To avoid confusion and cancellations, the Maker should clearly define the terms of their bet.

## Maker

The Maker is the person making the bet. The address is autopopulated with the wallet the user logged in with, but it could technically be anyone. This individual will also be placing their own funds into the wager based on the conditions specified.

## Taker

This is the person on the other side of the bet. Ensure that their address or username is entered correctly. If it does not correspond to an EVM address, the form will be blocked from completion. If the address or username is incorrectly entered from someone you don’t know, you will need to cancel the bet and try again.

## Judge

This is the person who decides the outcome of the bet. It’s important to choose the Judge carefully, ensuring they are someone both parties can trust. The bet’s resolution is entirely up to the Judge’s discretion, as the conditions are technically arbitrary. The Judge does not receive any financial compensation; this arrangement is based entirely on trust.

For simplicity, the Judge can be either the Maker or the Taker, though this setup is not advisable for high-stakes wagers or when dealing with oposing opinions.

## Wager Amount

This is the amount each side puts into the bet. For example, if the wager is worth $100 then the fully funded contract will have a total of $200 in it. While the wagers are entered in USD, currently Ok Bet's wagers only accepts ETH. 

## Make Bet

This button is greyed out until all the fields are filled out successfully. Clicking the make bet button will create a new bet contract using this form data. If the user is the Maker then they will fund the bet automatically after the bet is created. If the bet was made incorrectly, don't worry, there is still an oppurtunity to cancel it.  

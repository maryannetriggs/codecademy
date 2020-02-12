import random

money = 100
print("You have " + str(money) + " available for betting")

def heads_or_tails(bet, head_or_tail, money):
    h_or_t = random.randint(0, 1)
    if h_or_t == 0 and head_or_tail == "Heads":
        money += bet
        return "The coin toss result was: 'Heads' and you won! Winnings: $" + str(bet) + " You now have $" + str(money) + " available for betting"
    elif h_or_t == 1 and head_or_tail == "Heads":
        money -= bet
        return "The coin toss result was: 'Tails' and you lost! Loss: -$" + str(bet) + " You now have $" + str(money) + " available for betting"
    elif h_or_t == 0 and head_or_tail == "Tails":
        money -= bet
        return "The coin toss result was: 'Heads' and you lost! Loss: -$" + str(bet) + " You now have $" + str(money) + " available for betting"
    else:
        money += bet
        return "The coin toss result was: 'Tails' and you won! Winnings: $" + str(bet) + " You now have $" + str(money) + " available for betting"

print(heads_or_tails(40, "Heads", money))

# def cho_han(bet, even_or_odd):
#     dice1 = random.randint(1, 6)
#     dice2 = random.randint(1, 6)
#     e_or_o = (dice1 + dice2) % 2
#     print("The result from rolling Dice 1 was " + str(dice1))
#     print("The result from rolling Dice 2 was " + str(dice2))
#     if e_or_o == 0 and even_or_odd == "Even":
#         return "The dice add result was: 'Even' and you won! Winnings: $" + str(bet)
#     elif e_or_o == 0 and even_or_odd == "Odd":
#         return "The dice add result was: 'Even' and you lost! Loss: -$" + str(bet)
#     elif e_or_o == 1 and even_or_odd == "Odd":
#         return "The dice add result was: 'Odd' and you won! Winnings: $" + str(bet)
#     else:
#         return "The dice add result was: 'Odd' and you lost! Loss: -$" + str(bet)

# print(cho_han(100, "Even"))

# def highest_card(bet):
#     player_card = random.randint(1, 13)
#     opponent_card = random.randint(1, 13)
#     print("The number value of the card you picked was " + str(player_card))
#     print("The number value of the card your opponent picked was " + str(opponent_card))
#     if player_card > opponent_card:
#         return "You card was higher than your opponent's and you won! Winnings: $" + str(bet)
#     elif player_card < opponent_card:
#         return "You card was lower than your opponent's and you lost! Loss: -$" + str(bet)
#     else:
#         return "The game was a tie, you didn't win or lose any money"

# print(highest_card(100))

# def roulette(bet, guess):
#     number_landed_on = random.randint(1, 50)
#     even_or_odd = number_landed_on % 2
#     print("The number landed on was " + str(number_landed_on))
#     if player_card > opponent_card:
#         return "You card was higher than your opponent's and you won! Winnings: $" + str(bet)
#     elif player_card < opponent_card:
#         return "You card was lower than your opponent's and you lost! Loss: -$" + str(bet)
#     else:
#         return "The game was a tie, you didn't win or lose any money"

# print(roulette(100, "Even"))

def ground_shipping_cost(weight):
    if weight <= 2:
        cost = 20 + (weight * 1.50)
    elif weight <= 6:
        cost = 20 + (weight * 3.00)
    elif weight <= 10:
        cost = 20 + (weight * 4.00)
    else:
        cost = 20 + (weight * 4.75)
    return cost

print(ground_shipping_cost(8.4))

premium = 125

def drone_shipping_cost(weight):
    if weight <= 2:
        cost = weight * 4.50
    elif weight <= 6:
        cost = weight * 9.00
    elif weight <= 10:
        cost = weight * 12.00
    else:
        cost = weight * 14.25
    return cost

print(drone_shipping_cost(1.5))

def cheapest_shipping(weight):
    ground = ground_shipping_cost(weight)
    drone = drone_shipping_cost(weight)
    if ground < premium and ground:
        return 'The cheapest shipping method is Ground Shipping which will cost: $' + str(ground)
    elif premium < ground and drone:
        return 'The cheapest shipping method is Premium Ground Shipping which will cost: $' + str(premium)
    else:
        return 'The cheapest shipping method is Drone Shipping which will cost: $' + str(drone)

print(cheapest_shipping(4.8))
print(cheapest_shipping(41.5))

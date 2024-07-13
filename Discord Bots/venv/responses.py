from random import choice, randint


def getresponse(user_input: str) -> str:
    lowered: str = user_input.lower()

    if lowered == '':
        return 'Ehhh... Hello? Is anybody there?'
    elif 'hello' in lowered:
        return "Hello! What's up!!!"
    elif 'bye' in lowered:
        return 'Bye... See you!'
    elif 'how are you' in lowered:
        return "I'm fine. Thank you. How are you?"
    elif 'fine' in lowered:
        return "Oh that's good. How can I help you?"
    elif 'roll a dice' in lowered:
        return f'You rolled: {randint(1,6)}'
    elif 'toss a coin' in lowered:
        return f"It's {choice(['heads','tails'])}"
    else:
        return choice(["I didn't understand...", "I don't know what you are talking about.","Sorry! I can't answer because I'm not a fully developed bot."])
    
    
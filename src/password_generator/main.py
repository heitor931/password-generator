import sys
import random
from password_module import numbers, symbols, alphabet, alphabet_lowercase

# generate  n digits password with letters, symbols and numbers

password_length = sys.argv[1]

# convert password string to integer
converted_password_length = int(password_length)

all_symbols = [numbers, symbols, alphabet, alphabet_lowercase]
flatted_list = [item for sublist in all_symbols for item in sublist]
random.shuffle(all_symbols)
password = []
# Actual password generator
for i in range(converted_password_length):
    s = random.choice(flatted_list)
    password.append(s)
final_password = "".join(password)
print(final_password)






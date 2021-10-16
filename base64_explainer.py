

source_string = 'Example'

print("Characters")
print(' '.join([hex(ord(c)) for c in source_string]))

print("Bits")
print(' '.join([format(ord(c), 'b').zfill(8) for c in source_string]))

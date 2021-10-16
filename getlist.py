#!/usr/bin/python
from ipaddress import ip_address, summarize_address_range, collapse_addresses
import csv

rows = []

d = {}

with open('/Users/ignatev/Desktop/datacenters.csv', 'r') as f:
    r = csv.reader(f, delimiter=',')
    next(r, None)  # skip header
    for row in r:
        ip_start, ip_end, asn_name, url = row
        networks = summarize_address_range(ip_address(ip_start), ip_address(ip_end))
        for n in networks:
            d[asn_name] = d.get(asn_name, []) + [str(n)]


for asn_name, ip_ranges in d.items():
    print('*****************************')
    print(f'** {asn_name} **')
    print('*****************************')
    print('')
    for ip_range in ip_ranges:
        print(ip_range)

    print('')
    print('')
    print('')

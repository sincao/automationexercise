# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products.api.spec.ts >> Products API >> API 1: Get All Products List @api @smoke
- Location: tests/api/products.api.spec.ts:5:7

# Error details

```
Error: apiRequestContext.get: Max redirect count exceeded
Call log:
  - → GET https://automationexercise.com/api/productsList
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8LkuDMKBfbGB9vab%2F%2Fedy62xfIqZRMqg6onWBHGZ19caGmjgNJRM5lLy3fWWhOuGNrCBL6xPBU253HbZtfxcfnEm1zg5XBFXmS82ITuTPIhhscCG%2Foe%2BnAEosd506vQiO06%2FGm%2BwkulT"}]}
    - cf-ray: 9ff5609c4b732041-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=00GnTR7XARv3pwoOWSm6bT7bpWA2JQyxfuyfTV%2B6NaXMQvbvyqTEV5d5dCXblhWMAG2HP5eo7rtaHlm0liPrcbidZYnhYtiPk9YvDeKZSFqkKBThyvp4ws%2Fq5Rs3coEHM0zugfCZEg07"}]}
    - cf-ray: 9ff5609eac38ae29-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EPMOERQ%2FGunDzGwwsT21doUF%2FH4g2ByUl9Ue2flGQK1O2fVdbJ45xbmJT9HJtxaZTqtvld3iDmEIEaaXJqx2ViEvwp6Kxy0qZ%2Fb0YQLMSzNnIr2d5D93N%2FdczpnMpxJlCa0vZETLQ%2Fw6"}]}
    - cf-ray: 9ff560a0fc7f10e4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0u6%2BpfkhRNCPSFT%2BXQs0%2BgcVAVlsrxwmoaMqq35AwKYWeBf3ztHTVMF0IryWSywjEk38HEkHPcP9336oRhhrWjYEmtDOrz6WoFPSog9c1%2BU0jsZ%2FFf%2BaqR%2FWNmgXH18ztem65eGD1Gfu"}]}
    - cf-ray: 9ff560a439c8e1db-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hPsO9Enr7ui1qAHZkRglqwshaESnAEDcKEaCBPM%2BlnqxYxu6pYiJsPuEYnE6XCi1mP2sRr0uttS9QsqZomMEWe%2FABbFe%2BsiWrLSemVDs5V36MOjWC5OVNMoebFEk5vTHqP29pRwgM%2Bc1"}]}
    - cf-ray: 9ff560a6983289e0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iM9lN%2FN9X7oGnsFQfRwLma7CyhOTm%2FD02bRfhcMoiVFky2lRzaY%2FT8KJ8F%2BLpO3ucy1p0OzObMKsQbilCdW6oTYeIswcVn7gp0tcbHH88rnheFNcnpv2s9nqFeQiRgs09ZGqcIxD3oEa"}]}
    - cf-ray: 9ff560a8f90810b7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ozLH4LDKIouFSC03zMT3qjGuulrd4U3B0Sx%2FX5Qk33RdybOwLCrLRRoJJZrlx1ew4KmEY8eWzKn0cLRdgzdxsyulmSNivdS32J01q%2BZi7aSUlEBQpdYO4AKT2HJT7N6%2Feon4U3rTVfPR"}]}
    - cf-ray: 9ff560ab5cec0ef9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zBEHKB7na6fyVJrIoJbM6NSSz13utqlDDDwn%2FL3juydeTpHQbJ9OGKqcuyLdJkt0d5XA62mBIUbWTdjEQWziR8%2FAKYifBAeWgmfSTWUyvSfPEq7OoozchlPZ%2BPZtscfT9fDnRY4ZOwvG"}]}
    - cf-ray: 9ff560ae880de894-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KMznuANECD8DdFlursXqLnlWog%2FUTC3ZsdJ6RZtw0%2BQ5Fn59hD7QZtLMad%2BnyGWhxs3P3Ai4xjdUG9ZYKxh8XpyorY0hXK3I4oMnyfiENmZlZEqlqQ8N2jngR1gg0ANSieW9mX2ELRez"}]}
    - cf-ray: 9ff560b0ecdb607c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9v%2FqbzuXCoq5uG1kZnvSpfqJ0Kn6%2BoH7PmNrgJS42Pff6YNc0LZ7wm9Dh%2BXJ%2BihrgcYKW0TFLxjlgypgNxyo8EYysX%2BDi%2ByUxnRmg3k2XUutScugQupzBaoaX9sZUreObeUmhowbN1Xq"}]}
    - cf-ray: 9ff560b36a58e252-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JPUewx%2BdhjLW9AJexVnYF8ADzk2KI%2BbO2eNwhW5XXjFOz1YORUAnE89lb1GRw3GluM2RneeB0uABpi44H0ZMDCr%2BFS7V41rwiFw5YdgrMW8qesNL9%2BcA8xWXWMyulqiKUDY2Hf1dfN%2Fi"}]}
    - cf-ray: 9ff560b5ca106087-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ug4U4cmVgevNHmxvPZ8LUy7HKvAzjQTuMaVdEiRRM5l4M7shSWQ6qmtIVkUplfENtD8ZgJhYMhGx7FIEDGOmz2WJ5VEbrynnNBwd6lboTpkIs62py6aYasYk9H0VbasCMaBdL1IluLF3"}]}
    - cf-ray: 9ff560b82ec8dadb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sdO52w%2Fn6VTD0tVEj0khKBCntZ1DeH0yl8MJfsXtAGAzUXoXSvC%2BqTuQsIY2QGknTrIwNRK7jW9h9LhQcitopKXtM5SX3fezVyI%2BjiZmYqk3BmGd0WcCvl6VUO10s8qBjBN27jkj97jj"}]}
    - cf-ray: 9ff560ba7a53b0fc-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YeDN59RTJILrIo5OSSB%2FR16iVCWcpbQpmaA2aiuB216BmkdOBwZQK0lhFhJtHoOUlXvAQxgDLZ%2F14DOaqldRTPgEH2Ac5l%2BSclyW%2FDv8QrW9MRA0GeIEPj%2FMFRiDuVIo9%2BVI7lSLaHjj"}]}
    - cf-ray: 9ff560bcef5b0ef9-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gPqLufHBDzpgSEvhEwF32U4MdZB3UnrN7Q%2BIs4Uv7dxnHnhaPWNlr3yu0j2AhygA8FkVC09D5FAwRlRKWDz6K%2BDsuv0Xk9OAwZ4veKPpzIRkfR1S%2BqSvdOqbg1NkLrxOq3TVKvQBI3Mg"}]}
    - cf-ray: 9ff560bf48cf356f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1UyJNuRTAI17ha7Y3N%2FJAXnG%2FdsGc4BbyiebyGkl81FaCN25GOawQRbm4TGY1vSRKjgFb%2Fff9H9WVYOgmRyhZlopS0N8q%2BiJw%2FL62F7Sq74cAKW5XjeLmuv7CfvE0WPHjV9ajgdETc94"}]}
    - cf-ray: 9ff560c28d1cae29-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tpX37UA5ovqdbs5Iw%2BZRgzynecpss9r2c%2F8RSYFb1B8IKPtSbn7EiV7EHB4VnV5KXc6K6IycICYnJLuYZRnKomAs4Fg%2BV9OKM88A37qNbYRPGUsmu0MzDP1Zwah0zMG9zkkj1hJGciwu"}]}
    - cf-ray: 9ff560c4ff0a000a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:30 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZnBmLPzOaTRaUb%2BjvnMm7hNkmEeJQOoI6lj%2Fv3A6bVXKppkilUTLOiunK%2F6muCZM2T2ie6guYkOMAwK4zGA313xRRdtjNCH6OS0Li17PXd782JZ1NAaFuI0Ytr6Tqk4hkgjbNQoraOzK"}]}
    - cf-ray: 9ff560c76fdee1db-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:30 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AVUCiPkG%2BE1uiPpyT%2BU%2BZZbiiJfunrN8NvH1Axqhf%2B%2BAkM%2BD8z9ScJtFoBwG1yGf82uhC%2F0YzFLJAxqWJCok0n%2Fj5WhErWK2FvYl714qR2JA1jTHYVq6YzX%2FHDMRIAHO%2Fhar9DmAkOvZ"}]}
    - cf-ray: 9ff560c9b9c5258c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YZpte%2FnQSvmDBcYnjSrMI3NAOtgQpiCQYg5ja0Z5%2FCHXqhIoM24RoEZSDOjp37Hqk853mayH1ONCpaAqJP9D5lC44l2We4hS71pKYvDtsDrQ%2BEKc2ndoGMU9JQ1qrVRn%2FcQG9fWiwuIL"}]}
    - cf-ray: 9ff560ccfc8410b7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Thu, 21 May 2026 17:42:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A8tCue%2FV2kkkHgX9mKVqLEd20AsBB6nYj9pg53vft6XLCA5BKCpKKnocHJxhAfXJAOf6sdQVkMhWGwu0%2FGp07bNYmqRUDbvwSwpJXGPk4%2F6GRuzKQT2CWE1ODdHJCMXu0oEy8FNP%2BB1I"}]}
    - cf-ray: 9ff560cf687110e4-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1   | import { APIRequestContext, APIResponse } from '@playwright/test';
  2   | import { logApiRequest, logApiResponse, logger } from '@utils/logger';
  3   | 
  4   | /**
  5   |  * BaseApiService — abstract base for all API service classes.
  6   |  *
  7   |  * Responsibilities:
  8   |  *   - Centralise error handling for API requests
  9   |  *   - Log all requests and responses
  10  |  *   - Provide typed response parsing
  11  |  *   - Manage common headers
  12  |  *
  13  |  * What it does NOT do:
  14  |  *   - Business logic (that belongs in derived services)
  15  |  *   - Assertions (those belong in test files)
  16  |  */
  17  | export abstract class BaseApiService {
  18  |   protected readonly apiContext: APIRequestContext;
  19  |   protected abstract readonly basePath: string;
  20  | 
  21  |   constructor(apiContext: APIRequestContext) {
  22  |     this.apiContext = apiContext;
  23  |   }
  24  | 
  25  |   // ─── HTTP Methods ─────────────────────────────────────────────────────────
  26  | 
  27  |   protected async get<T>(
  28  |     path: string,
  29  |     options?: { params?: Record<string, string | number>; headers?: Record<string, string> },
  30  |   ): Promise<T> {
  31  |     const url = this.buildUrl(path);
  32  |     logApiRequest('GET', url);
  33  |     const start = Date.now();
  34  | 
> 35  |     const response = await this.apiContext.get(url, {
      |                                            ^ Error: apiRequestContext.get: Max redirect count exceeded
  36  |       params: options?.params as Record<string, string>,
  37  |       headers: options?.headers,
  38  |     });
  39  | 
  40  |     logApiResponse(response.status(), url, Date.now() - start);
  41  |     return this.parseResponse<T>(response);
  42  |   }
  43  | 
  44  |   protected async post<T>(
  45  |     path: string,
  46  |     body?: unknown,
  47  |     options?: { headers?: Record<string, string> },
  48  |   ): Promise<T> {
  49  |     const url = this.buildUrl(path);
  50  |     logApiRequest('POST', url, body);
  51  |     const start = Date.now();
  52  | 
  53  |     const response = await this.apiContext.post(url, {
  54  |       data: body,
  55  |       headers: options?.headers,
  56  |     });
  57  | 
  58  |     logApiResponse(response.status(), url, Date.now() - start);
  59  |     return this.parseResponse<T>(response);
  60  |   }
  61  | 
  62  |   protected async put<T>(
  63  |     path: string,
  64  |     body?: unknown,
  65  |     options?: { headers?: Record<string, string> },
  66  |   ): Promise<T> {
  67  |     const url = this.buildUrl(path);
  68  |     logApiRequest('PUT', url, body);
  69  |     const start = Date.now();
  70  | 
  71  |     const response = await this.apiContext.put(url, {
  72  |       data: body,
  73  |       headers: options?.headers,
  74  |     });
  75  | 
  76  |     logApiResponse(response.status(), url, Date.now() - start);
  77  |     return this.parseResponse<T>(response);
  78  |   }
  79  | 
  80  |   protected async patch<T>(
  81  |     path: string,
  82  |     body?: unknown,
  83  |   ): Promise<T> {
  84  |     const url = this.buildUrl(path);
  85  |     logApiRequest('PATCH', url, body);
  86  |     const start = Date.now();
  87  | 
  88  |     const response = await this.apiContext.patch(url, { data: body });
  89  | 
  90  |     logApiResponse(response.status(), url, Date.now() - start);
  91  |     return this.parseResponse<T>(response);
  92  |   }
  93  | 
  94  |   protected async delete<T = void>(path: string): Promise<T> {
  95  |     const url = this.buildUrl(path);
  96  |     logApiRequest('DELETE', url);
  97  |     const start = Date.now();
  98  | 
  99  |     const response = await this.apiContext.delete(url);
  100 | 
  101 |     logApiResponse(response.status(), url, Date.now() - start);
  102 |     return this.parseResponse<T>(response);
  103 |   }
  104 | 
  105 |   // ─── Response Parsing ─────────────────────────────────────────────────────
  106 | 
  107 |   protected async parseResponse<T>(response: APIResponse): Promise<T> {
  108 |     if (!response.ok()) {
  109 |       let errorBody: string;
  110 |       try {
  111 |         errorBody = JSON.stringify(await response.json());
  112 |       } catch {
  113 |         errorBody = await response.text();
  114 |       }
  115 | 
  116 |       const error = new ApiError(
  117 |         `API request failed: ${response.status()} ${response.statusText()} — ${response.url()}`,
  118 |         response.status(),
  119 |         errorBody,
  120 |       );
  121 | 
  122 |       logger.error(`[API Error] ${error.message}`, { body: errorBody });
  123 |       throw error;
  124 |     }
  125 | 
  126 |     // 204 No Content
  127 |     if (response.status() === 204) {
  128 |       return undefined as T;
  129 |     }
  130 | 
  131 |     try {
  132 |       return await response.json() as T;
  133 |     } catch {
  134 |       return await response.text() as unknown as T;
  135 |     }
```
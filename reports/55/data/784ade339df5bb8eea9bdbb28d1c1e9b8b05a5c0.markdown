# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/automation-exercise.api.spec.ts >> Automation Exercise API List >> API 3: Get All Brands List @api
- Location: tests/api/automation-exercise.api.spec.ts:13:7

# Error details

```
Error: apiRequestContext.get: Max redirect count exceeded
Call log:
  - → GET https://automationexercise.com/api/brandsList
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Zfob999MCtt5UNM%2FE1HewUibNponkiYyXFRbzxpLHNespudFGZ1jH0%2B53K50hHJXOC5fh6Ud8KwYE41uWlLsGC3CCV85SrV815S5MLZufqDJry%2FluEhAYnO6CmOzGPnf1HweiWn3cVA%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b143c2a90eb65-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FN349keHUrXPfFFbaqG83XDetO9AGQUPZSqM3impydyLn5r3AZvFOAVAy%2BsCwHqJfCIHg5BAzbUZ6ADHVpv%2FxXWh7ysX9iEr9yhyY6jbw1Zqot08yKlxJ416LYduOhRo3vML7utu3Xbf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b143e9d62ba2c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Lz9yB4VTnMt68IfbzUo2OuV7h3zc5pRsK2n8uzGmdUUvbbLz73yTTGJpu4T%2Bij8BzcS0FytMv5VSTExFcsmm5aHa4TlAinsDN%2FCD%2BjUK3cpru%2FGxjIMzpF0BJLGoorFsMhNaWeAKADuU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14422838026c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xxix8z9qgvHwvYMX%2FGCFRdSf27iTVJJsluqQA%2FR9qYG5q7Bn%2BgjpQjc86JJTEMuuA71cJl1Szg5Jyw9fTBLs1l4XQ1VGgtXfETd%2FRgy1QZYeTFZZlq%2FfCw0OP4690x3H1TOBvJAvYh7R"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14448f73b6f8-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ofqNUOKHHmN5SWbDkAxvUSRlMw3xOSF5jrrBBxE6609tlLHIt8%2FUqBr7afQJP3ZsP9jf5g%2FfO%2BFlMY1Jv3oHX%2FrPWcEFIrj6Oz2nfhFT0pqjwgg4ijsW%2FE44dh3N6S8irGO55L0Y6y89"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1446ff93fa0f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=v%2FV15oKq%2Fe9G0mKbsUNeTpRoh36t%2B2SfK8xFgn4QKGjlJkKNJ6UcaFVRPhCJZ%2BPSVno2NFUZA8YuLXU00ipw1oPoUZMKcK%2FCjFtmZ7zak%2BG2ZFEvnqFNY0Kbcq%2Br0IN9hfURIiPg4TH2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b144a7f701f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1qF%2FwS0FjYcB2V8%2BwzPEqaEHb%2FLvXD3mXLUiMQ7PMNzfIQfwTpMoxKn6X0mMwaWtQO%2Bwcb0VACKZWjk5J5e5kgyivdjaI0goTUhw1GNhxAey4cV7L8aqZiWUxkEBuAdr5gT5bJKw2MhF"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b144cdb02226d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=d82CVSBeSFLf0i7GhePXL5iJXkk340uY6meDdbbGwfyYfrZV1O0t6Hk8bjakGpRvhR%2BBDcrNwoE9LwFbu%2BtW0wCNqq1fsLamiq0kPgRalJ4RPbkRVN8A8qVMEJXEmRpzL9fm0qONzX7q"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1450589b6181-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SXW%2BAehrKsX34q0aQX83dZWGJdxxFeOad5yUCqfKEUpexwdxEtosXF5QDFRCvuLigYAtBpc691pb11QAIrGC2wthLE0INz%2FYaufDHIJifbkyAMvBjHbntpvkWyAqJp0Kk0D8i2tGmet7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1453cdce90bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Mv06MfpppiAWFN5L5xCn4lvSAUt98PR2gR49gIm4Za0ZpSKjDZvg4zClOaCRY81eOLnYoGS5HE2jF3leLf%2FAHDKKHOLjQEhL0DYAD%2FQGNTX3nzPwSHDOEypQXaAxFBj%2BzQNi%2Fl2%2FF3xn"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14574c43f3ee-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VwRdouiLgdFQ9ewpaelcrrjR%2BPKtUH3oaRiIAFtqTHzoEUyPrbC5humsFXIkU4j6jzyc6aJKM3j%2BeT6ixS%2BzuuolCo3CinUCNjUSYT7eXE6FrlMw3AQb4uddH0ZtYVGNnyIo%2BmTl9RtE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1459ac909bf6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HQe2AMoFmCLaXGdxmW5GtYPBsFscx4wZm1LSsOQYagrv0E3xw9AWvTwd4WrFtMV3U5e4cznikax5m8bieVbwm9Tz1F%2BwN6c5h32njXty5obHzYlT%2Fj4fmk8k4Gj3uysxtF7yquijJ1aG"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b145d2a4d6189-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kJ35jFun7ErzVO53REBnnIXcDDZiQ7EkZ%2FaOc8oPydJifQ75gmnfYwYl2SD2KNUXVBmwqB0PeJLCHTVD0BDIFvCsXXD7FWpSx37kWJONB%2Bh3AGzYAcV258krMWZXqXHCi3QQCVBzku68"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b145f888ce1e7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cMsUJsfb3b%2FH%2B0Ue0K0Gp%2Bdq%2FiblJokIYkZ36wKudKqsIglPKVWsQZ50AlxPhfeFSoH%2FlqNDVy5z1rKt3eXqtrtN13Hr%2F9h%2BSIgGyMSfz5KcQ0m07DCg2DQ%2BkkVUka9awqN3FGrjnVEw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14630ca3eb65-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vd0H6%2Bd2FNBvxkMeL0CeiuQ%2BunqsxBk%2FryTsdP2S7%2F0pPL5xFPg9Gjs1ED05Un%2BiKnbE4wYJ0PhvTYf61hFho%2FhKg%2BpKAj5KrAUHMBA5jQrijMI%2FcD3vHt%2FSYI59LgwfM29oe8Q9nRI3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14657cd6026c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:22:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jEIwn%2BAJ47gRDdIoezESG2bXopI1s9HJ4fC4%2BRPzV8zx0XCjltwCPXl1XRy%2ByzfYWuUn47SfS%2FNXhB3SHB6R2eDO7gQgwaBM0sXq07TxEZlPIFtDBSM9DfBl8pMGGSQSZ8w%2BrifXfN7H"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1467ec92e262-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:23:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gCuYXxoOiAnRm7HUisuL4M%2Fvmb0RWpfhZE4aEKltCP0YSsdp0DqAff5CmMuC0ovWr6zpRGpLWQIqwoX6KNEAojPOKJjD4SobrBa6bsqIL4RWzg403oONSYHTryGOTa86PIZI2fQs5eKQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b146a5e67b6b1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:23:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FAGnGIEctIk8RKoHs%2F3qCnvaI2xb3If9KU9P4v6Z8jwVvdd1%2FzuEa0sCM8F9ytvanlk%2BG3aw%2F7wn0EYnZrkMfyE7d9U2DdoXtogwBRJ1MG2y0C%2BBfzj5QMmRiVrqNPWevZ4%2FzcGLORQX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b146cbb86fa0f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:23:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ww8Jv%2FJ0Uk2Dk%2F867CcbJxeFTGyV07ywl786fdr5g%2F8qfIzhFQNF4bq3Qwl%2BTw92yodzT0PQcF9SWy7QPGOrwVYJA59Rzp%2FJJ48uJFtfyGRSAPaFq8ipRuFX9UtgftnqRO3UbbVkUG5l"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14703a721f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:23:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kkGawVL36ezuft5QM%2Fki6E3wAvuhm39ygJ1XzK4lsThd7OG2iNUbNqmvYT4gSLh2x7Fa2pbKn3HiPSySYjhDaLyfG0tcvLUfVWQwa2KSgM0%2B8NCvaxLWx1YwazlJDLdQs28jr92D4d5s"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1472ac0a226d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:23:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tDL3kzk3CQw1uDckZX5eLWDJnr6avwygFBhIr33O%2BCWvUC%2Bl21Yquea5jcOCA4c2TuoUIkfXPtDpMDwwulJL%2BFmjdpUrWF1iwBMdkq5VKK%2BKRaw3Y%2F09HdjYhb4kBOVIctoQPDUD5BOm"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b14763ea1b6f8-ORD
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
  62  |   protected async postForm<T>(
  63  |     path: string,
  64  |     form?: Record<string, string | number | boolean>,
  65  |     options?: { headers?: Record<string, string> },
  66  |   ): Promise<T> {
  67  |     const url = this.buildUrl(path);
  68  |     logApiRequest('POST (Multipart)', url, form);
  69  |     const start = Date.now();
  70  | 
  71  |     const response = await this.apiContext.post(url, {
  72  |       multipart: form,
  73  |       headers: options?.headers,
  74  |     });
  75  | 
  76  |     logApiResponse(response.status(), url, Date.now() - start);
  77  |     return this.parseResponse<T>(response);
  78  |   }
  79  | 
  80  |   protected async put<T>(
  81  |     path: string,
  82  |     body?: unknown,
  83  |     options?: { headers?: Record<string, string> },
  84  |   ): Promise<T> {
  85  |     const url = this.buildUrl(path);
  86  |     logApiRequest('PUT', url, body);
  87  |     const start = Date.now();
  88  | 
  89  |     const response = await this.apiContext.put(url, {
  90  |       data: body,
  91  |       headers: options?.headers,
  92  |     });
  93  | 
  94  |     logApiResponse(response.status(), url, Date.now() - start);
  95  |     return this.parseResponse<T>(response);
  96  |   }
  97  | 
  98  |   protected async putForm<T>(
  99  |     path: string,
  100 |     form?: Record<string, string | number | boolean>,
  101 |     options?: { headers?: Record<string, string> },
  102 |   ): Promise<T> {
  103 |     const url = this.buildUrl(path);
  104 |     logApiRequest('PUT (Multipart)', url, form);
  105 |     const start = Date.now();
  106 | 
  107 |     const response = await this.apiContext.put(url, {
  108 |       multipart: form,
  109 |       headers: options?.headers,
  110 |     });
  111 | 
  112 |     logApiResponse(response.status(), url, Date.now() - start);
  113 |     return this.parseResponse<T>(response);
  114 |   }
  115 | 
  116 |   protected async patch<T>(
  117 |     path: string,
  118 |     body?: unknown,
  119 |   ): Promise<T> {
  120 |     const url = this.buildUrl(path);
  121 |     logApiRequest('PATCH', url, body);
  122 |     const start = Date.now();
  123 | 
  124 |     const response = await this.apiContext.patch(url, { data: body });
  125 | 
  126 |     logApiResponse(response.status(), url, Date.now() - start);
  127 |     return this.parseResponse<T>(response);
  128 |   }
  129 | 
  130 |   protected async delete<T = void>(path: string): Promise<T> {
  131 |     const url = this.buildUrl(path);
  132 |     logApiRequest('DELETE', url);
  133 |     const start = Date.now();
  134 | 
  135 |     const response = await this.apiContext.delete(url);
```
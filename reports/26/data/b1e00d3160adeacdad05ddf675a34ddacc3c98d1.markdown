# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/automation-exercise.api.spec.ts >> Automation Exercise API List >> API 7: POST To Verify Login with valid details @api
- Location: tests/api/automation-exercise.api.spec.ts:39:7

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
    - content-type: multipart/form-data; boundary=----WebKitFormBoundarygqtTRmnDf6Ljevrr
    - content-length: 1836
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7qtl2p%2BnYRUKRwch5L0WxuOCkbXO5yoYuDZrsyN20njyS0c1nm8xsAYf4GTlfOMBiqHGDveqNoPjKMxPu8mqPUIg3RQd9JIIcNVaaWnmhMEsGr1cc43WNoSGtqEutwpEBzeoUUdcbKE2"}]}
    - cf-ray: a04c6c0f7a273797-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QMvDZe3jLgfPol%2BBuJ1v5O7awzO87PxDVsh4G6n3bAq3L06gS7OQcLpP5hT8gDoBaNpBkVW1nFuhTo%2F%2B68JFtjQ40IeSj4yR2iXj3FDRj6a%2FPRGQQmzjx67JR7D5ZDMTmQd436R0O0dC"}]}
    - cf-ray: a04c6c12995d468f-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jjOr7iBdQeSuQWfsyL%2BzbpqqVupIn1EHMDpiMXuUMk7jJbpJTZT%2FNDSnJK82fTPBY32ySU%2Bn2QIuBH3b6BUp6iKVkzs1Voa933U4J5viu3izkwmIPGY9%2FPeZ5eoGCRQGaTRVOFymlbw%2F"}]}
    - cf-ray: a04c6c152ded4641-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jSyKXhKIbj8fsvh2eDN%2FEt0wwyOrqtdOjGK42E2lSp0vkwd%2FNKAUahh6CFWAL%2F%2FIyTW07%2FPxENQ3rI1aTBzMvMKFqctekM6iKW1aE2u%2FbeB7Dr4VpelMmyMFOf6wvpklpoAW%2F%2BURNM7E"}]}
    - cf-ray: a04c6c17bdd5346a-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TsP5z68o4d2CwRP0RzMOkWr3fDZAlgGJwm9MIzHlD6ql9VrpyL%2FC6lKygNnmmLnuBK5rifItJbLDFd55HNJACMkPVMAefZSK%2Bu8AOaq4JYhNxR75TtMMTifcv8uHUy7m5By5zh0SN8a5"}]}
    - cf-ray: a04c6c1abffc6c20-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=za2KE8etdImjI%2FtvHctXzjMkKbfsktZQe%2FPB%2Fiv5%2BmvrQrJHnXEx5BHAlRiwIjhUJQKZgwBLrqw%2FG8TfxpPzUDfkB%2FVHRbIaDymVH%2B17WKXluZewnZmC4xaeHzoKylXj%2B5Ob6skvH1cr"}]}
    - cf-ray: a04c6c1daa0c0e76-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nz%2FEbvzpzN3H51Betm0p2l94571PCx%2FnMqRSJEsCgZpT6wosczDhxMqJo1lIoXrsVsOw40eMoLB%2BreAnEw4xX6gRi0Ru9KPmC6q2OtmwwjUkulrV%2FvctWoCFw4RA4YzB4joMFkLRUgNy"}]}
    - cf-ray: a04c6c20299ac661-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LNhV7lGMgMnjz3eejR1PDQgBdEPdfWTfNFafUjrziJBncD7acIN7hw99L2tFjh2hAUgtjXsozga4KVNOZMZgVwcoUu3HNpIyWo0vBLvxqVmb8Ylxox%2Bw4txtsukCKHK3iKkoSaNkC8Y2"}]}
    - cf-ray: a04c6c2328b8f092-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MJl5NqvfZSUeYg0OZZPltiZNCetBc4f0BzDM5iuSpxMugPPoVqzzfL3w9EZSoLLrmxFLFAY82SvFsY2dbxdE7DBhFf%2FH9vlEetBpRON3kY2sB56rsBtBzoGImT1UR8c8bacV%2BmYGQYSp"}]}
    - cf-ray: a04c6c261e80f068-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5MrmWcJNu07SSj9trzFMAsMnBaOzTdAPE%2BCUVRsyez5IfW%2BoibRZ7HYBU3A6p70DI92O244dgMQSWQuJ9rPz2lckgYSNw8gVUpWv79irF1GDyrZZLo4XSch5pSC9PVa3cS4c1heZ8x2U"}]}
    - cf-ray: a04c6c288d40067b-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CcNRRQ65K4IqKv%2Bxc%2BZ%2FGDpa0FiLhECWQsxfhEUnlUFNlH%2BLuklTvnK17olUU3Sy9RUZ7dtgqvVjnnLXCg4rpTTQA7jIy7Q52sx8gAr4nbzMfqfu0CWAzQipOZTpPu0SUiLe0zu3g0cI"}]}
    - cf-ray: a04c6c2b0d6569d3-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zbc88txZZN0MDNv9BR7ITgt%2BCevoJHyu5qgT%2FELtXAnCNSsTp1vwSPZm%2BF8HPeCEdh1INlbEUZI3sR0MRNO2SlYAct9xCHRUNtPGLuvUK9%2FK%2FWLUiCrG1JfVnXEI1VnukKLMcG39zr%2FR"}]}
    - cf-ray: a04c6c2e0a6672fe-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=f7L1ABQRACOFXg3x6BW8XA%2BSZpX5RXBmRqswl6CDdFAphiY1t7%2FLOpOXi571qDU%2F7viZaHyFViFBXhxRu%2B4wIjwdnjZb9cm4ZobJziOAA363VEd1vBfJWJfpj%2FENgEkdLB46aakzuREm"}]}
    - cf-ray: a04c6c30cc3c474e-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3t99QY1oXL0PVtd1q4uiCgxze2ybyH8fhqID35Nwg0bQWTgLdAszKWfm%2F1Zcv0vlPc4Dy3ZKaKk5u7E9qmqQOjx44u%2BFHeYub%2FLkkJVyn15vNvX5BbBTFJFu6QcG7S9Z4z%2BxXynJ4ssQ"}]}
    - cf-ray: a04c6c335fbef81c-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KcUWVHKITn6VdDjuWMhi%2FEZD1YwOAReL4Rs5AXxX25JywGAurb%2B50wOOBjV%2Fa%2F8zM6UDM0TFWtT9btyL5oHLFPGu3mCsk%2FGNRnC%2FUrwvyag1aRStg6QefUU9qGQ6ccXH5m%2BWAmyCSbZU"}]}
    - cf-ray: a04c6c35d98d01f2-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xnzji8ktdRmsbkkPppIulTaUfZDAo1yQaM1taCu%2FzrUJ5kC7VycK8XlklsEdjXBaCcqJaYa8tWjbLdemwG3%2FjlZBQr9oE88AkQ1%2FYAWK3ntnJNsExzjOVUoiwWRXrd7543cCTcVFdcnN"}]}
    - cf-ray: a04c6c38da764641-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MvfidpXXSEnnWe6xdsKpCR%2BQ0G0FsZLG4yv3xslfQCx9i48FF6C7rE4C9LTULF8kgwOPBVMP0SLiW%2Fa5CgO3kqYNC39m3OFY2Xz7tjHHJMaY%2F85fUizzse1xu3nZdKvZZPoO%2Fd65X%2Bav"}]}
    - cf-ray: a04c6c3b5d5e8703-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7ziPYasDa9U%2BW1rtmE7wBNYrJuJ8l4j7gM%2B8GjX1Tmx%2FmyFt0EMeFarEuW5eAwq3OgeH%2FLVSN9eYHB03KUs94u0HcqsojXlV0hHQ4WaQ%2BO5SQsxX8jM4daVc%2BujHEKQ8TZ6t2YqqUCJd"}]}
    - cf-ray: a04c6c3e6c4152e4-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cKkUObECiuFwK9uw63a2kVth%2Fz2nPq4ohFL3mSfDuqMRMe79V816isziwLHGq5nS4beLXf9tWS9YKmtddJ10EL5f%2BAjSLR787AIIVPtJ0bN%2Bp%2FHX%2Fe6cK64J6Vl0CySipqe405YX1LD9"}]}
    - cf-ray: a04c6c40eb1b815f-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Qfvvh%2FouyDYlsAXVBZbD3ocFgnrwB%2BSSBtb8xjbZqb2nRkFQ11BC518JX9vrfXFe7j6g40T3pHYtEVM0qUstlPXP4%2F09u7UpJPoVfOa5aN%2FbiNN60CPY0o5H302QyWeEjBIuyXo%2F9c2v"}]}
    - cf-ray: a04c6c436d036c20-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 01 Jun 2026 07:14:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=E%2BpcVv1Cl9IWg0VLAT1RI%2Bh4PQwdzwZ1JW0IsIRHGBy6WfXA82Llp9urpYixJGZO6PFpNyyPM29cOH6gfnpq4KnTzzP0FQHxeBVEeuKa%2BXQKFqPAw8JFNp7LUzxQNdMnNeBCgz0lb7Za"}]}
    - cf-ray: a04c6c4699c8468f-DFW
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
  35  |     const response = await this.apiContext.get(url, {
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
> 71  |     const response = await this.apiContext.post(url, {
      |                                            ^ Error: apiRequestContext.post: Max redirect count exceeded
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
  136 | 
  137 |     logApiResponse(response.status(), url, Date.now() - start);
  138 |     return this.parseResponse<T>(response);
  139 |   }
  140 | 
  141 |   protected async deleteWithForm<T = void>(
  142 |     path: string,
  143 |     form?: Record<string, string | number | boolean>,
  144 |     options?: { headers?: Record<string, string> },
  145 |   ): Promise<T> {
  146 |     const url = this.buildUrl(path);
  147 |     logApiRequest('DELETE (Multipart)', url, form);
  148 |     const start = Date.now();
  149 | 
  150 |     const response = await this.apiContext.delete(url, {
  151 |       multipart: form,
  152 |       headers: options?.headers,
  153 |     });
  154 | 
  155 |     logApiResponse(response.status(), url, Date.now() - start);
  156 |     return this.parseResponse<T>(response);
  157 |   }
  158 | 
  159 |   // ─── Response Parsing ─────────────────────────────────────────────────────
  160 | 
  161 |   protected async parseResponse<T>(response: APIResponse): Promise<T> {
  162 |     if (!response.ok()) {
  163 |       let errorBody: string;
  164 |       try {
  165 |         errorBody = JSON.stringify(await response.json());
  166 |       } catch {
  167 |         errorBody = await response.text();
  168 |       }
  169 | 
  170 |       const error = new ApiError(
  171 |         `API request failed: ${response.status()} ${response.statusText()} — ${response.url()}`,
```
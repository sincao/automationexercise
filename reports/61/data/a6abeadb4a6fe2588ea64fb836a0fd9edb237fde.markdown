# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/automation-exercise.api.spec.ts >> Automation Exercise API List >> API 6: POST To Search Product without search_product parameter @api
- Location: tests/api/automation-exercise.api.spec.ts:33:7

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
    - content-type: multipart/form-data; boundary=----WebKitFormBoundary4PsBNNoxEdcS8lXa
    - content-length: 44
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gLHwHDzV%2FVssoqRvSzUUI%2FLbSllZ75b5RB%2FQdsAM4db8lw%2FuRdmWBAdLPjIHXyhjxxagzNx8B8eFUEAYCF%2BWU82xJBYz%2B77OJmkk%2Bx%2Bv9Ftag3ETT12PCElR4y6TL8e63vTc8stqH3Kk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca819df162b9e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Mn59s0%2FGOU5aQrHQuR5rUk82p3v3ladorc32X9echNkU0cYlR6V%2BxD04ykc3TXq6NCZ0GuWRzv1tkKBaf9q1SIG2iF3CpSK6S%2FzPWf7OoNxJdHjr4QSEhttwLhv0IslPockXFPv0mLLn"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca81c5bca13e6-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FMvTOgAZh1tzNBZdSMVMq51Ikfb6UJIeFesASs%2BVGxnruZ%2FjD2JWe152UM0qM9X2v%2Bm%2B879eRcIwyvm1M2CX6zo9sYXMC5iP1meMjSNJJsm%2FQrYgo8EOyHjnAjMv4C1nboczqvcwM%2BcK"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca81ed94c4adb-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sMDgNFkmY2vvDHn6draZ8uZiqmfU7LRZTdf1mzY4icC1dcz29PsKXCGOBllSGLPjSyzLp%2FX4iDsgjChPfwConAvkg6rMThjNVFLwcH9oLqk9H1NBf8IvvOPEtDl6%2F%2F%2F6YI6mdHrkAzMg"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca82159c775a3-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DdpsSIX7%2BcyGOv1PbpYKgMjvnSvU9%2BNpU040LjAL%2B058QrbZGeavagUBuz2qWcoYBi%2BpYh1LT1tnu2Ef5gs9YaCbwnB0eoAivfqhSKPve7oc%2F%2BBqEb14qNNEqM5Qb8Zif9ijXDntEDUl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8243e1b29a5-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1o6mHbBbmP2WVMSMJNMqnIdenWSnnbBXPhaP9UIDU0%2FI3Cz%2FZJRtlAueZ2X%2BbqdAyjQmkyUFXX3%2Bu3OQ8SgX4BeeNserXL%2FpdlfLpBarL4ya90uv4jC4fvFOctTQ6MsnHRoejSG7mOWl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8267bd62ec7-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=22uPi3yEJ450oXNotNgubzZv1I8ABc6DcNEd%2BxW3rxWYonYu6jeo09%2BQqgwOxw04jPHy0tkO0XsO2UwTSKsZ99oFyZoyxtnWszqBypRy53m4chrCIgG7NGiXC%2Flr8FmECWxU60xa%2FaTO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8293fbc2b90-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=p%2BTs5tOCg9fmdIXjJr5o1c0XnVEPvDeoNUQS07851S7qnqFiiQTrfSxPlVv%2FxozEin57syTXFcTguDbTq1An782M2es04bxvwxIu3n%2FX2fnQ1hz%2B%2Bkq5FF2%2BGij81uLBoai8t5L8loe6"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca82b8d57f50e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A7dzk7CNwwYLgVBwO5QZklUZ%2By0%2B3EoqaeNGMSz07U6nz0Ow31Rmx4QSxc9gUTjSmoOZPtrzvQ4RenTi2scRDDmKj5BCm3TCTwwl2PxyWZKpmOdh8%2BBwCuccnWoGsnEJlDmvMI85fzgJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca82dde42d567-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=k8dK8LNUZ8EMKpdcqhC0YprTDf4gYaNOwGmcFEFAeUgWIOuAj%2BwAeYMh1w08cjRUOj5uyfRy7%2F8wbOq4%2F2E2ewZebun10cMhGGwg8NULQLrCz9fms3QeytmFuTS7H%2BHxGxj5Yvd8JWYu"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca830df1727d8-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yug2G48%2B2KdkyesjuZl%2BUc0Xbb%2FhvWmwhnUSs6tyeLewpUkfy4Lq9Y81y%2BXzj72a%2Bap%2Fyhi5KasmEQx7svMUjTvex1gKai0q4I3zRcZ0GTllKH%2BQ1ilwYZRKFCxzRSnNuqRYGR9MsUEK"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8333d3f56fd-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pzVz22VJy7cWjhAFCZbJ2fPW5vit%2BqGdQGVr9Lvh8nLudfxu2GekQynNRBDUcg2F3iWPTlokM1626d5zmBLMA%2ByTgdeI3rUvSNhcUrfMisuuu4bjc4ed%2BDU5bokncmq6MK7bR%2BCKiiux"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8359ba9f6b1-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=20kJZUzwAfqsgDaa1O1dxxVcMwuy9qqDJdVCVC5qz9r%2BVjj3am8P8c4Vu9RGO98dnbfc0CoaImOZDrKMvfHk9gMcMU2O9VZFH5ZKwCYVCWYCtQa0G4Uvm4GzsWklfb6B%2Bs32ZWX0WZwy"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8385fde33ad-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mrRc5nHVGaKuS5qVDLzIx3KDWM3AeJk1MvkTytoj%2BoIBVl2JW8QoJJeatpkAMw42uytyN5aUsnnM56Bv0fsmheVWZ5OV1BPnc5TSZReXaoYutlnD0tlzw30IQuI1ubjgfhpOjwwj4kxp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca83ab9f43f37-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=n8RtsDaXVONX5cMFy5Xq9nSl93BSVSOg1nQsm%2B90Qk2uquFAfNKmxjufhJMYmblp9TrUgsK7Toje6jNihB8TKloup2rmvK871LsEVPihMxI%2FwpjQi9VJ0jNCXow03B7nd95ZBZUA3GvK"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca83d2a182adc-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=eve727aKbuN5l4aQcINjvY0BZo7MWwnvsxF9LvZMloKBmJpZNl3wqIGxnIqIRHg3oNk847DdN3mwiebCE8ZUrszqKoS0AYxqreJdpOUO5RM87n2C4EkSZlYTu0WCAycuD3fMkI1s5JAD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca83fda512b9e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=r9kxiagK6JIRlNWl5mWF4qshu448xmt1ePrAGhKQvjs%2Fg%2FNkbBGBX3n8LEhoRPJaXwXeNkqd3ptygCcJxKRxb9SxvshynNt0JJ%2BZgptXx5LSqOJ3IdlsodfgCLbNW2WqFl%2BqoD%2B5G3ih"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca84229f43434-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=20bPjgEOJNus1rVFyVRi2k%2BMD1ZodnKC2wn%2F%2BP7vq26Asng0FeIBu4fBcFdLnbJLcq8Zs7KEkdcBuW4m%2F3E%2FgfxHlPeVpezfM3IbDfooUBFU1ja92ROHQrtInKIJNBDfCLcgNtMpOc2J"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8447ee275a3-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FE8WvtoQa5FT5xg8cr%2Fx8MdPeXxh9q4VWqn1tgBU0KQAk149xhu9Wa141KqEUVNVwrsKfyqcsfaEWcrP22lyugDuRmLoI1Vj%2Bxt0bCgopIzGbEj2AaB0WbonGwO8xmnze2kzXhV6qTDU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca846d928cb94-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6fYtyAtoTHUsvgPz4Lki3mVP7aLoGqr5mglaow7T7yWXpDVw%2BDueAOOJzRx%2BQSXBcdPByV441bSUVU72JhT%2FxUvDZGXRMab5E2xMuqZI3GQ1aP2dzzp9DOswEc3a1g31nzfXY3dzP8yV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca8496c504adb-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:47:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=whha9GpctaWsHbwsTToviiEV2T%2FmvB4qRHhggNaTYle6797SXHqRicW0Mya4bqPLDO%2BQ8a4lwIL5O0%2BgqbNuWIlcxAXqiEN5kP52OgwkShrXSrmhSRjS6etA4rLVcV90WzYjp0oGKGIR"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca84bbc2929a5-LAX
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
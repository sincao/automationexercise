# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/automation-exercise.api.spec.ts >> Automation Exercise API List >> API 5: POST To Search Product @api
- Location: tests/api/automation-exercise.api.spec.ts:27:7

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/searchProduct
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
    - content-type: multipart/form-data; boundary=----WebKitFormBoundarywg5X3gUQ58q22weo
    - content-length: 148
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QWSdWjYrJPnSRmdSjTdolDHpPRUZD5oWWOE%2F5IJIU7DRtQyCFbZhu1tSNheIQNpXucHORHmW2dYgMWl1tO%2Fj772HvuaB%2BHcxFUL8Wsbzlq%2FGuCp83bWS%2BnviYAANyc4MqQgAUEpj62ew"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca765cacb14a7-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZyBOTyLuWQveOyIT1bnFCNSkrwAWpkBTzg%2FQdl1UHpHF8W2RO63oJGvFyCxaRZ8MensfFH6Kg7%2FI7mB7dNsOnxIbu4BMFyr1NhHR5Xsa8QaSvIXWwRHjtjcX30Ahdj6%2FWtIeCKZ8lL5b"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7681e92d567-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HNI9GCfrn%2FgWEqLk5eMMBn768BrcIo18ceQ%2FHK8PqiVuXT6u5k6h6J3kcEx8IxX097a3DMxaGHPZ4jlCIdIW32nl%2Bux0Iy6SWQNV8SLt3NsXRrGraQWH6y7JaSiHvzbhQ3D60fot1ivZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca76a98dd13e6-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nCowuRwF%2BbYpS4WNiNrwhtIk7MmKCYKA%2FS3Cv3%2FATjm8lNCA3ByJQvYa5%2Bl3qcJdVppiUsDsnctwZDvSKcK%2BJWB9PYQPPr6aCxFGMou2uUh%2FGu7tdDXvIL92JMq9tZ4mmak03GYIzBjn"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca76d1ec62b9e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7GzujozzZOYmi9DXhfs9n%2BAqhFwqElFArSrKb00EPP0CxP7dSx8bciwPlvux2FZM2iMBbSuxc8DBWLflbP9VH0hjeF68aMKTU%2FpiDVZsxdvq9hYW67zEE8CmFAxlVsmcvJUzs1%2FQ0AVW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca76f683033ad-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iVlxMmRXvigYuSjnJqXNlGFV8SfSc8K2xljLfgdFCivz1WEuS%2Fic7KG6IFty%2FG7oHmqZCjxcjSXZMtE6DE6oKf%2FPRF%2FN3%2Fgg755AFOtaW4MJB9ouaHPRxea%2BFgjzSAh5%2FA%2BtfumUsosF"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca771a9853f37-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=J52DXJcjLzicdXwOp0C1tF0odePvr9YhiIc2xTLwWaBGJKQpAeBDM1FmhiQUimslNN%2Fz9nXUNVibREXUe5tv2pZFcfjC6q8tIwpIqD78EQqVH80ESSoOppygzl710irtHNWVVUhnJTxR"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7741d612b90-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=l5AV8Xg6ADJoVJNNPq1aWI1o%2FKMCzWrfNTZBytotRmZs7ET%2BDvQj6N%2FCg5vY57TWZcJm0WvSae%2B%2BtoLMrx%2BEG7uhBLV1gwCMdJnn1sNvYTKq5X%2BBkdqHnp630Xq8VI1z98QZEoqxOo02"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca77689274adb-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fAPPgdZVDvbKomR%2FInP%2FdroODbihwQpxTP2jRANClbMO%2FWcOHXvcnHz26TIimw72cjq0HzonfvvvDjy9EsiMyBVNhMaY%2BGdgRYJRLgvT415ldcWMwF6bjD4DR8A9Y5IaW4ASXvnXXvU%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7792ca6cbaf-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=liL9Ki9dMgfZo%2Bu3MmHI7sHBObqnWmJgVSv1Noa1O6JKYDbSe0gSsl3JA%2FLyQoGVkYlspm8R%2FtwwaMxXcfciHuwhxInqjnBlNVYf992NFvFtbkNDzx9ytZ84HSSKiJAIIrGcugfEfI5l"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca77b7e242ec7-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9zO6Af0QQl4%2FQm%2BsKI2MQgA3oS2PWSWi%2BsMHF%2BM4WbE%2BB6TQVApMVMPN8IPQwqywm5C6pkatmTV4OE6dLhBFY%2BBDULP8IHuYVQKU6608fMEXWrk4%2B11T4Di75cR0bc5iM7vz1J5pQ5%2Fb"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca77dfe4a75a3-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FaR0P6Yf8qvo7NHZD6pH0M%2BuYSNy1QC0ejANyugEQejX5jiV%2BU%2BKIIxgnuHg%2BKPwbxO6ow0wEe21fKieBMf3Kk%2FmLbnX3u18vVlu3S%2BH81E31sxuCoKtKIvLjgaFSCJ4wcLFugj%2BSmQT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7808ca29d5a-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Efyuxu7OaX17gziCqlz1bhb9372SavUgIx%2FSCmVRYWCg3csMyCsxNgwMTurpjTtQiQK1J5kxbA7ZbWBh5mpyWDCIA3ymWmipqYGDo6gP02yWkT4riORiOlud8IflpC%2FrXkvorhT3f34y"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca782cff029a5-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=im97eMA%2FahjZeV6cVCK1a2phxvr7IT5hFWWSPvPte6ScoMw1Rq6pZsPUKTMuJzzXAgdLaTj3%2BRoU02ODIPgwWOLghg6bTW892%2BQGgHXO1s9mTs5A0zdZivMCrZPIwt88wiAxrw3QAhs8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7851f7f7b5d-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uitb9soWfj6un3hM14x9PpW4L9A8VVPg0zOc43OU8iovRQ5tB60aFrEdp3cD%2FSLGnRqWigVtg4t4s3wTXdSlVS2PKMJ6oXDIiY%2BsdmTpTAfUgDNlf3HD2QleHaaEQkdirfX5UIU1O7DM"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7877fd0f50e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iWoMp4BVT35QpHDiTYqrHDrqTdlr9jkyO99kT1V4OG08Ijv9vo%2BTfSr8r7P9XMcbYiZkMRr%2ByMLAMH4FExrlQfaSJ2KgYbWO3TvSli4bV%2Bul91f1HNUEwsBB68QW1KjMyZ7P0sAhMnmk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca789db650900-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3jtGCd9pwcznxNLP0oJ0BLXXkKdhSV8zXnjK5twlLWmSdLsEeOwJAWjbI7iTQ3ypOeSIpaY6QaMPCINWNp7KPYGfScT%2BoPZJMGtuX%2FLSXLkfm3g%2Br%2BNjxw7u6Rqkqben4voNyPWMCpz3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca78c3def3434-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2%2Bl%2FE0l%2F2f1DXQ%2FRK2Bvk%2FLbAhfWRz4r6ev88K4tn6lFkGuCQg3dejPqkmgOBZk8bLEXRdr%2BIF%2BIKup5kDIZ53trKNm%2BKeLzWIkA556Ugc5hRoZYKLMkCHIiB3TKFWF%2F4tME4IR2YY5A"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca78ea9abc74e-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ma5%2Fw1NkGFJadtOHs%2FXVc7uYQews8zQlrvnugdvcnLtur6%2Fl%2BcSXRE5Wmt87Lt3mTIhFq%2FBHvbOAFYQzsQ7WSgb2pMbJRSG2P1WEjSTRnspl2xkuCmVbRKzxSYcZcXXY3yX6%2BIx9dxJQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7911a5f33ad-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BCsZVsbh5XcS8eQSPAu9uvx8G%2FdqODVb2ed1I%2BAcYtIy7RSpm1WQcTG%2FZ7S4G12kVebGvqWl8HfVOKA7JIaBV0iKHRNslTGfobii2KfZjygJld34RB0SrPkw2fIV9SK5hKawb5NFl0Sz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca7938c0f14a7-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Mon, 06 Jul 2026 06:46:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7W19TZ5RkLsBM7jF42pazRTK%2FnxpWjFa8rd5xPuj2wSC69IrW0XVnYQe4brYXyPa9xgJ0uIc2UCKCvMZHYFU7dzb1ePchj4O4UCPAllNDvj2Wqta%2FNvVK0qCmT5Q0qeoxpzM7FikVAbp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a16ca795ea88d567-LAX
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
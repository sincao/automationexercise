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
    - content-type: multipart/form-data; boundary=----WebKitFormBoundaryjuUYWDjEERx5iWS5
    - content-length: 44
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=h3jRlcpSRat2YEG6RIcyAoEC4CD5air0Cv5yxXM8Bt4qZINNwHjBFSJDorFPHeZ35RcPOXOgjVqhhPty2R%2B2mNLVathi%2BZxU60UpdpaGM%2B74xZ8ZcDwoXHqq6wBjsp5NLVyWT5e6Qxhb"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16781c20226d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=d7rRAoUnV572zNpHgQpgnfi%2BTtSJ%2FSvujGpFoJ1q7A43xzWdblM9k5MDna6fG2P0BRXfR%2FNYVqmD8oS6P%2FpC%2FNfjbfjIG1msXT5oMHA3PK5yqup49Qy%2BLN21njVc8rYtYETZJacSWX1d"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b167b9fabf13a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1BJKz%2BvaEDPmHUNIV8op%2F9BJOEPIgCh0gjwVSIypDyi06BSN6W%2BSy1tP0g%2BXsVD4sPAZNbFQb7mf7uzJCB0PcFnHyGjYmBJhU3HOYpX7MqpjeguTrg2wmY5JFE2TceM8bhXz%2F1VhFMT5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b167dfdd6f3ee-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Z6f5smwB4H7GymHEGQ9jL7tC4jFAHLpfBQs%2FmcHxkifjsoAnz89x%2BexZ9fwdWitlI%2BYckTkriCO%2Bg%2BRpjhyVXx%2F%2Fq7m8tSuOfLSSalTUBcRrb3OQsN4omK21jxkDSyUIJdtorrVyKWad"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b168188aa1f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2nDiewF%2BUf0nkplQinGtwYErWIHcacdo39pg36xcjsdjejmMGM6QaxPmMAtux0kzMMqO10fIK8ExhLhs5kFNiN59IKy0kbtoAMCRLbyxyg5TDaphMYIdHjPdd%2BhNQlWGhWV7VoZFLI%2FJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1684fd309bf6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MVkbBmlSIv5RgZ7xz2bzn1vR6vKtRAc4Ts5%2BamNWguRKJ6IwcPNKMPFIaCO%2FGrqFJ3o2KerKQDCds%2BeHn8A%2FjD%2BXF06A%2Bdl7esm9%2F24YSIcW5ugCBHGgOXwSAZ7Ri2ZAeQluRMmxz77A"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16876fbde262-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ucEZACTfgSQdRGWYdJYzniabjuWQSktrJpAtjSPw5%2FMSp9PfDtd8uxqs9PKYLuSkLktyO26LxDZa0f2mwEn10vO9egPumgwsT0UnWhqN8ojR%2BJbNOD9em1SLTrOgsxnUAc3Yf62LvkeL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b1689ce60acb1-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gmgs8GB6VCKbKTwEuG8P51oELXrAX3v5V3uPpB6qA11hinKR77UBHQeszgYqMyhgZIRCXdhj6LzZ7SIEzX%2BGhs2YfMOoNbcMcCGdGPq2h0AeF%2Bpr6VfEK1nVq%2F%2BhnLQZLWrDDA7fQ%2BIM"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b168c3824ba2c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uvXQVLnRndtJJmHtPetRIz021QfU8SSMihNOAjyN8410OQWuoyFusvbk27oYy3n7%2BjuA16QaIlkokpj3QEj66n0Kha%2BgoOQNW2t38EaP4ugpek1vk7Le%2FSnQXimFq50VSvB1AFbZKY%2Br"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b168ea957fa0f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vihJzHNw5URVO1SBPc1nNzfROJAiberKh%2Fsli%2BzHY%2Brs6jYRfQQNR%2FwMJKsFUPxuGBlb0nx1uHGM6CBm0R8wrliEs530h1KmVUMwCtrnwarCWjI8KdYv%2FcRH63Tb5rFw%2FUztCtkzyXju"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16921b2990bd-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Gnhh5ce%2FgZbqSU1Ub54GIqI0ZNJjo9YVu3ibHGbj2g%2BFe%2FTWTcjfGzHc25dOwduuVMhsMx9MVXJ3CZ16%2FtH2nZBDV9xcdSsLynqlmmqBis3EXdiPAqa3OndjR%2Ftgd42jtokSeRZWIA%2BI"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16959ddae1eb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lJoozGh0ftxaEHpXllqXkYJJovPsYyLCHUMbcIuL7l9rbZ%2BWTivL50QXBEIUtfRCiDsW7%2B73U%2FqM5RcYgop8dGc7W6QqJF3fa7%2BDBVI02x6KxJsNlbITksa8WZuhisQ1SyUD%2FON%2FXJZM"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16980aabe82d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M7hDORkWofkZbD2XU1WmUJj%2Fnf2JASLSJmlGKEEfU1%2F%2BmeTYm0p38sGmZleuQ1rJHpEHFBQHTpL8zuaWUUCX%2Fi5mROhfXpOXUaMHyxEimJ8zx72QF4I%2Fx3KqFLlgOX76Eb19Xh6x0BUE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b169a6e022b4b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EFwR2eCZReEu3%2BKt5NXOLoUkW%2FbAIa74JzYyN%2F1o3%2BUcXYHkiQgAtXvtyaZRQH1o%2B6D0UyxvDg%2By%2BuyxybGu8Lag%2FTwpe9uBR%2FG%2FmQ0DzAhmW6Odk16urN0ixdi6MHGbIU7%2F%2FEkogg9H"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b169ccb33226d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I%2FNwOH%2FGSYfO6jXlGSs1wuwq731wvhYEZpGF6mbKLWGg4pAX4gQcmLeKXb9mKV0Uxh29kdA6T20SO3gvsITWpfzzQOPQbwKGfTFxAvmvpy61mUWMje%2Bs4WbiH7Ex0jramD0sew0tu4%2Fv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b169f3f76f13a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Y%2FqYe3JCQ62CqKX%2FY7wR4kpQ4aY1fv%2BWYzvj0H5XBsBwI52D4bvCNN5QLZuA1zZw%2BS2lV%2BIyiN%2BwLHc8nvh5z47XUayyDNOB6z78yhPL0RPDkha3kXZQBxWV70y7gBUMExr9Ig3G6ee4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16a1adf99d52-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=y%2FCnJU0uUxbfG3BKllcigoAg62wZDNJn4WXJC0QYmIS1FeLOOqyQKc2EhNABI0MiB9MLRCUe6GeuEjwQl%2FIz4zLnqJ1H7h0%2BlruAEGoTHSTbey%2FoCdo%2Bd2Rpq7RuHJmUMqrEE9rusTBV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16a40985eaec-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=w2pY5L9hkH%2BKVyuzYiunTlqT4IesrFqRHXP8OSxedwdw45KLsS3AkJulICigWv00rCMV7O%2B91jze02O%2BNjqqVgGkI1feANq4mUvxgYaWSRsBy15kjmdo9uO8MzV43n3nQAPE03vQXfHO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16a66ac1f3ee-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fDigNGUb08NGzJs28EdOUnXWij%2BEQBztadrzDhiTNkBfRs3bXK%2BqfOTfF25XKVr5qqXYFU5sVQMVsdRo3R88nSNgGC5UeZiC%2Fmu0dMdMcbBoKNIS3Fdj873a6ddWNP0797%2F49NPH%2F%2BRA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16a8cea41f93-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Kx92lX6nhuvHX8A8HKcv2Nnfv%2FyQ99EZhBHa6YyaYv3ciejSOJU2KKF3BwCNSgQ7cPAu3kWzb4muvt5CraJbNd1C31YfE9T5tVWETaZTGxdfJasK0qLCEJSjj9K6%2BYKn4K%2B%2FsNz4bMdA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16ac3c989bf6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.60.0 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Accept-Language: en-US
  - ← 302 Found
    - date: Tue, 30 Jun 2026 06:24:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=y%2BpfaX08%2Bb%2FF7gJR9MfMfHkP2dHyr3PGURT1QrLveUPEFdTOIwldO0gIrbNBwEKFAMbJIBGzUrLiE8PRqxexPaK2yxDyee2m6uGFrXB69b6EJ8IHt01GKBxqo2OC8qX6jPM8bkQx09Ht"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a13b16aeaba5e262-ORD
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
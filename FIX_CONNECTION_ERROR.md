# 🔒 Fixing "Not Secure" & Connection Errors

**Don't Panic!** This is completely normal for a new domain setup.

## 1. Why is this happening?
When you connect a domain to Vercel, two things need to happen:
1. **DNS Propagation**: The internet needs to learn that `darshanaakadkar.com` points to Vercel. (Takes 15 min - 24 hours)
2. **SSL Certificate Generation**: Vercel automatically creates a secure HTTPS certificate for you. **This cannot happen until step 1 is complete.**

If you see `ERR_CONNECTION_CLOSED` or "Not Secure", it means Vercel is still trying to generate your security certificate.

## 2. Check your GoDaddy DNS (Critical)
Please double-check these exact records in your GoDaddy DNS settings. If any are wrong, it will never work.

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

**Action:** If you have any *other* A records with `@` (like "Parked" or random IP addresses), **DELETE THEM**. You should only have the one A record pointing to `76.76.21.21`.

## 3. Verify in Vercel Dashboard
1. Go to your **Vercel Dashboard** > **Settings** > **Domains**.
2. Look at `darshanaakadkar.com`.
3. Does it show a specific error message?
   - **Invalid Configuration**: DNS is wrong (Wait or Fix GoDaddy).
   - **Pending Issuance**: DNS is good, just waiting for SSL (Wait 30 mins).
   - **Valid**: It works! (Clear your browser cache).

## 4. What to do now?
**Wait 30-60 minutes.**
It often takes time for the "Not Secure" warning to turn into the secure "Lock" icon.

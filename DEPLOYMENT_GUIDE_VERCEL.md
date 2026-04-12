# 🚀 Deployment Guide: Vercel & GoDaddy

Since you have a custom domain (`darshanaakadkar.com`) on GoDaddy, follow these steps to link it to your Vercel deployment.

## Step 1: Deploy to Vercel
I have PROPOSED the command `npx -y vercel@latest` in your terminal.
1. Approve the command.
2. It will ask you to login (Email/GitHub).
3. **Accept all defaults** (just press Enter) for the prompts:
   - Set up and deploy? **Y**
   - Which scope? **(Your Name)**
   - Link to existing project? **N**
   - Project Name? **darshana-portfolio** (or default)
   - Directory? **./**
   - Want to modify settings? **N**

## Step 2: Configure Domain in Vercel
1. Once deployed, go to your **Vercel Dashboard** (vercel.com/dashboard).
2. Click on your `darshana-portfolio` project.
3. Go to **Settings** > **Domains**.
4. Enter `darshanaakadkar.com` and click **Add**.
5. Vercel will show an "Invalid Configuration" error. **This is normal** until we fix GoDaddy.

## Step 3: Configure GoDaddy DNS
1. Login to **Godaddy** and go to **DNS Management** for your domain.
2. **Delete** any existing "Parked" A Records.
3. Add the following records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `76.76.21.21` | 600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600 |

4. Wait 5-10 minutes. Vercel will turn **Green/Active**.
5. Your site is now live!

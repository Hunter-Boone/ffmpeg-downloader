# macOS Code Signing Setup

## 1. Export Certificate from Keychain

After downloading your Developer ID certificate:

```bash
# Export certificate as .p12 file
# In Keychain Access:
# 1. Right-click "Developer ID Application: Your Name"
# 2. Export "Developer ID Application: Your Name"
# 3. Save as certificate.p12 with password

# Convert to base64 for GitHub secret
base64 -i certificate.p12 | pbcopy
```

## 2. Create App-Specific Password

1. Go to https://appleid.apple.com/
2. Sign in with your Apple ID
3. App-Specific Passwords → Generate
4. Use this password (not your regular Apple ID password)

## 3. Find Your Team ID

1. Go to https://developer.apple.com/account/
2. Membership tab → Team ID

## 4. GitHub Secrets to Add

```
APPLE_CERTIFICATE=<base64 encoded .p12 file>
APPLE_CERTIFICATE_PASSWORD=<password for .p12 file>
APPLE_SIGNING_IDENTITY="Developer ID Application: Your Name (TEAM_ID)"
APPLE_ID=<your-apple-id@email.com>
APPLE_PASSWORD=<app-specific-password>
APPLE_TEAM_ID=<your-team-id>
```

## 5. Benefits of Code Signing

- ✅ No "damaged" warnings
- ✅ Apps run without user intervention
- ✅ Can distribute via Mac App Store
- ✅ Enhanced user trust
- ✅ Automatic updates possible
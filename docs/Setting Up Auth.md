# Authentication Setup

## Problem: 401 Unauthorized Errors

### Issue
When developing locally, the app fails with 401 errors when trying to fetch data after logging in. The error occurs because:

1. Dev server runs on `localhost` (e.g., `localhost:5173`)
2. API server runs on `books.pflugerarchitects.com`
3. Browsers block cookies in cross-origin requests by default
4. PHP sessions rely on cookies to maintain authentication state

### Solution: Vite Proxy

Instead of making direct cross-origin requests, we use Vite's built-in proxy to forward API requests through the dev server.

#### 1. Update `vite.config.js`

Add proxy configuration:

```js
export default defineConfig({
  // ... other config
  server: {
    proxy: {
      '/api': {
        target: 'https://books.pflugerarchitects.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
```

#### 2. Update `src/data/db.ts`

Change the API URL to use relative path:

```typescript
// Before:
const API_URL = 'https://books.pflugerarchitects.com/api';

// After:
const API_URL = '/api';
```

#### 3. Simplify `api/auth.php`

Remove cross-origin cookie configuration (not needed with proxy):

```php
<?php
require_once 'config.php';

// Start session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
```

### How It Works

1. Browser makes request to `/api/units.php` (same origin as dev server)
2. Vite proxy forwards request to `https://books.pflugerarchitects.com/api/units.php`
3. Response includes `Set-Cookie` header
4. Browser stores cookie (allowed because request appears same-origin)
5. Subsequent requests to `/api/*` include the session cookie
6. Authentication works normally

### Important Notes

- **Must restart dev server** after changing `vite.config.js`
- Production builds bypass the proxy and use the full API URL in the built dist files
- Sessions expire when browser closes (no persistent login)
- This is only needed for local development; production doesn't have this issue

### Debugging

If auth still fails:
1. Check Network tab in DevTools
2. Verify `/api/auth.php/login` response has `Set-Cookie` header
3. Verify subsequent requests to `/api/*` include `Cookie` header
4. Check that `api/auth.php` file on server matches local version
5. Clear browser cookies and try again

### Files Modified

- `vite.config.js` - Added proxy configuration
- `src/data/db.ts` - Changed API_URL to `/api`
- `api/auth.php` - Simplified session handling
- `src/App.tsx` - Added session check on mount with `getCurrentUser()`

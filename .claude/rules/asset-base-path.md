# Asset Base Path Rule

## Static Asset References

This project uses a custom `basePath` configured in [next.config.js](/next.config.js). When referencing static assets from the public directory, you **must** include this base path.

### CRITICAL: Always Use getImagePath Utility

✅ **CORRECT approach - Use getImagePath utility:**
```jsx
import { getImagePath } from '@/lib/utils';

// For regular img tags
<img src={getImagePath("/images/logo.png")} alt="Logo" />

// For data/object properties
const mockData = {
  thumbnail: getImagePath("/images/site1.png"),
  // ...
};
```

❌ **INCORRECT approaches:**
```jsx
// Never hardcode the base path - will break if BASE_PATH changes
<img src="/orion/images/logo.png" alt="Logo" />

// Never omit base path - will result in 404 errors
<img src="/images/logo.png" alt="Logo" />
```

### The getImagePath Utility

Located in `src/lib/utils.ts`, this utility automatically handles the base path:

```typescript
import { BASE_PATH } from '@/config/paths'

export function getImagePath(path: string) {
  return `${BASE_PATH}${path}`
}
```

### Recommended Patterns

1. **For regular img elements:**
   ```jsx
   import { getImagePath } from '@/lib/utils';

   <img src={getImagePath("/images/logo.png")} alt="Logo" />
   ```

2. **For Next.js Image component:**
   When using the `next/image` component, it automatically handles the base path.
   ```jsx
   import Image from 'next/image'

   // This works correctly with basePath
   <Image src="/images/logo.png" width={100} height={100} alt="Logo" />
   ```

3. **For data objects and arrays:**
   ```jsx
   import { getImagePath } from '@/lib/utils';

   const sites = [
     {
       id: "1",
       name: "Site Name",
       thumbnail: getImagePath("/images/site1.png"), // ✅ Correct
     }
   ];
   ```

4. **For CSS background images in JSX:**
   ```jsx
   import { getImagePath } from '@/lib/utils';

   <div style={{ backgroundImage: `url(${getImagePath("/images/bg.jpg")})` }} />
   ```

### Common Places to Check

- Favicon references in `layout.tsx`
- Image tags in components
- CSS background images
- Meta tags and Open Graph images
- Icon imports and references

Always verify asset paths are working correctly when deployed to production, as local development may not always reflect the same path structure.
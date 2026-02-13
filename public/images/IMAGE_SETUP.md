# How to Add Your Photo

## Step-by-Step Instructions

1. **Prepare Your Image:**
   - Use a professional portrait photo
   - Recommended size: 800x800px or larger (square format works best)
   - File formats: JPG, PNG, or WebP
   - File name must be: `anushka-photo.jpg`

2. **Place the Image:**
   - Copy your photo file
   - Paste it into: `public/images/anushka-photo.jpg`
   - Make sure the filename is exactly: `anushka-photo.jpg`

3. **Verify:**
   - The file should be in: `public/images/anushka-photo.jpg`
   - File size should be reasonable (under 2MB recommended)

## Troubleshooting

### If the image doesn't show:

1. **Check the file path:**
   - Make sure it's in `public/images/` folder
   - Make sure the filename is exactly `anushka-photo.jpg` (case-sensitive)

2. **Check the file format:**
   - Try converting to JPG if using PNG
   - Make sure the file isn't corrupted

3. **Clear Next.js cache:**
   ```bash
   npm run build
   ```

4. **Restart the dev server:**
   ```bash
   npm run dev
   ```

## Alternative: Use a Different Filename

If you want to use a different filename, update these files:
- `components/Hero.tsx` - line 69
- `components/About.tsx` - line 85
- `components/Footer.tsx` - line 26
- `components/Navbar.tsx` - line 45

Change `/images/anushka-photo.jpg` to your filename.


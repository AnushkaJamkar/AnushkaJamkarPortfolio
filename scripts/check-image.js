// Quick script to check if image exists
const fs = require('fs')
const path = require('path')

const imagePath = path.join(__dirname, '../public/images/anushka-photo.jpg')

if (fs.existsSync(imagePath)) {
  const stats = fs.statSync(imagePath)
  console.log('✅ Image file exists!')
  console.log(`   Location: ${imagePath}`)
  console.log(`   Size: ${(stats.size / 1024).toFixed(2)} KB`)
  console.log(`   Created: ${stats.birthtime}`)
  console.log(`   Modified: ${stats.mtime}`)
} else {
  console.log('❌ Image file NOT found!')
  console.log(`   Expected location: ${imagePath}`)
  console.log('\n📝 Please add your photo:')
  console.log('   1. Place your photo at: public/images/anushka-photo.jpg')
  console.log('   2. Make sure the filename is exactly: anushka-photo.jpg')
  console.log('   3. Supported formats: JPG, PNG, WebP')
}


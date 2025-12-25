# Minimal Installation Script for OW Web
# Admin yetkisi gerektirmez

Write-Host "OW Web - Minimal Kurulum Başlatılıyor..." -ForegroundColor Green

# Önce temel paketler
Write-Host "`n1. Temel paketler kuruluyor..." -ForegroundColor Yellow
npm install next@latest react@latest react-dom@latest typescript@latest --legacy-peer-deps --no-save

# Tailwind ve PostCSS
Write-Host "`n2. Styling paketleri kuruluyor..." -ForegroundColor Yellow
npm install tailwindcss@latest postcss@latest autoprefixer@latest --legacy-peer-deps --no-save

# UI paketleri
Write-Host "`n3. UI paketleri kuruluyor..." -ForegroundColor Yellow
npm install framer-motion@latest lucide-react@latest --legacy-peer-deps --no-save
npm install class-variance-authority@latest clsx@latest tailwind-merge@latest --legacy-peer-deps --no-save

# Radix UI (temel)
Write-Host "`n4. Radix UI paketleri kuruluyor..." -ForegroundColor Yellow
npm install @radix-ui/react-slot@latest @radix-ui/react-dialog@latest --legacy-peer-deps --no-save

# Form paketleri
Write-Host "`n5. Form paketleri kuruluyor..." -ForegroundColor Yellow
npm install react-hook-form@latest @hookform/resolvers@latest zod@latest --legacy-peer-deps --no-save

# 3D paketleri (opsiyonel - daha sonra eklenebilir)
Write-Host "`n6. 3D paketleri kuruluyor (opsiyonel)..." -ForegroundColor Yellow
npm install three@latest @react-three/fiber@latest @react-three/drei@latest --legacy-peer-deps --no-save

# Kalan paketler
Write-Host "`n7. Kalan paketler kuruluyor..." -ForegroundColor Yellow
npm install --legacy-peer-deps --no-optional

Write-Host "`n✅ Kurulum tamamlandı!" -ForegroundColor Green
Write-Host "`nDev server'ı başlatmak için: npm run dev" -ForegroundColor Cyan

# Basic Installation Script - Admin yetkisi gerektirmez
# Sadece çalıştırmak için minimum paketler

Write-Host "OW Web - Temel Kurulum Başlatılıyor..." -ForegroundColor Green
Write-Host "Bu script sadece çalıştırmak için gerekli minimum paketleri kurar.`n" -ForegroundColor Yellow

# 1. Next.js ve React (ZORUNLU)
Write-Host "1/5 - Next.js ve React kuruluyor..." -ForegroundColor Cyan
npm install next@latest react@latest react-dom@latest --legacy-peer-deps --no-save
if ($LASTEXITCODE -ne 0) {
    Write-Host "Hata: Next.js kurulumu başarısız!" -ForegroundColor Red
    exit 1
}

# 2. TypeScript (ZORUNLU)
Write-Host "`n2/5 - TypeScript kuruluyor..." -ForegroundColor Cyan
npm install typescript@latest @types/node@latest @types/react@latest @types/react-dom@latest --legacy-peer-deps --no-save --save-dev

# 3. Tailwind CSS (ZORUNLU)
Write-Host "`n3/5 - Tailwind CSS kuruluyor..." -ForegroundColor Cyan
npm install tailwindcss@latest postcss@latest autoprefixer@latest --legacy-peer-deps --no-save --save-dev

# 4. Temel UI paketleri
Write-Host "`n4/5 - UI paketleri kuruluyor..." -ForegroundColor Cyan
npm install framer-motion@latest lucide-react@latest --legacy-peer-deps --no-save
npm install class-variance-authority@latest clsx@latest tailwind-merge@latest --legacy-peer-deps --no-save
npm install @radix-ui/react-slot@latest --legacy-peer-deps --no-save

# 5. Form paketleri
Write-Host "`n5/5 - Form paketleri kuruluyor..." -ForegroundColor Cyan
npm install react-hook-form@latest @hookform/resolvers@latest zod@latest --legacy-peer-deps --no-save

# Kalan paketleri kur (opsiyonel paketler atlanır)
Write-Host "`nKalan paketler kuruluyor (opsiyonel paketler atlanıyor)..." -ForegroundColor Cyan
npm install --legacy-peer-deps --no-optional 2>&1 | Out-Null

Write-Host "`n✅ Temel kurulum tamamlandı!" -ForegroundColor Green
Write-Host "`nDev server'ı başlatmak için: npm run dev" -ForegroundColor Cyan
Write-Host "Not: Bazı özellikler (3D, test) çalışmayabilir ama temel sayfalar çalışacaktır." -ForegroundColor Yellow

# Admin Yetkisi Olmadan Kurulum Çözümleri

## ⚠️ Sorun
npm install işlemi Windows'ta admin yetkisi gerektirebilir veya dosya kilitleme sorunları yaşayabilir.

## ✅ Çözüm 1: PowerShell Script ile Adım Adım Kurulum (ÖNERİLEN)

PowerShell'i **yönetici olarak çalıştırmadan** şu komutu çalıştırın:

\`\`\`powershell
.\install-minimal.ps1
\`\`\`

Bu script paketleri gruplar halinde kurar ve daha az sorun yaşar.

## ✅ Çözüm 2: Yarn Kullanın

Yarn genellikle daha az izin sorunu yaşar:

\`\`\`bash
# 1. Yarn'ı kurun (eğer yoksa)
npm install -g yarn

# 2. Projeyi yarn ile kurun
yarn install
\`\`\`

## ✅ Çözüm 3: pnpm Kullanın

pnpm daha verimli ve daha az izin sorunu yaşar:

\`\`\`bash
# 1. pnpm'ı kurun (eğer yoksa)
npm install -g pnpm

# 2. Projeyi pnpm ile kurun
pnpm install
\`\`\`

## ✅ Çözüm 4: Minimal Kurulum (Sadece Çalıştırmak İçin)

Eğer sadece projeyi çalıştırmak istiyorsanız, minimum paketlerle başlayın:

\`\`\`bash
# Temel paketler
npm install next react react-dom typescript --legacy-peer-deps

# Styling
npm install tailwindcss postcss autoprefixer --legacy-peer-deps

# UI
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge --legacy-peer-deps

# Form
npm install react-hook-form @hookform/resolvers zod --legacy-peer-deps

# Radix UI (temel)
npm install @radix-ui/react-slot @radix-ui/react-dialog --legacy-peer-deps
\`\`\`

## ✅ Çözüm 5: package.json Script Kullanın

package.json'a eklediğim yeni script'leri kullanın:

\`\`\`bash
# Güvenli kurulum
npm run install:safe

# Minimal kurulum
npm run install:minimal
\`\`\`

## 🔧 Takılan İşlemi Durdurma

Eğer npm install takılı kaldıysa:

1. **Ctrl+C** ile terminal'de durdurun
2. Veya PowerShell'de:
\`\`\`powershell
taskkill /F /IM node.exe
\`\`\`

## 📝 Notlar

- `--legacy-peer-deps` flag'i React 19 uyumluluk sorunları için gerekli
- `--no-optional` flag'i opsiyonel paketleri atlar (daha hızlı)
- Antivirus yazılımı bazen dosya erişimini engelleyebilir - geçici olarak kapatmayı deneyin

## 🚀 Kurulum Sonrası

Kurulum tamamlandıktan sonra:

\`\`\`bash
npm run dev
\`\`\`

Tarayıcıda: http://localhost:3000

## 💡 En İyi Çözüm

**Yarn** veya **pnpm** kullanmanızı öneririm. Bu paket yöneticileri genellikle Windows'ta daha az sorun yaşar.

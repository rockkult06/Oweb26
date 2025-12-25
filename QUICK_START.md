# OW Web - Hızlı Başlangıç (Admin Yetkisi Olmadan)

## Sorun
npm install işlemi Windows'ta admin yetkisi gerektirebilir veya dosya kilitleme sorunları yaşayabilir.

## Çözüm 1: Yarn Kullanın (Önerilen)

Yarn genellikle daha az izin sorunu yaşar:

\`\`\`bash
# Yarn'ı global olarak kurun (eğer yoksa)
npm install -g yarn --legacy-peer-deps

# Projeyi yarn ile kurun
yarn install
\`\`\`

## Çözüm 2: pnpm Kullanın

pnpm daha verimli ve daha az izin sorunu yaşar:

\`\`\`bash
# pnpm'ı global olarak kurun (eğer yoksa)
npm install -g pnpm --legacy-peer-deps

# Projeyi pnpm ile kurun
pnpm install
\`\`\`

## Çözüm 3: npm ile Alternatif Yöntemler

### Yöntem A: Tek seferde tüm paketleri kur
\`\`\`bash
npm install --legacy-peer-deps --no-optional --prefer-offline
\`\`\`

### Yöntem B: Paketleri gruplar halinde kur
\`\`\`bash
# Önce temel paketler
npm install next@latest react@latest react-dom@latest typescript@latest --legacy-peer-deps

# Sonra UI paketleri
npm install tailwindcss@latest postcss@latest autoprefixer@latest --legacy-peer-deps

# Sonra diğer paketler
npm install --legacy-peer-deps
\`\`\`

## Çözüm 4: Manuel Kurulum (Son Çare)

Eğer hiçbiri çalışmazsa, en kritik paketleri manuel kurun:

\`\`\`bash
# Sadece çalıştırmak için minimum paketler
npm install next react react-dom --legacy-peer-deps
npm install tailwindcss postcss autoprefixer --legacy-peer-deps
npm install framer-motion lucide-react --legacy-peer-deps
npm install class-variance-authority clsx tailwind-merge --legacy-peer-deps
\`\`\`

## Çözüm 5: WSL (Windows Subsystem for Linux) Kullanın

WSL içinde npm install genellikle sorunsuz çalışır:

\`\`\`bash
# WSL'de
cd /mnt/d/OW/Cursor_web
npm install --legacy-peer-deps
\`\`\`

## Hızlı Test

Kurulum sonrası test etmek için:

\`\`\`bash
# Type check (opsiyonel)
npm run type-check

# Dev server başlat
npm run dev
\`\`\`

Tarayıcıda: http://localhost:3000

## Notlar

- `--legacy-peer-deps` flag'i React 19 uyumluluk sorunları için gerekli
- Eğer hala sorun yaşıyorsanız, node_modules klasörünü silip tekrar deneyin
- Antivirus yazılımı bazen dosya erişimini engelleyebilir

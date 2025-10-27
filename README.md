# Frontend Öğrenme Projesi

## Kurs Sıralaması

1. **TypeScript Kursu**: https://www.youtube.com/watch?v=VGu1vDAWNTg&list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN&index=1

2. **Next.js Kursu**: https://nextjs.org/learn
   - Sırasıyla: React Foundations → Learn Next.js (App Router)
   - Pages Router kullanılmayacak

3. **Blog Projesi**: https://www.youtube.com/watch?v=-foo92lFIto&list=PL4cUxeGkcC9hAJ-ARcYq_z6lDZV7kT1xD&index=1 (MongoDB'yi kendi bilgisayarına kurabilirsin. Cloud kısmına uğraşma) 

Bu blog projesinde javascript kullanılıyor ve nodejs içerisinde template engine ile arayüz yazılıyor senden bunu istemiyorum. Aşağıda tarif ettiğim şekilde arayüzü Next.js app router kullanarak ayırmanı beklemekteyim. Backend ise nodejs kullanılacak. Bu blog projesinden expressjs ile database ile haberleşmeyi, api geliştirmeyi öğrenmeni bekliyorum. Api testing için postman kullanmanı istiyorum. Projendeki backend'in api dökümantasyonunu Readme.md dosyasına yazmanı bekliyorum. 

## Proje Yapısı

```
project-root/
├── frontend/     # Next.js + TailwindCSS
├── backend/      # Node.js + Express
└── shared/       # Types, constants
    ├── types/
    ├── constants/
    └── utils/ (gerek varsa)
    └──....
```

## Öğrenilmesi Gereken Kavramlar

- **Type Safety**: Shared klasöründeki type'lar frontend ve backend arasında paylaşılmalı
- **SSR vs CSR**: Ne zaman hangisi kullanılır, performans farkları
- **React Hooks**: Kullandığın her hook'u açıklayabilmelisin (useState, useEffect, useContext vb.)
- **Atomic Design**: Bu kavramı araştırıp kullanmanı bekliyorum.

## Yapay Zeka Kullanım Kuralları

### ✅ İzin Verilenler
- Syntax hatalarını düzeltmek
- Bir konsepti farklı açılardan öğrenmek
- Alternatif yaklaşımları araştırmak
- Boilerplate kod (ama anlamalısın)

### ❌ İzin Verilmeyenler
- Tüm feature'ı bodoslama yapay zekaya yaptırmak
- Anlamadan copy-paste yapmak
- Her hatayı yapay zekaya çözdürmek

### 📋 Zorunlu Süreç (Her Feature İçin)

1. **Araştırma**: Best practice nedir? Alternatifler neler?
2. **Plan**: Kağıt üzerinde veya whiteboard'da (excalidraw) planlayabilirsin (örneğin arayüzü çizmek, state yapısını belirlemek, butona tıklayınca olacak logic vs)
3. **Uygulama**: Yapay zeka yardımıyla yaz
4. **Anla**: Her satırı açıklayabilmeli, alternatiflerini bilmelisin
5. **Dokümante Et**: Neden böyle yaptın, ne öğrendin?

## Öğrenme Kontrol Listesi

### Her Feature Sonrası
- [ ] Yazdığın kodu açıklayabiliyor musun?
- [ ] Type'lar doğru mu? `any` kullandın mı?
- [ ] SSR/CSR kararını neden verdin?
- [ ] Hangi hook'ları kullandın ve neden?
- [ ] Component'lerin Atomic Design'a uygun mu?

## Git Workflow

- Her feature için ayrı branch (feature/feature-ismi gibi mesela. Bunları vs code üstünden yapabiliyorsun)
- Anlamlı commit mesajları (Conventional Commits)
- Kendi kodunu review et, sonra merge et

## Kod Kalitesi Kuralları

- TypeScript strict mode **asla** kapatılmayacak
- ESLint + Prettier kullanılacak
- Magic number yok, constant kullan
- Her component için type/interface olmalı

## Proje Sonu

**Presentation Hazırla**:
- Mimariyi açıkla
- En çok zorlandığın kısımları paylaş

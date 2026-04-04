# Think Beyond — Dokument Architektury Informacji i UX
**Wersja:** 3.0 | **Data:** Kwiecień 2026 | **Autor:** Główny Architekt IA/UX

---

## 1. WIZJA I STRATEGIA PRODUKTU

### 1.1 Problem (The Core Pain)
Uczelnie wyższe w Wielkiej Brytanii operują w środowisku rosnącej konkurencji o studentów (demografia), przy jednoczesnym obciążeniu przestarzałymi, silosowanymi systemami operacyjnymi. Wydziały działają w izolacji: rekrutacja nie "widzi" danych z akademickiego supportu, marketing nie zna historii absolwenta, a dział badań nie jest połączony z siecią partnerów korporacyjnych.

### 1.2 Misja (The Transformational Promise)
**Think Beyond** nie jest narzędziem IT — jest **doradcą strategicznym** dla instytucji edukacyjnych. Produkt oferuje Salesforce Education Cloud jako "mózg" unifikujący cały cykl życia studenta: od pierwszego kontaktu (rekrutacja), przez edukację (sukces), marketing, aż po alumni i partnerstwa enterprise.

### 1.3 Persony i Sytuacje Użytkowe (C-Level Decision Makers)
| Persona | Rola | Kluczowy "Job to be Done" | Największy Lęk |
|---|---|---|---|
| **Vice-Chancellor** | Decydent strategiczny | "Chcę wiedzieć, czy to przełoży się na wzrost przychodów uczelni" | "Kupimy kolejny system, który będzie stać" |
| **Pro-Vice-Chancellor (Education)** | Decydent operacyjny | "Jak to poprawi wskaźnik retencji naszych studentów?" | "To znowu skomplikuje pracę kadry akademickiej" |
| **Director of Marketing** | Decydent taktyczny | "Czy w końcu będę mógł mierzyć ROI kampanii?" | "Będę zależny od IT przy każdej zmianie" |

---

## 2. ARCHITEKTURA INFORMACJI (IA)

### 2.1 Mapa Witryny (Sitemap)

```
/ (Platform Hub — Index)
    └─ Strona Główna (HomePage)
        ├─ HeroSection
        ├─ SocialProofBar
        ├─ ProblemSection
        ├─ SolutionSection
        ├─ CalculatorSection (ROI Diagnostic Tool)
        ├─ SecurityTrustSection
        ├─ CaseStudySection → [CaseStudyCarousel modal]
        ├─ CTAFormSection / ConsultationHub
        └─ OfferBridgeSection (Hub → 5 filarów)

/enrolment (Filar 1: Rekrutacja i Zapisy)
    └─ EnrolmentPage
        ├─ EnrolmentHeroSection
        ├─ EnrolmentProblemSection
        ├─ EnrolmentSolutionSection
        ├─ EnrolmentCaseStudySection → [CaseStudyCarousel modal]
        └─ ConsultationHub

/flourishing (Filar 2: Sukces i Retencja Studenta)
    └─ FlourishingPage
        ├─ FlourishingHeroSection
        ├─ FlourishingProblemSection
        ├─ FlourishingSolutionSection
        ├─ FlourishingCaseStudySection → [CaseStudyCarousel modal]
        └─ ConsultationHub

/engagement (Filar 3: Marketing i Zaangażowanie)
    └─ EngagementPage
        ├─ [EngagementHeroSection]
        ├─ [EngagementProblemSection]
        ├─ [EngagementSolutionSection]
        ├─ [EngagementCaseStudySection] → [CaseStudyCarousel modal]
        └─ ConsultationHub

/advancement (Filar 4: Absolwenci i Fundraising)
    └─ AdvancementPage
        ├─ [AdvancementHeroSection]
        ├─ [AdvancementProblemSection]
        ├─ [AdvancementSolutionSection]
        ├─ [AdvancementCaseStudySection] → [CaseStudyCarousel modal]
        └─ ConsultationHub

/enterprise (Filar 5: Partnerstwa i Badania)
    └─ EnterprisePage
        ├─ [EnterpriseHeroSection]
        ├─ [EnterpriseProblemSection]
        ├─ [EnterpriseSolutionSection]
        └─ ConsultationHub

/style-guide (Living Design System — Wewnętrzny)
    └─ StyleGuide (Dashboard z nawigacją boczną)
        ├─ Podstawy (Kolory, Typografia, Ikony)
        ├─ Komponenty (Przyciski, Formularze)
        └─ Wzorce UX (Karty, Video Facade, Case Study Modal)
```

### 2.2 Hierarchia Filarów (The 6-Pillar Model)
Projekt ewoluował z pierwotnego modelu 4 filarów do **6-filarowego ekosystemu**:

| # | Filar | URL | Opis Wartości |
|---|---|---|---|
| 0 | **Platform Hub** | `/` | Holistyczna platforma — "mapa skarbu" prowadząca do filarów |
| 1 | **Enrolment Architecture** | `/enrolment` | Eliminacja barier rekrutacyjnych, zapis frictionless |
| 2 | **Academic Flourishing** | `/flourishing` | Proaktywna retencja, wellbeing, early alert systems |
| 3 | **Brand Engagement** | `/engagement` | Omnichannel marketing, storytelling driven by data |
| 4 | **Philanthropic Advancement** | `/advancement` | Alumni, fundraising, lifelong institutional relationships |
| 5 | **Enterprise & Research** | `/enterprise` | Partnerstwa korporacyjne, dywersyfikacja przychodów |

### 2.3 Dane i Warstwa Treści (Data Layer)
```
src/app/data/
├─ navigationContent.ts   → Treści nawigacji i tooltipów (centralne)
└─ calculatorContent.tsx  → Pytania i logika kalkulatora ROI
```
> **Zasada IA:** Wszystkie teksty dostępne w interfejsie MUSZĄ być zarządzane z tych centralnych plików danych. Nie wolno "zabetonowywać" treści bezpośrednio w komponentach `.tsx`.

---

## 3. PRZEPŁYW UX (USER FLOWS)

### 3.1 Główny Przepływ Konwersji (Primary Conversion Flow)
```
Strona Główna (Hub)
    ↓
[Hero] Mocny nagłówek transformacyjny
    ↓
[SocialProofBar] Zaufanie instytucjonalne (certyfikaty, partnerzy)
    ↓
[ProblemSection] Diagnoza bólu użytkownika (pain amplification)
    ↓
[SolutionSection] Prezentacja rozwiązania (aha! moment)
    ↓
[CalculatorSection] Kalkulator ROI ← KLUCZOWY PUNKT DECYZYJNY
    ↓
[CaseStudySection] Dowód społeczny (Case Study SWPS + modal)
    ↓
[ConsultationHub] Wezwanie do akcji + formularz ← KONWERSJA
```

### 3.2 Przepływ Filarowy (Pillar Deep-Dive Flow)
```
[OfferBridgeSection] na Stronie Głównej
    ↓
Klik w kafelek (np. "Enrolment Architecture")
    ↓
[EnrolmentHeroSection] Kontekstowy nagłówek dla persona
    ↓
[EnrolmentProblemSection] Problem specyficzny dla rekrutacji
    ↓
[EnrolmentSolutionSection] Rozwiązanie + funkcje platformy
    ↓
[EnrolmentCaseStudySection] → Modal z Case Study SWPS
    ↓
[ConsultationHub] ← KONWERSJA na poziomie filaru
```

### 3.3 Przepływ Modale (Modal/Overlay Flows)
```
[CaseStudySection] → Klik "Read Case Study"
    ↓
[CaseStudyCarousel] Modal pełnoekranowy
    ├─ Treść Case Study (Context + Pain + Solution + Testimonial)
    ├─ [ExpertFooterAccordion] Wizytówka Marcina + kontakt
    └─ Rozwinięcie formularza (Accordion Inline) bez opuszczania modala
```

```
[Header] → Klik "Strategic Consultation" (CTA Button)
    ↓
[ConsultationModal] Modal z pełnym zestawem formularza
```

---

## 4. WZORCE UX (DESIGN PATTERNS)

### 4.1 "The Master Lead Gen Pattern" (Złoty Standard)
Jeden, obowiązujący układ generowania leadów stosowany wszędzie:
```
[LEWA KOLUMNA — Autorytet]          [PRAWA KOLUMNA — Akcja]
┌──────────────────────────┐        ┌──────────────────────────┐
│ 20+ Experts (Salesforce) │        │ Let's talk about...      │
│ [Avatar Stack]           │        │                          │
│ Marcin Pieńkowski        │        │ Full Name:  [_________] │
│ "Let's start with        │        │ Institution:[_________] │
│  strategy..."            │        │ Email:      [_________] │
│                          │        │ [x] GDPR Consent        │
│ Prefer Direct Contact?   │        │                          │
│ 📧 marcin@thinkbeyond... │        │ [Speak with Our Team]   │
│ 📞 +48 502 227 174       │        │ 🔒 100% secure          │
└──────────────────────────┘        └──────────────────────────┘
```
**Responsywność:** Desktop → 2 kolumny. Mobile → Stack (Autorytet nad Formularzem).
**Komponenty:** `ConsultationHub.tsx`, `ExpertFooterAccordion.tsx`

### 4.2 "Video Facade Pattern" (Okładka Wideo Premium)
```
[Karta/Sekcja]
    ↓ Klik "Hear Expert Insight"
[GlassPlayButton.tsx] — okładka na zdjęciu eksperta (glassmorphism)
    ↓ Klik w Play
[Zastąpienie iframe YouTube z ?autoplay=1]
    ↓ Wyświetlony w <dialog> modalnym
```

### 4.3 "Progressive Disclosure w Modalu" (Akordeon Case Study)
```
[CaseStudyCarousel — treść]
    ↓ Scrollowanie
[ExpertFooterAccordion]
    ├─ Wizytówka eksperta
    ├─ Ikony kontaktu (tel, mail, WhatsApp)
    └─ [Zapytaj o podobne wdrożenie] → Akordeon
        ↓ Klik
    [Formularz rozsuwa się w dół WEWNĄTRZ modala]
    [scrollIntoView({ behavior: 'smooth' })]
```

### 4.4 "Premium Navigation Tooltip" (Premium Nawigacja)
```
[Header Nav Link] → Najechanie kursorem
    ↓ fade-in 200ms
[Tooltip Glassmorphism]
    ├─ Label: "Salesforce Education Cloud"
    ├─ Title: "Enrolment Architecture"
    └─ Body: krótki opis z navigationContent.ts
```

---

## 5. KOMPONENTY SYSTEMU (Component Inventory)

### 5.1 Makro-Komponenty (Strony i Sekcje)
| Komponent | Plik | Status | Uwagi |
|---|---|---|---|
| HomePage | `App.tsx` | ✅ Aktywny | OfferBridge na końcu — do przestawienia wyżej |
| Header | `Header.tsx` | ✅ Aktywny | Premium Tooltips obecne |
| HeroSection | `HeroSection.tsx` | ✅ Aktywny | |
| SocialProofBar | `SocialProofBar.tsx` | ⚠️ Dług | 18KB — wymaga refaktoryzacji SVG |
| ProblemSection | `ProblemSection.tsx` | ⚠️ Dług | 12KB — wymaga refaktoryzacji |
| SolutionSection | `SolutionSection.tsx` | ✅ Aktywny | |
| CalculatorSection | `CalculatorSection.tsx` | 🔄 W trakcie | Multi-step flow w implementacji |
| SecurityTrustSection | `SecurityTrustSection.tsx` | ⚠️ Dług | 16KB — wymaga refaktoryzacji |
| CaseStudySection | `CaseStudySection.tsx` | ✅ Aktywny | Deleguje do CaseStudyCarousel |
| CTAFormSection | `CTAFormSection.tsx` | 🟡 Przestarzały | Do zastąpienia przez ConsultationHub |
| ConsultationHub | `ConsultationHub.tsx` | ✅ Złoty Standard | Master Lead Gen Pattern |
| OfferBridgeSection | `OfferBridgeSection.tsx` | ✅ Aktywny | Gateway to pillars |
| Footer | `Footer.tsx` | ✅ Aktywny | |

### 5.2 Micro-Komponenty UI (Reużywalne)
| Komponent | Plik | Przeznaczenie |
|---|---|---|
| CaseStudyCarousel | `ui/CaseStudyCarousel.tsx` | Modal z Case Study SWPS + Akordeon |
| ExpertFooterAccordion | `ui/ExpertFooterAccordion.tsx` | Wizytówka eksperta + rozwijany formularz |
| GlassPlayButton | `ui/GlassPlayButton.tsx` | Glassmorphism Play Button dla wideo |
| Button | `ui/button.tsx` | Bazowy przycisk (Primary/Ghost/Outline) |
| Input | `ui/input.tsx` | Pole formularza z stanami |
| Icons | `ui/Icons.tsx` | Centralna biblioteka ikon |

### 5.3 Strony Filarów (Pillar Pages)
| Filar | Folder | Sekcje | Status |
|---|---|---|---|
| Enrolment | `enrolment/` | Hero, Problem, Solution, CaseStudy | ✅ Kompletny |
| Flourishing | `flourishing/` | Hero, Problem, Solution, CaseStudy | ✅ Kompletny |
| Engagement | `engagement/` | Hero, Problem, Solution, CaseStudy | 🔄 W trakcie |
| Advancement | `advancement/` | Hero, Problem, Solution, CaseStudy | 🔄 W trakcie |
| Enterprise | `enterprise/` | Hero, Problem, Solution | ✅ Kompletny |

---

## 6. SYSTEM NAWIGACJI (Navigation IA)

### 6.1 Struktura Menu (Flat Hierarchy)
```
[Logo Think Beyond]  [Ecosystem] [Enrolment] [Flourishing] 
[Engagement] [Advancement] [Enterprise]  [Strategic Consultation →]
```
**Zasada:** Płaska hierarchia (1 poziom) dla C-Level. Brak podmenu. Każdy link ma Tooltip (opisany w sekcji 4.4).

### 6.2 CTA w Nawigacji
Przycisk "Strategic Consultation" w prawym rogu:
- Otwiera `ConsultationModal.tsx`
- Jest zawsze widoczny (sticky header)
- Ma odmienny styl (Primary CTA — dark background)

---

## 7. WARSTWA DANYCH (Data Architecture)

### 7.1 navigationContent.ts
Centralne zarządzanie treściami nawigacji i tooltipów. Struktura: `NAVIGATION_CONTENT` (obiekt 6 filarów) + `NAV_LINKS` (tablica dla renderowania).

### 7.2 calculatorContent.tsx
Treści i logika kalkulatora ROI podzielona na **6 konfiguracji** (klucz: ścieżka URL):
- `default` — Platform Hub (homepage)
- `/enrolment` — Rekrutacja i Zapisy
- `/flourishing` — Sukces i Retencja Studenta
- `/engagement` — Marketing i Zaangażowanie
- `/advancement` — Absolwenci i Fundraising
- `/enterprise` — Partnerstwa i Badania

> **Dług w danych:** Pola `expertHint` i `impactMultiplier` wymagają uzupełnienia prawdziwymi benchmarkami.

---

## 8. DŁUG TECHNICZNY I PRIORYTETY (Backlog)

### 🔴 Krytyczne (Bloker konwersji)
1. **`OfferBridgeSection` za nisko** w kolejności renderowania w `App.tsx` — użytkownik musi scrollować przez kalkulator i bezpieczeństwo, zanim zobaczy menu filarów.
2. **`CTAFormSection` nadal istnieje** równolegle z `ConsultationHub` — powoduje duplikację logiki i niespójność wizualną.

### 🟡 Ważne (Dług UX)
3. Brak `expertHint` w `calculatorContent.tsx` — kalkulator nie buduje jeszcze zaufania przez porady eksperta.
4. `SocialProofBar` (18KB) i `SecurityTrustSection` (16KB) — gigantyczne pliki z zabetonowanymi SVG.
5. Router `HashRouter` — `#` w URL psuje wrażenie Premium marki.

### 🟢 Ulepszeń (Nice to have)
6. Mobile Sidebar Menu — dodać miniaturę wizytówki Marcina na dole.
7. Kalkulator ROI — ekran wynikowy z wizualizacją "Przed vs Po".
8. Formularz powodzenia — `Success State` z komunikatem "Marcin will reach out within 2 hours".

---

## 9. ZASADY PROJEKTOWE (Design Principles)

1. **H2H (Human to Human):** Decydenci nie kupują systemów — kupują zaufanie do ludzi. Twarz Marcina musi być obecna przy każdym punkcie konwersji.
2. **Prawo Hicka (Cognitive Load):** Jeden Primary CTA na ekran. Nie zmuszaj do wyboru.
3. **Progressive Disclosure:** Złożone treści (formularze, Case Studies) ujawniaj dopiero gdy użytkownik jest gotowy — poprzez inline expansion, nigdy modal w modalu.
4. **Transformational Discourse:** Żadnego "Kup teraz". Zamiast tego: "Let's build your institutional foundation."
5. **Single Source of Truth:** Dane w `/data/`, komponenty w `/ui/`, strony w `/components/`.

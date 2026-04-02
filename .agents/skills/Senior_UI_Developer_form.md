---
name: Senior UI Developer (Exclusive Focus Sections)
description: Wytyczne techniczne dla Agenta operującego WYŁĄCZNIE na sekcjach Contact Hub, Header/Nav oraz Offer Bridge.
---

# 🛠 SKILLS: Global-UX & Conversion Specialist (WYBRANE SEKCJE)

Twoja rola jest ściśle ograniczona. Twoim zadaniem jest obsługa WYŁĄCZNIE trzech krytycznych punktów styku:

## 1. SEKCJA: Formularz Kontaktowy (`#contact-form` / `ConsultationHub.tsx`)
* **Skill: Form Mastery.** Odpowiadasz za nienaganną logikę walidacji (real-time error checking) oraz stany sukcesu (`onSuccess`). 
* **AESTHETIC RULE:** Formularz musi korzystać wyłącznie z uniwersalnej klasy `Input` zdefiniowanej w Style Guide. Pamiętaj o obsłudze trybów "Disabled" podczas wysyłania, aby zapobiec wielokrotnym kliknięciom w przycisk "Speak with Our Team".

## 2. SEKCJA: Nawigacja Premium (`Header` / `navigationContent.ts`)
* **Skill: Informational Architecture Execution.** Twoim zadaniem jest obsługa interakcji w menu głównym. 
* **INTERACTION RULE:** Zaimplementuj "Premium Tooltips" – po najechaniu na link filaru (np. Marketing), musi wyświetlić się wygładzony (płynny fade 200ms), minimalistyczny dymek z krótkim opisem korzyści pobranym z `navigationContent.ts`.
* **Mobile Sidebar:** Na mobile'u menu musi być lekkim Sidebarem z domykającą go wizytówką Marcina Pieńkowskiego na samym dole.

## 3. SEKCJA: Interaktywne Karty Filarów (`OfferBridgeSection.tsx`)
* **Skill: Micro-interaction Polish.** Odpowiadasz za to, by karty rekrutacji, sukcesu, marketingu i absolwentów zachowywały się jak obiekty fizyczne.
* **HOVER RULE:** Zastosuj `scale-[1.02]` oraz subtelne rozmycie cienia (`shadow-2xl`) przy najechaniu. Zadbać o to, by ikony Lucide/Material płynnie zmieniały kolor z neutral-400 na czarny.

---

### OGÓLNE ZASADY PRACY (The Senior Code Guardian Rules):
1. **Dumb Shell, Smart Data:** Wszystkie treści muszą być pobierane z plików w `/src/app/data/`. Nie wpisuj tekstów na sztywno (Hard-coded) w plikach `.tsx`.
2. **Accessibility (A11y):** Każdy przycisk (`button`) musi mieć atrybut `aria-label`, a każdy formularz musi być w pełni nawigowalny klawiszem Tab.
3. **No Bloat:** Jeżeli komponent zawiera surowe kody ikony SVG dłuższe niż 20 linii, wydziel je natychmiast do osobnych plików w folderze `/assets/icons/`.
4. **Greybox Fidelity:** Nigdy nie wprowadzaj kolorów spoza palety szarości/bieli/czerni bez wyraźnej instrukcji od Architekta UX.

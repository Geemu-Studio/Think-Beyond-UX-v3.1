# Salesforce Education Cloud – Ekosystem UX i IA 🎓☁️

> Zoptymalizowany pod kątem konwersji, wielostronicowy ekosystem landing page'y zaprojektowany dla Think Beyond (Partnera Salesforce), skierowany do decydentów z sektora szkolnictwa wyższego w Wielkiej Brytanii.

## 🎯 Przegląd Projektu
Projekt dostarcza kompleksową Architekturę Informacji (IA) oraz makiety UX (greybox) dla pakietu stron docelowych Salesforce Education Cloud. Jest on rygorystycznie zoptymalizowany pod ruch z Google Ads, a jego celem jest konwertowanie decydentów akademickich wyższego szczebla (rektorów, prorektorów, dyrektorów) poprzez zmianę narracji z agresywnej sprzedaży B2B na "dyskurs transformacyjny".

## 🧠 Strategia UX i Architektura Informacji
Zamiast skupiać się na awariach systemów IT czy podstawowych wskaźnikach oszczędności czasu, architektura odwołuje się do psychologii liderów akademickich.
* **Dyskurs Transformacyjny:** Technologia jest pozycjonowana jako strategiczne narzędzie do realizacji misji instytucji, upełnomocnienia studentów i budowania relacji na całe życie.
* **Modułowy Design Scroll-tellingowy:** Każda strona prowadzi użytkownika przez spójną narrację: od wizjonerskiej sekcji Hero, przez przeformułowane bolączki (Wyzwania), aż po Dowód Społeczny i Kalkulator Wpływu (ROI).

## 🏗️ Struktura Ekosystemu
Aby precyzyjnie dopasować się do zróżnicowanych intencji wyszukiwania w Google Ads, architektura została podzielona na Master Hub i cztery dedykowane filary:
1. `index.html` **(Platform Hub):** Nadrzędny parasol skierowany do kadry zarządzającej (C-level) poszukującej holistycznej cyfrowej transformacji w szczycie sezonu rekrutacyjnego.
2. `recruitment.html` **(Rekrutacja i Procesy Przyjęć):** Skupia się na pozyskiwaniu globalnych talentów i bezproblemowych ścieżkach aplikacji.
3. `student-success.html` **(Sukces Studenta i Retencja):** Odpowiada na kryzys rezygnacji ze studiów, przenosząc narrację na proaktywną opiekę i systemy wczesnego ostrzegania.
4. `marketing.html` **(Marketing i Komunikacja):** Pokazuje, jak przełamać silosy danych w celu wielokanałowego, spersonalizowanego angażowania studentów.
5. `alumni.html` **(Absolwenci i Edukacja przez całe życie):** Skierowany do zespołów ds. rozwoju, koncentrujących się na wzroście filantropijnym i edukacji menedżerskiej.

## ⚙️ Kluczowe Funkcje Techniczne i UX
* **Dynamiczna Matryca Nawigacji Krzyżowej:** Solidna pętla retencji na dole każdej strony, która dynamicznie wyświetla *pozostałe* trzy filary ekosystemu, zapobiegając opuszczeniom strony i eliminując redundantne przyciski CTA.
* **Bezproblemowe Generowanie Leadów:** Globalny przycisk "Book a Free Consultation" w nawigacji wywołuje kontekstowy modal (pop-up), zamiast wymuszać przeładowanie strony.
* **Kontekstowe Mikro-Teksty:** Nagłówki formularzy dostosowują się dynamicznie na podstawie bieżącej strony (np. witając użytkowników komunikatem "Twój dedykowany zespół ds. sukcesu studenta" na stronie o retencji).
* **Natywne Autouzupełnianie (Datalist):** Pole wprowadzania instytucji wykorzystuje lekką, natywną listę HTML `<datalist>` wstępnie wypełnioną brytyjskimi uniwersytetami (Russell Group, Open University itp.), aby zmniejszyć tarcie i utrzymać higienę danych w systemie CRM.

## 🛠️ Stos Technologiczny
* **HTML5:** Struktura semantyczna i natywna dostępność (np. `<datalist>`, `<dialog>` dla modali).
* **CSS3:** Stylizacja makiet o niskiej wierności (greybox) w celu priorytetyzacji obciążenia poznawczego i IA nad projektem wizualnym.
* **Zasady UX/UI:** Prawo Hicka, Teoria Obciążenia Poznawczego, Optymalizacja Współczynnika Konwersji (CRO).

---
*Zaprojektowane strategicznie z myślą o płynnym wdrożeniu interfejsu High-Fidelity UI.*

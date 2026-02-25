# GastroBookingSystem

## Descrizione
Componente riutilizzabile per gestione prenotazioni e menu per attività food.

## Caratteristiche
- Form prenotazione dinamico
- Gestione menu con filtri dietetici
- Responsive design
- Integrazione API
- Supporto multilingua

## Installazione
```bash
npm install gastro-booking-system
```

## Utilizzo Base
```javascript
import GastroBookingSystem from './GastroBookingSystem';

const gelateria = new GastroBookingSystem({
  businessName: 'Dolce Vita',
  menuCategories: ['Gelati', 'Torte', 'Catering']
});
```

## Configurazioni
- `businessName`: Nome attività
- `menuCategories`: Categorie menu
- `availableServices`: Servizi offerti
- `dietaryOptions`: Filtri dietetici

## Requisiti
- Node.js 14+
- React/Vue recommended

## Licenza
MIT
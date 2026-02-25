```javascript
class GastroBookingSystem {
  constructor(config) {
    this.config = {
      businessName: config.businessName || 'Food Business',
      menuCategories: config.menuCategories || ['Main', 'Dessert'],
      availableServices: config.availableServices || ['Pickup', 'Delivery', 'Catering'],
      dietaryOptions: config.dietaryOptions || ['Vegan', 'Gluten Free', 'Lactose Free']
    };
    
    this.menu = [];
    this.bookings = [];
  }

  addMenuItem(item) {
    this.menu.push({
      id: this.menu.length + 1,
      ...item,
      available: true
    });
  }

  createBooking(bookingDetails) {
    const booking = {
      id: this.bookings.length + 1,
      ...bookingDetails,
      status: 'Pending'
    };
    this.bookings.push(booking);
    return booking;
  }

  filterMenuByDiet(dietType) {
    return this.menu.filter(item => 
      item.dietaryOptions.includes(dietType)
    );
  }

  generateBookingForm() {
    // Logica generazione form dinamico
    return `
      <form id="booking-form">
        <select name="service">
          ${this.config.availableServices.map(service => 
            `<option value="${service}">${service}</option>`
          ).join('')}
        </select>
        <!-- Altri campi form -->
      </form>
    `;
  }
}

export default GastroBookingSystem;
```
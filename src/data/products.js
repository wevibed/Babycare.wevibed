import { IMAGES } from "@/lib/site";

// Presentation placeholders until the store's live catalogue and prices are supplied.
export const PRODUCTS = [
  { id: "selfcare-01", name: "Self-Care Essentials", category: "Self-Care", price: null, currency: "USD", availability: "Ask for availability", description: "Everyday self-care essentials. Confirm the current product, size and price with the store.", image_url: IMAGES.skincare, image_url_2: IMAGES.bodycare, is_new_arrival: true, is_in_store: true, featured: true },
  { id: "selfcare-02", name: "Body Care Collection", category: "Body Care", price: null, currency: "USD", availability: "Ask for availability", description: "Body care products for simple everyday routines.", image_url: IMAGES.bodycare, image_url_2: IMAGES.skincare, is_new_arrival: true, is_in_store: true, featured: false },
  { id: "baby-girls-01", name: "Baby Girls Collection", category: "Baby Girls", price: null, currency: "USD", availability: "Ask for availability", description: "Cute everyday clothing options for baby girls. Ask about sizes and current stock.", image_url: IMAGES.baby, image_url_2: IMAGES.essentials, is_new_arrival: true, is_in_store: true, featured: true },
  { id: "baby-boys-01", name: "Baby Boys Collection", category: "Baby Boys", price: null, currency: "USD", availability: "Ask for availability", description: "Comfortable everyday clothing options for baby boys. Ask about sizes and current stock.", image_url: IMAGES.essentials, image_url_2: IMAGES.baby, is_new_arrival: true, is_in_store: true, featured: false },
  { id: "baby-essentials-01", name: "Baby Essentials", category: "Baby Essentials", price: null, currency: "USD", availability: "Ask for availability", description: "Useful everyday essentials for little ones. Confirm current stock with the store.", image_url: IMAGES.essentials, image_url_2: IMAGES.baby, is_new_arrival: false, is_in_store: true, featured: true },
  { id: "baby-essentials-02", name: "Little One's Favourites", category: "Baby Essentials", price: null, currency: "USD", availability: "Ask for availability", description: "A selection of practical and adorable baby favourites.", image_url: IMAGES.baby, image_url_2: IMAGES.essentials, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "selfcare-03", name: "Daily Beauty Care", category: "Self-Care", price: null, currency: "USD", availability: "Ask for availability", description: "Simple products for your everyday self-care routine.", image_url: IMAGES.skincare, image_url_2: IMAGES.bodycare, is_new_arrival: false, is_in_store: true, featured: false },
  { id: "selfcare-04", name: "Pamper Essentials", category: "Self-Care", price: null, currency: "USD", availability: "Ask for availability", description: "A curated edit of self-care and pampering essentials.", image_url: IMAGES.bodycare, image_url_2: IMAGES.skincare, is_new_arrival: false, is_in_store: true, featured: false },
];

export const Product = {
  async filter(query = {}, _sort, limit) {
    let items = PRODUCTS.filter((p) => Object.entries(query).every(([key, value]) => p[key] === value));
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async list(_sort, limit) {
    let items = PRODUCTS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async get(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  },
};

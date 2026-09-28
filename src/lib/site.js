// SELF-CARE + BABY STORE
// Business contact/location details intentionally left editable until confirmed with the owner.

export const SITE = {
  brand: "SELF-CARE + BABY STORE",
  descriptor: "SELF-CARE · BABY CLOTHING · ESSENTIALS",
  tagline: "Everyday Essentials For You & Your Little One",
  subtagline:
    "Self-care essentials and adorable everyday clothing for your little one.",

  addressLine1: "Contact the store for details",
  addressLine2: "Harare, Zimbabwe",

  hours: "Message the store for current hours",
  status: "Self-Care · Baby Clothing · Baby Essentials",

  whatsapp: "",
  phoneDisplay: "Add WhatsApp / phone number",

  instagram: "#",
  facebook: "#",
  mapsUrl: "#",
};

export const IMAGES = {
  hero: "/images/selfcare-baby-hero.png",
  edit: "/images/selfcare-featured.jpg",
  skincare: "/images/selfcare-category.jpg",
  baby: "/images/baby-category.jpg",
  essentials: "/images/baby-featured.jpg",
  bodycare: "/images/selfcare-featured.jpg",
  social1: "/images/selfcare-category.jpg",
  social2: "/images/baby-category.jpg",
  social3: "/images/selfcare-featured.jpg",
  social4: "/images/baby-featured.jpg",
  social5: "/images/selfcare-baby-hero.png",
};

export const CATEGORIES = [
  { name: "Self-Care", image: IMAGES.skincare },
  { name: "Baby Girls", image: IMAGES.baby },
  { name: "Baby Boys", image: IMAGES.essentials },
  { name: "Baby Essentials", image: IMAGES.baby },
  { name: "Body Care", image: IMAGES.bodycare },
];

export function whatsappLink(message) {
  if (!SITE.whatsapp) return "#contact";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product) {
  return whatsappLink(
    `Hi! I'm interested in ${product.name}. Is it available and what is the current price?`
  );
}

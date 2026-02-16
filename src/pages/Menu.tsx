import { Layout } from "@/components/layout/Layout";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Sevva's Tawa Special",
    items: [
      { name: "Tawa Chicken", price: "PKR 950" },
      { name: "Champ Qeema (4 champs)", price: "PKR 3,299" },
      { name: "Taka Tak", price: "PKR 1,999" },
      { name: "Shehzadi Raan Qeema", price: "PKR 2,495" },
      { name: "Sevvas Brain Masala", price: "PKR 1,599" },
    ],
  },
  {
    title: "Boneless Handi Section",
    items: [
      { name: "Nawabi Butter Handi", price: "PKR 2,100" },
      { name: "Mughlai Handi", price: "PKR 2,500" },
      { name: "Chicken Jalfrezi Handi", price: "PKR 2,100" },
      { name: "Achari Handi", price: "PKR 2,100" },
    ],
  },
  {
    title: "Karahi Section",
    items: [
      { name: "Half Karahi", price: "PKR 1,300" },
      { name: "Full Karahi", price: "PKR 2,500" },
    ],
  },
  {
    title: "Tandoor",
    items: [
      { name: "Khameeri Roti", price: "PKR 50" },
      { name: "Kalonji Naan", price: "PKR 199" },
      { name: "Garlic Naan", price: "PKR 199" },
      { name: "Roghni Naan", price: "PKR 199" },
      { name: "Choopri Roti", price: "PKR 120" },
      { name: "Chicken Naan", price: "PKR 749" },
      { name: "Beef Qeema Naan", price: "PKR 849" },
      { name: "Mutton Qeema Naan", price: "PKR 1,200" },
    ],
  },
  {
    title: "Sevva Mutton Section",
    items: [
      { name: "Desi Chicken Shorba (Quarter)", price: "PKR 1,799" },
      { name: "Mutton Palak", price: "PKR 1,995" },
      { name: "Mutton Royal Qorma", price: "PKR 2,499" },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Prawns Tempura (6 pcs)", price: "PKR 2,158" },
      { name: "Dynamite Chicken (6 pcs)", price: "PKR 1,149" },
      { name: "Finger Fish (6 pcs)", price: "PKR 1,799" },
    ],
  },
  {
    title: "Rice",
    items: [
      { name: "Mutton Pulao", price: "PKR 1,995" },
    ],
  },
  {
    title: "Sevva's Special BBQ",
    items: [
      { name: "Tikka Boti (12 pcs)", price: "PKR 1,300" },
      { name: "Chicken Seekh Kabab (4 pcs)", price: "PKR 1,250" },
      { name: "Beef Seekh Kabab (4 pcs)", price: "PKR 1,399" },
      { name: "Mutton Kabab (4 pcs)", price: "PKR 1,999" },
      { name: "Malai Boti (12 pcs)", price: "PKR 1,699" },
      { name: "Classic Charcoal Chicken", price: "PKR 599" },
      { name: "Mutton Chops (6 pcs)", price: "PKR 2,999" },
      { name: "Bosphorus Fish Tikka", price: "PKR 2,499" },
    ],
  },
  {
    title: "Signature Platters",
    items: [
      { name: "Platter for 2", price: "PKR 3,358" },
      { name: "Platter for 4", price: "PKR 6,000" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Hot Gulab Jamun (3 pcs)", price: "PKR 350" },
      { name: "Sheherzadi Shahi Kheer", price: "PKR 450" },
      { name: "Gajar Ka Halwa (250g)", price: "PKR 500" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Salad Bar", price: "PKR 950" },
      { name: "Kachumber Salad", price: "PKR 290" },
      { name: "Garden Fresh Salad", price: "PKR 290" },
      { name: "Mint Raita", price: "PKR 220" },
      { name: "Zeera Raita", price: "PKR 220" },
    ],
  },
  {
    title: "Sevva's Signature Dishes",
    items: [
      { name: "Sevvas Mutton Joints (2 joints)", price: "PKR 2,995" },
      { name: "Sevva Kuna Pot", price: "PKR 2,995" },
    ],
  },
];

const Menu = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-3">Our Offerings</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              The Menu
            </h1>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Authentic Pakistani cuisine crafted with premium ingredients and traditional recipes passed down through generations.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuData.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-6 md:p-8 card-hover"
              >
                <h2 className="font-serif text-2xl text-gradient-gold mb-6 pb-4 border-b border-border">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-baseline gap-4"
                    >
                      <div className="flex-1">
                        <span className="text-foreground">{item.name}</span>
                        <span className="block w-full border-b border-dotted border-border/50 mt-1" />
                      </div>
                      <span className="text-primary font-medium whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ramadan Buffet Section */}
          <div className="mt-16 max-w-6xl mx-auto space-y-10">
            {/* Iftar Dinner Buffet */}
            <div className="bg-muted/30 rounded-lg border border-border p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-2">🍽️ Iftar Dinner Buffet</h2>
                <p className="text-primary font-semibold text-lg">PKR 3,495/- Per Head + Tax</p>
                <p className="text-muted-foreground text-sm">Timing: From Maghreb for two hours</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">Starter & Salads</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Drinks:</p>
                    <p className="text-foreground">Rooh Afza, Lemon Water</p>
                    <p className="text-muted-foreground font-medium mt-2">Traditional:</p>
                    <p className="text-foreground">Creamy Khajoor, Papri Chaat, Dahi Bhally, Fruit Chaat</p>
                    <p className="text-muted-foreground font-medium mt-2">Salads:</p>
                    <p className="text-foreground">Apple Cabbage, Fresh Chopped Salad, Noodle Salad</p>
                    <p className="text-muted-foreground font-medium mt-2">Fried/Savory:</p>
                    <p className="text-foreground">Vegetable Pakora, Chicken Samosa, Lahori Aloo Tikky, Chicken Patties, Chicken Veg Samosa, Chicken Cold Sandwich</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">Main Courses</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Main Entry:</p>
                    <p className="text-foreground">Mutton Daigi Qorma, Shehzadi Raan Qeema, Mutton Yakhni Pulao, Mutton Palak Gosht, Mutton Kabab (BBQ), Murgh Madrasi</p>
                    <p className="text-muted-foreground font-medium mt-2">BBQ Section:</p>
                    <p className="text-foreground">Chicken Cheese Boti, Chicken Tandoori Boti, Chicken Tikka Boti, Chicken Gola Kabab, Chicken Reshmi Boti, Chicken Irani Boti</p>
                    <p className="text-muted-foreground font-medium mt-2">PAN-Asian:</p>
                    <p className="text-foreground">Dhaka Chicken, French Fries, Honey Wings, Chicken Manchurian, Chicken Chowmein, Egg Fried Rice, Penny Pasta</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">Platters & Tandoor</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Platters:</p>
                    <p className="text-foreground">Turkish Platter, Arabic Platter</p>
                    <p className="text-muted-foreground font-medium mt-2">Tandoor:</p>
                    <p className="text-foreground">Roghni Naan, Kalwanji Naan, Garlic Naan, Pizza Plain Naan, Hara Spicy Naan</p>
                    <p className="text-muted-foreground font-medium mt-2">Dressings:</p>
                    <p className="text-foreground">Dynamite, Garlic, Mayo, Salsa, Mango Chutni, Aloo Bukhara, Imli, Khubani, Ranch</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suhoor Buffet */}
            <div className="bg-muted/30 rounded-lg border border-border p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-2">🌙 Suhoor (Sehri) Buffet</h2>
                <p className="text-primary font-semibold text-lg">PKR 2,495/- Per Head + Tax</p>
                <p className="text-muted-foreground text-sm">Slot One: 1:00 AM – 2:45 AM &nbsp;|&nbsp; Slot Two: 3:15 AM – End of Suhoor</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">Appetizers & Main Course</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Welcome Drink:</p>
                    <p className="text-foreground">Sweet Lassi</p>
                    <p className="text-muted-foreground font-medium mt-2">Appetizers:</p>
                    <p className="text-foreground">Chicken Cold Sandwich, Chicken Patties, Shami Burger, Dhaka Chicken</p>
                    <p className="text-muted-foreground font-medium mt-2">Main Course:</p>
                    <p className="text-foreground">Mutton Paye, Desi Murg Shorba, Shehzadi Raan Qeema, Chicken Haleem, Chicken Palak, Tarka Daal, Chicken Kabab Masala, Lahori Chanay</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">Live Stations</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Egg Station:</p>
                    <p className="text-foreground">French Toast, Aloo Anda Bhujia, Cheese Omelette, Half Fry</p>
                    <p className="text-muted-foreground font-medium mt-2">Puri Station:</p>
                    <p className="text-foreground">Puri, Pathory, Suji Halwa</p>
                    <p className="text-muted-foreground font-medium mt-2">Naan/Roti:</p>
                    <p className="text-foreground">Roghni, Kalwanji, Garlic, Plain, Khameeri, Hara Spicy, Podina Paratha</p>
                    <p className="text-muted-foreground font-medium mt-2">BBQ/Continental/Rice:</p>
                    <p className="text-foreground">Tandoori Boti, Chicken Tikka, Chicken Gola Kabab, Penny Pasta, Chicken Biryani</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-primary font-serif text-lg border-b border-border pb-2">🍰 Desserts & Beverages</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground font-medium">Sweets:</p>
                    <p className="text-foreground">Shahi Kheer, Gulab Jamun, Shahi Tukra, Basboussa, Burfi, Rasgulla</p>
                    <p className="text-muted-foreground font-medium mt-2">Cakes/Pastries:</p>
                    <p className="text-foreground">Short Pasta, Mousse, Eclairs, Tea Cake, Three Milk Cake</p>
                    <p className="text-muted-foreground font-medium mt-2">Puddings/Jelly:</p>
                    <p className="text-foreground">Custard, Jelly, Pudding, Panna Cotta, Hot Egg Pudding</p>
                    <p className="text-muted-foreground font-medium mt-2">Special:</p>
                    <p className="text-foreground">Chocolate Fountain</p>
                    <p className="text-muted-foreground font-medium mt-2">Hot Beverages:</p>
                    <p className="text-foreground">Green Tea, Karak Tea, Cafe Latte</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-xs text-center">
              * Prices are subject to change. Please confirm when booking. Reservations: 0315 1773177
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;

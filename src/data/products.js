const products = [
  // 👜 Original 10 Products
  {
    id: 1,
    name: "Louis Vuitton Capucines MM Bag",
    category: "handbag",
    price: 5600,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-capucines-mm--M25386_PM1_Worn%20view.png?wid=1300&hei=1300"
  },
  {
    id: 2,
    name: "Louis Vuitton Twist MM Bag",
    category: "handbag",
    price: 4800,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVlmiqdy8dCflL9gdWUD-nkCRSm5mJ77odKjBILGdEI8VcJg1Cxcp4bo17hBF-tPfwI8LZHVl3UA2CumXT9vD6BHWGHxeg0FLZviEONnh1ZCtYszcZfbLMxA"
  },
  {
    id: 3,
    name: "LV Archlight Sneakers",
    category: "shoes",
    price: 1200,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-archlight-sneaker--AE5U6BSL01_PM2_Front%20view.jpg"
  },
  {
    id: 4,
    name: "LV Trainer Sneaker",
    category: "shoes",
    price: 1100,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--BM9U5PMI20_PM2_Front%20view.jpg"
  },
  {
    id: 5,
    name: "Imagination Perfume",
    category: "perfume",
    price: 350,
    image: "https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-imagination--LP0219_PM2_Front%20view.jpg"
  },
  {
    id: 6,
    name: "L’Immensité Perfume",
    category: "perfume",
    price: 300,
    image: "https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-l-immensite--LP0052_PM2_Front%20view.jpg"
  },
  {
    id: 7,
    name: "LV Classic Belt",
    category: "belt",
    price: 700,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-initiales-30mm-reversible-belt--M0322U_PM1_Closeup%20view.jpg"
  },
  {
    id: 8,
    name: "LV Reversible Belt",
    category: "belt",
    price: 750,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-flowergram-30mm-reversible-belt--M8373V_PM2_Front%20view.png?wid=1300&hei=1300"
  },
  {
    id: 9,
    name: "Men's Soft Trunk Bag",
    category: "menbag",
    price: 6200,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-soft-trunk---M44735_PM1_Worn%20view.png?wid=1300&hei=1300"
  },
  {
    id: 10,
    name: "LV Discovery Backpack",
    category: "menbag",
    price: 5300,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-discovery-backpack-pm--M46684_PM1_Worn%20view.jpg"
  },

  // 🕶️ Sunglasses
  {
    id: 11,
    name: "LV Millionaire Sunglasses",
    category: "sunglasses",
    price: 850,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSgXsz0zMYFEYNhylunjZnX5yOimIruSwSw&s"
  },
  {
    id: 12,
    name: "LV 1.1 Evidence Sunglasses",
    category: "sunglasses",
    price: 890,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-evidence-sunglasses--Z1323E_PM2_Front%20view.jpg"
  },

  // ⌚ Watches
  {
    id: 13,
    name: "Tambour Moon GMT Watch",
    category: "watch",
    price: 8600,
    image: "https://cdn.prod.website-files.com/63b937f7cb69a848fab5e097/6516b09e9e5ccc95b30a806f_Lead%20image.png"
  },
  {
    id: 14,
    name: "Tambour Slim Star Blossom",
    category: "watch",
    price: 9700,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMeVvqoY461-ml8Nb0Ewi9IHXV-MPZNiN2Q&s"
  },
  {
    id: 15,
    name: "LV Tambour Street Diver",
    category: "watch",
    price: 7200,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-tambour-street-diver-automatic-44mm-steel--QA121A_PM1_Back%20view.jpg"
  },

  // 🧣 Scarf
  {
    id: 16,
    name: "Monogram Gradient Scarf",
    category: "scarf",
    price: 620,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-gradient-tartan-scarf--M79199_PM1_Worn%20view.jpg"
  },

  // 📿 Bracelets
  {
    id: 17,
    name: "LV Confidential Bracelet",
    category: "bracelet",
    price: 460,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-confidential-bracelet--M8274E_PM2_Front%20view.jpg"
  },
  {
    id: 18,
    name: "LV Monogram Chain Bracelet",
    category: "bracelet",
    price: 610,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--M00308_PM2_Front%20view.jpg?wid=750&hei=870"
  },

  // 📿 Necklaces
  {
    id: 19,
    name: "LV Essential V Necklace",
    category: "necklace",
    price: 510,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-essential-v-necklace---M00857_PM1_Cropped%20worn%20view.jpg"
  },
  {
    id: 20,
    name: "LV Nanogram Necklace",
    category: "necklace",
    price: 590,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nanogram-necklace--M68168_PM2_Front%20view.jpg"
  },

  // 👂 Earrings
  {
    id: 21,
    name: "LV Nanogram Earrings",
    category: "earrings",
    price: 470,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nanogram-earrings--M00397_PM1_Back%20view.jpg"
  },
  {
    id: 22,
    name: "Blooming Earrings",
    category: "earrings",
    price: 520,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-blooming-earrings--M68154_PM2_Front%20view.jpg"
  },

  // 🧢 Hats
  {
    id: 23,
    name: "LV Beanie Hat",
    category: "hat",
    price: 430,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QPXQrtz8AbmYv7ZkW1ZLNI8hYlhcZYngQQ&s"
  },
  {
    id: 24,
    name: "LV Monogram Baseball Cap",
    category: "hat",
    price: 490,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-get-ready-cap--M76529_PM1_Interior%20view.jpg"
  },

  // 👛 Wallets
  {
    id: 25,
    name: "LV Multiple Wallet",
    category: "wallet",
    price: 780,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multiple-wallet--M30859_PM2_Front%20view.jpg"
  },
  {
    id: 26,
    name: "LV Zippy Wallet",
    category: "wallet",
    price: 860,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet--M81234_PM2_Front%20view.jpg"
  },

  // 🧥 Jackets
  {
    id: 27,
    name: "LV Monogram Windbreaker",
    category: "jacket",
    price: 4200,
    image: "https://divineluxuryhub.co.uk/cdn/shop/files/EditedPhotos2-11_5ae3fa4e-ddb8-48d1-a87a-bfa4379841df.jpg?v=1710326773&width=1024"
  },
  {
    id: 28,
    name: "LV Shearling Jacket",
    category: "jacket",
    price: 5800,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGxG3u0CYyZ43pnKzwMu_CQ9zZpMaRVeAqQ&s"
  },

  // 👜 Clutches
  {
    id: 29,
    name: "LV Pochette Accessoires",
    category: "clutch",
    price: 1250,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-pochette-accessoires--M40712_PM2_Front%20view.jpg"
  },
  {
    id: 30,
    name: "LV Coussin PM Clutch",
    category: "clutch",
    price: 3200,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-coussin-pm--M57790_PM2_Front%20view.jpg"
  },

  // 👡 Sandals
  {
    id: 31,
    name: "LV Revival Flat Mules",
    category: "sandal",
    price: 990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleHgKayVJp5KM376Bpoou9HJkNklx3oeOWQ&s"
  },
  {
    id: 32,
    name: "LV Revival Mules",
    category: "sandal",
    price: 1050,
    image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neo-revival-mule--AQVH1EDN20_PM1_Worn%20view.jpg"
  }
];

export default products;

export const PERSON = {
  name: "Harman Sidhu",
  title: "Continuous Improvement Engineer",
  subtitle: "Financial Literacy Project",
  location: "Brampton, ON",
  jobTitle: "Sales Account Representative",
};

export const INCOME = {
  grossSalary: 6250.00,
  grossAnnual: 75000.00,
  deductions: [
    { name: "Federal Income Tax", monthly: -1281.25, annual: -15375.00, note: "20.5% effective federal rate", source: "CRA Rates" },
    { name: "Ontario Provincial Tax", monthly: -571.88, annual: -6862.50, note: "9.15% effective provincial rate", source: "CRA Rates" },
    { name: "CPP (5.95%)", monthly: -371.88, annual: -4462.50, note: "Canada Pension Plan employee contribution", source: "CRA CPP" },
    { name: "EI (1.65%)", monthly: -103.13, annual: -1237.50, note: "Employment Insurance premium 2026", source: "CRA EI" },
  ],
  netTakeHome: 3921.88,
  netAnnual: 47062.50,
};

export const NEEDS = [
  { emoji: "🏠", name: "Rent (my ¼ share)", monthly: 637.50, annual: 7650.00, pct: "16.3%", note: "Townhouse - 75% off listed, split 4 ways w/ housemates", source: "Zolo Listing" },
  { emoji: "💡", name: "Utilities (my ¼ share)", monthly: 18.75, annual: 225.00, pct: "0.5%", note: "75% discounted rate, split 4 ways", source: "Zolo Listing" },
  { emoji: "🚌", name: "Brampton Transit Pass", monthly: 148.50, annual: 1782.00, pct: "3.8%", note: "Monthly adult pass", source: "Brampton Transit" },
  { emoji: "🛒", name: "Groceries", monthly: 350.00, annual: 4200.00, pct: "8.9%", note: "Avg. for single adult in Canada", source: "RemitBee Guide" },
  { emoji: "🏦", name: "Bank Account Fee", monthly: 30.95, annual: 371.40, pct: "0.8%", note: "TD All-Inclusive Banking Plan", source: "TD Bank" },
  { emoji: "📶", name: "Wi-Fi / Internet 2 GB Plan", monthly: 23.75, annual: 285.00, pct: "0.6%", note: "Rogers internet plan", source: "Rogers Plans" },
  { emoji: "🏥", name: "Health Insurance", monthly: 150.00, annual: 1800.00, pct: "3.8%", note: "Supplemental private coverage", source: "PolicyMe" },
  { emoji: "💊", name: "Medicine (Tylenol, inhaler)", monthly: 25.00, annual: 300.00, pct: "0.6%", note: "OTC pain relief + monthly inhaler supply", source: "Shoppers Drug Mart" },
  { emoji: "🪣", name: "Laundry Detergent", monthly: 12.00, annual: 144.00, pct: "0.3%", note: "Tide Pods or equivalent, monthly supply", source: "Walmart Canada" },
  { emoji: "🧻", name: "Toilet Paper (24-pack)", monthly: 10.00, annual: 120.00, pct: "0.3%", note: "Cottonelle or Royale, 1 pack/month", source: "Costco Canada" },
  { emoji: "🗑️", name: "Garbage Bags (box)", monthly: 8.00, annual: 96.00, pct: "0.2%", note: "Glad kitchen/large bags, 1 box/month", source: "Walmart Canada" },
  { emoji: "💡", name: "Light Bulbs & Fixtures", monthly: 5.00, annual: 60.00, pct: "0.1%", note: "LED replacements as needed, monthly avg", source: "Home Depot Canada" },
  { emoji: "🌿", name: "Indoor Plants (care/new)", monthly: 10.00, annual: 120.00, pct: "0.3%", note: "Soil, pots, occasional new plant", source: "IKEA Canada" },
  { emoji: "🔋", name: "Batteries (AA/AAA)", monthly: 6.00, annual: 72.00, pct: "0.2%", note: "Duracell/Energizer, remotes, misc devices", source: "Walmart Canada" },
];

export const NEEDS_SUBTOTAL = { monthly: 1435.45, annual: 17225.40, pct: "36.6%" };

export const HYGIENE = [
  { emoji: "🧼", name: "Body Soap (bar, 8-pack)", monthly: 7.00, annual: 84.00, pct: "0.2%", note: "Dove or Irish Spring, 8 bars/pack lasts 2 mo", source: "Walmart Canada" },
  { emoji: "🦷", name: "Toothpaste (2-pack)", monthly: 9.00, annual: 108.00, pct: "0.2%", note: "Colgate or Sensodyne, 2-pack lasts 2 months", source: "Shoppers Drug Mart" },
  { emoji: "🪥", name: "Toothbrushes (2-pack)", monthly: 5.00, annual: 60.00, pct: "0.1%", note: "Oral-B manual, replace every 3 months ($2.50 avg/mo)", source: "Shoppers Drug Mart" },
  { emoji: "🧴", name: "Shampoo & Conditioner", monthly: 12.00, annual: 144.00, pct: "0.3%", note: "Head & Shoulders or Pantene combo pack", source: "Shoppers Drug Mart" },
  { emoji: "🪒", name: "Razors / Shaving Cream", monthly: 10.00, annual: 120.00, pct: "0.3%", note: "Gillette cartridges + shave gel monthly avg", source: "Shoppers Drug Mart" },
  { emoji: "🧴", name: "Deodorant (2-pack)", monthly: 8.00, annual: 96.00, pct: "0.2%", note: "Degree or Dove, 2-pack lasts 2 months", source: "Shoppers Drug Mart" },
  { emoji: "🧴", name: "Moisturizer / Lotion", monthly: 6.00, annual: 72.00, pct: "0.2%", note: "Lubriderm or Vaseline Intensive Care", source: "Shoppers Drug Mart" },
  { emoji: "✂️", name: "Haircut / Grooming", monthly: 20.00, annual: 240.00, pct: "0.5%", note: "Monthly trim at local barbershop", source: "Google Maps Brampton" },
  { emoji: "🌸", name: "Cologne / Body Spray", monthly: 8.00, annual: 96.00, pct: "0.2%", note: "Monthly avg cost of fragrance products", source: "Shoppers Drug Mart" },
  { emoji: "🧴", name: "Hand Soap (refill)", monthly: 5.00, annual: 60.00, pct: "0.1%", note: "Softsoap refill pump bottle", source: "Walmart Canada" },
  { emoji: "🧻", name: "Facial Tissue Boxes (2)", monthly: 6.00, annual: 72.00, pct: "0.2%", note: "Kleenex or Puffs, 2 boxes per month", source: "Walmart Canada" },
  { emoji: "💅", name: "Nail Care (clippers/files)", monthly: 3.00, annual: 36.00, pct: "0.1%", note: "Monthly avg - trimmers + nail file replacement", source: "Shoppers Drug Mart" },
  { emoji: "🦷", name: "Dental Insurance", monthly: 106.00, annual: 1272.00, pct: "2.7%", note: "Dental Insurance for ages 20-44", source: "PolicyMe" },
];

// Spreadsheet says $99 subtotal for hygiene (dental insurance listed separately in total)
// But all items in the section sum to $205, using actual sum for accuracy
export const HYGIENE_SUBTOTAL = { monthly: 205.00, annual: 2460.00, pct: "5.2%" };

export const FOOD_LIFE = [
  { emoji: "☕", name: "Tim Hortons (daily coffee)", monthly: 93.00, annual: 1116.00, pct: "2.4%", note: "$3/day × 31 days (medium double-double)", source: "Tim Hortons" },
  { emoji: "🍽️", name: "Kitchen Utensils (monthly)", monthly: 15.00, annual: 180.00, pct: "0.4%", note: "Spatulas, spoons, peelers replaced as needed", source: "Walmart Canada" },
  { emoji: "🌿", name: "Pest Control (monthly avg)", monthly: 10.00, annual: 120.00, pct: "0.3%", note: "Traps, spray, prevention products", source: "Home Depot Canada" },
  { emoji: "🖨️", name: "Printing Costs (ink/paper)", monthly: 8.00, annual: 96.00, pct: "0.2%", note: "Monthly avg for home printing", source: "Staples Canada" },
  { emoji: "📄", name: "A4 Paper (500 sheets)", monthly: 7.00, annual: 84.00, pct: "0.2%", note: "Hammermill or HP, 1 ream/month avg", source: "Staples Canada" },
  { emoji: "🍬", name: "Gum (4-pack monthly)", monthly: 6.00, annual: 72.00, pct: "0.2%", note: "Extra or Trident variety packs", source: "Walmart Canada" },
  { emoji: "🎰", name: "Lottery Scratch Cards", monthly: 20.00, annual: 240.00, pct: "0.5%", note: "Monthly entertainment budget for scratch tickets", source: "OLG Ontario" },
];

export const FOOD_LIFE_SUBTOTAL = { monthly: 159.00, annual: 1908.00, pct: "4.1%" };

export const WANTS = [
  { emoji: "📱", name: "Phone Plan (Freedom Mobile)", monthly: 40.00, annual: 480.00, pct: "1.0%", note: "Total Freedom 175GB + Roam Beyond 10GB", source: "Freedom Plans" },
  { emoji: "📱", name: "Phone Payment (Pixel 10 Pro XL)", monthly: 40.00, annual: 480.00, pct: "1.0%", note: "MyTab monthly device payment", source: "Freedom Device" },
  { emoji: "🎵", name: "Spotify Premium", monthly: 13.99, annual: 167.88, pct: "0.4%", note: "Individual plan - music & podcasts (just increased)", source: "Spotify Canada" },
  { emoji: "📺", name: "Netflix Standard", monthly: 18.99, annual: 227.88, pct: "0.5%", note: "Standard no-ads - HD, 2 screens", source: "Netflix Canada" },
  { emoji: "📦", name: "Amazon Prime", monthly: 9.99, annual: 119.88, pct: "0.3%", note: "Free shipping + Prime Video + Prime Reading", source: "Amazon Prime CA" },
  { emoji: "🏋️", name: "Gym Membership (GoodLife)", monthly: 29.99, annual: 359.88, pct: "0.8%", note: "GoodLife Essential - Brampton Bramalea City Centre", source: "GoodLife Brampton" },
  { emoji: "🎮", name: "Xbox Game Pass Ultimate", monthly: 22.99, annual: 275.88, pct: "0.6%", note: "400+ games, cloud gaming, EA Play, day-one titles", source: "Xbox Game Pass" },
  { emoji: "🟥", name: "Roblox Plus", monthly: 6.84, annual: 82.08, pct: "0.2%", note: "Roblox Plus (replaced Premium) - $4.99 USD converted CAD", source: "Roblox Plus" },
  { emoji: "☁️", name: "Google One (100 GB)", monthly: 2.79, annual: 33.48, pct: "0.1%", note: "100GB plan at $1.99 USD/mo → $2.79 CAD", source: "Google One" },
  { emoji: "💳", name: "Credit Card Annual Fee", monthly: 0.00, annual: 0.00, pct: "0.0%", note: "TD Cash Back Visa - no annual fee", source: "TD Visa" },
  { emoji: "🛍️", name: "Costco Membership", monthly: 5.41, annual: 65.00, pct: "0.1%", note: "Gold Star membership (annual, shown monthly avg)", source: "Costco CA" },
  { emoji: "📈", name: "RRSP Contribution (8%)", monthly: 313.75, annual: 3765.00, pct: "8.0%", note: "8% of net monthly income - retirement savings", source: "CRA RRSP" },
];

export const WANTS_SUBTOTAL = { monthly: 504.74, annual: 6056.96, pct: "12.9%" };

export const FREE_RESOURCES = [
  { emoji: "📚", name: "Brampton Library Pass", note: "Free books, e-books, audiobooks, DVDs, internet", type: "Education" },
  { emoji: "🔍", name: "Google Search", note: "Free web search, daily use", type: "Productivity" },
  { emoji: "📺", name: "YouTube (free tier)", note: "Free video streaming with ads", type: "Entertainment" },
  { emoji: "📧", name: "Gmail", note: "Free Google email (15 GB included)", type: "Productivity" },
  { emoji: "🗺️", name: "Google Maps", note: "Free navigation and transit directions", type: "Navigation" },
  { emoji: "☁️", name: "Google Drive (15 GB free)", note: "Free cloud storage up to 15 GB", type: "Storage" },
  { emoji: "💬", name: "WhatsApp / iMessage", note: "Free messaging over Wifi or data", type: "Communication" },
  { emoji: "🏃", name: "Outdoor Exercise (parks)", note: "Chinguacousy Park, Gage Park - free trails & fitness", type: "Health" },
  { emoji: "📡", name: "CBC & CTV News Online", note: "Free Canadian news streaming", type: "News" },
  { emoji: "🆓", name: "Kijiji / Facebook Marketplace", note: "Free local buy/sell platform", type: "Shopping" },
  { emoji: "🏛️", name: "Service Ontario Online", note: "Free government services portal", type: "Government" },
  { emoji: "🩺", name: "OHIP (Ontario Health)", note: "Free provincial health coverage for doctor visits", type: "Health" },
  { emoji: "📖", name: "Wikipedia", note: "Free online encyclopedia, daily reference", type: "Education" },
];

// Derived calculations
export const TOTAL_EXPENSES = NEEDS_SUBTOTAL.monthly + HYGIENE_SUBTOTAL.monthly + FOOD_LIFE_SUBTOTAL.monthly + WANTS_SUBTOTAL.monthly;
export const BALANCE_AFTER = INCOME.netTakeHome - TOTAL_EXPENSES;
export const SAVINGS_RATE = ((BALANCE_AFTER / INCOME.netTakeHome) * 100).toFixed(1);
export const EXPENSES_PCT = ((TOTAL_EXPENSES / INCOME.netTakeHome) * 100).toFixed(1);

export const BUDGET_SUMMARY = {
  totalExpenses: TOTAL_EXPENSES,
  totalExpensesAnnual: TOTAL_EXPENSES * 12,
  balance: BALANCE_AFTER,
  balanceAnnual: BALANCE_AFTER * 12,
  savingsRate: SAVINGS_RATE,
  expensesPct: EXPENSES_PCT,
};

export const PROFITS_SAVED = {
  investmentPortfolio: { monthly: 2.62, annual: 376.80, rate: "1.50%" },
  creditCard: { monthly: 5.54, annual: 66.54 },
  banking: { monthly: 30.95, annual: 371.40 },
  totalMonthly: 39.11,
  totalAnnual: 814.74,
};
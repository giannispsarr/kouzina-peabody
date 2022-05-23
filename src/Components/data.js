const menu = [
    {
        id: 1,
        title: 'Kolokythokeftedes',
        category: 'appetizers',
        description: 'Crispy Zucchini Fritters with Herbs and Feta Cheese, Served with Homemade Tzatziki'
    },
    {
        id: 2,
        title: 'Keftedes',
        category: 'appetizers',
        description: 'Fried Greek Meatballs made with Beef Garlic, Mint, Onions and Greek Herbs, Served with Homemade Tzatziki'
    },
    {
        id: 3,
        title: 'Spanakopita',
        category: 'appetizers',
        description: 'Crispy Phyllo Pastry with Spinach, Herbs and Feta Filling'
    },
    {
        id: 4,
        title: 'Saganaki',
        category: 'appetizers',
        description: 'Greek Kefalotyri Cheese Flamed with Ouzo'
    },
    {
        id: 5,
        title: 'Dolmades',
        category: 'appetizers',
        description: 'Stuffed Grape Leaves with Rice, Ground Beef and Herbs dressed with Avgolemono Sauce'
    },
    {
        id: 6,
        title: 'Oktapodi',
        category: 'appetizers',
        description: 'Tender Grilled Octapus Served with Fava'
    },
    {
        id: 7,
        title: 'Tiganito Kalamari',
        category: 'appetizers',
        description: 'Fried Calamari Served with Lemon Wedges and Taramosalata'
    },
    {
        id: 8,
        title: 'Kolokithakia',
        category: 'appetizers',
        description: 'Fried Zucchini Chips Served with out Homemade Tzatziki Sauce'
    },
    {
        id: 9,
        title: 'Feta psiti',
        category: 'appetizers',
        description: 'Fried Imported Feta in Phyllo Pastry Topped with Honey and Sesame Seeds'
    },
    {
        id: 10,
        title: 'Paidakia Kotopoulo',
        category: 'appetizers',
        description: 'Fresh Cut Grilled Chicken Chops, Marinated in House with Olive Oil and Oregano and Cooked to Perfection'
    },
    {
        id: 11,
        title: 'Paidakia Arni',
        category: 'appetizers',
        description: 'Fresh Cut Grilled Lamb Chops, Marinated in House with Olive Oil and Oregano and Cooked to Perfection'
    },
    {
        id: 12,
        title: 'Elliniki Feta',
        category: 'appetizers',
        description: 'Imported Feta cheese with Olive Oil and Oregano'
    },
    {
        id: 13,
        title: 'Papoutsakia',
        category: 'appetizers',
        description: 'Greek Style Baked and Stuffed Eggplant with Ground Beef, Herbs and Parmesan Cheese'
    },
    {
        id: 14,
        title: 'Arni Kokkinisto',
        category: 'dinners',
        description: "Jimmy's Specialty. Simmered Lamb in a Savory Greek Tomato Sauce"
    },
    {
        id: 15,
        title: 'Brizola',
        category: 'dinners',
        description: 'Marinated Grilled Pork Loin'
    },
    {
        id: 16,
        title: 'Moscharisia Brizola',
        category: 'dinners',
        description: 'Grilled Ribeye Steak'
    },
    {
        id: 17,
        title: 'Solomos',
        category: 'dinners',
        description: 'Grilled Salmon Marinated with Olive Oil, Lemon and Rosemary'
    },
    {
        id: 18,
        title: 'Roasted Half Chicken',
        category: 'dinners',
        description: 'Mediterranean Style Half Roasted Chicken'
    },
    {
        id: 19,
        title: 'Makaronia me kima',
        category: 'dinners',
        description: 'Traditional Greek style Bolognaise with Mizithra Cheese'
    },
    {
        id: 20,
        title: 'Baked Haddock',
        category: 'dinners',
        description: 'Baked with a Buttery Ritz Crumb Topping'
    },
    {
        id: 21,
        title: 'Pastitsio',
        category: 'dinners',
        description: 'Baked Pasta with Ground Beef, Seasoned, Tossed and Finally Topped with a Bechamel'
    },
    {
        id: 22,
        title: 'Mousaka',
        category: 'dinners',
        description: 'Eggplant with a Roasted Potato Base, Layered with Groung Beef Raghu and Topped with Homemade Bechamel Sauce and Cheese'
    },
    {
        id: 23,
        title: 'Gemista',
        category: 'dinners',
        description: 'Tomatoes and Peppers Stuffed with Rice and Herbs'
    },
    {
        id: 78,
        title: 'Pikilia (Sampler Plate)',
        category: 'dinners',
        description: 'Two Chicken Souvlaki, Two Pork Souvlaki, Choice of Gyro (Pork or Chicken), Pork Lamb Chops, French Fries, Tomato, Onion, Tzatziki and Saganaki'
    },
    {
        id: 29,
        title: 'Kagiana - Greek Style Omelet',
        category: 'dinners',
        description: 'Three Scrambled Eggs with Feta Peppers and Sun Dried Tomatoes served with Fries'
    },
    {
        id: 74,
        title: 'Lamb Paidakia',
        category: 'dinners',
        description: 'Marinated Lamb Chops'
    },
    {
        id: 75,
        title: 'Gyro Plate',
        category: 'dinners',
        description: 'Chicken or Pork Gyro served with Salad, Rice, Pita and Tzatziki'
    },
    {
        id: 76,
        title: 'Souvlaki Plate',
        category: 'dinners',
        description: 'Two Souvlaki Skewers served with Salad, Rice, Pita and Tzatziki'
    },
    {
        id: 77,
        title: 'Deluxe',
        category: 'dinners',
        description: 'Two Souvlaki Skewers with Chicken or Pork Gyro served with Salad, Rice, Pita and Tzatziki'
    },
    {
        id: 24,
        title: 'Elliniki',
        category: 'salads',
        description: 'Mixed Greens with Tomatoes, Onions, Cucumbers, Feta Cheese and Kalamata Olives'
    },
    {
        id: 25,
        title: "Horiatiki",
        category: 'salads',
        description: 'A Fully Traditional Village Salad with Tomatoes, Onions, Cucumbers, Aged Barrel Feta Cheese and Kalamata Olives Tossed in Olive Oil and Oregano'
    },
    {
        id: 26,
        title: 'Prasini',
        category: 'salads',
        description: 'Finely Chopped Romain Lettuce, Scallions, Dill, Cucumber, Extra Virgin Olive Oil and a Splash of Vinegar.'
    },
    {
        id: 27,
        title: 'Kouzina',
        category: 'salads',
        description: 'Mixed Greens Salad served with Cranberries, Kefalotyri Flakes, Honey, Caramelized Walnuts and Balsamic Honey Vinegar'
    },
    {
        id: 28,
        title: "Ceasar",
        category: 'salads',
        description: 'Romain Lettuce, Bacon Bits, Cherry Tomato, Kefalotyri Flakes and Croutons with a Homemade Ceasar Dressing'
    },
    {
        id: 31,
        title: 'Tzatziki',
        category: 'soups/spreads',
        description: 'Homemade Tzatziki Spread Made with Greek Yoghurt, Cucumber and Garlic'
    },
    {
        id: 32,
        title: 'Hummus',
        category: 'soups/spreads',
        description: 'Homemade Chickpea Spread'
    },
    {
        id: 33,
        title: 'Tyrokafteri',
        category: 'soups/spreads',
        description: 'Spicy Feta Dip Made with Fresh Jalapeno Peppers'
    },
    {
        id: 34,
        title: 'Melitzanosalata',
        category: 'soups/spreads',
        description: 'Homemade Dip Made From Roasted Eggplant and Greek Olive Oil, Roasted Peppers and Parsley'
    },
    {
        id: 35,
        title: 'Taramosalata',
        category: 'soups/spreads',
        description: 'Salmon Roe Mixed with Olive Oil Lemon and Lemon Juice'
    },
    {
        id: 36,
        title: "Jimmy's Famous Greek Soup Avgolemono",
        category: 'soups/spreads',
        description: 'Homemade Chicken Egg, Lemon and Rice Soup'
    },
    {
        id: 30,
        title: "Fakes",
        category: 'soups/spreads',
        description: 'Lentil Soup'
    },
    {
        id: 37,
        title: 'Patates tiganites',
        category: 'sides',
        description: 'French Fries'
    },
    {
        id: 38,
        title: 'Greek Fries',
        category: 'sides',
        description: 'Freshly Cut French Fries Topped with Aged Feta and Oregano'
    },
    {
        id: 39,
        title: 'Roast Potatoes',
        category: 'sides',
        description: 'Oven Roasted Potatoes with Lemon, Oregano and Garlic'
    },
    {
        id: 40,
        title: 'Ellinika fasolakia',
        category: 'sides',
        description: 'Greek style string Beans with Fresh Tomato Sauce and Zucchini'
    },
    {
        id: 41,
        title: 'Rizi Pilafi',
        category: 'sides',
        description: 'Greek Rice Pilaf'
    },
    {
        id: 43,
        title: 'Souvlaki',
        category: 'sides',
        description: 'Grilled Pork or Chicken'
    },
    {
        id: 45,
        title: 'Pita',
        category: 'sides',
        description: 'Toasted Pita Bread'
    },
    {
        id: 44,
        title: 'Gyro',
        category: 'sides',
        description: 'Shaved Pork or Chicken Layered the Right Way, Seasoned and Cooked Slowly'
    },
    {
        id: 46,
        title: 'Chicken or Pork Gyro',
        category: 'sandwiches',
        description: 'Gyro Wrapped in Pita with Tomato, Onion, French Fries and Tzatziki (Chicken Gyro comes with Honey Mustard)'
    },
    {
        id: 47,
        title: 'Souvlaki',
        category: 'sandwiches',
        description: 'Grilled Pork, Chicken or Lamb Skewers Wrapped in Pita with Tomato, Onion, French Fries and Tzatziki'
    },
    {
        id: 48,
        title: 'Bifteki',
        category: 'sandwiches',
        description: 'House Made Chicken or Beef Patty blended with Herbs Wrapped in Pita with Tomato, Onion, French Fries and Tzatziki'
    },
    {
        id: 49,
        title: 'Hummus Sandwich',
        category: 'sandwiches',
        description: 'Housemade Hummus Wrapped in Pita with Lettuce, Tomatoes, Onions, French Fries and Cucumbers'
    },
    {
        id: 50,
        title: 'Cold Veggie Sandwich',
        category: 'sandwiches',
        description: 'Pita Wrap with Tomato, Onion, Lettuce, Cucumber, Feta, Peppers and Salad Dressing'
    },
    {
        id: 53,
        title: 'Homemade Falafel Sandwich',
        category: 'sandwiches',
        description: 'Falafel Wrapped in Pita with Tahini Sauce, Lettuce, Cucumber and Tomato'
    },
    {
        id: 52,
        title: 'Kouzina Burger',
        category: 'sandwiches',
        description: 'Angus Burger with Bacon, Lettuce, Tomato, Onions and Feta Cheese'
    },
    {
        id: 51,
        title: 'Hot Veggie Sandwich',
        category: 'sandwiches',
        description: 'Pita Wrap with Grilled Brussel Sprouts, Tomato, Onion, Lettuce, Peppers and Feta'
    },
    {
        id: 56,
        title: 'Galaktoboureko',
        category: 'desserts',
        description: 'Simolina Custard in Flaky Pastry Drenched in a Honey Syrup Sauce'
    },
    {
        id: 57,
        title: 'Baklavas',
        category: 'desserts',
        description: 'Flaky Pastry with Walnuts and Honey Syrup'
    },
    {
        id: 58,
        title: 'Rizogalo',
        category: 'desserts',
        description: 'Rice Pudding with cinnamon'
    },
    {
        id: 59,
        title: 'Karidopita',
        category: 'desserts',
        description: 'Walnut Cake in  Syrup Sauce. Served with a scoop of Vanilla or Chocolate Ice Cream'
    },
    {
        id: 60,
        title: 'Greek Yoghurt',
        category: 'desserts',
        description: 'Served with Honey and Walnuts'
    },
    {
        id: 62,
        title: 'Frape',
        category: 'kafe',
        description: 'Iced Greek Traditional Coffee'
    },
    {
        id: 63,
        title: 'Elliniko Kafe',
        category: 'kafe',
        description: 'Greek/Turkish Traditional Coffee'
    },
    {
        id: 64,
        title: 'Amerikaniko Kafe',
        category: 'kafe',
        description: 'Classic American Coffee'
    },
    {
        id: 65,
        title: 'Espresso',
        category: 'kafe',
        description: ''
    },
    {
        id: 66,
        title: 'Cappuccino',
        category: 'kafe',
        description: ''
    }
    //,
    // {
    //     id: 67,
    //     title: 'Amethystos (Blanc)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 68,
    //     title: 'Estate Chatzimichalis (Blanc)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 69,
    //     title: 'Moschofilero Boutari (Blanc)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 70,
    //     title: 'Santorini (Blanc)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 71,
    //     title: 'Agiorgitiko (Rose)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 72,
    //     title: 'Fourth Dimension (Red)',
    //     category: 'wines',
    //     description: ''
    // },
    // {
    //     id: 73,
    //     title: 'Anthos',
    //     category: 'cocktails',
    //     description: 'Tsipouro, Ouzo, Mastiha, Honey, Rose Wine, Oregano, Lemon Peel, Fresh Dill'
    // }
  ]
  export default menu
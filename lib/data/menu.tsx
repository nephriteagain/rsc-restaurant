
export const links = [
    {
        id: 'best-sellers',
        name: 'Bestsellers',
        desc: ''
    },
    {
        id: 'new-products',
        name: 'New Products',
        desc: 'Jollibee’s newest products that you surely would want to try! Discover your next new Jollibee favorite.'
    },
    {
        id: 'family-meals',
        name: 'Family Meals',
        desc: 'Your favorite Jollibee bundles best shared with family. Make meal time more exciting with Family Meals.'
    },
    {
        id: 'breakfast',
        name: 'Breakfast',
        desc: 'Start your day right with the filling and delicious Jollibee Breakfast Joys.'
    },
    {
        id: 'cheeryjoy',
        name: 'CheeryJoy',
        desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
    },
    {
        id: 'burgers',
        name: 'Burgers',
        desc: 'Your favorite 100% Beefy Langhap-Sarap Burgers.'
    },
    {
        id: 'cheery-spaghetti',
        name: 'Cheery Spaghetti',
        desc: 'The meatiest, cheesiest, and sweet-sarap Jolly Spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks, and creamy grated cheese.'
    },
    {
        id: 'burger-steak',
        name: 'Burger Steak',
        desc: 'Your favorite Beefy-Saucy Linamnam Ulam na with Jollibee Burger Steak.'
    },
    {
        id: 'super-meals',
        name: 'Super Meals',
        desc: 'Your Jollibee favorites in one Supermeal.'
    },
    {
        id: 'chicken-sandwich',
        name: 'Chicken Sandwich',
        desc: 'Large. Crunch. Juicy Thigh Fillet'
    },
    {
        id: 'cheery-hotdog-and-pies',
        name: 'Cheery Hotdog & Pies',
        desc: 'Your favorite Todo Toppings, Todo Sarap Jolly Hotdog & Crispy-Creamy Tuna Pie.'
    },
    {
        id:'palabok',
        name:'Palabok',
        desc: 'A classic favorite-premium bihon noodles topped with Jollibee’s saucy-tasty signature sauce and loaded with delicious toppings!'
    },
    {
        id: 'fries-and-sides',
        name: 'Fries & Sides',
        desc: 'Flavorful sides to complement your all-time favorite Jollibee meals.',
    },
    {
        id: 'desserts',
        name: 'Desserts',
        desc: 'Satisfy your sweet cravings with Jollibee Sweet Pies and Jollibee Sundaes.'
    },
    {
        id: 'beverages',
        name: 'Beverages',
        desc: 'Quench your thirst with these refreshing drink options best paired with your Jollibee meals.'
    },
    {
        id: 'cheery-kiddie-meal',
        name: 'Cheery Kiddie Meal',
        desc: 'Bring joy to your kid’s playtime with this meal set with toys.'
    }
]

export const menus : Record<string,{name:string;desc:string}[]> = {
    "best-sellers": [
        {
            name: '6 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family',
            desc: 'Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!',
        },
        {
            name: '8 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family',
            desc: 'ollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!'
        },
        {
            name: '6 - pc. Chickenjoy w/ Palabok Family Pan',
            desc: '6-pcs. of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite saucy-sarap Palabok Family Pan with tasty toppings!'
        },
        {
            name: '8 - pc. Chickenjoy w/ Palabok Family Pan',
            desc: '8-pcs. of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite saucy-sarap Palabok Family Pan with tasty toppings!'
        },
        {
            name: '6 - pc. Chickenjoy Bucket',
            desc: 'A bucket of your favorite crispylicious, juicylicious Chickenjoy!',

        },
        {
            name: '8 - pc. Chickenjoy Bucket',
            desc: 'A bucket of your favorite crispylicious, juicylicious Chickenjoy!'
        },
        {
            name: '1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal',
            desc: 'Your Jollibee favorites in one Supermeal: 1pc Chickenjoy with Burger Steak and Half Jolly Spaghetti, with rice and drink.'
        },
        {
            name: '1 - pc. Chickenjoy w/ Jolly Spaghetti',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with the cheesiest, meatiest, sweet-sarap Jolly Spaghetti.'
        },
        {
            name: '1 - pc. Chickenjoy Solo',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
        },
        {
            name: '2 - pc. Chickenjoy Solo',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
        },
        {
            name: 'Chickenjoy Bucket w/ Rice, Jolly Spaghetti, & Drinks',
            desc: 'A bucket of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Spaghetti, rice and drinks.'
        },
        {
            name: 'Yumburger, Half Jolly Spaghetti & Reg. Fries Super Meal',
            desc: 'Your Jollibee favorites in one Supermeal: Yumburger with Half Jolly Spaghetti, with fries and drink.'
        },
        {
            name: 'Yumburger',
            desc: 'Your favorite beefiest langhap-sarap Yumburger, with beefy patty and our special dressing in between soft buns'
        },
        {
            name: 'Cheesy Yumburger',
            desc: 'Your favorite beefiest langhap-sarap Yumburger with creamy cheese.'
        },
        {
            name: 'Burger Bundle',
            desc: '3 Burgers, 3 Regular Fries, and 3 Regular Drinks.'
        },
        {
            name: 'Yumburger Family Savers',
            desc: 'Jollibee Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three.'
        },
        {
            name: 'Jolly Spaghetti w/ Yumburger',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with your favorite beefiest langhap-sarap Yumburger, with beefy patty and our special dressing in between soft buns.'
        },
        {
            name: 'Jolly Spaghetti w/ Fries & Drink',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese! Served with drink.'
        },
        {
            name: 'Jolly Spaghetti & Palabok Family Pan',
            desc: 'Jollibee Family Savers Snack Time Bundle has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three.'
        }
    ],
    "new-products": [
        {
            name: `Spicy Chicken Sandwich Supreme`,
            desc: 'Large. Crunchy. Spicy Thigh Fillet.'
        },
        {
            name: 'Chicken Sandwich Supreme',
            desc: 'Large. Crunchy. Juicy Thigh Fillet.'
        },
        {
            name: '4 - pc. Chickenjoy Family Box',
            desc: 'Four pieces of fried chicken glazed with a perfect blend of sweet and spicy flavors. Good for sharing.'
        },
        {
            name: 'Tuna Pie',
            desc: 'Crispy-creamy Tuna Sarap in every bite!'
        },
        {
            name: 'Spicy Tuna Pie',
            desc: 'Crispy-creamy Tuna Sarap in every bite! Also available in Spicy!'
        }
    ],
    "family-meals": [
        {
            name: '4 - pc. Chickenjoy Family Box Solo',
            desc: 'Four-piece Family Box of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy.'
        },
        {
            name: 'Burger Steak Family Pan',
            desc: 'A platter of 100% pure beef patty with a hearty serving of flavorful mushroom gravy, good for 6.'
        },
        {
            name: 'Burger Bundle',
            desc: '3 Burgers, 3 Regular Fries, and 3 Regular Drinks.'
        },
        {
            name: 'Yumburger Family Savers',
            desc: 'Jollibee Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Yumburger and Jolly Crispy Fries. Good for three.'
        },
        {
            name: 'Peach Mango Pie 6 Pies-To-Go',
            desc: '6 pieces of Peach Mango Pie'
        },
        {
            name: 'Cheesy Yumburger Family Savers',
            desc: 'Jollibee Cheesy Yumburger Family Savers has all your favorite snacks in one! This includes your favorite beefy langhap-sarap Cheesy Yumburger and Jolly Crispy Fries. Good for three.'
        },
        {
            name: '6 - pc. Chickenjoy',
            desc: 'A bucket of your favorite crispylicious, juicylicious Chickenjoy!',
        },
        {
            name: 'Chickenjoy Bucket w/ Rice, Jolly Spaghetti, & Drinks',
            desc: 'A bucket of the Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Spaghetti, rice and drinks.',            
        },
        {
            name: 'Family Pan Duo',
            desc: 'Your meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan paired with the classic favorite Palabok Family Pan'
        },
        {
            name: 'Jolly Spaghetti Family Pan',
            desc: 'Your favorite meatiest,cheesiest sweet-sarap Jolly Spaghetti good for sharing with the whole family! Good for 4-5 pax.',            
        },
        {
            name: 'Palabok Family Pan',
            desc: 'Your classic favorite saucy-sarap Palabok with tasty toppings for sharing with the whole family! Good for 4-5 pax.'
        },
        {
            name: 'Joy At Home Birthday Set',
            desc: ''
        }
    ],
    "breakfast": [
        {
            name: '2 - pc. Pancakes',
            desc: '2 pieces of moist pancakes served with butter and maple syrup.'
        },
        {
            name: 'Breakfast Hotdog',
            desc: 'Meaty hotdog served with garlic rice and fried egg.'
        },
        {
            name: 'Bacon, Egg, & Cheese Pancake Sandwich',
            desc: 'Crispy bacon, cheese, and fried egg, sandwiched between two lightly glazed pancake buns.'
        },
        {
            name: 'Corned Beef',
            desc: 'Juicy corned beef served with garlic rice and fried egg.'
        },
        {
            name: 'Beef Tapa',
            desc: 'Tender beef tapa served with garlic rice and fried egg.'
        },
        {
            name: 'Breakfast Burger Steak',
            desc: '1 piece of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with garlic rice and fried egg.'
        },
        {
            name: 'Longganisa',
            desc: '2 pieces of mildly seasoned longganisa served with garlic rice and fried egg.'
        },
        {
            name: 'Breakfast Chickenjoy',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside with garlic rice and fried egg.'
        },
        {
            name: 'Bacon, Egg, & Cheese Sandwich',
            desc: 'Crispy bacon, cheese, and fried egg sandwiched between two soft buns.'
        }
    ],
    "cheeryjoy": [
        {
            name: '8 - pc. Chickenjoy Bucket',
            desc: 'A bucket of your favorite crispylicious, juicylicious Chickenjoy!'
        },
        {
            name: '6 - pc. Chickenjoy Bucket',
            desc: 'A bucket of your favorite crispylicious, juicylicious Chickenjoy!'
        },
        {
            name: '4 - pc. Chickenjoy Family Box',
            desc: 'A box of your favorite crispylicious, juicylicious Chickenjoy that’s perfect for the family!'
        },
        {
            name: '2 - pc. Chickenjoy Solo',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
        },
        {
            name: '1 - pc. Chickenjoy Solo',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
        },
        {
            name: '1 - pc. Chickenjoy w/ Jolly Spaghetti',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti.'
        },
        {
            name: '1 - pc. Chickenjoy w/ Burger Steak',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.'
        },
        {
            name: '1 - pc. Chickenjoy w/ Palabok',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite saucy-sarap Palabok.'
        },
        {
            name: '1 - pc. Chickenjoy w/ Fries',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with crispy-sarap fries.'
        }
    ],
    "burgers": [
        {
            name: 'Yumburger',
            desc: 'Your favorite beefiest langhap-sarap Yumburger, with beefy patty and our special dressing in between soft buns.'
        },
        {
            name: 'Cheesy Yumburger',
            desc: 'Your favorite beefiest langhap-sarap Yumburger with creamy cheese.'
        },
        {
            name: 'Bacon Cheesy Yumburger',
            desc: 'Your favorite langhap-sarap Yumburger now made extra special with crispy bacon and creamy cheese.'
        },
        {
            name: 'Champ Jr.',
            desc: 'The Classic Champ now in a Jr. size. Made with a beefy patty, lettuce, tomato, and creamy cheese.'
        },
        {
            name: 'Champ',
            desc: 'The iconic 1/3-pound Champ patty with tomato, lettuce and cheese in sesame seed buns.'
        },
        {
            name: 'Aloha Champ Jr.',
            desc: 'The Aloha Champ now has a Jr. size. Made with a beefy patty, juicy pineapple, crispy bacon, honey mustard dressing, and creamy cheese.'
        },
        {
            name: 'Aloha Champ',
            desc: 'The iconic 1/3-pound Champ patty with juicy pineapple rings, crispy bacon strips, lettuce, cheese and honey mustard dressing in sesame seed buns.'
        }
    ],
    "cheery-spaghetti": [
        {
            name: 'Jolly Spaghetti',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese.'
        },
        {
            name: 'Jolly Spaghetti Family Pan',
            desc: 'Your meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan.'
        },
        {
            name: 'Chickenjoy Bucket with Jolly Spaghetti Family Pan',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!'
        },
        {
            name: 'Jolly Spaghetti w/ Fries & Drink',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese! Served with drink.'
        },
        {
            name: 'Jolly Spaghetti w/ Burger Steak',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with our Beefy-Saucy Burger Steak.'
        },
        {
            name: 'Jolly Spaghetti w/ Yumburger',
            desc: 'The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee’s signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with your favorite langhap-sarap Yumburger with 100% beef patty and special burger dressing.'
        }
    ],
    "burger-steak": [
        {
            name: '1 - pc. Burger Steak',
            desc: '1 piece of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with steamed rice.',
        },
        {
            name: '2 - pc. Burger Steak',
            desc: '2 pieces of beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with steamed rice.'
        },
        {
            name: '1 - pc. Burger Steak w/ Fries & Drink',
            desc: 'Beef patty with flavorful mushroom gravy, topped with mushroom slices. Served with fries and steamed rice.'
        },
        {
            name: 'Burger Steak w/ Jolly Spaghetti Family Pan',
            desc: 'A platter of beef patties with flavorful mushroom gravy topped with mushroom slices. Served with the meatiest, cheesiest and sweet-sarap Jolly Spaghetti Family Pan!'
        },
        {
            name: '8 - pc. Burger Steak Family Pan',
            desc: 'A platter of beef patties with flavorful mushroom gravy topped with mushroom slices, good for 8.'
        },
        {
            name: '6 - pc. Burger Steak Family Pan',
            desc: 'A platter of beef patties with flavorful mushroom gravy topped with mushroom slices, good for 6.'
        }
    ],
    "super-meals": [
        {
            name: '1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal',
            desc: 'Your Jollibee favorites in one Supermeal: 1pc Chickenjoy with Burger Steak and Half Jolly Spaghetti, with rice and drink.'
        },
        {
            name: 'Yumburger, Half Jolly Spaghetti & Reg. Fries Super Meal​',
            desc: 'Your Jollibee favorites in one Supermeal: Yumbuerger with Half Jolly Spaghetti, with fries and drink.'
        }
    ],
    "chicken-sandwich": [
        {
            name: `Spicy Chicken Sandwich Supreme`,
            desc: 'Large. Crunch. Spicy Thigh Fillet'
        },
        {
            name: `Spicy Chicken Sandwich Supreme w/ Fries & Drink`,
            desc: 'Large. Crunch. Spicy Thigh Fillet'
        },
        {
            name: 'Chicken Sandwich Supreme',
            desc: 'Large. Crunch. Juicy Thigh Fillet'
        },
        {
            name: `Chicken Sandwich Supreme w/ Fries & Drink`,
            desc: 'Large. Crunch. Juicy Thigh Fillet'                    
        }
    ],
    "cheery-hotdog-and-pies": [
        {
            name: 'Cheesy Classic Jolly Hotdog',
            desc: 'Meaty sausage in a soft hotdog bun, topped with a generous serving of tangy special dressing, grated cheese and tomato catsup, with fries and drink.'
        },
        {
            name: 'Tuna Pie',
            desc: 'Crispy-creamy Tuna Sarap in every bite!'
        },
        {
            name: 'Tuna Pie Trio',
            desc: '3 pieces of the crispy & creamy Tuna Pie!'
        },
        {
            name: '3 pieces of the crispy & creamy Tuna Pie!',
            desc: 'Crispy-creamy Tuna Sarap in every bite! Also available in Spicy!'
        },
        {
            name: 'Spicy Tuna Pie Trio',
            desc: '3 pieces of the crispy & creamy Spicy Tuna Pie!'
        }
    ],
    "palabok": [
        {
            name: 'Palabok Solo',
            desc: 'A classic favorite-premium bihon noodles topped with Jollibee’s saucy-tasty signature sauce and loaded with delicious toppings!'
        },
        {
            name: '1 - pc. Chickenjoy w/ Palabok',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite Palabok; saucy-tasty, loaded with toppings!'
        },
        {
            name: 'Palabok Family Pan',
            desc: 'Your classic favorite Palabok, saucy-tasty, loaded with toppings, for sharing with the whole family! Good for 4-5 pax.'
        },
        {
            name: 'Chickenjoy Bucket w/ Palabok Family Pan',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy paired with your classic favorite Palabok Family Pan; saucy-tasty, loaded with toppings!'
        }
    ],
    "fries-and-sides": [
        {
            name: 'Creamy Macaroni Soup',
            desc: 'Creamy flavorful broth with elbow macaroni with diced chicken, ham bits and vegetables.'
        },
        {
            name: 'Gravy',
            desc: 'Chickenjoy Gravy.'
        },
        {
            name: 'Jolly Crispy Fries',
            desc: 'Crispy-sarap fries in every bite.'
        },
        {
            name: 'Plain White Rice',
            desc: 'Extra rice.'
        }
    ],
    "desserts": [
        {
            name: 'Peach Mango Pie',
            desc: 'Peach Mango goodness in a crispy pie crust.'
        },
        {
            name: `Peach Mango Pie 3 Pies-To-Go`,
            desc: '3 pieces of Peach Mango Pie'
        },
        {
            name: `Peach Mango Pie 6 Pies-To-Go`,
            desc: '6 pieces of Peach Mango Pie'
        },
        {
            name: 'Chocolate Sundae Twirl',
            desc: 'Thick and creamy vanilla soft serve topped with rich, indulgent chocolate syrup.'
        }
    ],
    "beverages": [
        {
            name: 'Coffee',
            desc: 'Freshly brewed coffee with a balance of strong coffee taste, milk taste and just the right sweetness'
        },
        {
            name: 'Coke',
            desc: 'Refreshing, ice-cold Coke to perfectly match your favorite meal',
        },
        {
            name: 'Coke Float',
            desc: 'Coke soda topped with creamy vanilla soft serve and rich, indulgent chocolate syrup'
        },
        {
            name: 'Coke Zero',
            desc: 'Refreshing, ice-cold Coke Zero to perfectly match your favorite meal'
        },
        {
            name: 'Hot Chocolate',
            desc: 'Hot, rich and creamy chocolate drink.'
        },
        {
            name: 'Iced Tea',
            desc: 'Delicous, ice-cold lemon flavored Iced Tea that will definitely complement any meal'
        },
        {
            name: 'Pineapple Juice',
            desc: 'Natural pineapple juice drink for those looking for a healthy alternative'
        },
        {
            name: 'Royal',
            desc: 'Refreshing, ice-cold Royal to perfectly match your favorite meal'
        },
        {
            name: 'Sarsi',
            desc: 'Refreshing, ice-cold Sarsi to perfectly match your favorite meal'
        },
        {
            name: 'Sprite',
            desc: 'Refreshing, ice-cold Sprite to perfectly match your favorite meal'
        }
    ],
    "cheery-kiddie-meal": [
        {
            name: 'Burger Steak Kiddie Meal',
            desc: '100% pure beef patty with a hearty serving of flavorful mushroom gravy and steamed rice with Jolly Kiddie Meal toy and drink.',
        },
        {
            name: 'Chickenjoy Kiddie Meal',
            desc: 'Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Kiddie Meal toy.'
        },
        {
            name: 'Jolly Spaghetti Kiddie Meal',
            desc: 'Enjoy your cheesiest, meatiest, and best-tasting spaghetti with Jolly Kiddie Meal toy.'
        },
        {
            name: '6 - pc. Chickenjoy Kiddie Meal',
            desc: "Philippines’ best-tasting crispylicious, juicylicious Chickenjoy with Jolly Kiddie Meal toy."
        },
        {
            name: 'Yumburger Kiddie Meal',
            desc: 'Your favorite langhap-sarap Yumburger with Jolly Kiddie Meal toy.'
        }
    ]
}
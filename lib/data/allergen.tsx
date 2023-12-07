
type contains = {
    yes: string[];
    maybe: string[]
}

type records = {
    name: string;
    contains: contains
}

type allergen = Record<string,records[]>

export const allergen : allergen = {
    'best-sellers': [
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }                
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Palabok',
            contains: {
                yes: ['Crustaceans', 'Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Burger Steak',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheesy Yumburger',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheeryjoy Gravy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Crustaceans', 'Fish', 'Eggs', 'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "new-products": [
        {
            name: 'Chicken Ala King Pie',
            contains: {
                yes: ['Milk', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Fish',	'Eggs', 'Tree Nuts', 'Soya', 'Sesame Seeds']
            }
        },
        {
            name: 'Choco Mallow Pie',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Mango Graham Sundae',
            contains: {
                yes: ['Milk',	'Soya', 	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Choco Float',
            contains: {
                yes: ['Milk',	'Soya'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
        {
            name: 'Coffee Float',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "family-meals": [
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Palabok',
            contains: {
                yes: ['Crustaceans',	'Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites' ],
                maybe: ['Peanuts','Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Burger Steak',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Ultimate Burgersteak',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "breakfast": [
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Cheesy Yumburger	',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites', 'Milk'],
                maybe: []
            }
        },
        {
            name: 'Egg and Cheese Sandwich	',
            contains: {
                yes: ['Eggs', 'Milk', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Bacon, Egg and Cheese Sandwich		',
            contains: {
                yes: ['Eggs', 'Milk', 'Cereals Containing Gluten',	'Sulphites', 'Soya'],
                maybe: []
            }
        },
        {
            name: 'Pancake',
            contains: {
                yes: ['Eggs','Milk', 'Cereals Containing Gluten'],
                maybe: []
            }
        },
        {
            name: 'Bacon, Egg and Cheese Pancake Sandwich',
            contains: {
                yes: ['Eggs','Milk', 'Cereals Containing Gluten', 'Soya', 'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Egg and Cheese Pancake Sandwich	',
            contains: {
                yes: ['Eggs','Milk', 'Cereals Containing Gluten'],
                maybe: []
            }
        },
        {
            name: 'Shanghai Rolls',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Beef Tapa',
            contains: {
                yes: ['Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Longganisa',
            contains: {
                yes: ['Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites', 'Milk'],
                maybe: []
            }
        },
        {
            name: 'Corned Beef',
            contains: {
                yes: ['Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Breakfast Cheery Hotdog',
            contains: {
                yes: ['Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Breakfast Burger Steak',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        }
    ],
    "cheeryjoy": [
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Palabok',
            contains: {
                yes: ['Crustaceans',	'Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Burger Steak',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Ultimate Burgersteak',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheesy Yumburger	',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites', 'Milk'],
                maybe: []
            }
        },
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
        {
            name: 'Creamy Macaroni Soup',
            contains: {
                yes: ['Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish', 'Tree Nuts',	'Milk', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheeryjoy Gravy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Crustaceans', 'Fish', 'Eggs', 'Tree Nuts', 'Sesame Seeds']
            }
        }

    ],
    "burgers": [
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheesy Yumburger',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Champ Jr.',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites', 'Sesame Seeds'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Bacon Cheesy Yumburger',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Bacon Champ Jr.',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites', 'Sesame Seeds'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Amazing Aloha Champ Jr.',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites', 'Sesame Seeds'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
    ],
    "cheery-spaghetti": [
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
    ],
    "burger-steak": [
        {
            name: 'Burger Steak',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Ultimate Burgersteak',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },       
        {
            name: 'Palabok',
            contains: {
                yes: ['Crustaceans', 'Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Tree Nuts', 'Sesame Seeds']
            }
        },
    ],
    "super-meals": [
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }                
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Burger Steak',
            contains: {
                yes: ['Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Shanghai Rolls',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
        {
            name: 'Cheeryjoy Gravy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Crustaceans', 'Fish', 'Eggs', 'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "chicken-sandwich": [
        {
            name: 'Chicken Sandwich',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },        
    ],
    "cheery-hotdog-and-pies": [
        {
            name: 'Regular Cheery Hotdog',
            contains: {
                yes: ['Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },
        {
            name: 'Cheesy Cheery Hotdog',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        },
        {
            name: 'Tuna Pie',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts', 'Soya', 'Sesame Seeds']
            }
        },
        {
            name: 'Spicy Tuna Pie',
            contains: {
                yes: ['Fish',	'Eggs', 'Milk', 'Cereals Containing Gluten',	'Sulphites', 'Tree Nuts',],
                maybe: ['Peanuts',	'Crustaceans',  'Soya', 'Sesame Seeds']
            }
        }
    ],
    "palabok": [
        {
            name: 'Palabok',
            contains: {
                yes: ['Crustaceans', 'Fish', 'Eggs', 'Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Tree Nuts', 'Sesame Seeds']
            }
        },   
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }                
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "fries-and-sides": [
        {
            name: 'Cheery Crispy Fries',
            contains: {
                yes: ['Soya'],
                maybe: ['Peanuts', 'Eggs',	'Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites',	'Sesame Seeds']
            }
        },
        {
            name: 'Crisscut Fries',
            contains: {
                yes: ['Eggs', 'Milk',	'Soya',	'Cereals Containing Gluten'],
                maybe: ['Fish']
            }
        },
        {
            name: 'Creamy Macaroni Soup',
            contains: {
                yes: ['Eggs', 'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish', 'Tree Nuts',	'Milk', 'Sesame Seeds']
            }
        },
        {
            name: 'Cheeryjoy Gravy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Crustaceans', 'Fish', 'Eggs', 'Tree Nuts', 'Sesame Seeds']
            }
        }
    ],
    "desserts": [
        {
            name: 'Peach Mango Pie',
            contains: {
                yes: ['Milk', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Soya', 'Sesame Seeds']
            }
        },
        {
            name: 'Buko Pie',
            contains: {
                yes: ['Tree Nuts',	'Milk', 'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Peanuts', 'Eggs', 'Soya', 'Sesame Seeds']
            }
        },
        {
            name: 'Vanilla Twirl',
            contains: {
                yes: ['Milk',	'Soya',	'Cereals Containing Gluten',	'Sulphites'],
                maybe: ['Fish',	'Eggs',	'Tree Nuts']
            }
        },
        {
            name: 'Chocolate Sundae',
            contains: {
                yes: ['Milk',	'Soya', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans',	'Fish',	'Eggs',	'Tree Nuts', 'Cereals Containing Gluten','Sesame Seeds'],
            }
        }
    ],
    "beverages": [
        {
            name: 'Brewed Coffee',
            contains: {
                yes: ['Milk', 'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Hot Choco',
            contains: {
                yes: ['Milk',	'Soya'],
                maybe: []
            }
        },
        {
            name: 'Coke',
            contains: {
                yes: [],
                maybe: []
            }
        },
        {
            name: 'Sprite',
            contains: {
                yes: [],
                maybe: []
            }
        },
        {
            name: 'Coke Zero',
            contains: {
                yes: [],
                maybe: []
            }
        },
        {
            name: 'Royal',
            contains: {
                yes: ['Fish', 'Milk',	'Soya'],
                maybe: []
            }
        },
        {
            name: 'Sarsi',
            contains: {
                yes: [],
                maybe: []
            }
        },
        {
            name: 'Coke Float',
            contains: {
                yes: ['Milk',	'Soya', 'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Royal Float',
            contains: {
                yes: ['Fish', 'Milk',	'Soya', 'Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Pineapple Juice',
            contains: {
                yes: ['Sulphites'],
                maybe: []
            }
        },
        {
            name: 'Iced Tea',
            contains: {
                yes: ['Sulphites'],
                maybe: []
            }
        },
    ],
    "cheery-kiddie-meal": [
        {
            name: 'Yumburger',
            contains: {
                yes: ['Fish',	'Eggs', 'Soya',	'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts',	'Crustaceans', 'Tree Nuts',	'Milk', 'Sesame Seeds'],
            }
        },       
        {
            name: 'Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }                
        },
        {
            name: 'Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Cheeryjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Cheery Spaghetti',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
    ]
}
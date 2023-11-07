
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
            name: 'Chickenjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }                
        },
        {
            name: 'Spicy Chickenjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'New Spicy Chickenjoy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Peanuts', 'Crustaceans', 'Fish', 'Eggs', 'Tree Nuts','Sesame Seeds']
            }
        },
        {
            name: 'Jolly Spaghetti',
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
            name: 'ChickenJoy Gravy',
            contains: {
                yes: ['Milk', 'Soya', 'Cereals Containing Gluten', 'Sulphites'],
                maybe: ['Crustaceans', 'Fish', 'Eggs', 'Tree Nuts', 'Sesame Seeds']
            }
        }
    ]
}
export type promoType = {
    link: string; 
    title: string;
    desc: string;
    stores: string[];
    faq: faq[]
}

type faq = {
    q: string;
    a:string;
}

export const promos : promoType[] = [
    {
        link: 'jollibee-chickenjoy-christmas-perfect-pairs',
        title: 'Chickenjoy Christmas Perfect Pairs',
        desc: `Order 1-pc. Chickenjoy, pair it with 1 side, and save as much as P26! Available from November 3-30, 2023 only. Prices Vary.


        DTI Fair Trade Permit No. FTEB-177459 Series of 2023`,
        stores: [
            'Available in all Jollibee stores nationwide.'
        ],
        faq: [
            {
                q: 'Can I add a drink to my order?',
                a: 'Yes, you can upgrade to a Value Meal and add a drink to your order. Drink upgrade is not applicable to 1-pc. Chickenjoy w/ Coke Float (for Luzon and Visayas stores) and not applicable for 1-pc. Chickenjoy w/ Pepsi Float (for Mindanao stores).'
            },
            {
                q: 'Is the promo available for delivery?',
                a: 'Yes, you may avail the promo via Jollibee Delivery. The promo will be available through Dine-In, Take-Out, Drive-Thru, and Delivery.'
            },
            {
                q: 'Can I choose Spicy/New Spicy as my Chickenjoy variant?',
                a: 'Yes, you may choose Spicy/New Spicy as the flavor variant of your 1-pc. Chickenjoy order, for an additional P5 per piece. '
            },
            {
                q: 'Are SC and PWD discounts applicable?',
                a: 'For Dine In, Take Out and Drive Thru transactions, customers have the option to choose whether to avail the promo or the SC/PWD discount, whichever is higher. For Delivery transactions, promo can be used in conjunction with SC/ PWD discounts'
            }
        ]
    },
    {
        link: 'november-choose-your-welcome-gift',
        title: 'Choose your Welcome Gift!',
        desc: `Your Christmas Gift came early 

        Get FREE 1-pc. Chickenjoy Solo (min. order of 350) or Peach Mango Pie 3 Pies To-Go (min. order of P450) on your first delivery order! Promo runs from Nov 3 – 31, 2023.
        
        Download the Jollibee App now: https://bit.ly/JollibeeAPPakasulit`,
        stores: [
            'Available in stores Nationwide'
        ],
        faq: [
            {
                q: 'Is this promo available nationwide?',
                a: 'This promo is available in all stores on the Jollibee App.'
            },
            {
                q: 'How can I redeem the promo?',
                a: ` Thru the Jollibee App:

                1) Open the Jollibee App
                2) Go to the Promos Page
                3) Redeem the coupon: FREE 1-pc. Chickenjoy Solo or Peach Mango Pie 3 Pies To-Go
                4) Add your Jollibee favorites to your cart
                5) Enjoy your FREEBIE with your Jollibee favorites when you checkout!`
            },
            {
                q: 'How many times can I avail of the promo?',
                a: `New users can only redeem their Welcome Gift on their first Delivery transaction on the Jollibee App.`
            },
        ]
    },
    {
        link: 'november-app-exclusive-deal',
        title: 'App Exclusive Deal',
        desc: `All I Want for Christmas is the JOLLIEST DEAL – and we’ve got stackable FREEBIES!

        FREE Cheesy Classic Jolly Hotdog (min. order of P650) when you order via the Jollibee App. Stack your FREEBIE with FREE Delivery (for a min. order of P550).  Promo runs from Nov 3 – 31, 2023.
        
        Order thru the Jollibee App now: https://bit.ly/JollibeeAPPakasulit`,
        stores: [
            'Available in stores Nationwide'
        ],
        faq: [
            {
                q: 'Is this promo available nationwide?',
                a: 'This promo is available in all stores on the Jollibee App.'
            },
            {
                q: 'How can I redeem the promo?',
                a: `Thru the Jollibee App:
                1) Open the Jollibee App
                2) Go to the Promos Page
                3) Redeem the coupon: FREE Delivery and FREE Cheesy Classic Jolly Hotdog
                4) Add your Jollibee favorites to your cart
                5) Enjoy your FREEBIE with your Jollibee favorites when you checkout!`
            },
            {
                q: 'How many times can I avail of the promo?',
                a: 'Promo can be redeemed multiple times but only once per transaction.'
            }
        ]
    },
    {
        link: 'jolly-halloween-treats',
        title: 'Jolly Halloween Treats',
        desc: `Excited to celebrate Halloween? Head to participating Jollibee stores and get a special treat for every Value Meal Purchase on October 29, 2023, from 2pm to 6pm only.

        DTI Fair Trade Permit No. FTEB-178741 Series of 2023.`,
        stores: [
            'Available in stores Nationwide'            
        ],
        faq: [
            {
                q: 'Is this promo available nationwide?',
                a: 'This promo is available at participating stores nationwide.'
            },
            {
                q: 'How can I avail of the promo?',
                a: 'Visit any Jollibee participating store with your Kid wearing their favorite Halloween costume on October 29, 2023 from 2pm to 6pm. Claim your special Halloween Treats with any food purchase.'
            },
            {
                q: 'How many times can I avail the promo?',
                a: 'You and your kid may avail of the promo only once.'
            }
        ]
    }
]
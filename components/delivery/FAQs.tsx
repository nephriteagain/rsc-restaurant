import Question from "../common/Question"

const q = [
    {
        id: 0,
        question: `How do I order thru CheeryBug delivery?`,
        answer: `You may order thru the following ways:

        Order thru the Cheerybug mobile app
        #97000 Hotline delivery accepts cash and credit card payments.
        Visit the CheerybugDelivery.com website`
    },
    {
        id: 1,
        question: `Is CheeryBug delivery available nationwide?`,
        answer: `Yes, CheeryBug delivery is available nationwide.`
    },
    {
        id: 2,
        question: 'How much is the delivery fee of Cheerybug Delivery?',
        answer: 'The Delivery Fee is 10% on top of the product Dine-in SRP.'
    },
    {
        id: 3,
        question: 'How many minutes is the delivery serving time?',
        answer: 'Kindly expect your orders to arrive between 45mins to 1hour.'
    },
    {
        id: 4,
        question: 'What’s the minimum and maximum order purchase for delivery?',
        answer: 'Minimum order of P200, Maximum of P5500 (inclusive of delivery fee)'
    },
    {
        id: 5,
        question: 'What are the payment options available for delivery?',
        answer: `Cheerybugdelivery.com or the Cheerybug Mobile App accepts debit, credit card payments through Pesopay and cashless payments thru GCash and Paymaya on orders.
        #97000 Hotline delivery accepts cash and credit card payments.`
    },
    {
        id: 6,
        question: 'Do you honor senior citizen / PWD discounts?',
        answer: 'Senior citizen and PWD discounts are honored thru Cheerybug Delivery, as long as senior citizen / PWD ID is presented upon delivery.'
    }
]

export default function FAQs() {
    return (
        <div className="px-4 py-8 flex flex-col items-center gap-6 w-full">
            <h2 className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl font-bold text-center">Frequently Asked Questions (FAQs)</h2>
            <div className="flex flex-col gap-6 w-11/12">
                {q.map(qo => {
                    const { id, question, answer } = qo
                    return <Question 
                        key={id}
                        question={question}
                        answer={answer}
                    />
                })}
            </div>
        </div>
    )
}
export let cardRequests = [
    {
        title: 'Last 24 hours',
        status: '5 Open',
        value: 5,
        isIncreased: true
    },
    {
        title: 'Last week',
        status: '1 Declined',
        value: 1,
        isIncreased: true
    },
    {
        title: 'Last month',
        status: '3 Approved',
        value: 3,
        isIncreased: true
    },
];
export let payments = [
    {
        title: 'Last 24 hours',
        status: 567.9,
        value: 3,
        isIncreased: true
    },
    {
        title: 'Last week',
        status: 3547.15,
        value: 25,
        isIncreased: true
    },
    {
        title: 'Last month',
        status: 12870.12,
        value: 89,
        isIncreased: true
    },
]
export let newCustomers = [
    {
        title: 'Last 24 hours',
        status: '8 new ChargaCards',
        value: 2400,
        isIncreased: true
    },
    {
        title: 'Last week',
        status: '57 new ChargaCards',
        value: 14440,
        isIncreased: true
    },
    {
        title: 'Last month',
        status: '134 new ChargaCards',
        value: 51840,
        isIncreased: true
    },
]
export let transactions = [
    {
        title: 'Last 24 hours',
        status: 14532.15,
        value: 98,
        isIncreased: true
    },
    {
        title: 'Last week',
        status: 81379.20,
        value: 586,
        isIncreased: true
    },
    {
        title: 'Last month',
        status: 184456.02,
        value: 1646,
        isIncreased: true
    },
]

export let cardRequestsData = [
    {
        customer_id: 0,
        full_name: 'Harvey Walters',
        date: '14 Mar 2017',
        time: '10:25',
        credit_score: 666,
        amount: 87.5,
        isExisting: true
    },
    {
        customer_id: 0,
        full_name: 'Ted Pittman',
        date: '12 Mar 2017',
        time: '11:45',
        credit_score: 620,
        amount: 87.5,
        isExisting: false
    }
]

export let paymentsData = [
    {
        customer_id: 0,
        full_name: 'Ruth Hopkins',
        date: '14 Mar 2017',
        time: '10:25',
        credit_score: 715,
        amount: 11.5
    },
    {
        customer_id: 0,
        full_name: 'Hilda Ortiz',
        date: '12 Mar 2017',
        time: '11:45',
        credit_score: 519,
        amount: 1330.5
    },
    {
        customer_id: 0,
        full_name: 'Phillip Wheeler',
        date: '12 Mar 2017',
        time: '11:45',
        credit_score: 769,
        amount: 435
    },
    {
        customer_id: 0,
        full_name: 'Ruth Hopkins',
        date: '14 Mar 2017',
        time: '10:25',
        credit_score: 715,
        amount: 11.5
    }
]
export let newCustomersData = [
    {
        customer_id: 0,
        score: 706,
        full_name: 'Tiffany Griffin',
        date: '14 Mar 2017',
        time: '10:25',
        credit_limit: 760
    },
    {
        customer_id: 0,
        score: 666,
        full_name: 'Carolyn Sandler',
        date: '14 Mar 2017',
        time: '09:45',
        credit_limit: 640
    },
    {
        customer_id: 0,
        score: 606,
        full_name: 'Vincent Hudson',
        date: '13 Mar 2017',
        time: '12:10',
        credit_limit: 325
    },

]
export let transactionsData = [
    {
        transaction_id: 1,
        customer_id: 0,
        customer_full_name: 'Medison Reynolds',
        product_image_path: 'airpods',
        product_name: 'Apple Airpods',
        value: 165,
        date: '14 Mar 2017',
        time: '09:14',
        type: 'Payment',
        status: 'Success',
        method: 'citibank',
    },
    {
        transaction_id: 2,
        customer_id: 0,
        customer_full_name: 'Samuel Collins',
        product_image_path: 'smartwatch',
        product_name: 'SmartWatch 3 SWR50',
        value: 147.95,
        date: '14 Mar 2017',
        time: '08:45',
        type: 'Payment',
        status: 'Success',
        method: 'citibank',
    },
    {
        transaction_id: 3,
        customer_id: 0,
        customer_full_name: 'Anthony Simpson',
        product_image_path: 'smartglasses',
        product_name: 'Vuzix M100 Smart Glasses',
        value: 924.28,
        date: '14 Mar 2017',
        time: '07:22',
        type: 'Payment',
        status: 'Success',
        method: 'citibank',
    },
]

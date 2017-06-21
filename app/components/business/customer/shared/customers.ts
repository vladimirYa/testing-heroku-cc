export const customers = [
    {
        id: 0,
        name: 'ruth',
        surname: 'hopkins',
        score: 725,
        difference: 2,
        isIncreased: true,
        phoneNumber: '+1-202-555-0156',
        email: 'ruth.hopkins@yahoo.com',
        isVerfied: true,
        creditLimit: {
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: false
        },
        creditsUsed: {
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: false
        },
        creditsAvailable: {
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: true
        },
        interestRate: {
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: true
        },
        recentActivities: [
            {
                stuffImagePath: 'stuff/phone.png', //here will be backend url
                stuffName: 'Samsung Galaxy S7',
                date: 'Apr 1 2017',
                storeImagePath: 'stores/ebay.png',
                value: '694.99',
                type: 'Monthly Payment'
            },
            {
                stuffImagePath: 'stuff/allbirds.png',
                stuffName: 'Allbirds Shoes',
                date: 'Mar 10 2017',
                storeImagePath: 'stores/xeroshoes.png',
                value: '149.75',
                type: 'Downpayment'
            },
            {
                stuffImagePath: 'stuff/iphone.png',
                stuffName: 'iPhone SE',
                date: 'Mar 05 2017',
                storeImagePath: 'stores/orchard.png',
                value: '745.99',
                type: 'Additional Payment'
            },
            {
                stuffImagePath: 'stuff/top.png',
                stuffName: 'Lace Top',
                date: 'Feb 20 2017',
                storeImagePath: 'stores/swell.png',
                value: '149.75',
                type: 'Monthly Payment'
            }
        ],
        favoriteStores: [
            'stores/dragrazers.png', 'stores/eleven.png', 'stores/fugoo.png', 'stores/stripes.png'
        ],
        favoriteProducts: [
            {
                name: 'Fitbit FB401SL Wireless Activity and Sleep Tracker Wristband',
                imageUrl: 'stuff/fitbit.png'
            },
            {
                name: 'Chipolo',
                imageUrl: 'stuff/chipolo.png'
            },
            {
                name: 'Samsung Gear 360 Real 360 High Resolution VR Camera',
                imageUrl: 'stuff/samsung.png'
            },
            {
                name: 'Bellabeat',
                imageUrl: 'stuff/bellabeat.png'
            }
        ],
        netRevenue: {
            mtd: {
                date: 'Apr 15 2017',
                value: 242.50,
                difference: 2,
                isIncreased: false
            },
            lastMonth: {
                date: 'Mar 2017',
                value: 412.50,
                difference: 5,
                isIncreased: true
            },
            yearToDate: {
                date: 'Mar 2017',
                value: 3850,
                difference: 5,
                isIncreased: false
            }
        },
        productSold: {
            mtd: {
                date: 'Apr 15 2017',
                productNumber: 2,
                difference: 2,
                isIncreased: false
            },
            lastMonth: {
                date: 'Mar 2017',
                productNumber: 3,
                difference: 5,
                isIncreased: true
            },
            yearToDate: {
                date: 'Mar 2017',
                productNumber: 25,
                difference: 5,
                isIncreased: true
            }
        },
        products: [
            {
                date: 'Feb 25 2017',
                product: 'GPS Watch',
                amount: '299',
                previousBalance: '128.28',
                payments: '72.38',
                newBalance: '325',
                productImagePath: 'watch'
            },
            {
                date: 'Jan 12 2017',
                product: 'Smart Ring',
                amount: '106.10',
                previousBalance: '300',
                payments: '15.35',
                newBalance: '128.28',
                productImagePath: 'ring'
            },
            {
                date: 'Dec 22 2016',
                product: 'Smart Remote',
                amount: '56',
                previousBalance: '375',
                payments: '6.21',
                newBalance: '46.19',
                productImagePath: 'remote'
            }
        ],
        statements: [
            {

                statement_id: 123,
                statementOfAccount: {
                    date: 'Jan 24 2017',
                    number: 'GLD-1265-8790-5621',
                    previousBalance: 295,
                    payments: 'Paid',
                    newCharges: 430,
                    newBalance: 92,
                    amountDue: 'June 06 2017',
                    creditSummary: 'Jan 24 2017',
                    storeLimit: 2500,
                    used: 1550,
                    available: 950,
                    minAmountDue: 28,
                    dailyPeriodicRate: 0.0126,
                    annualPercentageRate: 5.16,
                    financeCharge: 0,
                    transactions: [
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        },
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        },
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        }
                    ],
                    store: {
                        imgPath: 'dragrazers',
                        score: 666,
                    },
                }
            },
            {
                statement_id: 12367,
                statementOfAccount: {
                    date: 'Jan 24 2017',
                    number: 'GLD-1265-8790-5621',
                    previousBalance: 295,
                    payments: 'Paid',
                    newCharges: 430,
                    newBalance: 92,
                    amountDue: 'June 06 2017',
                    creditSummary: 'Jan 24 2017',
                    storeLimit: 2500,
                    used: 1550,
                    available: 950,
                    minAmountDue: 28,
                    dailyPeriodicRate: 0.0126,
                    annualPercentageRate: 5.16,
                    financeCharge: 0,
                    transactions: [
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        },
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        },
                        {
                            date: 'Dec 20 2016',
                            details: 'Tropic Tank Dress',
                            quantity: 1,
                            referenceCode: 'AW-123-905-BD',
                            amount: 325
                        }
                    ],
                    store: {
                        imgPath: 'dragrazers',
                        score: 666,
                    },

                }
            },
        ],
        points: [
            {
                x: 'Apr',
                y: 100,
                score: 675
            },
            {
                x: 'May',
                y: 120,
                score: 675
            },
            {
                x: 'Jun',
                y: 200,
                score: 675
            },
            {
                x: 'Jul',
                y: 250,
                score: 675
            },
            {
                x: 'Aug',
                y: 300,
                score: 675
            },
            {
                x: 'Sep',
                y: 280,
                score: 675
            },
            {
                x: 'Oct',
                y: 320,
                score: 675
            },
            {
                x: 'Nov',
                y: 300,
                score: 675
            },
            {
                x: 'Dec',
                y: 360,
                score: 675
            },
            {
                x: 'Jan',
                y: 420,
                score: 725
            },
            {
                x: 'Feb',
                y: 480,
                score: 725
            },
            {
                x: 'Mar',
                y: 460,
                score: 725
            }
        ]
    }
];

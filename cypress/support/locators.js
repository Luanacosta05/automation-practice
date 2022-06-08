const locators = {
    formContact: {
        contactUs: '#contact-link > a',
        comboChose: '#id_contact',
        email: '#email',
        orderReference: ':nth-child(6) > .selector > .form-control',
        product: '#443001_order_products',
        send: '#submitMessage > span',
        message: '#message',
    },

    formContent: {
        subjectContent: 'Customer service',
        email: '#email',
        orderContent: 'ZRDRBKLHG - 06/06/2022',
        produtContent: 'Blouse - Color : Black, Size : S',
    },

    login: {
        email: '#email',
        password: '#passwd',
        singin: '#SubmitLogin > span'
    
        },

    homePage: {
        email: '#email',
        password: '#passwd',
        singin: '#SubmitLogin > span'
        
        }
} 

export default locators;
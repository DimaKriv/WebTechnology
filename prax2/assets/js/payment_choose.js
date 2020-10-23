function choose_payment(option) {
    elems = document.getElementsByClassName('div__payment--active');
    for (el of elems) {
        el.classList.remove('div__payment--active')
    }
    switch (option) {
        case 'paypal':
            el = document.getElementById('paypal-div');
            el.classList.add('div__payment--active');
            break;
        case 'master-card':
            el = document.getElementById('master-div');
            el.classList.add('div__payment--active');
            break;
        case 'visa':
            el = document.getElementById('visa-div');
            el.classList.add('div__payment--active');
            break;
        default:
            break;
    }
}
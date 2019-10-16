let phoneBook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}

console.log(phoneBook['John K. Miller']);

for (let k in phoneBook) {
    if (phoneBook[k] === '307-687-2982') {
        console.log('The ower of 307-687-2982 is: ' + k);
        break;
    }
}

if ('Chris E. Myers' in phoneBook) {
    console.log('Yes, Chris E. Myers is in the phone book.');
} else {
    console.log('No, Chris E. Myers is not in the phone book.');
}
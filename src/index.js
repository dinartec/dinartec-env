import numeral from 'numeral';

numeral.register('locale', 'ni', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function () {
        return 'o';
    },
    currency: {
        symbol: 'C$'
    }
});

// switch between locales
numeral.locale('ni');

const newValue = numeral(1000).format('$0,0.0');
console.log(`In cordobas, the new value is ${newValue}`);

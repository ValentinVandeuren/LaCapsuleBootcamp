const litecoin = `
    <div class="crypto_container">
        <img src="images/litecoin.png" alt="Litecoin" class="picto-crypto">
        <h6>Litecoin</h6>
        <div class="divider"></div>
        <p>0,2€</p>
    </div>
`;
const ripple = `
    <div class="crypto_container">
        <img src="images/ripple.png" alt="Ripple" class="picto-crypto">
        <h6>Ripple</h6>
        <div class="divider"></div>
        <p>39,9€</p>
    </div>
`;

$('#main_container').append(litecoin, ripple);

const numberOfCrypto = $('.crypto_container').length;
$('span').append(`vous avez ${numberOfCrypto} crypto monnaies dans votre portefeuille`);

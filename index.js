import { readFileSync } from 'fs';
import ocsp from 'ocsp';

const CA = 'SERASA'; //CERTISIGN|SERASA|SERPRO|SOLUTI
const METHOD = 'POST'; //GET|POST

const certPath = `certs/${CA.toLowerCase()}_cert.cer`;
const issuerPath = `certs/${CA.toLowerCase()}_ca.cer`;

let cert, issuer;
try {
    cert = readFileSync(certPath, 'utf8');
    issuer = readFileSync(issuerPath, 'utf8');
} catch (err) {
    console.log(err);
}

ocsp.check({
    cert: cert,
    issuer: issuer,
    requestByGet: (METHOD === 'GET')
}, function(err, res) {
    if (err)
      console.log(err);

    console.log(res);
});
import { readFileSync } from 'fs';
import ocsp from 'ocsp';

const CA = 'SERASA'; //CERTISIGN|SERASA|SERPRO|SOLUTI
const METHOD = 'POST'; //GET|POST

let certPath, issuerPath;
switch (CA) {
    case 'CERTISIGN':
        certPath = 'certs/certisign_cert.cer';
        issuerPath = 'certs/certisign_ca.cer';
        break;
    case 'SERASA':
        certPath = 'certs/serasa_cert.cer';
        issuerPath = 'certs/serasa_ca.cer';
        break;
    case 'SERPRO':
        certPath = 'certs/serpro_cert.cer';
        issuerPath = 'certs/serpro_ca.cer';
        break;
    case 'SOLUTI':
        certPath = 'certs/soluti_cert.cer';
        issuerPath = 'certs/soluti_ca.cer';
        break;
}

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
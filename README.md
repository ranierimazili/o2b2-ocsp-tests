# The open Open Banking Brasil project - OCSP over HTTP tests
Realiza o teste de OCSP das entidades certificadoras do Open Finance Brasil utilizando os verbos POST e GET

## Como executar
Após fazer download do código fonte, instale as dependências

```
npm install
```

Edite o arquivo index.js, substituindo as valores das varíavels CA e METHOD para refletirem o cenário de teste

```javascript
const CA = 'SERPRO'; //CERTISIGN|SERASA|SERPRO|SOLUTI
const METHOD = 'GET'; //GET|POST
```

No exemplo acima, será testado o OCSP via GET na AC Serpro.

Para executar o teste, rode o comando abaixo:

```
node index.js
```

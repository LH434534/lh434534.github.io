# lh434534.github.io

Site estatico proprio. Sem framework, sem build.

- `index.html` — estrutura
- `styles.css` — tema, via variaveis CSS
- `app.js` — interacao no cliente
- `.well-known/atproto-did` — prova de dominio para o Bluesky
- `.nojekyll` — **obrigatorio**: o Jekyll descarta dotfiles

## Por que `.nojekyll`

O GitHub Pages roda Jekyll por padrao e ele ignora arquivos que comecam com
ponto. Sem esse arquivo, `/.well-known/atproto-did` devolve 404 e a
verificacao de handle no Bluesky falha.

## Endereco

https://lh434534.github.io

DID: `did:plc:dh6eweh7brbtraluugpvpruj`

# Usa uma imagem base oficial do Node
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependência e instala
COPY package.json ./
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Comando para rodar a aplicação React/Vite
CMD ["npm", "run", "dev", "--", "--host"]
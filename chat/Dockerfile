# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que corre tu servidor (puerto 3000 como ejemplo)
EXPOSE 3007

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]

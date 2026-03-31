# 1. Usamos una imagen de Node
FROM node:20

# 2. Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos el resto del código
COPY . .

# 6. Exponemos el puerto (ej: 3000 para bakcend, 5173 para front)
EXPOSE 1573

# 7. Comando para arrancar
CMD ["npm", "run", "dev"]

# 1. Usamos una imagen de Node
FROM node:20-bookworm


RUN apt-get update && apt-get install -y build-essential python3

# 2. Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install --build-from-source sqlite3

# 5. Copiamos el resto del código
COPY . .

# 6. Exponemos el puerto (ej: 3000 para back, 5173 para front)
EXPOSE 3000

# 7. Comando para arrancar
CMD ["npm", "run", "dev"]

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
# https://ibb.co/5TH3z2w

# Отримуємо контакт по id

node index.js --action="get" --id=5 https://ibb.co/2hLz80J

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22" https://ibb.co/pWX9pq0

# Видаляємо контакт

node index.js --action="remove" --id=3 https://ibb.co/X2m8svT

Пред настройка:
Надо установить nodejs на машину.
Надо скачать файлы.
Как запустить скрипт:
1) запустить npm install
2) запустить npm install webdriverio

Есть три способа запуска:
1) запустить из папки команду "npm test" - тогда скрипт запуститься прямо сейчас один раз.
2) запустить из директории, где тест "node cron-node.js"  - тогда запуститься скрипт, который будет работать в фоновом режиме, и будет запускаться по расписанию.
3) Если у вас линукст, тогда в crontab добавить команду:


Настройки:
1) в файле cenv.json есть переменные:
passwordBrowserstack = 'd6n7zPHYzt29G4sqTLhG';
usernameBrowserstack = 'bsuser53510';

В них указывается данные из browserstack для аккаунта. На browserstack если создать нового пользователя даётся 100 минут бесплатного времени.
Чтобы поменять пользователя надо зайти https://automate.browserstack.com/dashboard и скопировать значения из полей: Username and Access Keys

2) В Файле env.json есть переменные:
Для прилодения:
email = 'info@dataroot.ru'; - емейл пользователя.
password = '1234qweR'; - его пароль.
company = 'obnyal02'; - его компания.

Для Телеграма:
apiTelegrameKey = '879787453:AAHtgq_sivWNBZ3TybePNMIqDSGA1vuBDRk'; - ключ от бота телеграма для апи.
apiTelegramechatId = '-1001311780422'; - Id чата, в который шлётся сообщение.

Для Апи:
server = '45.91.160.165'; - сервер для прокси.
serverPort = 2429; - порт для прокси.
serverUserName = 'user28804'; - юзер для прокси.
serverPassword = 'm40rtq'; - пароль юзера для прокси.
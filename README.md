### Get the necessary packages

After you plan your repository, you should go to the client folder and register npm install or npm i.
Repeat in server folder.

### Run server

Runs in the server folder:

### `nodemon server`

Start the server and will show the status of the server at a ticking moment.

### Run client

You must open a new terminal in parallel and run the following command:

### `npm start`

Runs the app in the development mode.
Open (http://localhost:3000) to view it in the browser.


### Tasks

Тестовое задание React.js/Node.js:

Разработать приложение которое будет состоять с трех небольших страниц:
Главная страница
Страница со списком пользователей
Страница пользователя 

Описание функционала и этапов работы
Back-end (Node.js):
данные представляют собой список пользователей (файл users.json) и статистику пользования сайтом (файл users_statistic.json)
разработать функционал выборки списка пользователей и информации о них (файл users и файл users_statistic (для выгрузки информации total_clicks и total_page_views)) с постраничной навигацией (количество пользователей и текущая страница приходит в запросе с Front-end)
разработать функционал выборки данных статистики (файл users_statistic) по id пользователя с возможностью фильтрации по дате (“от” и “до” приходит в запросе)
перед выборкой данных должна выполняться проверка на существование пользователя в файле users

Front-end (React):
Главная страница:
сверстать главную страницу приложения по макету (ссылка ниже)
Страница списка пользователей:
создать страницу списка пользователей, на которой будет размещена таблица со списком пользователей и информацией о них, полученная с API (поля которые должны быть в таблице: id, first_name, last_name, email, gender, ip_address, total_clicks, total_page_views)
на странице должна быть реализована постраничная навигация
максимальное количество пользователей на странице 50
при нажатии на строку в таблице происходит переход на страницу пользователя (пример роута /user/:id) 
Страница пользователя:
на странице пользователя должна отображаться две диаграммы со статистикой пользователя по полям page_views и clicks
статистика пользователя должна отображаться в виде линейной диаграммы.
если в данных пользователя отсутствует значение за какую-то дату, это значит page_views и clicks отсутствовали в этот день и они равны 0
по умолчанию выводится статистика за неделю, но должна быть предусмотрена возможность выбора промежутка “от” и “до”.





Требования к выполнению

Для навигации по страницам использовать React-роутинг
Для работы со стилями использовать препроцессор SCSS
Страницы должны быть адаптивными
Код разместить на github

Ссылки с тестовыми наборами:
Пользователи: 
https://drive.google.com/open?id=1Mnt53fYM_JNsUQgzh7nfsvUjuBAWmh9f
Данные по статистике: 
https://drive.google.com/open?id=10XCbjQ1QvdFTsOP5kXpmoXOZIqYVT_1K
Макеты:
https://www.figma.com/file/LpWuCx7YkPctSdSVwAKflI/Untitled?node-id=0%3A1
для просмотра стилей и экспорта изображений нужно зарегистрироваться в figma




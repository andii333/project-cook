import { DishComponent } from "src/app/main/dish/dish.component";

  
    export interface Dish {
        type: string;
    title: string;
    photo?: any;
    ingredients: string[];
    receipt: string;
    author?:string;
}

export let allDishes: Dish[] = [
    {
        type: 'breakfasts',
        title: 'Каша вівсяна',
        ingredients: [
            '100 г вівсяних пластівців', '300 мл молока', 'Трохи вершкового масла', 'Сіль, цукор та інші добавки — за бажанням'
        ],
        receipt: 'Нагрійте молоко до кипіння, постійно помішуючи, додайте в нього сіль та цукор. Засипте вівсяні пластівці та варіть приблизно 10 хвилин, постійно помішуючи. Як тільки каша загусне, вимкніть вогонь. Додайте вершкове масло, добре перемішайте.Залиште вівсянку під кришкою на 5 хвилин.'
    },
    {
        type: 'breakfasts',
        title: 'Каша рисова',
        ingredients: [
            'Рис (відшліфований і круглий) – 1 склянку', 'Молоко  – 1,5 літра', 'Цукор  – 2-3 столові ложки', 'Масло вершкове – 30 гр.'
        ],
        receipt: 'Круглий рис добре промиваючи проточною водою. Викладаємо його в каструльку, заливаємо двома склянками води і ставимо варитися на повільний вогонь до тих поки водапрактично не випаруватися(приблизно 20 хвилин).В цей час, в іншій каструлі ставимо кип`ятитися молоко. Готовий рис (без води) заливаємо кип`яченим молоком, додаємо цукор(перемішуємо) і ставимо варитися ще хвилин на 10. Після чого знімаємо з вогню, додаємо шматочок вершкового масла, перемішуємо і накриваємо кришкою.Даємо постояти хвилин п`ять і каша готова.'
    },
    {
        type: 'breakfasts',
        title: 'Каша манна',
        ingredients: [
            'Молоко - 500 мл', 'Крупа манна - 60 грам', 'Цукор - 1-2 столові ложки', 'Масло вершкове – 20 гр', 'Сіль – за смаком'
        ],
        receipt: 'Всипаємо в манну крупу 1-2 столові ложки цукру і сіль.  Добре перемішуємо нашу суміш столовою ложкою і на час відставляємо в сторону.Виливаємо півлітра молока в каструлю і ставимо на плиту на середній вогонь.Важливо: як тільки молоко почне закипати, зменшуємо вогонь! Беремо манну суміш тонкоюцівкою всипаємо її в молоко. В процесі перемішуємо ложкою, щоб не утворилося грудок.Після того, як ми поєднали крупу змолоком, робимо середній вогонь на плиті.Безперервно помішуємо манну кашу протягом 5-10 хвилин, щоб вона була рівномірно густий і не підгоріла до дна каструлі.Коли манна каша загусне, вимикаємо плиту,накриваємо каструлю кришкою і даємо постояти 5 -10 хвилин. < /p>Поради: – Манну кашу можна варити на згущеному молоці.Попередньо розбавивши згущене молоко у воді.Але тоді зверніть увагуцукор вже ми не додаємо.Інакше вийде дуже приторно солодка страва.А так, згущене молоко розбавляють до потрібноїконсистенції і потрібного смаку.'
    },
    {
        type: 'bakes',
        title: 'Рогалики',
        // photo: 'bagels',
        ingredients: [
            'Борошно - 1кг', 'Молоко/Кефір/Сметана/Йогурт – 0,5 літра', 'Дріжджі – 100 гр (мокрих) або 2.5 ч.л (сухих)', 'Масло вершкове/ Маргарин – 400 гр.',
        ],
        receipt: ' Дріжджі розмішати з сметаною. Якщо сухі дріжджі - то розмішати з борошном. Маргарин натерти на терці або розплавити на сковорідці (розплавлений маргарин охолодити до кімнатної температури)        Змішати все разом.Почекати 30 хв.Розкачати на стільниці кульки тіста, розмір кульок повинен бути таким, щоб кожна кулька вміщалась у двохлодонях.Товщина розкачаного тіста повинна бути 5 мм. Нарізати розкачане тісто на 8 частин.Накласти варення з яблук або вишніПекти при температурі 200 градусів цельсію у духовці.Колір готових рогаликів повинен бути світло коричнивим. '
    },
    {
        type: 'firstDishs',
        title: 'Суп цибулевий',
        ingredients: [
            'Картопля - 6шт', 'Морква - 2шт', 'Цибуля - 3шт (великі)', 'Олія - 100мл',
        ],
        receipt: ' На килячу воду кидаємо дві порізані кружочками мркви та дві цілі цибулі. За десять хвилин кидаємо кубіком порізану картоплю усю. Паралельно готуємо зажарку (Готуємо зажарку: на сковорідку лиємо олію, кидаємо дрібно порізану цибулю. Чекаємо поки цибуля засмажиться і тоді додаємо натерті 2 морквини). За двадцять п`ять хвилин після кидання картоплі додаємо зажарку. П`ять хвилин ще кипить і виключаємо. Накриваємо кришкою та даємо настояться 15 хв.'
    },
    {
        type: 'appetizers',
        title: 'Печінковий паштет',
        // photo: 'liverPate',
        ingredients: [
            ' Печінка - 500 г', ' Вершкове масло - 150 г', 'Цибуля - 1шт', 'Морква - 1шт', 'Корінь петрушки - 1шт', 'Сіль і перець', 'Лавровий листок - 1шт', 'Духмяний перець і мускатний горіх'
        ],
        receipt: ' Моркву, петрушку та цибулю почистити та подрібнити. Печінку помити, почистити від плівок, порізати. Обсмажити це все, а тоді тушити до готовності, додавши лавровий лист та пару горошин духмяного перцю, час від часу підливаючи води. Поки печінка тепла, пропустити її через м’ясорубку (лавровий листок треба вийняти). Печінку не можна пересмажити, бо інакше паштет не вийде ніжним. Перетерту печінку збити з маслом – для цієї цілі добре використовувати блендер. Тут же додати за смаком сіль, перець, натертий мускатний горіх. Готовий паштет викладіть у форму і поставте в холодильник. Смачного!'
    },
    {
        type: 'salads',
        title: 'Салат з огірків та медовою заправкою',
        // photo: 'cuces',
        ingredients: [
            '0,8 кг огірків, почистити, порізати кубиками', '1/4 цибулини, порізати кубиками', '3 гілки кропу, дрібно порізати', 'Сіль до смаку', '60 мл оливкової олії', '1 ч.л. меду', '1 ст.л. не гострої гірчиці', '2 ст.л. яблучного оцту', '1 / 2 ч.л.гранульованого часнику(або 1 зубець свіжого, вичавити)'
        ],
        receipt: '1) Огірки, кріп та цибулю помістити в салатну миску, перемішати. 2) Усі інгредієнти для заправки змішати в невеликому посуді й добре вимішати. Додати до салату й перемішати все разом. Залишити на 10 хвилин маринуватись. Можна залишити навіть на добу. '
    },
    {
        type: 'garnishs',
        title: 'Картопля по селянськи',
        // photo: 'potato',
        ingredients: [
            '4 картоплини, почистити, крупно порізати', '150 грам шпондеру, крупно порізати', '1 солодкий перець, порізати смужками', '100 грам печериць, помити, крупно порізати ', '1 цибулина, почистити, порізати грубими півкільцями', '4 зубці часнику, вичавити', '1/4 пучка зелені петрушки для подачі', 'сіль і перець'
        ],
        receipt: ' 1) У сковорідку з товстим дном помістити бекон і поставити на середній вогонь. Смажити, помішуючи, поки бекон підрум`яниться й витопиться якнайбільше жиру. 2) Бекон перекласти на чисту тарілку, а в сковорідку викласти картоплю й смажити, час від часу помішуючи, до пів готовності картоплі. 3) До картоплі додати перець й посолити все разом. Смажити овочі, помішуючи, поки перець почне м`якнути. 4) Додати печериці та цибулю й смажити, часто помішуючи, поки випарує сік, що пустять гриби та цибуля зм`якне. 5) Додати часник та повернути бекон у сковорідку з овочами, добре перемішати, прогрівати все разом ще хвилини дві й зняти з вогню. Приправити чорним перцем до смаку.6) Посипати картоплю з овочами зеленню петрушки і подавати до столу.'
    },
    {
        type: 'desserts',
        title: 'Торт із шпинату',
        // photo: 'cakeSpinate',
        ingredients: [
            'Шпинат	300 г', 'Цукор	100 г', 'Борошно	100 г', 'Ванільний цукор	50 г', 'Вершкове масло	70 г', 'Яйце	1 шт', 'Лимонний сік	1 ст.л.', 'Цедра лимона	1 ч.л.', 'Разпушувач	1 ч.л.', ' ', 'Для крему:', 'Цукрова пудра	3 ст.л.', 'Желатин	2 ст.л.', 'Вершки	150 мл', 'Сир	200 г'
        ],
        receipt: 'Розігріваємо духовку до 170ºС. Шпинат бланшуємо з додаванням лимонного соку хвилину, відкидаємо на сито, а потім подрібнюємо з вершковим маслом, яйцем, лимонною цедрою і цукром в пюре. Додаємо сухі інгредієнти: борошно змішане з розпушувачем. Замішуємо тісто з консистенцією, яку має дуже густа сметана. Викладаємо тісто в роз’ємну форму, застелену пергаментом і випікаємо протягом 30 хвилин. Дістаємо корж і залишаємо на пару хвилин.Розрізаємо корж уздовж на дві частини. Для крему: збиваємо вершки з перетертим сиром і цукровою пудрою. Додаємо набряклий і розтоплений на водяній бані желатин і перемішуємо. Готові коржі змащуємо кремом.Прикрашаємо торт ягодами та кремом.'
    },
    {
        type: 'drinks',
        title: 'Квас білий',
        // photo: 'kvass',
        ingredients: [
            'Лимон 3 шт', 'Вода 8л', 'Цукор 1л', 'Пресовані дріжджі 10г'
        ],
        receipt: 'Для початку лимони потрібно обшпарити окропом і нарізати кубиками. Лимони беріть соковиті та стиглі, тоді квас буде мати насичений аромат. Далі візьміть каструлю і перекладіть в неї нарізані лимони, додайте цукор і два літри води. Каструлю поставте на плиту, увімкніть вогонь і доведіть масу до кипіння. Потім необхідно лимонний сироп проварити 20 хвилин. Поки вариться сироп, в іншій каструлі кип`ятимо шість літрів води.Коли сироп звариться, зніміть його з вогню і перелийте в каструлю з кип`яченою водою. Плиту вимкнути та дати рідині охолонути до температури 35-40 градусів. Додаємо свіжі пресовані дріжджі, якщо таких немає, можна замінити їх сухими, тоді їх кількість зменшити втричі.Все перемішуємо протягом 5 хвилин. Важливо щоб у квас не потрапили кісточки та цедра лимона. Тому необхідно процідити наш квас, візьміть друшляк, поставте його в миску і застеліть марлею. Проціджений квас розливаємо в пластикові пляшки. Пляшки залишаємо за кімнатної температури на дві години, у жодному разі не можна ставити їх на сонці. Через дві години пляшки перемістити в холодильник, охолодити до необхідної температури та можна пити. Наш незвичний квас готовий.  '
    },
    {
        type: 'fish',
        title: 'Скумбрія печена',
        // photo: 'scumbria',
        ingredients: [
            'Скумбрія свіжоморожена 2 шт', 'Лимон 1 шт', 'Цибуля ріпчаста 1 шт', 'Сметана 1 ст.л', 'Приправа для риби 1 ч.л', 'Сіль 2 щіпки', 'Чорний мелений перець 2 щіпки'
        ],
        receipt: 'Скумбрію розморозьте, але не до кінця, так її буде зручніше нарізати і почистити. У тушок відріжте голову і хвіст, акуратно зробіть поздовжній надріз на череві, дістаньте нутрощі. Очищені тушки промийте всередині і зовні, потім промокніть вологу серветками. Наріжте рибу на 5 порційних шматочків. Викладіть шматочки на фольгу, сформувавши з неї неглибокі човники, щоб не витікав сік під час запікання.Зверху рибу присипте меленим перцем та сіллю. Сметану змішайте зі спеціями до риби, отриманий соус нанесіть на кожен шматочок всередині і зовні. Цибулю очистіть, наріжте кільцями середньої ширини, покладіть по одному шматку між кожним шматком риби. Лимон промийте, також наріжте кружальцями, помістіть поряд з цибулею.Шматочки лимона та цибулі можна покласти під рибу. Фольгу з рибою перекладіть на деко, потім до розігрітої до 200 градусів духовки. Запікайте рибу, не накриваючи фольгою, наступні 30 хвилин до готовності, потім ще 10 хвилин за температури 180 градусів, щоб риба набула красивої рум`яної скоринки. До столу страву можна подати прямо у фользі  '
    },
    {
        type: 'meat',
        title: 'Бігус',
        // photo: 'bigus',
        ingredients: [
            'Капуста білокачанна – 500 грам', 'Капуста квашена – 400 г', 'Цибуля ріпчаста великого розміру – 1 штука', 'Морквина великого розміру – 1 штука', 'Ребра свинячі свіжі – 400 г', 'Чорнослив без кісточки – 150 грам', 'Сіль, перець і лавровий лист - 3шт'
        ],
        receipt: 'Для початку очищаємо моркву від шкірки і добре промиваємо під проточною водою. На обробній дошці з допомогою великої терки шаткуємо інгредієнт і відразу ж після цього – перекладаємо подрібнений овоч в тарілку. Цибуля ножем очищаємо від лушпиння і добре промиваємо під проточною водою. Потім на обробній дошці розрізаємо інгредієнт на дві половинки, і кожен шматочок подрібнюємо за допомогою ножа на тонку соломку. Оброблений компонент перекладаємо в чисту тарілку. Руками знімаємо перший шар листя капусти, після – промиваємо під проточною водою. На обробній дошці з допомогою ножа шаткуємо інгредієнт на середню соломку. Увага: для цього використовуємо гострий ніж. Тільки будьте вкрай обережні, щоб не порізатися. І для цієї страви немає необхідності подрібнювати капусту на дуже тоненькі смужки або дуже великі. Ідеальна середня товщина. За рахунок того, що всі інгредієнти премешаются і дадуть сік, ми отримаємо ніжний смак і аромат. Подрібнений компонент перекладаємо в чисту глибоку тарілку. Бігус – це надзвичайно смачне блюдо, яке готується на соках і жирі власних інгредієнтів. Ось тому додавати воду або олію є зайвим дією і витратою продуктів. За рахунок цього варто звернути увагу на вибір м`ясного інгредієнта.Важливо: обов`язково купуємо свіжі свинячі ребра, які ще не були піддані заморожуванню. Також краще вибирати інгредієнт з кісточками і хрящами, який йде довгою стрічкою, зрізаної поперек ребра. Так буде простіше і краще працювати з м`ясним компонентом страви.Отже, на обробній дошці з допомогою ножа нарізаємо свинячі ребра на невеликі шматочки таким чином, щоб на кожному шматочку була кісточка. На сухофруктах зазвичай накопичується багато пилу і бруду. Ось тому намагайтеся практично завжди, коли готуєте страви, обробляти такі продукти. У зв`язку з цим добре промиваємо чорнослив під проточною теплою водою.Потім викладаємо його в глибоку піалу і заливаємо компонент гарячою водою.Залишаємо на 5 хвилин, щоб він розм`як і ще раз пройшов дезінфекцію за рахунок високої температури води. І після цього зливаємо воду, ще раз промиваємо сухофрукти під проточною теплою водою і залишаємо в піалі на деякий час в стороні. А щоб інгредієнт страви за цей час не підсох при взаємодії з повітрям, посуд можна обмотати харчовою плівкою. В глибокий сотейник або казанок викладаємо шматочки свинячих ребер. Ставимо ємність на середній вогонь і, при постійному помішуванні дерев`яною лопаткою головного інгредієнта, обсмажуємо м`ясо до темно-золотистого кольору і утворилася на поверхні золотистої скоринки протягом 10-15 хвилин. Увага: ні в якому разі не накриваємо сотейник кришкою, щоб м`ясні реберця змогли обсмажитися і виділити жир, який так необхідний для подальшого приготування бігуса і незабутнього аромату.По закінченню відведеного часу додаємо до смаженого м`ясного компоненту подрібнену цибулю. Добре все перемішуємо лопаткою і продовжуємо обсмажувати інгредієнти вже до тих пір, поки цибуля не почне підрум`янюватися і не покриватися золотистою скоринкою.Важливо: якщо ви відчуваєте, що м`ясо починає підгоряти, в такому разі можна зробити вогонь трохи менше середнього і постійно помішувати складові частини страви.Тепер додаємо в ємність нашатковану моркву, солимо і перчимо за смаком інгредієнти, додаємо 2-3 лаврових листочка і добре все перемішуємо лопаткою. Смажимо ще 5 хвилин при постійному помішуванні до тих пір, поки морквяний компонент не стане м`яким. Ось і настає важливий момент з інгредієнтом, без якого наш бігус ніякої не бігус! Викладаємо в сотейник квашену капусту, бажано з соком. Добре все перемішуємо лопаткою і ось тепер накриваємо ємність кришкою. Тушкуємо на вогні менше середнього протягом 15 хвилин. Увага: час від часу перемішуємо компоненти страви, щоб вони не підгоріли. По закінченню відведеного часу відкриваємо кришку сотейника і додаємо до наших інгредієнтів нашатковану білокачанну капусту. Цей овоч дуже швидко почне виділяти сік і зменшиться в розмірах. Ось тому не турбуйтеся, якщо вам здається, що подрібненої капусти набагато більше за кількістю, ніж інших інгредієнтів. Знову все добре перемішуємо лопаткою і, накривши кришкою, тушкуємо 1 год. Важливий момент: обов`язково час від часу перемішуємо все добре підручним інвентарем, щоб компоненти бігуса не підгоріли біля основи ємності. Через годину відкриваємо кришку сотейника і додаємо до інгредієнтів оброблений чорнослив. Увага: навіть якщо сухофрукти великі за розмірами, ні в якому разі не нарізайте їх на маленькі шматочки, інакше чорнослив почне розповзатися від високої температури і капустяної кислоти і перетвориться в желеподібну кашку. Все добре перемішуємо дерев`яною лопаткою і тушкуємо інгредієнти бігуса ще 15 хвилин під кришкою.По закінченню цих хвилин вимикаємо конфорку, ще раз все добре перемішуємо лопаткою і, накривши кришкою ємність, залишаємо нашу страву осторонь на 10-15 хвилин настоюватися і просякати соками.'
    },
    {
        type: 'grill',
        title: 'Копчена ковбаса',
        // photo: 'sausage',
        ingredients: [
            'М`ясо свиняче - 4кг', 'М`ясо яловичини - 2кг', 'Сало - 0,5-1 кг( залежно від кількості сала на м`ясі)', 'Сіль - 5 ст.л.', 'Перець чорний - 2ч.л.', 'Вода - 350 мл', 'Коріандр - 1 ч.л', 'Часник - 1,5 головки (роздавити за допомогою часникодавки)', 'Кишка для ковбати - 20 м'
        ],
        receipt: 'М`ясо і сало помолоти на м`ясорубці з великими отворами. Додати усі інші інгрідієнти. Зісмажити на сковорідці котлетку та спробувати на смак. Добре вимішати та поставити в холодильник на 0,5 - 2 доби. За допомогою м`ясорубки фарш запхнути в кишки. Коптити 5 годин '
    },
    {
        type: 'conservations',
        title: 'Компот вишневий',
        // photo: 'cherry',
        ingredients: [
            'Вишні - 400гр', 'Вода 2,8л', 'Цукор - 250гр'
        ],
        receipt: 'Для приготування компоту беремо стиглу вишню, відокремлюємо ягоди від гілочок, складаємо в глибоку миску і заливаємо холодною водою на півгодини. Поки замочується вишня, готуємо банку для консервації (її слід добре помити та прокип`ятити над парою).За півгодини зливаємо воду з вишень і ще раз споліскуємо їх вже у чистій воді, після чого складаємо у підготовлену банку. Окропом заливаємо вишні, накриваємо банку залізною кришкою та залишаємо настоюватися компот до повного охолодження. Коли компот охолоне, зливаємо його з банки назад у каструлю. Додаємо цукор, добре перемішуємо і ставимо кип`ятити(з моменту закипання кип`ятити іще три хвилини). Гарячий компот заливаємо в банку з вишнями, ретельно закриваємо металевою кришкою для консервації і накриваємо банки чимось теплим до повного охолодження. Завдяки такому способу консервації вишні зберігають свою цілісність та корисні властивості. Зберігати компот з вишні потрібно в прохолодному місці, не більше року. '
    }
    
]
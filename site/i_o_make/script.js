arrs={
	commands:{
		new_staff:{out:['login','password','name','passkey'], in:['key','session','role']},  //new
		recovery_staff:{out:['login','password'], in:['key','session','role']},
		in_staff:{out:['key','session'], in:['key','session','role']},
		out_staff:{out:['key','session'], in:['key']},		
		new_pass_staff:{out:['login','password','new_login','new_password'], in:['key','session']},
        read_file:{out:['temp'], in:['key','name_file','txt_file']},
        write_file:{out:['session', 'name_file','txt_file', 'temp'], in:['key','name_file']}, 
        staff_list_read:{out:['session'], in:['key',"[{},{},{}]"]},
        role_list_read:{out:['session', 'key', 'count'], in:['key',"[{},{},{}]"]},
		
		read_staff:{out:['key','session'], in:['key',"[{},{},{}]"]},
		ok:{out:['key','session','key_user', 'action'], in:['key','key_user','perk','name_user']},		
		no_ok:{out:['key','session','key_user', 'action'], in:['key','key_user']},
		list_in:{out:['key','session'], in:['key',"[{},{},{}]"]}, 
		
		
		perk:{out:['key','session','key_user', 'perk'], in:['key','key_user','perk','name_user']},
		
		balance:{out:['key','session'], in:['key','count','balance_old','cost', 'limit']},	
		
		read_msgs:{out:['key','session'], in:['key',"[{},{},{}]"]},	
		write_msg:{out:['key','session', 'to', 'title', 'message'], in:['key','msg_num']},
		
		cost_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},	
        cost_dell:{out:['key','session', 'date'], in:['key','date']},
        cost_add:{out:['key','session', 'date', 'cost_obj'], in:['key','date']},
        
        log_read:{out:['key','session', 'date'], in:['key',"[{},{},{}]"]},
        
        user_list_read:{out:['key','session', 'number'], in:['key',"[{},{},{}]"]},
        user_dell:{out:['key','session', 'key_user'], in:['key', 'key_user']},
        user_dell_all:{out:['key','session'], in:['key']}, 
        

        staff_dell:{out:['key','session', 'key_staff'], in:['key', 'key_staff']},
        staff_dell_all:{out:['key','session'], in:['key']},

        role_write:{out:['key','session', 'role_name', 'role_obj'], in:['key','role_name']},  
        
        settings_calc_read:{out:['key','session'], in:['key',"[{},{},{}]"]},
        settings_calc_edit:{out:['key','session', 'settings_obj'], in:['key']}, 
        

	},
	list_right:[
	        {name:'new_staff', description:'Регистрация сотрудника', right:['new_staff', 'recovery_staff', 'in_staff', 'out_staff', 'new_pass_staff', 'read_file']},
	        {name:'read_staff', description:'Регистрация Входа(Выхода) пользователей', right:['read_staff', 'ok', 'no_ok', 'list_in']}, 
	        {name:'perk', description:'Менять уровень обслуживания пользователей', right:['perk']}, 
	        {name:'balance', description:'Смотреть стоимость услуг сервиса', right:['balance']}, 
	        {name:'write_msg', description:'Писать сообщения сервису', right:['write_msg', 'read_msgs']},
	        {name:'cost_read', description:'Редактировать прайс лист', right:['cost_add', 'cost_dell', 'cost_read']},
	        {name:'log_read', description:'Читать историю посещений', right:['log_read']},
	        {name:'user_list_read', description:'Управлять списоком пользователей', right:['user_list_read', 'user_dell', 'user_dell_all']},  
	        {name:'staff_list_read', description:'Управлять списком сотрудников', right:['staff_list_read', 'staff_dell', 'staff_dell_all', 'role_list_read', 'role_write']},  
	        {name:'settings_calc_edit', description:'Редактировать настройки стоимости', right:['settings_calc_read', 'settings_calc_edit']},
	        {name:'write_file', description:'Писать файлы', right:['write_file']}
	],
	bill:[
	    {type:'names', data:['Операция','Начало','Окончание','Цена','Сумма']},
	    {type:'start', data:['Вход', '12:45:57', '12:45:57', "10", '0']},
	    {type: 'item', data:['Зона 1', '12:45:57', '14:00:00', "10", '45']},
	    {type: 'item', data:['Зона 2', '14:00:00', '15:00:00', "20", '80']},
	    {type: 'item', data:['Зона 3', '15:00:00', '15:21:32', "30", '60']},
	    {type:'stop', data:['Выход', '15:21:32', '15:21:32', "30", '0']},
	    {type:'total', data:['Итого', '185', 'руб']},
    ],
	story:[
	    {type:'names', data:['Операция','Начало','Окончание','Цена','Сумма']},
	    {type: 'item', data:['Зона 1', '12:45:57', '14:00:00', "10", '45']},
	    {type: 'item', data:['Зона 2', '14:00:00', '15:00:00', "20", '80']},
	    {type: 'item', data:['Зона 3', '15:00:00', '15:21:32', "30", '60']}
    ],
    role:[
        ['Название компании', 'ООО "Рога и Копыта"' ],
        ['ИНН', '7804539523' ],
        ['КПП', '780402007' ],
        ['Индекс', '194200' ],
        ['Город', 'Санкт_Петербург' ],   
        ['Адрес', 'ул. Бобруйская д.8 офис 132' ], 
        ['Телефон', '812 542-06-78' ], 
        ['EMail', 'roga@mail.ru' ], 
        ['Кому', 'Иванов Николай Сергеевич' ], 
    ],
    role_format:[
        ['Параметр','div'],
        ['Значение','input', 'text']
    ],
    roles_list:{},
    staff:[
            {key_employee:0, registred:'12-12-2022', name:'Вася', role :'1'},
            {key_employee:1, registred:'12-12-2022', name:'Коля', role :'3'},   
            {key_employee:2, registred:'12-12-2022', name:'Саша', role :'7'}, 
            {key_employee:3, registred:'12-12-2022', name:'Василий Иванивич Солдберг тридцать первый', role :'1'},
            {key_employee:4, registred:'12-12-2022', name:'Коля1', role :'3'},   
            {key_employee:5, registred:'12-12-2022', name:'Саша1', role :'7'}, 
            {key_employee:6, registred:'12-12-2022', name:'Вася2', role :'1'},
            {key_employee:7, registred:'12-12-2022', name:'Коля2', role :'3'},   
            {key_employee:8, registred:'12-12-2022', name:'Саша2', role :'7'}, 
    ],


    count_set:[
		[
			['Единица времения', 'мин', 'unit_time' ],
		],
		[		
			['Округление', 0, 'rounding' ],
			['Стоимость входа', 0, 'cost_in' ],
			['Минимальная стоимость', 0, 'min_cost' ],
			['НДС', 20, 'vat' ],  
			['Базовая стоимость', 1, 'base_cost' ],
		],
		[
			['Валюта', 'руб', 'curency' ], 
 
		]
    ],
    count_set_format:[
        [
            ['Настройка','div'],
            ['Значение','select',2, [["сек", "мин", "час"],["секунда", "минута", "час"]]]
        ],
        [
            ['','div'],
            ['','input', 'number', 2]
        ],
        [
            ['','div'],
            ['','input', 'text', 2]
        ]
    ],

    price_list:[		
		['Серебрянный', '14:00:12', '14.55','check_out', 'petk', 'time', 'cost' ],
		['Золотой', '14:01:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
		['Новый', '14:02:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
		['Серебрянный', '15:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
		['Золотой', '16:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
		['Новый', '17:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
    ],
    price_list_format:[
		['Статус','input', 'list', 4, 'perk'],
		['время','input', 'time', 5],
		['цена','input', 'number', 6],
		['выбрать',  'div', 'dataset','click'],
    ],
 // cost_add, номер, пароль сеанса, {date, [{},{},{}]} 
 

    calendar:{
        '01012020': [
            [
                    ['00:00:00', 10.01],
                    ['10:00:00', 5.01], 
                    ['20:00:00', 20.01],              
            ],
            [
                    ['00:00:00', 20.01],
                    ['10:00:00', 10.01], 
                    ['20:00:00', 40.01],              
            ],
            [
                    ['00:00:00', 5.01],
                    ['10:00:00', 2.01], 
                    ['20:00:00', 10.01],              
            ],
            [
                    ['00:00:00', 5.01],
                    ['10:00:00', 2.01], 
                    ['20:00:00', 10.01],              
            ]
        ]
    },
    perk_list:[
        "золотой",
        "серебрянный",
        "ВИП",
        "новый"
    ],
    decor_list:[
        [
            ['Размер названия', '22' ],
            ['Размер текста', '23' ],
            ['Размер кнопок', '24' ]  
        ],
        [
            ['Шрифт названия', 'Arial' ], 
            ['Шрифт текста', 'Times' ]  
        ],
        [
            ['Цвет названия', '#800080' ],
            ['Цвет текста', '#00FF00' ], 
        ]
    ],
    decor_list_format:[
        [
            ['Настройка','div'],
            ['Значение','input', 'number'] 
        ],
        [
            ['','div'],
            ['', 'select','', [["Arial", "Times", "Unicode"],["Arial", "Times", "Unicode"]]]
        ],
        [
            ['','div'],
            ['','input', 'color']
        ]
    ],
    balance_list:[
        ['Дата начала', '12-10-2020' ],
        ['Количество операций', '5432', 'шт' ],
        ['Цена операции', '0,03', 'руб.' ],
        ['Сумма', '154', 'руб.' ],
        ['Баланс на начало', '154', 'руб.' ],   
        ['Баланс текущий', '154', 'руб.' ], 
    ],
    balance_list_format:[
        ['Параметр','div'],
        ['Значение','div'],
        ['Единицы','div'],        
    ],
    detail:[
        ['Название компании', 'ООО "Рога и Копыта"' ],
        ['ИНН', '7804539523' ],
        ['КПП', '780402007' ],
        ['Индекс', '194200' ],
        ['Город', 'Санкт_Петербург' ],   
        ['Адрес', 'ул. Бобруйская д.8 офис 132' ], 
        ['Телефон', '812 542-06-78' ], 
        ['EMail', 'roga@mail.ru' ], 
        ['Кому', 'Иванов Николай Сергеевич' ], 
    ],
    detail_format:[
        ['Параметр','div'],
        ['Значение','input', 'text']
    ],
    new_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
		[
			['Имя','', 'name' ],
			['Passkey','', 'passkey' ],
		]
    ],
    new_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
		[
			['','div'],
			['','input', 'text',2], 
		]
    ],	
    new_pass_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
		[
			['Новый Логин','','new_login' ],
		],
		[
			['Новый Пароль','', 'new_password' ],
		],
    ],
    new_pass_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
    ],	
    recovery_staff:[			//new
		[
			['Логин','','login' ],
		],
		[
			['Пароль','', 'password' ],
		],
    ],
    recovery_staff_format:[	//new
		[
			['','div'],
			['','input', 'text',2], 		
		],
		[
			['','div'],
			['','input', 'password',2], 		
		],
    ],
    decor:[  //new
        [
            ['Размер названия', '22', 'name_size' ],
            ['Размер текста', '23', 'text_size' ],
            ['Размер кнопок', '24', 'buttons_size' ]  
        ],
        [
            ['Шрифт названия', 'Arial', 'name_font' ], 
            ['Шрифт текста', 'Times', 'text_font' ]  
        ],
        [
            ['Цвет названия', '#800080', 'name_color' ],
            ['Цвет текста', '#00FF00', 'text_color' ], 
        ]
    ],
    decor_format:[		//new
        [
            ['Настройка','div'],
            ['Значение','input', 'number', 2] 
        ],
        [
            ['','div'],
            ['', 'select','2', [["Arial", "Times", "Unicode"],["Arial", "Times", "Unicode"]]]
        ],
        [
            ['','div'],
            ['','input', 'color', 2]
        ]
    ],
	
	price:{
		"2020-01-01":[
			['Серебрянный', '14:00:12', '14.55','check_out', 'petk', 'time', 'cost' ],
			['Золотой', '14:01:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
			['Новый', '14:02:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
			['Серебрянный', '15:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
			['Золотой', '16:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
			['Новый', '17:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ],
		]
	},
	
	outside:[['','alarm','Blocking','Door sensor','Tamper','Login button','Call button','Exit button','Security chain','Busy sensor','External green','External red','External sound','Anxiety','Gateway','Call','Electromagnetic lock','Electromechanical lock','Security','Lock Mode','turn in','turn out','Permission to enter','Exit permission','Relay input','Relay output','Direction relay','Motor','Window sensor','Electrical control','Sensor Sensor 1','Sensor Sensor 2','Sensor Sensor 3','Sensor Sensor 4'],['-','Эвакуация','Блокировка','Датчик двери','Датчик корпуса (Тампер)','Кнопка вход','Кнопка звонок','Кнопка выхода','Цепь охраны','Датчик занятости','Внешний зеленый','Внешний красный','Внешний звук','Тревога','Шлюз','Звонок','Электромагнитный замок','Электромеханический замок','Охрана','Режим Блокировка','Проворот на вход','Проворот на выход','Разрешение на вход','Разрешение на выход','Реле вход','Реле выход','Реле направления','Мотор','Датчик окна','Электроконтроль','Датчик Сенсор1','Датчик Сенсор2','Датчик Сенсор3','Датчик Сенсор4']],
	z5rnet:[[ 'ZUMM','0'],[ 'ZUMM','1К8'],[ 'ZUMM','3К6'],[ 'TM','DDATA 0'],[ 'TM','DDATA 1'],[ 'TM','0'],[ 'EXIT','DDATA 0'],[ 'EXIT','DDATA 1'],[ 'EXIT','0'],[ 'LED','0'],[ 'LED','1К8'],[ 'LED','3К6'],[ 'LOCK','0'],[ 'DOOR','0'],[ 'DOOR','1К8'],[ 'DOOR','3К6']],
	stand:[[ 'IO1'],[ 'IO2'],[ 'IO3'],[ 'IO4'],[ 'IO5'],[ 'IO6'],[ 'IO7'],[ 'IO8'],[ 'IO9'],[ 'IO10'],[ 'IO11'],[ 'IO12'],[ 'IO13'],[ 'IO14'],[ 'IO15'],[ 'IO16'],[ 'IO17'],[ 'IO18'],[ 'IO19'],[ 'IO20'],[ 'IO21'],[ 'IO22'],[ 'IO23'],[ 'IO24'],[ 'IO25'],[ 'IO26'],[ 'IO27'],[ 'IO28'],[ 'IO29'],[ 'IO30'],[ 'IO31'],[ 'IO32'],[ 'OUT1'],[ 'OUT2'],[ 'OUT3'],[ 'OUT4'],[ 'OUT5'],[ 'OUT6'],[ 'OUT7'],[ 'OUT8'],[ 'OUT9'],[ 'OUT10'],[ 'OUT11'],[ 'OUT12'],[ 'OUT13'],[ 'OUT14'],[ 'OUT15'],[ 'OUT16'],[ 'IN1'],[ 'IN2'],[ 'IN3'],[ 'IN4'],[ 'IN5'],[ 'IN6'],[ 'IN7'],[ 'IN8'],[ 'IN9'],[ 'IN10'],[ 'IN11'],[ 'IN12'],[ 'IN13'],[ 'IN14'],[ 'IN15'],[ 'IN16']],

	controllers_format:[		//new
		['Контакт','div'],
		['Щуп','div']
    ],
    contr_format:[		//new
		['Контакт','div'],
		['Щуп','div'],
        ['Переферия', 'select','0'],
    ],
    stand_format:[		//new
		['Контакт','div'],
        ['Вход/Выход', 'select','0', [["out", "in"],["Выход", "Вход"]]],
        ['Переферия', 'select','0'],
    ],
};

let test={
	cnt(){
		control.on_on(['main_menu', 'table_centre'], 0);
		control.write_arr(arrs.z5rnet, arrs.controllers_format, links.table.centre, "z5r");
	},
	cnt1(){
		control.on_on(['main_menu', 'table_centre'], 0);
		control.write_arr(arrs.z5rnet, arrs.contr_format, links.table.centre, "z5r");
	},
	cnt2(){
		control.on_on(['main_menu', 'table_centre'], 0);
		arrs.contr_format[2].push(arrs.outside);
		control.write_arr(arrs.z5rnet, arrs.contr_format, links.table.centre, "z5r");
	},
	cnt3(){
		control.on_on(['main_menu', 'table_centre'], 0);
		arrs.stand_format[2].push(arrs.outside);
		control.write_arr(arrs.stand, arrs.stand_format, links.table.centre, "z5r");
	}
};


let abonent={

};  //new


let comm={ //new
	
	ax(obj, func, url){//стандартная функция отправки сообщения
		let req=new XMLHttpRequest();
		req.addEventListener('load', answer[func]);//привязали контекст
		req.open('POST', url, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.responseType = 'text';
		let str_obj=JSON.stringify(obj);
		req.send(str_obj);
	},
	
    show_ax(e) {//стандартная функция получения сообщения
        let data=e.target;
        if(data.status==200){
            let obj=JSON.parse(data.response);
			return obj;
		}
        if(data.status>399){

		}
    },
	
	write_ls(name, obj){ //пишем в locolstorage 
		if(typeof obj =="object"){
			obj=JSON.stringify(obj);
		}
		let pth=abonent.domain+'_user_'+name;
		localStorage[pth]=obj;
	},
	
	read_ls(name, type=1){ //читаем из  locolstorage
		let pth=abonent.domain+'_user_'+name;
		if(localStorage[pth]){
			if(type){
				return JSON.parse(localStorage[pth]);	
			}else{
				return localStorage[pth];
			}
		}else{
			return {};
		}
	}

};

let links={ //связываем действия пользователя с функциями 
	group:{}, //блоки информации показать/скрыть	new
	click:{}, //кнопки		new
	table:{}, //место для вывода таблиц 
	felds:{},  //поля для ручного ввода данных new
	selects:{}, //элементы selekt new
//	many:{},
	main_menu:{},
	tables:{},
	titles:{},
    call_func (e){ 			//new
		control.fon_move();
        let link=e.target;
        let name=link.dataset.click;
        if(name){ //функции по клику
			if(name in arrs.commands){
				control.check_comand(name);
				return;
			}
			if(link.dataset.many){
				name=link.dataset.many;
				if(name in arrs.commands){
					control.check_comand(name);
				}
				return;
			}
			click[name](link); 
        }
    },
    call_func_chng (e){		//new
		//если тип passvord то не сохранять
		control.fon_move();
        let link=e.target;
		let name_func=link.dataset.name_func;
		if(name_func){  // указана функция
			control[name_func](link); 
			return;
		}
		let nodeName_patent=link.parentNode.nodeName; // таблица
		if(nodeName_patent=='TD'){
			if(link.type!='password'){
				let table_name=link.parentNode.parentNode.parentNode.dataset.name; // tтаблица
				let number=nodeName_patent=link.parentNode.dataset.number; //колонка
				let row=link.parentNode.parentNode.dataset.row; //ряд
				let obj_row=link.parentNode.parentNode.dataset.obj_row;  //ряд в объекте (если двух уровневая таблица)
				if(!links[table_name].multi){ //таблица одноуровневая
					links[table_name].arr[row][number]=link.value;
				}else{
					links[table_name].arr[obj_row][row][number]=link.value;
				}
			}
			control.write_temp_table(link.parentNode.parentNode.parentNode); //пишем в temp значение всех полей таблицы
		}
    }
};

let temp={};  //new

let click={		//new
	login(link){	
		console.log('login');
		temp={};
		control.on_on(['login_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	stafs(link){
		console.log('stafsn');
		control.on_on(['staff_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		control.check_comand("staff_list_read");
		control.check_comand("role_list_read");
		
    },
	service(link){
		console.log('service');
		control.on_on(['service_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	price(link){
		console.log('price');
		control.on_on(['price_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	manager(link){
		console.log('manager');
		control.on_on(['manager_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	clients(link){
		console.log('clients');
		control.on_on(['clients_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
    },
	in(link){	
		console.log('in');
		control.on_on(['login_menu', 'main_menu'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		//control.write_arr(arrs.in_staff, arrs.in_staff_format, links.table.centre, 'in_staff', multi=1);
		//links.click.send.dataset.many='in_staff';
		control.check_comand('in_staff');
    },	
	recovery_staff_open(link){	
		console.log('recovery_staff');
		control.on_on(['login_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		temp={};
		control.write_arr(arrs.recovery_staff, arrs.recovery_staff_format, links.table.centre, 'recovery_staff', 1);
		links.click.send.dataset.many='recovery_staff';
    },
	new_staff_open(link){	
		console.log('new_pass_open');
		control.on_on(['login_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		temp={};
		control.write_arr(arrs.new_staff, arrs.new_staff_format, links.table.centre, 'new_staff', 1);
		links.click.send.dataset.many='new_staff';
    },
	new_pass_staff_open(link){	
		console.log('new_pass_open');
		control.on_on(['login_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.login.dataset.choose=1;
		temp={};
		control.write_arr(arrs.new_pass_staff, arrs.new_pass_staff_format, links.table.centre, 'new_pass_staff', 1);
		links.click.send.dataset.many='new_pass_staff';
    },
	out(link){
		console.log('out');
		control.on_on(['main_menu']); 
		abonent.key='';
		abonent.session='';
		abonent.login='';
		temp={};
		comm.write_ls('abonent','');
    },
	decor(link){
		console.log('decor');
		control.on_on(['main_menu', 'service_menu', 'table_centre']); 
		link.dataset.choose=1;
		links.main_menu.service.dataset.choose=1;
		temp={};
		control.write_arr(arrs.decor, arrs.decor_format, links.table.centre, 'decor', 1);
		links.click.send.dataset.many='write_file';
		links.click.send.dataset.name_file='decor';
		control.write_temp_table(links.table.centre);
    },
	count_set_open(link){	
		console.log('count_set');
		control.on_on(['price_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.price.dataset.choose=1;
		temp={};
		control.write_arr(arrs.count_set, arrs.count_set_format, links.table.centre, 'count_set', 1);
		links.click.send.dataset.many='count_set';
		control.write_temp_table(links.table.centre);
    },
	price_list_open(link){	
		console.log('price_list');
		control.on_on(['price_menu', 'main_menu', 'table_centre', 'delete', 'insert', 'price_date'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.price.dataset.choose=1;
		temp={};
		if(!arrs.price[links.felds.date.value]){
			arrs.price[links.felds.date.value]=[];
		}
		control.write_arr(arrs.price[links.felds.date.value], arrs.price_list_format, links.table.centre, 'price', 0);
		links.click.send.dataset.many='price_list';
		control.write_temp_table(links.table.centre);
    },
	past(){
		let date=links.felds.date.value;
			if(!arrs.price[date]){
				arrs.price[date]=[];
			}
		arrs.price[date]=control.past(links.price);
	},
	role_open(link){	
		console.log('role');
		control.on_on(['staff_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.stafs.dataset.choose=1;
		temp={};
		control.write_arr(arrs.role, arrs.role_format, links.table.centre, 'role', 0);
		links.click.send.dataset.many='role';
		control.write_temp_table(links.table.centre);
    },
	detail(link){	
		console.log('detail');
		control.on_on(['service_menu', 'main_menu', 'table_centre'], link);  //, 'login_manual',  'main_manual'
		link.dataset.choose=1;
		links.main_menu.service.dataset.choose=1;
		temp={};
		control.write_arr(arrs.detail, arrs.detail_format, links.table.centre, 'detail', 0);
		links.click.send.dataset.many='detail';
		control.write_temp_table(links.table.centre);
    },
    check_in(link){
        link.dataset.click='check_out';
        //if(link.parentNode.dataset.right){
        //    arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=0; }

    },
    check_out(link){
        link.dataset.click='check_in';
			//if(link.parentNode.dataset.right){
			//    arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=1;}
    },
	delete(link){
		let date=links.felds.date.value;
		let arr=links.price;
		arrs.price[date]=control.edit_arr(arr, 'dell', control.take_select(links.table.centre),'');
		arr=arrs.price[date];
		links.price=arr;
		control.write_arr(arr, arrs.price_list_format, links.table.centre, 'count_set', 0);
    },
	insert(link){
		let date=links.felds.date.value;
		let item=['Новый', '17:00:12', '14.55', 'check_out', 'petk', 'time', 'cost' ];
		let arr=links.price;
		arrs.price[date]=control.edit_arr(arr, 'insert', control.take_select(links.table.centre), item);
		arr=arrs.price[date];
		links.price=arr;
		control.sort_price(arr);
		control.write_arr(arr, arrs.price_list_format, links.table.centre, 'count_set', 0);
		console.log(arr);
    },

};

let answer={  //new
	new_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	new_pass_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	recovery_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения 
 		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	in_staff(e){
		let obj1=comm.show_ax(e);
		// получаем массив преобразуем его в объект и отправляем его в раздачу полей  control.answer(obj)
		let obj={};
		if(Array.isArray(obj1)){
			obj.key=obj1[0];
			obj.session=obj1[1];
			obj.role=obj1[2];
		}else{
			obj=obj1;
		}
		control.answer(obj);//раздаем поля по местам хранения  
		control.on_on([ 'main_menu']);  //, 'login_manual',  'main_manual'
	},
	
};
let control={
	write_temp_table(table){ //пишем в temp значение всех полей таблицы		new
		let list=table.querySelectorAll('input');
		for(let i=0; i<list.length; i++){
			temp[list[i].dataset.name]=list[i].value;
		}
		list=table.querySelectorAll('select');
		for(let i=0; i<list.length; i++){
			temp[list[i].dataset.name]=list[i].value;
		}
	},
	fon_move(){  			//new
        let rand_x=Math.floor(Math.random() * 40) +30;
        let rand_y=Math.floor(Math.random() * 40) -20;
        document.documentElement.style.setProperty('--position_fon_x', rand_x+'%');
        document.documentElement.style.setProperty('--position_fon_y', rand_y+'%');
	},
	check_comand(name){  //new
		let obj={};
		let felds=arrs.commands[name].out;
		if(felds.includes('temp')){
			obj.session=abonent.session;
			obj.name_file=name;
			let asd={};
			for(let i in temp){
				asd[i]=temp[i];
			}
			obj.txt_file=JSON.stringify(asd);
		} else{
			for(let i in felds){
				if(felds[i] in links.felds){//дописываем поля из felds = страница
					obj[felds[i]]=links.felds[felds[i]].value;
				}
				if(felds[i] in abonent){//дописываем поля из abonent
					obj[felds[i]]=abonent[felds[i]];
				}
				if(felds[i] in temp){
					obj[felds[i]]=temp[felds[i]];
				}
			}
		}
		url='../'+name;
		comm.ax(obj, name, url);
	},	
	write_arr(name_obj, name_format, parent, name, multi=0){  //new
	    //имя массива, формат массива, место вставки, имя ссылки, вложения
	    if(!links.sets){
	        links.sets={};
	    }
	    parent.innerHTML='';
	    parent.dataset.name=name;
	    let fnk=function(obj, format, parent){ 
    		if(!format.length){ //создаем формат, если его нет
    			for (let i=0; i<obj[0].length; i++){
    				format[i]=['','div'];
    			}
    		}
    		let flg=0;
    		for (let i=0; i<format.length; i++){//проверяем наличее названий 
    			if(format[i][0]){
    				flg=1;
    			}
    			if(format[i][2]=='list'){
    			    links.sets[format[i][4]]=new Set();
    			}
    		}
    		if(flg){
    			let row = document.createElement('tr');
    			for (let j=0; j<format.length; j++){
    				let name =document.createElement('th');
    				if(format[j][0]){
    				    name.innerText=format[j][0];
    				} else{
    				    name.innerText='column '+j;
    				}
    				row.append(name);
    			}
    		    parent.append(row);
    		}
    		for (let j=0; j<obj.length; j++){
    			let row = document.createElement('tr');
    			for (let i=0; i<format.length; i++){
    				let kol =document.createElement('td');
    				let kol_blk;
    				if(format[i][1]){
    					kol_blk =document.createElement(format[i][1]);
    					kol.append(kol_blk);
    				} else {
    					kol.innerText=obj[j][i];
    				}
    				if(format[i][2]){
    				    if(format[i][2]=='list'){
                            kol_blk.setAttribute('list',format[i][4]);
                            links.sets[format[i][4]].add(obj[j][i]);
    				    }else{
    					    kol_blk.type=format[i][2];
    				    }
    					kol_blk.value=obj[j][i];
    					if(obj[j][format[i][3]]){
    					   kol_blk.dataset.name= obj[j][format[i][3]];
    					}
    				} 
					if(obj[j][format[i][3]]&&format[i][1]=='div'){
					   kol_blk.dataset.name= obj[j][format[i][3]];
					}
    				if(format[i][1]=='select'&&format[i][3]){
    					for (let k=0; k<format[i][3][1].length; k++){
    						let option;
    						option = new Option(format[i][3][1][k], format[i][3][0][k]);
    						kol_blk.append(option);
    					}
    					if(obj[j][i]){
    						kol_blk.value=obj[j][i];
    						//kol_blk.value=format[i][3].indexOf(obj[j][i]);
    					}
    					if(obj[j][format[i][2]]){
    					   kol_blk.dataset.name= obj[j][format[i][2]];
    					}
    				}
    				if(format[i][1]=='div'){
    				    if(format[i][2]=='dataset'&&format[i][3]){
    				       kol_blk.dataset[format[i][3]]=obj[j][i]; 
    				    } else{
    				        kol_blk.innerText=obj[j][i];
    				    }
    				}
    				if(format[i][1]=='img'){
    				   kol_blk.src=obj[j][i];
    				}
    				row.append(kol);
    				kol.dataset.number=i;
    			}
    			row.dataset.row=j;
    			if(multi){
    			    row.dataset.obj_row=m;
    			}
    			parent.append(row);				
    		}
    		for(let i in links.sets){
    		    let lst=document.createElement('datalist');
    		    lst.id=i;
    		    for (let value of links.sets[i]){
    		        let op=document.createElement('option');
    		        op.value=value;
    		        lst.append(op);
    		    }
    		    parent.append(lst);
    		}
	    };
	    let obj;
	    let format;
	    let m=0;
	    if(multi){
			for (m=0; m<name_obj.length; m++){
				format=name_format[m];
				obj=name_obj[m];
				fnk(obj, format, parent);
			} 
	    } else{
			format=name_format;
			obj=name_obj;
			fnk(obj, format, parent);
	    }
	    links[name]={};
	    links[name].arr=name_obj;
	    links[name].format=name_format;
	    links[name].multi=multi;
	},
	answer(obj){			//new
		let table_temp={};
		if(temp.table){
			let list =temp.table.querySelectorAll('div[data-name]');
			for(let i=0; i<list.length; i++){
				table_temp[list[i].dataset]=list[i];
			}
		}
		//перебираем места хранения полей
		for(let i in obj){
			if(i in abonent){
				abonent[i]=obj[i];
			}
			if(i in links.felds){
				links.felds[i]=obj[i];
			}
			if(i in table_temp){
				table_temp[i]=obj[i];
			}
		}
		comm.write_ls('abonent', abonent);
	},

	take_select(obj){		//new
		let rows=[];
		let list=obj.querySelectorAll('div[data-click="check_in"]')
		for(let i=0; i<list.length; i++){
			rows[i]=list[i].parentNode.parentNode.dataset.row;
		}
		return rows;
	},
	
	edit_arr(arr, doing, list, first=''){  //arrs.price_list, 'insert', control.take_select(links.table.centre), [1,2,3]	new
		let new_arr=[];
		if(list.length){
			for(let i=0; i<arr.length; i++){
				if(list.includes(String(i))){
					if(doing=='insert'){
						new_arr.push(arr[i]);
						new_arr.push(arr[i]);
					}
				} else {
					new_arr.push(arr[i]);
				}
			}
		}else{
			for(let i=0; i<arr.length; i++){
				new_arr.push(arr[i]);
			}
			if(first){
				new_arr.push(first);
			}
		}
		return new_arr;
	},
	past(arr){
		let new_arr=[];
		for(let i=0; i<arr.length; i++){
			new_arr.push(arr[i]);
		}
		return new_arr;
	},

	sort_price(arr){
		function cmpr(a, b) {
		  if (a[0] > b[0]) return 1;
		  if (a[0] == b[0]) return 0;
		  if (a[0] < b[0]) return -1;
		}
		function cmpr1(a, b) {
		  if (a[1] > b[1]) return 1;
		  if (a[1] == b[1]) return 0;
		  if (a[1] < b[1]) return -1;
		}
		//arr.sort( (a, b) => a[1] - b[1] );
		arr.sort( cmpr1);
		arr.sort( cmpr);
	},
	
	write_bill(bill, parent){//рисуем объект bill
	    let blocks;
        for(let i in bill){ //список строк
            if(bill[i].type=='names'){
                //console.log('names '+bill[i].data.length);
                blocks=control.write_col(bill[i].data, parent); //список колонок
            }
            if(bill[i].type=='start'||bill[i].type=='stop'||bill[i].type=='item'){ 
                if(blocks){
                    for(let j in bill[i].data){ //перебираю колонки
                        let blk_item=document.createElement('div');
            	        blk_item.className='desc';
            	        blk_item.innerText=bill[i].data[j];
                        blocks.children[j].children[1].append(blk_item);
                    }
                }
            }
            if(bill[i].type=='total'){
                //console.log('total '+bill[i].data.length);
                let blk_total=parent.children[1];
                for(let j in bill[i].data){
                    let blk_item=document.createElement('div');
        	        blk_item.className='desc';
        	        blk_item.innerText=bill[i].data[j];
                    blk_total.append(blk_item);
                }
                
            }
        }		
	},
	write_col(names, parent){
	    parent.innerHTML='';
	    let blk_wind=document.createElement('div');
	    blk_wind.className='five';
	    parent.append(blk_wind);
	    let blk_total=document.createElement('div');
	    blk_total.className='two';
	    parent.append(blk_total);
	    for(let i in names){
	        let blk_column=document.createElement('div');
	        blk_column.className='three';
	        blk_column.dataset.col=i;
	        blk_wind.append(blk_column);
	        let blk_name=document.createElement('div');
	        blk_name.className='desc';
	        blk_name.innerText=names[i];
	        blk_column.append(blk_name);
	        let blk_items=document.createElement('div');
	        blk_items.className='three';
	        blk_items.dataset.items=i;
	        blk_column.append(blk_items);
	    }
	    return blk_wind;
	},
    //open - close  block
    stafs(link){
		console.log('stafs');
		control.on_on(['staff_menu', 'manual_staff'], link);
    },
    service(link){
		console.log('service');
		control.on_on(['service_menu', 'manual_service'], link);
    },
    price(link){
		console.log('price');
		control.on_on(['price_menu', 'manual_price'], link);
    },
    manager(link){
		console.log('manager');
		control.on_on(['manager_menu', 'manual_manager'], link);
    },
    clients(link){
		console.log('clients');
		control.on_on(['clients_menu', 'manual_clients'], link);
    },

	role(link){
		console.log('role');
		control.on_on(['staff_menu', 'manual_staff', 'role', 'manual_login', 'manual_role'], link);
		link.dataset.choose=1;
		control.write_select(arrs.roles_list, links.selects.role);
		let blk=links.blocks.role.querySelector('.table');
		control.write_list_right(arrs.roles_list[0].list, blk);
		blk.dataset.select=0;
    },
    role_select(e){
        let link=e.target;
        let blk=links.blocks.role.querySelector('.table');
        control.write_list_right(arrs.roles_list[link.value].list, blk);
        blk.dataset.select=link.value;
    },
    count_set(link){
		console.log('count_set');
		let blk=links.blocks.count_set.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'count_set', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_count_set(arrs.count_set_list, blk);
    },
    perk_list(link){
		console.log('perk_list');
		let blk=links.blocks.perk_list.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'perk_list', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_perk_list(arrs.perk_list, blk);
    },
    price_list(link){
		console.log('price_list');
		let blk=links.blocks.price_list.querySelector('table');
		control.on_on(['price_menu', 'manual_price', 'price_list', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_select_list(arrs.perk_list, links.selects.perk);
		let tate_txt=links.felds.date.value.slice(8,10)+links.felds.date.value.slice(5,7)+links.felds.date.value.slice(0,4);
		if(!arrs.calendar[tate_txt]){
           arrs.calendar[tate_txt]=[];
           arrs.calendar[tate_txt][0]=arrs.calendar['01012020'][0].slice();
        } 
        let obj=arrs.calendar[tate_txt][0];  
		control.write_price_list(obj, blk);
		//заполнить селект и выбрать первоезначение
		//в соответствии со значением и датой заполнить таблицу
		//control.write_perk_list(arrs.perk_list, blk);
    },
    decor(link){
		console.log('decor');
		let blk=links.blocks.decor.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'decor', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.decor_list, arrs.decor_list_format, blk, 'decor', 1);
    },
    balance(){
        link=links.click.balance;
		console.log('balance');
		let blk=links.blocks.balance.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'balance', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.balance_list, arrs.balance_list_format, blk, 'balance');
    },
    detail(link){
		console.log('detail');
		let blk=links.blocks.detail.querySelector('table');
		control.on_on(['service_menu', 'manual_service', 'detail', 'manual_login'], link);
		link.dataset.choose=1;
		control.write_arr(arrs.detail_list, arrs.detail_list_format, blk, 'detail');
    },
    // ----
    check_in(link){
        link.dataset.click='check_out';
        if(link.parentNode.dataset.right){
            arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=0;
        }
    },
    check_out(link){
        link.dataset.click='check_in';
        if(link.parentNode.dataset.right){
            arrs.roles_list[link.parentNode.parentNode.dataset.select].list[link.parentNode.dataset.right].check=1;
        }
    },
    write_select(obj, parent){
        parent.innerHTML='';
        for(let i in obj){
            let option;
            if(i==0){
                option = new Option(obj[i].name, i, true, true);
            } else{
                option = new Option(obj[i].name, i);
            }
            parent.append(option);
        }
    },
    write_select_list(obj, parent){
        parent.innerHTML='';
        for(let i in obj){
            let option;
            if(i==0){
                option = new Option(obj[i], i, true, true);
            } else{
                option = new Option(obj[i], i);
            }
            parent.append(option);
        }
    },
    write_list_right(obj, parent){
        parent.innerHTML='';
        for(let i in obj){
            let blk_line=document.createElement('div');
            blk_line.className='line';
            blk_line.dataset.right=i;
            parent.append(blk_line);
            let blk_desc=document.createElement('div');
            blk_desc.className='description';
            blk_desc.innerText=obj[i].description;
            blk_line.append(blk_desc);
            let blk_check=document.createElement('div');
            blk_check.className='description';
            if(obj[i].check==1){
                blk_check.dataset.click='check_in';
            }
            if(obj[i].check==0){
                blk_check.dataset.click='check_out';
            }
            blk_line.append(blk_check);
        }
    },

    make_roles_list(){
        for(let i in arrs.roles){
            arrs.roles_list[i]={};
            arrs.roles_list[i].name=arrs.roles[i].name;
            arrs.roles_list[i].list={};
            for(let j in arrs.list_right){
                arrs.roles_list[i].list[arrs.list_right[j].name]={};
                arrs.roles_list[i].list[arrs.list_right[j].name].description=arrs.list_right[j].description;
                arrs.roles_list[i].list[arrs.list_right[j].name].check=0;
                if(arrs.roles[i].name=='admin'){
                    arrs.roles_list[i].list[arrs.list_right[j].name].check=1;
                }
            }
        }
    },
	staff(link){
		console.log('role');
		control.on_on(['staff_menu', 'manual_staff', 'staff', 'manual_staff', 'manual_role'], link);
		link.dataset.choose=1;
		let parent=links.blocks.staff.querySelector('table');
		control.write_table(arrs.staff, parent);
    },
    write_table(obj, parent){
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol =document.createElement('td');
            kol.innerText=obj[j].name;
            row.append(kol);
            let kol_r =document.createElement('td');
            kol_r.innerText=arrs.roles_list[obj[j].role].name;
            row.append(kol_r);
            let kol_d =document.createElement('td');
            kol_d.innerText=obj[j].registred;
            row.append(kol_d);
            let kol_c =document.createElement('td');
            row.append(kol_c);
            let kol_p =document.createElement('div');
            kol_p.dataset.click='check_out';
            kol_c.append(kol_p);
            row.dataset.key_employee=obj[j].key_employee;
            parent.append(row);
        }
    },
    write_count_set(obj, parent){
        parent.dataset.inputs='count_set_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol =document.createElement('td');
            kol.innerText=obj[j].name;
            row.append(kol);
            let kol_v =document.createElement('td');
            let kol_p =document.createElement('input');
            kol_p.type=obj[j].type;
            kol_p.value=obj[j].value;
            kol_v.append(kol_p);
            row.append(kol_v);
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    write_perk_list(obj, parent){
        parent.dataset.inputs='perk_list_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol_v =document.createElement('td');
            let kol_p =document.createElement('input');
            kol_p.type='text';
            kol_p.value=obj[j];
            kol_v.append(kol_p);
            row.append(kol_v);
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    write_price_list(obj, parent){
        parent.dataset.inputs='price_list_chng';
        let list=parent.querySelectorAll('tr');
        for(let i=1; i<list.length; i++){
            list[i].remove();
        }
        for(let j in obj){
            let row = document.createElement('tr');
            let kol_0 =document.createElement('td');
            let kol_0i =document.createElement('input');
            kol_0i.type='time';
            kol_0i.value=obj[j][0];
            kol_0.append(kol_0i);
            row.append(kol_0);
            let kol_1 =document.createElement('td');
            let kol_1i =document.createElement('input');
            kol_1i.type='number';
            kol_1i.value=obj[j][1];
            kol_1.append(kol_1i);
            row.append(kol_1);
            
            row.dataset.count_set=j;
            parent.append(row);
        }
    },
    perk_list_chng(link){
        console.log('perk_list_chng');
        arrs.perk_list[link.parentNode.parentNode.dataset.count_set]=link.value;
    },
    count_set_chng(link){
        console.log('count_set_chng');
        arrs.count_set_list[link.parentNode.parentNode.dataset.count_set].value=link.value;
    },
    price_list_chng(link){
        console.log('price_list_chng');
        let date_txt=links.felds.date.value.slice(8,10)+links.felds.date.value.slice(5,7)+links.felds.date.value.slice(0,4);
        let obg_in=arrs.calendar[date_txt][links.selects.perk.value][link.parentNode.parentNode.dataset.count_set];
        let obj_out=link.parentNode.parentNode;
        obg_in[0]=obj_out.children[0].children[0].value;
        obg_in[1]=obj_out.children[1].children[0].value;
    },
	btn(e){
		let btn=e.target.parentNode;
		com.ax("ghj");
	},
	new_user(e){
		abonent.key=12345;
		abonent.session=45678;
		comm.write_ls('abonent',abonent);
		control.on_off_btn({in_user:0, check:1, out_user:1});
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		//control.on_off({login:0, color:1, bill:0, btns:1,story:0});
	},
	recovery(e){//
		abonent.key=65478;
		abonent.session=9876;
		comm.write_ls('abonent',abonent);
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		//control.on_off({login:0, color:1, bill:0, btns:1,story:0});
	},

	on_on(obj, link){  //obj - список имен  блоков которые нужно показать	 new
	    control.off_off(link); // link -то на что нажали - выделяем, соседи - снимаем выделение
		if(link){
			link.dataset.choose=1;
		}
		for(let i in obj){
			links.group[obj[i]].dataset.display=1;	
			if(links.group[obj[i]].children.length){
        		for(let j=0; j<links.group[obj[i]].children.length; j++){
        			links.group[obj[i]].children[j].dataset.choose=0;	
        		}  
			}
		}
	},
	off_off(link){					//new
		
		for(let i in links.group){
			links.group[i].dataset.display=0;	
		}
		if(link){
			let asd=link.parentNode;
			for(let i=0; i<asd.children.length; i++){
				asd.children[i].dataset.choose=0;	
			}
		}
	},

	read(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:0, bill:0, btns:1,story:0,status:1});
		//нужно получить объект по названию
		//comm.ax("ghj",control.read_show);
	},
	in_user(e){
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
		control.on_off_btn({in_user:0, check:1, out_user:1});
	},
	out_user(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
		control.on_off_btn({in_user:1, check:0, out_user:0});
	},	
	check(e){
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		console.log(str_obj);
		control.on_off({login:0, color:1, bill:0, btns:1,story:0,status:0});
	},
	bill(e){//
	    let asd=comm.show_ax(e);
	    let str_obj=JSON.stringify(asd);
		//console.log(str_obj);
		control.write_bill(arrs.bill, links.table.bill);
		control.on_off({login:0, color:0, bill:1, btns:1,story:0,status:0});
	},	
	story(){//
	    control.write_bill(arrs.story, links.table.story);
		this.on_off({login:0, color:0, bill:0, btns:1,story:1,status:0});
	},	

	pass_(){//редактируем пароли
		ansver_.innerText= "";
		let obj={"admin":+pass_admin.value,"counter":+pass_counter.value,"user":+pass_user.value,"security":+pass_security.value};
		comm.ax({comand: "edit_file", password: passsword_.value, address:"passwords.txt", text:JSON.stringify(obj)});		
	}
};

function start(){
	abonent.domain=document.location.pathname.split("/")[1]; //new
	let list=document.querySelectorAll('div[data-group]');  // new
	for(let i=0; i<list.length; i++){							//new
		links.group[list[i].dataset.group]=list[i];
	}
	
	list=document.querySelectorAll('div[data-click]');
	for(let i=0; i<list.length; i++){
		links.click[list[i].dataset.click]=list[i];
	}
	list=document.querySelectorAll('table');			//new
	for(let i=0; i<list.length; i++){					//new
		links.table[list[i].dataset.table]=list[i];
	}
	list=document.querySelectorAll('input[data-id]');
	for(let i=0; i<list.length; i++){
		links.felds[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('select[data-id]');
	for(let i=0; i<list.length; i++){
		links.selects[list[i].dataset.id]=list[i];
	}
	list=document.querySelectorAll('div[data-group="main_menu"] div[data-click]');
	for(let i=0; i<list.length; i++){
		links.main_menu[list[i].dataset.click]=list[i];
	}
	
	for(let i in links.group){							//new
		links.group[i].dataset.display=0;	
	}						
	abonent=comm.read_ls('abonent');					//new
	if(!(abonent.key||abonent.session)){					//new
		//control.on_on(['table_centre']);	
		//control.write_arr(arrs.new_staff, arrs.new_staff_format, links.table.centre, 'new_staff', multi=1);
		//links.click.send.dataset.many='new_staff';
		abonent.domain=document.location.pathname.split("/")[1];
		abonent.key=1;
		abonent.count=1000;
		abonent.session='';
		abonent.login='';
		abonent.role='';
	}
	control.on_on(['main_menu']);
	links.felds.date.value=new Date().toLocaleDateString().split('.').reverse().join('-');
}

start();

link_window_all=document.querySelector('body');
link_window_all.addEventListener('click', links.call_func);  
link_window_all.addEventListener("change", links.call_func_chng);
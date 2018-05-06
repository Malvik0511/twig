<?php require_once '../vendor/autoload.php';
	$loader = new Twig_Loader_Filesystem('../views/');
	$twig = new Twig_Environment($loader);

	class feature{
		public $name, $costб, $currency;
		public function __construct($name, $cost){
			$this->name = $name;
			$this->cost = $cost;
		}
	}

	class Service{
		public $logoSrc, $title, $description;
		public function __construct($logo, $title, $description){
			$this->logoSrc = $logo;
			$this->title = $title;
			$this->description = $description;
		}
	}


	echo $twig->render('main.html', array(
		'slider'=> array('slides' => array('asserts/slide01.jpg', 'asserts/slide02.jpg', 'asserts/slide03.jpg')),
		'todo' => array('title' => 'ЗАГОЛОВОК', 'tasks' => array('Задача 1', 'Задача 2')),
		'header' => array('logoSrc' => 'asserts/customerLogo_color_black.png', 'serviceType' => 'Услуги строительной техники', 
			'contacts' => array('address' => array('city' => 'Екатеринбург', 'street' => 'Маяковского', 'building' => '25'), 'phone' => '+7 (343) 222-20-17'), 
			'links' => array('КАТАЛОГ ТЕХНИКИ', 'УСЛУГИ', 'ВЫПОЛНЕННЫЕ РАБОТЫ', 'О КОМПАНИИ', 'КОНТАКТЫ'), 'mainLinkSrc'=>'asserts/mainLink.png'),
		'footer' => array('customerLogoSrc' => 'asserts/customerLogo_color_yellow.png', 'links' => array('Главная', 'Каталог теники', 'Услуги', 'Выполненые работы', 'О компании', 'Контакты'), 'title' => 'Айтекс start 2016', 'logoSrc' => 'asserts/executorLogo.jpg', 'developerSite' => 'itexstart.ru'),
		'product' => array('folders' => array('Главная', 'Каталог'), 'name' => 'КВ 4СХ Super','features' => array(new feature('Характеристика1', '25000'), new feature('Характеристика2', '15000'), new feature('Характеристика3', '30000')), 'description' => 'Простой текстовый блок', 'photo' => 'asserts/product01.jpg', 'defaultCost' => '100000', 'currency' => 'Р'),
		'services' => array('title' => 'УСЛУГИ', 'services' => array(
			new Service('asserts/service01.jpg', 'ЗАСЫПКА ТРАНШЕЙ', 'Нашей компанией осуществляется засыпка траншей в Екатеринбурге, востребованная предприятиями и частными лицами'),
			 new Service('asserts/service01.jpg', 'ВЫВОЗ МУСОРА', 'Вывоз мусора - состовляющая деятельности производств и бытовых предприятий'), 
			 new Service('asserts/service01.jpg', 'ДОСТАВКА', 'Отскв образуется после разработки твердых пород и является востребованным материалом в строительстве'), 
			 new Service('asserts/service01.jpg', 'ПОДЪЕМ ГРУЗОВ', 'Выполнение широкого спектра высотных операций сложно представить бе специализированной техники') 
		))
	));
?>

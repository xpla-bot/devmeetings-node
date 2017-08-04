// 2/ Używamy API DOM aby stworzyć nowy kontener na aktywność.
var $activity = document.createElement('div')
$activity.className = 'activity'

// 6/ Tworzymy nowy obrazek (dodajemy klasę przez classList)
var $img = document.createElement('img')
$img.classList.add('activity__img')
$img.width = 250
$img.height = 250
$img.alt = 'Swimmer'
$img.src = 'https://xpla.org/ext/lorempixel/250/250/sports/7/'

// 3/ Tytuł
var $title = document.createElement('h3')
$title.classList.add('activity__name')
$title.textContent = 'Swimming'

// 3/ Spędzony czas
var $time = document.createElement('p')
$time.classList.add('activity__description')
$time.innerHTML = 'Time spent: <strong>60 min</strong>'

// 3/ Przycisk
var $button = document.createElement('button')
$button.classList.add('activity__button--paused')
$button.innerHTML = '&#9654; Start'

// 4/ Dodajemy wszystkie elementy do rodzica
$activity.appendChild($img)
$activity.appendChild($title)
$activity.appendChild($time)
$activity.appendChild($button)

// 2/ I całość dodajemy do istniejącego elementu aby wyrenderować aktywność.
var $activities = document.querySelector('.activities')
$activities.appendChild($activity)

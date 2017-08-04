// 20/ Dane wrzucamy do tablicy
var activities = [
  {
    id: 3,
    alt: 'Bicycle',
    name: 'Cycling',
    timeSpent: 120
  },
  {
    id: 7,
    alt: 'Swimmer',
    name: 'Swimming',
    timeSpent: 60
  },
  {
    id: 9,
    alt: 'Runners',
    name: 'Running',
    timeSpent: 30
  }
]

var $activities = document.querySelector('.activities')

// 2/ i wyświetlamy aktywności dodająć je w pętli...
for (var k in activities) {
  var activity = activities[k]

  var $activity = document.createElement('div')
  $activity.className = 'activity'

  var $img = document.createElement('img')
  $img.classList.add('activity__img')
  $img.width = 250
  $img.height = 250
  $img.alt = activity.alt
  $img.src = `https://xpla.org/ext/lorempixel/250/250/sports/${activity.id}/`

  var $title = document.createElement('h3')
  $title.classList.add('activity__name')
  $title.textContent = activity.name

  var $time = document.createElement('p')
  $time.classList.add('activity__description')
  $time.innerHTML = `Time spent: <strong>${activity.timeSpent} min</strong>`

  var $button = document.createElement('button')
  $button.classList.add('activity__button--paused')
  $button.innerHTML = '&#9654; Start'

  $activity.appendChild($img)
  $activity.appendChild($title)
  $activity.appendChild($time)
  $activity.appendChild($button)

  // ...w każdej iteracji dodając do DOM
  $activities.appendChild($activity)
}

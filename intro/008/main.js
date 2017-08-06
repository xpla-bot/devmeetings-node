'use strict'

// 27/ W modelu przechowujemy aktualną listę aktywności
const Model = {
  // W JS wszystko jest publiczne, więc stosujemy konwencję aby oznaczy pola prywatne.
  _activities: [
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
  ],

  // 3/ Publicznie wystawiamy getter.
  get activities () {
    return this._activities
  }
}

const View = {
  // 14/ Widok dzielimy na dwie funkcje.
  // -- Pierwsza z nich renderuje model (wiele aktywności)
  render (model) {
    const $activities = []
    const activities = model.activities

    for (let k in activities) {
      const activity = activities[k]
      const $activity = this.renderActivity(activity)

      $activities.push($activity)
    }

    return $activities
  },

  // A z drugiej zwracamy reprezentacje pojedynczej aktywności
  renderActivity (activity) {
    const $activity = document.createElement('div')
    $activity.className = 'activity'

    let $img = document.createElement('img')
    $img.classList.add('activity__img')
    $img.width = 250
    $img.height = 250
    $img.alt = activity.alt
    $img.src = `https://xpla.org/ext/lorempixel/250/250/sports/${activity.id}/`

    let $title = document.createElement('h3')
    $title.classList.add('activity__name')
    $title.textContent = activity.name

    let $time = document.createElement('p')
    $time.classList.add('activity__description')
    $time.innerHTML = `Time spent: <strong>${activity.timeSpent} min</strong>`

    let $button = document.createElement('button')
    $button.classList.add('activity__button--paused')
    $button.innerHTML = '&#9654; Start'

    $button.addEventListener('click', function () {
      window.alert(`Starting tracking: ${activity.name}`)
      console.log(activity)
    })

    $activity.appendChild($img)
    $activity.appendChild($title)
    $activity.appendChild($time)
    $activity.appendChild($button)

    return $activity
  }
}

// 4/ Na koniec musimy zaincjalizować całą aplikację i wyrenderować model.
const $activities = document.querySelector('.activities')
View.render(Model).map(function ($activity) {
  $activities.appendChild($activity)
})

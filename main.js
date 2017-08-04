'use strict'

class Model {
  constructor (activities) {
    this._activities = activities
  }

  get activities () {
    return this._activities
  }
}

class View {
  constructor (model) {
    this._model = model
  }

  // 5/ Spróbujmy zmapować elementy modelu i wywołać `renderActivity`.
  render () {
    return this._model.activities.map(function (activity) {
      return this.renderActivity(activity)
    })
  }

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

const model = new Model([
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
])
const view = new View(model)
const $activities = document.querySelector('.activities')
view.render().map(function ($activity) {
  $activities.appendChild($activity)
})

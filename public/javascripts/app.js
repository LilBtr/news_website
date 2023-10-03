const newsList = document.getElementById('list')
const changeBtn = document.getElementById('change')
const cancelBtn = document.getElementsByClassName('cancel')
const addNewsBtn = document.getElementById('add-news-btn')
const addModal = document.getElementsByClassName('modal-background')[0]
const changeModal = document.getElementsByClassName('modal-background')[1]

addNewsBtn.onclick = () => {
  addModal.classList.add('visible')
}

async function removeNews(index) {
  const data = {
    action: 'removeNews',
    id: index,
  }

  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

async function getNewsList() {
  const data = {
    action: 'getNewsList',
  }

  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let object of data) {
        renderContent(object)
      }
    })
}

async function getNews(index) {
  const data = {
    action: 'getNews',
    id: index,
  }

  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
			document.getElementById('change-title').value = data.title
			document.getElementById('change-text').value = data.text
			document.getElementById('change-image').value = data.image
    })
  
}

function renderContent(object) {
  newsList.insertAdjacentHTML('afterbegin', newsBlockTemplate(object.id, object.title, object.image, object.text))
}

newsList.onclick = (e) => {
  const dataIndex = e.target.parentElement.dataset.index
  if (dataIndex) {
    document.location.href = `/news?postid=${dataIndex}`
  }
  if (e.target.className === 'edit') {
    const data = getNews(e.target.parentElement.parentElement.dataset.index)
    changeModal.classList.add('visible')
  }
  if (e.target.className === 'remove') {
    removeNews(e.target.parentElement.parentElement.dataset.index)
    e.target.parentElement.parentElement.parentElement.remove()
  }
}

changeBtn.onclick = () => {
  e.target.parentElement.parentElement.parentElement.classList.remove('visible')
}

cancelBtn[0].onclick = (e) => {
  e.target.parentElement.parentElement.parentElement.classList.remove('visible')
}

cancelBtn[1].onclick = (e) => {
  e.target.parentElement.parentElement.parentElement.classList.remove('visible')
}

function newsBlockTemplate(index, title, image, text) {
  return `<li>
	<div class="news-wrapper" data-index="${index}">
		<div class="news-content">
			<img src="${image}" alt="photo" />
			<div class="content">
				<h3>${title}</h3>
				<p>${text}</p>
			</div>
		</div>
		<div class="actions">
			<button class="edit"><ion-icon name="pencil-outline" size="large"></ion-icon></button>
			<button class="remove"><ion-icon name="trash-outline" size="large"></ion-icon></button>
		</div>
	</div>
</li>`
}

getNewsList()

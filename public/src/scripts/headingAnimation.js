
const TEXT1 = 'Front End '
const TEXT2 = 'Back End '
let current = TEXT1
let text = document.querySelector('#animate-heading')

function forward(content) {

  let i = 0

  const forward = setInterval(() => {
    if (text.textContent.length === content.length) {
      clearInterval(forward)
      return setTimeout(() => backward(), 3000)
    }
    text.textContent += content[i++]
  }, 70)

}

function backward() {

  const backward = setInterval(() => {
    if (text.textContent.length === 0) {
      clearInterval(backward)
      switch (current) {
        case TEXT1:
          current = TEXT2
          break
        case TEXT2:
          current = TEXT1
          break
      }
      return setTimeout(() => forward(current), 300)
    }
    text.textContent = text.textContent.slice(0, -1)
  }, 70)

}

setTimeout(() => {
  backward()
}, 2000)
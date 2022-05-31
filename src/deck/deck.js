import cjp from "cjp"

const initCjp = () => {
  const textBox = document.querySelector(".js-compose-text"),
    tweetButton = document.querySelector(".js-send-button-container")

  if (!textBox) return
  for (elem of tweetButton.parentNode.children) {
    if (elem.classList.contains("cjp")) return
  }

  const cjpButton = document.createElement("button")

  cjpButton.innerText = "怪日语"
  cjpButton.classList.add("cjp", "Button--secondary", "js-show-tip", "is-disabled")
  cjpButton.setAttribute("data-original-title", "贵樣！")
  for (elem of tweetButton.children) {
    if (elem.classList.contains("btn-extra-height"))
      cjpButton.classList.add("btn-extra-height", "padding-v--6", "padding-h--12")
  }

  cjpButton.addEventListener("click", () => {
    textBox.value = cjp.generate(textBox.value)
    textBox.dispatchEvent(new Event("input"))
    cjpButton.classList.add("is-disabled")
  })

  tweetButton.parentNode.insertBefore(cjpButton, tweetButton)

  textBox.addEventListener("input", () => {
    if (textBox.value) {
      cjpButton.classList.remove("is-disabled")
    } else {
      cjpButton.classList.add("is-disabled")
    }
  })
  tweetButton.addEventListener("click", () => {
    cjpButton.classList.add("is-disabled")
  })
}

document.addEventListener("keydown", initCjp)
document.addEventListener("pointerdown", initCjp)

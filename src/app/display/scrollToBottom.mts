export function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(window.scrollTo, 2000, 0, document.body.scrollHeight);
}
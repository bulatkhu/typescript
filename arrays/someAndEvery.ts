const widgets = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'yellow' },
  { id: 3, color: 'orange' },
  { id: 4, color: 'blue' },
]

console.log('some is blue', widgets.some(widget => {
  return widget.color === 'blue'
}))

console.log('every is orange', widgets.every(widget => {
  return widget.color === 'orange'
}))
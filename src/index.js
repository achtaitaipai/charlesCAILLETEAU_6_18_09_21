import './style.scss'

function importAll(r) {
  const images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
importAll(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/))

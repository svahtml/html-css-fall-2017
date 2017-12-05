# Getting Started

* create-react-app gallery
* cd gallery

https://jsonplaceholder.typicode.com/photos

```
componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(raw => raw.json())
    .then(photos => {
      const adjustedPhotos = photos.slice(100, 110).map(({albumId, id, title, url, thumbnailUrl}) => {
        return {
          albumId,
          id,
          title,
          url: url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`),
          thumbnailUrl
        }
      });
      this.setState({ photos: adjustedPhotos });
    })
}
```

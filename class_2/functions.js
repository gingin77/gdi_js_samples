function addEllieAndWolf(ellie_and_wolf_image) {
  let parent_element = document.getElementById("pic_container")
  let image_element = document.createElement("img")
  image_element.src = ellie_and_wolf_image

  parent_element.appendChild( image_element )
}

// addEllieAndWolf(image_ellie_and_wolf)






// function addEllieAndWolf(ellie_and_wolf_image) {
//   let parent = document.getElementById("pic_container")
//   // let child = makeImage(image_file)
//   parent.appendChild( child )
// }

var my_images = [
  image_ellie_and_wolf,
  "images/red_leaves.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Pink-dogwood-flower-tree_-_West_Virginia_-_ForestWander.jpg"
]



function makeImage(image_path) {
  let image = document.createElement("img")
  image.src = image_path
  return image
}

// addImage(image_collection[2])



// function showEllieAndWolf() {
//   image = document.getElementsByTagName('img')[0]
//   image.src = "ellie_and_wolf.jpg"
// }

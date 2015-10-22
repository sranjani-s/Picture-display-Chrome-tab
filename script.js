
$all_images = glob("/your/directory/{*.jpg, *.JPG, *.JPEG, *.png, *.PNG}", GLOB_BRACE);

// shuffle($all_images); // uncomment this line to randomize the images

$images = array();

foreach ($all_images as $index => $image) {
     if ($index == 15) break;  // Only print 15 images
     $image_name = basename($image);
     echo "<img src='C:\Users\sivasubr\Documents\Personal\{$image_name}' />";
}

function randomImg(){
var ry=Math.floor(Math.random()*imageGallery.length);
document.write('<div><img src="'+imageGallery[ry]+'" border=0 align="middle"></div>');
}

var imageGallery = ["1.jpg","image3.png","image1.jpg" ];
var imgCount = 0;
var totalImgs = imageGallery.length - 1;

function main() {

}

												

document.addEventListener('DOMContentLoaded', function(){randomImg();}); 



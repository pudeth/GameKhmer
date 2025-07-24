 var myImages = [
            "bongkorng.jpg",
            "fish.jpg",
            "Kdam.jpg",
            "kla.jpg",
            "Morn.jpg",
            "klok.jpg"
        ];
        
        const img = document.querySelector('img');
        img.onload = () => img.classList.add('visible');
        function showImage() {
            var index = document.getElementById("imageIndex").value;
            var img = document.getElementById("img1");

            if (index !== "" && index >= 0 && index <= 5) {
                img.style.opacity = 0;
                img.src = myImages[parseInt(index)];
                img.onload = function () {
                    img.style.opacity = 1;
                };

            } else {
                alert("សូមបញ្ចូលលេខពី 1 ដល់ 6 ប៉ុណ្ណោះ!");
            }
        }
(function () {
    const btns = document.querySelectorAll(".btn");
    const storageItems = document.querySelectorAll(".item");

    
    btns.forEach(function (button) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let filter = e.target.dataset.filter;
            storageItems.forEach(function (items) {
                if (filter === "all") {
                    items.style.display = "block"
                } else {
                    if (items.classList.contains(filter)) {
                        items.style.display = "block"
                    } else {
                        items.style.display = "none"
                    }
                }
            })
        })
    })
})();
let productDiv = document.getElementById("Products");

let imageArray = ['Birthday','party','love','creame','chocolate','Birthday','love','creame','breakup','Birthday','party','chocolate'];
productDiv.innerHTML += '';

for (let i = 0; i < 12; i++) {
    productDiv.innerHTML += `
    <div class="productDetails">
          <div class="pimage">
                        <img src="https://source.unsplash.com/random/?cake,${imageArray[i]}" alt="img">
                    </div>
                    <b>${imageArray[i]}</b>
                    <p>Details: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, mollitia.</p>
                </div>
    `;
}
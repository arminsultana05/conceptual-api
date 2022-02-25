const bookDetails = document.getElementById('book-details')

const searchBookInfo = () => {
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;
    inputField.value = '';

    const url = `https://openlibrary.org/search.json?q=javascript`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookDetails(data.docs))

}
const displayBookDetails = books => {
    // console.log(books);
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div')
        div.classList.add("col-lg-4")
        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.author_name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
        bookDetails.appendChild(div)


    })

}
const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase()
    const storeItems = document.getElementById('product-list')
    const product = document.querySelectorAll('.product')
    const productName = document.getElementsByTagName('h2')


    for(let i=0;i<productName.length;i++){
        let match = product[i].getElementsByTagName('h2')[0]
        console.log('Match',match)

        if(match){
           let textValue = match.textContent || match.innerHTML
           console.log('textValue',textValue)
           console.log('searcBox',searchBox)
           if(textValue.toUpperCase().indexOf(searchBox) > -1){
            product[i].style.display = ''
           }else{
            product[i].style.display = 'none'
           }
        }
    }
}
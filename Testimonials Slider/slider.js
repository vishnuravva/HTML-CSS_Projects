(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer(img, name, text) {
        let image = `${img}.jpg`
        let customer = new Customer(image, name, text)

        customers.push(customer)
    }
    createCustomer(1, 'Vishnu', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi quod facere eos ipsam! Nobis, quidem id!')
    createCustomer(2, 'Yash', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi')
    createCustomer(3, 'Ashwin', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi quod facere eos ipsam! Nobis, quidem id!')
    createCustomer(4, 'Pushkar', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi ')
    createCustomer(5, 'Kishore', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi quod facere eos ipsam! Nobis, quidem id!')
    createCustomer(6, 'Purav', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit labore dolor porro eligendi!')

    btn.forEach(button => {
        button.addEventListener('click',(e) => {
            if(e.target.parentElement.classList.contains('prevBtn')){
               // If we are on first image i.e first index we will change the index to array ka length 
               // so that we can traverse from backside also
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            else{
                index++
                if(index === customers.length){
                    index = 0
                }
            
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()
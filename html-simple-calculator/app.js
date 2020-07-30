const one = document.one

one.addEventListener("submit", () => {
    event.preventDefault()

    const addNum1 = one.add1.value
    const plusNum1 = parseInt(addNum1)
    const addNum2 = one.add2.value
    const plusNum2 = parseInt(addNum2)
    
    const sum1 = plusNum1 + plusNum2
    const resultBox1 = document.getElementById("resultBox1")
    
    resultBox1.append(sum1)
    
    one.add1.value = ""
    one.add2.value = ""
    //how to clear result div?//Form.resultBox1.innerHTML = ""
})

const two = document.two

two.addEventListener("submit", () => {
    event.preventDefault()

    const subNum1 = two.sub1.value
    const minusNum1 = parseInt(subNum1)
    const subNum2 = two.sub2.value
    const minusNum2 = parseInt(subNum2)

    const sum2 = minusNum1 - minusNum2
    const resultBox2 = document.getElementById("resultBox2")

    resultBox2.append(sum2)

    two.sub1.value = ""
    two.sub2.value = ""

})

const three = document.three

three.addEventListener("submit", () => {
    event.preventDefault()

    const multNum1 = three.mult1.value
    const multipyNum1 = parseInt(multNum1)
    const multNum2 = three.mult2.value
    const multiplyNum2 = parseInt(multNum2)

    const sum3 = multipyNum1 * multiplyNum2
    const resultBox3 = document.getElementById("resultBox3")

    resultBox3.append(sum3)

    three.mult1.value = ""
    three.mult2.value = ""

})


class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText=previousOperandText
        this.currentOperandText=currentOperandText
    }

    clear(){
        this.currentOperand=''
        this.previousOperand=''
        this.operation 
    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0, -1)
    }

    addNumber(){
        if(number == '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand!==''){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }

    compute(){
        let computation
        const prev= parseFloat(this.previousOperand)
        const curr= parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case '+':
                computation=prev + curr
                break
            case '-':
                computation=prev- curr
                break
            case '/':
                computation=prev / curr
                break
            case '*':
                computation=prev * curr
                break
            default:
                return
        }

        this.currentOperand=computation
        this.operation=undefined
        this.previousOperand=''
    }

    updateDisplay(){
        this.currentOperandText.innerText= this.currentOperand
        this.previousOperandText.innerText= this.previousOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandText = document.querySelectorAll('[data-previous-operand]')
const currentOperandText = document.querySelectorAll('[data-current-operand]')



const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
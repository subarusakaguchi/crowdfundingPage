// let modalSelection = document.querySelectorAll('input.radio-size')

// modalSelection.forEach((modal) => {
//     modal.addEventListener('change', toggleSelection)
// })

// function toggleSelection() {
//     let id = this.id
//     let modalFooter = document.getElementById(id).parentElement.parentElement.lastElementChild
    
//     modalFooter.classList.toggle('visually-hidden')
// }


// function addPledge() {
//     let id = this.id
//     let divParent = document.getElementById(id).parentElement

//     let divFooter = document.createElement('div')
//     divFooter.classList.add('modal-footer', 
//                             'd-flex', 
//                             'justify-content-between',
//                             'align-items-center',
//                             'p-0',
//                             'pt-2')

//     let pFooter = document.createElement('p')
//     pFooter.classList.add('text-secondary')
//     pFooter.innerText = "Com quanto quer apoiar?"

//     let divSecondary = document.createElement('div')
//     divSecondary.classList.add('d-flex',
//                                'justify-content-end',
//                                'align-items-center')
    
//     let pSecondary = document.createElement('p')
//     pSecondary.classList.add('fs-4',
//                              'textPrimaryColor',
//                              'fw-bold',
//                              'mt-3',
//                              'me-2')
//     pSecondary.innerText = 'R$'

//     let inputFooter = document.createElement('input')
//     inputFooter.type = 'number'
//     inputFooter.classList.add('rounded-pill',
//                               'w-25',
//                               'p-2',
//                               'me-2',
//                               'textPrimaryColor')
//     inputFooter.name = 'pledge'
//     inputFooter.setAttribute('id', 'pledge1')

//     let buttonFooter = document.createElement('button')
//     buttonFooter.classList.add('btn',
//                                'text-white',
//                                'fs-5',
//                                'fw-bold',
//                                'px-4',
//                                'rounded-pill',
//                                'bgPrimaryColor',
//                                'hoverSecondaryColor')
//     buttonFooter.innerText = 'Apoiar'

//     divSecondary.appendChild(pSecondary)
//     divSecondary.appendChild(inputFooter)
//     divSecondary.appendChild(buttonFooter)

//     divFooter.appendChild(pFooter)
//     divFooter.appendChild(divSecondary)

//     divParent.appendChild(divFooter)
// }

// {/* <div class="modal-footer d-flex justify-content-between align-items-center p-0 pt-2">
// <p class="text-secondary">Com quanto quer apoiar?</p>
// <div class="d-flex justify-content-end align-items-center">
//     <p class="fs-4 textPrimaryColor fw-bold mt-3 me-2">R$</p>
//     <input min="25" class="rounded-pill w-25 p-2 me-2 textPrimaryColor" type="number" name="pledge" id="pledge1">
//     <button data-bs-toggle="modal" data-bs-target="#modal-thanks" class="btn text-white fs-5 fw-bold px-4 rounded-pill bgPrimaryColor hoverSecondaryColor">Apoiar</button>
// </div>
// </div> */}
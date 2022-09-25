/* <div class="modal fixed flex f-column justify-between">
        <div class="modal-top flex justify-end mg-rigth border-top">
            <button class="check-modal">X</button>
        </div>
        <div class="bg-white modal-section flex f-column gap-2">
            <h1 class="title2 mg-top">Recupere sua senha</h1>
            <p class="text-modal flex justify-center">Utilize este recurso para lembrar a sua senha de acesso cadastrada em nosso sistema.</p>
            <input class="input-modal" type="text" placeholder="Digite seu email aqui">
            <button class="button-modal bg-purple">Enviar</button>
        </div>
        <div class="modal-bottom border-bottom"></div>
    </div> */

function createModalSenha(){
    const modalContainer        = document.createElement('div');
    const topContainer          = document.createElement('div');
    const buttonCheckOut        = document.createElement('button');
    const sectionContainer      = document.createElement('div');
    const titleContainer        = document.createElement('h1');
    const textContainer         = document.createElement('p');
    const inputContainer        = document.createElement('input');
    const buttonContainer       = document.createElement('button');
    const modalFooter           = document.createElement('div');

    modalContainer.classList    = 'modal fixed flex f-column justify-between'
    modalContainer.id           = 'modal-container'
    topContainer.classList      = 'modal-top flex justify-end mg-rigth border-top'
    buttonCheckOut.classList    = 'check-modal'
    buttonCheckOut.innerText    = 'X'
    buttonCheckOut.id           = 'close-modal'
    sectionContainer.classList  = 'bg-white modal-section flex f-column gap-2'
    titleContainer.classList    = 'title2 mg-top'
    titleContainer.innerText    = 'Recupere sua senha'
    textContainer.classList     = 'text-modal flex justify-center'
    textContainer.innerText     = 'Utilize este recurso para lembrar a sua senha de acesso cadastrada em nosso sistema.'
    inputContainer.classList    = 'input-modal'
    inputContainer.placeholder  = 'Digite seu email aqui'
    buttonContainer.classList   = 'button-modal bg-purple'
    buttonContainer.innerText   = 'Enviar'
    modalFooter.classList       = 'modal-bottom border-bottom'

    topContainer.append(buttonCheckOut)
    sectionContainer.append(titleContainer,textContainer,inputContainer,buttonContainer)
    modalContainer.append(topContainer,sectionContainer,modalFooter)
    
    return modalContainer
}

function showModal(){
    const modalButton       = document.getElementById('forgetPassword')
    const bodyContainer     = document.getElementById('body-container')

    modalButton.addEventListener('click', () => {
        const modal = createModalSenha()
        
        bodyContainer.append(modal)
        closeModal()
    }
    )
    
    function closeModal(){
        const closeModalButton       = document.getElementById('close-modal')
        const modalContainer     = document.getElementById('modal-container')
    
        closeModalButton.addEventListener('click', () => {
            modalContainer.remove()
        }
        )
    }
}
showModal()




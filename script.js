(()=>{
    let InputFile, ButtonFile, ButtonClean, PreviewSection;

    document.addEventListener('DOMContentLoaded', () => {
        InputFile = document.getElementById('inputFile');
        ButtonFile = document.getElementById('buttonFile');
        ButtonClean = document.getElementById('buttonClean');
        PreviewSection = document.getElementById('previewSection');

        ButtonFile.addEventListener('click', event => {
            InputFile.click()
        })
        ButtonClean.addEventListener('click', event => {
            PreviewSection.innerHTML = '';
        })
        InputFile.addEventListener('change', event => {    
            let [file] = event.target.files;
            let ext = file.name.split('.').pop();
            const ExtFilter = ['jpeg','jpg','png','txt','svg','gif','svg'];
            if (!ExtFilter.includes(ext)){
                alert('solo se permiten imagenes.')
                return;
            }

            if (file) {
                let img = document.createElement('img');
                img.setAttribute('src', URL.createObjectURL(file))                
                PreviewSection.appendChild(img)
            }
        })
    })

})();
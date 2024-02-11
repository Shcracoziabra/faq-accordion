window.addEventListener('DOMContentLoaded', ()=>{
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if(e.target.matches('button')) {
                const prevState = item.getAttribute('area-expanded');
                const nextState = prevState === 'false' ? 'true' : 'false' ;
                item.setAttribute('area-expanded', nextState);
                e.target.blur();
            }

        })
    });

    accordionItems.forEach(item => {
        item.addEventListener('keydown', (e) => {

            if(e.target.matches('button') && e.key === 'Enter') {
                e.preventDefault();
                const prevState = item.getAttribute('area-expanded');
                const nextState = prevState === 'false' ? 'true' : 'false' ;
                item.setAttribute('area-expanded', nextState);
            }
        })
    });
    
});
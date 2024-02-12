window.addEventListener('DOMContentLoaded', ()=>{
    const accordionItems = document.querySelectorAll('.accordion-item');

    function toggleExpanded(btn){
        const controlsId = btn.getAttribute('aria-controls');
        const prevState = btn.getAttribute('aria-expanded');

        let isExpanded = prevState === 'true';

        isExpanded = !isExpanded;
        const nextState = `${isExpanded}`;

        btn.setAttribute('aria-expanded', nextState);
        const content = document.getElementById(controlsId);
        if (isExpanded) {
            content.setAttribute('data-hidden', 'false');
        } else {
            content.setAttribute('data-hidden', 'true');
        }
    }

    accordionItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if(e.target.matches('button')) {
                toggleExpanded(e.target);
                e.target.blur();
            }
        })
    });

    accordionItems.forEach(item => {
        item.addEventListener('keydown', (e) => {

            if(e.target.matches('button') && e.key === 'Enter') {
                e.preventDefault();
                toggleExpanded(e.target);
            }
        })
    });
});
function initAccordion(accordionElem) {

  function handlePanelClick(event) {
    showPanel(event.currentTarget);
  }

  function showPanel(panelHeader) {

    let isActive,
        panel = panelHeader.parentNode,
        panelBody = panelHeader.nextElementSibling,
        expandedPanel = document.querySelector('.panel.active');

    isActive = (expandedPanel && panel.classList.contains('active')) ? true : false;

    if(expandedPanel) {
      expandedPanel.querySelector('.panel-body').style.height = null;
      expandedPanel.classList.remove('active');
    }

    if(panel && !isActive) {
      panelBody.style.height = panelBody.scrollHeight + 'px';
      panel.classList.add('active');
    }

  }

  let allPanelElements = document.querySelectorAll('.panel');

  for(let i = 0; i < allPanelElements.length; i++) {
    allPanelElements[i].querySelector('.panel-header').addEventListener('click', handlePanelClick);
  }

  showPanel(allPanelElements);

}

initAccordion(document.getElementsByClassName('accordion'));



function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    
    /* Select the text field */
    
    copyText.select(); 
    
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    
    /* Alert the copied text */
    
    alert("Copied the text: " + copyText.value);
  } 
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked;

function handleCheck(e) {
    //check if the shift key is down
    //AND check that they checked a box 
    console.log(this.checked);
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
};

//need to find a way to remove definition of lastChecked 
//if shift click is performed but no other box is clicked first
//currently it remembers the last box you checked even if you unchecked it
//and if you didn't check a box it checks everything from the last box up

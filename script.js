// Adding button click listener 
const eventTriggerButton = document.getElementById('btn4Event')

const handleClick = () => {
	console.log('Вutton click event has worked!');
    roistat.event.send('click_on_btn')
	
}

eventTriggerButton.addEventListener('click', handleClick) 


async function predictImage() {
    const inputElement = document.getElementById('imageInput');
    const file = inputElement.files[0];
    if (!file) {
        alert('Please select an image.');
        return;
    }
    
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await fetch('https://potato-disease-classification-api.onrender.com/predict', {
            method: 'POST',
            body: formData
        })
        
        const data = await response.json();
        
        const predictionResult = `${data.class} - Prediction: ${data.prediction}`;

        document.getElementById('class').innerText = data.class;
        document.getElementById('confidence').innerText=data.prediction+'%'
    } catch (error) {
        console.error('Error predicting image:', error);
        document.getElementById('predictionResult').innerText = 'Error predicting image.';
    }
}

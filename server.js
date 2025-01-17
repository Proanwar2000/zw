function fetchProperties() {
    fetch('http://localhost:3000/properties')
        .then(response => response.json())
        .then(properties => {
            const propertyList = document.getElementById('propertyList');
            propertyList.innerHTML = '';

            properties.forEach(property => {
                const propertyDiv = document.createElement('div');
                const attachments = property.attachments.map(
                    attachment => `<img src="http://localhost:3000/${attachment.file_path}" alt="Attachment" style="width:100%; border-radius: 5px; margin-bottom: 10px;">`
                ).join('');

                propertyDiv.innerHTML = `
                    ${attachments}
                    <h2>${property.title}</h2>
                    <p>${property.description}</p>
                    <p><strong>السعر:</strong> ${property.price} جنيه</p>
                    <p><strong>الموقع:</strong> ${property.location}</p>
                    <p><strong>نوع العقار:</strong> ${property.property_type}</p>
                `;
                propertyList.appendChild(propertyDiv);
            });
        });
}

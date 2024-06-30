document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nama tidak boleh kosong!',
        });
    } else {
        fetch('jkt48.json')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const oshi = data[randomIndex];
                document.getElementById('oshiResult').innerText = `Oshi ${name} adalah ${oshi.name}`;
                document.getElementById('oshiImage').src = oshi.image;
                document.getElementById('result').style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
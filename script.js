async function getGiphyBar(url) {
    try {
        var data = await fetch(url);
        return data.json();
    } catch (err) {
        return err;
    }

}
// https://random-word-api.herokuapp.com/word?number=1 
// https://developers.giphy.com

function searchGiphy() {
    var giphyBar = document.getElementById("myText").value;;
    //alert(giphyBar);
    getGiphyBar('https://api.giphy.com/v1/gifs/search?api_key=Qo06zmYqixxl0FpvvRVrwv1VZEpnqwYg&q='+giphyBar+'&limit=9&offset=0&rating=g&lang=en').then(function (data) {
        //console.log(data['data'][0]['images']['original']['url']);
       
        let len = data['data'].length;

        var divRow = document.getElementById('rowId');
        divRow.innerHTML = "";

        var colSim = document.createElement('div');
        colSim.setAttribute('class', 'col-sm-4');

        for (let i = 0; i < len; i++) {
            var imgDiv = document.createElement('img');
            imgDiv.setAttribute('class', 'thumbnail');
            imgDiv.src = data['data'][i]['images']['original']['url'];

            colSim.appendChild(imgDiv);

        }
        divRow.appendChild(colSim);

    }).catch(function (err) {
        console.log(err);
    })
}
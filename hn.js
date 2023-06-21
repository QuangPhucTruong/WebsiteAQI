window.onload = function onLoad() {
    var nnoise,naqi,nrain,ntemp,nhumi,nuv;
  
    const doon=document.querySelector('.nnoise');
    const clkk=document.querySelector('.naqi');
    const mua=document.querySelector('.nrain');
    const temp=document.querySelector('.ntemp');
    const humi=document.querySelector('.nhumi');
    const uvv=document.querySelector('.nuv');
    
    var noise = new ProgressBar.Circle('#noisebd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
  
    var aqi = new ProgressBar.Circle('#aqibd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
    
    var rain = new ProgressBar.Circle('#rainbd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
    var tem = new ProgressBar.Circle('#tembd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
    
  
    var hum = new ProgressBar.Circle('#humbd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
    
    var uv = new ProgressBar.Circle('#uvbd', {
      color: '#D44000',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6
    });
    
    var firebaseConfig = {
      apiKey: "AIzaSyBqNxyg6W1tiX0u0sN_QRgkm9uxYFs8l8c",
      authDomain: "ttiot-a3f98.firebaseapp.com",
      databaseURL: "https://ttiot-a3f98-default-rtdb.firebaseio.com",
      projectId: "ttiot-a3f98",
      storageBucket: "ttiot-a3f98.appspot.com",
      messagingSenderId: "284951451411",
      appId: "1:284951451411:web:52c43aac4472c384212ce6",
      measurementId: "G-VHTJBYJ5BM"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
    var database = firebase.database();
    
    var raindt = database.ref('HN/RAIN');
    raindt.on('value', function(snapshot) {
          var childData = snapshot.val();
          nrain=childData;
          rain.animate(nrain/400);
          mua.textContent=nrain+' mm';
    });
  
    var noisedt = database.ref('HN/NOISE');
    noisedt.on('value', function(snapshot) {
          var childData = snapshot.val();
          nnoise=childData;
          noise.animate((nnoise/200));
          doon.textContent=nnoise+' dB';
    });
  
    var aqidt = database.ref('HN/AQI');
    aqidt.on('value', function(snapshot) {
          var childData = snapshot.val();
          naqi=childData;
          aqi.animate((naqi/500));
          clkk.textContent=naqi+' AQI';
    });
  
    var tempdt = database.ref('HN/TEMP');
    tempdt.on('value', function(snapshot) {
          var childData = snapshot.val();
          ntemp=childData;
          tem.animate(ntemp/100);
          temp.textContent=ntemp+' *C';
    });
  
    var humidt = database.ref('HN/HUMI');
    humidt.on('value', function(snapshot) {
          var childData = snapshot.val();
          nhumi=childData;
          hum.animate(nhumi/100);
          humi.textContent=nhumi+' %';
    });
  
    var uvdt = database.ref('DN/UV');
    uvdt.on('value', function(snapshot) {
          var childData = snapshot.val();
          nuv=childData;
          uv.animate(nuv/12);
          uvv.textContent=nuv;
    });
  };
function updateMap() 
{
    console.log("updating map with realtime data");
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element => {
         latitude=element.latitude;
         longitude=element.longitude;

         //setting color acc. to cases
         cases=element.infected;
         if (cases>255) {
             color="rgb(255,0,0)";
         }
         
         else{
             color=`rgb(${cases},0,0)`;
         }
         
         // mark on map
            new mapboxgl.Marker({
            draggable: false,
            color:color

            })
            .setLngLat([longitude, latitude])
            .addTo(map)

        });
    })
}

updateMap();   //function call

//suppose to update at intervals we can write as
//  let interval = 20000;
//  setInterval(updateMap,interval);